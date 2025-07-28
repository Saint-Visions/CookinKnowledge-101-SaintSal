import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Play,
  Download,
  Share,
  Video as VideoIcon,
  Loader2,
  Settings,
  Zap,
  Upload,
  Mic,
  Type,
  Palette,
  Clock,
  Film,
  Camera,
  Music,
} from "lucide-react";

export function VideoStudio() {
  const navigate = useNavigate();
  const [script, setScript] = useState("");
  const [videoStyle, setVideoStyle] = useState("professional");
  const [duration, setDuration] = useState("30");
  const [voiceType, setVoiceType] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const videoStyles = [
    {
      id: "professional",
      name: "Professional",
      description: "Clean, business-focused presentation",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Dynamic with animations and effects",
    },
    { id: "minimal", name: "Minimal", description: "Simple, clean design" },
    {
      id: "educational",
      name: "Educational",
      description: "Perfect for tutorials and explanations",
    },
  ];

  const voiceOptions = [
    {
      id: "professional",
      name: "Professional Male",
      description: "Clear, authoritative voice",
    },
    {
      id: "friendly",
      name: "Friendly Female",
      description: "Warm, approachable tone",
    },
    {
      id: "energetic",
      name: "Energetic",
      description: "Dynamic, engaging delivery",
    },
    {
      id: "calm",
      name: "Calm Narrator",
      description: "Soothing, documentary style",
    },
  ];

  const templateScripts = [
    "Introduce our new AI-powered business solution that helps companies increase efficiency by 40%.",
    "Explain the benefits of our premium service tier and how it transforms customer experience.",
    "Create a product demo showcasing key features and user interface highlights.",
    "Develop a customer testimonial video highlighting success stories and results.",
    "Present quarterly business results with data visualizations and key insights.",
  ];

  const generateVideo = async () => {
    if (!script.trim() || isGenerating) return;

    setIsGenerating(true);

    try {
      // Simulate AI video generation
      await new Promise((resolve) => setTimeout(resolve, 8000));

      // Generate demo video (in production, this calls our AI video service)
      setGeneratedVideo(
        "https://cdn.builder.io/api/v1/file/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdemo-video-saintvision.mp4",
      );
    } catch (error) {
      console.error("Video generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadVideo = () => {
    if (generatedVideo) {
      const link = document.createElement("a");
      link.href = generatedVideo;
      link.download = "generated-video.mp4";
      link.click();
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
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                <VideoIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Video Studio</h1>
                <p className="text-sm text-gray-400">
                  AI-powered video creation
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Script Input */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Type className="w-5 h-5 text-[hsl(var(--gold))]" />
                Video Script
              </h3>

              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Enter your video script or description..."
                className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent mb-4"
                rows={5}
              />

              {/* Duration */}
              <div className="mb-4">
                <label
                  htmlFor="duration-select"
                  className="text-sm font-medium text-gray-300 mb-2 block"
                >
                  Duration (seconds)
                </label>
                <select
                  id="duration-select"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
                >
                  <option value="15">15 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="60">1 minute</option>
                  <option value="120">2 minutes</option>
                  <option value="300">5 minutes</option>
                </select>
              </div>

              {/* Video Style */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Video Style
                </label>
                <div className="space-y-2">
                  {videoStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setVideoStyle(style.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        videoStyle === style.id
                          ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))]"
                          : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                      }`}
                    >
                      <div className="font-medium text-sm">{style.name}</div>
                      <div className="text-xs opacity-70">
                        {style.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Voice Type
                </label>
                <div className="space-y-2">
                  {voiceOptions.map((voice) => (
                    <button
                      key={voice.id}
                      onClick={() => setVoiceType(voice.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        voiceType === voice.id
                          ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))]"
                          : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                      }`}
                    >
                      <div className="font-medium text-sm">{voice.name}</div>
                      <div className="text-xs opacity-70">
                        {voice.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateVideo}
                disabled={!script.trim() || isGenerating}
                className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Video...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate Video
                  </>
                )}
              </Button>
            </div>

            {/* Template Scripts */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Film className="w-5 h-5 text-[hsl(var(--gold))]" />
                Script Templates
              </h3>
              <div className="space-y-2">
                {templateScripts.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => setScript(template)}
                    className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <VideoIcon className="w-5 h-5 text-[hsl(var(--gold))]" />
                Video Preview
              </h3>

              {!generatedVideo && !isGenerating ? (
                <div className="aspect-video bg-gray-800 rounded-xl border border-gray-700 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <VideoIcon className="w-12 h-12 text-gray-500" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      No video generated yet
                    </h4>
                    <p className="text-gray-400 mb-6">
                      Enter a script and click "Generate Video" to create your
                      content
                    </p>
                  </div>
                </div>
              ) : isGenerating ? (
                <div className="aspect-video bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="w-16 h-16 text-[hsl(var(--gold))] animate-spin mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      Generating Video...
                    </h4>
                    <p className="text-gray-400 mb-2">
                      Creating your AI-powered video
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      This may take a few minutes
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="aspect-video bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                    <video
                      src={generatedVideo}
                      controls
                      className="w-full h-full object-cover"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23111827'/%3E%3Ctext x='400' y='225' text-anchor='middle' dominant-baseline='central' fill='%236B7280' font-family='Arial' font-size='24'%3EGenerated Video%3C/text%3E%3C/svg%3E"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <Button
                      onClick={downloadVideo}
                      className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Video
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Share Video
                    </Button>
                    <Button
                      variant="outline"
                      onClick={generateVideo}
                      disabled={isGenerating}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Regenerate
                    </Button>
                  </div>

                  {/* Video Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="font-semibold">{duration}s</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Style</div>
                      <div className="font-semibold capitalize">
                        {videoStyle}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Voice</div>
                      <div className="font-semibold">
                        {voiceOptions.find((v) => v.id === voiceType)?.name}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Quality</div>
                      <div className="font-semibold">1080p HD</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoStudio;
