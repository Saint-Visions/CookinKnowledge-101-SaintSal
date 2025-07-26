import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  BarChart3,
  Users,
  Calendar,
  FileText,
  Zap,
  Settings,
  Bell,
  Search,
  Filter,
  Plus,
  Download,
  Upload,
  RefreshCw,
  Maximize,
  Minimize,
  Home,
  Crown,
  Sparkles,
  Paperclip,
  Mic,
  ArrowUp
} from "lucide-react";

interface WarRoomProps {
  className?: string;
}

const leftPanelItems = [
  { icon: BarChart3, label: "Analytics", active: true },
  { icon: Users, label: "Team", active: false },
  { icon: Calendar, label: "Schedule", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Target, label: "Goals", active: false },
  { icon: Bell, label: "Notifications", active: false },
  { icon: Search, label: "Search", active: false },
  { icon: Plus, label: "Projects", active: false },
  { icon: Download, label: "Documents", active: false },
  { icon: Upload, label: "Files", active: false },
  { icon: RefreshCw, label: "Sync", active: false },
  { icon: Settings, label: "Settings", active: false }
];

const quickActions = [
  { icon: Users, label: "Contacts", color: "text-blue-400" },
  { icon: Calendar, label: "Calendar", color: "text-green-400" },
  { icon: FileText, label: "Notes", color: "text-yellow-400" },
  { icon: Bell, label: "Reminders", color: "text-red-400" }
];

const rightPanelItems = [
  { icon: Bell, label: "Alerts", active: false },
  { icon: Zap, label: "Automations", active: true },
  { icon: Settings, label: "Config", active: false },
  { icon: Search, label: "Search", active: false },
  { icon: Filter, label: "Filters", active: false }
];

export function WarRoom({ className }: WarRoomProps) {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [crmMaximized, setCrmMaximized] = useState(false);

  return (
    <div className={`min-h-screen relative ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Left Sidebar */}
      <div className={`fixed left-0 top-0 h-full border-r border-border/30 bg-sidebar-background transition-all duration-300 z-40 ${
        leftPanelOpen ? 'w-48' : 'w-16'
      }`}>
        {/* Fixed Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"
            alt="Cookin' Knowledge Background"
            className="w-[180px] h-auto object-contain"
          />
        </div>
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border/30">
          <div className="flex items-center justify-between">
            {leftPanelOpen && (
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80" 
                  alt="Sv."
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold text-sidebar-foreground">WARROOM</h1>
                  <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-wider">COMMAND CENTER</p>
                </div>
              </div>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLeftPanelOpen(!leftPanelOpen)}
              className="ml-auto"
            >
              {leftPanelOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-2">
          {leftPanelItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {leftPanelOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        {leftPanelOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <Link to="/" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className={`fixed right-0 top-0 h-full border-l border-border/30 bg-sidebar-background transition-all duration-300 z-40 overflow-auto ${
        rightPanelOpen ? 'w-72' : 'w-16'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border/30">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setRightPanelOpen(!rightPanelOpen)}
            >
              {rightPanelOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
            {rightPanelOpen && (
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-lg font-bold text-sidebar-foreground">TOOLS</h1>
                  <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-wider">PRO FEATURES</p>
                </div>
                <Crown className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
            )}
          </div>
        </div>

        {/* Tool Items */}
        <div className="p-2">
          {rightPanelItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {rightPanelOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
            );
          })}
        </div>



        {/* GHL CRM Widget */}
        {rightPanelOpen && (
          <div className="p-4 border-t border-sidebar-border/30">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-[hsl(var(--gold))]" />
              GHL CRM
            </h3>
            <div className="h-64 bg-muted/10 rounded-xl border border-border/30 overflow-hidden mb-4">
              <iframe
                src="about:blank"
                className="w-full h-full border-0"
                title="GHL CRM"
                style={{ backgroundColor: '#1a1a1a' }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/10 pointer-events-none">
                <div className="text-center">
                  <div className="text-lg font-bold text-[hsl(var(--gold))] mb-1">$89.2k</div>
                  <div className="text-xs text-muted-foreground">Pipeline</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {rightPanelOpen && (
          <div className="p-4 border-t border-sidebar-border/30">
            <h3 className="text-sm font-semibold text-foreground mb-3">⚡ Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors text-center"
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1 ${action.color}`} />
                    <div className="text-xs font-medium text-foreground">{action.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Additional Tools */}
        {rightPanelOpen && (
          <div className="p-4 border-t border-sidebar-border/30">
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area - WIDE OPEN WORKSPACE */}
      <div
        className="transition-all duration-300"
        style={{
          marginLeft: leftPanelOpen ? '192px' : '64px',
          marginRight: rightPanelOpen ? '288px' : '64px'
        }}
      >
        {/* Top Bar */}
        <div className="border-b border-border/30 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold text-foreground">
                WARROOM
              </h1>
              <div className="text-xs bg-primary/20 text-primary px-3 py-1 rounded uppercase tracking-wider font-medium">
                PRODUCTION CENTER
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(var(--neon-green))] rounded-full animate-pulse"></div>
                <span className="text-sm text-[hsl(var(--neon-green))]">Live</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
        </div>

        {/* Empty Work Area */}
        <div className="flex-1 p-8">
          <div className="h-full min-h-[600px] rounded-2xl border-2 border-dashed border-border/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-medium text-muted-foreground/50 mb-2">
                Work Area
              </div>
              <div className="text-sm text-muted-foreground/30">
                Open space for productivity
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="border-t border-border/30 p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Last updated: 2 minutes ago</span>
              <span>•</span>
              <span className="text-[hsl(var(--neon))]">Real-time sync active</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <span className="text-[hsl(var(--gold))] font-medium">SAINTSAL GOTTA GUY</span>
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
