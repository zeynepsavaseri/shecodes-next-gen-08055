import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderPixel from "@/assets/founder-pixel.png";

export const FounderTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"menu" | "about" | "story">("menu");

  const renderContent = () => {
    switch (currentView) {
      case "about":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">About the Founder</h3>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/80">
                <span className="text-primary font-semibold">Zeynep Savaseri</span> — Founder & Organizer of HerCode
              </p>
              <p className="text-foreground/80">
                Currently exploring health & technology at ETH Zürich, passionate about creating inclusive tech spaces.
              </p>
              <div className="pt-2">
                <p className="text-foreground/80">
                  <span className="text-primary font-semibold">LinkedIn:</span>{" "}
                  <a 
                    href="https://linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    linkedin.com/in/zeynep-savaseri-9653b92aa/
                  </a>
                </p>
                <p className="text-primary font-semibold mt-3">Always open to meet new people & ideas!</p>
              </div>
            </div>
          </div>
        );
      case "story":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">The Story Behind HerCode</h3>
            <div className="space-y-3 text-sm text-foreground/80">
              <p>
                HerCode grew out of a personal frustration. Throughout my time at ETH Zürich — at networking events, hackathons, and even at the Student Project House — I often found myself one of the very few women in the room.
              </p>
              <p className="font-semibold">
                I didn't want to wait for these spaces to change.<br />
                So I started building my own.
              </p>
              <p>
                HerCode is my attempt to create what I was missing: a welcoming, collaborative environment where women can explore technology, learn by doing, connect with industry partners, and create together. I want women to feel encouraged, not intimidated. Supported, not judged. Included, not isolated.
              </p>
              <p className="italic">
                This is the community I needed — so I'm building it for others who need it too.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-primary mb-6">Select an option:</h3>
            <div className="space-y-3">
              <Button
                onClick={() => setCurrentView("about")}
                variant="outline"
                className="w-full justify-start font-mono text-left hover:bg-primary/10"
              >
                <span className="text-primary mr-2">1.</span> About the Founder
              </Button>
              <Button
                onClick={() => setCurrentView("story")}
                variant="outline"
                className="w-full justify-start font-mono text-left hover:bg-primary/10"
              >
                <span className="text-primary mr-2">2.</span> The Story Behind HerCode
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) setCurrentView("menu");
    }}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/40 hover:bg-primary/10 hover:border-primary"
        >
          <Terminal size={16} />
          <span className="hidden sm:inline">Founder</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card border-2 border-primary shadow-glow">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <img 
              src={founderPixel} 
              alt="Founder" 
              className="w-20 h-20 object-contain pixelated-image"
            />
            <div>
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                THE ARCHITECT
              </h2>
              <p className="text-xs text-muted-foreground font-mono">
                Discover the mind behind HerCode
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[200px]">
            {renderContent()}
          </div>

          {/* Back button */}
          {currentView !== "menu" && (
            <Button
              onClick={() => setCurrentView("menu")}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              ← Back to Menu
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};