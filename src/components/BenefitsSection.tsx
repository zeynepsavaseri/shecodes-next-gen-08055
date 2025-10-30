import { Briefcase, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BenefitsSection = () => {
  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent & Engagement",
      description: "Connect with skilled women through collaborative events and experience their talent in action."
    },
    {
      icon: Target,
      title: "Diversity & Inclusion",
      description: "Build a stronger, more inclusive team that reflects modern workplace values and fuels innovation."
    },
    {
      icon: Globe,
      title: "Brand Impact",
      description: "Demonstrate your commitment to diversity and equality while positioning your company as a forward-thinking industry leader."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel mb-6 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Benefits for Companies
          </h2>
          <p className="text-base text-muted-foreground font-medium">
            Partner with us to strengthen your team and brand
          </p>
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
