import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface SplashProps {
  className?: string;
}

export function Splash({ className }: SplashProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${className}`}>
      {/* Clean Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F7293aa1ac5704767ac0379fb96ae58b4?format=webp&width=800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Subtle overlay */}
      <div className="fixed inset-0 z-0 bg-black/40" />

      {/* Clean Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa84bf594ade74dd483b9e0584a784499?format=webp&width=800"
              alt="Sv. Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="h-6 w-px bg-white/20"></div>
            <div className="text-yellow-400 font-light text-sm tracking-[0.3em] uppercase">
              COOKIN' KNOWLEDGE
            </div>
          </div>
          <div className="text-xs text-white/40 font-light tracking-wider">
            EST. 2023
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Hero Title */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
              <span className="block text-white">
                Responsible
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-medium">
                Intelligence
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionizing industries through{" "}
              <span className="text-yellow-400 font-medium">patented HACP™ technology</span>
              , faith-guided innovation, and AI solutions that change lives across healthcare, education, and enterprise.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link to="/warroom">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-xl px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Cookin
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-xl px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Watch Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Access */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              <Link to="/pricing" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-purple-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
                <div className="text-sm font-medium text-white">Pricing</div>
              </Link>
              
              <Link to="/warroom" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-blue-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <div className="text-sm font-medium text-white">WarRoom</div>
              </Link>
              
              <Link to="/auth" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-black text-sm font-bold">👤</span>
                </div>
                <div className="text-sm font-medium text-white">Sign In</div>
              </Link>
              
              <Link to="/about" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-cyan-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">ℹ</span>
                </div>
                <div className="text-sm font-medium text-white">About</div>
              </Link>
              
              <Link to="/contact" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-green-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📧</span>
                </div>
                <div className="text-sm font-medium text-white">Contact</div>
              </Link>
              
              <Link to="/pricing" className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-orange-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">💬</span>
                </div>
                <div className="text-sm font-medium text-white">Support</div>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Brand */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <div className="flex items-center justify-center text-sm text-white/50">
          <span>Powered by</span>
          <span className="text-yellow-400 font-semibold mx-2">SAINTSAL GOTTA GUY</span>
          <span>• Changing Lives Through Divine AI</span>
        </div>
      </footer>
    </div>
  );
}
