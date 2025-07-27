import { getUserFeatures } from "../auth/planUtils";

export interface OnboardingMessage {
  content: string;
  actions?: Array<{
    label: string;
    action: string;
    url?: string;
  }>;
}

// 🧠 SUPERSAL PLAN DETECTION & ONBOARDING
export function getSupersalOnboardingMessage(
  userTier: string,
  isFirstTime: boolean = false,
): OnboardingMessage {
  const features = getUserFeatures(userTier);

  if (isFirstTime) {
    switch (userTier) {
      case "unlimited":
        return {
          content:
            "🎉 Welcome to Unlimited! I'm SaintSal™, your AI companion. I can now chat unlimited, remember our conversations, and stick around your dashboard. Want me to show you Companion Mode?",
          actions: [
            { label: "Enable Companion Mode", action: "enable_companion" },
            { label: "Tour Dashboard", action: "dashboard_tour" },
          ],
        };

      case "core":
        return {
          content:
            "🔥 CORE TOOLS UNLOCKED! I'm your GOTTA GUY™ now. CRM access granted, Partner dashboard ready, Chrome extension activated. Want me to set up your first CRM workflow?",
          actions: [
            { label: "Setup CRM", action: "setup_crm" },
            { label: "Install Chrome Extension", action: "chrome_extension" },
            { label: "Partner Dashboard", action: "partner_dashboard" },
          ],
        };

      case "pro":
        return {
          content:
            "⚡ PRO SUITE ACTIVATED! Admin dashboards unlocked, webhook triggers ready, team management enabled. I can now route escalations to Slack/Twilio. Ready to scale?",
          actions: [
            { label: "Setup Admin Dashboard", action: "admin_dashboard" },
            { label: "Configure Webhooks", action: "webhook_setup" },
            { label: "Team Management", action: "team_setup" },
          ],
        };

      case "white_label":
        return {
          content:
            "👑 EMPIRE MODE! Full white-label activated. 10 GHL subaccounts ready, custom branding unlocked, revenue sharing enabled. Let's build your AI empire!",
          actions: [
            { label: "White-Label Setup", action: "white_label_setup" },
            { label: "GHL Subaccounts", action: "ghl_setup" },
            { label: "Revenue Dashboard", action: "revenue_dashboard" },
          ],
        };

      case "custom":
        return {
          content:
            "🚀 CUSTOM ENTERPRISE! Full onboarding initiated. Custom domain setup, enterprise integrations, dedicated support activated. Your concierge AI experience begins now.",
          actions: [
            { label: "Custom Domain Setup", action: "custom_domain" },
            { label: "Enterprise Integrations", action: "enterprise_setup" },
            { label: "Dedicated Support", action: "dedicated_support" },
          ],
        };

      default:
        return {
          content:
            "👋 Hi! I'm SaintSal™. You're on the free plan with 2 trial messages. Want to unlock unlimited conversations and Companion Mode?",
          actions: [
            {
              label: "Upgrade to Unlimited",
              action: "upgrade",
              url: "/pricing",
            },
            { label: "Learn More", action: "learn_more", url: "/about" },
          ],
        };
    }
  }

  // Returning user messages
  return {
    content: getReturningUserMessage(userTier, features),
  };
}

function getReturningUserMessage(userTier: string, features: any): string {
  if (features.whiteLabel) {
    return "👑 Welcome back to Empire Mode! Your white-label platform is running. Need help with subaccounts or revenue tracking?";
  }

  if (features.webhook) {
    return "⚡ Pro Suite ready! Admin tools loaded, webhooks active. What do you want to build today?";
  }

  if (features.crm) {
    return "🔥 Core Tools active! CRM connected, partner dashboard ready. What's the mission today?";
  }

  if (features.companion) {
    return "✨ Companion Mode ready! I'm here to help with unlimited conversations. What's on your mind?";
  }

  return "👋 Welcome back! I'm ready to help. You have 2 trial messages remaining.";
}

// 🎯 FEATURE ENABLEMENT LOGIC
export function enablePlanFeatures(userTier: string) {
  const features = getUserFeatures(userTier);

  return {
    enableCompanionMode: features.companion,
    enableCRMPanel: features.crm,
    enableAdminDashboard: features.webhook,
    enableWhiteLabelSetup: features.whiteLabel,
    enableCustomOnboarding: features.onboarding,
    unlimitedMessages: features.messages === "unlimited",
  };
}

// 🚀 TRIGGER PLAN-SPECIFIC ACTIONS
export function triggerPlanActions(action: string, userTier: string) {
  console.log(`🎯 Triggering action: ${action} for tier: ${userTier}`);

  switch (action) {
    case "enable_companion":
      // Enable sticky Supersal across dashboard
      localStorage.setItem("companion_mode", "enabled");
      window.dispatchEvent(new CustomEvent("enableCompanionMode"));
      break;

    case "setup_crm":
      // Navigate to CRM setup
      window.location.href = "/crm?setup=true";
      break;

    case "chrome_extension":
      // Open Chrome extension install
      window.open(
        "https://chrome.google.com/webstore/detail/saintvision-ai",
        "_blank",
      );
      break;

    case "admin_dashboard":
      // Navigate to admin dashboard
      window.location.href = "/dashboard?admin=true";
      break;

    case "webhook_setup":
      // Open webhook configuration
      window.location.href = "/dashboard?section=webhooks";
      break;

    case "white_label_setup":
      // Navigate to white-label configuration
      window.location.href = "/dashboard?section=white-label";
      break;

    case "upgrade":
      // Navigate to pricing
      window.location.href = "/pricing";
      break;

    default:
      console.log("Unknown action:", action);
  }
}
