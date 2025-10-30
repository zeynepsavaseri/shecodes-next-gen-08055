import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Heart } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Step Into the HerCode Community
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-8 max-w-2xl mx-auto">
          {/* Community Member */}
          <div className="bg-card rounded-2xl shadow-card p-8 hover:shadow-pixel transition-all hover:-translate-y-1 shadow-pixel-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mx-auto animate-float shine-dot shadow-pixel-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Community Member</h3>
            <p className="text-muted-foreground text-center mb-6">
              Become part of our empowering community. Stay connected with inspiring women, find co-founders, and access exclusive events.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Join exclusive member events</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Find co-founders & build together</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Stay in the loop with our network and access whatsapp account</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Get mentorship for your startup & VC connections</span>
              </li>
            </ul>
            <Button size="lg" className="w-full group shadow-glow">
              Become a Member
              <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Questions or inquiries? Reach out to us at <a href="mailto:zsavaseri@ethz.ch" className="text-primary font-medium hover:underline">zsavaseri@ethz.ch</a>
          </p>
        </div>
      </div>
    </section>
  );
};
