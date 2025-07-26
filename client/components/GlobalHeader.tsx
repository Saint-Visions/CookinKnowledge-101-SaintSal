import React from "react";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function GlobalHeader() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/20 backdrop-blur-2xl">
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
              <div className="text-xs text-white/60 uppercase tracking-wider">
                COOKIN' KNOWLEDGE
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/"
              className={`transition-colors ${location.pathname === "/" ? "text-white font-medium" : "text-white/80 hover:text-white"}`}
            >
              Home
            </Link>
            <Link
              to="/warroom"
              className={`transition-colors ${location.pathname === "/warroom" ? "text-yellow-400 font-medium" : "text-white/80 hover:text-white"}`}
            >
              WarRoom
            </Link>
            <Link
              to="/why"
              className={`transition-colors ${location.pathname === "/why" ? "text-yellow-400 font-medium" : "text-white/80 hover:text-white"}`}
            >
              Why Us
            </Link>
            <Link
              to="/institute"
              className={`transition-colors ${location.pathname === "/institute" ? "text-yellow-400 font-medium" : "text-white/80 hover:text-white"}`}
            >
              Institute
            </Link>
            <Link
              to="/pricing"
              className={`transition-colors ${location.pathname === "/pricing" ? "text-yellow-400 font-medium" : "text-white/80 hover:text-white"}`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${location.pathname === "/contact" ? "text-yellow-400 font-medium" : "text-white/80 hover:text-white"}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white border-white/20 hover:bg-white/5"
            >
              Sign In
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
