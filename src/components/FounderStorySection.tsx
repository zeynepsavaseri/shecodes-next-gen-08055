import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "⟨ zeynep ⟩",
    "exploring health & technology at ETH",
  ];


  useEffect(() => {
    if (!isOpen) {
      setDisplayedText("");
      setCurrentLine(0);
      return;
    }

    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(lines.slice(0, currentLine).join("\n") + "\n" + currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
        }, 500);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentLine, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-2 border-primary shadow-glow-intense">
        <div className="space-y-6">
          {/* Pixel Art Avatar */}
          <div className="flex justify-center pt-2 pb-4">
            <img 
              src={founderPixel} 
              alt="Founder pixel art" 
              className="w-32 h-32 object-contain animate-float-subtle"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Terminal Header */}
          <div className="flex items-center gap-2 pb-4 border-b border-primary/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive" style={{ imageRendering: 'pixelated' }} />
              <div className="w-3 h-3 rounded-full bg-accent" style={{ imageRendering: 'pixelated' }} />
              <div className="w-3 h-3 rounded-full bg-primary" style={{ imageRendering: 'pixelated' }} />
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">founder.terminal</span>
          </div>

          {/* Terminal Content */}
          <div 
            className="bg-background/50 p-6 rounded-lg font-mono text-sm min-h-[120px] border border-primary/20"
            style={{ imageRendering: 'pixelated' }}
          >
            <div className="whitespace-pre-wrap text-foreground">
              {displayedText.split('\n').map((line, idx) => {
                // Highlight "system" and "status" keywords
                const highlightedLine = line
                  .replace(/(system|status):/g, '<span class="text-primary animate-console-flicker">$1:</span>');
                
                return (
                  <div key={idx} dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                );
              })}
              {currentLine < lines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" style={{ imageRendering: 'pixelated' }} />
              )}
              {currentLine >= lines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1" style={{ imageRendering: 'pixelated' }} />
              )}
            </div>
          </div>

          {/* LinkedIn Link */}
          {currentLine >= lines.length && (
            <div className="text-center animate-fade-in">
              <p className="text-foreground">
                connect with me on{" "}
                <a 
                  href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline font-mono transition-colors"
                >
                  LinkedIn ↗
                </a>
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Always open to meet new people & ideas.
              </p>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};
