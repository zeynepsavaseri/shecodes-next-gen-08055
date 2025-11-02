import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const lines = [
    "Studying health sciences & technology at ETH zurich.",
    "Passionate about creating, exploring, and turning ideas into something real.",
    "Happiest when running, sipping matcha, or baking something sweet.",
  ];

  useEffect(() => {
    if (!isOpen) {
      setVisibleLines(0);
      return;
    }

    if (visibleLines >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines(visibleLines + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [visibleLines, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-2 border-primary shadow-glow-intense">
        <VisuallyHidden>
          <DialogTitle>Founder Story</DialogTitle>
          <DialogDescription>Learn about the founder of HerCode</DialogDescription>
        </VisuallyHidden>
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
            className="bg-background/50 p-6 rounded-lg font-mono text-sm min-h-[120px] border border-primary/20 space-y-2"
            style={{ imageRendering: 'pixelated' }}
          >
            {lines.map((line, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 group transition-opacity duration-300 ${
                  index < visibleLines ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-primary transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]">
                  &gt;
                </span>
                <span className="text-foreground flex-1">
                  {line.includes('matcha') ? (
                    <>
                      {line.split('matcha')[0]}
                      matcha
                      <span className="inline-block ml-1 animate-fade-in">☕</span>
                      {line.split('matcha')[1]}
                    </>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" style={{ imageRendering: 'pixelated' }} />
            )}
          </div>

          {/* LinkedIn Link */}
          {visibleLines >= lines.length && (
            <div className="text-center animate-fade-in">
              <p className="text-foreground">
                connect with me on{" "}
                <a 
                  href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline font-mono transition-colors animate-glow-pulse"
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
