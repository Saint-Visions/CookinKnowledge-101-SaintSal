import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  Search,
  Shield,
  Users,
  MessageSquare,
  Wrench,
  ImageIcon,
  Rocket,
  FileText,
  Building2,
  Palette,
  Crown,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Zap,
  BarChart3,
  Calendar,
  Mail,
  Globe,
  Database,
  Code,
  Brain,
  Camera,
  Mic,
  Video,
  Layout,
  Target,
  TrendingUp
} from "lucide-react";

interface ToolsProps {
  className?: string;
}

const toolCategories = [
  {
    title: "AI Productivity",
    tools: [
      {
        icon: Brain,
        name: "SaintSalGPT 4.1",
        description: "Advanced AI companion for business operations",
        color: "from-blue-400 to-cyan-400",
        iconColor: "text-blue-400"
      },
      {
        icon: FileText,
        name: "Sticky Notes AI",
        description: "Intelligent note-taking with AI suggestions",
        color: "from-yellow-400 to-orange-400",
        iconColor: "text-yellow-400"
      },
      {
        icon: Wrench,
        name: "AI Tools Suite",
        description: "Complete toolkit for AI-powered workflows",
        color: "from-purple-400 to-pink-400",
        iconColor: "text-purple-400"
      },
      {
        icon: BarChart3,
        name: "Data Analytics",
        description: "AI-driven insights and reporting",
        color: "from-green-400 to-teal-400",
        iconColor: "text-green-400"
      }
    ]
  },
  {
    title: "Creative Suite",
    tools: [
      {
        icon: ImageIcon,
        name: "Image Generator",
        description: "Create stunning visuals with AI",
        color: "from-pink-400 to-rose-400",
        iconColor: "text-pink-400"
      },
      {
        icon: Rocket,
        name: "SVG Launchpad",
        description: "Design and launch SVG graphics",
        color: "from-orange-400 to-red-400",
        iconColor: "text-orange-400"
      },
      {
        icon: Video,
        name: "Video Studio",
        description: "AI-powered video creation and editing",
        color: "from-indigo-400 to-purple-400",
        iconColor: "text-indigo-400"
      },
      {
        icon: Layout,
        name: "Design Studio",
        description: "Professional design templates and tools",
        color: "from-cyan-400 to-blue-400",
        iconColor: "text-cyan-400"
      }
    ]
  },
  {
    title: "Business Operations",
    tools: [
      {
        icon: Building2,
        name: "My Business",
        description: "Comprehensive business management",
        color: "from-green-400 to-emerald-400",
        iconColor: "text-green-400"
      },
      {
        icon: Users,
        name: "PartnerTech.ai CRM",
        description: "Advanced customer relationship management",
        color: "from-teal-400 to-cyan-400",
        iconColor: "text-teal-400"
      },
      {
        icon: Calendar,
        name: "Smart Scheduler",
        description: "AI-powered meeting and task scheduling",
        color: "from-blue-400 to-indigo-400",
        iconColor: "text-blue-400"
      },
      {
        icon: Mail,
        name: "Email Assistant",
        description: "Intelligent email management and automation",
        color: "from-purple-400 to-violet-400",
        iconColor: "text-purple-400"
      }
    ]
  },
  {
    title: "Learning & Development",
    tools: [
      {
        icon: Palette,
        name: "SVT Institute of AI",
        description: "Advanced AI training and certification",
        color: "from-violet-400 to-purple-400",
        iconColor: "text-violet-400"
      },
      {
        icon: Code,
        name: "Code Academy",
        description: "Learn programming with AI guidance",
        color: "from-emerald-400 to-green-400",
        iconColor: "text-emerald-400"
      },
      {
        icon: Target,
        name: "Skill Tracker",
        description: "Monitor and develop professional skills",
        color: "from-red-400 to-pink-400",
        iconColor: "text-red-400"
      },
      {
        icon: TrendingUp,
        name: "Progress Analytics",
        description: "Track learning progress and insights",
        color: "from-amber-400 to-yellow-400",
        iconColor: "text-amber-400"
      }
    ]
  }
];

export function Tools({ className }: ToolsProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <div className="border-b border-border/30 px-6 py-4">
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
            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
              Tools
            </div>
            <Link to="#" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            AI Tools & <span className="text-[hsl(var(--gold))]">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover powerful AI-driven tools designed to enhance your productivity, creativity, and business operations. 
            Everything you need to succeed in the digital age.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              25+ AI Tools Available
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Zap className="w-4 h-4" />
              Powered by Azure & SaintSalGPT
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm text-[hsl(var(--gold))]">
              <Sparkles className="w-4 h-4" />
              Enterprise Grade
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-16">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool, toolIndex) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={toolIndex}
                      className="group relative p-6 rounded-2xl bg-muted/5 border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl"
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-10`}>
                          <Icon className={`w-6 h-6 ${tool.iconColor}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {tool.description}
                        </p>
                        
                        {/* Launch Button */}
                        <div className="flex items-center justify-between">
                          <Button variant="ghost" size="sm" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Launch Tool
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                          <div className="text-xs text-[hsl(var(--gold))] opacity-60">
                            Available
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-8 rounded-3xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to transform your workflow?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who are already using SaintVisionAI tools to boost their productivity and creativity.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold">
              <Crown className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 p-6 mt-16">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Powered by</span>
          <span className="text-[hsl(var(--gold))] font-medium mx-2">SAINTSAL GOTTA GUY</span>
          <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
          <span className="mx-3">•</span>
          <span className="text-cyan-400">Azure Cognitive Services</span>
          <span className="mx-3">•</span>
          <span className="text-blue-400">SaintSalGPT 4.1 SaintVisionAI</span>
        </div>
      </div>
    </div>
  );
}
