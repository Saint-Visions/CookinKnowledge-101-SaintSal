import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mic, MicOff, Phone, PhoneCall, Volume2 } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

interface VoiceInterfaceProps {
  onVoiceMessage?: (message: string) => void;
}

export default function VoiceInterface({
  onVoiceMessage,
}: VoiceInterfaceProps) {
  const [isListening, setIsListening] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(false);
  const { user, userTier } = useAuth();

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      setIsSupported(true);

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();

      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onresult = (event) => {
          let finalTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }

          if (finalTranscript) {
            setTranscript(finalTranscript);
            onVoiceMessage?.(finalTranscript);
          }
        };

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, [onVoiceMessage]);

  const toggleListening = () => {
    if (!recognitionRef.current || !isSupported) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
      setTranscript("");
    }
  };

  // 📞 TWILIO VOICE CALL INTEGRATION
  const initiateVoiceCall = async () => {
    if (!user?.email) {
      alert("Please sign in to use voice calls");
      return;
    }

    if (userTier === "free" || userTier === "unlimited") {
      alert("Voice calls available for Core Tools ($97) and higher plans");
      return;
    }

    try {
      setIsCallActive(true);
      console.log("🎤 INITIATING VOICE CALL FOR:", user.email, userTier);

      // Call your Twilio endpoint
      const response = await fetch("/api/voice/initiate-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: user.email,
          userTier: userTier,
          callType: "saintsal_support",
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("✅ Voice call initiated:", data.callSid);
      } else {
        throw new Error(data.error || "Call failed");
      }
    } catch (error) {
      console.error("❌ Voice call error:", error);
      alert("Voice call failed. Please try again or contact support.");
      setIsCallActive(false);
    }
  };

  const endCall = () => {
    setIsCallActive(false);
    console.log("📞 Call ended");
  };

  // Text-to-speech for SaintSal responses
  const speakResponse = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (!isSupported) {
    return (
      <Card className="bg-gray-900 border-gray-700">
        <CardContent className="p-4 text-center">
          <p className="text-gray-400">
            Voice features not supported in this browser
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-gray-900 to-black border-yellow-400/30">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">SaintSal™ Voice</span>
          </div>
          <div className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">
            {userTier.toUpperCase()}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Voice Recognition */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">Voice Input</h4>
            <Button
              onClick={toggleListening}
              variant={isListening ? "destructive" : "default"}
              className={`w-full ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
              disabled={!isSupported}
            >
              {isListening ? (
                <>
                  <MicOff className="w-4 h-4 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 mr-2" />
                  Start Voice Input
                </>
              )}
            </Button>

            {transcript && (
              <div className="p-3 bg-gray-800 rounded text-sm text-gray-300">
                <strong>You said:</strong> "{transcript}"
              </div>
            )}
          </div>

          {/* Voice Calls */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-white">Voice Support</h4>
            <Button
              onClick={isCallActive ? endCall : initiateVoiceCall}
              variant={isCallActive ? "destructive" : "default"}
              className={`w-full ${isCallActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
              disabled={!user}
            >
              {isCallActive ? (
                <>
                  <PhoneCall className="w-4 h-4 mr-2" />
                  End Call
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 mr-2" />
                  Call SaintSal Support
                </>
              )}
            </Button>

            <div className="text-xs text-gray-400 text-center">
              {userTier === "free" || userTier === "unlimited"
                ? "Voice calls available with Core Tools ($97)+"
                : "Direct line to SaintSal support team"}
            </div>
          </div>
        </div>

        {isListening && (
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
