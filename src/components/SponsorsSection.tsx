import { Briefcase, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent & Engagement",
      description: "Connect with skilled women through collaborative events and experience their talent in action.",
    },
    {
      icon: Target,
      title: "Diversity & Inclusion",
      description: "Build a stronger, more inclusive team that reflects modern workplace values and fuels innovation.",
    },
    {
      icon: Globe,
      title: "Brand Impact",
      description: "Demonstrate your commitment to diversity and equality while positioning your company as a forward-thinking industry leader.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Backed by Industry Leaders
          </h2>
        </div>

        {/* Scrolling sponsors marquee */}
        <div className="relative overflow-hidden mb-24 py-8">
          <div className="flex animate-scroll-left">
            {/* First set of sponsors */}
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-36 mx-6 flex items-center justify-center bg-card/80 backdrop-blur-sm rounded-2xl shadow-elevated hover:shadow-glow-intense transition-all duration-500 p-8 border border-primary/10"
              >
                {sponsor.isComingSoon ? (
                  <span className="text-muted-foreground font-display font-bold text-sm uppercase tracking-wider">Coming Soon</span>
                ) : (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Become a Partner
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-medium">Benefits for companies</p>
          <Button size="lg" className="shadow-glow hover:shadow-glow-intense font-mono font-bold uppercase text-sm tracking-wider px-8 py-6 transition-all duration-300 hover:scale-105">
            Partner Up with Us
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-glow-intense transition-all duration-500 group hover:-translate-y-2 border border-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-glow border border-primary/20">
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-mono font-bold mb-3 text-foreground uppercase tracking-wide">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
