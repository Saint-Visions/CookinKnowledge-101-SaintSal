import { loadStripe } from "@stripe/stripe-js";

// 💸 DIRECT STRIPE CHECKOUT - BYPASS AZURE ISSUES
const stripePromise = loadStripe(
  "pk_live_51RAfTZFZsXxBWnjQS7I98SC6Bq6PUWb8GsOB6K061FNStjfMgn2khsrSrrqDuZZrkA6vi3rOK5FthNAInW1Bhx4L00aAznwNJv",
);

// LIVE PRICE IDS FROM YOUR ENVIRONMENT
const LIVE_PRICE_IDS = {
  unlimited: "price_1RINIMFZsXxBWnjQEYxlyUIy", // $27/month
  core: "price_1RLChzFZsXxBWnj0VcveVdDf", // $97/month
  pro: "price_1IRNqvFZsXxBWnj0RlB9d1cP", // $297/month
  fullPro: "price_1IRg90FZsXxBWnj0H3PHnVc6", // $497/month
  custom: "price_1Rh5yFZsXxBWnj0w6p9KY0j", // $1500/month
};

export async function directStripeCheckout(tier: string, userEmail?: string) {
  try {
    console.log("🚀 DIRECT STRIPE CHECKOUT FOR:", tier);

    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error("Stripe failed to load");
    }

    const priceId = LIVE_PRICE_IDS[tier as keyof typeof LIVE_PRICE_IDS];
    if (!priceId) {
      throw new Error(`No price ID found for tier: ${tier}`);
    }

    console.log("💳 REDIRECTING TO STRIPE WITH PRICE ID:", priceId);

    // Direct redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `${window.location.origin}/dashboard?upgrade=success&tier=${tier}`,
      cancelUrl: `${window.location.origin}/pricing?upgrade=cancelled`,
      customerEmail: userEmail,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("🚨 DIRECT STRIPE ERROR:", error);

    // Fallback for custom tier
    if (tier === "custom") {
      window.location.href =
        "mailto:enterprise@saintvision.ai?subject=Custom Enterprise Plan $1500/month";
      return;
    }

    throw error;
  }
}
