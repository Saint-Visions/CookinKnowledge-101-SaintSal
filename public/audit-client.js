(function (window) {
  "use strict";

  // SaintVisionAI Route Auditor Client Library
  // Powered by SaintSal AI

  const SaintVisionAuditor = {
    config: {
      token: null,
      apiBase: "https://saintvision.ai/api/audit-service",
      autoAudit: false,
      realTime: false,
      reportEndpoint: null,
      debug: false,
    },

    isInitialized: false,
    auditInterval: null,
    routeObserver: null,

    // Initialize the auditor
    init: function (options = {}) {
      if (this.isInitialized) {
        console.warn("[SaintVision] Auditor already initialized");
        return;
      }

      // Merge config
      Object.assign(this.config, options);

      if (!this.config.token) {
        console.error("[SaintVision] No audit token provided");
        return;
      }

      this.isInitialized = true;
      this.log("SaintVisionAI Route Auditor initialized");

      // Auto-audit if enabled
      if (this.config.autoAudit) {
        this.startAutoAudit();
      }

      // Real-time monitoring if enabled
      if (this.config.realTime) {
        this.startRealTimeMonitoring();
      }

      // Add SaintVision badge
      this.addBadge();

      return this;
    },

    // Perform a manual audit
    audit: async function (options = {}) {
      if (!this.isInitialized) {
        throw new Error("[SaintVision] Auditor not initialized");
      }

      this.log("Starting route audit...");

      const auditData = {
        url: options.url || window.location.href,
        depth: options.depth || "surface",
        routes: this.detectRoutes(),
        metadata: {
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          framework: this.detectFramework(),
          pageCount: this.getPageCount(),
        },
      };

      try {
        const response = await fetch(`${this.config.apiBase}/audit`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.config.token}`,
            "Content-Type": "application/json",
            "X-SaintVision-Client": "web-client-v1.0",
          },
          body: JSON.stringify(auditData),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        this.log("Audit completed:", result);

        // Trigger callback if provided
        if (options.onComplete) {
          options.onComplete(result);
        }

        // Auto-report if endpoint provided
        if (this.config.reportEndpoint) {
          this.sendReport(result);
        }

        return result;
      } catch (error) {
        this.log("Audit failed:", error);
        throw error;
      }
    },

    // Detect routes on current page
    detectRoutes: function () {
      const routes = new Set();

      // Get routes from links
      document.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("/")) {
          routes.add(href);
        }
      });

      // Get routes from buttons with data-route
      document.querySelectorAll("[data-route]").forEach((element) => {
        const route = element.getAttribute("data-route");
        if (route) {
          routes.add(route);
        }
      });

      // Get routes from router-link (Vue)
      document.querySelectorAll("router-link[to]").forEach((link) => {
        const to = link.getAttribute("to");
        if (to) {
          routes.add(to);
        }
      });

      return Array.from(routes);
    },

    // Detect the framework being used
    detectFramework: function () {
      if (window.React) return "React";
      if (window.Vue) return "Vue";
      if (window.angular) return "Angular";
      if (window.Ember) return "Ember";
      if (window.Svelte) return "Svelte";
      if (document.querySelector("[data-reactroot]")) return "React";
      if (document.querySelector('[data-server-rendered="true"]'))
        return "Vue (SSR)";
      return "Vanilla";
    },

    // Get page count estimate
    getPageCount: function () {
      const routes = this.detectRoutes();
      return routes.length;
    },

    // Start automatic auditing
    startAutoAudit: function () {
      if (this.auditInterval) {
        return;
      }

      // Initial audit
      setTimeout(() => this.audit(), 2000);

      // Periodic audits every 5 minutes
      this.auditInterval = setInterval(
        () => {
          this.audit();
        },
        5 * 60 * 1000,
      );

      this.log("Auto-audit started");
    },

    // Stop automatic auditing
    stopAutoAudit: function () {
      if (this.auditInterval) {
        clearInterval(this.auditInterval);
        this.auditInterval = null;
        this.log("Auto-audit stopped");
      }
    },

    // Start real-time monitoring
    startRealTimeMonitoring: function () {
      // Monitor for route changes
      this.routeObserver = new MutationObserver((mutations) => {
        let routeChanged = false;

        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (
                node.nodeType === 1 &&
                (node.tagName === "A" ||
                  (node.querySelector && node.querySelector("a[href]")))
              ) {
                routeChanged = true;
              }
            });
          }
        });

        if (routeChanged) {
          this.log("Route structure changed, triggering audit...");
          setTimeout(() => this.audit(), 1000);
        }
      });

      this.routeObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Monitor for navigation changes
      let lastUrl = window.location.href;
      new MutationObserver(() => {
        const url = window.location.href;
        if (url !== lastUrl) {
          lastUrl = url;
          this.log("Navigation detected, triggering audit...");
          setTimeout(() => this.audit(), 500);
        }
      }).observe(document, { subtree: true, childList: true });

      this.log("Real-time monitoring started");
    },

    // Send report to endpoint
    sendReport: async function (auditResult) {
      if (!this.config.reportEndpoint) return;

      try {
        await fetch(this.config.reportEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.config.token}`,
          },
          body: JSON.stringify({
            audit: auditResult,
            timestamp: new Date().toISOString(),
            url: window.location.href,
          }),
        });

        this.log("Report sent successfully");
      } catch (error) {
        this.log("Failed to send report:", error);
      }
    },

    // Add SaintVision badge
    addBadge: function () {
      if (document.getElementById("saintvision-badge")) return;

      const badge = document.createElement("div");
      badge.id = "saintvision-badge";
      badge.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: black;
        padding: 8px 12px;
        border-radius: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 12px;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0.8;
      `;

      badge.innerHTML = "🛡️ Protected by SaintVision";

      badge.addEventListener("mouseenter", () => {
        badge.style.opacity = "1";
        badge.style.transform = "scale(1.05)";
      });

      badge.addEventListener("mouseleave", () => {
        badge.style.opacity = "0.8";
        badge.style.transform = "scale(1)";
      });

      badge.addEventListener("click", () => {
        window.open("https://saintvision.ai", "_blank");
      });

      document.body.appendChild(badge);
    },

    // Get token stats
    getStats: async function () {
      try {
        const response = await fetch(
          `${this.config.apiBase}/tokens/${this.config.token}/stats`,
          {
            headers: {
              Authorization: `Bearer ${this.config.token}`,
            },
          },
        );

        return await response.json();
      } catch (error) {
        this.log("Failed to fetch stats:", error);
        throw error;
      }
    },

    // Logging utility
    log: function (...args) {
      if (this.config.debug) {
        console.log("[SaintVision]", ...args);
      }
    },

    // Cleanup
    destroy: function () {
      this.stopAutoAudit();

      if (this.routeObserver) {
        this.routeObserver.disconnect();
        this.routeObserver = null;
      }

      const badge = document.getElementById("saintvision-badge");
      if (badge) {
        badge.remove();
      }

      this.isInitialized = false;
      this.log("SaintVisionAI Auditor destroyed");
    },
  };

  // Expose to global scope
  window.SaintVisionAuditor = SaintVisionAuditor;

  // Auto-initialize if config provided via data attributes
  document.addEventListener("DOMContentLoaded", () => {
    const script = document.querySelector("script[data-saintvision-token]");
    if (script) {
      const token = script.getAttribute("data-saintvision-token");
      const autoAudit = script.getAttribute("data-auto-audit") === "true";

      SaintVisionAuditor.init({
        token,
        autoAudit,
        debug: script.getAttribute("data-debug") === "true",
      });
    }
  });
})(window);
