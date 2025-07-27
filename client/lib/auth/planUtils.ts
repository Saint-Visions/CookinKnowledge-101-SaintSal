export function planToRole(priceId: string) {
  switch (priceId) {
    case "price_1RLChzFZsXxBWnj0VcveVdDf":
      return "core";
    case "price_1RINIMFZsXxBWnjQEYxlyUIy":
      return "unlimited";
    case "price_1IRNqvFZsXxBWnj0RlB9d1cP":
      return "pro";
    case "price_1IRg90FZsXxBWnj0H3PHnVc6":
      return "white_label";
    case "price_1Rh5yFZsXxBWnj0w6p9KY0j":
      return "custom";
    default:
      return "free";
  }
}

export function getUserFeatures(role: string) {
  const features = {
    free: {
      messages: 2,
      gpt: true,
      companion: false,
      crm: false,
      webhook: false,
      whiteLabel: false,
    },
    unlimited: {
      messages: "unlimited",
      gpt: true,
      companion: true,
      crm: false,
      webhook: false,
      whiteLabel: false,
    },
    core: {
      messages: "unlimited",
      gpt: true,
      companion: true,
      crm: true,
      webhook: false,
      whiteLabel: false,
    },
    pro: {
      messages: "unlimited",
      gpt: true,
      companion: true,
      crm: true,
      webhook: true,
      whiteLabel: false,
    },
    white_label: {
      messages: "unlimited",
      gpt: true,
      companion: true,
      crm: true,
      webhook: true,
      whiteLabel: true,
    },
    custom: {
      messages: "unlimited",
      gpt: true,
      companion: true,
      crm: true,
      webhook: true,
      whiteLabel: true,
      onboarding: true,
    },
  };
  return features[role as keyof typeof features] || features.free;
}
