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
    <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Benefits for Companies
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Partner with us to strengthen your team and brand
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-delay px-2">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="group bg-card hover-lift">
              <CardContent className="p-4 sm:p-6 relative overflow-hidden">
                {/* Subtle glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative flex flex-col items-center text-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-glow mx-auto">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
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
