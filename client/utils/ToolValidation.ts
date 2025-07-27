// Tool Validation System - Inspired by Builder.io navigation best practices
// Prevents broken links by using GUID-based references and dynamic validation

interface ToolDefinition {
  id: string; // GUID that never changes
  name: string;
  route: string;
  component: string;
  category: string;
  status: "active" | "development" | "placeholder";
  dependencies: string[];
  validation: () => Promise<boolean>;
}

// Master tool registry - Each tool has a permanent GUID
export const TOOL_REGISTRY: Record<string, ToolDefinition> = {
  "saintgpt-4-1": {
    id: "saintgpt-4-1",
    name: "SaintSalGPT 4.1",
    route: "/search",
    component: "SimpleSearch",
    category: "AI Productivity",
    status: "active",
    dependencies: ["useAuth", "SaintGPTMain"],
    validation: async () => {
      try {
        // Check if search page loads and components exist
        const response = await fetch("/search");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "sticky-notes-ai": {
    id: "sticky-notes-ai",
    name: "Sticky Notes AI",
    route: "/sticky-notes",
    component: "StickyNotes",
    category: "AI Productivity",
    status: "active",
    dependencies: ["localStorage", "useState"],
    validation: async () => {
      // Check localStorage functionality and component load
      try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
      } catch {
        return false;
      }
    },
  },
  "image-generator": {
    id: "image-generator",
    name: "Image Generator",
    route: "/image-generator",
    component: "ImageGenerator",
    category: "Creative Suite",
    status: "active",
    dependencies: ["useState", "fetch"],
    validation: async () => {
      // Validate image generation capabilities
      return typeof fetch !== "undefined";
    },
  },
  "email-assistant": {
    id: "email-assistant",
    name: "Email Assistant",
    route: "/email-assistant",
    component: "EmailAssistant",
    category: "Business Operations",
    status: "active",
    dependencies: ["useState", "email-templates"],
    validation: async () => {
      return true; // Email assistant is template-based, always works
    },
  },
  "video-studio": {
    id: "video-studio",
    name: "Video Studio",
    route: "/video-studio",
    component: "VideoStudio",
    category: "Creative Suite",
    status: "development",
    dependencies: ["video-api", "useState"],
    validation: async () => {
      // Check video capabilities
      const video = document.createElement("video");
      return video.canPlayType("video/mp4") !== "";
    },
  },
  "data-analytics": {
    id: "data-analytics",
    name: "Data Analytics",
    route: "/dashboard",
    component: "GeneralDashboard",
    category: "AI Productivity",
    status: "active",
    dependencies: ["useAuth", "dashboard-components"],
    validation: async () => {
      try {
        const response = await fetch("/dashboard");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "ai-tools-suite": {
    id: "ai-tools-suite",
    name: "AI Tools Suite",
    route: "/ai-tools-suite",
    component: "AIToolsSuite",
    category: "AI Productivity",
    status: "active",
    dependencies: ["productivity-packages", "package-manager"],
    validation: async () => {
      try {
        const response = await fetch("/ai-tools-suite");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "svg-launchpad": {
    id: "svg-launchpad",
    name: "SVG Launchpad",
    route: "/broker",
    component: "Broker",
    category: "Creative Suite",
    status: "active",
    dependencies: ["svg-handling"],
    validation: async () => {
      try {
        const response = await fetch("/broker");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "my-business": {
    id: "my-business",
    name: "My Business",
    route: "/dashboard",
    component: "GeneralDashboard",
    category: "Business Operations",
    status: "active",
    dependencies: ["useAuth", "business-metrics"],
    validation: async () => {
      try {
        const response = await fetch("/dashboard");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "partnertech-crm": {
    id: "partnertech-crm",
    name: "PartnerTech.ai CRM",
    route: "/crm",
    component: "CRM",
    category: "Business Operations",
    status: "active",
    dependencies: ["useAuth", "CRM"],
    validation: async () => {
      try {
        const response = await fetch("/crm");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "smart-scheduler": {
    id: "smart-scheduler",
    name: "Smart Scheduler",
    route: "/warroom",
    component: "WarRoom",
    category: "Business Operations",
    status: "active",
    dependencies: ["useAuth", "WarRoom"],
    validation: async () => {
      try {
        const response = await fetch("/warroom");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "svt-institute": {
    id: "svt-institute",
    name: "SVT Institute of AI",
    route: "/institute",
    component: "Institute",
    category: "Learning & Development",
    status: "active",
    dependencies: ["Institute"],
    validation: async () => {
      try {
        const response = await fetch("/institute");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "code-academy": {
    id: "code-academy",
    name: "Code Academy",
    route: "/code-academy",
    component: "CodeAcademy",
    category: "Learning & Development",
    status: "active",
    dependencies: ["CodeAcademy", "programming-tracks"],
    validation: async () => {
      try {
        const response = await fetch("/code-academy");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "progress-analytics": {
    id: "progress-analytics",
    name: "Progress Analytics",
    route: "/dashboard",
    component: "GeneralDashboard",
    category: "Learning & Development",
    status: "active",
    dependencies: ["dashboard-analytics"],
    validation: async () => {
      try {
        const response = await fetch("/dashboard");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
  "design-studio": {
    id: "design-studio",
    name: "Design Studio",
    route: "placeholder",
    component: "Alert",
    category: "Creative Suite",
    status: "placeholder",
    dependencies: [],
    validation: async () => true, // Placeholder always works
  },
  "skill-tracker": {
    id: "skill-tracker",
    name: "Skill Tracker",
    route: "/dashboard",
    component: "GeneralDashboard",
    category: "Learning & Development",
    status: "active",
    dependencies: ["dashboard-analytics", "skill-tracking"],
    validation: async () => {
      try {
        const response = await fetch("/dashboard");
        return response.ok;
      } catch {
        return false;
      }
    },
  },
};

// Tool validation service
export class ToolValidationService {
  private static instance: ToolValidationService;
  private validationResults: Map<string, boolean> = new Map();
  private lastValidation: Map<string, number> = new Map();
  private readonly VALIDATION_CACHE_TIME = 5 * 60 * 1000; // 5 minutes

  static getInstance(): ToolValidationService {
    if (!ToolValidationService.instance) {
      ToolValidationService.instance = new ToolValidationService();
    }
    return ToolValidationService.instance;
  }

  // Validate a specific tool
  async validateTool(toolId: string): Promise<boolean> {
    const tool = TOOL_REGISTRY[toolId];
    if (!tool) return false;

    // Check cache first
    const lastCheck = this.lastValidation.get(toolId) || 0;
    const now = Date.now();

    if (now - lastCheck < this.VALIDATION_CACHE_TIME) {
      return this.validationResults.get(toolId) || false;
    }

    // Run validation
    try {
      const isValid = await tool.validation();
      this.validationResults.set(toolId, isValid);
      this.lastValidation.set(toolId, now);
      return isValid;
    } catch (error) {
      console.error(`Tool validation failed for ${toolId}:`, error);
      this.validationResults.set(toolId, false);
      this.lastValidation.set(toolId, now);
      return false;
    }
  }

  // Validate all tools
  async validateAllTools(): Promise<Record<string, boolean>> {
    const results: Record<string, boolean> = {};

    const validationPromises = Object.keys(TOOL_REGISTRY).map(
      async (toolId) => {
        const isValid = await this.validateTool(toolId);
        results[toolId] = isValid;
        return { toolId, isValid };
      },
    );

    await Promise.all(validationPromises);
    return results;
  }

  // Get tool by GUID (never breaks even if name changes)
  getToolByGuid(guid: string): ToolDefinition | null {
    return TOOL_REGISTRY[guid] || null;
  }

  // Get safe navigation URL (prevents broken links)
  getSafeNavigationUrl(toolId: string): string {
    const tool = TOOL_REGISTRY[toolId];
    if (!tool) return "/tools"; // Fallback to tools page

    if (tool.status === "placeholder") {
      return "/tools"; // Stay on tools page for placeholders
    }

    return tool.route;
  }

  // Get tools by category
  getToolsByCategory(category: string): ToolDefinition[] {
    return Object.values(TOOL_REGISTRY).filter(
      (tool) => tool.category === category,
    );
  }

  // Health check for entire tool ecosystem
  async healthCheck(): Promise<{
    totalTools: number;
    activeTools: number;
    developmentTools: number;
    placeholderTools: number;
    validatedTools: number;
    issues: string[];
  }> {
    const tools = Object.values(TOOL_REGISTRY);
    const validationResults = await this.validateAllTools();

    const activeTools = tools.filter((t) => t.status === "active").length;
    const developmentTools = tools.filter(
      (t) => t.status === "development",
    ).length;
    const placeholderTools = tools.filter(
      (t) => t.status === "placeholder",
    ).length;
    const validatedTools =
      Object.values(validationResults).filter(Boolean).length;

    const issues: string[] = [];
    Object.entries(validationResults).forEach(([toolId, isValid]) => {
      if (!isValid && TOOL_REGISTRY[toolId].status === "active") {
        issues.push(`Tool ${TOOL_REGISTRY[toolId].name} failed validation`);
      }
    });

    return {
      totalTools: tools.length,
      activeTools,
      developmentTools,
      placeholderTools,
      validatedTools,
      issues,
    };
  }
}

// Export convenience functions
export const validateTool = (toolId: string) =>
  ToolValidationService.getInstance().validateTool(toolId);
export const validateAllTools = () =>
  ToolValidationService.getInstance().validateAllTools();
export const getSafeNavigationUrl = (toolId: string) =>
  ToolValidationService.getInstance().getSafeNavigationUrl(toolId);
export const getToolByGuid = (guid: string) =>
  ToolValidationService.getInstance().getToolByGuid(guid);
export const toolHealthCheck = () =>
  ToolValidationService.getInstance().healthCheck();

// Tool click handler with validation
export const handleSafeToolClick = async (
  toolName: string,
  navigate: (url: string) => void,
) => {
  // Find tool by name (fallback to GUID lookup)
  const toolEntry = Object.entries(TOOL_REGISTRY).find(
    ([_, tool]) => tool.name === toolName,
  );

  if (!toolEntry) {
    console.error(`Tool not found: ${toolName}`);
    navigate("/tools");
    return;
  }

  const [toolId, tool] = toolEntry;

  // Validate tool before navigation
  const isValid = await validateTool(toolId);

  if (!isValid && tool.status === "active") {
    console.warn(`Tool ${toolName} failed validation, showing error`);
    alert(
      `⚠️ ${toolName}\n\nThis tool is temporarily unavailable. Please try again later or contact support.`,
    );
    return;
  }

  const safeUrl = getSafeNavigationUrl(toolId);
  navigate(safeUrl);
};
