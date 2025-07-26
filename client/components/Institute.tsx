import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  Brain,
  Rocket,
  Users,
  Globe,
  ArrowRight,
  BookOpen,
  Zap,
  Target,
  Award,
  ExternalLink,
  GraduationCap,
  Microscope,
  Cpu
} from "lucide-react";

interface InstituteProps {
  className?: string;
}

export function Institute({ className }: InstituteProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Hero Section with Fixed Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image - Fixed */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F567a8a9c01144459964543d1d90792d0?format=webp&width=800')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60" />

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
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                Institute
              </div>
              <Link to="/broker" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Broker
              </Link>
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
                <Brain className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                <h3 className="text-lg font-bold text-foreground">Quick Access</h3>
              </div>
              <a 
                href="https://saintvisiontech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30 hover:border-[hsl(var(--gold))]/60 transition-all group"
              >
                <GraduationCap className="w-5 h-5 text-[hsl(var(--gold))]" />
                <div>
                  <div className="text-sm font-medium text-foreground">Institute Portal</div>
                  <div className="text-xs text-muted-foreground">saintvisiontech.com</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[hsl(var(--gold))] group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://saintvisiongroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
              >
                <Crown className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm font-medium text-foreground">SVG Portal</div>
                  <div className="text-xs text-muted-foreground">saintvisiongroup.com</div>
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
                <Microscope className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-foreground">Research Hub</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-400/10 to-cyan-400/5 border border-blue-400/20">
                  <div className="text-sm font-medium text-blue-400">Active Studies</div>
                  <div className="text-xs text-muted-foreground">12 ongoing projects</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-400/10 to-emerald-400/5 border border-green-400/20">
                  <div className="text-sm font-medium text-green-400">Publications</div>
                  <div className="text-xs text-muted-foreground">27 research papers</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-400/10 to-pink-400/5 border border-purple-400/20">
                  <div className="text-sm font-medium text-purple-400">Collaborations</div>
                  <div className="text-xs text-muted-foreground">8 partner institutions</div>
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
                Saint Vision Institute
                <br />
                <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">
                  AI Research & Development
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the future of artificial intelligence through faith-guided research, 
                cutting-edge development, and revolutionary applications that transform industries and change lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-[hsl(var(--gold))]/30">
                <Brain className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                <h3 className="text-xl font-bold text-foreground mb-3">HACP™ Research</h3>
                <p className="text-muted-foreground">Advancing our patented Human-AI Connection Protocol with daily studies and breakthrough innovations.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-cyan-400/30">
                <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">AI Platform Development</h3>
                <p className="text-muted-foreground">Building SaintSal™, Athen.ai, EbyTech.ai, and next-generation AI solutions.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-blue-400/30">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Global Impact Studies</h3>
                <p className="text-muted-foreground">Measuring and optimizing AI's positive impact across healthcare, education, and enterprise.</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold text-lg px-8 py-3 shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:shadow-[0_0_40px_rgba(255,215,0,0.9)] transition-all">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Research
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                <BookOpen className="w-5 h-5 mr-2" />
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Research Platforms Section */}
      <div className="relative z-10 py-24" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our <span className="text-cyan-400">Research Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each platform represents years of research and development, powering real-world applications 
              while advancing the state of AI science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-yellow-400/5 border border-[hsl(var(--gold))]/20">
              <Brain className="w-12 h-12 text-[hsl(var(--gold))] mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">SaintSal™ AI Concierge</h3>
              <p className="text-muted-foreground mb-6">
                Your AI Concierge & Growth Partner - an always-available virtual guide powered by HACP™ 
                technology that adapts to user emotional state and provides personalized assistance.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-[hsl(var(--gold))]">• Virtual financial coaching</div>
                <div className="text-sm text-[hsl(var(--gold))]">• Spiritual wellness guidance</div>
                <div className="text-sm text-[hsl(var(--gold))]">• Adaptive learning protocols</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-400/10 to-pink-400/5 border border-red-400/20">
              <Heart className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Athen.ai Healthcare</h3>
              <p className="text-muted-foreground mb-6">
                Healthcare & Legacy Planning AI focused on elder care support, medication management, 
                and preserving family knowledge through AI-guided interviews.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-red-400">• Elder care support systems</div>
                <div className="text-sm text-red-400">• Digital legacy preservation</div>
                <div className="text-sm text-red-400">• Medication management AI</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-400/10 to-indigo-400/5 border border-blue-400/20">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">EbyTech.ai Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise Automation & FinTech Platform that combines FinTech and EdTech, 
                streamlining transactions while educating users for better outcomes.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-blue-400">• Automated loan underwriting</div>
                <div className="text-sm text-blue-400">• Risk assessment algorithms</div>
                <div className="text-sm text-blue-400">• Client education modules</div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-400/10 to-violet-400/5 border border-purple-400/20">
              <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">SVTteach.ai Education</h3>
              <p className="text-muted-foreground mb-6">
                Interactive Education & Training Platform utilizing HACP™ protocol for schools, 
                universities, and corporate training with adaptive AI tutors.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-purple-400">• Personalized learning paths</div>
                <div className="text-sm text-purple-400">• Virtual AI tutors</div>
                <div className="text-sm text-purple-400">• 24,000+ users in pilots</div>
              </div>
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
          <span className="text-cyan-400">Advancing AI Through Faith & Science</span>
        </div>
      </footer>
    </div>
  );
}

// Missing import
import { Heart } from "lucide-react";
