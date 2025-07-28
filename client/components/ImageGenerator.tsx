import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Download,
  Share,
  Sparkles,
  Image as ImageIcon,
  Loader2,
  RefreshCw,
  Settings,
  Palette,
  Zap,
} from "lucide-react";

export function ImageGenerator() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("realistic");

  const styles = [
    {
      id: "realistic",
      name: "Realistic",
      description: "Photo-realistic images",
    },
    {
      id: "artistic",
      name: "Artistic",
      description: "Creative and artistic style",
    },
    { id: "cartoon", name: "Cartoon", description: "Fun cartoon style" },
    { id: "abstract", name: "Abstract", description: "Abstract and modern" },
  ];

  const suggestedPrompts = [
    "A futuristic city skyline at sunset",
    "Professional headshot for business",
    "Modern logo design with geometric shapes",
    "Cozy coffee shop interior with warm lighting",
    "Abstract background for presentation slides",
    "Product mockup on clean white background",
  ];

  const generateImage = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);

    try {
      // Simulate AI image generation
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate demo images (in production, this calls our AI image service)
      const newImages = [
        `https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdemo1-${Date.now()}.webp?format=webp&width=512`,
        `https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdemo2-${Date.now()}.webp?format=webp&width=512`,
        `https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdemo3-${Date.now()}.webp?format=webp&width=512`,
        `https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdemo4-${Date.now()}.webp?format=webp&width=512`,
      ];

      setGeneratedImages(newImages);
    } catch (error) {
      console.error("Image generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = (imageUrl: string, index: number) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `generated-image-${index + 1}.jpg`;
    link.click();
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
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI Image Generator</h1>
                <p className="text-sm text-gray-400">
                  Create stunning visuals with AI
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
            {/* Prompt Input */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                Create Your Image
              </h3>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
                rows={3}
              />

              {/* Style Selection */}
              <div className="mt-4">
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedStyle === style.id
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

              <Button
                onClick={generateImage}
                disabled={!prompt.trim() || isGenerating}
                className="w-full mt-4 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate Images
                  </>
                )}
              </Button>
            </div>

            {/* Suggested Prompts */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-[hsl(var(--gold))]" />
                Suggested Prompts
              </h3>
              <div className="space-y-2">
                {suggestedPrompts.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(suggestion)}
                    className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Images */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[hsl(var(--gold))]" />
                Generated Images
              </h3>

              {generatedImages.length === 0 && !isGenerating ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-12 h-12 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    No images generated yet
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Enter a prompt and click "Generate Images" to start creating
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isGenerating
                    ? // Loading placeholders
                      Array.from({ length: 4 }).map((_, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center"
                        >
                          <div className="text-center">
                            <Loader2 className="w-8 h-8 text-[hsl(var(--gold))] animate-spin mx-auto mb-2" />
                            <p className="text-sm text-gray-400">
                              Generating...
                            </p>
                          </div>
                        </div>
                      ))
                    : // Generated images
                      generatedImages.map((imageUrl, index) => (
                        <div key={index} className="group relative">
                          <img
                            src={imageUrl}
                            alt={`Generated image ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-xl border border-gray-700"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
                            <Button
                              size="sm"
                              onClick={() => downloadImage(imageUrl, index)}
                              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-black"
                            >
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
