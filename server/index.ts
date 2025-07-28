import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import ghlRoutes from "./routes/ghl";
import aiRoutes from "./routes/ai";
import embeddingsRoutes from "./routes/embeddings";
import auditServiceRoutes from "./routes/audit-service";
import stripeCheckoutRoutes from "./routes/stripe-checkout";
import stripeWebhookRoutes from "./routes/stripe-webhook";
import voiceRoutes from "./routes/voice";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API root endpoint
  app.get("/api", (_req, res) => {
    res.json({
      name: "SaintVisionAI API",
      version: "1.0.0",
      status: "operational",
      endpoints: {
        ping: "/api/ping",
        demo: "/api/demo",
        ai: "/api/ai/*",
        ghl: "/api/ghl/*",
        embeddings: "/api/embeddings/*",
        auditService: "/api/audit-service/*",
        stripe: "/api/stripe/*",
        voice: "/api/voice/*",
      },
      documentation: "https://saintvision.ai/docs",
    });
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // GoHighLevel API routes
  app.use("/api/ghl", ghlRoutes);

  // Dual AI System routes
  app.use("/api/ai", aiRoutes);

  // Supersal™ Knowledge Base routes
  app.use("/api/embeddings", embeddingsRoutes);

  // Route Auditing Service - Token-based premium feature
  app.use("/api/audit-service", auditServiceRoutes);

  // 💸 SAINTSAL™ STRIPE PAYMENT SYSTEM - THE MONEY MAKER!
  app.use("/api/stripe", stripeCheckoutRoutes);
  app.use("/api/stripe", stripeWebhookRoutes);

  // 🎤 SAINTSAL™ VOICE SYSTEM - TWILIO INTEGRATION
  app.use("/api/voice", voiceRoutes);

  return app;
}
