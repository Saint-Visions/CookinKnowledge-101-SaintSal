import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter, 
  Archive,
  Trash2,
  Edit3,
  Save,
  X,
  StickyNote,
  Brain,
  Calendar,
  Clock,
  Tag,
  Mic,
  FileText
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
}

export function StickyNotes() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("#fbbf24");
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [newNote, setNewNote] = useState({ title: "", content: "", tags: "" });
  const [showArchived, setShowArchived] = useState(false);

  const noteColors = [
    { color: "#fbbf24", name: "Yellow" },
    { color: "#34d399", name: "Green" },
    { color: "#60a5fa", name: "Blue" },
    { color: "#f87171", name: "Red" },
    { color: "#a78bfa", name: "Purple" },
    { color: "#fb7185", name: "Pink" },
    { color: "#fbbf24", name: "Gold" }
  ];

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('stickyNotes');
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes).map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt)
      }));
      setNotes(parsedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) return;

    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title || "Untitled",
      content: newNote.content,
      color: selectedColor,
      tags: newNote.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      createdAt: new Date(),
      updatedAt: new Date(),
      isArchived: false
    };

    setNotes(prev => [note, ...prev]);
    setNewNote({ title: "", content: "", tags: "" });
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(prev => prev.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date() }
        : note
    ));
    setEditingNote(null);
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const toggleArchive = (id: string) => {
    setNotes(prev => prev.map(note => 
      note.id === id 
        ? { ...note, isArchived: !note.isArchived, updatedAt: new Date() }
        : note
    ));
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesArchive = showArchived ? note.isArchived : !note.isArchived;
    return matchesSearch && matchesArchive;
  });

  const generateAISuggestion = () => {
    const suggestions = [
      "Meeting notes for project kickoff",
      "Ideas for improving customer experience",
      "Daily goals and priorities",
      "Follow-up tasks from today's calls",
      "Creative brainstorming session",
      "Personal development objectives"
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setNewNote(prev => ({ ...prev, title: randomSuggestion }));
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
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <StickyNote className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Sticky Notes AI</h1>
                <p className="text-sm text-gray-400">Intelligent note-taking with AI suggestions</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowArchived(!showArchived)}
              className={showArchived ? "bg-[hsl(var(--gold))]/20 text-[hsl(var(--gold))]" : ""}
            >
              <Archive className="w-4 h-4 mr-2" />
              {showArchived ? 'Show Active' : 'Show Archived'}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Create New Note */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-[hsl(var(--gold))]" />
            Create New Note
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)..."
              value={newNote.tags}
              onChange={(e) => setNewNote(prev => ({ ...prev, tags: e.target.value }))}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent"
            />
          </div>
          
          <textarea
            placeholder="Write your note content..."
            value={newNote.content}
            onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
            className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-[hsl(var(--gold))] focus:border-transparent mb-4"
            rows={3}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Color:</span>
              {noteColors.map((colorOption) => (
                <button
                  key={colorOption.color}
                  onClick={() => setSelectedColor(colorOption.color)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === colorOption.color ? 'border-white' : 'border-gray-600'
                  }`}
                  style={{ backgroundColor: colorOption.color }}
                  title={colorOption.name}
                />
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={generateAISuggestion}
                className="border-[hsl(var(--gold))]/30 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10"
              >
                <Brain className="w-4 h-4 mr-2" />
                AI Suggest
              </Button>
              <Button
                onClick={createNote}
                disabled={!newNote.title.trim() && !newNote.content.trim()}
                className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Note
              </Button>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="group relative p-4 rounded-xl border border-gray-700 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{ backgroundColor: note.color + '20', borderColor: note.color + '40' }}
            >
              {editingNote === note.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    defaultValue={note.title}
                    onBlur={(e) => updateNote(note.id, { title: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm"
                    autoFocus
                  />
                  <textarea
                    defaultValue={note.content}
                    onBlur={(e) => updateNote(note.id, { content: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm resize-none"
                    rows={4}
                  />
                  <Button
                    size="sm"
                    onClick={() => setEditingNote(null)}
                    className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-black"
                  >
                    <Save className="w-3 h-3 mr-1" />
                    Save
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-white text-sm line-clamp-2">{note.title}</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                      <button
                        onClick={() => setEditingNote(note.id)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Edit3 className="w-3 h-3 text-gray-400" />
                      </button>
                      <button
                        onClick={() => toggleArchive(note.id)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Archive className="w-3 h-3 text-gray-400" />
                      </button>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        <Trash2 className="w-3 h-3 text-red-400" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-4">{note.content}</p>
                  
                  {note.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {note.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {note.updatedAt.toLocaleDateString()}
                    </div>
                    {note.isArchived && (
                      <span className="text-orange-400">Archived</span>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <StickyNote className="w-12 h-12 text-gray-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">
              {showArchived ? 'No archived notes' : 'No notes yet'}
            </h4>
            <p className="text-gray-400 mb-6">
              {showArchived 
                ? 'Archive some notes to see them here' 
                : 'Create your first note to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StickyNotes;
