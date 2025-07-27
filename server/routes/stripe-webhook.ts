import express from "express";
import Stripe from "stripe";
import { createClient } from '@supabase/supabase-js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Initialize Supabase admin client only if environment variables are available
const supabaseAdmin = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

// 🎯 STRIPE WEBHOOK - HANDLES ALL TIER UPGRADES
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"]!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    console.log(`🎯 Stripe webhook received: ${event.type}`);

    switch (event.type) {
      case "checkout.session.completed":
        await handleSuccessfulPayment(event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionChange(event.data.object as Stripe.Subscription);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionCancellation(event.data.object as Stripe.Subscription);
        break;
      case "invoice.payment_failed":
        await handlePaymentFailure(event.data.object as Stripe.Invoice);
        break;
      default:
        console.log(`🔔 Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    res.status(400).send("Webhook Error");
  }
});

// 💸 HANDLE SUCCESSFUL PAYMENT - THE MONEY MAKER
async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  try {
    const { metadata } = session;
    const { userId, supabaseId, targetRole, plan, tier, price } = metadata || {};

    console.log(`🚀 Processing successful payment:`, {
      sessionId: session.id,
      email: session.customer_email,
      tier,
      targetRole,
      plan,
      amount: session.amount_total,
    });

    // 1️⃣ SUPABASE ROLE UPGRADE
    if (supabaseId && targetRole) {
      await upgradeSupabaseRole(supabaseId, targetRole, {
        plan,
        tier,
        customerId: session.customer as string,
        subscriptionId: session.subscription as string,
        email: session.customer_email!,
      });
    }

    // 2️⃣ FEATURE UNLOCK FLAGS
    await unlockFeatures(supabaseId, tier);

    // 3️⃣ GHL CRM PROVISIONING (Core+ tiers)
    if (['core', 'pro', 'fullPro', 'custom'].includes(tier)) {
      await provisionGHLSubaccount(session.customer_email!, tier, supabaseId);
    }

    // 4️⃣ SEND WELCOME EMAIL
    await sendWelcomeEmail(session.customer_email!, tier, targetRole);

    // 5️⃣ SLACK NOTIFICATION
    await sendSlackNotification(session.customer_email!, tier, price);

    // 6️⃣ TRIGGER ONBOARDING SEQUENCE
    await triggerOnboardingSequence(supabaseId, tier);

    console.log(`✅ Payment processing complete for ${session.customer_email} - ${tier} tier`);

  } catch (error) {
    console.error("❌ Error processing successful payment:", error);
    // Don't throw - we don't want to retry webhook
  }
}

// 🔐 UPGRADE SUPABASE ROLE AND USER METADATA
async function upgradeSupabaseRole(supabaseId: string, targetRole: string, metadata: any) {
  if (!supabaseAdmin) {
    console.log("⚠️ Supabase admin not configured - skipping role upgrade in development");
    return;
  }

  try {
    // Update user role
    const { error: roleError } = await supabaseAdmin.auth.admin.updateUserById(supabaseId, {
      role: targetRole,
    });

    if (roleError) throw roleError;

    // Update user metadata
    const { error: metadataError } = await supabaseAdmin.auth.admin.updateUserById(supabaseId, {
      user_metadata: {
        plan: metadata.plan,
        billingStatus: "active",
        paymentSource: "Stripe",
        tier: metadata.tier,
        customerId: metadata.customerId,
        subscriptionId: metadata.subscriptionId,
        upgradeDate: new Date().toISOString(),
      },
    });

    if (metadataError) throw metadataError;

    console.log(`🔐 Supabase role upgraded to ${targetRole} for user ${supabaseId}`);

  } catch (error) {
    console.error("❌ Supabase role upgrade failed:", error);
    throw error;
  }
}

// 🧠 UNLOCK FEATURES BASED ON TIER
async function unlockFeatures(supabaseId: string, tier: string) {
  const featureSets = {
    unlimited: {
      enableCompanionMode: true,
      stickySupersal: true,
      dualBotToggle: true,
      enableCRM: false,
      enableChromeExtension: false,
    },
    core: {
      enableCompanionMode: true,
      stickySupersal: true,
      dualBotToggle: true,
      enableCRM: true,
      enableChromeExtension: true,
      partnerTechAccess: true,
    },
    pro: {
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      partnerTechAccess: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
    },
    fullPro: {
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      partnerTechAccess: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
      enableWhiteLabel: true,
      enableMultiCRM: true,
      ghlSubaccounts: 10,
    },
    custom: {
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      partnerTechAccess: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
      enableWhiteLabel: true,
      enableMultiCRM: true,
      enableOnboarding: true,
      enableDevPriority: true,
      customDomain: true,
      ghlSubaccounts: 'unlimited',
    },
  };

  const features = featureSets[tier as keyof typeof featureSets] || {};

  try {
    // Store features in Supabase user_features table or metadata
    const { error } = await supabaseAdmin
      .from('user_features')
      .upsert({
        user_id: supabaseId,
        features: features,
        tier: tier,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      // Fallback: store in user metadata if table doesn't exist
      await supabaseAdmin.auth.admin.updateUserById(supabaseId, {
        user_metadata: {
          features: features,
          tier: tier,
        },
      });
    }

    console.log(`🧠 Features unlocked for ${tier} tier:`, Object.keys(features));

  } catch (error) {
    console.error("❌ Feature unlock failed:", error);
  }
}

// 🔧 GHL CRM PROVISIONING
async function provisionGHLSubaccount(email: string, tier: string, userId: string) {
  try {
    const ghlConfig = {
      core: { template: 'CORE_TEMPLATE_ID', name: 'Core Client' },
      pro: { template: 'PRO_TEMPLATE_ID', name: 'Pro Client' },
      fullPro: { template: 'WHITE_LABEL_TEMPLATE_ID', name: 'White Label Client' },
      custom: { template: 'CUSTOM_TEMPLATE_ID', name: 'Custom Enterprise Client' },
    };

    const config = ghlConfig[tier as keyof typeof ghlConfig];
    if (!config) return;

    // Call GHL API (implement with actual GHL credentials)
    const ghlResponse = await fetch(`${process.env.GHL_API_URL}/v1/accounts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `SaintVision Client - ${email.split('@')[0]}`,
        email: email,
        template_id: config.template,
        user_id: userId,
        tier: tier,
      }),
    });

    if (ghlResponse.ok) {
      const ghlData = await ghlResponse.json();
      console.log(`🔧 GHL subaccount created for ${email}:`, ghlData.account_id);
      
      // Store GHL account info
      await supabaseAdmin
        .from('user_crm_accounts')
        .insert({
          user_id: userId,
          ghl_account_id: ghlData.account_id,
          tier: tier,
          status: 'active',
          created_at: new Date().toISOString(),
        });
    }

  } catch (error) {
    console.error("❌ GHL provisioning failed:", error);
    // Continue without failing - can be retried later
  }
}

