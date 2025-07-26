import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  Paperclip, 
  Mic, 
  Square, 
  Sparkles,
  ArrowUp
} from "lucide-react";

interface SaintGPTMainProps {
  className?: string;
}

const suggestions = [
  "Analyze my business metrics for Q4",
  "Create a product roadmap for 2024",
  "Help me write a compelling sales email",
  "Generate ideas for customer retention"
];

export function SaintGPTMain({ className }: SaintGPTMainProps) {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${className}`}>
      {/* Header */}
      <div className="border-b border-border px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">SaintGPT 4.1</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Enterprise AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fd2505f01d3b4483fbcd78c42450432d0?format=webp&width=120"
              alt="Cookin' Knowledge"
              className="h-6 hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Empty State / Welcome */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="max-w-2xl text-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Welcome to SaintGPT 4.1
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground px-4">
                Your enterprise AI assistant powered by Cookin' Knowledge.
                Ask me anything about your business, get insights, and boost productivity.
              </p>
            </div>

            {/* Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="p-3 lg:p-4 h-auto text-left justify-start hover:bg-accent"
                  onClick={() => setMessage(suggestion)}
                >
                  <div>
                    <div className="font-medium text-xs lg:text-sm">{suggestion}</div>
                  </div>
                </Button>
              ))}
            </div>

            <div className="text-xs lg:text-sm text-muted-foreground px-4">
              Powered by OpenAI • Enhanced by Saint Sal's Cookin' Knowledge
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-end gap-2 lg:gap-3 p-3 lg:p-4 border border-border rounded-2xl bg-background focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-shrink-0 hidden sm:flex"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask SaintGPT anything about your business..."
                  className="flex-1 bg-transparent border-0 resize-none outline-none text-foreground placeholder:text-muted-foreground min-h-[20px] max-h-32 text-sm lg:text-base"
                  rows={1}
                />

                <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsListening(!isListening)}
                    className={`hidden sm:flex ${isListening ? "text-red-500" : ""}`}
                  >
                    {isListening ? <Square className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>

                  <Button
                    size="sm"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="rounded-xl"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-xs text-center text-muted-foreground mt-3 px-4">
              SaintGPT can make mistakes. Check important information and verify business decisions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
