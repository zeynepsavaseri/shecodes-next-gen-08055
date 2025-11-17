import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { TypewriterText } from "@/components/TypewriterText";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      {/* Hero image as background */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={heroImage}
          alt="Women coding at HerCode hackathon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container relative mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-12">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-slide-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                HerCode
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground min-h-[2.5rem] sm:min-h-[3rem]">
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-in px-2 sm:px-4" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="group bg-foreground text-background hover:bg-foreground/90 px-6 py-6 text-sm font-medium transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  Join Our Events
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-card px-6 py-6 text-sm font-medium transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('sponsors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
