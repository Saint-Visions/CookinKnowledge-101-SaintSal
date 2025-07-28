import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Plus,
  MessageSquare,
  Search,
  Sparkles,
  StickyNote,
  Settings,
  User,
  Home,
  Crown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface SaintGPTSidebarProps {
  className?: string;
}

const chatHistory = [
  "Business Strategy Analysis",
  "Product Launch Timeline",
  "Market Research Insights",
  "Customer Journey Mapping",
  "Revenue Optimization",
  "Team Productivity Tips",
];

export function SaintGPTSidebar({ className }: SaintGPTSidebarProps) {
  return (
    <div
      className={cn(
        "w-80 lg:w-80 md:w-64 border-r border-gray-800 flex flex-col",
        className,
      )}
      style={{
        backgroundColor: "#0f0f0f",
        fontFamily:
          'Inter Tight, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"
              alt="SaintVision Logo"
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-lg font-bold text-white">SaintGPT</h1>
              <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-wider">
                4.1 ENTERPRISE
              </p>
            </div>
          </div>
          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Home className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Button
          className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-medium"
          size="sm"
          onClick={() => window.location.reload()}
        >
          <Plus className="w-4 h-4 mr-2" />
          New conversation
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-sm font-medium text-gray-300 mb-3 uppercase tracking-wider">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Link
            to="/warroom"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer group transition-colors"
          >
            <StickyNote className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium text-white">Sticky Notes</div>
              <div className="text-xs text-gray-400">
                Go to WarRoom workspace
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[hsl(var(--gold))] transition-colors" />
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer group transition-colors"
          >
            <Crown className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                Command Center
              </div>
              <div className="text-xs text-gray-400">
                Full dashboard & tools
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[hsl(var(--gold))] transition-colors" />
          </Link>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
            Recent
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-1">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
              onClick={() =>
                alert(
                  `💬 Loading chat: "${chat}"\n\nThis will restore your previous conversation and continue where you left off.`,
                )
              }
            >
              <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-sm text-gray-300 truncate flex-1 group-hover:text-white transition-colors">
                {chat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--gold))]/20 to-yellow-400/10 border border-[hsl(var(--gold))]/30 mb-3">
          <Sparkles className="w-6 h-6 text-[hsl(var(--gold))]" />
          <div className="flex-1">
            <div className="text-sm font-medium text-white">Saint Sal™</div>
            <div className="text-xs text-[hsl(var(--gold))] font-medium uppercase tracking-wider">
              COOKIN' KNOWLEDGE
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
            size="sm"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
            size="sm"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
