// 🎯 BUILDER.IO CONFIGURATION
// Complete control - your app works independently, Builder.io enhances when available

export const builderConfig = {
  // Your credentials
  apiKey: '87668970595f4c0da06657961632739e',
  projectId: '2559eb7feb7d41b4b85a15133feb50c9',
  spaceName: 'Saint Capistano Space',
  
  // Feature flags
  enabled: true,
  fallbackMode: true, // Always use local content as fallback
  
  // Content models you can manage in Builder.io
  models: {
    heroSection: 'hero-section',
    pricingTiers: 'pricing-tiers',
    features: 'features',
    testimonials: 'testimonials',
    announcements: 'announcements',
    blogPosts: 'blog-posts'
  },
  
  // Local fallbacks (your app never breaks)
  fallbacks: {
    heroSection: {
      title: "SaintVision AI",
      subtitle: "Responsible Intelligence",
      description: "Revolutionizing industries through patented HACP™ technology, faith-guided innovation, and AI solutions that change lives.",
      ctaText: "Start Cookin",
      ctaLink: "/warroom"
    },
    
    pricingTiers: [
      {
        name: "Unlimited",
        price: "$27",
        features: ["Unlimited everything", "HACP™ technology", "Priority support"]
      },
      {
        name: "Core", 
        price: "$97",
        features: ["Core features", "Business tools", "Standard support"]
      },
      {
        name: "Pro",
        price: "$297", 
        features: ["Professional suite", "Advanced AI", "Premium support"]
      }
    ],
    
    announcements: {
      message: "🎉 New AI features now available!",
      link: "/features",
      type: "info"
    }
  }
};

// 🛡️ SAFE GETTER FUNCTIONS
export function getBuilderApiKey(): string {
  return import.meta.env.VITE_BUILDER_PUBLIC_KEY || builderConfig.apiKey;
}

export function isBuilderEnabled(): boolean {
  return builderConfig.enabled && !!getBuilderApiKey();
}

export function getContentFallback(modelName: string): any {
  return builderConfig.fallbacks[modelName as keyof typeof builderConfig.fallbacks] || null;
}

export default builderConfig;
