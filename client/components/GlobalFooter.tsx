import React from "react";
import { Crown } from "lucide-react";

export default function GlobalFooter() {
  return (
    <footer className="relative z-10 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Ffae77fcf2442491fade782e3822c0421?format=webp&width=800"
              alt="SaintVisionAI Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="text-xl font-bold text-white">
              SaintVisionAI™
            </span>
          </div>
          <p className="text-white/60 text-sm">
            © 2025 Saint Vision Group LLC. Protected by U.S. Patent No.
            10,290,222
          </p>
          <p className="text-white/40 text-xs mt-2">
            We protect your data. We respect your time. We serve your purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
