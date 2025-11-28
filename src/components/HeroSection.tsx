import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import hercodeLogo from "@/assets/hercode-main-logo.png";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      <div className="container relative mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-16 lg:py-20 pb-2 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Logo */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-center items-center">
                <img 
                  src={hercodeLogo} 
                  alt="HerCode Logo" 
                  className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-full h-auto"
                />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 px-2">
                Empowering Women in Tech
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed px-4">
              A hackathon and event series that empowers young women to step into the world of tech and entrepreneurship.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-primary/30 bg-card/40 backdrop-blur-sm shadow-lg shadow-primary/10 mx-2 mt-12 sm:mt-16 md:mt-20">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>

            {/* Join Events CTA */}
            <div className="pt-4">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-primary/30 bg-background/40 backdrop-blur-md hover:bg-primary/5 hover:border-primary/50 text-foreground font-mono text-xs sm:text-sm tracking-wide min-h-[48px] px-6 sm:px-8 group"
              >
                Join Our Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
