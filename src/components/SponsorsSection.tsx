import { Briefcase, Target, Globe, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent & Engagement",
      description: "Connect with skilled women through collaborative events and experience their talent in action.",
      detailedDescription: "Gain direct access to a pre-vetted pool of ambitious, highly motivated women in tech. Our events are more than just meet-and-greets; they are hands-on workshops and hackathons where you can witness talent in action, identify future leaders, and build a strong pipeline for your recruitment teams.",
    },
    {
      icon: Target,
      title: "Diversity & Inclusion",
      description: "Build a stronger, more inclusive team that reflects modern workplace values and fuels innovation.",
      detailedDescription: "Move your D&I goals from a metric to a movement. Partnering with {HerCode} sends a powerful, public message to your employees and the industry. You will actively help build a more inclusive tech ecosystem, fostering the diverse perspectives that are proven to fuel innovation and strengthen company culture.",
    },
    {
      icon: Globe,
      title: "Brand Impact",
      description: "Demonstrate your commitment to diversity and equality while positioning your company as a forward-thinking industry leader.",
      detailedDescription: "Position your company as a forward-thinking industry leader that actively invests in the future of tech. Your brand will be prominently featured to our dedicated community of members, mentors, and fellow partners, demonstrating a tangible commitment to equality and empowering the next generation of female tech leaders.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Backed by Industry Leaders
          </h2>
        </div>

        {/* Scrolling sponsors marquee */}
        <div className="relative overflow-hidden mb-20 py-4">
          <div className="flex animate-scroll-left">
            {/* First set of sponsors */}
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-32 mx-6 flex items-center justify-center bg-card rounded-lg shadow-card hover:shadow-pixel transition-all p-6"
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

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Become a Partner
          </h2>
          <p className="text-sm font-mono text-muted-foreground mb-6">Benefits for companies</p>
          <Button size="lg" className="shadow-glow font-mono font-bold uppercase text-sm tracking-wider">
            Partner Up with Us
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {companyBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-glow transition-all group hover:-translate-y-1 cursor-pointer"
              onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-pixel-sm">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-mono font-bold mb-2 text-foreground uppercase tracking-wide">{benefit.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      {expandedBenefit === index ? benefit.detailedDescription : benefit.description}
                    </p>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform ${expandedBenefit === index ? 'rotate-180' : ''}`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
