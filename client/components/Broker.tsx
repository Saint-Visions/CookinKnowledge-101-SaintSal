import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  MapPin,
  Building2,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink,
  Target,
  BarChart3,
  Globe,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

interface BrokerProps {
  className?: string;
}

export function Broker({ className }: BrokerProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Hero Section with Fixed Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image - Fixed */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Febd47fed098349388931faa2383312f3?format=webp&width=800')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40" />

        {/* Header */}
        <div className="relative z-10 border-b border-border/30 px-6 py-4" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
          <div className="flex items-center justify-between">
            {/* Left: Logos */}
            <div className="flex items-center gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"
                alt="SaintVision Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="h-8 w-px bg-border/30"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"
                alt="Cookin' Knowledge"
                className="w-8 h-8 object-contain opacity-80"
              />
            </div>

            {/* Center: Navigation */}
            <nav className="flex items-center gap-1">
              <Link to="/" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/search" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Search
              </Link>
              <Link to="/warroom" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                WarRoom
              </Link>
              <Link to="/tools" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Tools
              </Link>
              <Link to="/institute" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Institute
              </Link>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                Broker
              </div>
              <Link to="/help" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Help
              </Link>
            </nav>

            {/* Right: Account */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Crown className="w-4 h-4 mr-2 text-[hsl(var(--gold))]" />
                Upgrade
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-xs font-bold text-black">SV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Menu - Left */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
            <div className="space-y-4">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                <h3 className="text-lg font-bold text-foreground">Quick Access</h3>
              </div>
              <a 
                href="https://saintvisiongroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30 hover:border-[hsl(var(--gold))]/60 transition-all group"
              >
                <Building2 className="w-5 h-5 text-[hsl(var(--gold))]" />
                <div>
                  <div className="text-sm font-medium text-foreground">SVG Portal</div>
                  <div className="text-xs text-muted-foreground">saintvisiongroup.com</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[hsl(var(--gold))] group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://saintvisiontech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
              >
                <Zap className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-medium text-foreground">Tech Portal</div>
                  <div className="text-xs text-muted-foreground">saintvisiontech.com</div>
                </div>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Side Menu - Right */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-foreground">Live Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-400/10 to-emerald-400/5 border border-green-400/20">
                  <div className="text-sm font-medium text-green-400">Portfolio Value</div>
                  <div className="text-lg font-bold text-foreground">$127M+</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-400/10 to-cyan-400/5 border border-blue-400/20">
                  <div className="text-sm font-medium text-blue-400">Active Loans</div>
                  <div className="text-lg font-bold text-foreground">284</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/10 to-yellow-400/5 border border-[hsl(var(--gold))]/20">
                  <div className="text-sm font-medium text-[hsl(var(--gold))]">Properties</div>
                  <div className="text-lg font-bold text-foreground">156</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-12">
              <h1 className="text-7xl font-bold text-foreground mb-8 leading-tight">
                Saint Vision Group
                <br />
                <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">
                  Elite Brokerage & Lending
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionizing high-end financial services with AI-driven real estate investments, 
                bespoke lending solutions, and premium brokerage expertise for discerning clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-[hsl(var(--gold))]/30">
                <Building2 className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                <h3 className="text-xl font-bold text-foreground mb-3">Real Estate Investment</h3>
                <p className="text-muted-foreground">Luxury properties, commercial investments, and exclusive syndication opportunities.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-cyan-400/30">
                <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">AI-Powered Lending</h3>
                <p className="text-muted-foreground">Instant loan approvals with personalized terms and predictive risk management.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-blue-400/30">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Bespoke Services</h3>
                <p className="text-muted-foreground">High-touch client experience with customized wealth management strategies.</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold text-lg px-8 py-3 shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:shadow-[0_0_40px_rgba(255,215,0,0.9)] transition-all">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Properties
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 py-12" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Elite <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">Financial Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We cater to high-net-worth individuals, corporate clients, and institutional investors 
              with cutting-edge AI technology and personalized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Real Estate Investments */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-yellow-400/5 border border-[hsl(var(--gold))]/20">
              <Building2 className="w-12 h-12 text-[hsl(var(--gold))] mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Real Estate Investments</h3>
              <p className="text-muted-foreground mb-6">
                Custom investment solutions tailored to each client's financial goals, from luxury properties 
                to commercial investments with AI-driven market analysis.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full"></div>
                  <span className="text-sm text-foreground">Property Acquisition & Portfolio Diversification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full"></div>
                  <span className="text-sm text-foreground">AI-Driven Investment Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full"></div>
                  <span className="text-sm text-foreground">Real Estate Syndication</span>
                </div>
              </div>
            </div>

            {/* AI-Powered Lending */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/5 border border-cyan-400/20">
              <Zap className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">AI-Powered Lending</h3>
              <p className="text-muted-foreground mb-6">
                Fast, efficient financing solutions with instant loan approvals, personalized terms, 
                and predictive risk management powered by SaintSal™ AI.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-foreground">Instant Loan Approvals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-foreground">Personalized Loan Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-foreground">Predictive Risk Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-400/10 to-emerald-400/5 border border-green-400/20">
              <div className="text-4xl font-bold text-green-400 mb-2 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">$127M+</div>
              <div className="text-sm text-muted-foreground">Portfolio Value</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-400/5 border border-blue-400/20">
              <div className="text-4xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">284</div>
              <div className="text-sm text-muted-foreground">Active Loans</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-yellow-400/5 border border-[hsl(var(--gold))]/20">
              <div className="text-4xl font-bold text-[hsl(var(--gold))] mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">156</div>
              <div className="text-sm text-muted-foreground">Properties Managed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-400/10 to-pink-400/5 border border-purple-400/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-gradient-to-br from-muted/10 to-muted/5 rounded-3xl p-12 border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">Elevate</span> Your Portfolio?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our exclusive clientele and experience the future of AI-powered financial services 
              with personalized strategies designed for high-net-worth success.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold shadow-[0_0_25px_rgba(255,215,0,0.7)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] transition-all">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 p-8">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Powered by</span>
          <span className="text-[hsl(var(--gold))] font-medium mx-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">SAINTSAL GOTTA GUY</span>
          <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
          <span className="mx-3">•</span>
          <span className="text-cyan-400">Elite Real Estate & AI-Powered Finance</span>
        </div>
      </footer>
    </div>
  );
}
