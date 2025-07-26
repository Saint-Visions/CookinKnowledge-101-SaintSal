import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Create checkout session for audit service
router.post("/create-checkout", async (req, res) => {
  try {
    const { email, credits = 100 } = req.body;

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.AUDIT_SERVICE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.AUDIT_SERVICE_DOMAIN}/audit-service?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.AUDIT_SERVICE_DOMAIN}/audit-service`,
      metadata: {
        service: "route_audit",
        credits: credits.toString(),
      },
    });

    res.json({
      checkout_url: session.url,
      session_id: session.id,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// Handle successful payment webhook
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"]!;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        endpointSecret,
      );

      if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        // Auto-generate audit token for paid customer
        const token = generateAuditToken();
        const credits = parseInt(session.metadata?.credits || "100");

        // Store in database (implement with Supabase)
        await createAuditTokenForCustomer({
          customerId: session.customer as string,
          email: session.customer_email!,
          token,
          credits,
          subscriptionId: session.subscription as string,
        });

        console.log("✅ Audit service subscription created:", {
          email: session.customer_email,
          token: token.substring(0, 20) + "...",
          credits,
        });
      }

      res.json({ received: true });
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(400).send("Webhook Error");
    }
  },
);

// Generate secure token
function generateAuditToken(): string {
  return (
    "audit_" +
    crypto.randomUUID().replace(/-/g, "") +
    "_" +
    Date.now().toString(36)
  );
}

// Store customer data (implement with your database)
async function createAuditTokenForCustomer(data: {
  customerId: string;
  email: string;
  token: string;
  credits: number;
  subscriptionId: string;
}) {
  // TODO: Implement Supabase storage
  console.log("Creating audit token for customer:", data);
}

export default router;
