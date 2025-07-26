import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@saintvision.ai",
      description: "24/7 support for Route Auditing Service customers",
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+1 (555) 123-4567",
      description: "Priority phone support for Enterprise customers",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      value: "Available in Dashboard",
      description: "Instant help through SaintSal AI companion",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">SaintVisionAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge className="bg-red-500 text-white animate-pulse">
              🔥 $47 Special Offer
            </Badge>
            <Link to="/pricing">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 mb-6">
            🛡️ Route Auditing Service Support
          </Badge>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Get Help & Support
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Need help with your Route Auditing Service? Our team is here 24/7 to
            ensure your website monitoring runs perfectly.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-yellow-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>47+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Instant Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 text-center"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <method.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <div className="text-yellow-400 font-semibold mb-2">
                  {method.value}
                </div>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    className="bg-gray-800 border-gray-600 text-white"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full h-32 p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none"
                    placeholder="How can we help you with your Route Auditing Service?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Help */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-yellow-400/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Setup Help
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">
                        Integration Issues?
                      </div>
                      <div className="text-gray-400">
                        Check our integration guide or contact support
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">
                        Token Problems?
                      </div>
                      <div className="text-gray-400">
                        Visit your dashboard to regenerate tokens
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">
                        Billing Questions?
                      </div>
                      <div className="text-gray-400">
                        Email billing@saintvision.ai directly
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Service Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Route Monitoring</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">
                        Operational
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">API Services</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">
                        Operational
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Dashboard</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">
                        Operational
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  🔥 Limited Time Offer
                </h3>
                <p className="text-gray-300 mb-4">
                  Get full Route Auditing Service for just $47/month
                </p>
                <Link to="/pricing">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Claim Offer Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            © 2024 SaintVisionAI. All rights reserved. • Powered by SaintSal AI
            • Route Auditing Service
          </p>
        </div>
      </div>
    </div>
  );
}
