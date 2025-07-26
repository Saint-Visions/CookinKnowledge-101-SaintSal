import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Sparkles,
  Menu,
  X,
  ArrowUp,
  Paperclip,
  Mic,
  Square,
  MessageSquare,
  Home,
  User,
  Building2,
  StickyNote,
  Wrench,
  ImageIcon,
  Rocket,
  Users,
  Shield,
  TrendingUp,
  Palette,
  LogOut,
  Crown,
} from "lucide-react";

interface SimpleSearchProps {
  className?: string;
}

const mainMenuItems = [
  { icon: Home, label: "Main Dashboard", link: "/", hasNotification: false },
  { icon: User, label: "My Companion", hasNotification: true },
  { icon: Building2, label: "My Business", hasNotification: true },
  { icon: StickyNote, label: "Sticky Notes", hasNotification: true },
  { icon: Wrench, label: "AI Tools", hasNotification: true },
  { icon: ImageIcon, label: "Image Generator", hasNotification: true },
  { icon: Rocket, label: "SVG Launchpad", hasNotification: false },
  { icon: MessageSquare, label: "Feedback & Help", hasNotification: true },
  { icon: Users, label: "PartnerTech.ai CRM", hasNotification: false },
  { icon: Shield, label: "Client Portal", hasNotification: true },
  {
    icon: Palette,
    label: "SVT Institute of AI (R + D)",
    hasNotification: false,
  },
  { icon: TrendingUp, label: "Upgrade Tier", hasNotification: false },
  { icon: User, label: "My Account", hasNotification: false },
  { icon: LogOut, label: "Logout", hasNotification: false },
];

const chatHistory = [
  "Business strategy analysis",
  "Product launch timeline",
  "Market research insights",
  "Customer journey mapping",
  "Revenue optimization tips",
  "Team productivity guide",
];

export function SimpleSearch({ className }: SimpleSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("GPT-4 Turbo");

  const handleSend = () => {
    if (searchQuery.trim()) {
      // Handle sending message
      setSearchQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`min-h-screen relative ${className}`}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden text-foreground"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-sidebar-background border-r border-sidebar-border/30 z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Fixed Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"
            alt="Cookin' Knowledge Background"
            className="w-[200px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col h-full relative z-10">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"
                  alt="Sv."
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">
                  SaintGPT
                </h1>
                <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-wider">
                  4.1 ENTERPRISE
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-medium"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              New conversation
            </Button>
          </div>

          {/* Main Menu */}
          <div className="flex-1 px-3 py-4 space-y-1 overflow-auto">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-3">
              Main Menu
            </h3>
            {mainMenuItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-sidebar-accent/50 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground flex-shrink-0 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-sidebar-foreground/90 group-hover:text-sidebar-foreground truncate transition-colors">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  {item.hasNotification && (
                    <div className="w-2 h-2 bg-[hsl(var(--neon))] rounded-full flex-shrink-0 animate-pulse" />
                  )}
                </div>
              );

              return item.link ? (
                <Link key={index} to={item.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Sticky Companion - Always Visible */}
          <div className="sticky bottom-0 p-4 border-t border-sidebar-border/30 bg-sidebar-background">
            {/* Azure Companion */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdbc34a0fdf4849459b0ed2678312de82?format=webp&width=80"
                    alt="Sv. Companion"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-sidebar-foreground">
                    Azure Companion
                  </div>
                  <div className="text-xs text-blue-400 uppercase tracking-wider">
                    ALWAYS READY
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Your{" "}
                <span className="text-[hsl(var(--neon))]">intelligent</span>{" "}
                assistant is here
              </p>
            </div>

            {/* Gold Sparkles */}
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[hsl(var(--gold))]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80 min-h-screen flex flex-col">
        {/* Header */}
        <div className="border-b border-border/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-8 h-8 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setToolsOpen(!toolsOpen)}
                >
                  <Wrench className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                </div>

                {/* Tools Popup */}
                {toolsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-xl shadow-lg z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-3">
                        🛠️ Tools & Resources
                      </h3>
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <div className="text-sm font-medium text-foreground">
                            📁 File GPTs
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Upload and analyze files
                          </div>
                        </div>
                        <div className="p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <div className="text-sm font-medium text-foreground">
                            ⚙️ Settings
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Customize your experience
                          </div>
                        </div>
                        <div className="p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <div className="text-sm font-medium text-foreground">
                            🔍 Search Chat
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Find conversations
                          </div>
                        </div>
                        <div className="p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <div className="text-sm font-medium text-foreground">
                            💾 Saved Files
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Access your documents
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  SaintGPT 4.1
                </h1>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  Enterprise AI Search
                </p>
              </div>
            </div>

            {/* Model Selector */}
            <div className="relative">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-muted/20 border border-border/30 rounded-lg px-3 py-2 text-sm text-foreground cursor-pointer hover:bg-muted/30 transition-colors"
              >
                <option value="GPT-4 Turbo">GPT-4 Turbo</option>
                <option value="GPT-4">GPT-4</option>
                <option value="GPT-3.5 Turbo">GPT-3.5 Turbo</option>
                <option value="DALL-E 3">DALL-E 3</option>
                <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet</option>
                <option value="Claude 3 Opus">Claude 3 Opus</option>
                <option value="Gemini Pro">Gemini Pro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Welcome State - Fades when typing */}
          <div
            className={`flex-1 flex items-center justify-center p-4 lg:p-8 transition-all duration-500 ${searchQuery.trim() ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
          >
            <div className="max-w-2xl text-center space-y-6">
              <div className="w-20 h-20 mx-auto mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6d30471940b642d1a4a6ac05668f0422?format=webp&width=200"
                  alt="SaintSal"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Your{" "}
                <span className="text-[hsl(var(--gold))]">Intelligent</span>{" "}
                Business Companion
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to help with{" "}
                <span className="text-[hsl(var(--neon))]">anything</span> - from
                strategy to automation to{" "}
                <span className="text-[hsl(var(--gold))]">execution</span>
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/30 p-4 lg:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-end gap-2 lg:gap-3 p-4 border-2 border-cyan-400/60 rounded-2xl bg-muted/5 focus-within:border-cyan-400 transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-shrink-0 hidden sm:flex"
                  >
                    <Paperclip className="w-4 h-4" />
                  </Button>

                  <textarea
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask anything about your business, get insights, automate workflows..."
                    className="flex-1 bg-transparent border-0 resize-none outline-none text-foreground placeholder:text-muted-foreground min-h-[20px] max-h-32 text-sm lg:text-base"
                    rows={1}
                  />

                  <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsListening(!isListening)}
                      className={`hidden sm:flex ${isListening ? "text-red-400" : ""}`}
                    >
                      {isListening ? (
                        <Square className="w-4 h-4" />
                      ) : (
                        <Mic className="w-4 h-4" />
                      )}
                    </Button>

                    <Button
                      size="sm"
                      onClick={handleSend}
                      disabled={!searchQuery.trim()}
                      className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black rounded-xl"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-xs text-center text-muted-foreground mt-3">
                SaintGPT is powered by your enterprise knowledge base.
                <span className="text-[hsl(var(--gold))]">
                  {" "}
                  Always accurate, always ready.
                </span>
              </div>
            </div>
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
