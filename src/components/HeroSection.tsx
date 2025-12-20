import { Button } from "@/components/ui/button";
import { getNextEvent } from "@/data/events";
import iridescentBlob from "@/assets/iridescent-blob.png";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 sm:pt-24">
      {/* Animated Iridescent Blob Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={iridescentBlob}
          alt=""
          className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] object-contain opacity-40 blur-sm animate-gentle-float"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
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
              <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">Event</span> and <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">hackathon series</span> to empower <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">women</span> in <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">tech</span> and <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">entrepreneurship</span>.
            </p>
          </div>

          {/* Partner CTA */}
          <div className="pt-2">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider"
            >
              <a href="https://tally.so/r/obEMYM" target="_blank" rel="noopener noreferrer">
                Partner Up with Us
              </a>
            </Button>
          </div>

          {/* Scrolling Banner */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-foreground py-5 sm:py-6">
            <div className="flex animate-scroll-fast whitespace-nowrap">
              {/* Multiple repetitions for seamless infinite scroll */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 sm:gap-12 px-10 sm:px-12">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">BELONG.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">EMPOWER.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">FLOURISH.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">INSPIRE.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">ELEVATE.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">RISE.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">EMBRACE.</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-background uppercase">SUPPORT.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
