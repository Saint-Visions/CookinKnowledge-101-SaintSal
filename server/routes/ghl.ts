import express from "express";

const router = express.Router();

// GHL API endpoints
const GHL_BASE_URL = "https://rest.gohighlevel.com/v1";

// Get API credentials from environment
const getGHLHeaders = () => ({
  Authorization: `Bearer ${process.env.GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
});

// Get contacts from GHL
router.get("/contacts", async (req, res) => {
  try {
    const response = await fetch(
      `${GHL_BASE_URL}/contacts/?locationId=${process.env.GHL_LOCATION_ID}`,
      {
        method: "GET",
        headers: getGHLHeaders(),
      },
    );

    if (!response.ok) {
      throw new Error(
        `GHL API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching GHL contacts:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch contacts from GoHighLevel" });
  }
});

// Get opportunities/pipeline from GHL
router.get("/opportunities", async (req, res) => {
  try {
    const response = await fetch(
      `${GHL_BASE_URL}/opportunities/?locationId=${process.env.GHL_LOCATION_ID}`,
      {
        method: "GET",
        headers: getGHLHeaders(),
      },
    );

    if (!response.ok) {
      throw new Error(
        `GHL API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching GHL opportunities:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch opportunities from GoHighLevel" });
  }
});

// Get conversations/messages from GHL
router.get("/conversations", async (req, res) => {
  try {
    const response = await fetch(
      `${GHL_BASE_URL}/conversations/?locationId=${process.env.GHL_LOCATION_ID}`,
      {
        method: "GET",
        headers: getGHLHeaders(),
      },
    );

    if (!response.ok) {
      throw new Error(
        `GHL API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching GHL conversations:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch conversations from GoHighLevel" });
  }
});

// Get calendar appointments from GHL
router.get("/appointments", async (req, res) => {
  try {
    const response = await fetch(
      `${GHL_BASE_URL}/appointments/?locationId=${process.env.GHL_LOCATION_ID}`,
      {
        method: "GET",
        headers: getGHLHeaders(),
      },
    );

    if (!response.ok) {
      throw new Error(
        `GHL API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching GHL appointments:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch appointments from GoHighLevel" });
  }
});

// Create new contact in GHL
router.post("/contacts", async (req, res) => {
  try {
    const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: "POST",
      headers: getGHLHeaders(),
      body: JSON.stringify({
        ...req.body,
        locationId: process.env.GHL_LOCATION_ID,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `GHL API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error creating GHL contact:", error);
    res.status(500).json({ error: "Failed to create contact in GoHighLevel" });
  }
});

// Health check endpoint
router.get("/status", (req, res) => {
  const hasRequiredEnvVars = !!(
    process.env.GHL_API_KEY &&
    process.env.GHL_LOCATION_ID &&
    process.env.GHL_LOCATION_KEY
  );

  res.json({
    status: "connected",
    hasCredentials: hasRequiredEnvVars,
    locationId: process.env.GHL_LOCATION_ID ? "configured" : "missing",
    timestamp: new Date().toISOString(),
  });
});

export default router;
