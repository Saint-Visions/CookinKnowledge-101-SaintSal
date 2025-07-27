import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import { useAuth } from '../hooks/useAuth';

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const { user, refreshUserData } = useAuth();
  const [loading, setLoading] = useState(true);
  
  const tier = searchParams.get('tier');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Refresh user data to get updated tier
    const refreshUserData = async () => {
      try {
        await refreshUser();
        setLoading(false);
      } catch (error) {
        console.error('Failed to refresh user data:', error);
        setLoading(false);
      }
    };

    refreshUserData();
  }, []);

  const tierNames = {
    unlimited: 'Unlimited GPT Access',
    core: 'Core Tools',
    pro: 'Pro Suite', 
    fullPro: 'Full White-Label',
    custom: 'Custom Enterprise'
  };

  const tierFeatures = {
    unlimited: ['Unlimited GPT-4o messaging', 'Supersal™ Companion Mode', 'Chat history'],
    core: ['Everything in Unlimited', 'CRM Access via GHL', 'Chrome Extension', 'Partner Dashboard'],
    pro: ['Everything in Core', 'Admin Dashboards', 'Webhook Triggers', 'Team Management'],
    fullPro: ['Everything in Pro', '10 GHL Subaccounts', 'Custom Branding', 'Revenue Sharing'],
    custom: ['Everything in White Label', 'Full Onboarding', 'Custom Domain', 'Enterprise Support']
  };

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: "#090909" }}>
      <GlobalHeader />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            
            <h1 className="text-5xl font-light mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Welcome to SaintVisionAI!
            </h1>
            
            <p className="text-xl text-white/70 mb-8">
              Your {tierNames[tier as keyof typeof tierNames] || 'premium'} plan is now active
            </p>
          </div>

          {/* Plan Details */}
          {tier && (
            <Card className="bg-gray-900/50 border-green-500/30 max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  {tierNames[tier as keyof typeof tierNames]} Activated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tierFeatures[tier as keyof typeof tierFeatures]?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {sessionId && (
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-sm text-white/50">
                      Order ID: {sessionId}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white mb-6">What's Next?</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 px-8"
              >
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/5 px-8"
              >
                <Link to="/support">
                  Get Support
                </Link>
              </Button>
            </div>
          </div>

          {/* Supersal Onboarding Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              🤖 SaintSal™ is Ready!
            </h3>
            <p className="text-white/70 mb-4">
              Your AI companion has been upgraded and is ready to unlock all the new features in your dashboard.
            </p>
            <p className="text-sm text-white/50">
              Tip: Try saying "Hey SaintSal, show me around" when you get to the dashboard!
            </p>
          </div>

        </div>
      </div>
      
      <GlobalFooter />
    </div>
  );
}
