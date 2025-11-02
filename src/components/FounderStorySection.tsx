import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "i build spaces where women create and explore.",
    "my mission is to make innovation feel less intimidating and more joyful.",
    "i'm a health sciences & technology student at ETH zurich, drawn to entrepreneurship. From student associations to creative projects alongside my studies. i love creating, building, reading, and baking (especially brownies ).",
  ];

  const timeline = [
    { year: "2024", event: "Founded HerCode", description: "Started the journey to empower women in tech" },
    { year: "2023", event: "ETH Zurich", description: "Pursuing Computer Science degree" },
    { year: "2022", event: "First Hackathon", description: "Discovered the power of collaborative coding" },
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
    }, 50);

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
          <div className="flex justify-center -mt-2">
            <img 
              src={founderPixel} 
              alt="Founder pixel art" 
              className="w-32 h-32 object-contain"
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
            className="bg-background/50 p-6 rounded-lg font-mono text-sm min-h-[200px] border border-primary/20"
            style={{ imageRendering: 'pixelated' }}
          >
            <div className="whitespace-pre-wrap text-foreground">
              {displayedText}
              {currentLine < lines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" style={{ imageRendering: 'pixelated' }} />
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

          {/* Read More Button */}
          {currentLine >= lines.length && (
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="w-full font-mono uppercase tracking-wider border-primary/30 hover:border-primary hover:shadow-glow transition-all"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Read More
                </>
              )}
            </Button>
          )}

          {/* Expanded Content */}
          {isExpanded && (
            <div className="space-y-6 animate-fade-in">
              {/* Story */}
              <div className="space-y-3">
                <h3 className="font-mono font-bold uppercase tracking-wider text-primary">Why HerCode?</h3>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>
                    I started HerCode after noticing how few women were present at the Student Project House at ETH or participating in hackathons. Many didn't even know what hackathons were, or felt too intimidated to join them.
                  </p>
                  <p>
                    At the same time, I kept meeting ambitious, inspiring women at company networking events. But those spaces often felt competitive, not collaborative. It was hard to find a community where we could truly come together, share ideas, and start building.
                  </p>
                  <p>
                    So I created one. HerCode is that space. A place where women can connect, learn, and create through hackathons and creative projects, while also giving them the opportunity to connect with companies, collaborate, and grow their ideas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
