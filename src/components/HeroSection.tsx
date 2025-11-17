import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { TypewriterText } from "@/components/TypewriterText";
import { GlitchText } from "@/components/GlitchText";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      {/* Hero image as background */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={heroImage}
          alt="Women coding at HerCode hackathon"
          className="w-full h-full object-cover pixelated-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s", animationDuration: '7s' }} />

      <div className="container relative mx-auto px-3 sm:px-4 py-6 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-slide-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <div className="relative inline-block">
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-1 sm:mr-2">{"{"}</span>
                  <GlitchText 
                    text="HerCode" 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-glow" 
                  />
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-1 sm:ml-2">{"}"}</span>
                </div>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-foreground/90 min-h-[2.5rem] sm:min-h-[3rem]">
                <TypewriterText 
                  texts={[
                    "Empowering Women in Tech",
                    "Building Future Leaders",
                    "Creating Innovation Together",
                    "Shaping Tomorrow's Technology"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-in px-2 sm:px-4" style={{ 
              animationDelay: "0.2s"
            }}>
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm animate-slide-in" style={{ 
              animationDelay: "0.4s"
            }}>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
              <span className="text-xs sm:text-sm text-foreground/80 font-medium">
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>
            
            {/* CTA Buttons - Creative Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-4 animate-slide-in px-2 sm:px-4" style={{ animationDelay: "0.5s" }}>
              {/* Join Events - Primary Card */}
              <div 
                className="group relative bg-gradient-to-br from-primary via-accent to-primary-glow p-[2px] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-accent/50 to-primary-glow/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative bg-background rounded-lg p-6 h-full flex flex-col items-center justify-center gap-3 min-h-[140px]">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-glow">
                    Join Our Events
                  </span>
                  <p className="text-xs text-muted-foreground text-center">
                    Experience innovation firsthand
                  </p>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Become Partner - Secondary Card */}
              <div 
                className="group relative bg-border/40 p-[2px] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-primary/30 hover:via-accent/30 hover:to-primary-glow/30"
                onClick={() => {
                  const element = document.getElementById('sponsors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="relative bg-background rounded-lg p-6 h-full flex flex-col items-center justify-center gap-3 min-h-[140px] group-hover:bg-card/50 transition-colors duration-300">
                  <span className="text-lg font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent group-hover:to-primary-glow transition-all duration-300">
                    Become a Partner
                  </span>
                  <p className="text-xs text-muted-foreground text-center">
                    Shape the future together
                  </p>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
