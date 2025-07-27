import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Package,
  Crown,
  Star,
  CheckCircle,
  Zap,
  Users,
  Building2,
  Rocket,
  Brain,
  Shield,
  Sparkles,
  Download,
  Play,
  Settings,
  BarChart3,
  FileText,
  Mail,
  Calendar,
  Code,
  Image as ImageIcon,
  Video,
  Palette,
  Target,
  Award,
} from "lucide-react";

export function AIToolsSuite() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("starter");
  const [installedPackages, setInstalledPackages] = useState<string[]>([
    "starter",
  ]);

  const productivityPackages = [
    {
      id: "starter",
      name: "Starter Pack",
      price: "Free",
      description: "Essential AI tools to get you started",
      tier: "Free",
      color: "from-green-400 to-emerald-400",
      iconColor: "text-green-400",
      icon: Rocket,
      tools: [
        { name: "SaintGPT Search", icon: Brain, status: "active" },
        { name: "Basic Notes", icon: FileText, status: "active" },
        { name: "Simple Analytics", icon: BarChart3, status: "active" },
      ],
      features: [
        "3 Core AI Tools",
        "Basic Templates",
        "Community Support",
        "5GB Storage",
      ],
      installed: true,
    },
    {
      id: "productivity",
      name: "Productivity Pro",
      price: "$27/month",
      description: "Advanced productivity tools for professionals",
      tier: "Premium",
      color: "from-[hsl(var(--gold))] to-yellow-400",
      iconColor: "text-[hsl(var(--gold))]",
      icon: Zap,
      tools: [
        { name: "Advanced SaintGPT", icon: Brain, status: "active" },
        { name: "Smart Sticky Notes", icon: FileText, status: "active" },
        { name: "Email Assistant", icon: Mail, status: "active" },
        { name: "Calendar AI", icon: Calendar, status: "active" },
        { name: "Analytics Pro", icon: BarChart3, status: "active" },
      ],
      features: [
        "8 Premium AI Tools",
        "Advanced Templates",
        "Priority Support",
        "50GB Storage",
        "Team Collaboration",
        "Custom Workflows",
      ],
      installed: false,
    },
    {
      id: "creative",
      name: "Creative Studio",
      price: "$47/month",
      description: "Complete creative toolkit for content creators",
      tier: "Professional",
      color: "from-purple-400 to-pink-400",
      iconColor: "text-purple-400",
      icon: Palette,
      tools: [
        { name: "Image Generator", icon: ImageIcon, status: "active" },
        { name: "Video Studio", icon: Video, status: "active" },
        { name: "Design Templates", icon: Palette, status: "active" },
        { name: "Brand Manager", icon: Crown, status: "active" },
        { name: "Asset Library", icon: Package, status: "active" },
      ],
      features: [
        "Complete Creative Suite",
        "AI Image Generation",
        "Video Creation Tools",
        "Brand Management",
        "100GB Storage",
        "Commercial License",
      ],
      installed: false,
    },
    {
      id: "enterprise",
      name: "Enterprise Suite",
      price: "$97/month",
      description: "Full business automation and AI workflow platform",
      tier: "Enterprise",
      color: "from-blue-400 to-cyan-400",
      iconColor: "text-blue-400",
      icon: Building2,
      tools: [
        { name: "All Tools Included", icon: Package, status: "active" },
        { name: "Custom AI Models", icon: Brain, status: "active" },
        { name: "API Access", icon: Code, status: "active" },
        { name: "White Label", icon: Crown, status: "active" },
        { name: "Team Management", icon: Users, status: "active" },
        { name: "Analytics Dashboard", icon: BarChart3, status: "active" },
      ],
      features: [
        "All AI Tools & Features",
        "Custom AI Training",
        "API Integration",
        "White-label Solution",
        "Unlimited Storage",
        "24/7 Support",
        "Custom Development",
      ],
      installed: false,
    },
    {
      id: "developer",
      name: "Developer Pack",
      price: "$67/month",
      description: "Specialized tools for developers and technical teams",
      tier: "Professional",
      color: "from-emerald-400 to-green-400",
      iconColor: "text-emerald-400",
      icon: Code,
      tools: [
        { name: "Code Assistant", icon: Code, status: "active" },
        { name: "API Documentation", icon: FileText, status: "active" },
        { name: "Code Review AI", icon: CheckCircle, status: "active" },
        { name: "Performance Monitor", icon: BarChart3, status: "active" },
        { name: "Deploy Assistant", icon: Rocket, status: "active" },
      ],
      features: [
        "Code Generation & Review",
        "API Documentation Tools",
        "Performance Analytics",
        "Deployment Automation",
        "Version Control Integration",
        "Team Code Collaboration",
      ],
      installed: false,
    },
    {
      id: "marketing",
      name: "Marketing Mastery",
      price: "$57/month",
      description: "AI-powered marketing and content creation tools",
      tier: "Professional",
      color: "from-red-400 to-pink-400",
      iconColor: "text-red-400",
      icon: Target,
      tools: [
        { name: "Content Generator", icon: FileText, status: "active" },
        { name: "Social Media AI", icon: Users, status: "active" },
        { name: "Campaign Analytics", icon: BarChart3, status: "active" },
        { name: "SEO Assistant", icon: Target, status: "active" },
        { name: "Lead Generator", icon: Crown, status: "active" },
      ],
      features: [
        "Content Creation Suite",
        "Social Media Automation",
        "Campaign Management",
        "SEO Optimization",
        "Lead Generation Tools",
        "Performance Tracking",
      ],
      installed: false,
    },
  ];

  const selectedPkg = productivityPackages.find(
    (pkg) => pkg.id === selectedPackage,
  );

  const installPackage = (packageId: string) => {
    if (!installedPackages.includes(packageId)) {
      setInstalledPackages((prev) => [...prev, packageId]);
    }
    // In real implementation, this would handle payment/subscription
    const pkg = productivityPackages.find((p) => p.id === packageId);
    alert(
      `🚀 ${pkg?.name} Package Installed!\n\nYour new AI tools are now available. Start boosting your productivity!`,
    );
  };

  const launchTool = (toolName: string) => {
    // Route to appropriate tool based on name
    switch (toolName) {
      case "SaintGPT Search":
      case "Advanced SaintGPT":
        navigate("/search");
        break;
      case "Smart Sticky Notes":
      case "Basic Notes":
        navigate("/sticky-notes");
        break;
      case "Email Assistant":
        navigate("/email-assistant");
        break;
      case "Image Generator":
        navigate("/image-generator");
        break;
      case "Video Studio":
        navigate("/video-studio");
        break;
      case "Code Assistant":
        navigate("/code-academy");
        break;
      default:
        alert(
          `🛠️ ${toolName}\n\nThis tool is included in your package and will be available soon!`,
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/tools")}
              className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI Tools Suite</h1>
                <p className="text-sm text-gray-400">
                  Complete toolkit for AI-powered workflows
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-[hsl(var(--gold))]">
                Installed
              </div>
              <div className="text-xs text-gray-400">
                {installedPackages.length} packages
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-[hsl(var(--gold))]" />
                Productivity Packages
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productivityPackages.map((pkg) => {
                  const Icon = pkg.icon;
                  const isInstalled = installedPackages.includes(pkg.id);
                  return (
                    <div
                      key={pkg.id}
                      className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                        selectedPackage === pkg.id
                          ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/5"
                          : "border-gray-700 bg-gray-800 hover:border-gray-600"
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                      ></div>

                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <Icon className={`w-8 h-8 ${pkg.iconColor}`} />
                          <div className="flex items-center gap-2">
                            {isInstalled && (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            )}
                            <div
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                pkg.tier === "Free"
                                  ? "bg-green-900 text-green-300"
                                  : pkg.tier === "Premium"
                                    ? "bg-[hsl(var(--gold))]/20 text-[hsl(var(--gold))]"
                                    : pkg.tier === "Professional"
                                      ? "bg-purple-900 text-purple-300"
                                      : "bg-blue-900 text-blue-300"
                              }`}
                            >
                              {pkg.tier}
                            </div>
                          </div>
                        </div>

                        <h4 className="font-semibold text-white mb-1">
                          {pkg.name}
                        </h4>
                        <div className="text-lg font-bold text-[hsl(var(--gold))] mb-2">
                          {pkg.price}
                        </div>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          {pkg.description}
                        </p>

                        <div className="text-xs text-gray-500 mb-4">
                          {pkg.tools.length} AI tools included
                        </div>

                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isInstalled) {
                              setSelectedPackage(pkg.id);
                            } else {
                              installPackage(pkg.id);
                            }
                          }}
                          className={`w-full ${
                            isInstalled
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : pkg.tier === "Free"
                                ? "bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
                                : "bg-gray-700 hover:bg-gray-600 text-white"
                          }`}
                          disabled={isInstalled}
                        >
                          {isInstalled ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Installed
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              {pkg.tier === "Free"
                                ? "Install Free"
                                : "Upgrade & Install"}
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="space-y-6">
            {selectedPkg && (
              <>
                {/* Package Overview */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <selectedPkg.icon
                      className={`w-5 h-5 ${selectedPkg.iconColor}`}
                    />
                    {selectedPkg.name}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-[hsl(var(--gold))] mb-1">
                        {selectedPkg.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        {selectedPkg.description}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-white mb-2">
                        Features Included:
                      </h4>
                      <div className="space-y-1">
                        {selectedPkg.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools in Package */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Included Tools
                  </h3>

                  <div className="space-y-3">
                    {selectedPkg.tools.map((tool, index) => {
                      const Icon = tool.icon;
                      const isInstalled = installedPackages.includes(
                        selectedPkg.id,
                      );
                      return (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            isInstalled ? "bg-gray-800" : "bg-gray-800/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                            <span
                              className={`font-medium ${
                                isInstalled ? "text-white" : "text-gray-400"
                              }`}
                            >
                              {tool.name}
                            </span>
                          </div>
                          {isInstalled ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => launchTool(tool.name)}
                              className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
                            >
                              <Play className="w-3 h-3 mr-1" />
                              Launch
                            </Button>
                          ) : (
                            <div className="text-xs text-gray-500">
                              Install package
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[hsl(var(--gold))]" />
                    Package Stats
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[hsl(var(--gold))] mb-1">
                        {selectedPkg.tools.length}
                      </div>
                      <div className="text-xs text-gray-400">AI Tools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {selectedPkg.features.length}
                      </div>
                      <div className="text-xs text-gray-400">Features</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIToolsSuite;
