import React from "react";
import { AuditDashboard, RouteAuditAlert } from "../utils/RouteAuditor";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function AuditDashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GlobalHeader />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            🔍 Route Audit Center
          </h1>
          <p className="text-gray-400">
            Comprehensive button and navigation auditing system for
            SaintVisionAI platform
          </p>
        </div>

        <AuditDashboard />

        <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">
            🎯 Console Commands
          </h2>
          <div className="space-y-2 text-sm">
            <div className="bg-gray-900 p-3 rounded font-mono">
              <span className="text-green-400">auditPage()</span> - Audit
              current page
            </div>
            <div className="bg-gray-900 p-3 rounded font-mono">
              <span className="text-green-400">auditAll()</span> - Audit all
              pages
            </div>
            <div className="bg-gray-900 p-3 rounded font-mono">
              <span className="text-green-400">generateReport()</span> -
              Generate full report
            </div>
            <div className="bg-gray-900 p-3 rounded font-mono">
              <span className="text-green-400">autoFixRoutes()</span> - Auto-fix
              broken routes
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">
            📊 Recent Fixes Applied
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>WarRoom: Added click handlers to right panel tools</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>WarRoom: Added click handlers to quick actions</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>
                DashboardMain: Fixed New Project and Book Meeting cards
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>
                SimpleSearch: Added navigation to File GPTs, Settings, etc.
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>PartnerTech: Added click handlers to lead items</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>Help: Added click handlers to help articles</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-500">✅</span>
              <span>NotFound: Fixed to use React Router Link</span>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
      <RouteAuditAlert />
    </div>
  );
}
