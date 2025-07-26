import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Zap,
  Crown,
  Lock,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  Bell,
  Plus,
  ArrowRight,
  Eye,
  EyeOff,
  Star,
  Cpu,
  Building2,
  FileText,
  Calendar,
  Mail,
  Phone,
  Globe,
  TrendingUp,
  Target,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GeneralDashboard() {
  const [userTier, setUserTier] = useState<
    "starter" | "professional" | "enterprise"
  >("starter");

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Chat with SaintSal",
      description: "AI-powered assistance",
      available: true,
      path: "/saintgpt",
    },
    {
      icon: Users,
      title: "PartnerTech CRM",
      description: "Customer management",
      available: userTier !== "starter",
      path: "/partnertech",
      tier: "Professional+",
    },
    {
      icon: Shield,
      title: "Route Intelligence",
      description: "Website monitoring",
      available: userTier === "enterprise",
      path: "/audit-service",
      tier: "Enterprise",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Performance insights",
      available: userTier !== "starter",
      path: "/analytics",
      tier: "Professional+",
    },
  ];

  const recentActivity = [
    {
      icon: MessageSquare,
      title: "SaintSal conversation",
      time: "2 minutes ago",
      description: "Discussed project roadmap",
      available: true,
    },
    {
      icon: Users,
      title: "CRM sync completed",
      time: "1 hour ago",
      description: "247 contacts updated",
      available: userTier !== "starter",
    },
    {
      icon: Shield,
      title: "Route audit completed",
      time: "3 hours ago",
      description: "15 routes verified, 2 issues found",
      available: userTier === "enterprise",
    },
    {
      icon: Bell,
      title: "System notification",
      time: "5 hours ago",
      description: "Platform maintenance completed",
      available: true,
    },
  ];

  const platformStats = [
    {
      label: "AI Conversations",
      value:
        userTier === "starter"
          ? "12"
          : userTier === "professional"
            ? "247"
            : "1,284",
      icon: MessageSquare,
      available: true,
    },
    {
      label: "CRM Contacts",
      value:
        userTier === "starter"
          ? "---"
          : userTier === "professional"
            ? "89"
            : "247",
      icon: Users,
      available: userTier !== "starter",
    },
    {
      label: "Route Audits",
      value: userTier === "enterprise" ? "156" : "---",
      icon: Shield,
      available: userTier === "enterprise",
    },
    {
      label: "Uptime",
      value: "99.9%",
      icon: TrendingUp,
      available: true,
    },
  ];

  const features = [
    {
      category: "AI & Communication",
      items: [
        { name: "SaintSal AI Chat", available: true, tier: "All Plans" },
        {
          name: "Advanced AI Models",
          available: userTier !== "starter",
          tier: "Professional+",
        },
        {
          name: "Custom AI Training",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
        {
          name: "Priority AI Response",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
      ],
    },
    {
      category: "Business Tools",
      items: [
        { name: "Basic Dashboard", available: true, tier: "All Plans" },
        {
          name: "PartnerTech CRM",
          available: userTier !== "starter",
          tier: "Professional+",
        },
        {
          name: "Advanced Analytics",
          available: userTier !== "starter",
          tier: "Professional+",
        },
        {
          name: "Route Intelligence",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
      ],
    },
    {
      category: "Enterprise Features",
      items: [
        {
          name: "War Room Access",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
        {
          name: "White Label Options",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
        {
          name: "API Access",
          available: userTier !== "starter",
          tier: "Professional+",
        },
        {
          name: "24/7 Priority Support",
          available: userTier === "enterprise",
          tier: "Enterprise",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800/50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    SaintVisionAI™
                  </h1>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Dashboard
                  </p>
                </div>
              </div>

              <Badge
                className={`
                ${userTier === "starter" ? "bg-blue-600" : ""}
                ${userTier === "professional" ? "bg-yellow-600" : ""}
                ${userTier === "enterprise" ? "bg-purple-600" : ""}
                text-white border-0 capitalize
              `}
              >
                {userTier} Plan
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Link to="/pricing">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                  Upgrade Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to SaintVisionAI
          </h1>
          <p className="text-gray-400">
            Your AI-powered business platform.{" "}
            {userTier === "starter" && "Upgrade to unlock more features."}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-700 ${!stat.available ? "opacity-50" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">
                      {stat.available ? stat.value : "---"}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                  <div
                    className={`p-3 rounded-xl ${stat.available ? "bg-yellow-400/20" : "bg-gray-700/50"}`}
                  >
                    <stat.icon
                      className={`w-6 h-6 ${stat.available ? "text-yellow-400" : "text-gray-500"}`}
                    />
                  </div>
                </div>
                {!stat.available && (
                  <div className="mt-3">
                    <Link to="/pricing">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                      >
                        <Lock className="w-3 h-3 mr-1" />
                        Upgrade
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className={`bg-gray-900/50 border-gray-700 transition-all duration-300 ${action.available ? "hover:border-yellow-400/50 cursor-pointer" : "opacity-60"}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${action.available ? "bg-yellow-400/20" : "bg-gray-700/50"}`}
                  >
                    <action.icon
                      className={`w-6 h-6 ${action.available ? "text-yellow-400" : "text-gray-500"}`}
                    />
                  </div>
                  {!action.available && action.tier && (
                    <Badge className="bg-gray-700 text-gray-300 text-xs">
                      {action.tier}
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {action.description}
                </p>

                {action.available ? (
                  <Link to={action.path}>
                    <Button
                      size="sm"
                      className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                    >
                      Access
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/pricing">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Upgrade Required
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg ${activity.available ? "bg-gray-800/50" : "bg-gray-800/20 opacity-50"}`}
                    >
                      <div
                        className={`p-2 rounded-lg ${activity.available ? "bg-yellow-400/20" : "bg-gray-700/50"}`}
                      >
                        <activity.icon
                          className={`w-5 h-5 ${activity.available ? "text-yellow-400" : "text-gray-500"}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {activity.available
                            ? activity.description
                            : "Feature not available in current plan"}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {activity.time}
                      </div>
                      {!activity.available && (
                        <div className="flex items-center gap-1">
                          <EyeOff className="w-4 h-4 text-gray-500" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Access Panel */}
          <div>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Platform Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {features.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                        {category.category}
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between py-2"
                          >
                            <div className="flex items-center gap-2">
                              {item.available ? (
                                <Eye className="w-4 h-4 text-green-400" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-500" />
                              )}
                              <span
                                className={`text-sm ${item.available ? "text-white" : "text-gray-500"}`}
                              >
                                {item.name}
                              </span>
                            </div>
                            {!item.available && (
                              <Badge className="bg-gray-700 text-gray-400 text-xs">
                                {item.tier}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <Link to="/pricing">
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                      <Crown className="w-4 h-4 mr-2" />
                      Upgrade Your Plan
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upgrade Promotion */}
        {userTier !== "enterprise" && (
          <div className="mt-8">
            <Card className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-yellow-400/30">
              <CardContent className="p-8 text-center">
                <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Unlock Your Full Potential
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  {userTier === "starter"
                    ? "Upgrade to Professional for PartnerTech CRM, advanced analytics, and more AI capabilities."
                    : "Upgrade to Enterprise for Route Intelligence, War Room access, and 24/7 priority support."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing">
                    <Button
                      size="lg"
                      className="bg-yellow-400 text-black hover:bg-yellow-500"
                    >
                      View Pricing Plans
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-yellow-400 text-yellow-400"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
