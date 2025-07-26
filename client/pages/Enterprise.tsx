import React from "react";
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
  Building2,
  Lock,
  Users,
  BarChart3,
  Cpu,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Enterprise() {
  const patentFeatures = [
    {
      icon: Cpu,
      title: "HACP™ Technology",
      description:
        "U.S. Patent No. 10,290,222 - Advanced AI escalation and adaptation protocols",
      highlight: "PATENTED",
    },
    {
      icon: Shield,
      title: "Enterprise Route Intelligence",
      description:
        "Premium monitoring add-on generating $8,947+ revenue with 47+ clients",
      highlight: "PREMIUM ADD-ON",
    },
    {
      icon: Building2,
      title: "PartnerTech.ai CRM",
      description:
        "Integrated customer relationship management with AI-powered insights",
      highlight: "ENTERPRISE",
    },
    {
      icon: Users,
      title: "War Room Dashboard",
      description:
        "Command center interface for enterprise operations and monitoring",
      highlight: "COMMAND CENTER",
    },
  ];

  const complianceFeatures = [
    {
      icon: Lock,
      title: "AES-256 Encryption",
      subtitle: "Military-grade security",
    },
    { icon: Award, title: "SOC 2 Compliant", subtitle: "Enterprise standards" },
    { icon: Globe, title: "Delaware LP", subtitle: "Corporate structure" },
    { icon: Shield, title: "Patent Protected", subtitle: "HACP™ Technology" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Enterprise Header */}
      <div className="border-b border-gray-800/50 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    SaintVisionAI™
                  </h1>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    COOKIN' KNOWLEDGE
                  </p>
                </div>
              </div>
              <Badge className="bg-blue-600 text-white border-0">
                Enterprise Platform
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  View Pricing
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                  Enterprise Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Dark Elite Command Center */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-yellow-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white border-0 mb-6 animate-pulse">
              🛡️ Protected by U.S. Patent No. 10,290,222
            </Badge>

            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Enterprise AI Command Center
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-semibold">
                HACP™ Technology
              </span>{" "}
              powers the most advanced AI platform for enterprise operations.
              Protected by patent, proven by performance, trusted by industry
              leaders.
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-10">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Patent Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>47+ Clients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/warroom">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                >
                  Access War Room
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about/hacp">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  HACP™ Technology
                </Button>
              </Link>
            </div>
          </div>

          {/* Live Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  $8,947
                </div>
                <div className="text-sm text-gray-400">
                  Route Intelligence Revenue
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  1,284
                </div>
                <div className="text-sm text-gray-400">AI Audits Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-400">Platform Uptime</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  47+
                </div>
                <div className="text-sm text-gray-400">Enterprise Clients</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* HACP™ Patent Showcase */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6">
            🎯 HACP™ TECHNOLOGY
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Protected by U.S. Patent No. 10,290,222
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our patented Human-AI Collaborative Protocol technology provides
            unprecedented escalation logic and real-time adaptation
            capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patentFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-yellow-400/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-400/20 rounded-xl">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-white">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge
                    className={`
                    ${feature.highlight === "PATENTED" ? "bg-red-600" : ""}
                    ${feature.highlight === "PREMIUM ADD-ON" ? "bg-yellow-600" : ""}
                    ${feature.highlight === "ENTERPRISE" ? "bg-blue-600" : ""}
                    ${feature.highlight === "COMMAND CENTER" ? "bg-purple-600" : ""}
                    text-white border-0
                  `}
                  >
                    {feature.highlight}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Security & Compliance */}
      <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Security & Compliance
            </h2>
            <p className="text-gray-400">
              Built for the most demanding enterprise environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready for Enterprise AI?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join the companies leveraging HACP™ technology for competitive
          advantage
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
            >
              Schedule Enterprise Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/about/patent">
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400"
            >
              Patent Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Global Footer */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/about" className="block hover:text-yellow-400">
                  About Us
                </Link>
                <Link to="/about/hacp" className="block hover:text-yellow-400">
                  HACP™ Technology
                </Link>
                <Link
                  to="/about/patent"
                  className="block hover:text-yellow-400"
                >
                  Patent Portfolio
                </Link>
                <Link to="/about/team" className="block hover:text-yellow-400">
                  Leadership
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/warroom" className="block hover:text-yellow-400">
                  War Room
                </Link>
                <Link to="/partnertech" className="block hover:text-yellow-400">
                  PartnerTech.ai
                </Link>
                <Link
                  to="/audit-service"
                  className="block hover:text-yellow-400"
                >
                  Route Intelligence
                </Link>
                <Link to="/saintgpt" className="block hover:text-yellow-400">
                  SaintSal™ AI
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link
                  to="/legal/privacy"
                  className="block hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
                <Link to="/legal/terms" className="block hover:text-yellow-400">
                  Terms of Service
                </Link>
                <Link
                  to="/legal/disclosure"
                  className="block hover:text-yellow-400"
                >
                  AI Disclosure
                </Link>
                <Link
                  to="/legal/patents"
                  className="block hover:text-yellow-400"
                >
                  Patent Information
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/contact" className="block hover:text-yellow-400">
                  Contact Us
                </Link>
                <Link to="/help" className="block hover:text-yellow-400">
                  Help Center
                </Link>
                <Link to="/contact" className="block hover:text-yellow-400">
                  Enterprise Demo
                </Link>
                <a
                  href="https://status.saintvision.ai"
                  className="block hover:text-yellow-400"
                >
                  Status Page
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">
              © 2025 Saint Vision Group LLC. Protected by U.S. Patent No.
              10,290,222
            </p>
            <p className="text-xs">
              We protect your data. We respect your time. We serve your purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
