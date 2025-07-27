import { useState } from "react";
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
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || message;
    if (messageToSend.trim() && !isLoading) {
      const userMessage = messageToSend.trim();
      setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
      setMessage("");
      setIsLoading(true);

      try {
        const response = await fetch('/api/ai/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: userMessage,
            context: 'saintgpt-enterprise',
            userContext: { mode: 'enterprise' }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const aiResponse = data.response || data.message || 'I received your message but had trouble responding. Please try again.';
          setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
        } else {
          console.error('SaintGPT API error:', response.status);
          setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
        }
      } catch (error) {
        console.error('SaintGPT error:', error);
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${className}`} style={{ backgroundColor: '#0f0f0f', fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <div className="border-b border-gray-800 px-4 lg:px-6 py-4" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">SaintGPT 4.1</h1>
              <p className="text-sm text-gray-400 hidden sm:block">Enterprise AI Assistant</p>
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
        {/* Messages or Welcome */}
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
            <div className="max-w-2xl text-center space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-2xl flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Welcome to SaintGPT 4.1
                </h2>
                <p className="text-base lg:text-lg text-gray-300 px-4">
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
                    className="p-3 lg:p-4 h-auto text-left justify-start hover:bg-gray-800 border-gray-700 text-gray-300"
                    onClick={() => {
                      setMessage(suggestion);
                      handleSend(suggestion);
                    }}
                  >
                    <div>
                      <div className="font-medium text-xs lg:text-sm">{suggestion}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="text-xs lg:text-sm text-gray-500 px-4">
                Powered by OpenAI • Enhanced by Saint Sal's Cookin' Knowledge
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-black" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-[hsl(var(--gold))] text-black'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">U</span>
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-black" />
                    </div>
                    <div className="bg-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area - Always visible */}
      <div className="border-t border-gray-800 p-4 lg:p-6" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex items-end gap-2 lg:gap-3 p-3 lg:p-4 border border-gray-700 rounded-2xl bg-gray-900 focus-within:ring-2 focus-within:ring-[hsl(var(--gold))] focus-within:border-[hsl(var(--gold))] transition-all">
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
                className="flex-1 bg-transparent border-0 resize-none outline-none text-white placeholder:text-gray-400 min-h-[20px] max-h-32 text-sm lg:text-base"
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
                  disabled={!message.trim() || isLoading}
                  className="rounded-xl bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-xs text-center text-gray-500 mt-3 px-4">
            SaintGPT can make mistakes. Check important information and verify business decisions.
          </div>
        </div>
      </div>
    </div>
  );
}
