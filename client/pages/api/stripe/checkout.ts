import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY || '');

// Initialize Supabase admin client
const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || ''
);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { priceId } = JSON.parse(req.body);

  try {
    // Get current user
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No authorization header' });
    }

    const { data: { user }, error } = await supabaseAdmin.auth.getUser(authHeader.replace('Bearer ', ''));
    
    if (error || !user) {
      return res.status(401).json({ error: 'Invalid user token' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: user.email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173'}/checkout-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173'}/pricing`,
      metadata: {
        user_id: user.id,
      },
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
