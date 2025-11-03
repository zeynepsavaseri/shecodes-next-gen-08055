import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Lovable",
      logo: "/lovable-logo.png",
      isComingSoon: false,
    },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
  ];


  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Backed by Industry Leaders
          </h2>
        </div>

        {/* Scrolling sponsors marquee */}
        <div className="relative overflow-hidden mb-12 sm:mb-16 md:mb-20 py-4">
          <div className="flex animate-scroll-left">
            {/* First set of sponsors */}
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 mx-4 sm:mx-6 flex items-center justify-center bg-card rounded-lg shadow-card hover:shadow-pixel transition-all p-4 sm:p-6"
              >
                {sponsor.isComingSoon ? (
                  <span className="text-muted-foreground font-mono font-bold text-xs uppercase tracking-wider">Coming Soon</span>
                ) : (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-2">
          <Link to="/partner">
            <Button 
              size="lg" 
              className="shadow-glow font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] px-5 sm:px-8"
            >
              Partner Up with Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
