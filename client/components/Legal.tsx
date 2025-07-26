import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Sparkles,
  Shield,
  FileText,
  Globe,
  Database,
  Code,
  Settings,
  Lock,
  Users,
  Mail,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Zap,
  Building2
} from "lucide-react";

interface LegalProps {
  className?: string;
}

const resourceSections = [
  {
    id: "api-integration",
    title: "API Integration & Documentation",
    icon: Code,
    items: [
      { title: "SaintSalGPT 4.1 API", description: "Complete API documentation for our flagship AI model", status: "Available" },
      { title: "Azure Cognitive Services Integration", description: "Seamless integration with Microsoft Azure services", status: "Available" },
      { title: "SDK Libraries", description: "JavaScript, Python, and Node.js SDK packages", status: "Available" },
      { title: "Webhook Configuration", description: "Real-time event notifications and data sync", status: "Available" },
      { title: "Authentication & Security", description: "OAuth 2.0, API keys, and enterprise SSO setup", status: "Available" }
    ]
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    icon: Shield,
    items: [
      { title: "Privacy Policy", description: "Comprehensive data protection and user privacy guidelines", status: "Current" },
      { title: "Data Processing Agreement", description: "GDPR-compliant data processing terms for enterprise clients", status: "Current" },
      { title: "Security Compliance", description: "SOC 2 Type II, ISO 27001, and enterprise security standards", status: "Certified" },
      { title: "Data Retention Policy", description: "Clear guidelines on data storage, backup, and deletion", status: "Current" },
      { title: "Incident Response Plan", description: "Security breach notification and response procedures", status: "Current" }
    ]
  },
  {
    id: "legal-terms",
    title: "Legal & Terms",
    icon: FileText,
    items: [
      { title: "Terms of Service", description: "User agreement and platform usage guidelines", status: "Updated" },
      { title: "Service Level Agreement", description: "Uptime guarantees and performance commitments", status: "Enterprise" },
      { title: "Intellectual Property", description: "Copyright, trademark, and IP usage policies", status: "Protected" },
      { title: "Licensing Agreement", description: "Software licensing terms for commercial use", status: "Available" },
      { title: "Compliance Framework", description: "Regulatory compliance for finance, healthcare, and government", status: "Certified" }
    ]
  },
  {
    id: "developer-resources",
    title: "Developer Resources",
    icon: Settings,
    items: [
      { title: "Code Examples & Tutorials", description: "Step-by-step implementation guides and sample code", status: "Updated" },
      { title: "Testing Environment", description: "Sandbox environment for development and testing", status: "Available" },
      { title: "Rate Limits & Quotas", description: "API usage limits and enterprise scaling options", status: "Flexible" },
      { title: "Monitoring & Analytics", description: "Usage dashboards and performance monitoring tools", status: "Real-time" },
      { title: "Community Forum", description: "Developer community support and knowledge sharing", status: "Active" }
    ]
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Building2,
    items: [
      { title: "Custom AI Models", description: "Tailored AI solutions for specific business needs", status: "Available" },
      { title: "White-label Solutions", description: "Branded AI platform deployment for partners", status: "Available" },
      { title: "Dedicated Infrastructure", description: "Private cloud deployment and dedicated resources", status: "Enterprise" },
      { title: "Professional Services", description: "Implementation support and consulting services", status: "Available" },
      { title: "Training & Certification", description: "Team training and AI certification programs", status: "Available" }
    ]
  },
  {
    id: "support-contact",
    title: "Support & Contact",
    icon: Users,
    items: [
      { title: "Technical Support", description: "24/7 enterprise support and troubleshooting", status: "Available" },
      { title: "Account Management", description: "Dedicated account managers for enterprise clients", status: "Enterprise" },
      { title: "Partner Program", description: "Strategic partnerships and integration opportunities", status: "Available" },
      { title: "Contact Information", description: "Sales, support, and partnership contact details", status: "Current" },
      { title: "Feedback & Suggestions", description: "Product feedback and feature request submission", status: "Open" }
    ]
  }
];

export function Legal({ className }: LegalProps) {
  return (
    <div className={`min-h-screen ${className}`} style={{ backgroundColor: '#000000' }}>
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 border-b border-border/30 px-6 py-4" style={{ backgroundColor: '#000000' }}>
        <div className="flex items-center justify-between">
          {/* Left: Logos */}
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80"
              alt="SaintVision Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="h-8 w-px bg-border/30"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"
              alt="Cookin' Knowledge"
              className="w-8 h-8 object-contain opacity-80"
            />
          </div>

          {/* Center: Navigation */}
          <nav className="flex items-center gap-1">
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/search" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Search
            </Link>
            <Link to="/warroom" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              WarRoom
            </Link>
            <Link to="/tools" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Tools
            </Link>
            <Link to="/help" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Help
            </Link>
            <Link to="/why" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground">
              Why
            </Link>
            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">
              Legal & Resources
            </div>
            <Link to="#" className="px-4 py-2 rounded-lg hover:bg-muted/20 transition-colors text-sm font-medium text-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]/80">
              PartnerTech.ai
            </Link>
          </nav>

          {/* Right: Account */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Crown className="w-4 h-4 mr-2 text-[hsl(var(--gold))]" />
              Upgrade
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
              <span className="text-xs font-bold text-black">SV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300"
            alt="Cookin' Knowledge Background"
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Legal & <span className="text-[hsl(var(--gold))]">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Comprehensive documentation, legal terms, API integration guides, and enterprise resources. 
            Everything you need to build, deploy, and scale with SaintVisionAI.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Enterprise Ready
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Shield className="w-4 h-4" />
              SOC 2 Compliant
            </div>
            <div className="text-muted-foreground">•</div>
            <div className="flex items-center gap-2 text-sm text-[hsl(var(--gold))]">
              <Sparkles className="w-4 h-4" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceSections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group p-4 rounded-xl bg-muted/5 border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 bg-opacity-10">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-[hsl(var(--gold))] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{section.items.length} items</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--gold))] transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Resource Sections */}
        <div className="space-y-16">
          {resourceSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 bg-opacity-10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl bg-muted/5 border border-border/30 hover:border-border/60 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Available' || item.status === 'Current' || item.status === 'Updated' 
                              ? 'bg-green-400/10 text-green-400' 
                              : item.status === 'Enterprise' 
                              ? 'bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))]'
                              : 'bg-blue-400/10 text-blue-400'
                          }`}>
                            {item.status}
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--gold))] transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20 p-8 rounded-3xl bg-gradient-to-br from-muted/10 to-muted/5 border border-border/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Enterprise Support?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our enterprise team is ready to help with custom integrations, dedicated support, and tailored solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Contact Enterprise
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-border/30 p-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
            <span>Powered by</span>
            <span className="text-[hsl(var(--gold))] font-medium mx-2">SAINTSAL GOTTA GUY</span>
            <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
            <span className="mx-3">•</span>
            <span className="text-cyan-400">Azure Cognitive Services</span>
            <span className="mx-3">•</span>
            <span className="text-blue-400">SaintSalGPT 4.1 SaintVisionAI</span>
          </div>
          <div className="text-center text-xs text-muted-foreground/60">
            © 2024 SaintVisionAI. All rights reserved. | SOC 2 Type II Certified | GDPR Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
