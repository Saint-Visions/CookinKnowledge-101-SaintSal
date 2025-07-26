import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  ArrowUp,
  Zap,
  Brain,
  Minimize2,
  Maximize2,
  X,
  Sparkles,
  Shield,
  MessageSquare,
  Loader2,
  Bot,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  provider?: "openai" | "azure";
  mode?: "client" | "companion";
}

interface DualAIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  userContext?: {
    role?: "user" | "admin";
    plan?: "free" | "pro" | "enterprise";
  };
}

export function DualAIAssistant({
  isOpen,
  onClose,
  userContext,
}: DualAIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to the SaintVision AI Dual Assistant! I'm Supersal™, powered by both OpenAI and Azure. Ask me anything about our platform, get help, or let me assist with your business needs.",
      timestamp: new Date(),
      provider: "azure",
      mode: "client",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeProvider, setActiveProvider] = useState<
    "openai" | "azure" | "auto"
  >("auto");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput("");
    setIsLoading(true);

    try {
      // Determine which AI to use based on activeProvider and content complexity
      const endpoint =
        activeProvider === "azure" ||
        (activeProvider === "auto" && query.length > 100)
          ? "/api/ai/companion"
          : "/api/ai/search";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          query: query,
          userContext,
          domain: userContext?.role === "admin" ? "supersal" : "universal",
          mode: userContext?.role === "admin" ? "companion" : "client",
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        role: "assistant",
        content:
          data.response ||
          data.message ||
          "I apologize, but I'm having trouble responding right now. Please try again.",
        timestamp: new Date(),
        provider: data.provider || "openai",
        mode: data.mode || "client",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Dual AI error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "I'm experiencing technical difficulties. Please try again in a moment.",
        timestamp: new Date(),
        provider: "openai",
        mode: "client",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 bg-black/95 border-2 border-[hsl(var(--gold))]/60 rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.4)] backdrop-blur-sm z-[60] flex flex-col transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-[480px] h-[600px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--gold))]/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F8c7c9578e6324915bda191428ef80ec9?format=webp&width=800"
              alt="Supersal AI"
              className="w-10 h-10 rounded-xl object-cover shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[hsl(var(--neon-green))] rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[hsl(var(--gold))]">
              Supersal™ Dual AI
            </h3>
            <p className="text-xs text-[hsl(var(--gold))]/70">
              {activeProvider === "auto"
                ? "Smart Router"
                : activeProvider.toUpperCase()}{" "}
              •
              {userContext?.role === "admin"
                ? " Companion Mode"
                : " Client Mode"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* AI Provider Selection */}
          <div className="flex items-center gap-1 bg-black/80 border border-[hsl(var(--gold))]/20 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider("openai")}
              className={`px-2 py-1 text-xs transition-all ${activeProvider === "openai" ? "bg-[hsl(var(--gold))] text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]" : "text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))]"}`}
            >
              <Zap className="w-3 h-3 mr-1" />
              Fast
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider("azure")}
              className={`px-2 py-1 text-xs transition-all ${activeProvider === "azure" ? "bg-[hsl(var(--gold))] text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]" : "text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))]"}`}
            >
              <Brain className="w-3 h-3 mr-1" />
              Smart
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider("auto")}
              className={`px-2 py-1 text-xs transition-all ${activeProvider === "auto" ? "bg-[hsl(var(--gold))] text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]" : "text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))]"}`}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Auto
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))] transition-colors"
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4" />
            ) : (
              <Minimize2 className="w-4 h-4" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))] transition-colors"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area (hidden when minimized) */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[360px] p-3 rounded-xl ${
                    message.role === "user"
                      ? "bg-[hsl(var(--gold))]/20 text-white border border-[hsl(var(--gold))]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                      : message.provider === "azure"
                        ? "bg-gradient-to-br from-black to-gray-900 text-[hsl(var(--gold))] border border-[hsl(var(--gold))]/20 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                        : "bg-gradient-to-br from-gray-900 to-black text-[hsl(var(--gold))]/90 border border-[hsl(var(--gold))]/15 shadow-[0_0_10px_rgba(255,215,0,0.1)]"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.role === "assistant" && (
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                          message.provider === "azure"
                            ? "bg-[hsl(var(--gold))] shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                            : "bg-[hsl(var(--gold))]/80 shadow-[0_0_6px_rgba(255,215,0,0.4)]"
                        }`}
                      >
                        {message.provider === "azure" ? (
                          <Brain className="w-2.5 h-2.5 text-black" />
                        ) : (
                          <Zap className="w-2.5 h-2.5 text-black" />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-[hsl(var(--gold))]/50">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        {message.role === "assistant" && (
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))]/70 border border-[hsl(var(--gold))]/20`}
                          >
                            {message.provider?.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-black to-gray-900 border border-[hsl(var(--gold))]/20 p-3 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[hsl(var(--gold))]" />
                    <span className="text-xs text-[hsl(var(--gold))]/80">
                      {activeProvider === "azure"
                        ? "Azure AI"
                        : activeProvider === "openai"
                          ? "OpenAI"
                          : "Smart AI"}{" "}
                      is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[hsl(var(--gold))]/30">
            <div className="flex items-center gap-2 p-2 border border-[hsl(var(--gold))]/40 rounded-lg bg-black/80 focus-within:border-[hsl(var(--gold))] focus-within:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Supersal™ anything..."
                className="flex-1 bg-transparent border-0 outline-none text-[hsl(var(--gold))] placeholder:text-[hsl(var(--gold))]/50 text-sm resize-none min-h-[20px] max-h-24"
                rows={1}
                disabled={isLoading}
              />
              <Button
                size="sm"
                disabled={!input.trim() || isLoading}
                className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black px-3 py-1 rounded shrink-0 shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all"
                onClick={sendMessage}
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center mt-2">
              <div className="text-xs text-[hsl(var(--gold))]/60">
                <span className="text-[hsl(var(--gold))] font-medium">
                  Supersal™
                </span>{" "}
                • Dual AI •
                <span className="text-[hsl(var(--neon-green))]" font-medium>
                  Live Support
                </span>{" "}
                •
                <span className="text-[hsl(var(--gold))]/80 font-medium">
                  {activeProvider.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
