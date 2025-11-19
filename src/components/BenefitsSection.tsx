import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Target, Globe } from "lucide-react";

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
    <section className="py-16 sm:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Benefits for Companies
          </h2>
          <p className="text-sm text-muted-foreground">
            Partner with us to strengthen your team and brand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-delay">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="group bg-card hover-lift">
              <CardContent className="p-6 relative overflow-hidden">
                {/* Subtle glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-glow mx-auto">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
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
