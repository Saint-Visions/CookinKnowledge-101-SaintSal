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
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle,
  Award,
  Code,
  BarChart3,
  Lock,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HACP() {
  const technicalFeatures = [
    {
      icon: Cpu,
      title: "Escalation Logic Engine",
      description:
        "Patented algorithms that determine optimal human-AI handoff points based on complexity analysis and user context.",
      technical: "Real-time decision trees with confidence scoring",
    },
    {
      icon: Zap,
      title: "Adaptive Response System",
      description:
        "Dynamic AI behavior modification based on user interaction patterns and success metrics.",
      technical:
        "Machine learning feedback loops with performance optimization",
    },
    {
      icon: Layers,
      title: "Multi-Modal Integration",
      description:
        "Seamless integration across text, voice, and visual interfaces with context preservation.",
      technical: "Cross-platform state management and data synchronization",
    },
    {
      icon: Lock,
      title: "Security Framework",
      description:
        "End-to-end encryption with enterprise-grade access controls and audit trails.",
      technical: "AES-256 encryption with role-based permissions",
    },
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Context Analysis",
      description:
        "HACP™ analyzes user input, historical interactions, and system state to determine optimal response strategy.",
    },
    {
      step: "02",
      title: "Complexity Assessment",
      description:
        "Proprietary algorithms evaluate task complexity and required expertise level for accurate routing decisions.",
    },
    {
      step: "03",
      title: "Dynamic Routing",
      description:
        "Intelligent escalation to human operators or specialized AI models based on real-time capability matching.",
    },
    {
      step: "04",
      title: "Continuous Learning",
      description:
        "System learns from outcomes to improve future routing decisions and optimize human-AI collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">SaintVisionAI™</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge className="bg-red-600 text-white">
              U.S. Patent No. 10,290,222
            </Badge>
            <Link to="/contact">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Enterprise Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Badge className="bg-red-600 text-white border-0 mb-6">
            🛡️ PROTECTED TECHNOLOGY
          </Badge>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            HACP™ Technology
          </h1>

          <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            <span className="text-yellow-400 font-semibold">
              Human-AI Collaborative Protocol
            </span>{" "}
            - The patented foundation powering enterprise AI interactions with
            unprecedented intelligence and security.
          </p>

          <div className="text-lg text-gray-400 mb-8">
            U.S. Patent No. 10,290,222 • Saint Vision Group LLC
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-10">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>USPTO Granted</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Deployed</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span>Proven Performance</span>
            </div>
          </div>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
            >
              License HACP™ Technology
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Patented Innovation Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            HACP™ represents a breakthrough in human-AI collaboration,
            providing intelligent escalation and adaptive response capabilities
            protected by U.S. patent law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technicalFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-yellow-400/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-400/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-sm text-yellow-400 font-mono bg-gray-800/50 p-3 rounded">
                  {feature.technical}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            HACP™ Implementation Flow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  {index < implementationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-700 -translate-x-8"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patent Claims */}
        <Card className="bg-gradient-to-r from-gray-900/50 to-black/50 border-yellow-400/30">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400 text-center">
              Key Patent Claims & Protections
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Protected Methods
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Dynamic escalation algorithms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Context-aware routing systems
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Adaptive response mechanisms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Multi-modal integration protocols
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Commercial Applications
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">
                      Enterprise customer support
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">
                      Financial services automation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Healthcare AI systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">
                      Legal technology platforms
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Licensing CTA */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-y border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center py-20 px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            License HACP™ Technology
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Integrate patented human-AI collaboration into your enterprise
            systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
              >
                Licensing Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about/patent">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400"
              >
                Full Patent Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            © 2025 Saint Vision Group LLC. Protected by U.S. Patent No.
            10,290,222
          </p>
          <p className="text-xs mt-2">
            HACP™ is a trademark of Saint Vision Group LLC
          </p>
        </div>
      </div>
    </div>
  );
}
