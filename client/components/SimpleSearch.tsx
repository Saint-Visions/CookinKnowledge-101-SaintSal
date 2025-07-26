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
  Crown
} from "lucide-react";

interface SimpleSearchProps {
  className?: string;
}

const chatHistory = [
  "Business strategy analysis",
  "Product launch timeline", 
  "Market research insights",
  "Customer journey mapping",
  "Revenue optimization tips",
  "Team productivity guide"
];

export function SimpleSearch({ className }: SimpleSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

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
    <div className={`min-h-screen relative ${className}`} style={{ backgroundColor: '#000000' }}>
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
      <div className={`fixed left-0 top-0 h-full w-80 bg-sidebar-background border-r border-sidebar-border/30 z-40 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border/30">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Home className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">SaintGPT</h1>
                <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-wider">4.1 ENTERPRISE</p>
              </div>
            </div>
            
            <Button className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-medium" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New conversation
            </Button>
          </div>

          {/* Chat History */}
          <div className="flex-1 p-4 overflow-auto">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">Recent</h3>
            <div className="space-y-1">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 p-3 rounded-xl hover:bg-sidebar-accent/50 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-sidebar-foreground truncate flex-1">
                    {chat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Companion - Always Visible */}
          <div className="sticky bottom-0 p-4 border-t border-sidebar-border/30 bg-sidebar-background">
            {/* Top Logo */}
            <div className="mb-4 flex justify-center">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa999c663eca34f31ae2290c3acba61c5?format=webp&width=80" 
                alt="Sv. First"
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Azure Companion */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-sidebar-foreground">Azure Companion</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wider">ALWAYS READY</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Your <span className="text-[hsl(var(--neon))]">intelligent</span> assistant is here
              </p>
            </div>

            {/* Bottom Logo */}
            <div className="flex justify-center">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdbc34a0fdf4849459b0ed2678312de82?format=webp&width=80" 
                alt="Sv. Second"
                className="w-12 h-12 object-contain"
              />
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
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">SaintGPT 4.1</h1>
                <p className="text-sm text-muted-foreground hidden sm:block">Enterprise AI Search</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Welcome State */}
          <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
            <div className="max-w-2xl text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--gold))]/20 to-[hsl(var(--gold))]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-[hsl(var(--gold))]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Ask SaintGPT Anything
              </h2>
              <p className="text-lg text-muted-foreground">
                Your <span className="text-[hsl(var(--neon))]">intelligent</span> business companion is ready to help with 
                <span className="text-[hsl(var(--gold))]"> anything</span>
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/30 p-4 lg:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="flex items-end gap-2 lg:gap-3 p-4 border border-border/30 rounded-2xl bg-muted/5 focus-within:border-[hsl(var(--gold))]/50 transition-all">
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
                      {isListening ? <Square className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
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
                <span className="text-[hsl(var(--gold))]"> Always accurate, always ready.</span>
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
