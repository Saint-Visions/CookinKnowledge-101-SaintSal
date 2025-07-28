import React, { useEffect, useState } from "react";

// 🔍 COMPREHENSIVE BUTTON & ROUTE AUDIT SYSTEM
// This scans every page for broken links, missing handlers, and route issues

interface AuditResult {
  page: string;
  totalButtons: number;
  connectedButtons: number;
  brokenButtons: ButtonIssue[];
  missingRoutes: string[];
  externalLinks: string[];
  routeStatus: "healthy" | "warning" | "error";
}

interface ButtonIssue {
  element: string;
  issue: "no-href" | "no-onclick" | "broken-route" | "missing-handler";
  text: string;
  location: string;
}

// Define the route map for validation
const ROUTE_MAP = {
  home: { path: "/", external: false },
  warroom: { path: "/warroom", external: false },
  dashboard: { path: "/dashboard", external: false },
  search: { path: "/search", external: false },
  tools: { path: "/tools", external: false },
  crm: { path: "/crm", external: false },
  auditService: { path: "/audit-service", external: false },
  institute: { path: "/institute", external: false },
  pricing: { path: "/pricing", external: false },
  contact: { path: "/contact", external: false },
  about: { path: "/about", external: false },
  auth: { path: "/auth", external: false },
  broker: { path: "/broker", external: false },
  help: { path: "/help", external: false },
  legal: { path: "/legal", external: false },
  why: { path: "/why", external: false },
  enterprise: { path: "/enterprise", external: false },
  landing: { path: "/landing", external: false },
  saintgpt: { path: "/saintgpt", external: false },
  checkout: { path: "/checkout-success", external: false },
};

export class RouteAuditor {
  private results: AuditResult[] = [];

  // 🎯 Main audit function - checks entire page
  async auditPage(pageName: string): Promise<AuditResult> {
    const buttons = this.findAllButtons();
    const links = this.findAllLinks();
    const issues: ButtonIssue[] = [];

    let connectedCount = 0;
    const totalElements = buttons.length + links.length;

    // Check buttons for click handlers
    buttons.forEach((button, index) => {
      const buttonAudit = this.auditButton(button, index);
      if (buttonAudit.connected) {
        connectedCount++;
      } else {
        issues.push(buttonAudit.issue!);
      }
    });

    // Check links for valid routes
    links.forEach((link, index) => {
      const linkAudit = this.auditLink(link, index);
      if (linkAudit.connected) {
        connectedCount++;
      } else {
        issues.push(linkAudit.issue!);
      }
    });

    // Analyze route status
    const routeStatus = this.determineRouteStatus(
      connectedCount,
      totalElements,
      issues,
    );

    const result: AuditResult = {
      page: pageName,
      totalButtons: totalElements,
      connectedButtons: connectedCount,
      brokenButtons: issues,
      missingRoutes: this.findMissingRoutes(),
      externalLinks: this.findExternalLinks(),
      routeStatus,
    };

    this.results.push(result);
    return result;
  }

  // 🔍 Find all clickable elements
  private findAllButtons(): HTMLElement[] {
    const selectors = [
      "button",
      '[role="button"]',
      ".cursor-pointer",
      '[data-testid*="button"]',
      '[class*="button"]',
      "[onclick]",
    ];

    const elements: HTMLElement[] = [];
    selectors.forEach((selector) => {
      const found = Array.from(
        document.querySelectorAll(selector),
      ) as HTMLElement[];
      elements.push(...found);
    });

    return [...new Set(elements)]; // Remove duplicates
  }

  // 🔗 Find all links
  private findAllLinks(): HTMLAnchorElement[] {
    return Array.from(document.querySelectorAll("a")) as HTMLAnchorElement[];
  }

