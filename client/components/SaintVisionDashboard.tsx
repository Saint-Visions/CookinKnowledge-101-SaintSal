import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Calendar, 
  Users, 
  Search, 
  User, 
  BarChart3, 
  FileText, 
  Clock,
  ExternalLink,
  Bell,
  Sparkles,
  ArrowRight,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";

interface SaintVisionDashboardProps {
  className?: string;
}

const quickActions = [
  {
    icon: Plus,
    label: "New Project",
    description: "Create or import project",
    color: "bg-primary/10 text-primary",
    link: "#"
  },
  {
    icon: Calendar,
    label: "Book Meeting",
    description: "Schedule consultation",
    color: "bg-blue-500/10 text-blue-400",
    link: "#"
  },
  {
    icon: Sparkles,
    label: "SaintGPT 4.1",
    description: "AI Assistant",
    color: "bg-gradient-to-br from-primary/20 to-primary/10 text-primary",
    link: "/saintgpt"
  },
  {
    icon: Users,
    label: "AI Companion",
    description: "Smart assistant",
    color: "bg-purple-500/10 text-purple-400",
    link: "#"
  }
];

const metrics = [
  {
    label: "Pipeline Value",
    value: "$57,500",
    change: "+12.5%",
    positive: true
  },
  {
    label: "Active Deals",
    value: "24",
    change: "+3",
    positive: true
  },
  {
    label: "Conversations",
    value: "12",
    change: "+5",
    positive: true
  },
  {
    label: "Conversion Rate",
    value: "18.5%",
    change: "+2.1%",
    positive: true
  }
];

const recentActivity = [
  "New lead generated from website",
  "Meeting scheduled with prospect",
  "Proposal sent to client",
  "Contract signed - $12k deal"
];

export function SaintVisionDashboard({ className }: SaintVisionDashboardProps) {
  return (
    <div className={`flex-1 overflow-auto ${className}`}>
      {/* Hero Section */}
      <div className="relative px-8 py-12 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                    What Separates
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                    SaintVisionAI?
                  </h2>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Because your business deserves AI that actually makes sense — not 
                another confusing ChatGPT clone
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">No Learning Curve</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Built For You</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl">
                Experience The Difference
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 min-w-[320px]">
              {metrics.map((metric, index) => (
                <div key={index} className="p-4 lg:p-6 rounded-2xl bg-muted/30 backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {metric.label}
                  </div>
                  <div className={`text-xs font-medium ${
                    metric.positive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">⚡ Quick Actions</h3>
            <span className="text-sm text-muted-foreground">Explore complete your business efficiently</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              const content = (
                <div className="group p-6 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${action.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {action.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              );
              
              return action.link.startsWith('/') ? (
                <Link key={index} to={action.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pipeline Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-muted/20">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-foreground">📈 Pipeline Overview</h4>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary">$57,500</div>
                  <div className="text-muted-foreground">Current pipeline value</div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-xl font-semibold text-foreground">24.6k</div>
                      <div className="text-sm text-muted-foreground">Deals</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-foreground">12</div>
                      <div className="text-sm text-muted-foreground">Conversations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                      **Enterprise Command Center Active**
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Welcome to your AI powered business central room. I can analyze your pipeline, 
                      draft contracts sequences, and execute GHL workflows. What can I help you accomplish?
                    </p>
                    <Link to="/saintgpt">
                      <Button variant="outline" size="sm">
                        Open SaintGPT
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* GHL Quick Access */}
              <div className="p-6 rounded-2xl bg-muted/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">⚡ GHL Quick Access</h4>
                <div className="space-y-3">
                  {[
                    { icon: BarChart3, label: "Dashboard" },
                    { icon: User, label: "Contacts" },
                    { icon: Calendar, label: "Calendar" },
                    { icon: FileText, label: "Pipeline" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/40 cursor-pointer transition-colors">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    );
                  })}
                  <Button className="w-full mt-4" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="p-6 rounded-2xl bg-muted/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">🔄 Recent Activity</h4>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            API Saint Gotthardt 🔥
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Add more options within GHL WorkFlows or leverage strategic</span>
            <Button variant="ghost" size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">
              ⚡
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
