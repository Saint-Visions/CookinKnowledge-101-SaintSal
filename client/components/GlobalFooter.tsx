import React from 'react';
import { Crown } from 'lucide-react';

export default function GlobalFooter() {
  return (
    <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold text-white">SaintVisionAI™</span>
          </div>
          <p className="text-white/60 text-sm">
            © 2025 Saint Vision Group LLC. Protected by U.S. Patent No. 10,290,222
          </p>
          <p className="text-white/40 text-xs mt-2">
            We protect your data. We respect your time. We serve your purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
