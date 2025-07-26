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
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      subtitle: "Try the Cookin'",
      icon: MessageSquare,
      price: isYearly ? "$0" : "$0",
      period: "/month",
      description: "Perfect for exploring SaintSal™ capabilities",
      features: [
        "100 AI conversations/month",
        "Dual AI system (GPT-4o + Azure)",
        "Community support",
        "Standard response time",
        "Web interface only",
      ],
      buttonText: "Start Free",
      color: "white",
      popular: false,
    },
    {
      name: "Unlimited",
      subtitle: "Base Magic",
      icon: Zap,
      price: isYearly ? "$270" : "$27",
      period: isYearly ? "/year" : "/month",
      description: "Where the magic starts flowing",
      features: [
        "Unlimited AI conversations",
        "Dual AI system (GPT-4o + Azure)",
        "CRM connection (GHL)",
        "Email support",
        "Chrome extension",
        "Standard response time",
      ],
      buttonText: "Get Unlimited",
      color: "blue",
      popular: false,
    },
    {
      name: "Pro",
      subtitle: "Your GOTTA GUY™",
      icon: Crown,
      price: isYearly ? "$970" : "$97",
      period: isYearly ? "/year" : "/month",
      description: "WHERE ALL THE MAGIC UNLOCKS!",
      features: [
        "Everything in Unlimited",
        "Dual AI system (GPT-4o + Azure)",
        "Voice & SMS integration",
        "CRM connection (GHL)",
        "PartnerTech integration",
        "Priority support",
        "Custom AI memory",
        "API access",
        "🔥 ALL MAGIC UNLOCKED",
      ],
      buttonText: "Unlock Magic ✨",
      color: "white",
      popular: true,
      highlight: "Most businesses choose this plan",
    },
    {
      name: "Enterprise",
      subtitle: "Scale Mode",
      icon: Building2,
      price: isYearly ? "$2970" : "$297",
      period: isYearly ? "/year" : "/month",
      description: "For teams ready to dominate",
      features: [
        "Everything in Pro",
        "Team management",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Multi-user management",
        "Priority support",
      ],
      buttonText: "Scale Up",
      color: "purple",
      popular: false,
    },
    {
      name: "White Label Elite",
      subtitle: "Empire Mode",
      icon: Globe,
      price: isYearly ? "$4970" : "$497",
      period: isYearly ? "/year" : "/month",
      description: "Your own branded SaintVisionAI empire",
      features: [
        "Everything in Enterprise",
        "Full white-label branding",
        "Custom domain & SSL",
        "Unlimited user accounts",
        "Revenue sharing program",
        "Full source code access",
        "24/7 dedicated support",
        "Custom feature development",
      ],
      buttonText: "Build Empire",
      color: "green",
      popular: false,
    },
    {
      name: "Custom",
      subtitle: "Ultimate",
      icon: Sparkles,
      price: "$1500",
      period: "/month",
      description: "$1500 deposit for custom solutions",
      features: [
        "Everything in White Label",
        "Custom development team",
        "Dedicated project manager",
        "White-glove onboarding",
        "Custom AI training",
        "Enterprise contracts",
        "Revenue guarantees",
        "Full platform customization",
      ],
      buttonText: "Custom Build",
      color: "red",
      popular: false,
    },
  ];

  const auditAddOn = {
    name: "Route Intelligence",
    subtitle: "PREMIUM ADD-ON",
    icon: Shield,
    price: "+$47",
    period: "/month",
    description: "🔥 Enterprise route monitoring & optimization",
    features: [
      "🎯 Add to any existing plan",
      "Real-time website monitoring",
      "SaintSal AI route analysis",
      "Advanced performance insights",
      "Custom integration support",
      "Priority add-on support",
      "Revenue optimization alerts",
      "Proven: $8,947+ generated for clients",
    ],
    buttonText: "Add Route Intelligence",
    color: "audit",
    addon: true,
  };

  const getCardStyles = (color: string, popular: boolean) => {
    const baseStyles = "relative transition-all duration-300 hover:scale-105";

    if (popular) {
      return `${baseStyles} scale-105 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 shadow-[0_0_30px_rgba(255,215,0,0.6)] border-0`;
    }

    switch (color) {
      case "white":
        return `${baseStyles} bg-gray-900/50 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border-0`;
      case "blue":
        return `${baseStyles} bg-gray-900/50 shadow-[0_0_20px_rgba(0,100,255,0.4)] hover:shadow-[0_0_30px_rgba(0,100,255,0.6)] border-0`;
      case "purple":
        return `${baseStyles} bg-gray-900/50 shadow-[0_0_20px_rgba(128,0,255,0.2)] hover:shadow-[0_0_30px_rgba(128,0,255,0.4)] border-0`;
      case "green":
        return `${baseStyles} bg-gray-900/50 shadow-[0_0_20px_rgba(0,255,128,0.2)] hover:shadow-[0_0_30px_rgba(0,255,128,0.4)] border-0`;
      case "red":
        return `${baseStyles} bg-gray-900/50 shadow-[0_0_20px_rgba(255,0,128,0.2)] hover:shadow-[0_0_30px_rgba(255,0,128,0.4)] border-0`;
      case "audit":
        return `${baseStyles} bg-gradient-to-br from-pink-400/10 to-pink-600/10 shadow-[0_0_25px_rgba(255,20,147,0.3)] border-0`;
      default:
        return `${baseStyles} bg-gray-900/50 border-0`;
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "white":
        return "text-white";
      case "blue":
        return "text-blue-500";
      case "purple":
        return "text-purple-400";
      case "green":
        return "text-green-400";
      case "red":
        return "text-red-400";
      case "audit":
        return "text-pink-400";
      default:
        return "text-gray-400";
    }
  };

  const getButtonStyles = (color: string, popular: boolean) => {
    if (popular) {
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-bold shadow-[0_0_20px_rgba(255,215,0,0.5)]";
    }

    switch (color) {
      case "white":
        return "bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.3)]";
      case "blue":
        return "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(0,100,255,0.5)]";
      case "purple":
        return "bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 shadow-[0_0_15px_rgba(128,0,255,0.3)]";
      case "green":
        return "bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-[0_0_15px_rgba(0,255,128,0.3)]";
      case "red":
        return "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700 shadow-[0_0_15px_rgba(255,0,128,0.3)]";
      case "audit":
        return "bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:from-pink-500 hover:to-pink-700 shadow-[0_0_15px_rgba(255,20,147,0.3)]";
      default:
        return "bg-gray-700 hover:bg-gray-600 text-white";
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ backgroundColor: "#090909" }}
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
            <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold">
              Platform Level Access
            </span>
          </h1>

          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            From exploring SaintSal™ to building your AI empire, find the
            perfect plan for your journey
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm ${!isYearly ? "text-white" : "text-white/60"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${isYearly ? "bg-yellow-400" : "bg-gray-600"}`}
            >
              <div
                className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isYearly ? "translate-x-7" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? "text-white" : "text-white/60"}`}
            >
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-white text-black ml-2">Save 20%</Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={getCardStyles(plan.color, plan.popular)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-1 shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                    ⭐ MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-800/50 rounded-xl">
                    <plan.icon
                      className={`w-8 h-8 ${getIconColor(plan.color)}`}
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-white/60 font-medium">
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
                <p className="text-sm text-white/70 mt-2">{plan.description}</p>
                {plan.highlight && (
                  <p className="text-xs text-yellow-400 mt-2 font-medium">
                    {plan.highlight}
                  </p>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${getButtonStyles(plan.color, plan.popular)}`}
                  size="lg"
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold animate-pulse px-4 py-1">
                  PREMIUM ADD-ON
                </Badge>
              </div>

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-400/20 rounded-xl">
                    <auditAddOn.icon className="w-8 h-8 text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  {auditAddOn.name}
                </CardTitle>
                <CardDescription className="text-white/60 font-medium">
                  {auditAddOn.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-400">
                    {auditAddOn.price}
                  </span>
                  <span className="text-white/60">{auditAddOn.period}</span>
                </div>
                <p className="text-sm text-white/70 mt-2">
                  {auditAddOn.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {auditAddOn.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={getButtonStyles(auditAddOn.color, false)}
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                >
                  {auditAddOn.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Need Something Custom Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900/40 to-black/60 border-yellow-400/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Need Something Custom?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                We build white-label solutions, custom integrations, and
                enterprise deployments. Let's talk about your vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8"
                  onClick={() =>
                    (window.location.href = "mailto:enterprise@saintvision.ai")
                  }
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8"
                  onClick={() =>
                    (window.location.href = "mailto:sales@saintvision.ai")
                  }
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat with Sales
                </Button>
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
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                HACP™ Technology
              </h3>
              <p className="text-sm text-white/60">
                Patented Human-AI Connection Protocol
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-sm text-white/60">
                Azure-backed with SOC 2 compliance
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">
                Real Integrations
              </h3>
              <p className="text-sm text-white/60">
                CRM, billing, voice, and SMS ready
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white/20 rounded-xl mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Global Scale</h3>
              <p className="text-sm text-white/60">
                Multi-region deployment ready
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900/50 to-black/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-8">
            Still Have Questions?
          </h2>
          <p className="text-white/70 mb-8">
            Our documentation covers everything, or chat with our support team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/5"
            >
              View Documentation
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Live Support
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <GlobalFooter />
    </div>
  );
}
