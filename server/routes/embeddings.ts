import express from "express";

const router = express.Router();

// Supersal™ AI Embedding Configuration
const EMBEDDING_CONFIG = {
  apiKey:
    process.env.OPENAI_EMBEDDING_KEY || "1afcfcb8868a4a93b4a8a319845c9e04",
  model: "text-embedding-3-small",
  azureSearchEndpoint: process.env.AZURE_SEARCH_ENDPOINT,
  azureSearchKey: process.env.AZURE_SEARCH_KEY,
  indexName: "supersal-knowledge-base",
};

// Knowledge Domain Tags for Supersal™ Training
const KNOWLEDGE_DOMAINS = {
  universal:
    "SaintVision branding, platform features, pricing, general business",
  athena:
    "Healthcare AI - medical SOPs, charting documentation, healthcare workflows",
  ebytech:
    "Finance/Lending AI - financial rules, lending protocols, compliance",
  partnertech:
    "CRM/Automation AI - client routing, automation flows, operational playbooks",
  svtlegal:
    "Legal AI - law firm processes, legal contracts, regulatory guidelines",
  supersal:
    "Core Supersal™ AI training, dual-mode operation, escalation logic",
};

// Create embeddings for knowledge base content
router.post("/create", async (req, res) => {
  try {
    const { text, domain, documentType, source } = req.body;

    // Create embedding using OpenAI
    const embeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${EMBEDDING_CONFIG.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: EMBEDDING_CONFIG.model,
          input: text,
        }),
      },
    );

    const embeddingData = await embeddingResponse.json();
    const embedding = embeddingData.data[0].embedding;

    // Prepare document for Azure Cognitive Search
    const document = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: text,
      embedding: embedding,
      domain: domain || "universal",
      documentType: documentType || "general",
      source: source || "manual",
      timestamp: new Date().toISOString(),
      tags: [domain, documentType, source].filter(Boolean),
    };

    // Index in Azure Cognitive Search (if configured)
    if (
      EMBEDDING_CONFIG.azureSearchEndpoint &&
      EMBEDDING_CONFIG.azureSearchKey
    ) {
      await indexDocument(document);
    }

    res.json({
      success: true,
      document: {
        id: document.id,
        domain: document.domain,
        documentType: document.documentType,
        source: document.source,
      },
      embeddingDimension: embedding.length,
      message: "Knowledge successfully embedded into Supersal™ brain",
    });
  } catch (error) {
    console.error("Supersal™ Embedding error:", error);
    res.status(500).json({ error: "Failed to create embedding" });
  }
});

// Search knowledge base with semantic similarity
router.post("/search", async (req, res) => {
  try {
    const { query, domain, mode, topK = 5 } = req.body;

    // Create query embedding
    const queryEmbeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${EMBEDDING_CONFIG.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: EMBEDDING_CONFIG.model,
          input: query,
        }),
      },
    );

    const queryEmbeddingData = await queryEmbeddingResponse.json();
    const queryEmbedding = queryEmbeddingData.data[0].embedding;

    // Search Azure Cognitive Search (if configured)
    let searchResults = [];
    if (
      EMBEDDING_CONFIG.azureSearchEndpoint &&
      EMBEDDING_CONFIG.azureSearchKey
    ) {
      searchResults = await searchKnowledgeBase(
        queryEmbedding,
        domain,
        mode,
        topK,
      );
    }

    // Format results for Supersal™ grounding
    const groundingContext = searchResults.map((result) => ({
      content: result.content,
      domain: result.domain,
      source: result.source,
      relevanceScore: result.score,
      documentType: result.documentType,
    }));

    res.json({
      query,
      domain,
      mode,
      resultsFound: searchResults.length,
      groundingContext,
      knowledgeDomains: KNOWLEDGE_DOMAINS,
      searchMetadata: {
        embedding_model: EMBEDDING_CONFIG.model,
        topK,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Supersal™ Knowledge Search error:", error);
    res.status(500).json({ error: "Knowledge search failed" });
  }
});

