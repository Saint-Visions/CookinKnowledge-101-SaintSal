import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import ghlRoutes from "./routes/ghl";
import aiRoutes from "./routes/ai";
import embeddingsRoutes from "./routes/embeddings";
import auditServiceRoutes from "./routes/audit-service";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

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

  return app;
}
