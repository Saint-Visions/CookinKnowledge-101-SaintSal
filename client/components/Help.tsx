import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  Search,
  MessageCircle,
  BookOpen,
  Video,
  Mail,
  Phone,
  Clock,
  Users,
  Shield,
  Zap,
  HelpCircle,
  FileText,
  Settings,
  Headphones,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Rocket
} from "lucide-react";

interface HelpProps {
  className?: string;
}

const helpCategories = [
  {
    title: "Getting Started",
    icon: Rocket,
    color: "from-blue-400 to-cyan-400",
    iconColor: "text-blue-400",
    articles: [
      "Quick Setup Guide",
      "Your First SaintSal Conversation",
      "Understanding HACP™ Technology",
      "Account Setup & Preferences"
    ]
  },
  {
    title: "Features & Tools",
    icon: Settings,
    color: "from-purple-400 to-pink-400",
    iconColor: "text-purple-400",
    articles: [
      "WarRoom Productivity Suite",
      "AI Tools & Automation",
      "CRM Integration Guide",
      "Advanced Search Features"
    ]
  },
  {
    title: "Billing & Plans",
    icon: Crown,
    color: "from-yellow-400 to-orange-400",
    iconColor: "text-[hsl(var(--gold))]",
    articles: [
      "Plan Comparison & Upgrades",
      "Billing & Payment Methods",
      "Enterprise Licensing",
      "Refund & Cancellation Policy"
    ]
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "from-green-400 to-emerald-400",
    iconColor: "text-green-400",
    articles: [
      "Data Protection & GDPR",
      "Security Best Practices",
      "API Keys & Authentication",
      "Compliance Documentation"
    ]
  },
  {
    title: "API & Integration",
    icon: Zap,
    color: "from-indigo-400 to-purple-400",
    iconColor: "text-indigo-400",
    articles: [
      "API Documentation",
      "Webhook Setup Guide",
      "Third-party Integrations",
      "Developer Resources"
    ]
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    color: "from-red-400 to-pink-400",
    iconColor: "text-red-400",
    articles: [
      "Common Issues & Solutions",
      "Performance Optimization",
      "Browser Compatibility",
      "System Status & Updates"
    ]
  }
];

const supportOptions = [
  {
    title: "Live Chat Support",
    description: "Get instant help from our AI-powered support team",
    icon: MessageCircle,
    color: "text-cyan-400",
    action: "Start Chat",
    availability: "24/7 Available"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides and feature demonstrations",
    icon: Video,
    color: "text-blue-400",
    action: "Watch Now",
    availability: "Self-Paced Learning"
  },
  {
    title: "Email Support",
    description: "Send detailed questions to our expert support team",
    icon: Mail,
    color: "text-green-400",
    action: "Send Email",
    availability: "24hr Response"
  },
  {
    title: "Priority Support",
    description: "Direct phone line for Enterprise customers",
    icon: Phone,
    color: "text-[hsl(var(--gold))]",
    action: "Call Now",
    availability: "Business Hours"
  }
];

export function Help({ className }: HelpProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-border/30 px-6 py-4" style={{ backgroundColor: '#000000' }}>
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
            <Link to="/why" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Why
            </Link>
            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
              Help
            </div>
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

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            How Can We <span className="text-cyan-400">Help</span> You?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get instant answers, watch tutorials, or connect with our expert support team. 
            We're here to ensure your success with Saint Vision AI.
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-4 border-2 border-cyan-400 rounded-xl bg-muted/5 focus-within:border-blue-400 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
              <Search className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or common questions..."
                className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-lg"
              />
              <Button size="lg" className="bg-cyan-400 hover:bg-cyan-300 text-black rounded-lg px-6">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-muted/5 border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-8 h-8 ${option.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      {option.action}
                    </Button>
                    <div className="text-xs text-muted-foreground">{option.availability}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Browse by <span className="text-blue-400">Category</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find detailed guides and documentation organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-muted/5 border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div
                        key={articleIndex}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{article}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/30">
                    <Button variant="ghost" size="sm" className="w-full justify-between text-sm">
                      View All Articles
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-muted/10 to-muted/5 rounded-3xl p-12 border border-border/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Still Need <span className="text-[hsl(var(--gold))]">Help</span>?
            </h3>
            <p className="text-lg text-muted-foreground">
              Our expert support team is standing by to assist you with any questions or technical issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Headphones className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">24/7 Live Support</h4>
              <p className="text-sm text-muted-foreground mb-4">Instant chat with our AI-powered support team</p>
              <Button size="sm" className="bg-cyan-400 hover:bg-cyan-300 text-black">
                Start Chat
              </Button>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Expert Consultation</h4>
              <p className="text-sm text-muted-foreground mb-4">Schedule a call with our technical specialists</p>
              <Button variant="outline" size="sm">
                Book Meeting
              </Button>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Community Forum</h4>
              <p className="text-sm text-muted-foreground mb-4">Connect with other users and share solutions</p>
              <Button variant="outline" size="sm">
                Join Forum
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Average response time: 2 minutes
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                98% satisfaction rate
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                99.9% uptime guarantee
              </div>
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
          <span className="text-cyan-400">Always Here When You Need Us</span>
        </div>
      </footer>
    </div>
  );
}
