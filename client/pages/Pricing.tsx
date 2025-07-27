import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Check,
  Crown,
  Zap,
  Building2,
  Shield,
  Globe,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Calendar,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import { useAuth } from "../hooks/useAuth";
import VoiceInterface from "../components/VoiceInterface";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const { user } = useAuth();

  const plans = [
    {
      name: "Free",
      subtitle: "Try the Cookin'",
      icon: MessageSquare,
      tier: "free",
      price: isYearly ? "$0" : "$0",
      period: "/month",
      description: "Perfect for exploring SaintSal™ capabilities and getting a taste of the magic",
      features: [
        "2 GPT-4o messages (trial)",
        "No memory, no save history",
        "Client Mode only",
        "Community support",
        "Web interface only",
        "Basic AI interactions",
      ],
      buttonText: "Start Free",
      color: "white",
      popular: false,
      action: () => window.location.href = '/signup'
    },
    {
      name: "Unlimited",
      subtitle: "Base Magic",
      icon: Zap,
      tier: "unlimited",
      price: isYearly ? "$270" : "$27",
      period: isYearly ? "/year" : "/month",
      description: "Where the magic starts flowing - unlimited conversations with SaintSal™",
      features: [
        "Unlimited GPT-4o messaging",
        "Access to chat history & memory",
        "Supersal™ Companion Mode unlocked",
        "Sticky Supersal across dashboard",
        "Dual bot toggle functionality",
        "Email support",
        "Cross-session memory",
      ],
      buttonText: "Get Unlimited",
      color: "blue",
      popular: false,
      action: () => {
        console.log('🚀 UNLIMITED BUTTON CLICKED - REDIRECTING TO STRIPE');
        window.location.href = 'mailto:ryan@saintvision.ai?subject=Unlimited Plan ($27/month)&body=I want to subscribe to the Unlimited plan for $27/month. Please send me the payment link!';
        setLoading(null);
      }
    },
    {
      name: "Core Tools",
      subtitle: "Your GOTTA GUY™",
      icon: Crown,
      tier: "core",
      price: isYearly ? "$970" : "$97",
      period: isYearly ? "/year" : "/month",
      description: "WHERE ALL THE MAGIC UNLOCKS! Your complete business AI companion",
      features: [
        "Everything in Unlimited",
        "CRM Access via GHL integration",
        "Partner dashboard with analytics",
        "Chrome Extension (basic tier)",
        "PartnerTech.ai integration",
        "Priority support queue",
        "Custom AI memory bank",
        "🔥 CRM MAGIC UNLOCKED",
      ],
      buttonText: "Unlock Core Tools ✨",
      color: "white",
      popular: true,
      highlight: "Most businesses choose this plan",
      action: () => {
        console.log('🔥 CORE TOOLS BUTTON CLICKED - REDIRECTING TO EMAIL');
        window.location.href = 'mailto:ryan@saintvision.ai?subject=Core Tools Plan ($97/month)&body=I want to subscribe to the Core Tools plan for $97/month. Please send me the payment link immediately!';
        setLoading(null);
      }
    },
    {
      name: "Pro Suite",
      subtitle: "Scale Mode",
      icon: Building2,
      tier: "pro",
      price: isYearly ? "$2970" : "$297",
      period: isYearly ? "/year" : "/month",
      description: "For teams ready to dominate markets with enterprise-grade AI automation",
      features: [
        "Everything in Core Tools",
        "Admin Dashboards & Analytics",
        "Webhook Triggers (Stripe, Lead, Schedule)",
        "Internal Escalation Routing (Slack/Twilio)",
        "Advanced performance analytics",
        "Team management & permissions",
        "SLA guarantees & uptime monitoring",
        "Priority technical support",
      ],
      buttonText: "Go Pro",
      color: "purple",
      popular: false,
      action: () => {
        console.log('⚡ PRO SUITE BUTTON CLICKED - REDIRECTING TO EMAIL');
        window.location.href = 'mailto:ryan@saintvision.ai?subject=Pro Suite Plan ($297/month)&body=I want to subscribe to the Pro Suite plan for $297/month. Please send me the payment link now!';
        setLoading(null);
      }
    },
    {
      name: "Full White-Label",
      subtitle: "Empire Mode",
      icon: Globe,
      tier: "fullPro",
      price: isYearly ? "$4970" : "$497",
      period: isYearly ? "/year" : "/month",
      description: "Your own branded SaintVisionAI empire - build and scale your AI business",
      features: [
        "Everything in Pro Suite",
        "10 GHL Subaccounts (white-labeled)",
        "Custom branding & domain setup",
        "PartnerTech.ai subdomain issued",
        "Revenue sharing program access",
        "Multi-CRM management dashboard",
        "24/7 dedicated support channel",
        "Custom feature development queue",
      ],
      buttonText: "Build Empire",
      color: "green",
      popular: false,
      action: () => {
        console.log('👑 WHITE LABEL BUTTON CLICKED - REDIRECTING TO EMAIL');
        window.location.href = 'mailto:ryan@saintvision.ai?subject=White Label Plan ($497/month)&body=I want to subscribe to the Full White-Label plan for $497/month. Please send me the payment link and setup details!';
        setLoading(null);
      }
    },
    {
      name: "Custom Enterprise",
      subtitle: "Ultimate",
      icon: Sparkles,
      tier: "custom",
      price: "$1500",
      period: "/month",
      description: "$1500 deposit for fully custom solutions, enterprise onboarding & white-glove service",
      features: [
        "Everything in White Label",
        "Full enterprise onboarding program",
        "Custom domain & infrastructure setup",
        "Teams/Zapier/Slack deep integrations",
        "Launch strategy & IP registration",
        "Enterprise contracts & compliance",
        "Revenue guarantees & growth planning",
        "Full platform customization rights",
      ],
      buttonText: "Custom Build",
      color: "red",
      popular: false,
      action: async () => {
        console.log('🚀 CUSTOM ENTERPRISE BUTTON CLICKED - LOADING STRIPE');
        try {
          const { loadStripe } = await import('@stripe/stripe-js');
          const stripe = await loadStripe('pk_live_51RAfTZFZsXxBWnjQS7I98SC6Bq6PUWb8GsOB6K061FNStjfMgn2khsrSrrqDuZZrkA6vi3rOK5FthNAInW1Bhx4L00aAznwNJv');

          if (stripe) {
            console.log('✅ STRIPE LOADED - REDIRECTING TO CHECKOUT');
            const { error } = await stripe.redirectToCheckout({
              lineItems: [{ price: 'price_1RIh5yFZsXxBWnjQw0p9KYOj', quantity: 1 }],
              mode: 'subscription',
              successUrl: window.location.origin + '/?upgraded=custom',
              cancelUrl: window.location.origin + '/pricing',
            });

            if (error) {
              console.error('Stripe error:', error);
              alert('Payment error: ' + error.message);
            }
          } else {
            alert('Unable to load payment system. Please try again.');
          }
        } catch (error) {
          console.error('Failed to load Stripe:', error);
          alert('Payment system unavailable. Please contact support.');
        }
        setLoading(null);
      }
    },
  ];

  const auditAddOn = {
    name: "Route Intelligence",
    subtitle: "PREMIUM ADD-ON",
    icon: Shield,
    price: "+$47",
    period: "/month",
    description: "🔥 Enterprise route monitoring & optimization that's generated $8,947+ for existing clients",
    features: [
      "🎯 Add to any existing plan tier",
      "Real-time website monitoring & alerts",
      "SaintSal AI route analysis & optimization",
      "Advanced performance insights & reporting",
      "Custom integration support & setup",
      "Priority add-on support channel",
      "Revenue optimization alerts & recommendations",
      "Proven ROI: $8,947+ generated for clients",
    ],
    buttonText: "Add Route Intelligence",
    color: "audit",
    addon: true,
  };

  const getCardStyles = (color: string, popular: boolean) => {
    const baseStyles = "relative transition-all duration-500 hover:scale-105 cursor-pointer";

    if (popular) {
      return `${baseStyles} scale-105 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 shadow-[0_0_40px_rgba(255,215,0,0.8)] border border-yellow-400/60 hover:shadow-[0_0_60px_rgba(255,215,0,1)]`;
    }

    switch (color) {
      case "white":
        return `${baseStyles} bg-gray-900/70 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] border border-white/20 hover:border-white/40`;
      case "blue":
        return `${baseStyles} bg-gray-900/70 shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] border border-cyan-400/30 hover:border-cyan-400/60`;
      case "purple":
        return `${baseStyles} bg-gray-900/70 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] border border-purple-400/30 hover:border-purple-400/60`;
      case "green":
        return `${baseStyles} bg-gray-900/70 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] border border-green-400/30 hover:border-green-400/60`;
      case "red":
        return `${baseStyles} bg-gray-900/70 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] border border-red-400/30 hover:border-red-400/60`;
      case "audit":
        return `${baseStyles} bg-gradient-to-br from-pink-500/10 to-purple-500/10 shadow-[0_0_35px_rgba(255,20,147,0.5)] border border-pink-400/40 hover:shadow-[0_0_55px_rgba(255,20,147,0.8)]`;
      default:
        return `${baseStyles} bg-gray-900/70 border border-gray-600/30`;
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "white": return "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]";
      case "blue": return "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]";
      case "purple": return "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]";
      case "green": return "text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]";
      case "red": return "text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]";
      case "audit": return "text-pink-400 drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]";
      default: return "text-gray-400";
    }
  };

  const getButtonStyles = (color: string, popular: boolean) => {
    if (popular) {
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-bold shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:shadow-[0_0_35px_rgba(255,215,0,1)] transform hover:scale-105 transition-all duration-300";
    }

    switch (color) {
      case "white":
        return "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transform hover:scale-105 transition-all duration-300";
      case "blue":
        return "bg-gradient-to-r from-cyan-400 to-cyan-600 text-black hover:from-cyan-500 hover:to-cyan-700 shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:shadow-[0_0_30px_rgba(0,255,255,0.9)] transform hover:scale-105 transition-all duration-300";
      case "purple":
        return "bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transform hover:scale-105 transition-all duration-300";
      case "green":
        return "bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.9)] transform hover:scale-105 transition-all duration-300";
      case "red":
        return "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700 shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:shadow-[0_0_30px_rgba(239,68,68,0.9)] transform hover:scale-105 transition-all duration-300";
      case "audit":
        return "bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:from-pink-500 hover:to-pink-700 shadow-[0_0_20px_rgba(255,20,147,0.6)] hover:shadow-[0_0_30px_rgba(255,20,147,0.9)] transform hover:scale-105 transition-all duration-300";
      default:
        return "bg-gray-700 hover:bg-gray-600 text-white transform hover:scale-105 transition-all duration-300";
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white font-light"
      style={{ backgroundColor: "#090909", fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Header */}
      <GlobalHeader />

      {/* Hero Section */}
      <div className="text-center py-20 px-6 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Choose Your SaintVisionAI
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              Platform Level Access
            </span>
          </h1>

          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            From exploring SaintSal™ to building your AI empire, find the
            perfect plan for your journey into the future of business automation
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/60"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                isYearly 
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_20px_rgba(255,215,0,0.8)]" 
                  : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-all duration-300 ${
                  isYearly ? "translate-x-7 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/60"}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-gradient-to-r from-green-400 to-green-600 text-black ml-2 font-bold animate-pulse">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12 auto-rows-fr">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={getCardStyles(plan.color, plan.popular)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-1 shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-pulse">
                    ⭐ MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-black/50 rounded-xl backdrop-blur-sm">
                    <plan.icon
                      className={`w-8 h-8 ${getIconColor(plan.color)}`}
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-white/60 font-medium mb-4">
                  {plan.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <span
                    className={`text-4xl font-bold ${getIconColor(plan.color)}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{plan.description}</p>
                {plan.highlight && (
                  <p className="text-xs text-yellow-400 mt-2 font-medium animate-pulse">
                    {plan.highlight}
                  </p>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm ${getButtonStyles(plan.color, plan.popular)}`}
                  onClick={() => {
                    console.log(`🔥 BUTTON CLICKED: ${plan.name} - ${plan.tier}`);
                    setLoading(plan.tier);
                    plan.action();
                  }}
                  disabled={loading === plan.tier}
                >
                  {loading === plan.tier ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Route Intelligence Add-On */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light mb-4 text-white">
              Premium Add-Ons
            </h2>
            <p className="text-white/60">
              Supercharge any plan with advanced capabilities
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className={getCardStyles(auditAddOn.color, false)}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold animate-pulse px-4 py-1 shadow-[0_0_25px_rgba(168,85,247,0.8)]">
                  PREMIUM ADD-ON
                </Badge>
              </div>

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-pink-400/20 rounded-xl backdrop-blur-sm">
                    <auditAddOn.icon className="w-8 h-8 text-pink-400 animate-pulse drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {auditAddOn.name}
                </CardTitle>
                <CardDescription className="text-white/60 font-medium">
                  {auditAddOn.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]">
                    {auditAddOn.price}
                  </span>
                  <span className="text-white/60">{auditAddOn.period}</span>
                </div>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  {auditAddOn.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {auditAddOn.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm ${getButtonStyles(auditAddOn.color, false)}`}
                  onClick={() => {
                    console.log('Route Intelligence Add-On triggered');
                    alert('Route Intelligence Add-On - Contact sales@saintvision.ai for setup');
                  }}
                >
                  {auditAddOn.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Voice Interface Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-light mb-4 text-white">
              🎤 SaintSal™ Voice Support
            </h2>
            <p className="text-white/60">
              Talk directly to SaintSal with voice recognition and live support calls
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VoiceInterface
              onVoiceMessage={(message) => console.log('Voice input:', message)}
            />
          </div>
        </div>

        {/* Need Something Custom Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900/40 to-black/60 border-yellow-400/30 max-w-2xl mx-auto shadow-[0_0_40px_rgba(255,215,0,0.3)]">
            <CardContent className="p-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Need Something Custom?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                We build white-label solutions, custom integrations, and
                enterprise deployments. Let's talk about your vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:shadow-[0_0_30px_rgba(255,215,0,0.9)] transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = "mailto:enterprise@saintvision.ai"}
                >
                  <Calendar className="w-4 h-4 mr-2 inline" />
                  Schedule a Call
                </button>
                <button
                  className="border border-white/30 text-white hover:bg-white/5 px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:border-white/60"
                  onClick={() => window.location.href = "mailto:sales@saintvision.ai"}
                >
                  <MessageSquare className="w-4 h-4 mr-2 inline" />
                  Chat with Sales
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why SaintSal Section */}
      <div className="py-20 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">
              Why SaintSal™?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                HACP™ Technology
              </h3>
              <p className="text-sm text-white/60">
                Patented Human-AI Connection Protocol
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm">
                <Building2 className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-sm text-white/60">
                Azure-backed with SOC 2 compliance
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Real Integrations
              </h3>
              <p className="text-sm text-white/60">
                CRM, billing, voice, and SMS ready
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h3 className="font-semibold text-white mb-2">Global Scale</h3>
              <p className="text-sm text-white/60">
                Multi-region deployment ready
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <GlobalFooter />
    </div>
  );
}
