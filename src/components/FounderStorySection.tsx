import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleLineCount, setVisibleLineCount] = useState(0);
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

  // Sequential fade-in effect (one line every 0.3s)
  useEffect(() => {
    if (!isOpen) {
      setVisibleLineCount(0);
      return;
    }

    if (visibleLineCount >= lines.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setVisibleLineCount(prev => prev + 1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isOpen, visibleLineCount, lines.length]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const isComplete = visibleLineCount >= lines.length;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto border border-primary/30 relative overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, hsl(270 70% 15%) 0%, hsl(240 50% 10%) 100%)'
          }}
        />
        
        {/* Particle Effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                boxShadow: '0 0 8px hsla(var(--primary) / 0.4)'
              }}
            />
          ))}
        </div>

        <div className="space-y-6 relative">
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
          <div className="min-h-[320px] font-mono text-sm space-y-3 text-foreground/90">
            {lines.slice(0, visibleLineCount).map((line, index) => (
              <div 
                key={index} 
                className="leading-relaxed flex items-start gap-2 group animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {line && (
                  <>
                    <span 
                      className="text-primary animate-pulse select-none flex-shrink-0 transition-all duration-300 group-hover:brightness-150"
                      style={{ 
                        textShadow: '0 0 12px hsla(var(--primary) / 0.6)',
                        animationDuration: '2s'
                      }}
                    >
                      &gt;
                    </span>
                    <span 
                      style={{
                        textShadow: line.includes('hercode') ? '0 0 20px hsla(var(--primary) / 0.3)' : 'none'
                      }}
                    >
                      {line}
                    </span>
                  </>
                )}
                {!line && <br />}
              </div>
            ))}

            {isComplete && showCursor && (
              <span 
                className="inline-block w-2 h-4 ml-1 bg-primary"
                style={{ 
                  boxShadow: '0 0 10px hsla(var(--primary) / 0.6)',
                  verticalAlign: 'middle'
                }}
              />
            )}
          </div>

          {/* Avatar - Shows after complete */}
          {isComplete && (
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

          {/* LinkedIn Link with Glow */}
          {isComplete && (
            <div className="text-center animate-fade-in pt-2">
              <a 
                href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 text-sm font-mono animate-glow-pulse"
                style={{
                  textShadow: '0 0 15px hsla(var(--primary) / 0.5)'
                }}
              >
                connect on linkedin ↗
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