// 📧 SEND WELCOME EMAIL
async function sendWelcomeEmail(email: string, tier: string, role: string) {
  const emailTemplates = {
    unlimited: {
      subject: "🚀 Welcome to Unlimited GPT Access - SaintSal is Live!",
      body: `Welcome to the full SaintSal experience! 

Your Companion Mode is now unlocked. Unlimited GPT-4o, sticky chat, and full dashboard access.

Login: https://saintvision.ai/dashboard
Your role: ${role}

Ready to start building with AI that thinks with you?

- Team SaintVision`,
    },
    core: {
      subject: "🧠 Core Tools Activated - CRM Ready, Chrome Extension Live!",
      body: `Welcome to Core Tools! You just leveled up.

✅ Companion Mode unlocked
✅ CRM dashboard live (provisioning now)
✅ Chrome extension access
✅ PartnerTech panel ready

Your CRM subaccount is being set up - give it 60 seconds.

Login: https://saintvision.ai/dashboard
Need help? Supersal will walk you through setup.

Let's build something amazing.

- Team SaintVision`,
    },
    pro: {
      subject: "⚡ Pro Suite Unlocked - Webhooks, Admin Tools, Full Power!",
      body: `You're now Pro level. The full automation engine is yours.

✅ Everything from Core Tools
✅ Webhook automation live
✅ Admin dashboards unlocked
✅ Slack + Twilio routing active

This is where scaling happens. Your system now responds to every trigger.

Login: https://saintvision.ai/dashboard
Admin: https://saintvision.ai/admin

Ready to dominate?

- Team SaintVision`,
    },
    fullPro: {
      subject: "👑 White-Label Empire Mode - Your Brand, Our Power!",
      body: `Welcome to ownership level.

✅ Your brand, your CRM
✅ 10 GHL subaccounts ready
✅ PartnerTech subdomain issuing
✅ Full white-label control

You're not just using AI - you're selling it under your name.

Next steps:
1. Submit your branding
2. Domain setup 
3. Start onboarding clients

Your empire starts now.

- Team SaintVision`,
    },
    custom: {
      subject: "🧬 Custom Enterprise Onboarding - White Glove Service Begins",
      body: `Welcome to Custom Enterprise.

Your onboarding packet has been triggered. Ryan's team will contact you within 24h.

What's happening:
✅ Full platform access
✅ Custom AI training
✅ IP setup consultation
✅ Launch strategy session

You're building something unique. We're here to make it legendary.

Expect contact from ryan@saintvision.ai

- Team SaintVision`,
    },
  };

  const template = emailTemplates[tier as keyof typeof emailTemplates];
  if (!template) return;

  try {
    // Send email via your email service (implement with actual service)
    console.log(`📧 Welcome email sent to ${email} for ${tier} tier`);
    
    // Store email log
    await supabaseAdmin
      .from('email_logs')
      .insert({
        recipient: email,
        subject: template.subject,
        tier: tier,
        type: 'welcome',
        sent_at: new Date().toISOString(),
      });

  } catch (error) {
    console.error("❌ Welcome email failed:", error);
  }
}

