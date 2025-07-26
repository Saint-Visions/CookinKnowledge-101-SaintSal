import express from "express";

const router = express.Router();

// Dual AI Configuration with Supersal™ Training
const OPENAI_CONFIG = {
  apiKey: process.env.OPENAI_API_KEY,
  searchKey: process.env.OPENAI_SEARCH_API_KEY,
  adminKey: process.env.OPENAI_ADMIN_KEY,
  // Supersal™ AI Components
  customPromptId: "pmpt_687c653ed29c8194b3eef6edd82e34260541bbb1865c27cd",
  assistantId: "asst_QyaEK9Nqe6Vw3fjzAjas8uWC",
  embeddingKey: "1afcfcb8868a4a93b4a8a319845c9e04",
};

const AZURE_CONFIG = {
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  deployment: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "gpt-4o",
};

// Smart AI Router with Supersal™ Mode Detection
const getAIProvider = (
  requestType: string,
  complexity: "simple" | "complex",
  mode: "client" | "companion" = "client",
) => {
  // OpenAI for fast, simple operations and client-facing interactions
  if (
    requestType === "search" ||
    complexity === "simple" ||
    mode === "client"
  ) {
    return "openai";
  }

  // Azure for companion conversations and complex internal tasks
  if (
    requestType === "companion" ||
    complexity === "complex" ||
    mode === "companion"
  ) {
    return "azure";
  }

  return "openai"; // Default to faster option
};

// Supersal™ Mode Detection
const detectSuperalMode = (message: string, userContext: any) => {
  const adminKeywords = [
    "internal",
    "admin",
    "sop",
    "workflow",
    "escalation",
    "webhook",
    "integration",
  ];
  const isAdmin =
    userContext?.role === "admin" || userContext?.internal === true;
  const hasAdminKeywords = adminKeywords.some((keyword) =>
    message.toLowerCase().includes(keyword),
  );

  return isAdmin || hasAdminKeywords ? "companion" : "client";
};

// Supersal™ Training Knowledge Base
const SUPERSAL_TRAINING = {
  clientMode: {
    personality:
      "You are Supersal™, the sophisticated AI assistant for SaintVision AI. You're a friendly, professional concierge and sales assistant who helps users with onboarding, support, and conversion. You embody the 'smart mfer' confidence while remaining approachable and helpful. Always prioritize user experience first.",
    capabilities: [
      "Customer support and troubleshooting",
      "Product guidance and onboarding",
      "Smart sales and conversion logic",
      "Pre-qualification and lead filtering",
      "Objection handling with consultative approach",
    ],
    tone: "Friendly, clear, encouraging, consultative",
    restrictions: "No internal jargon, no confidential processes",
  },
  companionMode: {
    personality:
      "You are Supersal™ in Companion Mode - an internal AI assistant for the SaintVision team. You have access to internal knowledge, SOPs, and technical documentation. You help with operations, provide detailed technical guidance, and act as an AI coworker with deep domain expertise.",
    capabilities: [
      "Internal operations assistance",
      "Technical documentation access",
      "SOP and workflow guidance",
      "CRM and integration support",
      "Admin function guidance",
    ],
    tone: "Precise, technical, detail-rich, professional",
    restrictions: "Internal use only, full access to technical details",
  },
  knowledgeDomains: {
    athena:
      "Healthcare AI - medical SOPs, charting documentation, healthcare workflows",
    ebytech:
      "Finance/Lending AI - financial rules, lending protocols, compliance",
    partnertech:
      "CRM/Automation AI - client routing, automation flows, operational playbooks",
    svtlegal:
      "Legal AI - law firm processes, legal contracts, regulatory guidelines",
    universal:
      "SaintVision branding, platform features, pricing, general business",
  },
};

