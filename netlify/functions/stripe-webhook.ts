import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Initialize Supabase admin client
const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export const handler = async (event: any) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const sig = event.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !endpointSecret) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing signature or webhook secret' }),
    };
  }

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid signature' }),
    };
  }

  try {
    // Handle checkout completion
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object as Stripe.Checkout.Session;

      console.log('🎯 Checkout completed:', session.id);

      // Extract user info from metadata
      const userId = session.metadata?.userId;
      const supabaseId = session.metadata?.supabaseId;
      const tier = session.metadata?.tier;

      if (!supabaseId) {
        console.error('No supabaseId in session metadata');
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing user ID' }),
        };
      }

      // Determine role based on tier
      let role = 'free';
      switch (tier) {
        case 'unlimited':
          role = 'unlimited';
          break;
        case 'core':
          role = 'core';
          break;
        case 'pro':
          role = 'pro';
          break;
        case 'fullPro':
          role = 'white_label';
          break;
        case 'custom':
          role = 'custom';
          break;
      }

      // Update user in Supabase
      const { error } = await supabaseAdmin.auth.admin.updateUserById(supabaseId, {
        user_metadata: {
          plan: role,
          tier: tier,
          stripe_customer_id: session.customer,
          stripe_subscription_id: session.subscription,
          upgraded_at: new Date().toISOString(),
        },
      });

      if (error) {
        console.error('Failed to update user:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to update user' }),
        };
      }

      console.log(`✅ User ${supabaseId} upgraded to ${role} plan`);

      // Optional: Send notification to Slack or trigger onboarding
      // TODO: Add Slack notification here
      // TODO: Add Supersal onboarding trigger here

    }

    // Handle subscription updates
    if (stripeEvent.type === 'customer.subscription.updated') {
      const subscription = stripeEvent.data.object as Stripe.Subscription;
      console.log('🔄 Subscription updated:', subscription.id);
      
      // Handle subscription tier changes here if needed
    }

    // Handle failed payments
    if (stripeEvent.type === 'invoice.payment_failed') {
      const invoice = stripeEvent.data.object as Stripe.Invoice;
      console.log('❌ Payment failed:', invoice.id);
      
      // Handle failed payment - potentially downgrade user or send alerts
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };

  } catch (error) {
    console.error('Webhook handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Webhook handler failed' }),
    };
  }
};
