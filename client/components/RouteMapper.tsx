import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

// 🎯 ROUTE MAPPING STRATEGY - All your buttons connected!
export const ROUTE_MAP = {
  // Main Navigation
  home: { path: "/", label: "Home" },
  dashboard: { path: "/home", label: "Dashboard" },
  warroom: { path: "/warroom", label: "WarRoom" },

  // AI & Search
  saintgpt: { path: "/saintgpt", label: "SaintGPT" },
  search: { path: "/search", label: "Simple Search" },

  // Business Tools
  partnertech: { path: "/partnertech", label: "PartnerTech.ai CRM" },
  crm: { path: "/crm", label: "CRM WorkCenter" },
  tools: { path: "/tools", label: "AI Tools" },
  auditservice: { path: "/audit-service", label: "Route Audit Service" },

  // Company Pages
  institute: { path: "/institute", label: "SVT Institute of AI" },
  broker: { path: "/broker", label: "SVG Launchpad" },
  why: { path: "/why", label: "Why SaintVision" },

  // Support & Legal
  help: { path: "/help", label: "Feedback & Help" },
  legal: { path: "/legal", label: "Legal & Resources" },

  // Authentication
  auth: { path: "/auth", label: "Login/Logout" },

  // External Links
  ghl_crm: {
    path: "https://app.gohighlevel.com/location/oRA8vL3OSiCPjpwmEC0V",
    external: true,
    label: "GoHighLevel CRM",
  },
  saintvision_site: {
    path: "https://saintvisiongroup.com",
    external: true,
    label: "SaintVision Group",
  },
  saintvision_ai: {
    path: "https://saintvisionai.com",
    external: true,
    label: "SaintVision AI",
  },
} as const;

// 🔧 Smart Route Button Component
interface RouteButtonProps {
  route: keyof typeof ROUTE_MAP;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function RouteButton({
  route,
  icon: Icon,
  className,
  children,
  variant = "default",
  size = "default",
}: RouteButtonProps) {
  const routeConfig = ROUTE_MAP[route];

  if (!routeConfig) {
    console.warn(`Route "${route}" not found in ROUTE_MAP`);
    return null;
  }

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children || routeConfig.label}
    </>
  );

  // External links
  if ("external" in routeConfig && routeConfig.external) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() =>
          window.open(routeConfig.path, "_blank", "noopener,noreferrer")
        }
      >
        {content}
      </Button>
    );
  }

  // Internal routes
  return (
    <Link to={routeConfig.path}>
      <Button variant={variant} size={size} className={className}>
        {content}
      </Button>
    </Link>
  );
}

// 🎯 WarRoom Menu Item Mapper
export function createWarRoomMenuItem(
  route: keyof typeof ROUTE_MAP,
  icon: LucideIcon,
  color: string,
  active = false,
) {
  const routeConfig = ROUTE_MAP[route];

  return {
    icon,
    label: routeConfig.label,
    active,
    color,
    route,
    onClick: () => {
      if ("external" in routeConfig && routeConfig.external) {
        window.open(routeConfig.path, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = routeConfig.path;
      }
    },
  };
}

// 🚀 Auto-Router Helper for Mass Updates
export function updateAllButtonsWithRoutes() {
  const buttons = document.querySelectorAll("[data-route]");

  buttons.forEach((button) => {
    const route = button.getAttribute("data-route") as keyof typeof ROUTE_MAP;
    const routeConfig = ROUTE_MAP[route];

    if (routeConfig) {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        if ("external" in routeConfig && routeConfig.external) {
          window.open(routeConfig.path, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = routeConfig.path;
        }
      });
    }
  });
}

// 🎨 Route Status Checker
export function getRouteStatus(route: keyof typeof ROUTE_MAP) {
  const routeConfig = ROUTE_MAP[route];
  const currentPath = window.location.pathname;

  return {
    isActive: currentPath === routeConfig.path,
    isExternal: "external" in routeConfig && routeConfig.external,
    path: routeConfig.path,
    label: routeConfig.label,
  };
}

// 📱 Mobile Navigation Helper
export const MOBILE_MENU_ROUTES = [
  "home",
  "warroom",
  "saintgpt",
  "partnertech",
  "tools",
  "help",
] as const;

// 🔗 Quick Access Routes
export const QUICK_ACCESS_ROUTES = [
  "warroom",
  "saintgpt",
  "partnertech",
  "crm",
] as const;
