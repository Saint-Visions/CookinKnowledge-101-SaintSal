// 🎯 PAGE-BY-PAGE AUDIT RUNNER
// Systematically checks every page in your app for routing issues

import { ROUTE_MAP } from "../components/RouteMapper";

interface PageAuditSummary {
  totalPages: number;
  healthyPages: number;
  warningPages: number;
  errorPages: number;
  overallHealth: "excellent" | "good" | "needs-attention" | "critical";
  recommendations: string[];
}

export class PageAuditor {
  private baseUrl: string;
  private results: Map<string, any> = new Map();

  constructor(baseUrl: string = window.location.origin) {
    this.baseUrl = baseUrl;
  }

  // 🚀 Audit all pages automatically
  async auditAllPages(): Promise<PageAuditSummary> {
    const pages = Object.entries(ROUTE_MAP).filter(
      ([_, config]) => !("external" in config && config.external),
    );

    console.log("🔍 Starting comprehensive audit of", pages.length, "pages...");

    for (const [routeName, config] of pages) {
      try {
        await this.auditSinglePage(routeName, config.path);
        console.log(`✅ Audited: ${routeName} (${config.path})`);
      } catch (error) {
        console.error(`❌ Failed to audit: ${routeName}`, error);
        this.results.set(routeName, {
          status: "error",
          error: error.message,
          path: config.path,
        });
      }
    }

    return this.generateSummary();
  }

  // 🔍 Audit a single page
  private async auditSinglePage(pageName: string, path: string): Promise<void> {
    // Simulate page visit by creating a virtual check
    const issues = await this.checkPageRouting(path);

    this.results.set(pageName, {
      path,
      status: this.determinePageHealth(issues),
      issues,
      timestamp: new Date().toISOString(),
    });
  }

  // 🕵️ Check page routing without actually navigating
  private async checkPageRouting(path: string): Promise<string[]> {
    const issues: string[] = [];

    try {
      // Check if route exists in React Router
      const routeExists = this.checkRouteExists(path);
      if (!routeExists) {
        issues.push(`Route ${path} not found in router configuration`);
      }

      // Check for common routing patterns
      if (path.includes(" ")) {
        issues.push("Route contains spaces - should use hyphens or camelCase");
      }

      if (path.includes("//")) {
        issues.push("Route contains double slashes");
      }

      // Check for potential conflicts
      const conflictingRoutes = this.findConflictingRoutes(path);
      if (conflictingRoutes.length > 0) {
        issues.push(`Route conflicts with: ${conflictingRoutes.join(", ")}`);
      }
    } catch (error) {
      issues.push(`Error checking route: ${error.message}`);
    }

    return issues;
  }

  // ✅ Check if route exists in our configuration
  private checkRouteExists(path: string): boolean {
    const routes = Object.values(ROUTE_MAP).map((config) => config.path);
    return routes.includes(path);
  }

  // 🔍 Find potentially conflicting routes
  private findConflictingRoutes(path: string): string[] {
    const conflicts: string[] = [];
    const allRoutes = Object.values(ROUTE_MAP).map((config) => config.path);

    allRoutes.forEach((route) => {
      if (route !== path) {
        // Check for similar patterns that might conflict
        if (this.routesAreConflicting(path, route)) {
          conflicts.push(route);
        }
      }
    });

    return conflicts;
  }

  // 🚨 Determine if two routes might conflict
  private routesAreConflicting(route1: string, route2: string): boolean {
    // Simple conflict detection - can be enhanced
    const parts1 = route1.split("/").filter(Boolean);
    const parts2 = route2.split("/").filter(Boolean);

    if (parts1.length !== parts2.length) return false;

    // Check for parameter conflicts (e.g., /user/:id vs /user/profile)
    for (let i = 0; i < parts1.length; i++) {
      if (parts1[i].startsWith(":") || parts2[i].startsWith(":")) {
        return true; // Potential parameter conflict
      }
    }

    return false;
  }

  // 📊 Determine page health based on issues
  private determinePageHealth(
    issues: string[],
  ): "healthy" | "warning" | "error" {
    if (issues.length === 0) return "healthy";
    if (issues.length <= 2 && !issues.some((i) => i.includes("not found")))
      return "warning";
    return "error";
  }

  // 📈 Generate comprehensive summary
  private generateSummary(): PageAuditSummary {
    const results = Array.from(this.results.values());
    const totalPages = results.length;

    const healthyPages = results.filter((r) => r.status === "healthy").length;
    const warningPages = results.filter((r) => r.status === "warning").length;
    const errorPages = results.filter((r) => r.status === "error").length;

    const healthPercentage = (healthyPages / totalPages) * 100;

    let overallHealth: PageAuditSummary["overallHealth"];
    if (healthPercentage >= 90) overallHealth = "excellent";
    else if (healthPercentage >= 75) overallHealth = "good";
    else if (healthPercentage >= 50) overallHealth = "needs-attention";
    else overallHealth = "critical";

    const recommendations = this.generateRecommendations(results);

    return {
      totalPages,
      healthyPages,
      warningPages,
      errorPages,
      overallHealth,
      recommendations,
    };
  }

