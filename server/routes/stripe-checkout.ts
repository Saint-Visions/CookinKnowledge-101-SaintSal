import express from "express";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

// Initialize Supabase admin client only if environment variables are available and valid
function isValidSupabaseConfig(url?: string, key?: string): boolean {
  if (!url || !key) return false;
  try {
    new URL(url);
    return url.startsWith('https://') && !url.includes('your_') && !url.includes('_here') && key.length > 20 && !key.includes('your_');
  } catch {
    return false;
  }
}

const supabaseAdmin = isValidSupabaseConfig(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  ? createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  : null;

// 💸 SAINTSAL™ STRIPE PRICE IDS - LIVE PRODUCTION VALUES
const STRIPE_PRICE_IDS = {
  unlimited: "price_1RINIMFZsXxBWnjQEYxlyUIy", // $27/month - LIVE ID
  core: "price_1RLChzFZsXxBWnj0VcveVdDf", // $97/month - LIVE ID
  pro: "price_1IRNqvFZsXxBWnj0RlB9d1cP", // $297/month - LIVE ID
  fullPro: "price_1IRg90FZsXxBWnj0H3PHnVc6", // $497/month - LIVE ID
  custom: "price_1Rh5yFZsXxBWnj0w6p9KY0j", // $1500/month - LIVE ID
};

// 🧠 TIER CONFIGURATION WITH EXACT LOGIC
const TIER_CONFIG = {
  unlimited: {
    role: "unlimited",
    plan: "Unlimited GPT Access",
    price: 27,
    features: {
      enableGPT: true,
      enableCompanionMode: true,
      stickySupersal: true,
      dualBotToggle: true,
      enableCRM: false,
      enableChromeExtension: false,
      enableWebhooks: false,
      enableAdminDash: false,
      enablePartnerTech: false,
    },
  },
  core: {
    role: "core",
    plan: "Core Tools",
    price: 97,
    features: {
      enableGPT: true,
      enableCompanionMode: true,
      stickySupersal: true,
      dualBotToggle: true,
      enableCRM: true,
      enableChromeExtension: true,
      enablePartnerTech: true,
      enableWebhooks: false,
      enableAdminDash: false,
      enableWhiteLabel: false,
    },
  },
  pro: {
    role: "pro",
    plan: "Pro Suite",
    price: 297,
    features: {
      enableGPT: true,
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      enablePartnerTech: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
      enableWhiteLabel: false,
    },
  },
  fullPro: {
    role: "white_label",
    plan: "Full White-Label",
    price: 497,
    features: {
      enableGPT: true,
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      enablePartnerTech: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
      enableWhiteLabel: true,
      enableMultiCRM: true,
      ghlSubaccounts: 10,
    },
  },
  custom: {
    role: "custom",
    plan: "Custom Enterprise",
    price: 1500,
    features: {
      enableGPT: true,
      enableCompanionMode: true,
      stickySupersal: true,
      enableCRM: true,
      enableChromeExtension: true,
      enablePartnerTech: true,
      enableWebhooks: true,
      enableAdminDash: true,
      enableTwilio: true,
      enableSlackAlerts: true,
      enableWhiteLabel: true,
      enableMultiCRM: true,
      enableOnboarding: true,
      enableDevPriority: true,
      customDomain: true,
      ghlSubaccounts: "unlimited",
    },
  },
};

// 🔐 CREATE CHECKOUT SESSION
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { tier, userEmail, userId, supabaseId } = req.body;

    // Validate tier
    if (!TIER_CONFIG[tier as keyof typeof TIER_CONFIG]) {
      return res.status(400).json({ error: "Invalid pricing tier" });
    }

    const config = TIER_CONFIG[tier as keyof typeof TIER_CONFIG];
    const priceId = STRIPE_PRICE_IDS[tier as keyof typeof STRIPE_PRICE_IDS];

    if (!priceId) {
      return res
        .status(400)
        .json({ error: "Price ID not configured for tier" });
    }

    // 🎯 CREATE STRIPE CHECKOUT SESSION
    const session = await stripe.checkout.sessions.create({
      customer_email: userEmail,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.FRONTEND_URL}/dashboard?upgrade=success&tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing?upgrade=cancelled`,
      metadata: {
        userId: userId || "",
        supabaseId: supabaseId || "",
        targetRole: config.role,
        plan: config.plan,
        tier: tier,
        price: config.price.toString(),
      },
    });

    console.log(`🔐 Stripe checkout created for ${tier} tier:`, {
      sessionId: session.id,
      email: userEmail,
      price: config.price,
      role: config.role,
    });

    res.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("❌ Stripe checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// 🎯 UPGRADE EXISTING CUSTOMER
router.post("/upgrade-subscription", async (req, res) => {
  try {
    const { customerId, newTier, userId } = req.body;

    const config = TIER_CONFIG[newTier as keyof typeof TIER_CONFIG];
    const newPriceId =
      STRIPE_PRICE_IDS[newTier as keyof typeof STRIPE_PRICE_IDS];

    if (!config || !newPriceId) {
      return res.status(400).json({ error: "Invalid tier for upgrade" });
    }

    // Get customer's current subscription
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      return res.status(400).json({ error: "No active subscription found" });
    }

    const subscription = subscriptions.data[0];

    // Update subscription to new price
    await stripe.subscriptions.update(subscription.id, {
      items: [
        {
          id: subscription.items.data[0].id,
          price: newPriceId,
        },
      ],
      metadata: {
        userId: userId,
        targetRole: config.role,
        plan: config.plan,
        tier: newTier,
        upgradeType: "tier_change",
      },
    });

    console.log(`⬆️ Subscription upgraded:`, {
      customerId,
      newTier,
      newRole: config.role,
      newPrice: config.price,
    });

    res.json({ success: true, message: "Subscription upgraded successfully" });
  } catch (error) {
    console.error("❌ Subscription upgrade error:", error);
    res.status(500).json({ error: "Failed to upgrade subscription" });
  }
});

// 📊 GET CUSTOMER BILLING INFO
router.get("/customer/:customerId", async (req, res) => {
  try {
    const { customerId } = req.params;

    const customer = await stripe.customers.retrieve(customerId);
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
    });

    res.json({
      customer,
      subscriptions: subscriptions.data,
    });
  } catch (error) {
    console.error("❌ Customer retrieval error:", error);
    res.status(500).json({ error: "Failed to retrieve customer info" });
  }
});

export default router;
