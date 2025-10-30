import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Heart } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-6 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Step Into the HerCode Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Join a thriving community of ambitious women in tech
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-3xl mx-auto">
          {/* Community Member */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-elevated p-10 hover:shadow-glow-intense transition-all duration-500 hover:-translate-y-2 border border-primary/10">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-8 mx-auto animate-float shadow-glow">
              <Heart className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-mono font-bold mb-6 text-center uppercase tracking-wide">Community Member</h3>
            <p className="text-base text-muted-foreground text-center mb-8 leading-relaxed">
              Become part of our empowering community. Stay connected with inspiring women, find co-founders, and access exclusive events.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-foreground/90 font-medium leading-relaxed">Join exclusive member events</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-foreground/90 font-medium leading-relaxed">Find co-founders & build together</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-foreground/90 font-medium leading-relaxed">Stay in the loop with our network and access whatsapp account</span>
              </li>
              <li className="flex items-start group">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-foreground/90 font-medium leading-relaxed">Get mentorship for your startup & VC connections</span>
              </li>
            </ul>
            <Button size="lg" className="w-full group shadow-glow hover:shadow-glow-intense font-mono font-bold uppercase text-sm tracking-wider transition-all duration-300 py-6">
              Become a Member
              <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Questions or inquiries? Reach out to us at <a href="mailto:zsavaseri@ethz.ch" className="text-primary font-semibold hover:underline transition-all">zsavaseri@ethz.ch</a>
          </p>
        </div>
      </div>
    </section>
  );
};
