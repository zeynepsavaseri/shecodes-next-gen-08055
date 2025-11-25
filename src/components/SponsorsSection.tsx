import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import { useState } from "react";

export const SponsorsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "TALENT & ENGAGEMENT",
      front: "Access top female tech talent and a pool of CVs from ETH Zurich and Europe's leading universities.",
      expanded: "See CVs in action and connect with future tech leaders."
    },
    {
      icon: Target,
      title: "CHALLENGE PARTNERSHIPS",
      front: "Bring your company's real challenge and let brilliant women solve it.",
      expanded: "Contribute a case study, gain fresh perspectives, and turn inclusion into action."
    },
    {
      icon: Award,
      title: "BRAND IMPACT",
      front: "Position your company as a catalyst for innovation and equality.",
      expanded: "Boost your female ratio and stand beside Europe's most forward-thinking partners."
    }
  ];

  const sponsors = [
    {
      name: "Lovable",
      logo: "/lovable-logo-white.png",
      isComingSoon: false,
    },
    {
      name: "Claude",
      logo: "/claude-logo.png",
      isComingSoon: false,
    },
    {
      name: "Women In Robotics",
      logo: "/women-in-robotics-logo.png",
      isComingSoon: false,
    },
    {
      name: "TF",
      logo: "/tf-logo.png",
      isComingSoon: false,
    },
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
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 mx-4 sm:mx-6 flex items-center justify-center bg-card rounded-lg shadow-card hover-scale-sm p-2"
              >
                {sponsor.isComingSoon ? (
                  <span className="text-muted-foreground font-mono font-bold text-xs uppercase tracking-wider">Coming Soon</span>
                ) : (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner with HerCode Section */}
        <div className="relative overflow-hidden">
          {/* Glowing orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-secondary bg-clip-text text-transparent uppercase tracking-wider">
                Why Partner with HerCode
              </h2>
              <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
                Join forward-thinking companies investing in the future of tech diversity
              </p>
              <Link to="/partner">
                <Button 
                  size="lg" 
                  className="shadow-glow font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] px-5 sm:px-8"
                >
                  Partner Up with Us
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="group relative bg-card/80 backdrop-blur-sm cursor-pointer hover-lift border border-primary/20"
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                    <div className="relative flex flex-col items-center text-center gap-6">
                      {/* Icon with smooth hover effect */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-glow">
                          <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-base font-mono font-bold mb-4 text-foreground uppercase tracking-wider">
                          {benefit.title}
                        </h3>
                        <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
                          {benefit.front}
                        </p>
                        
                        {/* Expanded content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-out ${expandedCard === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                          <div className="pt-4 border-t border-primary/20">
                            <p className="text-sm font-mono text-foreground/90 leading-relaxed">
                              {benefit.expanded}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Click indicator */}
                      <div className={`absolute bottom-4 right-4 text-xs font-mono text-primary/60 transition-all duration-300 ${expandedCard === index ? 'rotate-180' : 'group-hover:text-primary'}`}>
                        {expandedCard === index ? '▲' : '▼'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
