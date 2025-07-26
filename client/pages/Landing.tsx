import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Code,
  Monitor,
  AlertTriangle,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Route Protection",
      description:
        "Monitor every route, link, and navigation path on your website 24/7",
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description:
        "Instant alerts when route issues are detected, before your users notice",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description:
        "SaintSal AI analyzes patterns and provides intelligent recommendations",
    },
    {
      icon: Code,
      title: "Easy Integration",
      description:
        "Add one script tag to any website. Works with React, Vue, Angular, and more",
    },
    {
      icon: Monitor,
      title: "Comprehensive Dashboard",
      description:
        "Beautiful reporting interface with actionable insights and metrics",
    },
    {
      icon: AlertTriangle,
      title: "Automated Issue Detection",
      description:
        "Detect broken routes, slow responses, and accessibility issues automatically",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechCorp",
      role: "Lead Developer",
      content:
        "SaintVisionAI caught a critical routing bug before our product launch. Saved us thousands in lost revenue!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      company: "Digital Agency Pro",
      role: "CEO",
      content:
        "We use this for all our client websites. The AI insights help us deliver better user experiences.",
      rating: 5,
    },
    {
      name: "Jennifer Wu",
      company: "E-commerce Plus",
      role: "CTO",
      content:
        "The real-time monitoring gives us peace of mind. Our checkout flow has never been more reliable.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">SaintVisionAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/pricing">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                Pricing
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6">
            🚀 Powered by SaintSal AI
          </Badge>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Never Lose Customers to Broken Routes Again
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional route auditing and monitoring service that ensures your
            website navigation works perfectly. Powered by advanced AI to catch
            issues before they impact your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/audit-service">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                View Demo Dashboard
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1,000+ Websites Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>99.9% Uptime Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need for Route Monitoring
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools to ensure your website navigation never fails
            your users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-400/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Integrates with Everything
          </h2>
          <p className="text-xl text-gray-400">
            Add our monitoring to any website in less than 60 seconds
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Simple Script Integration
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Works with React, Vue, Angular, Svelte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No framework dependencies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Automatic route detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Real-time monitoring starts immediately</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">
                  Add to your website:
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`<script src="https://saintvision.ai/audit-client.js"></script>
<script>
  SaintVisionAuditor.init({
    token: "YOUR_TOKEN_HERE",
    autoAudit: true,
    realTime: true
  });
</script>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-gray-400">
            See what our customers are saying about SaintVisionAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-y border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center py-20 px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of websites using SaintVisionAI to ensure perfect
            navigation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-yellow-400" />
            <span className="font-bold">SaintVisionAI</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 SaintVisionAI. Powered by SaintSal AI.
          </div>
        </div>
      </div>
    </div>
  );
}
