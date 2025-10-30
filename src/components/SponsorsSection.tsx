import { Briefcase, Award, Users, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SponsorsSection = () => {
  const sponsors = [
    /*{
      name: "EY",
      // Local PNG asset for reliability
      logo: "/EY Logo.png",
      isComingSoon: false,
    },*/
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
  ];

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent Discovery",
      description: "Access a pool of skilled women developers ready to join your team",
    },
    {
      icon: Award,
      title: "Diversity Goals",
      description: "Build a more diverse team aligned with modern workplace values",
    },
    {
      icon: Users,
      title: "Brand Building",
      description: "Showcase your commitment to diversity and inclusion in tech",
    },
    {
      icon: Network,
      title: "Direct Engagement",
      description: "Interact with potential hires in a collaborative environment",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
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
                  <span className="text-muted-foreground font-medium">Coming Soon</span>
                ) : (
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Become a Partner
          </h2>
          <p className="text-muted-foreground mb-6">Benefits for companies</p>
          <Button size="lg" className="shadow-glow">
            Partner Up with Us
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card hover:shadow-glow transition-all group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform pixel-border">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
