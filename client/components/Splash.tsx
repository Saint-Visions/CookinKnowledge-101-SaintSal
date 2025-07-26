import { useState, useEffect } from "react";
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
  Zap,
  Target,
  Award,
  Building2,
  Heart,
  Shield,
  Star,
  ChevronDown,
  Play
} from "lucide-react";

interface SplashProps {
  className?: string;
}

export function Splash({ className }: SplashProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ["Intelligence", "Innovation", "Excellence", "Purpose"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Subtle Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F88335b4853ee4a66a62fe88e75199bfd?format=webp&width=800"
              alt="Sv. Logo"
              className="w-12 h-12 object-contain opacity-80"
            />
            <div className="h-8 w-px bg-border/20"></div>
            <div className="text-[hsl(var(--gold))] font-light text-sm tracking-[0.3em] uppercase opacity-60">
              COOKIN' KNOWLEDGE
            </div>
          </div>
          <div className="text-xs text-muted-foreground/40 font-light tracking-wider">
            EST. 2023
          </div>
        </div>
      </div>

      {/* Animated Background Particles - Ultra Fine Cinematic Dust */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[hsl(var(--gold))] rounded-full opacity-5"
            style={{
              width: `${Math.random() * 1 + 0.2}px`,
              height: `${Math.random() * 1 + 0.2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `ultra-fine-drift ${40 + Math.random() * 60}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 80}s`,
              filter: 'blur(1px)',
              boxShadow: '0 0 4px rgba(255, 215, 0, 0.1)'
            }}
          />
        ))}
        {[...Array(100)].map((_, i) => (
          <div
            key={`micro-${i}`}
            className="absolute bg-[hsl(var(--gold))] rounded-full opacity-3"
            style={{
              width: '0.3px',
              height: '0.3px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `micro-float ${60 + Math.random() * 40}s infinite linear`,
              animationDelay: `${Math.random() * 50}s`,
              filter: 'blur(0.8px)',
              boxShadow: '0 0 2px rgba(255, 215, 0, 0.15)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Logo Animation */}
          <div className={`mb-12 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F62f2dc3414ab48ea8b95074999a49f4e?format=webp&width=800"
                alt="SaintSal™"
                className="w-56 h-56 object-contain mx-auto mb-8 drop-shadow-[0_0_80px_rgba(255,215,0,1)] relative z-10"
                style={{
                  filter: 'drop-shadow(0 0 60px rgba(255,215,0,0.6)) drop-shadow(0 0 20px rgba(255,215,0,0.7)) brightness(1.1) contrast(1.05)',
                  animation: 'brain-bounce 3s ease-in-out infinite'
                }}
              />
              {/* Floating Orbital Elements */}
              <div className="absolute inset-0 w-48 h-48 -m-8">
                <div className="absolute w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-60 animate-orbital-1" style={{ top: '10%', left: '50%' }} />
                <div className="absolute w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full opacity-50 animate-orbital-2" style={{ top: '30%', right: '15%' }} />
                <div className="absolute w-2.5 h-2.5 bg-[hsl(var(--gold))] rounded-full opacity-70 animate-orbital-3" style={{ bottom: '20%', left: '20%' }} />
                <div className="absolute w-1 h-1 bg-[hsl(var(--gold))] rounded-full opacity-40 animate-orbital-4" style={{ top: '60%', right: '30%' }} />
                <div className="absolute w-3 h-3 bg-[hsl(var(--gold))] rounded-full opacity-30 animate-orbital-5" style={{ top: '45%', left: '5%' }} />
              </div>
            </div>
          </div>

          {/* Main Heading with Animated Words */}
          <div className={`mb-12 transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-8xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-300 to-[hsl(var(--gold))] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,215,0,0.9)]">
                SaintVisionAI™
              </span>
              <br />
              <span className="text-5xl">Where Technology Meets</span>
              <br />
              <span className="text-6xl text-cyan-400 transition-all duration-1000 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
                {words[currentWord]}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`mb-12 transition-all duration-2000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Revolutionizing industries through <span className="text-[hsl(var(--gold))] font-semibold">patented HACP™ technology</span>,
              faith-guided innovation, and AI solutions that change lives across healthcare, education, and enterprise.
            </p>
          </div>

          {/* SaintSal™ Character */}
          <div className={`mb-16 transition-all duration-2000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
              {/* Character Image */}
              <div className="flex-1 text-center lg:text-left">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fb8034e4b403449878ea0a06b2b0dae90?format=webp&width=800"
                  alt="SaintSal™ - Your AI Companion"
                  className="w-72 h-80 object-contain mx-auto lg:mx-0 drop-shadow-[0_0_50px_rgba(255,215,0,0.4)]"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.3)) brightness(1.1) contrast(1.05)',
                    animation: 'character-glow 6s ease-in-out infinite alternate'
                  }}
                />
              </div>

              {/* Welcome Message */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-bold text-[hsl(var(--gold))] mb-4 drop-shadow-[0_0_25px_rgba(255,215,0,0.9)]">
                  SaintSal™ + You
                </h3>
                <p className="text-xl text-cyan-400 font-light tracking-wide mb-6">
                  Your Sophisticated AI Companion
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Meet your intelligent companion who combines cutting-edge AI with genuine personality.
                  SaintSal™ adapts to your needs, learns your preferences, and delivers results with style and sophistication.
                </p>

                {/* Companion Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 bg-[hsl(var(--gold))] rounded-full drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"></div>
                    <span className="text-muted-foreground">Adaptive Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-muted-foreground">Personalized Responses</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-muted-foreground">Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-muted-foreground">Always Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Team Section */}
          <div className={`mb-20 transition-all duration-2000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet the <span className="text-[hsl(var(--gold))] drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">SaintSal™ Family</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From the first designs to today - the evolution of our AI companions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Original Character Designs */}
              <div className="text-center">
                <div className="relative mb-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F84af5f2695af4e7f9a04ecf7ea17b87c?format=webp&width=800"
                    alt="Original SaintSal Character Designs"
                    className="w-full max-w-md mx-auto rounded-2xl border border-[hsl(var(--gold))]/30 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05)',
                    }}
                  />
                  <div className="absolute -top-4 -right-4 bg-[hsl(var(--gold))] text-black px-3 py-1 rounded-full text-sm font-bold">
                    Original Designs
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Where It All Began</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The first sketches of Athena, Baby Sal, and Big Sal - capturing the essence
                  of what would become our revolutionary AI family. From legal expertise to tech innovation,
                  each character brought unique talents to life.
                </p>
              </div>

              {/* Current SaintSal */}
              <div className="text-center">
                <div className="relative mb-8">
                  <img
                    src="https://cdn.builder.io/o/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F1306a54abf0649c5b8fb0ecac571503c?alt=media&token=b8d34ce4-0ad0-43cd-865d-e2bd8bf977db&apiKey=2c553a9d8cf24e6eae81a4a63962c5a4"
                    alt="Modern SaintSal™ Interface"
                    className="w-full max-w-md mx-auto rounded-2xl border border-cyan-400/30 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                    style={{
                      filter: 'brightness(1.1) contrast(1.05)',
                    }}
                  />
                  <div className="absolute -top-4 -left-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Today
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">SaintSal™ Evolved</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From those early concepts to today's sophisticated AI companion.
                  SaintSal™ now combines the wisdom of Athena, the innovation of Big Sal,
                  and the heart of the original vision into one powerful, adaptive AI experience.
                </p>
              </div>
            </div>

            {/* Character Traits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-400/10 to-pink-400/10 border border-purple-400/20">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Athena's Wisdom</h4>
                <p className="text-sm text-muted-foreground">Strategic thinking and divine intelligence</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-yellow-400/10 border border-[hsl(var(--gold))]/20">
                <div className="w-12 h-12 bg-[hsl(var(--gold))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-[hsl(var(--gold))]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Big Sal's Innovation</h4>
                <p className="text-sm text-muted-foreground">Legal expertise meets cutting-edge tech</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-bold text-foreground mb-2">The Original Heart</h4>
                <p className="text-sm text-muted-foreground">Purpose-driven AI with genuine care</p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transition-all duration-2000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30 hover:border-[hsl(var(--gold))]/60 transition-all duration-500 hover:scale-105 cursor-pointer">
              <Brain className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">HACP™ Protocol</h3>
              <p className="text-sm text-muted-foreground">Patented adaptive AI that learns and responds with emotional intelligence</p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 cursor-pointer">
              <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground">SOC 2 compliant with enterprise-grade security and scalability</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-400/10 border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 cursor-pointer">
              <Heart className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">Faith-Guided</h3>
              <p className="text-sm text-muted-foreground">Technology with soul - ethical AI designed to uplift humanity</p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 cursor-pointer">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">Global Impact</h3>
              <p className="text-sm text-muted-foreground">Transforming healthcare, education, and enterprise worldwide</p>
            </div>
          </div>

          {/* Stats Banner */}
          <div className={`mb-16 transition-all duration-2000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm rounded-3xl p-8 border border-[hsl(var(--gold))]/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(var(--gold))] mb-2 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">$75M+</div>
                <div className="text-sm text-muted-foreground">Patent Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24K+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Purpose-Driven</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`transition-all duration-2000 delay-2500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link to="/search">
                <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 hover:from-yellow-400 hover:to-[hsl(var(--gold))] text-black font-bold text-2xl px-12 py-4 rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.8)] hover:shadow-[0_0_70px_rgba(255,215,0,1)] transition-all duration-500 transform hover:scale-105 relative">
                  <span className="relative">
                    <span className="tracking-wide">Start Cookin</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"></div>
                  </span>
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Button>
              </Link>
              <Link to="/why">
                <Button variant="outline" size="lg" className="text-xl px-12 py-4 rounded-2xl border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 transition-all duration-500 transform hover:scale-105">
                  <Play className="w-6 h-6 mr-3" />
                  Watch Our Story
                </Button>
              </Link>
            </div>

            {/* Quick Access Menu */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
              <Link to="/tools" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">AI Tools</div>
              </Link>
              <Link to="/warroom" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">WarRoom</div>
              </Link>
              <Link to="/broker" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-[hsl(var(--gold))]/50 transition-all duration-300 hover:scale-105">
                <Building2 className="w-8 h-8 text-[hsl(var(--gold))] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">Brokerage</div>
              </Link>
              <Link to="/institute" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">Institute</div>
              </Link>
              <Link to="/legal" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">Legal</div>
              </Link>
              <Link to="/help" className="group p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-border/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-medium text-foreground">Support</div>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-2000 delay-3000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center animate-bounce">
              <p className="text-sm text-muted-foreground mb-2">Discover the Future</p>
              <ChevronDown className="w-6 h-6 text-[hsl(var(--gold))]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/20 to-transparent p-4">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Powered by</span>
          <span className="text-[hsl(var(--gold))] font-bold mx-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">SAINTSAL GOTTA GUY</span>
          <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
          <span className="mx-3">•</span>
          <span className="text-cyan-400">Changing Lives Through Divine AI</span>
        </div>
      </div>
    </div>
  );
}