// Bulk ingestion for comprehensive training
router.post("/ingest-bulk", async (req, res) => {
  try {
    const { documents } = req.body;

    if (!Array.isArray(documents)) {
      return res.status(400).json({ error: "Documents must be an array" });
    }

    const results = [];

    for (const doc of documents) {
      try {
        // Create embedding for each document
        const embeddingResponse = await fetch(
          "https://api.openai.com/v1/embeddings",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${EMBEDDING_CONFIG.apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: EMBEDDING_CONFIG.model,
              input: doc.content,
            }),
          },
        );

        const embeddingData = await embeddingResponse.json();
        const embedding = embeddingData.data[0].embedding;

        const processedDoc = {
          id: `bulk-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          content: doc.content,
          embedding: embedding,
          domain: doc.domain || "universal",
          documentType: doc.documentType || "training",
          source: doc.source || "bulk-ingest",
          timestamp: new Date().toISOString(),
          tags: [doc.domain, doc.documentType, doc.source].filter(Boolean),
        };

        // Index in Azure Cognitive Search
        if (
          EMBEDDING_CONFIG.azureSearchEndpoint &&
          EMBEDDING_CONFIG.azureSearchKey
        ) {
          await indexDocument(processedDoc);
        }

        results.push({
          success: true,
          id: processedDoc.id,
          domain: processedDoc.domain,
        });
      } catch (docError) {
        results.push({
          success: false,
          error: docError.message,
          content: doc.content.substring(0, 100) + "...",
        });
      }
    }

    const successCount = results.filter((r) => r.success).length;
    const failureCount = results.filter((r) => !r.success).length;

    res.json({
      message: "Bulk ingestion completed",
      totalDocuments: documents.length,
      successCount,
      failureCount,
      results,
      knowledgeBase: "Supersal™ Universal Training Repository",
    });
  } catch (error) {
    console.error("Supersal™ Bulk Ingestion error:", error);
    res.status(500).json({ error: "Bulk ingestion failed" });
  }
});

// Helper function to index document in Azure Cognitive Search
async function indexDocument(document) {
  if (
    !EMBEDDING_CONFIG.azureSearchEndpoint ||
    !EMBEDDING_CONFIG.azureSearchKey
  ) {
    return; // Skip if not configured
  }

  try {
    const response = await fetch(
      `${EMBEDDING_CONFIG.azureSearchEndpoint}/indexes/${EMBEDDING_CONFIG.indexName}/docs/index?api-version=2023-07-01-Preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": EMBEDDING_CONFIG.azureSearchKey,
        },
        body: JSON.stringify({
          value: [
            {
              "@search.action": "upload",
              ...document,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Azure Search indexing failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Azure Search indexing error:", error);
    throw error;
  }
}

// Helper function to search knowledge base
async function searchKnowledgeBase(queryEmbedding, domain, mode, topK) {
  if (
    !EMBEDDING_CONFIG.azureSearchEndpoint ||
    !EMBEDDING_CONFIG.azureSearchKey
  ) {
    return []; // Return empty if not configured
  }

  try {
    // Build search filter based on domain and mode
    let filter = "";
    if (domain && domain !== "universal") {
      filter = `domain eq '${domain}'`;
    }
    if (mode === "companion") {
      filter += filter ? " and " : "";
      filter += `documentType eq 'internal' or documentType eq 'sop' or documentType eq 'technical'`;
    }

    const searchBody = {
      search: "*",
      vectors: [
        {
          value: queryEmbedding,
          fields: "embedding",
          k: topK,
        },
      ],
      select: "content,domain,source,documentType,tags",
      top: topK,
    };

    if (filter) {
      searchBody.filter = filter;
    }

    const response = await fetch(
      `${EMBEDDING_CONFIG.azureSearchEndpoint}/indexes/${EMBEDDING_CONFIG.indexName}/docs/search?api-version=2023-07-01-Preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": EMBEDDING_CONFIG.azureSearchKey,
        },
        body: JSON.stringify(searchBody),
      },
    );

    if (!response.ok) {
      throw new Error(`Azure Search query failed: ${response.statusText}`);
    }

    const searchResults = await response.json();
    return searchResults.value.map((result) => ({
      content: result.content,
      domain: result.domain,
      source: result.source,
      documentType: result.documentType,
      tags: result.tags,
      score: result["@search.score"],
    }));
  } catch (error) {
    console.error("Azure Search query error:", error);
    return [];
  }
}

// Get knowledge base statistics
router.get("/stats", async (req, res) => {
  try {
    const stats = {
      knowledgeDomains: Object.keys(KNOWLEDGE_DOMAINS).length,
      embeddingModel: EMBEDDING_CONFIG.model,
      indexName: EMBEDDING_CONFIG.indexName,
      domains: KNOWLEDGE_DOMAINS,
      azureSearchConfigured: !!(
        EMBEDDING_CONFIG.azureSearchEndpoint && EMBEDDING_CONFIG.azureSearchKey
      ),
      capabilities: [
        "Universal Knowledge Base Ingestion",
        "Strategic Companion Knowledge Groups",
        "Hybrid Vector-Keyword Retrieval",
        "Dual-Mode Operation Support",
        "Real-time Knowledge Updates",
      ],
    };

    res.json(stats);
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({ error: "Failed to get stats" });
  }
});

export default router;