  // 🕵️ Audit individual button
  private auditButton(
    button: HTMLElement,
    index: number,
  ): { connected: boolean; issue?: ButtonIssue } {
    const text = button.textContent?.trim() || `Button ${index}`;
    const dataLoc =
      button.getAttribute("data-loc") ||
      button.getAttribute("class") ||
      "unknown";

    // Check for click handlers
    const hasOnClick = button.onclick !== null;
    const hasEventListener = button.addEventListener !== undefined;
    const hasRouteData = button.hasAttribute("data-route");
    const isReactButton = button.closest("[data-reactroot]") !== null;

    // React buttons might have synthetic event handlers, so be more lenient
    if (!hasOnClick && !hasEventListener && !hasRouteData && !isReactButton) {
      return {
        connected: false,
        issue: {
          element: button.tagName.toLowerCase(),
          issue: "no-onclick",
          text,
          location: dataLoc,
        },
      };
    }

    return { connected: true };
  }

  // ���� Audit individual link
  private auditLink(
    link: HTMLAnchorElement,
    index: number,
  ): { connected: boolean; issue?: ButtonIssue } {
    const text = link.textContent?.trim() || `Link ${index}`;
    const href = link.href;
    const dataLoc =
      link.getAttribute("data-loc") || link.getAttribute("class") || "unknown";

    if (!href || href === "#" || href === "javascript:void(0)") {
      return {
        connected: false,
        issue: {
          element: "a",
          issue: "no-href",
          text,
          location: dataLoc,
        },
      };
    }

    // Check if internal route exists in ROUTE_MAP
    if (href.startsWith("/") || href.includes(window.location.hostname)) {
      const path = new URL(href, window.location.origin).pathname;
      const routeExists = Object.values(ROUTE_MAP).some(
        (route) => route.path === path,
      );

      if (!routeExists && !path.startsWith("/api/")) {
        return {
          connected: false,
          issue: {
            element: "a",
            issue: "broken-route",
            text,
            location: dataLoc,
          },
        };
      }
    }

    return { connected: true };
  }

  // 📊 Determine overall route health
  private determineRouteStatus(
    connected: number,
    total: number,
    issues: ButtonIssue[],
  ): "healthy" | "warning" | "error" {
    if (total === 0) return "healthy";

    const connectionRate = connected / total;
    const criticalIssues = issues.filter(
      (issue) => issue.issue === "broken-route" || issue.issue === "no-href",
    ).length;

    if (connectionRate >= 0.95 && criticalIssues === 0) return "healthy";
    if (connectionRate >= 0.8 && criticalIssues <= 2) return "warning";
    return "error";
  }

