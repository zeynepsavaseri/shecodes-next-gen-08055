import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to backend/mailing list service
      toast({
        title: "Subscribed!",
        description: "You'll be notified about upcoming events.",
      });
      setEmail("");
    }
  };

  const whatsappGroupLink = "https://chat.whatsapp.com/HVJlizkRiFVDonC0TCeWgi";

  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel leading-tight mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Stay in the Loop
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
            Join our community and never miss an event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* WhatsApp Channel */}
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-card p-5 sm:p-6 md:p-8 hover:shadow-pixel transition-all hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-primary mb-4 sm:mb-5 md:mb-6 mx-auto shadow-glow">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-mono font-bold mb-3 sm:mb-4 text-center uppercase tracking-wider">WhatsApp Community</h3>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground text-center mb-4 sm:mb-5 md:mb-6">
              Join our WhatsApp channel for instant updates, event reminders, and connect with fellow members.
            </p>
            <Button 
              size="lg" 
              className="w-full group shadow-glow font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px]"
              onClick={() => window.open(whatsappGroupLink, '_blank')}
            >
              Join WhatsApp
              <MessageCircle className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Email Subscription */}
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-card p-5 sm:p-6 md:p-8 hover:shadow-pixel transition-all hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-secondary mb-4 sm:mb-5 md:mb-6 mx-auto shadow-glow">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-mono font-bold mb-3 sm:mb-4 text-center uppercase tracking-wider">Email Updates</h3>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground text-center mb-4 sm:mb-5 md:mb-6">
              Subscribe to our mailing list to get notified about upcoming events and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-mono text-xs sm:text-sm min-h-[44px]"
              />
              <Button 
                type="submit"
                size="lg" 
                className="w-full group shadow-glow font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px]"
              >
                Subscribe
                <Mail className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center px-2">
          <p className="text-[10px] sm:text-xs font-mono text-muted-foreground">
            Questions or inquiries? I am happy to help <a href="mailto:zsavaseri@ethz.ch" className="text-primary font-mono font-bold hover:underline break-all">zsavaseri@ethz.ch</a>
          </p>
        </div>
      </div>
    </section>
  );
};
