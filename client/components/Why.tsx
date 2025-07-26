import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  Brain,
  Shield,
  Zap,
  Heart,
  Target,
  Rocket,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Building2
} from "lucide-react";

interface WhyProps {
  className?: string;
}

export function Why({ className }: WhyProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Hero Section with Fixed Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image - Fixed */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa182b43f5461483aaa39c44d7e7d1628?format=webp&width=800')`
          }}
        />

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />

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
              <Link to="/legal" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Legal
              </Link>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                Why
              </div>
              <Link to="/help" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
                Help
              </Link>
              <Link to="#" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]/80">
                PartnerTech.ai
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

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h1 className="text-7xl font-bold text-foreground mb-6 leading-tight">
                What Separates
                <br />
                <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]">SaintVision AI™</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                We're not just building AI. We're building the future of human potential, 
                where technology serves purpose and intelligence serves the heart.
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 mb-16">
              <div className="flex items-center gap-2 text-lg text-cyan-400">
                <Brain className="w-6 h-6" />
                Patented HACP™ Technology
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="flex items-center gap-2 text-lg text-blue-400">
                <Heart className="w-6 h-6" />
                Faith-Guided Innovation
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="flex items-center gap-2 text-lg text-[hsl(var(--gold))] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
                <Crown className="w-6 h-6 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
                Enterprise-Grade Solutions
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold text-lg px-8 py-3 shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transition-all">
                <Rocket className="w-5 h-5 mr-2" />
                Experience the Difference
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Shield className="w-5 h-5 mr-2" />
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="relative z-10 py-24" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              We're Doing <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">Great Things</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To Change Lives. Every breakthrough, every innovation, every line of code is written 
              with one purpose: empowering human potential through divine wisdom and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Patented Technology */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-[hsl(var(--gold))]/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/10 flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-[hsl(var(--gold))]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Patented HACP™ Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Human-AI Connection Protocol (U.S. Patent 10,290,222) is the only AI system that truly adapts 
                  to human emotion and escalates intelligently. This isn't just AI—it's emotional intelligence.
                </p>
              </div>
              <div className="text-sm text-[hsl(var(--gold))] font-medium group-hover:translate-x-1 transition-transform">
                Learn about our patent →
              </div>
            </div>

            {/* Faith-Guided Innovation */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/10 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Faith-Guided Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technology with purpose. Every feature we build is guided by principles of service, 
                  integrity, and genuine care for human flourishing. AI that serves, not exploits.
                </p>
              </div>
              <div className="text-sm text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">
                Discover our mission →
              </div>
            </div>

            {/* Enterprise Excellence */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GDPR, CCPA, SOC 2 compliant with AES-256 encryption. Delaware LP structure with 
                  separated IP holding for maximum protection and investor confidence.
                </p>
              </div>
              <div className="text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                View our compliance →
              </div>
            </div>

            {/* Adaptive Intelligence */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-green-400/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/10 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Adaptive Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  SaintSal doesn't just respond—it learns, adapts, and grows with you. 
                  Real-time emotional calibration ensures every interaction feels personal and meaningful.
                </p>
              </div>
              <div className="text-sm text-green-400 font-medium group-hover:translate-x-1 transition-transform">
                Experience SaintSal →
              </div>
            </div>

            {/* Global Impact */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-400/10 flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Global Impact Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From healthcare to education, from enterprise to personal growth—our AI ecosystems 
                  are deployed where they matter most, changing lives at scale.
                </p>
              </div>
              <div className="text-sm text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
                See our impact →
              </div>
            </div>

            {/* Human-Centered Design */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30 hover:border-orange-400/50 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400/20 to-red-400/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Human-Centered Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every interface, every interaction, every algorithm is designed with human dignity at its core. 
                  Technology that enhances humanity, not replaces it.
                </p>
              </div>
              <div className="text-sm text-orange-400 font-medium group-hover:translate-x-1 transition-transform">
                See our approach →
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-[hsl(var(--gold))] mb-2 drop-shadow-[0_0_20px_rgba(255,215,0,0.9)]">$75M+</div>
              <div className="text-sm text-muted-foreground">Patent Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm text-muted-foreground">AI Tools & Features</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Purpose-Driven</div>
            </div>
          </div>

          {/* Ease of Use Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-cyan-400">Effortlessly</span> Powerful
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complex AI technology made simple. Our interfaces are designed for humans, not engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">One-Click AI Deployment</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Instant Setup</h4>
                      <p className="text-muted-foreground">Deploy enterprise-grade AI in under 5 minutes. No technical expertise required.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Intuitive Interface</h4>
                      <p className="text-muted-foreground">Natural conversation flows that feel like talking to your smartest colleague.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Zero Learning Curve</h4>
                      <p className="text-muted-foreground">Start getting value immediately. Our AI adapts to you, not the other way around.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/20">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-4">5min</div>
                  <div className="text-lg text-foreground mb-2">Average Setup Time</div>
                  <div className="text-sm text-muted-foreground">From zero to AI-powered in minutes</div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Level Technology Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-[hsl(var(--gold))]">Enterprise-Grade</span> Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on Azure Cognitive Services with patented HACP™ protocol and military-grade security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 border border-blue-400/20">
                <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Azure AI</h4>
                <p className="text-sm text-muted-foreground">Microsoft's enterprise AI infrastructure powers our cognitive engine</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-yellow-400/10 border border-[hsl(var(--gold))]/20">
                <Shield className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">HACP™ Protocol</h4>
                <p className="text-sm text-muted-foreground">Patented adaptive escalation technology (US 10,290,222)</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-400/10 to-teal-400/10 border border-cyan-400/20">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Real-Time Sync</h4>
                <p className="text-sm text-muted-foreground">Millisecond response times with global edge deployment</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-400/10 to-emerald-400/10 border border-green-400/20">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Multi-Modal AI</h4>
                <p className="text-sm text-muted-foreground">Text, voice, image, and gesture recognition in one platform</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted/10 to-muted/5 rounded-2xl p-8 border border-border/30">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Security & Compliance
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SOC 2 Type II Certified</li>
                    <li>• GDPR & CCPA Compliant</li>
                    <li>• AES-256 Encryption</li>
                    <li>• Zero-Trust Architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    Performance & Scale
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 99.9% Uptime SLA</li>
                    <li>• Auto-scaling Infrastructure</li>
                    <li>• Global CDN Distribution</li>
                    <li>• Millisecond Response Times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-blue-400" />
                    AI Capabilities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• GPT-4 & Claude Integration</li>
                    <li>• Custom Model Training</li>
                    <li>• Emotional Intelligence</li>
                    <li>• Adaptive Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Applications Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Real-World <span className="text-green-400">Applications</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how Saint Vision AI transforms industries and changes lives across healthcare, education, and enterprise.
              </p>
            </div>

            <div className="space-y-12">
              {/* Healthcare */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold text-foreground">Healthcare & Therapy</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Athena.ai revolutionizes patient care with adaptive therapy protocols and emotional intelligence
                    that helps stroke patients, ADHD management, and autism support programs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-foreground">40% faster recovery rates in stroke rehabilitation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span className="text-foreground">85% patient engagement improvement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-foreground">HIPAA-compliant with family integration</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-2xl p-8 border border-red-400/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-red-400 mb-2">95%</div>
                    <div className="text-lg text-foreground mb-2">Patient Satisfaction</div>
                    <div className="text-sm text-muted-foreground">Athena.ai therapy programs</div>
                  </div>
                </div>
              </div>

              {/* Enterprise */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-2xl p-8 border border-blue-400/20 lg:order-1">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">300%</div>
                    <div className="text-lg text-foreground mb-2">ROI Increase</div>
                    <div className="text-sm text-muted-foreground">Enterprise implementations</div>
                  </div>
                </div>
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold text-foreground">Enterprise Operations</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    PartnerTech.ai and our WarRoom platform streamline business operations, automate workflows,
                    and provide intelligent insights that drive growth and efficiency.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span className="text-foreground">Automated CRM routing and lead qualification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      <span className="text-foreground">Real-time business intelligence dashboards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                      <span className="text-foreground">24/7 AI-powered customer support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <h3 className="text-2xl font-bold text-foreground">Education & Training</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    SVTTeach.ai transforms learning with adaptive curricula that scale from individual tutoring
                    to enterprise training programs, all powered by our HACP™ escalation protocol.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-foreground">Personalized learning paths for every student</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-foreground">Real-time progress tracking and insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      <span className="text-foreground">Scalable from 1 to 10,000+ learners</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-2xl p-8 border border-purple-400/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-400 mb-2">67%</div>
                    <div className="text-lg text-foreground mb-2">Learning Speed</div>
                    <div className="text-sm text-muted-foreground">Improvement vs traditional methods</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-muted/10 to-muted/5 rounded-3xl p-12 border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of organizations who've discovered what happens when AI meets purpose,
              when technology serves the heart, and when innovation changes lives.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold shadow-[0_0_25px_rgba(255,215,0,0.7)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] transition-all">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 p-8">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Powered by</span>
          <span className="text-[hsl(var(--gold))] font-medium mx-2">SAINTSAL GOTTA GUY</span>
          <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
          <span className="mx-3">•</span>
          <span className="text-cyan-400">Changing Lives Through Purpose-Driven AI</span>
        </div>
      </footer>
    </div>
  );
}
