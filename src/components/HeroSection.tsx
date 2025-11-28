import { Button } from "@/components/ui/button";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 sm:pt-24">
      <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Applications Open Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-primary">
              Applications Open
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black leading-none tracking-tight">
              <div className="text-foreground">HER</div>
              <div className="bg-gradient-to-b from-foreground/90 to-foreground/40 bg-clip-text text-transparent">
                CODE
              </div>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
              To <span className="text-primary">empower</span>, <span className="text-accent">connect</span>, and <span className="text-secondary">challenge</span> the next generation of women in technology.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg"
              onClick={() => {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono uppercase tracking-wider text-sm px-8 py-6"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
