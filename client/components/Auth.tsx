import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  ArrowRight,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Brain,
  Zap,
  Shield
} from "lucide-react";

interface AuthProps {
  className?: string;
}

export function Auth({ className }: AuthProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic here
    console.log("Auth submit:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Background Image - Fixed */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F92c010749dfe4c8da022a5b1c11b2a37?format=webp&width=800')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Logo & Brand */}
          <div className="text-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"
              alt="SaintVision Logo"
              className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">SaintVision AI</span>
            </h1>
            <p className="text-muted-foreground">
              {isSignUp ? "Join the AI Revolution" : "Welcome Back"}
            </p>
          </div>

          {/* Auth Form */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {isSignUp ? "Create Account" : "Sign In"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {isSignUp 
                  ? "Experience the power of HACP™ technology" 
                  : "Continue your AI journey"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-black/40 border border-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold))]/50 focus:shadow-[0_0_10px_rgba(255,215,0,0.2)] transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-black/40 border border-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-400/50 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link to="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 hover:from-yellow-400 hover:to-[hsl(var(--gold))] text-black font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSignUp ? (
                  <>
                    <Brain className="w-5 h-5 mr-2" />
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Toggle Mode */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
              >
                {isSignUp ? "Sign In Instead" : "Create Account"}
              </Button>
            </div>

            {/* Enterprise Notice */}
            {isSignUp && (
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20">
                <div className="flex items-center gap-3 mb-2">
                  <Crown className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <span className="text-sm font-medium text-foreground">Enterprise Ready</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  SOC 2 compliant • GDPR ready • Enterprise-grade security
                </p>
              </div>
            )}
          </div>

          {/* Bottom Links */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link to="/legal" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/help" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/" className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center text-xs text-muted-foreground/60">
          <span>Powered by</span>
          <span className="text-[hsl(var(--gold))] font-medium mx-2 drop-shadow-[0_0_5px_rgba(255,215,0,0.4)]">SAINTSAL GOTTA GUY</span>
          <Sparkles className="w-3 h-3 text-[hsl(var(--gold))]" />
        </div>
      </div>
    </div>
  );
}
