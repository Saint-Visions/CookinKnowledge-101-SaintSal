import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Send,
  Mail,
  Brain,
  Copy,
  RefreshCw,
  Settings,
  Zap,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export function EmailAssistant() {
  const navigate = useNavigate();
  const [emailType, setEmailType] = useState("sales");
  const [tone, setTone] = useState("professional");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [context, setContext] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const emailTypes = [
    {
      id: "sales",
      name: "Sales Outreach",
      icon: Users,
      color: "text-green-400",
    },
    {
      id: "follow-up",
      name: "Follow-up",
      icon: RefreshCw,
      color: "text-blue-400",
    },
    {
      id: "meeting",
      name: "Meeting Request",
      icon: Calendar,
      color: "text-purple-400",
    },
    {
      id: "proposal",
      name: "Proposal",
      icon: FileText,
      color: "text-yellow-400",
    },
    {
      id: "thank-you",
      name: "Thank You",
      icon: CheckCircle,
      color: "text-pink-400",
    },
    {
      id: "custom",
      name: "Custom",
      icon: MessageSquare,
      color: "text-gray-400",
    },
  ];

  const tones = [
    {
      id: "professional",
      name: "Professional",
      description: "Formal and business-appropriate",
    },
    { id: "friendly", name: "Friendly", description: "Warm and approachable" },
    {
      id: "persuasive",
      name: "Persuasive",
      description: "Compelling and convincing",
    },
    { id: "casual", name: "Casual", description: "Relaxed and informal" },
  ];

  const templates = {
    sales: {
      subject: "Partnership opportunity with [Company Name]",
      context: "Reaching out to potential client about our AI solutions",
    },
    "follow-up": {
      subject: "Following up on our conversation",
      context: "Following up after initial meeting or call",
    },
    meeting: {
      subject: "Meeting request - [Topic]",
      context: "Requesting a meeting to discuss business opportunities",
    },
    proposal: {
      subject: "Proposal for [Project Name]",
      context: "Sending a business proposal for review",
    },
    "thank-you": {
      subject: "Thank you for your time",
      context: "Expressing gratitude after meeting or collaboration",
    },
  };

  const generateEmail = async () => {
    if (!recipient || !subject || !context) return;

    setIsGenerating(true);

    try {
      // Simulate AI email generation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate email based on type and tone
      const emailContent = generateEmailContent();
      setGeneratedEmail(emailContent);
    } catch (error) {
      console.error("Email generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateEmailContent = () => {
    const greetings = {
      professional: `Dear ${recipient},`,
      friendly: `Hi ${recipient},`,
      persuasive: `Hello ${recipient},`,
      casual: `Hey ${recipient},`,
    };

    const closings = {
      professional: "Best regards,\n[Your Name]",
      friendly: "Best,\n[Your Name]",
      persuasive: "Looking forward to hearing from you,\n[Your Name]",
      casual: "Thanks,\n[Your Name]",
    };

    const bodyTemplates = {
      sales: `I hope this email finds you well. I'm reaching out because I believe our AI solutions could significantly benefit ${recipient}'s business operations.

${context}

Our platform has helped similar companies increase efficiency by 40% and reduce operational costs. I'd love to schedule a brief call to discuss how we can help achieve your business goals.

Would you be available for a 15-minute conversation this week?`,

      "follow-up": `I wanted to follow up on our recent conversation about ${context}.

Thank you for taking the time to discuss your needs with me. As promised, I'm reaching out to continue our discussion and answer any questions you might have.

Please let me know if you'd like to schedule a follow-up meeting or if there's any additional information I can provide.`,

      meeting: `I hope you're doing well. I'm writing to request a meeting to discuss ${context}.

Based on our previous interactions, I believe there are valuable opportunities for collaboration that we should explore. I'd appreciate the chance to present some ideas and learn more about your current priorities.

Would you be available for a 30-minute meeting next week? I'm flexible with timing and can accommodate your schedule.`,

      proposal: `Thank you for the opportunity to submit our proposal for ${context}.

I've attached our detailed proposal which outlines our approach, timeline, and investment. Our team is excited about the possibility of working with you on this project.

Please review the attached document and let me know if you have any questions or would like to discuss any aspects in more detail.`,

      "thank-you": `I wanted to take a moment to thank you for ${context}.

Your time and insights were incredibly valuable, and I appreciate your willingness to share your expertise. The discussion has given me a lot to think about and has reinforced my enthusiasm about our potential collaboration.

I look forward to our continued partnership and the opportunity to work together.`,
    };

    const greeting = greetings[tone as keyof typeof greetings];
    const body =
      bodyTemplates[emailType as keyof typeof bodyTemplates] || context;
    const closing = closings[tone as keyof typeof closings];

    return `${greeting}\n\n${body}\n\n${closing}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  const applyTemplate = (type: string) => {
    const template = templates[type as keyof typeof templates];
    if (template) {
      setSubject(template.subject);
      setContext(template.context);
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Email Assistant</h1>
                <p className="text-sm text-gray-400">
                  AI-powered email composition
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            {/* Email Type Selection */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                Email Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {emailTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        setEmailType(type.id);
                        applyTemplate(type.id);
                      }}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        emailType === type.id
                          ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10"
                          : "border-gray-700 bg-gray-800 hover:border-gray-600"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${type.color}`} />
                      <div className="font-medium text-sm">{type.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tone Selection */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tone</h3>
              <div className="space-y-2">
                {tones.map((toneOption) => (
                  <button
                    key={toneOption.id}
                    onClick={() => setTone(toneOption.id)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      tone === toneOption.id
                        ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))]"
                        : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <div className="font-medium text-sm">{toneOption.name}</div>
                    <div className="text-xs opacity-70">
                      {toneOption.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Details */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Email Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="e.g., Sarah Johnson"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Email subject..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Context/Purpose
                  </label>
                  <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Describe the purpose of this email..."
                    className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
                    rows={3}
                  />
                </div>

                <Button
                  onClick={generateEmail}
                  disabled={!recipient || !subject || !context || isGenerating}
                  className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold"
                >
                  {isGenerating ? (
                    <>
                      <Brain className="w-4 h-4 mr-2 animate-pulse" />
                      Generating Email...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Email
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Generated Email Panel */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5 text-[hsl(var(--gold))]" />
                Generated Email
              </h3>
              {generatedEmail && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              )}
            </div>

            {generatedEmail ? (
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Subject:</div>
                  <div className="font-medium">{subject}</div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-3">Email Body:</div>
                  <div className="whitespace-pre-wrap text-gray-200 leading-relaxed">
                    {generatedEmail}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black">
                    <Send className="w-4 h-4 mr-2" />
                    Open in Email Client
                  </Button>
                  <Button
                    variant="outline"
                    onClick={generateEmail}
                    disabled={isGenerating}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-12 h-12 text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  No email generated yet
                </h4>
                <p className="text-gray-400 mb-6">
                  Fill in the details and click "Generate Email" to create your
                  message
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailAssistant;
