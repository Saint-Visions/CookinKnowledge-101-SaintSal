import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

// Initialize Supabase admin client
const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

// Price ID mappings
const STRIPE_PRICE_IDS = {
  unlimited: "price_1RINIMFZsXxBWnjQEYxlyUIy", // $27/month
  core: "price_1RLChzFZsXxBWnj0VcveVdDf", // $97/month
  pro: "price_1IRNqvFZsXxBWnj0RlB9d1cP", // $297/month
  fullPro: "price_1IRg90FZsXxBWnj0H3PHnVc6", // $497/month
  custom: "price_1Rh5yFZsXxBWnj0w6p9KY0j", // $1500/month
};

export const handler = async (event: any) => {
  // Handle CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { tier, userEmail, userId, supabaseId } = JSON.parse(event.body);

    // Get price ID for tier
    const priceId = STRIPE_PRICE_IDS[tier as keyof typeof STRIPE_PRICE_IDS];

    if (!priceId) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Invalid pricing tier" }),
      };
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: userEmail,
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: `${process.env.FRONTEND_URL || "https://saintvisionai.netlify.app"}/checkout-success?tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || "https://saintvisionai.netlify.app"}/pricing?upgrade=cancelled`,
      metadata: {
        userId: userId || "",
        supabaseId: supabaseId || "",
        tier: tier,
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url,
      }),
    };
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Failed to create checkout session" }),
    };
  }
};
