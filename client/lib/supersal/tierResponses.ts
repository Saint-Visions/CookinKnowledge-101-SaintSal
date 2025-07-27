// 🧠 SUPERSAL™ TIER RESPONSE SYSTEM
// Elite, humble-flex, emotionally intelligent, decisive tone

export interface SupersalResponse {
  greeting: string;
  capabilities: string;
  upgrade_prompt?: string;
  tone: "trial" | "unlocked" | "power" | "elite" | "empire" | "custom";
}

export function getSupersalResponse(
  userTier: string,
  isNewUpgrade: boolean = false,
): SupersalResponse {
  if (isNewUpgrade) {
    // 🎉 UPGRADE CELEBRATION RESPONSES
    switch (userTier) {
      case "unlimited":
        return {
          greeting:
            "🎉 Welcome to unlimited territory. I'm SaintSal™, your AI companion - now fully unlocked. No more limits, just pure execution.",
          capabilities:
            "I can now stick around your dashboard, remember our conversations, and help you build. Companion Mode is live.",
          tone: "unlocked",
        };

      case "core":
        return {
          greeting:
            "🔥 Core Tools activated. I'm your GOTTA GUY™ now. CRM connected, Chrome extension ready, partner dashboard unlocked.",
          capabilities:
            "I can manage your pipeline, track leads, and help you scale. This is where businesses get built.",
          tone: "power",
        };

      case "pro":
        return {
          greeting:
            "⚡ Pro Suite online. Admin tools activated, webhook triggers live, escalation routing ready. We're in scale mode now.",
          capabilities:
            "I can route to Slack, trigger Twilio, manage your team. Full business automation at your command.",
          tone: "elite",
        };

      case "white_label":
        return {
          greeting:
            "👑 Empire Mode activated. 10 GHL subaccounts provisioned, white-label branding live, revenue sharing enabled. Let's build your AI empire.",
          capabilities:
            "I can onboard your clients, manage your subaccounts, handle your brand. You're now an AI business owner.",
          tone: "empire",
        };

      case "custom":
        return {
          greeting:
            "🚀 Custom Enterprise initiated. White-glove onboarding begins now. IP integration, custom domain, dedicated dev stack - the full treatment.",
          capabilities:
            "I'm your dedicated AI concierge. Custom integrations, enterprise contracts, revenue guarantees. Ryan's team is standing by.",
          tone: "custom",
        };

      default:
        return {
          greeting:
            "👋 Welcome to SaintVisionAI. I'm SaintSal™, your AI companion.",
          capabilities:
            "You're on the free trial with 2 GPT messages. Ready to unlock the full experience?",
          upgrade_prompt: "Plans start at $27/month for unlimited access.",
          tone: "trial",
        };
    }
  }

  // 🔄 RETURNING USER RESPONSES
  switch (userTier) {
    case "free":
      return {
        greeting:
          "👋 Back for more? You've got 2 trial messages to explore what's possible.",
        capabilities:
          "I'm running in Client Mode only. Want to see what Companion Mode can do?",
        upgrade_prompt:
          "Unlock unlimited conversations and Companion Mode for $27/month.",
        tone: "trial",
      };

    case "unlimited":
      return {
        greeting: "✨ Companion Mode ready. What are we building today?",
        capabilities:
          "Unlimited GPT access, memory enabled, sticky AI across your dashboard. I'm here to execute.",
        tone: "unlocked",
      };

    case "core":
      return {
        greeting:
          "🔥 Core Tools active. CRM connected, pipeline ready. What's the mission?",
        capabilities:
          "Full CRM access, Chrome extension live, partner dashboard operational. Let's grow your business.",
        tone: "power",
      };

    case "pro":
      return {
        greeting:
          "⚡ Pro Suite loaded. Admin tools online, webhooks active. Ready to scale?",
        capabilities:
          "Team management, escalation routing, advanced analytics. Your business automation command center.",
        tone: "elite",
      };

    case "white_label":
      return {
        greeting:
          "👑 Empire Mode operational. Your white-label platform is running. Need help with subaccounts or revenue tracking?",
        capabilities:
          "10 GHL subaccounts managed, custom branding active, PartnerTech integration live. Your AI business empire awaits.",
        tone: "empire",
      };

    case "custom":
      return {
        greeting:
          "🚀 Custom Enterprise active. Dedicated support online, custom integrations ready. How can I assist your operation today?",
        capabilities:
          "Full enterprise stack, custom domain live, dedicated dev support. White-glove service activated.",
        tone: "custom",
      };

    default:
      return {
        greeting:
          "👋 I'm SaintSal™. You're on the free plan with 2 trial messages.",
        capabilities:
          "Limited to basic GPT interactions. Want to unlock the full dashboard experience?",
        upgrade_prompt:
          "Upgrade to Unlimited for $27/month and get Companion Mode, unlimited conversations, and memory.",
        tone: "trial",
      };
  }
}

// 🎯 TIER-SPECIFIC ACTION RESPONSES
export function getSupersalActionResponse(
  action: string,
  userTier: string,
): string {
  const responses = {
    limit_hit: {
      free: "Trial limit reached. Ready to unlock unlimited conversations? Upgrade to $27/month and keep the momentum going.",
      unlimited: "No limits here. Keep going.",
      core: "Unlimited access active. Let's keep building.",
      pro: "Pro level - no restrictions. Full throttle.",
      white_label: "Empire Mode - unlimited everything. Scale away.",
      custom:
        "Custom Enterprise - no limits, white-glove support available 24/7.",
    },
    crm_access: {
      free: "CRM access requires Core Tools ($97/month). Want to unlock your complete business dashboard?",
      unlimited:
        "CRM requires Core Tools upgrade. Ready to unlock your sales pipeline?",
      core: "CRM active. Let's manage your pipeline and grow your business.",
      pro: "Advanced CRM + webhooks operational. Full business automation ready.",
      white_label: "Multi-CRM management active. Manage your empire.",
      custom:
        "Enterprise CRM + custom integrations. Dedicated support available.",
    },
    upgrade_suggestion: {
      free: "From exploring to executing - Unlimited ($27) unlocks Companion Mode and memory. Core Tools ($97) adds CRM. Pro Suite ($297) adds automation.",
      unlimited:
        "Ready for business growth? Core Tools ($97) unlocks CRM, pipeline management, and Chrome extension.",
      core: "Scaling up? Pro Suite ($297) adds webhooks, team management, and admin tools.",
      pro: "Building an empire? White-Label ($497) gives you 10 subaccounts and custom branding.",
      white_label:
        "Need custom solutions? Enterprise ($1500) includes full onboarding and dedicated dev support.",
      custom:
        "You're at the top tier. Need additional custom development? Let's talk.",
    },
  };

  return (
    responses[action as keyof typeof responses]?.[userTier] ||
    "I'm here to help. What do you need?"
  );
}

// 🔄 UPGRADE SUCCESS FLOW
export function getUpgradeSuccessActions(tier: string) {
  const actions = {
    unlimited: [
      "Enable Companion Mode",
      "Show me around the dashboard",
      "Start unlimited conversations",
    ],
    core: [
      "Set up CRM integration",
      "Install Chrome extension",
      "Tour partner dashboard",
    ],
    pro: ["Configure webhooks", "Set up team management", "Access admin tools"],
    white_label: [
      "Set up subaccounts",
      "Configure white-label branding",
      "Access revenue dashboard",
    ],
    custom: [
      "Schedule onboarding call",
      "Set up custom domain",
      "Contact dedicated support",
    ],
  };

  return actions[tier as keyof typeof actions] || ["Get started", "Learn more"];
}
