import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { SaintGPTMain } from "@/components/SaintGPTMain";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";

export function Search() {
  const navigate = useNavigate();
  const {
    user,
    loading,
    userTier,
    messageCount,
    incrementMessageCount,
    getUpgradeMessage,
  } = useAuth();
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    // Check if free user has reached message limit
    if (userTier === "free" && messageCount >= 2) {
      setLimitReached(true);
    }
  }, [userTier, messageCount]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[hsl(var(--gold))]/20 border-t-[hsl(var(--gold))] rounded-full animate-spin" />
      </div>
    );
  }

  // Redirect to auth if not signed in
  if (!user) {
    navigate("/auth");
    return null;
  }

  // Show upgrade prompt if free user has reached limit
  if (limitReached) {
    return (
      <div className="min-h-screen bg-black text-white">
        <GlobalHeader />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[hsl(var(--gold))] mb-4">
                Free Trial Complete
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                You've used your 2 free messages. Upgrade to continue with
                unlimited AI search.
              </p>
              <div className="bg-gray-900 border border-[hsl(var(--gold))]/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-[hsl(var(--gold))] mb-3">
                  Upgrade to Unlimited ($27)
                </h3>
                <ul className="text-left space-y-2 text-gray-300">
                  <li>✓ Unlimited GPT-4o messaging</li>
                  <li>✓ Access to chat history</li>
                  <li>✓ Supersal™ Companion Mode unlocked</li>
                  <li>✓ Sticky Supersal across dashboard</li>
                </ul>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/pricing")}
                  className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold py-3 px-8 rounded-lg text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"
                >
                  Upgrade Now
                </button>
                <div>
                  <button
                    onClick={() => navigate("/warroom")}
                    className="text-gray-400 hover:text-white underline"
                  >
                    Back to WarRoom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GlobalFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <GlobalHeader />
      <div className="pt-16">
        <SaintGPTMain />
      </div>
      <GlobalFooter />
    </div>
  );
}

export default Search;
