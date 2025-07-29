import { Builder, builder } from "@builder.io/react";
import React from "react";

// 🔧 HYBRID BUILDER.IO SYSTEM
// Your app works 100% independently, Builder.io is OPTIONAL enhancement

// Your API credentials
const BUILDER_API_KEY = "87668970595f4c0da06657961632739e";

// Initialize Builder.io (graceful fallback if unavailable)
try {
  Builder.init(BUILDER_API_KEY);
  console.log("✅ Builder.io connected successfully");
} catch (error) {
  console.warn("⚠️ Builder.io unavailable - using local content only");
}

// 🛡️ SAFE CONTENT FETCHER
export async function getBuilderContent(
  modelName: string,
  fallbackContent: any = null,
) {
  try {
    // Try to fetch from Builder.io
    const content = await builder
      .get(modelName, {
        apiKey: BUILDER_API_KEY,
        options: {
          includeRefs: true,
        },
      })
      .toPromise();

    if (content) {
      console.log(`✅ Loaded ${modelName} from Builder.io`);
      return content;
    }
  } catch (error) {
    console.warn(`⚠️ Builder.io failed for ${modelName}, using fallback`);
  }

  // Always return fallback if Builder.io fails
  return fallbackContent;
}

// 🎯 CONTENT MODELS FOR YOUR APP
export const ContentModels = {
  HERO_SECTION: "hero-section",
  PRICING_TIERS: "pricing-tiers",
  FEATURES: "features",
  TESTIMONIALS: "testimonials",
  ANNOUNCEMENTS: "announcements",
} as const;

// 🔄 LIVE CONTENT HOOK (optional enhancement)
export function useBuilderContent(modelName: string, fallback: any) {
  const [content, setContent] = React.useState(fallback);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;

    const loadContent = async () => {
      setIsLoading(true);
      const builderContent = await getBuilderContent(modelName, fallback);

      if (mounted) {
        setContent(builderContent);
        setIsLoading(false);
      }
    };

    loadContent();

    return () => {
      mounted = false;
    };
  }, [modelName]);

  return { content, isLoading, isFromBuilder: content !== fallback };
}

// 🛡️ SAFE IMAGE LOADER
interface BuilderImageProps {
  builderSrc?: string;
  localFallback: string;
  alt: string;
  className?: string;
}

export function BuilderImage({
  builderSrc,
  localFallback,
  alt,
  className,
}: BuilderImageProps) {
  const [imgSrc, setImgSrc] = React.useState(localFallback);

  React.useEffect(() => {
    if (builderSrc) {
      // Test if Builder.io image loads
      const img = new Image();
      img.onload = () => setImgSrc(builderSrc);
      img.onerror = () => setImgSrc(localFallback);
      img.src = builderSrc;
    }
  }, [builderSrc, localFallback]);

  return React.createElement("img", { src: imgSrc, alt, className });
}

export default Builder;
