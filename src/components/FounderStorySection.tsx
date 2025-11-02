import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "> whoami",
    "Founder of HerCode, ETH Zurich student, tech optimist.",
    "> Mission:",
    "Make tech creation accessible & fun for women.",
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
      <DialogContent className="max-w-2xl bg-card border-2 border-primary shadow-glow-intense">
        <div className="space-y-6">
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

          {/* Expanded Timeline */}
          {isExpanded && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-mono font-bold uppercase tracking-wider text-primary">Journey Timeline</h3>
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-background/50 border border-primary/20 rounded-lg hover:border-primary/40 transition-all animate-fade-in"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      imageRendering: 'pixelated' 
                    }}
                  >
                    <div className="text-primary font-mono font-bold text-lg min-w-[60px]">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono font-bold text-foreground mb-1">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
