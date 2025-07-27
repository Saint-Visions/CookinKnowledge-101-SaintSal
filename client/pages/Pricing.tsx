import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Check, Crown, Zap, Building2, Shield, Globe, Sparkles, MessageSquare } from "lucide-react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      features: ['2 GPT-4o messages', 'No memory, no history'],
      icon: MessageSquare,
      action: () => window.location.href = '/signup'
    },
    {
      id: 'unlimited',
      name: 'Unlimited',
      price: '$27',
      features: ['Unlimited GPT-4o', 'Chat history', 'Supersal access'],
      icon: Zap,
      action: () => window.location.href = 'https://buy.stripe.com/9AQ02D1oT9vW8sM6op'
    },
    {
      id: 'core',
      name: 'Core Tools',
      price: '$97',
      badge: 'Most Popular',
      features: ['Everything in Unlimited', 'CRM access via GHL'],
      icon: Crown,
      action: () => window.location.href = 'https://buy.stripe.com/fZe5mX7Hh3bi2cw4gi'
    },
    {
      id: 'pro',
      name: 'Pro Suite',
      price: '$297',
      features: ['Everything in Core', 'Admin dashboards', 'Webhook logic'],
      icon: Building2,
      action: () => window.location.href = 'https://buy.stripe.com/aEU8yb6Dd9vW5kE28c'
    },
    {
      id: 'white_label',
      name: 'Full White-Label',
      price: '$497',
      features: ['Everything in Pro', '10 GHL subaccounts'],
      icon: Globe,
      action: () => window.location.href = 'https://buy.stripe.com/dR6g1B4z515q4gA9AE'
    },
    {
      id: 'custom',
      name: 'Custom Enterprise',
      price: '$1500+',
      features: ['Full onboarding', 'Custom integrations'],
      icon: Sparkles,
      action: () => window.location.href = 'mailto:enterprise@saintvision.ai?subject=Custom Enterprise Plan'
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <GlobalHeader />
      
      <section className="bg-black text-white min-h-screen py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Choose Your <span className="text-yellow-500">SaintVisionAI</span>
            <br />Platform Level Access
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            From exploring SaintSal™ to building your AI empire,
            find the perfect plan for your journey
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <label className="text-sm text-white mr-2">Monthly</label>
          <input 
            type="checkbox" 
            className="toggle" 
            onChange={() => setIsYearly(!isYearly)}
            style={{ accentColor: '#facc15', transform: 'scale(1.3)' }}
          />
          <label className="text-sm text-white ml-2">Yearly</label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4 mt-12 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-gray-900/50 border ${plan.badge ? 'border-yellow-400' : 'border-gray-700'} rounded-2xl p-6 relative hover:scale-105 transition-all`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <plan.icon className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">{plan.price}</p>
                
                <ul className="text-sm space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-left">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => {
                    console.log(`🔥 CLICKED: ${plan.name}`);
                    plan.action();
                  }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 px-4 rounded-xl text-black font-bold transition-all"
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-purple-900/10 border border-purple-800 rounded-2xl p-10 mt-24 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Premium Add-On</h2>
          <p className="text-yellow-400 text-xl font-bold">+ $47 /month</p>
          <p className="text-sm text-gray-400 mt-2">Add Route Intelligence to any plan</p>
          <ul className="text-sm mt-4 text-white space-y-1">
            <li>✓ Real-time route monitoring & optimization</li>
            <li>✓ AI route analysis, performance alerts</li>
            <li>✓ Custom integrations</li>
          </ul>
          <button 
            onClick={() => {
              console.log('Route Intelligence Add-On triggered');
              alert('Route Intelligence Add-On - Contact sales@saintvision.ai');
            }}
            className="bg-yellow-500 hover:bg-yellow-600 mt-6 px-6 py-2 rounded-xl text-black font-bold"
          >
            Add Route Intelligence
          </button>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