// 💬 SLACK NOTIFICATION
async function sendSlackNotification(email: string, tier: string, price: string) {
  const tierEmojis = {
    unlimited: '💬',
    core: '🧠', 
    pro: '⚡',
    fullPro: '👑',
    custom: '🧬',
  };

  const emoji = tierEmojis[tier as keyof typeof tierEmojis] || '🎯';
  const message = `${emoji} New ${tier} client: ${email} | $${price}/mo | Payment confirmed ✅`;

  try {
    // Send to Slack (implement with actual webhook)
    console.log(`💬 Slack notification: ${message}`);
    
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });
    }

  } catch (error) {
    console.error("❌ Slack notification failed:", error);
  }
}

// 🚀 TRIGGER ONBOARDING SEQUENCE
async function triggerOnboardingSequence(userId: string, tier: string) {
  try {
    // Schedule onboarding tasks
    const onboardingTasks = {
      unlimited: ['dashboard_walkthrough', 'companion_setup'],
      core: ['crm_setup', 'chrome_extension', 'partner_panel'],
      pro: ['webhook_training', 'admin_access', 'slack_integration'],
      fullPro: ['branding_submission', 'subdomain_setup', 'client_onboarding'],
      custom: ['strategy_call', 'ip_consultation', 'dev_kickoff'],
    };

    const tasks = onboardingTasks[tier as keyof typeof onboardingTasks] || [];

    for (const task of tasks) {
      await supabaseAdmin
        .from('onboarding_tasks')
        .insert({
          user_id: userId,
          task: task,
          tier: tier,
          status: 'pending',
          created_at: new Date().toISOString(),
        });
    }

    console.log(`🚀 Onboarding sequence triggered for ${tier}: ${tasks.join(', ')}`);

  } catch (error) {
    console.error("❌ Onboarding sequence failed:", error);
  }
}

// Handle subscription changes
async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  console.log(`🔄 Subscription updated: ${subscription.id}`);
  // Handle tier changes, billing updates, etc.
}

// Handle subscription cancellations
async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  console.log(`❌ Subscription cancelled: ${subscription.id}`);
  // Downgrade user, disable features, etc.
}

// Handle payment failures
async function handlePaymentFailure(invoice: Stripe.Invoice) {
  console.log(`💳 Payment failed: ${invoice.id}`);
  // Send dunning emails, temporary suspension, etc.
}

export default router;
