import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Play, 
  Book, 
  Code, 
  Trophy,
  CheckCircle,
  Clock,
  Star,
  FileCode,
  Terminal,
  Laptop,
  Brain,
  Target,
  Zap,
  Award,
  Users,
  BarChart3
} from "lucide-react";

export function CodeAcademy() {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState("javascript");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const learningTracks = [
    {
      id: "javascript",
      name: "JavaScript Fundamentals",
      description: "Master modern JavaScript from basics to advanced concepts",
      duration: "6 weeks",
      difficulty: "Beginner",
      icon: FileCode,
      color: "from-yellow-400 to-orange-400",
      iconColor: "text-yellow-400",
      lessons: 24,
      projects: 4
    },
    {
      id: "react",
      name: "React Development",
      description: "Build modern web applications with React",
      duration: "8 weeks", 
      difficulty: "Intermediate",
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      iconColor: "text-blue-400",
      lessons: 32,
      projects: 6
    },
    {
      id: "python",
      name: "Python Programming",
      description: "Learn Python for web development and data science",
      duration: "10 weeks",
      difficulty: "Beginner",
      icon: Terminal,
      color: "from-green-400 to-emerald-400", 
      iconColor: "text-green-400",
      lessons: 40,
      projects: 8
    },
    {
      id: "typescript",
      name: "TypeScript Mastery",
      description: "Advanced type-safe JavaScript development",
      duration: "4 weeks",
      difficulty: "Advanced",
      icon: Laptop,
      color: "from-purple-400 to-violet-400",
      iconColor: "text-purple-400",
      lessons: 18,
      projects: 3
    },
    {
      id: "ai-programming",
      name: "AI-Powered Development",
      description: "Use AI tools to accelerate your coding workflow",
      duration: "5 weeks",
      difficulty: "Intermediate",
      icon: Brain,
      color: "from-[hsl(var(--gold))] to-yellow-400",
      iconColor: "text-[hsl(var(--gold))]",
      lessons: 20,
      projects: 5
    },
    {
      id: "fullstack",
      name: "Full-Stack Development",
      description: "Complete web development from frontend to backend",
      duration: "12 weeks",
      difficulty: "Advanced",
      icon: Target,
      color: "from-red-400 to-pink-400",
      iconColor: "text-red-400",
      lessons: 48,
      projects: 10
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", icon: Trophy, unlocked: true },
    { name: "Code Warrior", description: "Complete 10 lessons", icon: Award, unlocked: false },
    { name: "Project Builder", description: "Complete your first project", icon: Target, unlocked: false },
    { name: "AI Assistant", description: "Use AI help 5 times", icon: Brain, unlocked: true },
  ];

  const currentTrack = learningTracks.find(track => track.id === selectedTrack);

  const startLearning = (trackId: string) => {
    setSelectedTrack(trackId);
    // In a real implementation, this would navigate to the lesson content
    alert(`🚀 Starting ${learningTracks.find(t => t.id === trackId)?.name}!\n\nYour personalized learning path is ready. Let's code!`);
  };

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
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
              onClick={() => navigate('/tools')}
              className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-400 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Code Academy</h1>
                <p className="text-sm text-gray-400">Learn programming with AI guidance</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-[hsl(var(--gold))]">Progress</div>
              <div className="text-xs text-gray-400">{completedLessons.length} lessons completed</div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-400 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Tracks */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Book className="w-5 h-5 text-[hsl(var(--gold))]" />
                Learning Tracks
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={track.id}
                      className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                        selectedTrack === track.id
                          ? 'border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/5'
                          : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                      }`}
                      onClick={() => setSelectedTrack(track.id)}
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      
                      {/* Content */}
                      <div className="relative">
                        <div className="flex items-start justify-between mb-3">
                          <Icon className={`w-8 h-8 ${track.iconColor}`} />
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            track.difficulty === 'Beginner' ? 'bg-green-900 text-green-300' :
                            track.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {track.difficulty}
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-white mb-2">{track.name}</h4>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{track.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {track.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Book className="w-3 h-3" />
                            {track.lessons} lessons
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            {track.projects} projects
                          </div>
                        </div>
                        
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            startLearning(track.id);
                          }}
                          className={`w-full ${
                            selectedTrack === track.id
                              ? 'bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black'
                              : 'bg-gray-700 hover:bg-gray-600 text-white'
                          }`}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {selectedTrack === track.id ? 'Continue Learning' : 'Start Track'}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Track Progress */}
            {currentTrack && (
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[hsl(var(--gold))]" />
                  Current Progress - {currentTrack.name}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-[hsl(var(--gold))] mb-1">
                      {Math.round((completedLessons.length / currentTrack.lessons) * 100)}%
                    </div>
                    <div className="text-xs text-gray-400">Completion</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {completedLessons.length}
                    </div>
                    <div className="text-xs text-gray-400">Lessons Done</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {currentTrack.lessons - completedLessons.length}
                    </div>
                    <div className="text-xs text-gray-400">Remaining</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(completedLessons.length / currentTrack.lessons) * 100}%` }}
                  ></div>
                </div>

                <Button
                  className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black font-semibold"
                  onClick={() => markLessonComplete(`lesson-${Date.now()}`)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[hsl(var(--gold))]" />
                Achievements
              </h3>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.unlocked 
                          ? 'bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20' 
                          : 'bg-gray-800 border border-gray-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${
                        achievement.unlocked ? 'text-[hsl(var(--gold))]' : 'text-gray-500'
                      }`} />
                      <div className="flex-1">
                        <div className={`font-medium text-sm ${
                          achievement.unlocked ? 'text-white' : 'text-gray-400'
                        }`}>
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      {achievement.unlocked && (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Coding Assistant */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[hsl(var(--gold))]" />
                AI Coding Assistant
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">💡 Tip of the day:</div>
                  <div className="text-xs text-gray-400">
                    Use console.log() to debug your JavaScript code and see what's happening behind the scenes.
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Ask AI for Help
                </Button>
              </div>
            </div>

            {/* Community */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[hsl(var(--gold))]" />
                Community
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active learners</span>
                  <span className="text-white font-medium">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Projects shared</span>
                  <span className="text-white font-medium">1,203</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Code reviews</span>
                  <span className="text-white font-medium">856</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4"
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeAcademy;
