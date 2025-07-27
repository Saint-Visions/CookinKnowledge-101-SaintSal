import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

// Map price IDs to tiers
const priceToTier = {
  'price_1RINIMFZsXxBWnjQEYxlyUIy': 'unlimited',
  'price_1RLChzFZsXxBWnj0VcveVdDf': 'core',
  'price_1IRNqvFZsXxBWnj0RlB9d1cP': 'pro',
  'price_1IRg90FZsXxBWnj0H3PHnVc6': 'fullPro',
  'price_1Rh5yFZsXxBWnj0w6p9KY0j': 'custom',
};

export async function createCheckoutSession(priceId: string) {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser();

    const tier = priceToTier[priceId as keyof typeof priceToTier];

    if (!tier) {
      throw new Error('Invalid price ID');
    }

    // Call Netlify function
    const res = await fetch('/.netlify/functions/stripe-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tier,
        userEmail: user?.email,
        userId: user?.id,
        supabaseId: user?.id,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || `Failed to create checkout session: ${res.statusText}`);
    }

    return await res.json(); // { url: 'https://checkout.stripe.com/...' }
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}
