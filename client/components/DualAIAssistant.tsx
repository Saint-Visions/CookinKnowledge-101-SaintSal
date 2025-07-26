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
  Bot
} from "lucide-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  provider?: 'openai' | 'azure';
  mode?: 'client' | 'companion';
}

interface DualAIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  userContext?: {
    role?: 'user' | 'admin';
    plan?: 'free' | 'pro' | 'enterprise';
  };
}

export function DualAIAssistant({ isOpen, onClose, userContext }: DualAIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to the SaintVision AI Dual Assistant! I\'m Supersal™, powered by both OpenAI and Azure. Ask me anything about our platform, get help, or let me assist with your business needs.',
      timestamp: new Date(),
      provider: 'azure',
      mode: 'client'
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeProvider, setActiveProvider] = useState<'openai' | 'azure' | 'auto'>('auto');
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
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const query = input;
    setInput('');
    setIsLoading(true);

    try {
      // Determine which AI to use based on activeProvider and content complexity
      const endpoint = activeProvider === 'azure' || activeProvider === 'auto' && query.length > 100
        ? '/api/ai/companion'
        : '/api/ai/search';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          query: query,
          userContext,
          domain: userContext?.role === 'admin' ? 'supersal' : 'universal',
          mode: userContext?.role === 'admin' ? 'companion' : 'client'
        })
      });

      const data = await response.json();

      const aiMessage: Message = {
        role: 'assistant',
        content: data.response || data.message || 'I apologize, but I\'m having trouble responding right now. Please try again.',
        timestamp: new Date(),
        provider: data.provider || 'openai',
        mode: data.mode || 'client'
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Dual AI error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I\'m experiencing technical difficulties. Please try again in a moment.',
        timestamp: new Date(),
        provider: 'openai',
        mode: 'client'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-4 right-4 bg-black/95 border-2 border-cyan-400/60 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.3)] backdrop-blur-sm z-[60] flex flex-col transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-[480px] h-[600px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-400/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Users className="w-4 h-4 text-black" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Supersal™ Dual AI</h3>
            <p className="text-xs text-cyan-400">
              {activeProvider === 'auto' ? 'Smart Router' : activeProvider.toUpperCase()} • 
              {userContext?.role === 'admin' ? ' Companion Mode' : ' Client Mode'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* AI Provider Selection */}
          <div className="flex items-center gap-1 bg-gray-800/50 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider('openai')}
              className={`px-2 py-1 text-xs ${activeProvider === 'openai' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
            >
              <Zap className="w-3 h-3 mr-1" />
              Fast
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider('azure')}
              className={`px-2 py-1 text-xs ${activeProvider === 'azure' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
            >
              <Brain className="w-3 h-3 mr-1" />
              Smart
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveProvider('auto')}
              className={`px-2 py-1 text-xs ${activeProvider === 'auto' ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Auto
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
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
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[360px] p-3 rounded-xl ${
                  message.role === 'user' 
                    ? 'bg-cyan-400/20 text-white border border-cyan-400/30' 
                    : message.provider === 'azure'
                      ? 'bg-purple-900/40 text-gray-100 border border-purple-500/30'
                      : 'bg-gray-800/80 text-gray-100 border border-gray-600/30'
                }`}>
                  <div className="flex items-start gap-2">
                    {message.role === 'assistant' && (
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                        message.provider === 'azure' ? 'bg-purple-500' : 'bg-blue-500'
                      }`}>
                        {message.provider === 'azure' ? 
                          <Brain className="w-2.5 h-2.5 text-white" /> : 
                          <Zap className="w-2.5 h-2.5 text-white" />
                        }
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {message.role === 'assistant' && (
                          <span className={`text-xs px-1.5 py-0.5 rounded ${
                            message.provider === 'azure' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
                          }`}>
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
                <div className={`${
                  activeProvider === 'azure' ? 'bg-purple-900/40 border-purple-500/30' : 'bg-gray-800/80 border-gray-600/30'
                } p-3 rounded-xl border`}>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                    <span className="text-xs text-cyan-400">
                      {activeProvider === 'azure' ? 'Azure AI' : activeProvider === 'openai' ? 'OpenAI' : 'Smart AI'} is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-cyan-400/30">
            <div className="flex items-center gap-2 p-2 border border-cyan-400/40 rounded-lg bg-black/50 focus-within:border-cyan-400 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Supersal™ anything..."
                className="flex-1 bg-transparent border-0 outline-none text-white placeholder:text-gray-400 text-sm resize-none min-h-[20px] max-h-24"
                rows={1}
                disabled={isLoading}
              />
              <Button
                size="sm"
                disabled={!input.trim() || isLoading}
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-3 py-1 rounded shrink-0"
                onClick={sendMessage}
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center mt-2">
              <div className="text-xs text-gray-400">
                <span className="text-cyan-400">Supersal™</span> • Dual AI • 
                <span className="text-green-400">Live Support</span> • 
                <span className="text-yellow-400">{activeProvider.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