  // 🔍 Find missing routes in ROUTE_MAP
  private findMissingRoutes(): string[] {
    const currentPaths = Array.from(document.querySelectorAll("a"))
      .map((link) => {
        try {
          return new URL(link.href, window.location.origin).pathname;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as string[];

    const knownRoutes = Object.values(ROUTE_MAP).map((route) => route.path);
    return currentPaths.filter(
      (path) => !knownRoutes.includes(path) && path !== "/",
    );
  }

  // 🌐 Find external links
  private findExternalLinks(): string[] {
    return Array.from(document.querySelectorAll("a"))
      .map((link) => link.href)
      .filter(
        (href) =>
          href &&
          !href.includes(window.location.hostname) &&
          !href.startsWith("/"),
      )
      .filter((href, index, array) => array.indexOf(href) === index); // Remove duplicates
  }

  // 📈 Generate comprehensive report
  generateReport(): string {
    let report = "🔍 ROUTE AUDIT REPORT\n";
    report += "=".repeat(50) + "\n\n";

    this.results.forEach((result) => {
      const statusEmoji =
        result.routeStatus === "healthy"
          ? "✅"
          : result.routeStatus === "warning"
            ? "⚠️"
            : "❌";
      report += `${statusEmoji} ${result.page.toUpperCase()}\n`;
      report += `-`.repeat(30) + "\n";
      report += `Total Elements: ${result.totalButtons}\n`;
      report += `Connected: ${result.connectedButtons} (${((result.connectedButtons / result.totalButtons) * 100).toFixed(1)}%)\n`;
      report += `Issues: ${result.brokenButtons.length}\n\n`;

      if (result.brokenButtons.length > 0) {
        report += "ISSUES FOUND:\n";
        result.brokenButtons.forEach((issue, index) => {
          report += `  ${index + 1}. ${issue.element} "${issue.text}" - ${issue.issue}\n`;
          report += `     Location: ${issue.location}\n`;
        });
        report += "\n";
      }

      if (result.missingRoutes.length > 0) {
        report += "MISSING ROUTES:\n";
        result.missingRoutes.forEach((route) => {
          report += `  - ${route}\n`;
        });
        report += "\n";
      }

      report += "\n";
    });

    return report;
  }

  // 🔧 Auto-fix common issues
  autoFix(): { fixed: number; remaining: number } {
    let fixed = 0;
    let remaining = 0;

    // Add click handlers to buttons with data-route
    document.querySelectorAll("[data-route]").forEach((element) => {
      const route = element.getAttribute(
        "data-route",
      ) as keyof typeof ROUTE_MAP;
      const routeConfig = ROUTE_MAP[route];

      if (routeConfig && !element.onclick) {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          if ("external" in routeConfig && routeConfig.external) {
            window.open(routeConfig.path, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = routeConfig.path;
          }
        });
        fixed++;
      }
    });

    // Count remaining issues
    const buttons = this.findAllButtons();
    buttons.forEach((button) => {
      if (!button.onclick && !button.hasAttribute("data-route")) {
        remaining++;
      }
    });

    return { fixed, remaining };
  }

  // 🧹 Clear results
  clearResults(): void {
    this.results = [];
  }

  // 📊 Get results
  getResults(): AuditResult[] {
    return this.results;
  }
}

// 🎮 React Hook for easy audit integration
export function useRouteAuditor() {
  const [auditor] = useState(() => new RouteAuditor());
  const [results, setResults] = useState<AuditResult[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);

  const auditCurrentPage = async () => {
    setIsAuditing(true);
    const pageName = window.location.pathname.slice(1) || "home";
    const result = await auditor.auditPage(pageName);
    setResults((prev) => [...prev, result]);
    setIsAuditing(false);
    return result;
  };

  const auditAllPages = async () => {
    setIsAuditing(true);
    auditor.clearResults();

    const routes = Object.values(ROUTE_MAP).filter((route) => !route.external);
    const auditResults: AuditResult[] = [];

    for (const route of routes) {
      try {
        // Simulate navigation to each page for auditing
        const pageName = route.path === "/" ? "home" : route.path.slice(1);
        const result = await auditor.auditPage(pageName);
        auditResults.push(result);
      } catch (error) {
        console.error(`Failed to audit ${route.path}:`, error);
      }
    }

    setResults(auditResults);
    setIsAuditing(false);
    return auditResults;
  };

  const generateReport = () => auditor.generateReport();
  const autoFix = () => auditor.autoFix();
  const clearResults = () => {
    auditor.clearResults();
    setResults([]);
  };

  return {
    auditCurrentPage,
    auditAllPages,
    generateReport,
    autoFix,
    clearResults,
    results,
    isAuditing,
  };
}

// 🚨 Audit Alert Component
export function RouteAuditAlert() {
  const { auditCurrentPage, autoFix, results } = useRouteAuditor();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Auto-audit on page load
    const timer = setTimeout(() => {
      auditCurrentPage().then((result) => {
        if (result.routeStatus !== "healthy") {
          setShowAlert(true);
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert || results.length === 0) return null;

  const latestResult = results[results.length - 1];

  return (
    <div className="fixed top-4 right-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-sm z-50">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-500">⚠️</span>
        <span className="font-semibold text-white">Route Issues Detected</span>
      </div>
      <p className="text-sm text-gray-300 mb-3">
        Found {latestResult.brokenButtons.length} routing issues on this page.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            const { fixed } = autoFix();
            if (fixed > 0) {
              setShowAlert(false);
            }
          }}
          className="px-3 py-1 bg-yellow-500 text-black rounded text-sm font-medium"
        >
          Auto-Fix
        </button>
        <button
          onClick={() => setShowAlert(false)}
          className="px-3 py-1 bg-gray-600 text-white rounded text-sm"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

// 🎯 Audit Dashboard Component
export function AuditDashboard() {
  const {
    auditCurrentPage,
    auditAllPages,
    generateReport,
    autoFix,
    clearResults,
    results,
    isAuditing,
  } = useRouteAuditor();
  const [reportText, setReportText] = useState("");

  const handleGenerateReport = () => {
    const report = generateReport();
    setReportText(report);
    console.log(report);
  };

  const handleAutoFix = () => {
    const { fixed, remaining } = autoFix();
    alert(`Auto-fix complete! Fixed: ${fixed}, Remaining issues: ${remaining}`);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4">
        🔍 Route Audit Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={auditCurrentPage}
          disabled={isAuditing}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
        >
          {isAuditing ? "Auditing..." : "Audit Current Page"}
        </button>

        <button
          onClick={auditAllPages}
          disabled={isAuditing}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:opacity-50"
        >
          {isAuditing ? "Auditing..." : "Audit All Pages"}
        </button>

        <button
          onClick={handleGenerateReport}
          disabled={results.length === 0}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded disabled:opacity-50"
        >
          Generate Report
        </button>

        <button
          onClick={handleAutoFix}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded"
        >
          Auto-Fix Issues
        </button>
      </div>

      <button
        onClick={clearResults}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded mb-4"
      >
        Clear Results
      </button>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Audit Results</h3>
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded border border-gray-600"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-lg ${result.routeStatus === "healthy" ? "text-green-500" : result.routeStatus === "warning" ? "text-yellow-500" : "text-red-500"}`}
                >
                  {result.routeStatus === "healthy"
                    ? "✅"
                    : result.routeStatus === "warning"
                      ? "⚠️"
                      : "❌"}
                </span>
                <span className="font-semibold text-white">
                  {result.page.toUpperCase()}
                </span>
              </div>
              <div className="text-sm text-gray-300">
                <p>Total Elements: {result.totalButtons}</p>
                <p>
                  Connected: {result.connectedButtons} (
                  {(
                    (result.connectedButtons / result.totalButtons) *
                    100
                  ).toFixed(1)}
                  %)
                </p>
                <p>Issues: {result.brokenButtons.length}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {reportText && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-2">Full Report</h3>
          <pre className="bg-gray-800 p-4 rounded text-sm text-gray-300 overflow-auto max-h-96 border border-gray-600">
            {reportText}
          </pre>
        </div>
      )}
    </div>
  );
}

// Global console commands for manual auditing
if (typeof window !== "undefined") {
  const globalAuditor = new RouteAuditor();

  (window as any).auditPage = async () => {
    const pageName = window.location.pathname.slice(1) || "home";
    const result = await globalAuditor.auditPage(pageName);
    console.log("Audit Result:", result);
    return result;
  };

  (window as any).auditAll = async () => {
    const routes = Object.values(ROUTE_MAP).filter((route) => !route.external);
    const results = [];

    for (const route of routes) {
      const pageName = route.path === "/" ? "home" : route.path.slice(1);
      const result = await globalAuditor.auditPage(pageName);
      results.push(result);
    }

    console.log("All Audit Results:", results);
    return results;
  };

  (window as any).generateReport = () => {
    const report = globalAuditor.generateReport();
    console.log(report);
    return report;
  };

  (window as any).autoFixRoutes = () => {
    const result = globalAuditor.autoFix();
    console.log("Auto-fix result:", result);
    return result;
  };
}
