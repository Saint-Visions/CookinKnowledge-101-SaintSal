import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Plus,
  Calendar,
  Users,
  Search,
  User,
  BarChart3,
  FileText,
  Clock,
  ExternalLink,
  Bell,
  Sparkles
} from "lucide-react";

interface DashboardMainProps {
  className?: string;
}

export function DashboardMain({ className }: DashboardMainProps) {
  return (
    <div className={`flex-1 p-6 overflow-auto ${className}`}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">Enterprise Command Center</h1>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded uppercase tracking-wider font-medium">
            GET BUSY
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>Profile</span>
            <span>Support</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">★ Waiting Lists</span>
            <span className="text-primary">★ Partnerships 📈</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              Account
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">⚡ Quick Actions</CardTitle>
                <span className="text-sm text-muted-foreground">Explore complete your business efficiently</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Plus className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">New Project</h3>
                        <p className="text-sm text-muted-foreground">Create or import project</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Book Meeting</h3>
                        <p className="text-sm text-muted-foreground">Schedule consultation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Link to="/saintgpt">
                  <Card className="bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-medium">SaintGPT 4.1</h3>
                          <p className="text-sm text-muted-foreground">AI Assistant</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">🚨</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">**Enterprise Command Center Active** Welcome to your AI powered business central room.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      I can analyze your pipeline, draft contracts sequences, and execute GHL workflows. What can I help you accomplish?
                    </p>
                  </div>
                </div>
              </div>


            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Pipeline Overview */}
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">📈 Pipeline Overview</CardTitle>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">$57500</div>
                  <div className="text-sm text-muted-foreground">Current pipeline</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">$24.6k</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Deals</span>
                    <span className="text-sm font-medium">conversations</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GHL Quick Access */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-medium">⚡ GHL Quick Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer">
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Contacts</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Calendar</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Pipeline</span>
              </div>
              <Button className="w-full" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-medium">🔄 Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">No recent activity</p>
                <p className="text-xs text-muted-foreground mt-1">Start working to see updates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            API Saint Gotthardt 🔥
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Add more options within GHL WorkFlows or leverage strategic</span>
            <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              ⚡
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
