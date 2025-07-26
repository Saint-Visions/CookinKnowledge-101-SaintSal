import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Zap,
  Crown,
  ArrowRight,
  CheckCircle,
  Lock,
  Award,
  Building2,
  Users,
  Brain,
  Globe,
  Cpu,
  Eye,
  FileText,
  TrendingUp,
  Star,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function AppleHomepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whyUsPoints = [
    {
      icon: Award,
      title: "Patent Protected Technology",
      description:
        "HACP™ U.S. Patent No. 10,290,222 - The only legally protected AI collaboration protocol in the industry",
    },
    {
      icon: TrendingUp,
      title: "Proven Revenue Generation",
      description:
        "$8,947+ generated for clients through our Route Intelligence platform with 47+ satisfied customers",
    },
    {
      icon: Shield,
      title: "Enterprise Security First",
      description:
        "SOC 2 compliant, AES-256 encryption, faith-aligned values with transparent data practices",
    },
  ];

  const eliteTech = [
    {
      icon: Crown,
      title: "SaintSal™ AI",
      description: "HACP™-powered companion with advanced reasoning",
      status: "Enterprise",
    },
    {
      icon: Cpu,
      title: "Route Intelligence",
      description: "Real-time website monitoring & optimization",
      status: "+$47 Add-On",
    },
    {
      icon: Users,
      title: "PartnerTech.ai",
      description: "Integrated CRM with AI-powered insights",
      status: "Platform",
    },
  ];

  const ecosystemPartners = [
    {
      name: "Athena Legacy Care",
      description: "AI-powered legacy system modernization",
      icon: "🏛️",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "EbyTech Finance",
      description: "Advanced financial technology solutions",
      icon: "💎",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "SVTLegal.ai",
      description: "Legal technology and compliance automation",
      icon: "⚖️",
      color: "from-red-500 to-rose-600",
    },
    {
      name: "SBVG Institute",
      description: "Research and development excellence",
      icon: "🎓",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F446d6f0fa2c34f478f99f49fc6ba7f85?format=webp&width=800')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Charcoal Overlay */}
      <div className="fixed inset-0 z-0 bg-gray-900/20 backdrop-blur-[0.3px]" />

      {/* Navigation */}
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Patent Badge */}
          <div className="mb-8">
            <Badge className="bg-white/10 text-white backdrop-blur-sm px-6 py-2 border-0">
              🛡️ Protected by U.S. Patent No. 10,290,222
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
              Enterprise AI
            </span>
          </h1>

          {/* SaintSal Subheadline */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-yellow-400/90 font-medium italic tracking-wide">
              Powered by SaintSal™ • Where AI meets intuition 😉
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            HACP™ technology powers the world's most advanced AI collaboration
            platform.
            <span className="text-white">
              {" "}
              Patent-protected. Enterprise-proven. Faith-aligned.
            </span>
          </p>

          {/* Trusted Tech Stack */}
          <div className="flex justify-center items-center gap-8 mb-12 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-white/60">Azure Cognitive Services</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-white/60">OpenAI GPT-4</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white/60">Enterprise Grade</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-4 text-lg font-semibold shadow-2xl shadow-yellow-400/20"
            >
              Explore SaintSal™
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative z-10 py-32 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Why SaintVisionAI</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The only platform combining patent-protected technology, proven
              results, and enterprise-grade security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsPoints.map((point, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 shadow-lg border-0"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl">
                      <point.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {point.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/why">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/5 backdrop-blur-sm"
              >
                Learn More About Our Approach
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Elite Technology */}
      <section className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Elite Technology Stack</h2>
            <p className="text-xl text-white/70">
              HACP™-powered solutions for enterprise excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eliteTech.map((tech, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm group hover:bg-gray-800/50 transition-all duration-500 shadow-lg border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <Badge className="bg-white/10 text-white border-0">
                      {tech.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {tech.title}
                  </h3>
                  <p className="text-white/70">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="relative z-10 py-32 bg-gray-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-12">Security & Trust</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="p-6">
              <Lock className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-sm font-semibold text-white mb-2">
                AES-256
              </div>
              <div className="text-xs text-white/60">Military Grade</div>
            </div>
            <div className="p-6">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <div className="text-sm font-semibold text-white mb-2">SOC 2</div>
              <div className="text-xs text-white/60">Compliant</div>
            </div>
            <div className="p-6">
              <Award className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-sm font-semibold text-white mb-2">
                Patent
              </div>
              <div className="text-xs text-white/60">Protected</div>
            </div>
            <div className="p-6">
              <Building2 className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <div className="text-sm font-semibold text-white mb-2">
                Delaware
              </div>
              <div className="text-xs text-white/60">LLC Structure</div>
            </div>
          </div>

          <p className="text-white/70 max-w-3xl mx-auto">
            Built on faith-aligned principles with complete transparency. We
            protect your data, respect your time, and serve your purpose.
          </p>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6">Partner Ecosystem</h2>
            <p className="text-xl text-white/70">
              Integrated solutions across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemPartners.map((partner, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group shadow-lg border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{partner.icon}</div>
                  <h3 className="font-semibold text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-white/60">{partner.description}</p>
                  <div
                    className={`mt-4 h-1 bg-gradient-to-r ${partner.color} rounded-full`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Movement */}
      <section className="relative z-10 py-32 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-8">Join The Movement</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            We're building the future of human-AI collaboration.
            Patent-protected technology, faith-aligned values, and
            enterprise-proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-4 text-lg font-semibold shadow-2xl shadow-yellow-400/30"
              >
                View Platform Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 px-8 py-4 text-lg backdrop-blur-sm"
              >
                Schedule Enterprise Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </div>
  );
}
