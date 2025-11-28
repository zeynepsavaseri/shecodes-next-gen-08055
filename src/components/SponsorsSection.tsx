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

        {/* Partners Grid - Techy Compact Design */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5 sm:gap-2 max-w-6xl mx-auto auto-rows-fr">
            {partners.filter(p => p.logo && p.name).map((partner, index) => {
              // Asymmetric sizing pattern: big (3x3), medium (2x2), small (1x1)
              const sizePattern = [3, 1, 1, 2, 1, 1, 1, 3, 1, 2, 1, 1];
              const size = sizePattern[index % sizePattern.length];
              const isBig = size === 3;
              const isMedium = size === 2;
              
              return (
                <Card
                  key={index}
                  className={`group relative bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/60 transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                    isBig ? 'col-span-3 row-span-3' : isMedium ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
                  </div>
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/40" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/40" />
                  
                  {/* External Link */}
                  {partner.link && (
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-1.5 right-1.5 z-10 opacity-30 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-2.5 h-2.5 text-primary" />
                    </a>
                  )}

                  <CardContent className={`flex flex-col h-full ${isBig ? 'p-5' : isMedium ? 'p-3' : 'p-2'}`}>
                    {/* Category Badge */}
                    <div className={`${isBig ? 'mb-3' : isMedium ? 'mb-2' : 'mb-1'}`}>
                      <span 
                        className="text-[7px] font-mono font-bold uppercase tracking-wider px-1 py-0.5 rounded border inline-block"
                        style={{
                          color: `hsl(${partner.categoryColor})`,
                          borderColor: `hsla(${partner.categoryColor} / 0.5)`,
                          backgroundColor: `hsla(${partner.categoryColor} / 0.05)`,
                        }}
                      >
                        {partner.category}
                      </span>
                    </div>

                    {/* Logo - BIGGER */}
                    {partner.logo && (
                      <div className={`flex items-center justify-center flex-1 ${isBig ? 'mb-3' : isMedium ? 'mb-2' : 'mb-1'}`}>
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className={`w-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                            isBig ? 'max-h-40' : isMedium ? 'max-h-24' : 'max-h-14'
                          }`}
                        />
                      </div>
                    )}

                    {/* Partner Info */}
                    <div className="mt-auto">
                      <h3 className={`font-mono font-bold uppercase tracking-wide text-foreground leading-tight ${
                        isBig ? 'text-base mb-1' : isMedium ? 'text-xs mb-0.5' : 'text-[9px] mb-0.5'
                      }`}>
                        {partner.name}
                      </h3>
                      <p className={`font-mono text-muted-foreground uppercase tracking-wider leading-tight ${
                        isBig ? 'text-[9px]' : isMedium ? 'text-[8px]' : 'text-[7px]'
                      }`}>
                        {partner.subtitle}
                      </p>
                    </div>
                  </CardContent>

                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, hsla(${partner.categoryColor} / 0.15), transparent 60%)`,
                      boxShadow: `0 0 20px hsla(${partner.categoryColor} / 0.3)`,
                    }}
                  />
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
                      backgroundSize: '50px 50px'
                    }}
                  />
                </Card>
              );
            })}
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
