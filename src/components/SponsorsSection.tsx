import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, ExternalLink } from "lucide-react";
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

  const partners = [
    // Tech Partners
    { 
      name: "Lovable", 
      subtitle: "AI-POWERED DEVELOPMENT", 
      category: "TECH", 
      categoryColor: "197 71% 52%",
      logo: "/lovable-logo-white.png",
      link: "https://lovable.dev"
    },
    { 
      name: "Claude", 
      subtitle: "ANTHROPIC", 
      category: "TECH", 
      categoryColor: "197 71% 52%",
      logo: "/claude-logo.png",
      link: "https://anthropic.com"
    },
    { 
      name: "TF", 
      subtitle: "INNOVATION PARTNER", 
      category: "TECH", 
      categoryColor: "197 71% 52%",
      logo: "/tf-logo.png"
    },
    
    // Community Partners
    { 
      name: "ETH Diversity", 
      subtitle: "ETH ZURICH", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/eth-diversity-logo.png"
    },
    { 
      name: "Student Project House", 
      subtitle: "ETH ZURICH", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/eth-project-house-logo.png"
    },
    { 
      name: "Women In Robotics", 
      subtitle: "GLOBAL NETWORK", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/women-in-robotics-logo.png"
    },
    { 
      name: "Longevity Hacks", 
      subtitle: "HEALTH & LONGEVITY", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/longevity-hacks-logo.png"
    },
    
    // Food & Drinks Partners
    { 
      name: "MAD", 
      subtitle: "MAKE A DIFFERENCE", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/mad-logo.png"
    },
    { 
      name: "Cosmic Dealer", 
      subtitle: "HEALTHY SNACKS", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/cosmic-dealer-logo.png"
    },
    { 
      name: "Focus Water", 
      subtitle: "HYDRATION", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/focus-water-logo.png"
    },
    { 
      name: "Brownie Paw", 
      subtitle: "SWEET TREATS", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/brownie-paw-logo.png"
    },
  ];


  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="mb-24 sm:mb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-border/60" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-border/60" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-border/60" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-border/60" />
                
                {/* External Link Icon */}
                {partner.link && (
                  <a 
                    href={partner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}

                <CardContent className="p-6 sm:p-8 flex flex-col h-full min-h-[240px] sm:min-h-[280px]">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded border inline-block"
                      style={{
                        color: `hsl(${partner.categoryColor})`,
                        borderColor: `hsla(${partner.categoryColor} / 0.5)`,
                      }}
                    >
                      {partner.category}
                    </span>
                  </div>

                  {/* Logo (if available) */}
                  {partner.logo && (
                    <div className="mb-6 flex items-center justify-center flex-1">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-24 object-contain"
                      />
                    </div>
                  )}

                  {/* Partner Name & Subtitle */}
                  <div className="mt-auto">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold uppercase tracking-wide text-foreground mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {partner.subtitle}
                    </p>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, hsla(${partner.categoryColor} / 0.1), transparent 70%)`,
                  }}
                />
              </Card>
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
