import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with live publishable key
const stripePromise = loadStripe(
  "pk_live_51RAfTZFZsXxBWnjQS7I98SC6Bq6PUWb8GsOB6K061FNStjfMgn2khsrSrrqDuZZrkA6vi3rOK5FthNAInW1Bhx4L00aAznwNJv",
);

export async function createCheckoutSession(priceId: string) {
  try {
    console.log("🚀 DIRECT STRIPE CHECKOUT:", priceId);

    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error("Stripe failed to load");
    }

    // Direct Stripe checkout redirect - NO BACKEND NEEDED
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: `${window.location.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/pricing?cancelled=true`,
    });

    if (error) {
      throw new Error(error.message || "Stripe checkout failed");
    }

    // This return won't be reached since redirect happens
    return { url: "redirecting..." };
  } catch (error) {
    console.error("❌ STRIPE ERROR:", error);
    throw error;
  }
}
