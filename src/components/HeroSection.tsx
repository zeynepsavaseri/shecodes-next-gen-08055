import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Main Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                HerCode
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95">
                Empowering Women in Tech & Entrepreneurship
              </p>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mx-auto">
              A hackathon and event series where young women explore, build, and grow.
            </p>
            
            {/* Upcoming Event Info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm md:text-base text-white/90 font-medium">
                Next Event: Coming Soon
              </span>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 shadow-xl text-base md:text-lg px-8 py-6 w-full sm:w-auto font-semibold"
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Our Events
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto text-base md:text-lg px-8 py-6"
                onClick={() => {
                  const element = document.getElementById('mission');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thin strip banner image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-y-2 border-primary/30">
        <img
          src={heroImage}
          alt="Diverse young women coding together at HerCode hackathon"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};