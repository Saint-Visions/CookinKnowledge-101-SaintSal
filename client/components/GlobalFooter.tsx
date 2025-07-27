import React from "react";
import { Link } from "react-router-dom";

export default function GlobalFooter() {
  const footerLinks = {
    Product: [
      { name: "WarRoom", href: "/warroom" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "API", href: "/api" }
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" }
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Status", href: "/status" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Patent Info", href: "/patent" }
    ]
  };

  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fa84bf594ade74dd483b9e0584a784499?format=webp&width=800"
                alt="SaintVision Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                SaintVisionAI™
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              The future of enterprise AI collaboration. Patent-protected technology, faith-aligned values.
            </p>
            <div className="text-xs text-white/40">
              © 2025 Saint Vision Group LLC
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.Product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.Resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.Legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/40">
              <span>Protected by U.S. Patent No. 10,290,222</span>
              <span>•</span>
              <span>SOC 2 Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
            
            <div className="text-sm text-white/40">
              Made with ❤️ by SaintVision Team
            </div>
          </div>
        </div>

        {/* Powered By */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-white/30">
            Powered by <span className="text-yellow-400 font-medium">SaintSal™</span> • Where AI meets intuition
          </p>
        </div>
      </div>
    </footer>
  );
}
