import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    "opening founder.log...",
    "connected.",
    "",
    "hi, i'm zeynep — founder of hercode.",
    "i study health sciences & technology at ETH zurich, but i've always been drawn to building things that don't yet exist.",
    "i love creating, exploring, and bringing people together around ideas.",
    "most days you'll find me running, sipping matcha, or baking something sweet — usually while dreaming up the next project.",
    "",
    "i started hercode to make tech feel less intimidating and more human.",
  ];

  useEffect(() => {
    if (!isOpen) {
      setDisplayedLines([]);
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
      return;
    }

    if (currentLineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentLine === "") {
      // Empty line, skip to next
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, ""]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 100);
      return;
    }

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      // Finished current line, move to next
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, currentLineIndex, currentCharIndex]);

  useEffect(() => {
    // Cursor blink effect
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const getCurrentLineText = () => {
    if (currentLineIndex >= lines.length) return "";
    return lines[currentLineIndex].slice(0, currentCharIndex);
  };

  const isTypingComplete = currentLineIndex >= lines.length;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card/95 backdrop-blur-sm border border-primary/30">
        <div className="space-y-6">
          {/* Terminal Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
            </div>
            <span className="text-xs text-muted-foreground font-mono tracking-wider">founder.log</span>
          </div>

          {/* Terminal Content */}
          <div className="min-h-[320px] font-mono text-sm space-y-2 text-foreground/90">
            {displayedLines.map((line, index) => (
              <div 
                key={index} 
                className="animate-fade-in leading-relaxed"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  textShadow: line.includes('hercode') ? '0 0 20px hsla(var(--primary) / 0.3)' : 'none'
                }}
              >
                {line || <br />}
              </div>
            ))}
            
            {!isTypingComplete && (
              <div className="leading-relaxed">
                {getCurrentLineText()}
                {showCursor && (
                  <span 
                    className="inline-block w-2 h-4 ml-0.5 bg-primary"
                    style={{ 
                      boxShadow: '0 0 10px hsla(var(--primary) / 0.6)',
                      verticalAlign: 'middle'
                    }}
                  />
                )}
              </div>
            )}

            {isTypingComplete && showCursor && (
              <span 
                className="inline-block w-2 h-4 ml-1 bg-primary"
                style={{ 
                  boxShadow: '0 0 10px hsla(var(--primary) / 0.6)',
                  verticalAlign: 'middle'
                }}
              />
            )}
          </div>

          {/* Avatar - Shows after typing completes */}
          {isTypingComplete && (
            <div className="flex justify-center animate-fade-in pt-4">
              <div className="relative">
                <img 
                  src={founderPixel} 
                  alt="Zeynep, founder of HerCode" 
                  className="w-24 h-24 object-contain rounded-xl"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div 
                  className="absolute -inset-2 rounded-xl -z-10 blur-lg"
                  style={{ 
                    background: 'var(--gradient-founder)',
                    opacity: 0.4
                  }}
                />
              </div>
            </div>
          )}

          {/* LinkedIn Link */}
          {isTypingComplete && (
            <div className="text-center animate-fade-in pt-2">
              <a 
                href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-mono"
              >
                connect on linkedin ↗
              </a>
            </div>
          )}

          {/* Read More Button */}
          {isTypingComplete && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="w-full font-mono text-xs uppercase tracking-wider border-primary/30 hover:border-primary hover:shadow-glow transition-all"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  read more
                </>
              )}
            </Button>
          )}

          {/* Expanded Content */}
          {isExpanded && (
            <div className="space-y-4 animate-fade-in pt-4 border-t border-primary/20">
              <h3 className="font-mono font-semibold text-primary text-sm uppercase tracking-wider">
                why hercode?
              </h3>
              <div className="space-y-4 text-foreground/90 text-sm leading-relaxed font-mono">
                <p>
                  i started hercode after noticing how few women were present at the student project house at ETH or participating in hackathons. many didn't even know what hackathons were, or felt too intimidated to join them.
                </p>
                <p>
                  at the same time, i kept meeting ambitious, inspiring women at company networking events. but those spaces often felt competitive, not collaborative. it was hard to find a community where we could truly come together, share ideas, and start building.
                </p>
                <p>
                  so i created one. hercode is that space. a place where women can connect, learn, and create through hackathons and creative projects, while also giving them the opportunity to connect with companies, collaborate, and grow their ideas.
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
