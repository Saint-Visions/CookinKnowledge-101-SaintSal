import { loadStripe } from "@stripe/stripe-js";
import { pricingTiers } from "./pricingTiers";

// 💸 INITIALIZE STRIPE WITH LIVE CREDENTIALS
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_live_51RAfTZFZsXxBWnjQS7I98SC6Bq6PUWb8GsOB6K061FNStjfMgn2khsrSrrqDuZZrkA6vi3rOK5FthNAInW1Bhx4L00aAznwNJv",
);

export interface CheckoutData {
  priceId: string;
  tier: string;
  userEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
}

// Stripe Price IDs mapping to our pricing tiers
export const stripePriceIds = {
  unlimited: "price_1QQunlimited27", // $27/month
  core: "price_1QQcore97", // $97/month
  pro: "price_1QQpro297", // $297/month
  fullPro: "price_1QQfullpro497", // $497/month
  custom: "price_1QQcustom1500", // $1500/month
};

export async function createCheckoutSession(
  tier: string,
  userEmail?: string,
  userId?: string,
  supabaseId?: string,
) {
  try {
    console.log("��� CREATING CHECKOUT SESSION:", {
      tier,
      userEmail,
      userId,
      supabaseId,
    });

    // 🚀 USE AZURE ENDPOINT - NO MORE FLY.DEV BREAKS!
    const response = await fetch(
      "https://saintsal-webhook-core.azurewebsites.net/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tier,
          userEmail,
          userId,
          supabaseId,
        }),
      },
    );

    console.log(
      "🌐 AZURE RESPONSE STATUS:",
      response.status,
      response.statusText,
    );

    const data = await response.json();
    console.log("📊 AZURE RESPONSE DATA:", data);

    if (!response.ok) {
      console.error("❌ AZURE ENDPOINT ERROR:", data);
      throw new Error(
        data.error ||
          `Azure API Error: ${response.status} ${response.statusText}`,
      );
    }

    // Redirect to Stripe Checkout URL
    if (data.url) {
      console.log("✅ REDIRECTING TO STRIPE:", data.url);
      window.location.href = data.url;
    } else {
      console.error("❌ NO CHECKOUT URL RECEIVED:", data);
      throw new Error("No checkout URL received from Azure endpoint");
    }
  } catch (error) {
    console.error("Checkout error:", error);

    // Fallback to direct contact for custom tier
    if (tier === "custom") {
      window.location.href =
        "mailto:enterprise@saintvision.ai?subject=Custom Enterprise Plan&body=I am interested in the Custom Enterprise plan for $1500/month. Please contact me to discuss onboarding and custom implementation.";
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
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL || "",
      import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      supabaseId = user.id;
      userEmail = userEmail || user.email;
    }

    // Show loading state
    const loadingDiv = document.createElement("div");
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
    alert(
      `Payment Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`,
    );
  }
}
