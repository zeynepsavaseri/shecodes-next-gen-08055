import { Button } from "@/components/ui/button";
import { getNextEvent } from "@/data/events";
import { useState, useEffect } from "react";
import herIcon from "@/assets/her-icon.png";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  const [showIcon, setShowIcon] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcon((prev) => !prev);
    }, 4000); // Switch every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 sm:pt-24">
      <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Applications Open Badge */}
          <button
            onClick={scrollToEvents}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-primary font-bold">
              Applications Open
            </span>
          </button>

          {/* Main Headline */}
          <div className="space-y-4 relative">
            {/* Text Version */}
            <h1 
              className={`text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black leading-none tracking-tight transition-opacity duration-1000 ${
                showIcon ? 'opacity-0 absolute inset-0' : 'opacity-100'
              }`}
            >
              <div className="text-foreground">HER</div>
              <div className="bg-gradient-to-b from-foreground/90 to-foreground/40 bg-clip-text text-transparent">
                CODE
              </div>
            </h1>
            
            {/* Icon Version */}
            <div 
              className={`flex items-center justify-center transition-opacity duration-1000 ${
                showIcon ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img 
                src={herIcon} 
                alt="Her Code Icon" 
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
              Empowering <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">women</span> to step into the world of <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">tech</span> and <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">entrepreneurship</span>.
            </p>
          </div>

          {/* Scrolling Banner */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-foreground py-4">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* Multiple repetitions for seamless infinite scroll */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-8">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">BELONG.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">EMPOWER.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">FLOURISH.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">INSPIRE.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">ELEVATE.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">RISE.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">EMBRACE.</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-background uppercase">SUPPORT.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
