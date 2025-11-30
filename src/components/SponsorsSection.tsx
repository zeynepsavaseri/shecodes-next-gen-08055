import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, ExternalLink, Diamond } from "lucide-react";
import { useState } from "react";
import { PartnerInquiryTerminal } from "@/components/PartnerInquiryTerminal";

export const SponsorsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isPartnerTerminalOpen, setIsPartnerTerminalOpen] = useState(false);

  const benefits = [
    {
      icon: Users,
      title: "TALENT & ENGAGEMENT",
      front: "Access top female talent from ETH Zurich and Europe's leading universities.",
      expanded: "Connect directly with emerging tech leaders."
    },
    {
      icon: Target,
      title: "CHALLENGE PARTNERSHIPS",
      front: "Share a real challenge and collaborate with talented women on solutions.",
      expanded: "Contribute a case study and gain fresh perspectives."
    },
    {
      icon: Award,
      title: "BRAND IMPACT",
      front: "Show your commitment to inclusive innovation.",
      expanded: "Join a network of forward-thinking partners."
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
      link: "https://lovable.dev",
      biggerLogo: true
    },
    { 
      name: "Claude", 
      subtitle: "ANTHROPIC", 
      category: "TECH", 
      categoryColor: "197 71% 52%",
      logo: "/claude-logo.png",
      link: "https://anthropic.com",
      biggerLogo: false
    },
    { 
      name: "TF", 
      subtitle: "INNOVATION PARTNER", 
      category: "TECH", 
      categoryColor: "197 71% 52%",
      logo: "/tf-logo.png",
      link: "https://techface.ch/de/?gad_source=1&gad_campaignid=16873970615&gbraid=0AAAAAB3xNuJ4bFerdMERx2LRm0iSW9DN2&gclid=CjwKCAiAraXJBhBJEiwAjz7MZZ8ZaL3qesfWDzlIgSBW_-Y73fXyQex03m4QrgurNeTR6jzaTqQcMhoCcLYQAvD_BwE",
      biggerLogo: false
    },
    
    // Community Partners
    { 
      name: "ETH Diversity", 
      subtitle: "ETH ZURICH", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/eth-diversity-logo.png",
      biggerLogo: false
    },
    { 
      name: "Student Project House", 
      subtitle: "ETH ZURICH", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/eth-project-house-logo.png",
      link: "https://sph.ethz.ch/",
      biggerLogo: true
    },
    { 
      name: "Women In Robotics", 
      subtitle: "GLOBAL NETWORK", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/women-in-robotics-logo.png",
      biggerLogo: false
    },
    { 
      name: "Longevity Hacks", 
      subtitle: "HEALTH & LONGEVITY", 
      category: "COMMUNITY", 
      categoryColor: "280 65% 60%",
      logo: "/longevity-hacks-logo.png",
      biggerLogo: true
    },
    
    // Food & Drinks Partners
    { 
      name: "MAD", 
      subtitle: "MAKE A DIFFERENCE", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/mad-logo.png",
      link: "https://www.mad-drinks.com/",
      biggerLogo: false
    },
    { 
      name: "Cosmic Dealer", 
      subtitle: "HEALTHY SNACKS", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/cosmic-dealer-logo.png",
      biggerLogo: false
    },
    { 
      name: "Focus Water", 
      subtitle: "HYDRATION", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/focus-water-logo.png",
      biggerLogo: false
    },
    { 
      name: "Brownie Paw", 
      subtitle: "SWEET TREATS", 
      category: "FUEL", 
      categoryColor: "38 92% 50%",
      logo: "/brownie-paw-logo.png",
      biggerLogo: false
    },
  ];


  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-background to-muted/30 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 px-2">
          <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground">
              THE
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight bg-gradient-primary bg-clip-text text-transparent">
              ECOSYSTEM
            </h2>
          </div>
        </div>

        {/* Partners Grid - Horizontal scroll on mobile, grid on desktop */}
        <div className="mb-24 sm:mb-32">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden -mx-3 sm:mx-0">
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-3">
              {partners.map((partner, index) => {
                return (
                  <Card
                    key={index}
                    className="flex-shrink-0 w-[280px] snap-center group relative bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/60 transition-all duration-300 overflow-hidden hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
                    </div>
                    
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/40" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/40" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary/40" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/40" />
                    
                    {/* External Link */}
                    {partner.link && (
                      <a 
                        href={partner.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 z-10 opacity-30 hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="w-3 h-3 text-primary" />
                      </a>
                    )}

                    <CardContent className="flex flex-col h-full p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span 
                          className="text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border inline-block"
                          style={{
                            color: `hsl(${partner.categoryColor})`,
                            borderColor: `hsla(${partner.categoryColor} / 0.5)`,
                            backgroundColor: `hsla(${partner.categoryColor} / 0.05)`,
                          }}
                        >
                          {partner.category}
                        </span>
                      </div>

                      {/* Logo */}
                      {partner.logo && (
                        <div className="flex items-center justify-center flex-1 mb-4">
                          <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className={`max-w-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                              partner.biggerLogo ? 'max-h-40' : 'max-h-24'
                            }`}
                          />
                        </div>
                      )}

                      {/* Partner Info */}
                      <div className="mt-auto">
                        <h3 className="font-mono font-bold uppercase tracking-wide text-foreground text-sm mb-1">
                          {partner.name}
                        </h3>
                        <p className="font-mono text-muted-foreground uppercase tracking-wider text-[9px]">
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
            <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-4 italic">
              Swipe to see more →
            </p>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {partners.map((partner, index) => {
              const isBig = index % 3 === 0; // Every third card is bigger
              
              return (
                <Card
                  key={index}
                  className={`group relative bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/60 transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                    isBig ? 'col-span-2 row-span-2' : ''
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
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-primary/40" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-primary/40" />
                  
                  {/* External Link */}
                  {partner.link && (
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 z-10 opacity-30 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </a>
                  )}

                  <CardContent className={`flex flex-col h-full ${isBig ? 'p-6' : 'p-4'}`}>
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span 
                        className="text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border inline-block"
                        style={{
                          color: `hsl(${partner.categoryColor})`,
                          borderColor: `hsla(${partner.categoryColor} / 0.5)`,
                          backgroundColor: `hsla(${partner.categoryColor} / 0.05)`,
                        }}
                      >
                        {partner.category}
                      </span>
                    </div>

                    {/* Logo */}
                    {partner.logo && (
                      <div className={`flex items-center justify-center flex-1 ${isBig ? 'mb-4' : 'mb-2'}`}>
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className={`max-w-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                            isBig ? (partner.biggerLogo ? 'max-h-48' : 'max-h-32') : (partner.biggerLogo ? 'max-h-36' : 'max-h-20')
                          }`}
                        />
                      </div>
                    )}

                    {/* Partner Info */}
                    <div className="mt-auto">
                      <h3 className={`font-mono font-bold uppercase tracking-wide text-foreground ${
                        isBig ? 'text-base mb-1' : 'text-xs mb-1'
                      }`}>
                        {partner.name}
                      </h3>
                      <p className={`font-mono text-muted-foreground uppercase tracking-wider ${
                        isBig ? 'text-[9px]' : 'text-[8px]'
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
        <div id="why-partner" className="relative overflow-hidden">
          {/* Glowing orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

          <div className="relative">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground">
                  WHY
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight bg-gradient-secondary bg-clip-text text-transparent">
                  PARTNER
                </h2>
              </div>
              <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
                Join forward-thinking companies investing in the future of tech diversity
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsPartnerTerminalOpen(true)}
                className="shadow-glow font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] px-5 sm:px-8"
              >
                Partner Up with Us
              </Button>
            </div>

            <div id="partner-benefits">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden -mx-3 sm:mx-0">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-3">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className={`flex-shrink-0 w-[280px] snap-center group relative bg-card/80 backdrop-blur-sm cursor-pointer border border-primary/20 transition-all duration-500 ease-out ${
                      expandedCard === index 
                        ? 'scale-105 shadow-glow border-primary/60 bg-card' 
                        : 'hover:border-primary/40 hover:-translate-y-1'
                    }`}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-primary transition-all duration-500 ${
                        expandedCard === index ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                      }`} />

                      <div className="relative flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className={`relative transition-all duration-500 ${
                          expandedCard === index ? 'mb-6 scale-110' : 'mb-4'
                        }`}>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center transition-all duration-500 shadow-glow ${
                            expandedCard === index ? 'rotate-12' : 'group-hover:scale-110'
                          }`}>
                            <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`text-sm font-mono font-bold text-foreground uppercase tracking-wider transition-all duration-300 ${
                          expandedCard === index ? 'mb-6 text-primary' : 'mb-2'
                        }`}>
                          {benefit.title}
                        </h3>
                        
                        {/* Expanded content with creative reveal */}
                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                          expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className={`transition-all duration-500 delay-100 ${
                            expandedCard === index ? 'translate-y-0' : 'translate-y-4'
                          }`}>
                            <p className="text-sm font-mono text-foreground leading-relaxed">
                              {benefit.front}
                              <br />
                              {benefit.expanded}
                            </p>
                          </div>
                        </div>

                        {/* Click indicator */}
                        <div className={`absolute bottom-4 right-4 text-xs font-mono transition-all duration-300 ${
                          expandedCard === index ? 'text-primary rotate-180' : 'text-primary/40 group-hover:text-primary/60'
                        }`}>
                          {expandedCard === index ? '✕' : '+'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-4 italic">
                Swipe to see more →
              </p>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className={`group relative bg-card/80 backdrop-blur-sm cursor-pointer border border-primary/20 transition-all duration-500 ease-out ${
                    expandedCard === index 
                      ? 'scale-105 shadow-glow border-primary/60 bg-card' 
                      : 'hover:border-primary/40 hover:-translate-y-1'
                  }`}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-primary transition-all duration-500 ${
                      expandedCard === index ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'
                    }`} />

                    <div className="relative flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className={`relative transition-all duration-500 ${
                        expandedCard === index ? 'mb-6 scale-110' : 'mb-4'
                      }`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center transition-all duration-500 shadow-glow ${
                          expandedCard === index ? 'rotate-12' : 'group-hover:scale-110'
                        }`}>
                          <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-base font-mono font-bold text-foreground uppercase tracking-wider transition-all duration-300 ${
                        expandedCard === index ? 'mb-6 text-primary' : 'mb-2'
                      }`}>
                        {benefit.title}
                      </h3>
                      
                      {/* Expanded content with creative reveal */}
                      <div className={`overflow-hidden transition-all duration-500 ease-out ${
                        expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className={`transition-all duration-500 delay-100 ${
                          expandedCard === index ? 'translate-y-0' : 'translate-y-4'
                        }`}>
                          <p className="text-sm font-mono text-foreground leading-relaxed">
                            {benefit.front}
                            <br />
                            {benefit.expanded}
                          </p>
                        </div>
                      </div>

                      {/* Click indicator */}
                      <div className={`absolute bottom-4 right-4 text-xs font-mono transition-all duration-300 ${
                        expandedCard === index ? 'text-primary rotate-180' : 'text-primary/40 group-hover:text-primary/60'
                      }`}>
                        {expandedCard === index ? '✕' : '+'}
                      </div>
                    </div>
                     </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPartnerTerminalOpen && (
        <PartnerInquiryTerminal onClose={() => setIsPartnerTerminalOpen(false)} />
      )}
    </section>
  );
};
