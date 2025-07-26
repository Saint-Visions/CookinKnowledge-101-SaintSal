import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Copy,
  Plus,
  BarChart3,
  Users,
  DollarSign,
  Shield,
  Activity,
  Zap,
  Code,
  ExternalLink,
} from "lucide-react";

interface AuditToken {
  id: string;
  token: string;
  userId: string;
  credits: number;
  domain?: string;
  createdAt: string;
  lastUsed: string;
  status: "active" | "depleted" | "suspended";
}

interface ClientStats {
  totalClients: number;
  activeTokens: number;
  totalAudits: number;
  revenue: number;
  avgCreditsUsed: number;
}

export default function SuperUserDashboard() {
  const [tokens, setTokens] = useState<AuditToken[]>([]);
  const [stats, setStats] = useState<ClientStats>({
    totalClients: 0,
    activeTokens: 0,
    totalAudits: 0,
    revenue: 0,
    avgCreditsUsed: 0,
  });
  const [newTokenForm, setNewTokenForm] = useState({
    userId: "",
    credits: 100,
    domain: "",
  });
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    // Simulate loading data
    setStats({
      totalClients: 47,
      activeTokens: 42,
      totalAudits: 1284,
      revenue: 8947,
      avgCreditsUsed: 73,
    });

    // Load sample tokens
    setTokens([
      {
        id: "1",
        token: "audit_abc123...",
        userId: "user_123",
        credits: 75,
        domain: "https://example.com",
        createdAt: "2024-01-15",
        lastUsed: "2024-01-20",
        status: "active",
      },
      {
        id: "2",
        token: "audit_def456...",
        userId: "user_456",
        credits: 0,
        domain: "https://test.app",
        createdAt: "2024-01-10",
        lastUsed: "2024-01-19",
        status: "depleted",
      },
    ]);
  };

  const generateNewToken = async () => {
    try {
      const response = await fetch("/api/audit-service/tokens/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTokenForm),
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedToken(data.token);
        loadDashboardData(); // Refresh
        setNewTokenForm({ userId: "", credits: 100, domain: "" });
      }
    } catch (error) {
      console.error("Failed to generate token:", error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const copyIntegrationCode = (token: string) => {
    const code = `<!-- SaintVisionAI Route Auditor -->
<script src="https://saintvision.ai/audit-client.js"></script>
<script>
  SaintVisionAuditor.init({
    token: "${token}",
    autoAudit: true,
    reportEndpoint: "https://saintvision.ai/api/audit-service/report"
  });
</script>`;
    copyToClipboard(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Enterprise Route Intelligence
              </h1>
              <p className="text-gray-400">
                Advanced AI Monitoring Add-On • Powered by SaintSal AI
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xs font-semibold">
                  PREMIUM ADD-ON
                </div>
                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                  For SaintVisionAI Platform Users
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Total Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">
                {stats.totalClients}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Active Tokens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {stats.activeTokens}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Total Audits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">
                {stats.totalAudits.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">
                ${stats.revenue.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Avg Credits Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">
                {stats.avgCreditsUsed}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tokens" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="tokens">Token Management</TabsTrigger>
            <TabsTrigger value="generate">Generate Token</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="integration">Integration Guide</TabsTrigger>
          </TabsList>

          {/* Token Management */}
          <TabsContent value="tokens">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Active Audit Tokens
                </CardTitle>
                <CardDescription>
                  Manage client tokens and monitor usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tokens.map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <code className="text-sm bg-gray-700 px-2 py-1 rounded">
                            {token.token}
                          </code>
                          <Badge
                            variant={
                              token.status === "active"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {token.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-400">
                          User: {token.userId} • Credits: {token.credits} •
                          Domain: {token.domain || "Any"}
                        </div>
                        <div className="text-xs text-gray-500">
                          Created: {token.createdAt} • Last used:{" "}
                          {token.lastUsed}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(token.token)}
                          className="border-gray-600 hover:bg-gray-700"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyIntegrationCode(token.token)}
                          className="border-gray-600 hover:bg-gray-700"
                        >
                          <Code className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Generate Token */}
          <TabsContent value="generate">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Generate New Audit Token
                </CardTitle>
                <CardDescription>
                  Create a new token for client route auditing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      User ID
                    </label>
                    <Input
                      placeholder="user_123"
                      value={newTokenForm.userId}
                      onChange={(e) =>
                        setNewTokenForm((prev) => ({
                          ...prev,
                          userId: e.target.value,
                        }))
                      }
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Credits
                    </label>
                    <Input
                      type="number"
                      placeholder="100"
                      value={newTokenForm.credits}
                      onChange={(e) =>
                        setNewTokenForm((prev) => ({
                          ...prev,
                          credits: parseInt(e.target.value) || 0,
                        }))
                      }
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Domain (optional)
                    </label>
                    <Input
                      placeholder="https://example.com"
                      value={newTokenForm.domain}
                      onChange={(e) =>
                        setNewTokenForm((prev) => ({
                          ...prev,
                          domain: e.target.value,
                        }))
                      }
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                </div>

                <Button
                  onClick={generateNewToken}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Generate Token
                </Button>

                {generatedToken && (
                  <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg">
                    <h3 className="text-green-400 font-medium mb-2">
                      Token Generated Successfully!
                    </h3>
                    <div className="flex items-center space-x-2">
                      <code className="flex-1 p-2 bg-gray-800 rounded text-sm">
                        {generatedToken}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(generatedToken)}
                        className="border-green-600 hover:bg-green-800"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Service Analytics
                </CardTitle>
                <CardDescription>
                  Monitor usage patterns and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-400">
                  📊 Analytics dashboard coming soon...
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integration Guide */}
          <TabsContent value="integration">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">
                  Integration Guide
                </CardTitle>
                <CardDescription>
                  How to integrate SaintVisionAI Route Auditor into any project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    HTML/JavaScript Integration
                  </h3>
                  <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto">
                    <code>{`<!-- Add to your HTML head -->
<script src="https://saintvision.ai/audit-client.js"></script>
<script>
  SaintVisionAuditor.init({
    token: "YOUR_AUDIT_TOKEN_HERE",
    autoAudit: true,
    realTime: true,
    reportEndpoint: "https://saintvision.ai/api/audit-service/report"
  });
</script>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    React Integration
                  </h3>
                  <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto">
                    <code>{`npm install saintvision-audit-client

import { SaintVisionAuditor } from 'saintvision-audit-client';

// Initialize in your App component
useEffect(() => {
  SaintVisionAuditor.init({
    token: process.env.REACT_APP_SAINTVISION_TOKEN,
    autoAudit: true
  });
}, []);`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    API Usage
                  </h3>
                  <pre className="p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto">
                    <code>{`// Perform manual audit
const response = await fetch('https://saintvision.ai/api/audit-service/audit', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://your-site.com',
    depth: 'comprehensive'
  })
});

const audit = await response.json();`}</code>
                  </pre>
                </div>

                <div className="flex items-start space-x-2 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                  <div className="text-blue-400 mt-1">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium">
                      Full Documentation
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Complete integration guide, API reference, and examples
                      available at
                      <a
                        href="https://saintvision.ai/docs"
                        className="text-blue-400 hover:underline ml-1"
                      >
                        saintvision.ai/docs
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
