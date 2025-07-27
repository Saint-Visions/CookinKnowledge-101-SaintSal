import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import {
  getFeatureAccess,
  getFreeMessageLimit,
  getUpgradePrompt,
} from "@/utils/pricingTiers";
import { getUserFeatures } from "@/lib/auth/planUtils";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  userTier: "free" | "unlimited" | "core" | "pro" | "fullPro" | "custom";
  messageCount: number;
  features: Record<string, boolean>;
  hasAccess: (feature: string) => boolean;
  incrementMessageCount: () => boolean;
  getUpgradeMessage: (feature: string) => string;
  refreshUserData: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signUp: (
    email: string,
    password: string,
    name: string,
  ) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<{ error?: any }>;
  signInWithGitHub: () => Promise<{ error?: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [userTier, setUserTier] = useState<
    "free" | "unlimited" | "core" | "pro" | "fullPro" | "custom"
  >("free");
  const [messageCount, setMessageCount] = useState(0);
  const [features, setFeatures] = useState<Record<string, boolean>>({});

  // 🔐 EXTRACT USER DATA HELPER WITH PLAN LOGIC
  const extractUserData = (session: Session | null) => {
    if (!session?.user) return { tier: "free", features: {} };

    const userData = session.user.user_metadata || {};

    // Extract tier from multiple possible sources (Stripe webhook updates this)
    const tier =
      userData.tier || userData.subscription_tier || userData.plan || "free";

    // 🎯 USE PLAN UTILS FOR CONSISTENT FEATURE MAPPING
    const planFeatures = getUserFeatures(tier);

    // Merge with any custom features from user metadata
    const userFeatures = { ...planFeatures, ...(userData.features || {}) };

    console.log("🔐 User data extracted with planUtils:", {
      email: session.user.email,
      tier,
      planFeatures,
      finalFeatures: Object.keys(userFeatures),
      plan: userData.plan,
      billingStatus: userData.billingStatus,
    });

    return { tier, features: userFeatures };
  };

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      const { tier, features: userFeatures } = extractUserData(session);
      setUserTier(tier);
      setFeatures(userFeatures);

      // Load message count from localStorage for free users
      if (tier === "free" && session?.user?.id) {
        const savedCount =
          localStorage.getItem(`messageCount_${session.user.id}`) || "0";
        setMessageCount(parseInt(savedCount));
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      const { tier, features: userFeatures } = extractUserData(session);
      setUserTier(tier);
      setFeatures(userFeatures);

      // Load message count from localStorage for free users
      if (tier === "free" && session?.user?.id) {
        const savedCount =
          localStorage.getItem(`messageCount_${session.user.id}`) || "0";
        setMessageCount(parseInt(savedCount));
      }
      setLoading(false);

      // Log authentication events
      if (event === "SIGNED_IN") {
        console.log("🚀 User signed in:", session?.user?.email, "Tier:", tier);
      } else if (event === "TOKEN_REFRESHED") {
        console.log("🔄 Token refreshed, checking for tier updates");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          tier: "free",
          plan: "Free Trial",
          billingStatus: "trial",
          features: {
            enableGPT: false, // Limited to 2 messages
            messageCap: 2,
            enableCompanionMode: false,
            enableCRM: false,
          },
        },
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUserTier("free");
    setMessageCount(0);
    setFeatures({});
  };

  // 🧠 ACCESS CONTROL - TIER + FEATURE FLAG BASED
  const hasAccess = (feature: string): boolean => {
    // Check if feature is explicitly enabled in user features
    if (features[feature] !== undefined) {
      return features[feature];
    }

    // Fallback to tier-based access
    const accessMap = getFeatureAccess(userTier);
    return accessMap[feature]?.includes(userTier) || false;
  };

  // 📊 MESSAGE COUNTING FOR FREE USERS
  const incrementMessageCount = (): boolean => {
    if (userTier !== "free") return false;

    const newCount = messageCount + 1;
    setMessageCount(newCount);

    if (user?.id) {
      localStorage.setItem(`messageCount_${user.id}`, newCount.toString());
    }

    return newCount >= getFreeMessageLimit();
  };

  // 💬 UPGRADE PROMPTS
  const getUpgradeMessage = (feature: string): string => {
    return getUpgradePrompt(userTier, feature);
  };

  // 🔄 REFRESH USER DATA (Called after successful payments)
  const refreshUserData = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;

      if (user) {
        const { tier, features: userFeatures } = extractUserData({
          user,
        } as Session);
        setUserTier(tier);
        setFeatures(userFeatures);
        console.log("🔄 User data refreshed after payment:", {
          tier,
          features: Object.keys(userFeatures),
          plan: user.user_metadata?.plan,
        });
      }
    } catch (error) {
      console.error("❌ Failed to refresh user data:", error);
    }
  };

  // 🔐 OAUTH PROVIDERS
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/warroom`,
      },
    });
    return { error };
  };

  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/warroom`,
      },
    });
    if (error) {
      console.error("GitHub OAuth error:", error);
    }
    return { error };
  };

  const value = {
    user,
    session,
    loading,
    userTier,
    messageCount,
    features,
    hasAccess,
    incrementMessageCount,
    getUpgradeMessage,
    refreshUserData,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    signInWithGitHub,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
