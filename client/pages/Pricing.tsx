import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, Shield, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Complete SaintVisionAI Platform for businesses",
      features: [
        "Full WarRoom Production Center",
        "PartnerTech.ai CRM",
        "SaintSalGPT 4.1 AI Companion",
        "SVT Institute of AI",
        "Image Generator & AI Tools",
        "Automations & Workflows",
        "Priority support",
        "Team collaboration"
      ],
      color: "blue",
      popular: false,
      stripeLink: "https://buy.stripe.com/professional-plan"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "🚀 MOST POPULAR: Full platform + Route Intelligence",
      features: [
        "✨ Everything in Professional",
        "🛡️ Enterprise Route Intelligence Add-On",
        "Real-time website monitoring",
        "Advanced AI route analysis",
        "Custom integrations & API",
        "White-label options",
        "24/7 dedicated support",
        "SLA guarantees"
      ],
      color: "yellow",
      popular: true,
      stripeLink: "https://buy.stripe.com/enterprise-plan"
    },
    {
      name: "Route Intelligence",
      price: "+$47",
      period: "/month",
      description: "🔥 PREMIUM ADD-ON: Advanced route monitoring",
      features: [
        "🎯 Add to any existing plan",
        "Enterprise-grade monitoring",
        "SaintSal AI route analysis",
        "Real-time alerts & reporting",
        "Custom integration support",
        "Priority add-on support",
        "Advanced analytics dashboard",
        "Proven: $8,947+ revenue generated"
      ],
      color: "gold",
      popular: false,
      special: true,
      addon: true,
      stripeLink: "https://buy.stripe.com/route-intelligence-addon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">SaintVisionAI</span>
          </Link>
          <Link to="/auth">
            <Button variant="outline" className="border-yellow-400 text-yellow-400">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Badge className="bg-red-500 text-white animate-pulse mb-4">
              🔥 SPECIAL: $47/month - Save $32!
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            SaintVisionAI Platform
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Complete AI-powered business platform with optional Enterprise Route Intelligence add-on
          </p>
          <div className="text-lg text-yellow-400 font-semibold mb-8">
            🚀 47+ Active Clients • $8,947+ Revenue Generated • 1,284+ Audits Completed
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>AI-powered insights</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Automated reporting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-gray-900 border-gray-800 relative ${plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''} ${plan.special ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`font-bold ${plan.special ? 'bg-red-500 text-white animate-pulse' : 'bg-yellow-400 text-black'}`}>
                    {plan.special ? '🔥 LIMITED TIME' : 'MOST POPULAR'}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  {plan.color === 'gold' && <Shield className="w-12 h-12 text-yellow-400 animate-pulse" />}
                  {plan.color === 'blue' && <Zap className="w-12 h-12 text-blue-400" />}
                  {plan.color === 'yellow' && <Crown className="w-12 h-12 text-yellow-400" />}
                  {plan.color === 'purple' && <Shield className="w-12 h-12 text-purple-400" />}
                </div>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                  onClick={() => window.open(plan.stripeLink, '_blank')}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our enterprise team can create a tailored route auditing solution for your specific needs, including custom integrations, dedicated infrastructure, and white-label options.
              </p>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                onClick={() => window.location.href = 'mailto:enterprise@saintvision.ai'}
              >
                Contact Enterprise Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 SaintVisionAI. All rights reserved. • Powered by SaintSal AI</p>
        </div>
      </div>
    </div>
  );
}
