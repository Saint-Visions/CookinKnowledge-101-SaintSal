import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  Crown, 
  Building2, 
  StickyNote, 
  Wrench, 
  ImageIcon, 
  Rocket, 
  MessageSquare, 
  Users, 
  Shield, 
  TrendingUp, 
  Palette,
  User,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

interface SaintVisionSidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    icon: User,
    label: "My Companion",
    hasNotification: true
  },
  {
    icon: Building2,
    label: "My Business",
    hasNotification: true
  },
  {
    icon: StickyNote,
    label: "Sticky Notes",
    hasNotification: true
  },
  {
    icon: Sparkles,
    label: "SaintGPT 4.1",
    hasNotification: false,
    link: "/saintgpt"
  },
  {
    icon: Wrench,
    label: "AI Tools",
    hasNotification: true
  },
  {
    icon: ImageIcon,
    label: "Image Generator",
    hasNotification: true
  },
  {
    icon: Rocket,
    label: "SVP Launched",
    hasNotification: false
  },
  {
    icon: MessageSquare,
    label: "Feedback & Help",
    hasNotification: true
  },
  {
    icon: Users,
    label: "PartnerTech.ai CRM",
    hasNotification: false
  },
  {
    icon: Shield,
    label: "Client Portal",
    hasNotification: true
  },
  {
    icon: TrendingUp,
    label: "Upgrade Tier",
    hasNotification: false
  },
  {
    icon: Palette,
    label: "SVT Institute of AI β ⭐ ⭐",
    hasNotification: false
  },
  {
    icon: User,
    label: "My Account",
    hasNotification: false
  }
];

export function SaintVisionSidebar({ className }: SaintVisionSidebarProps) {
  return (
    <div className={cn("w-80 lg:w-80 md:w-64 bg-sidebar-background border-r border-sidebar-border/50 flex flex-col", className)}>
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">SaintVisionAI™</h1>
            <p className="text-xs text-primary uppercase tracking-wider font-medium">COSMIC KNOWLEDGE</p>
          </div>
        </div>
        
        <div className="text-xs bg-primary/10 text-primary px-3 py-2 rounded-lg uppercase tracking-wider font-medium text-center">
          Enterprise Command Center
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-3 py-4 space-y-1">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sidebar-accent/50 cursor-pointer group transition-all duration-200">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground flex-shrink-0 transition-colors" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-sidebar-foreground/90 group-hover:text-sidebar-foreground truncate transition-colors">
                    {item.label}
                  </div>
                </div>
              </div>
              {item.hasNotification && (
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 animate-pulse" />
              )}
            </div>
          );
          
          return item.link ? (
            <Link key={index} to={item.link}>
              {content}
            </Link>
          ) : (
            <div key={index}>
              {content}
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-sidebar-border/30">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
            <Crown className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-sidebar-foreground">
              SaintVisionAI™
            </div>
            <div className="text-xs text-primary font-medium uppercase tracking-wider">
              COSMIC KNOWLEDGE
            </div>
            <div className="text-xs text-primary/70 font-medium mt-1">
              ENTERPRISE READY
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <div className="text-xs text-muted-foreground">
            AP Saint Gotthardt 🔥
          </div>
        </div>
      </div>
    </div>
  );
}