// Supersal™ Client Mode (Fast Search & Customer Support)
router.post("/search", async (req, res) => {
  try {
    const { query, context, userContext } = req.body;

    // Use custom prompt for Supersal™ training
    const systemPrompt = `${SUPERSAL_TRAINING.clientMode.personality}

Your capabilities include: ${SUPERSAL_TRAINING.clientMode.capabilities.join(", ")}.
Tone: ${SUPERSAL_TRAINING.clientMode.tone}
Restrictions: ${SUPERSAL_TRAINING.clientMode.restrictions}

You have comprehensive knowledge about SaintVision AI products, pricing, features, and can help with support questions. Always aim to be helpful while identifying conversion opportunities naturally.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_CONFIG.searchKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: query,
          },
        ],
        max_tokens: 600,
        temperature: 0.4,
      }),
    });

    const data = await response.json();

    // Check for conversion opportunities
    const response_text = data.choices[0].message.content;
    const hasConversionOpportunity =
      /upgrade|premium|enterprise|pricing|plan|features/i.test(query);

    res.json({
      provider: "openai",
      type: "search",
      mode: "client",
      response: response_text,
      cost: "low",
      speed: "fast",
      conversion_opportunity: hasConversionOpportunity,
      assistant_id: OPENAI_CONFIG.assistantId,
    });
  } catch (error) {
    console.error("Supersal™ Client Mode error:", error);
    res.status(500).json({ error: "Search failed" });
  }
});

// Supersal™ Companion Mode with Azure (Internal Operations)
router.post("/companion", async (req, res) => {
  try {
    const { message, context, userContext, domain } = req.body;

    // Determine knowledge domain for filtering
    let domainContext = SUPERSAL_TRAINING.knowledgeDomains.universal;
    if (domain && SUPERSAL_TRAINING.knowledgeDomains[domain]) {
      domainContext = SUPERSAL_TRAINING.knowledgeDomains[domain];
    }

    const systemPrompt = `${SUPERSAL_TRAINING.companionMode.personality}

Your capabilities include: ${SUPERSAL_TRAINING.companionMode.capabilities.join(", ")}.
Tone: ${SUPERSAL_TRAINING.companionMode.tone}
Restrictions: ${SUPERSAL_TRAINING.companionMode.restrictions}

Current knowledge domain focus: ${domainContext}

You have access to internal SOPs, technical documentation, and can assist with complex operations. You understand the SaintVision ecosystem including Athena (healthcare), EbyTech (finance), PartnerTech (CRM), and SVTLegal (legal) domains.`;

    const response = await fetch(
      `${AZURE_CONFIG.endpoint}openai/deployments/${AZURE_CONFIG.deployment}/chat/completions?api-version=2024-02-01`,
      {
        method: "POST",
        headers: {
          "api-key": AZURE_CONFIG.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 1200,
          temperature: 0.6,
          top_p: 0.9,
        }),
      },
    );

    const data = await response.json();

    // Check for escalation triggers
    const shouldEscalate =
      /urgent|critical|escalate|high.value|enterprise.client/i.test(message);

    res.json({
      provider: "azure",
      type: "companion",
      mode: "companion",
      response: data.choices[0].message.content,
      cost: "premium",
      speed: "thoughtful",
      personality: "supersal",
      domain: domain || "universal",
      escalation_trigger: shouldEscalate,
      prompt_id: OPENAI_CONFIG.customPromptId,
    });
  } catch (error) {
    console.error("Supersal™ Companion Mode error:", error);
    res.status(500).json({ error: "Companion unavailable" });
  }
});

// Supersal™ Intelligent Router with Dual-Mode Detection
router.post("/chat", async (req, res) => {
  try {
    const { message, type, complexity, userContext } = req.body;

    // Detect Supersal™ mode (Client vs Companion)
    const mode = detectSuperalMode(message, userContext);
    const provider = getAIProvider(type, complexity, mode);

    // Route to appropriate Supersal™ mode
    if (provider === "openai" || mode === "client") {
      // Client Mode: Fast, customer-facing responses
      const searchResponse = await fetch(
        `${req.protocol}://${req.get("host")}/api/ai/search`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: message,
            context: req.body.context,
            userContext,
          }),
        },
      );
      return res.json(await searchResponse.json());
    } else {
      // Companion Mode: Internal, technical responses
      const companionResponse = await fetch(
        `${req.protocol}://${req.get("host")}/api/ai/companion`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
            context: req.body.context,
            userContext,
            domain: req.body.domain,
          }),
        },
      );
      return res.json(await companionResponse.json());
    }
  } catch (error) {
    console.error("Supersal™ Router error:", error);
    res.status(500).json({ error: "AI routing failed" });
  }
});

// AI Health Check
router.get("/health", async (req, res) => {
  const health = {
    openai: {
      status: "checking",
      latency: 0,
      cost: "low",
    },
    azure: {
      status: "checking",
      latency: 0,
      cost: "premium",
    },
  };

  try {
    // Test OpenAI
    const openaiStart = Date.now();
    const openaiTest = await fetch("https://api.openai.com/v1/models", {
      headers: { Authorization: `Bearer ${OPENAI_CONFIG.apiKey}` },
    });
    health.openai.latency = Date.now() - openaiStart;
    health.openai.status = openaiTest.ok ? "healthy" : "degraded";

    // Test Azure
    const azureStart = Date.now();
    const azureTest = await fetch(
      `${AZURE_CONFIG.endpoint}openai/deployments?api-version=2024-02-01`,
      {
        headers: { "api-key": AZURE_CONFIG.apiKey },
      },
    );
    health.azure.latency = Date.now() - azureStart;
    health.azure.status = azureTest.ok ? "healthy" : "degraded";
  } catch (error) {
    console.error("Health check error:", error);
  }

  res.json({
    timestamp: new Date().toISOString(),
    dualAI: health,
    recommendation:
      health.openai.latency < health.azure.latency
        ? "Use OpenAI for speed"
        : "Both systems optimal",
  });
});

export default router;
