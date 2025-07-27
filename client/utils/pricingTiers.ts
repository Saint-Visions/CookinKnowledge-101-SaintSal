export const pricingTiers = {
  free: {
    label: "Free Trial",
    price: 0,
    features: [
      "2 GPT-4o messages",
      "No memory, no save history",
      "Only Client Mode access",
    ],
    limitations: {
      chatLimit: 2,
      noCRM: true,
      noCompanion: true,
      noUpload: true,
    },
    autoRedirectAfter: "2nd message → /upgrade",
  },

  unlimited: {
    label: "Unlimited",
    price: 27,
    features: [
      "Unlimited GPT-4o messaging",
      "Access to chat history",
      "Supersal™ Companion Mode unlocked",
      "Sticky Supersal across dashboard",
    ],
    unlocks: {
      companionMode: true,
      saveHistory: true,
      stickyBot: true,
    },
    gating: {
      supabaseRole: "unlimited",
    },
  },

  core: {
    label: "Core Tools",
    price: 97,
    features: [
      "Everything in Unlimited",
      "CRM Access via GHL",
      "Partner dashboard",
      "Chrome Extension (basic)",
    ],
    unlocks: {
      crmEmbed: true,
      partnerTechAccess: true,
      chromeBasic: true,
    },
    gating: {
      supabaseRole: "core",
      ghlProvisioning: true,
    },
  },

  pro: {
    label: "Pro Suite",
    price: 297,
    features: [
      "Everything in Core",
      "Admin Dashboards",
      "Webhook Triggers (Stripe, Lead, Schedule)",
      "Internal Escalation Routing (Slack/Twilio)",
    ],
    unlocks: {
      adminUI: true,
      webhookEngine: true,
      internalAlerts: true,
    },
    gating: {
      supabaseRole: "pro",
      webhookSetup: true,
    },
  },

  fullPro: {
    label: "Full White-Label",
    price: 497,
    features: [
      "Everything in Pro",
      "10 GHL Subaccounts (white-labeled)",
      "Custom branding",
      "PartnerTech.ai subdomain issued",
    ],
    unlocks: {
      whiteLabel: true,
      multiCRM: true,
      subdomain: true,
    },
    gating: {
      supabaseRole: "fullPro",
      domainSetup: true,
    },
  },

  custom: {
    label: "Custom Enterprise",
    price: 1500,
    depositRequired: true,
    features: [
      "Full onboarding",
      "Custom domain setup",
      "Teams/Zapier/Slack integrations",
      "Launch strategy, IP registration",
    ],
    unlocks: {
      onboarding: true,
      devPriority: true,
      multiAgentConfig: true,
    },
    gating: {
      supabaseRole: "custom",
      manualApproval: true,
    },
  },
};

// Supersal response mapping for tier questions
export const supersalResponses = {
  freeQuestion: "You get 2 messages to test GPT-4o — then you'll be prompted to upgrade. Companion Mode and memory are locked.",
  unlimitedQuestion: "That's Unlimited. Full GPT-4o messaging, memory, history, and Companion Mode unlocked. It's the true experience.",
  crmQuestion: "That's at the Core Tools tier ($97). You get GHL CRM access, Partner dashboard, and Chrome extension basics.",
  automationQuestion: "You'll want the Pro Suite ($297) — it unlocks admin dashboards, webhooks, and real-time Slack/Twilio escalation.",
  whiteLabelQuestion: "That's Full White-Label at $497. You get 10 CRM accounts, your own branding, and PartnerTech issued under your domain.",
  customQuestion: "Absolutely. We offer Custom builds starting at $1500 deposit — including domain setup, onboarding, IP structuring, and priority dev.",
};

// Supabase role mapping
export const supabaseRoles = {
  free: "trial",
  unlimited: "unlimited", // $27
  core: "core", // $97  
  pro: "pro", // $297
  fullPro: "fullPro", // $497
  custom: "custom", // manual approval
};

// Feature access based on pricing tiers (updated from old structure)
export const getFeatureAccess = (userTier: string) => {
  const accessMap: Record<string, string[]> = {
    'search': ['unlimited', 'core', 'pro', 'fullPro', 'custom'],
    'companion': ['unlimited', 'core', 'pro', 'fullPro', 'custom'],
    'workspace': ['core', 'pro', 'fullPro', 'custom'], 
    'crm': ['core', 'pro', 'fullPro', 'custom'],
    'export': ['pro', 'fullPro', 'custom'],
    'import': ['pro', 'fullPro', 'custom'],
    'audit': ['pro', 'fullPro', 'custom'],
    'admin': ['pro', 'fullPro', 'custom'],
    'whitelabel': ['fullPro', 'custom'],
    'webhooks': ['pro', 'fullPro', 'custom'],
    'multicrm': ['fullPro', 'custom'],
    'subdomain': ['fullPro', 'custom'],
    'onboarding': ['custom'],
    'priority': ['custom']
  };
  
  return accessMap;
};

// Get free message limit for trial users
export const getFreeMessageLimit = (): number => {
  return pricingTiers.free.limitations.chatLimit;
};

// Get upgrade prompt based on current tier and requested feature
export const getUpgradePrompt = (currentTier: string, requestedFeature: string) => {
  if (currentTier === 'free') {
    return "Upgrade to Unlimited ($27) to unlock messaging, history, and Companion Mode.";
  }
  if (currentTier === 'unlimited' && ['workspace', 'crm'].includes(requestedFeature)) {
    return "Upgrade to Core Tools ($97) to unlock CRM, Partner dashboard, and workspace features.";
  }
  if (['unlimited', 'core'].includes(currentTier) && ['export', 'import', 'admin', 'webhooks'].includes(requestedFeature)) {
    return "Upgrade to Pro Suite ($297) to unlock admin features, webhooks, and data export/import.";
  }
  if (['unlimited', 'core', 'pro'].includes(currentTier) && ['whitelabel', 'multicrm', 'subdomain'].includes(requestedFeature)) {
    return "Upgrade to Full White-Label ($497) to unlock white-label branding and multi-CRM management.";
  }
  if (requestedFeature === 'onboarding' || requestedFeature === 'priority') {
    return "Contact us for Custom Enterprise ($1500) with full onboarding and priority development.";
  }
  return "Contact support for custom enterprise features.";
};
