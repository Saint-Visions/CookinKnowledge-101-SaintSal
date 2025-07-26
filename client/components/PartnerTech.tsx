import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  ArrowRight,
  Phone,
  Users,
  Target,
  TrendingUp,
  Calendar,
  MessageSquare,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Zap,
  Brain,
  Building2,
  DollarSign,
  BarChart3,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Mail,
  Globe,
  Settings,
  Menu,
  X,
} from "lucide-react";

interface PartnerTechProps {
  className?: string;
}

export function PartnerTech({ className }: PartnerTechProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  const stats = [
    {
      label: "New Leads",
      value: "47",
      change: "+12%",
      trend: "up",
      color: "text-green-400",
    },
    {
      label: "Pipeline Value",
      value: "$247K",
      change: "+8.2%",
      trend: "up",
      color: "text-[hsl(var(--gold))]",
    },
    {
      label: "Calls Today",
      value: "23",
      change: "+5",
      trend: "up",
      color: "text-cyan-400",
    },
    {
      label: "Conversion Rate",
      value: "34.7%",
      change: "+2.1%",
      trend: "up",
      color: "text-blue-400",
    },
  ];

  const recentLeads = [
    {
      name: "Sarah Chen",
      company: "TechCorp",
      value: "$45K",
      status: "Hot",
      time: "2m ago",
    },
    {
      name: "Mike Rodriguez",
      company: "StartupXYZ",
      value: "$28K",
      status: "Warm",
      time: "15m ago",
    },
    {
      name: "Emily Davis",
      company: "Enterprise Ltd",
      value: "$89K",
      status: "Hot",
      time: "1h ago",
    },
    {
      name: "James Wilson",
      company: "Innovation Co",
      value: "$67K",
      status: "Cold",
      time: "2h ago",
    },
  ];

  const pipelineStages = [
    { name: "Leads", count: 47, value: "$156K", color: "bg-blue-500" },
    { name: "Qualified", count: 23, value: "$289K", color: "bg-cyan-500" },
    {
      name: "Proposal",
      count: 12,
      value: "$445K",
      color: "bg-[hsl(var(--gold))]",
    },
    { name: "Negotiation", count: 8, value: "$234K", color: "bg-green-500" },
    { name: "Closed Won", count: 15, value: "$678K", color: "bg-purple-500" },
  ];

  return (
    <div
      className={`min-h-screen ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Sidebar with Blue Fade Effect */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Gradient Background - Black to Blue Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900/80 backdrop-blur-sm"></div>

        {/* Sidebar Content */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-blue-400/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-black font-bold" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">
                    PartnerTech.ai
                  </h1>
                  <p className="text-xs text-blue-300">CRM Automation Suite</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white hover:bg-blue-400/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-2">
              <div className="text-xs font-medium text-blue-200 uppercase tracking-wider mb-3">
                Main Dashboard
              </div>

              <button
                onClick={() => setActiveView("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeView === "dashboard"
                    ? "bg-blue-500/30 text-white border border-blue-400/50"
                    : "text-blue-100 hover:bg-blue-400/20"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                Main Dashboard
                <Crown className="w-4 h-4 ml-auto text-[hsl(var(--gold))]" />
              </button>

              <button
                onClick={() => setActiveView("pipeline")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeView === "pipeline"
                    ? "bg-blue-500/30 text-white border border-blue-400/50"
                    : "text-blue-100 hover:bg-blue-400/20"
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                Pipeline View
              </button>

              <button
                onClick={() => setActiveView("calls")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeView === "calls"
                    ? "bg-blue-500/30 text-white border border-blue-400/50"
                    : "text-blue-100 hover:bg-blue-400/20"
                }`}
              >
                <Phone className="w-5 h-5" />
                Call Queue
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  23
                </span>
              </button>

              <div className="text-xs font-medium text-blue-200 uppercase tracking-wider mb-3 mt-6">
                CRM Tools
              </div>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-400/20 transition-all">
                <Users className="w-5 h-5" />
                Contacts
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-400/20 transition-all">
                <Target className="w-5 h-5" />
                Campaigns
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-400/20 transition-all">
                <MessageSquare className="w-5 h-5" />
                Messages
                <span className="ml-auto bg-cyan-400 text-black text-xs px-2 py-1 rounded-full">
                  12
                </span>
              </button>

              <div className="text-xs font-medium text-blue-200 uppercase tracking-wider mb-3 mt-6">
                WarRoom Integration
              </div>

              <Link
                to="/warroom"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-400/20 transition-all"
              >
                <Brain className="w-5 h-5" />
                WarRoom Companion
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Link>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-400/20 transition-all">
                <Zap className="w-5 h-5" />
                AI Automation
              </button>
            </div>

            {/* SaintSal Integration */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-[hsl(var(--gold))]" />
                <span className="text-sm font-medium text-white">
                  SaintSal™ CRM
                </span>
              </div>
              <p className="text-xs text-blue-200 mb-3">
                AI-powered lead scoring and conversation analysis
              </p>
              <Button
                size="sm"
                className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-medium"
              >
                Activate AI
              </Button>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-blue-400/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <span className="text-sm font-bold text-black">SV</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">
                  SaintVision Pro
                </p>
                <p className="text-xs text-blue-300">Premium Account</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-100 hover:bg-blue-400/20"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <div className="border-b border-border/30 px-6 py-4 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  CRM Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Powered by SaintSal™ AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search contacts, deals..."
                  className="pl-10 pr-4 py-2 bg-muted/20 border border-border/30 rounded-lg text-foreground focus:outline-none focus:border-cyan-400/50"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Lead
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeView === "dashboard" && (
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-muted/10 backdrop-blur-sm border border-border/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </h3>
                    <TrendingUp className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <span className={`text-sm font-medium ${stat.color}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity & Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Leads */}
              <div className="p-6 rounded-xl bg-muted/10 backdrop-blur-sm border border-border/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    Recent Leads
                  </h3>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentLeads.map((lead, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-black/40 hover:bg-black/60 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                          <span className="text-sm font-bold text-black">
                            {lead.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {lead.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {lead.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[hsl(var(--gold))]">
                          {lead.value}
                        </p>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              lead.status === "Hot"
                                ? "bg-red-500/20 text-red-400"
                                : lead.status === "Warm"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {lead.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {lead.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Overview */}
              <div className="p-6 rounded-xl bg-muted/10 backdrop-blur-sm border border-border/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    Sales Pipeline
                  </h3>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <div className="space-y-4">
                  {pipelineStages.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {stage.name}
                        </span>
                        <div className="text-right">
                          <span className="text-sm font-bold text-foreground">
                            {stage.count} deals
                          </span>
                          <span className="text-xs text-[hsl(var(--gold))] ml-2">
                            {stage.value}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${stage.color}`}
                          style={{ width: `${(stage.count / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[hsl(var(--gold))]" />
                <h3 className="text-lg font-bold text-foreground">
                  SaintSal™ AI Insights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-black/40">
                  <p className="text-sm text-muted-foreground mb-2">
                    Next Best Action
                  </p>
                  <p className="font-medium text-foreground">
                    Call Sarah Chen - 94% close probability
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40">
                  <p className="text-sm text-muted-foreground mb-2">
                    Risk Alert
                  </p>
                  <p className="font-medium text-red-400">
                    3 deals need immediate attention
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/40">
                  <p className="text-sm text-muted-foreground mb-2">
                    Opportunity
                  </p>
                  <p className="font-medium text-green-400">
                    TechCorp ready for upsell (+$25K)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
