import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Shield, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { label: "Websites Protected", value: "1,000+", icon: Shield },
    { label: "Happy Customers", value: "500+", icon: Users },
    { label: "Uptime Guarantee", value: "99.9%", icon: Zap },
    { label: "Years Experience", value: "5+", icon: Award },
  ];

  const team = [
    {
      name: "Ryan Capatosto",
      role: "Founder & CEO",
      bio: "Visionary leader behind SaintVisionAI, bringing enterprise-grade route monitoring to everyone.",
    },
    {
      name: "SaintSal AI",
      role: "Chief AI Officer",
      bio: "Advanced AI companion providing intelligent insights and automated route analysis.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold">SaintVisionAI</span>
          </Link>
          <Link to="/pricing">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            About SaintVisionAI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're on a mission to ensure every website delivers perfect
            navigation experiences. Powered by cutting-edge AI, we protect your
            users from broken routes and lost conversions.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 text-center"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Every broken link costs businesses money. Every 404 error frustrates
          users. Every slow route hurts conversions. We built SaintVisionAI to
          solve these problems with advanced AI monitoring that works 24/7,
          catching issues before they impact your business.
        </p>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-yellow-400 mb-4">{member.role}</div>
                <p className="text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-y border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center py-16 px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Your Website?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join hundreds of businesses using SaintVisionAI for bulletproof
            navigation
          </p>
          <Link to="/pricing">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            © 2024 SaintVisionAI. All rights reserved. • Powered by SaintSal AI
          </p>
        </div>
      </div>
    </div>
  );
}
