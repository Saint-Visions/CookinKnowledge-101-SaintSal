import React from 'react';
import { Button } from './ui/button';
import { Crown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function GlobalHeader() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Ffae77fcf2442491fade782e3822c0421?format=webp&width=800"
              alt="SaintVisionAI Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                SaintVisionAI™
              </span>
              <div className="text-xs text-white/60 uppercase tracking-wider">COOKIN' KNOWLEDGE</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-white font-medium' : 'text-white/80 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/warroom" 
              className={`transition-colors ${location.pathname === '/warroom' ? 'text-yellow-400 font-medium' : 'text-white/80 hover:text-white'}`}
            >
              WarRoom
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${location.pathname === '/about' ? 'text-yellow-400 font-medium' : 'text-white/80 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${location.pathname === '/pricing' ? 'text-yellow-400 font-medium' : 'text-white/80 hover:text-white'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-yellow-400 font-medium' : 'text-white/80 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-transparent text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 border-0 font-medium transition-all">
              Sign In
            </Button>
            <Button className="bg-transparent text-purple-400 hover:text-purple-300 border-0 font-semibold relative overflow-hidden group transition-all">
              <span className="relative z-10">Get Started</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
