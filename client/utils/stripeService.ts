import { loadStripe } from '@stripe/stripe-js';
import { pricingTiers } from './pricingTiers';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_stripe_publishable_key_here');

export interface CheckoutData {
  priceId: string;
  tier: string;
  userEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
}

// Stripe Price IDs mapping to our pricing tiers
export const stripePriceIds = {
  unlimited: 'price_1QQunlimited27', // $27/month
  core: 'price_1QQcore97',          // $97/month  
  pro: 'price_1QQpro297',           // $297/month
  fullPro: 'price_1QQfullpro497',   // $497/month
  custom: 'price_1QQcustom1500',    // $1500/month
};

export async function createCheckoutSession(tier: string, userEmail?: string, userId?: string, supabaseId?: string) {
  try {
    // Call our backend to create checkout session
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tier,
        userEmail,
        userId,
        supabaseId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session');
    }

    // Redirect to Stripe Checkout URL
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No checkout URL received');
    }

  } catch (error) {
    console.error('Checkout error:', error);

    // Fallback to direct contact for custom tier
    if (tier === 'custom') {
      window.location.href = 'mailto:enterprise@saintvision.ai?subject=Custom Enterprise Plan&body=I am interested in the Custom Enterprise plan for $1500/month. Please contact me to discuss onboarding and custom implementation.';
      return;
    }

    throw error;
  }
}

export async function handleUpgrade(tier: string, userEmail?: string) {
  try {
    // Get user data from Supabase if available
    let userId, supabaseId;

    // Import supabase client to get current user
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL || '',
      import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      supabaseId = user.id;
      userEmail = userEmail || user.email;
    }

    // Show loading state
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center;">
        <div style="color: white; text-align: center;">
          <div style="font-size: 24px; margin-bottom: 10px;">🚀 Redirecting to Stripe...</div>
          <div style="font-size: 16px;">Preparing your ${pricingTiers[tier as keyof typeof pricingTiers]?.label} upgrade</div>
        </div>
      </div>
    `;
    document.body.appendChild(loadingDiv);

    await createCheckoutSession(tier, userEmail, userId, supabaseId);

  } catch (error) {
    // Remove loading state
    const loadingDiv = document.querySelector('[style*="position: fixed"]');
    if (loadingDiv) {
      loadingDiv.remove();
    }

    // Show error
    alert(`Payment Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
  }
}
