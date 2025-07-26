import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  MessageSquare, 
  Search, 
  Sparkles, 
  Code, 
  ImageIcon, 
  FileText, 
  Calculator, 
  Globe, 
  Zap, 
  Crown, 
  Settings, 
  User,
  MoreHorizontal,
  Edit3,
  Trash2
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
  "Team Productivity Tips"
];

const aiTools = [
  { icon: Sparkles, label: "AI Assistant", desc: "General purpose AI" },
  { icon: Code, label: "Code Helper", desc: "Programming assistance" },
  { icon: ImageIcon, label: "Image Creator", desc: "Generate visuals" },
  { icon: FileText, label: "Document Writer", desc: "Content creation" },
  { icon: Calculator, label: "Data Analyst", desc: "Number crunching" },
  { icon: Globe, label: "Web Search", desc: "Live information" },
  { icon: Zap, label: "Automation", desc: "Workflow tools" }
];

export function SaintGPTSidebar({ className }: SaintGPTSidebarProps) {
  return (
    <div className={cn("w-80 lg:w-80 md:w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col", className)}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fb6e20c7d6a2e48b2866512020c3b4c5a?format=webp&width=40" 
              alt="Cookin' Knowledge"
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">SaintGPT</h1>
              <p className="text-xs text-primary">4.1 ENTERPRISE</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Crown className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <Button className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          New conversation
        </Button>
      </div>

      {/* AI Tools */}
      <div className="p-4 border-b border-sidebar-border">
        <h3 className="text-sm font-medium text-sidebar-foreground mb-3">AI Tools</h3>
        <div className="space-y-1">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent cursor-pointer group transition-colors"
              >
                <Icon className="w-4 h-4 text-sidebar-foreground flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-sidebar-foreground truncate">
                    {tool.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tool.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-sidebar-foreground">Recent</h3>
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-1">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 p-2 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm text-sidebar-foreground truncate flex-1">
                {chat}
              </span>
              <div className="opacity-0 group-hover:opacity-100 flex gap-1">
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <Edit3 className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 mb-3">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa37d8696bc844d9197d6f71555c9f346?format=webp&width=40" 
            alt="Sv. Cookin' Knowledge"
            className="w-8 h-8"
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-sidebar-foreground">
              Saint Sal
            </div>
            <div className="text-xs text-primary font-medium">
              COOKIN' KNOWLEDGE
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <MoreHorizontal className="w-4 h-4 mr-2" />
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
