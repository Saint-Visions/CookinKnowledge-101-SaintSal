import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  Plus, 
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";

interface MinimalWorkspaceProps {
  className?: string;
}

const quickActions = [
  { label: "New Project", icon: Plus, link: "#" },
  { label: "SaintGPT", icon: Sparkles, link: "/saintgpt" },
  { label: "Search", icon: Search, link: "#" }
];

export function MinimalWorkspace({ className }: MinimalWorkspaceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen relative ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Fixed Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
        <div className="relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F8ab6ede74deb4ba19d09de45b88c2454?format=webp&width=800"
            alt="saintsal + you"
            className="w-[40vw] h-auto object-contain rounded-2xl border border-[hsl(var(--gold))]/60 shadow-[0_0_20px_rgba(218,165,32,0.1)] filter brightness-110 contrast-110"
          />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Minimal Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-16 bg-sidebar-background/80 backdrop-blur-xl border-r border-sidebar-border/30 z-40 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col items-center py-6 space-y-6">
          {/* Logo */}
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fb6e20c7d6a2e48b2866512020c3b4c5a?format=webp&width=40"
              alt="SV"
              className="w-8 h-8"
            />
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              const content = (
                <div className="w-10 h-10 rounded-xl bg-muted/30 hover:bg-muted/50 flex items-center justify-center cursor-pointer transition-all duration-200 group">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              );
              
              return action.link.startsWith('/') ? (
                <Link key={index} to={action.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Bottom Logo */}
          <div className="mt-auto">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa37d8696bc844d9197d6f71555c9f346?format=webp&width=40" 
              alt="Sv. Cookin' Knowledge"
              className="w-8 h-8 opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-16 min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F4a6078b96f0c45fa8f2a4fbd402916d5?format=webp&width=80"
                    alt="Sv. Cookin' Knowledge"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                    What Separates
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    <span className="text-[hsl(var(--gold))]">Saint</span>
                    <span className="text-[hsl(var(--neon))] font-extrabold">Vision</span>
                    <span className="text-foreground">AI?</span>
                  </h2>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-[hsl(var(--neon-green))] rounded-full animate-pulse"></div>
                <span className="text-[hsl(var(--neon-green))]">Enterprise Ready</span>
              </div>
            </div>

            {/* Main Search/Workspace */}
            <div className="relative">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                    Because your business deserves AI that actually 
                    <span className="text-[hsl(var(--neon))] font-semibold"> makes sense</span> — not 
                    another confusing ChatGPT clone
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[hsl(var(--neon-green))] rounded-full"></div>
                      <span className="text-sm text-muted-foreground">No Learning Curve</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[hsl(var(--neon-blue))] rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
                        <span className="text-[hsl(var(--neon-blue))]">Instant</span> Results
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Built For You</span>
                    </div>
                  </div>
                </div>

                {/* Main Search Bar */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/10 border border-border/30 backdrop-blur-sm focus-within:border-primary/50 focus-within:bg-muted/20 transition-all duration-300">
                    <Search className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What can I help you accomplish today?"
                      className="flex-1 bg-transparent border-0 outline-none text-lg text-foreground placeholder:text-muted-foreground"
                    />
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-xl"
                      size="sm"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Ask AI
                    </Button>
                  </div>
                </div>

                {/* Quick Access */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  <Link to="/saintgpt">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--gold))]/10 to-[hsl(var(--gold))]/5 border border-[hsl(var(--gold))]/20 hover:border-[hsl(var(--gold))]/40 cursor-pointer transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                        <span className="font-semibold text-foreground group-hover:text-[hsl(var(--gold))] transition-colors">
                          SaintGPT 4.1
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your <span className="text-[hsl(var(--neon))]">intelligent</span> business companion
                      </p>
                    </div>
                  </Link>

                  <div className="p-6 rounded-xl bg-muted/10 border border-border/30 hover:border-border/50 cursor-pointer transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <Plus className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="font-semibold text-foreground">New Project</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Start something <span className="text-[hsl(var(--gold))]">extraordinary</span>
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-muted/10 border border-border/30 hover:border-border/50 cursor-pointer transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(var(--neon))] transition-colors" />
                      <span className="font-semibold text-foreground">Quick Actions</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-[hsl(var(--neon))]">Lightning fast</span> productivity
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl text-lg">
                    Experience The Difference
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto p-6 text-center">
          <div className="text-xs text-muted-foreground">
            Powered by <span className="text-primary">Cookin' Knowledge</span> • 
            <span className="text-[hsl(var(--neon))]"> API Saint Gotthardt</span> 🔥
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
