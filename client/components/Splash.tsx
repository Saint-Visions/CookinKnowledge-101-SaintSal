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
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${className}`}>
      {/* Clean Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F88335b4853ee4a66a62fe88e75199bfd?format=webp&width=800"
              alt="Sv. Logo"
              className="w-12 h-12 object-contain opacity-80"
            />
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-yellow-400 font-light text-sm tracking-[0.3em] uppercase opacity-60">
              COOKIN' KNOWLEDGE
            </div>
          </div>
          <div className="text-xs text-white/40 font-light tracking-wider">
            EST. 2023
          </div>
        </div>
      </div>

      {/* Main Content - CLEAN & MINIMAL */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Hero Title */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
              <span className="block text-white">
                Responsible
              </span>
              <span className="block text-yellow-400 font-semibold">
                Intelligence
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing industries through{" "}
              <span className="text-yellow-400 font-semibold">patented HACP™ technology</span>
              , faith-guided innovation, and AI solutions that change lives.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/warroom">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-2xl px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="tracking-wide">Start Cookin</span>
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-xl px-12 py-4 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Why Us
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Brand */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-center text-sm text-white/50">
          <span>Powered by</span>
          <span className="text-yellow-400 font-bold mx-2">SAINTSAL GOTTA GUY</span>
          <span>• Changing Lives Through Divine AI</span>
        </div>
      </div>
    </div>
  );
}
