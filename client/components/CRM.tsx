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
  Brain,
  Zap,
  Building2,
  Settings,
  Menu,
  X,
  ExternalLink,
  Monitor,
  Activity,
} from "lucide-react";

interface CRMProps {
  className?: string;
}

export function CRM({ className }: CRMProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default open on desktop

  return (
    <div
      className={`min-h-screen ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Blended Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Batman Batcave Blue - Deep, Sophisticated, Powerful */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-blue-950/90 backdrop-blur-sm"></div>

        {/* Sidebar Content */}
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-blue-600/30">
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-3 overflow-y-auto">
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                Quick Access
              </div>

              <Link
                to="/partnertech"
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all text-sm"
              >
                <Activity className="w-4 h-4" />
                Command Center
                <Crown className="w-3 h-3 ml-auto text-[hsl(var(--gold))]" />
              </Link>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600/30 text-white border border-blue-500/50 text-sm">
                <Monitor className="w-4 h-4" />
                CRM WorkCenter
              </button>

              <Link
                to="/warroom"
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all text-sm"
              >
                <Brain className="w-4 h-4" />
                WarRoom
                <ArrowRight className="w-3 h-3 ml-auto" />
              </Link>

              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 mt-4">
                CRM Tools
              </div>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all text-sm">
                <Phone className="w-4 h-4" />
                Calls
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all text-sm">
                <Users className="w-4 h-4" />
                Contacts
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all text-sm">
                <Target className="w-4 h-4" />
                Campaigns
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all text-sm">
                <MessageSquare className="w-4 h-4" />
                Messages
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all text-sm">
                <TrendingUp className="w-4 h-4" />
                Pipeline
              </button>
            </div>

            {/* SaintSal Integration */}
            <div className="mt-6 p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[hsl(var(--gold))]" />
                <span className="text-xs font-medium text-white">
                  SaintSal™ AI
                </span>
              </div>
              <p className="text-xs text-gray-300 mb-2">Smart CRM automation</p>
              <Button
                size="sm"
                className="w-full h-7 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-medium text-xs"
              >
                Activate
              </Button>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-3 border-t border-cyan-400/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                <span className="text-xs font-bold text-black">SV</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-white">SaintVision</p>
                <p className="text-xs text-gray-400">CRM Active</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:bg-white/10 w-6 h-6 p-0"
              >
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Responsive to sidebar */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "lg:pl-72" : "lg:pl-0"}`}
      >
        {/* Top Header - Consistent Blue Theme */}
        <div className="border-b border-cyan-400/20 px-4 py-2 bg-gradient-to-r from-black/80 via-black/70 to-cyan-400/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-white">GHL CRM</h1>
                <p className="text-xs text-gray-400">Integrated Work Center</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 text-xs">
                <ExternalLink className="w-3 h-3 mr-1" />
                Open in GHL
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <Bell className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* GHL Iframe - Full Screen */}
        <div
          className="relative w-full bg-gradient-to-br from-black/95 via-black/90 to-cyan-400/5"
          style={{ height: "calc(100vh - 60px)" }}
        >
          {/* Subtle Blue Border */}
          <div className="absolute inset-0 border border-cyan-400/10"></div>

          {/* Live GHL Workspace */}
          <iframe
            src="https://app.gohighlevel.com/location/oRA8vL3OSiCPjpwmEC0V"
            className="w-full h-full border-0 relative z-10"
            title="GoHighLevel CRM - Live Workspace"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
          />

          {/* Loading Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-cyan-400/10 flex items-center justify-center z-20">
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F88335b4853ee4a66a62fe88e75199bfd?format=webp&width=800"
                alt="SaintVision Logo"
                className="w-16 h-16 object-contain mx-auto mb-4 animate-spin drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
                style={{
                  filter:
                    "brightness(1.2) drop-shadow(0 0 20px rgba(255,215,0,0.6))",
                }}
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Loading LIVE GHL CRM
              </h3>
              <p className="text-sm text-gray-400">
                Connecting to your workspace...
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Location ID: oRA8vL3OSiCPjpwmEC0V
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xs text-green-400">API Connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay - Only on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
