import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import founderPixel from "@/assets/founder-pixel.png";

interface FounderStoryProps {
  trigger?: React.ReactNode;
}

export const FounderStorySection = ({ trigger }: FounderStoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto border-0 p-0">
        {/* Gradient Background Container */}
        <div 
          className="relative rounded-3xl p-8 overflow-hidden"
          style={{ 
            background: 'var(--gradient-founder)',
            boxShadow: '0 0 60px hsla(270 65% 45% / 0.4), 0 0 100px hsla(320 70% 55% / 0.3)'
          }}
        >
          {/* Floating Sparkles */}
          <div className="absolute top-4 right-4 animate-pulse">
            <Sparkles className="w-5 h-5 text-white/60" />
          </div>
          <div className="absolute bottom-8 left-6 animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-4 h-4 text-white/40" />
          </div>
          <div className="absolute top-1/3 left-8 animate-pulse" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-3 h-3 text-white/50" />
          </div>

          {/* Content Container */}
          <div className="relative space-y-6">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={founderPixel} 
                  alt="Zeynep, founder of HerCode" 
                  className="w-28 h-28 object-contain animate-float-slow rounded-2xl"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute -inset-2 bg-white/10 rounded-2xl -z-10 blur-xl animate-glow-pulse" />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-5 text-white">
              <div className="space-y-4 leading-relaxed">
                <p className="text-lg">
                  hi, i'm zeynep 💜
                </p>
                <p className="text-sm leading-loose opacity-95">
                  founder of hercode and student of health sciences & technology at ETH zurich.
                </p>
                <p className="text-sm leading-loose opacity-95">
                  i'm passionate about bridging creativity, technology, and human connection.
                </p>
                <p className="text-sm leading-loose opacity-95">
                  i love running, matcha mornings, and building things that make people feel seen.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm leading-loose opacity-90">
                  hercode started as a way to turn that mix of curiosity and care into something real —
                  <br />
                  a space where women can explore and create with confidence.
                </p>
              </div>
            </div>

            {/* LinkedIn Link */}
            <div className="text-center pt-2">
              <a 
                href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                connect on LinkedIn ↗
              </a>
            </div>

            {/* Read More Button */}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-sm"
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

            {/* Expanded Content */}
            {isExpanded && (
              <div className="space-y-4 animate-fade-in pt-4 border-t border-white/20">
                <h3 className="font-semibold text-white text-lg">Why HerCode?</h3>
                <div className="space-y-4 text-white/90 text-sm leading-relaxed">
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
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