  // 💡 Generate actionable recommendations
  private generateRecommendations(results: any[]): string[] {
    const recommendations: string[] = [];

    const errorResults = results.filter((r) => r.status === "error");
    const warningResults = results.filter((r) => r.status === "warning");

    if (errorResults.length > 0) {
      recommendations.push(
        `🚨 Fix ${errorResults.length} critical routing errors immediately`,
      );
    }

    if (warningResults.length > 0) {
      recommendations.push(
        `⚠️ Address ${warningResults.length} routing warnings before deployment`,
      );
    }

    // Check for missing routes
    const missingRoutes = this.findMissingCommonRoutes();
    if (missingRoutes.length > 0) {
      recommendations.push(
        `➕ Consider adding missing common routes: ${missingRoutes.join(", ")}`,
      );
    }

    // Performance recommendations
    if (results.length > 20) {
      recommendations.push(
        "📦 Consider route code-splitting for better performance",
      );
    }

    return recommendations;
  }

  // 🔍 Find missing common routes that most apps have
  private findMissingCommonRoutes(): string[] {
    const commonRoutes = ["/about", "/contact", "/privacy", "/terms", "/404"];
    const existingRoutes = Object.values(ROUTE_MAP).map(
      (config) => config.path,
    );

    return commonRoutes.filter((route) => !existingRoutes.includes(route));
  }

  // 📊 Generate detailed report
  generateDetailedReport(): string {
    let report = "🔍 COMPREHENSIVE PAGE AUDIT REPORT\n";
    report += "=".repeat(60) + "\n\n";

    const summary = this.generateSummary();

    // Summary section
    report += `📊 OVERALL HEALTH: ${summary.overallHealth.toUpperCase()}\n`;
    report += `📋 Total Pages: ${summary.totalPages}\n`;
    report += `✅ Healthy: ${summary.healthyPages}\n`;
    report += `⚠️ Warnings: ${summary.warningPages}\n`;
    report += `❌ Errors: ${summary.errorPages}\n\n`;

    // Recommendations
    if (summary.recommendations.length > 0) {
      report += "💡 RECOMMENDATIONS:\n";
      summary.recommendations.forEach((rec, index) => {
        report += `${index + 1}. ${rec}\n`;
      });
      report += "\n";
    }

    // Detailed results
    report += "📋 DETAILED RESULTS:\n";
    report += "-".repeat(40) + "\n";

    for (const [pageName, result] of this.results.entries()) {
      const statusEmoji =
        result.status === "healthy"
          ? "✅"
          : result.status === "warning"
            ? "⚠️"
            : "❌";

      report += `${statusEmoji} ${pageName.toUpperCase()} (${result.path})\n`;

      if (result.issues && result.issues.length > 0) {
        result.issues.forEach((issue: string) => {
          report += `   • ${issue}\n`;
        });
      }

      report += "\n";
    }

    return report;
  }

  // 🎯 Quick health check for current page
  static quickHealthCheck(): { status: string; issues: string[] } {
    const issues: string[] = [];

    // Check for broken buttons
    const buttons = document.querySelectorAll('button, [role="button"]');
    let brokenButtons = 0;

    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (
        !element.onclick &&
        !element.hasAttribute("data-route") &&
        !element.closest("form")
      ) {
        brokenButtons++;
      }
    });

    if (brokenButtons > 0) {
      issues.push(`${brokenButtons} buttons without click handlers`);
    }

    // Check for broken links
    const links = document.querySelectorAll("a");
    let brokenLinks = 0;

    links.forEach((link) => {
      if (
        !link.href ||
        link.href === "#" ||
        link.href === "javascript:void(0)"
      ) {
        brokenLinks++;
      }
    });

    if (brokenLinks > 0) {
      issues.push(`${brokenLinks} links without valid href`);
    }

    const status =
      issues.length === 0
        ? "healthy"
        : issues.length <= 2
          ? "warning"
          : "error";

    return { status, issues };
  }
}

// 🚀 Easy-to-use audit functions
export const auditCurrentPage = () => PageAuditor.quickHealthCheck();

export const auditAllPages = async () => {
  const auditor = new PageAuditor();
  return await auditor.auditAllPages();
};

export const generateFullReport = async () => {
  const auditor = new PageAuditor();
  await auditor.auditAllPages();
  return auditor.generateDetailedReport();
};

// 🎮 Console helpers for quick testing
if (typeof window !== "undefined") {
  (window as any).auditPage = auditCurrentPage;
  (window as any).auditAll = auditAllPages;
  (window as any).generateReport = generateFullReport;
}
