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
  Sparkles
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    icon: Crown,
    label: "SaintVisionAI™",
    sublabel: "COSMIC KNOWLEDGE",
    isMain: true,
    hasNotification: false
  },
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

const bottomItems = [
  {
    icon: Crown,
    label: "SaintVisionAI™",
    sublabel: "COSMIC KNOWLEDGE",
    status: "ENTERPRISE READY"
  }
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-80 lg:w-80 md:w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col", className)}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Crown className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">Enterprise Command Center</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">GET BUSY</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-3 space-y-1">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-sidebar-accent cursor-pointer group transition-colors">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Icon className="w-5 h-5 text-sidebar-foreground flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-sidebar-foreground truncate">
                    {item.label}
                  </div>
                  {item.sublabel && (
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.sublabel}
                    </div>
                  )}
                </div>
              </div>
              {item.hasNotification && (
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
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

      <div className="p-4 border-t border-sidebar-border">
        {bottomItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-sidebar-foreground">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.sublabel}
                </div>
                <div className="text-xs text-primary font-medium mt-1">
                  {item.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 text-center">
        <div className="text-xs text-muted-foreground">
          AP Saint Gotthardt 🔥
        </div>
      </div>
    </div>
  );
}
