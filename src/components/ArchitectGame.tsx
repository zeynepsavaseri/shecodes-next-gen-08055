import { useState, useEffect, useRef } from "react";
import founderPixel from "@/assets/founder-pixel.png";

interface Message {
  type: "system" | "user" | "error" | "success";
  content: string;
}

export const ArchitectGame = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", content: "Initializing secure connection..." },
    { type: "system", content: "Connection established. Welcome to THE ARCHITECT's terminal." },
    { type: "system", content: "Type 'help' to view available commands." },
  ]);
  const [input, setInput] = useState("");
  const [unlockedSections, setUnlockedSections] = useState<Set<string>>(new Set());
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  const commands: Record<string, () => void> = {
    help: () => {
      addMessage("system", "Available commands:");
      addMessage("system", "  help       - Display this help message");
      addMessage("system", "  about      - Learn about THE ARCHITECT");
      addMessage("system", "  mission    - Discover the mission");
      addMessage("system", "  background - Educational background");
      addMessage("system", "  contact    - Get contact information");
      addMessage("system", "  clear      - Clear the terminal");
      addMessage("system", "  unlock     - Check unlock progress");
    },
    about: () => {
      if (!unlockedSections.has("about")) {
        addMessage("success", "🔓 SECTION UNLOCKED: About");
        setUnlockedSections((prev) => new Set(prev).add("about"));
      }
      addMessage("system", "⟨ THE ARCHITECT ⟩");
      addMessage("system", "Name: Zeynep Savaseri");
      addMessage("system", "Role: Founder & Organizer of HerCode");
      addMessage("system", "Status: Building bridges between health & technology");
    },
    mission: () => {
      if (!unlockedSections.has("mission")) {
        addMessage("success", "🔓 SECTION UNLOCKED: Mission");
        setUnlockedSections((prev) => new Set(prev).add("mission"));
      }
      addMessage("system", "Mission Statement:");
      addMessage("system", "To empower, connect, and challenge the next generation");
      addMessage("system", "of women in technology through hands-on experiences,");
      addMessage("system", "mentorship, and community building.");
    },
    background: () => {
      if (!unlockedSections.has("background")) {
        addMessage("success", "🔓 SECTION UNLOCKED: Background");
        setUnlockedSections((prev) => new Set(prev).add("background"));
      }
      addMessage("system", "Educational Background:");
      addMessage("system", "Currently exploring health & technology at ETH Zurich");
      addMessage("system", "Passionate about creating inclusive tech spaces");
      addMessage("system", "Focus: Healthcare innovation and digital transformation");
    },
    contact: () => {
      if (!unlockedSections.has("contact")) {
        addMessage("success", "🔓 SECTION UNLOCKED: Contact");
        setUnlockedSections((prev) => new Set(prev).add("contact"));
      }
      addMessage("system", "Contact Information:");
      addMessage("system", "LinkedIn: linkedin.com/in/zeynep-savaseri-9653b92aa/");
      addMessage("system", "Status: Always open to meet new people & ideas");
      addMessage("success", "Ready to connect and collaborate!");
    },
    clear: () => {
      setMessages([
        { type: "system", content: "Terminal cleared." },
        { type: "system", content: "Type 'help' to view available commands." },
      ]);
    },
    unlock: () => {
      const total = 4;
      const unlocked = unlockedSections.size;
      addMessage("system", `Progress: ${unlocked}/${total} sections unlocked`);
      
      if (unlocked === total) {
        addMessage("success", "🎉 ALL SECTIONS UNLOCKED! You've discovered everything about THE ARCHITECT!");
      } else {
        addMessage("system", "Continue exploring to unlock all sections...");
      }
    },
  };

  const addMessage = (type: Message["type"], content: string) => {
    setMessages((prev) => [...prev, { type, content }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage("user", `> ${input}`);
    
    const command = input.toLowerCase().trim();
    
    if (commands[command]) {
      commands[command]();
    } else {
      addMessage("error", `Command not found: ${input}`);
      addMessage("system", "Type 'help' for available commands.");
    }

    setInput("");
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-wider">
              The Architect
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 font-mono">
              Hack the terminal to discover the mind behind HerCode
            </p>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-6">
            {/* Avatar */}
            <div className="flex justify-center items-start">
              <div className="relative">
                <img 
                  src={founderPixel} 
                  alt="The Architect" 
                  className="w-40 h-40 object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
                {/* Unlock indicator */}
                <div className="absolute -bottom-2 -right-2 bg-card border-2 border-primary rounded-lg px-2 py-1">
                  <span className="text-xs font-mono text-primary font-bold">
                    {unlockedSections.size}/4
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/40 rounded-lg overflow-hidden shadow-glow">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border-b border-primary/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-xs text-foreground/80 uppercase tracking-wider">
                  architect.terminal v1.0
                </span>
              </div>

              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                className="h-[400px] overflow-y-auto p-4 font-mono text-sm bg-background/50"
                onClick={() => inputRef.current?.focus()}
              >
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`mb-2 ${
                      msg.type === "user" ? "text-accent" : 
                      msg.type === "error" ? "text-red-500" : 
                      msg.type === "success" ? "text-primary font-bold" : 
                      "text-foreground/80"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
                
                {/* Cursor */}
                <div className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <form onSubmit={handleSubmit} className="flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-foreground font-mono"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Hint */}
          {unlockedSections.size < 4 && (
            <div className="mt-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                💡 Hint: Try different commands to unlock all sections
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};