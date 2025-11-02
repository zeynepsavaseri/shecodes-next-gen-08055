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
    "studying health sciences & technology at eth zurich.",
    "passionate about creating, exploring, and turning ideas into something real.",
    "happiest when running, sipping matcha ☕, or baking something sweet.",
  ];

  useEffect(() => {
    if (!isOpen) {
      setVisibleLines(0);
      return;
    }

    if (visibleLines >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines(prev => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [visibleLines, isOpen, lines.length]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[hsl(270,70%,15%)] to-[hsl(240,50%,10%)] border-2 border-primary shadow-glow-intense relative overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Founder Story</DialogTitle>
          <DialogDescription>Learn about the founder of HerCode</DialogDescription>
        </VisuallyHidden>
        
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="space-y-6 relative z-10">
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
            <span className="font-mono text-xs text-primary uppercase tracking-wider">founder.log</span>
          </div>

          {/* Terminal Content */}
          <div 
            className="bg-background/20 backdrop-blur-sm p-6 rounded-lg font-mono text-sm min-h-[120px] border border-primary/20"
            style={{ imageRendering: 'pixelated' }}
          >
            <div className="space-y-2">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 transition-all duration-500 ${
                    index < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  <span className="text-primary animate-pulse-glow group-hover:brightness-150 transition-all">
                    &gt;
                  </span>
                  <span className="text-foreground/90">{line}</span>
                </div>
              ))}
              {visibleLines >= lines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-blink" style={{ imageRendering: 'pixelated' }} />
              )}
            </div>
          </div>

          {/* LinkedIn Link */}
          {visibleLines >= lines.length && (
            <div className="text-center animate-fade-in">
              <p className="text-foreground/90">
                connect with me on{" "}
                <a 
                  href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline font-mono transition-colors animate-glow-pulse"
                  style={{
                    textShadow: '0 0 10px hsl(var(--primary) / 0.5)',
                  }}
                >
                  linkedin ↗
                </a>
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                always open to meet new people & ideas.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
