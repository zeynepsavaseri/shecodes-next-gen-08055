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
    <section className="py-20 px-4 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel leading-tight mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Stay in the Loop
          </h2>
          <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
            Join our community and never miss an event
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* WhatsApp Channel */}
          <div className="bg-card rounded-2xl shadow-card p-8 hover:shadow-pixel transition-all hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mx-auto shadow-glow">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-mono font-bold mb-4 text-center uppercase tracking-wider">WhatsApp Community</h3>
            <p className="text-sm font-mono text-muted-foreground text-center mb-6">
              Join our WhatsApp channel for instant updates, event reminders, and connect with fellow members.
            </p>
            <Button 
              size="lg" 
              className="w-full group shadow-glow font-mono font-bold uppercase text-sm tracking-wider"
              onClick={() => window.open(whatsappGroupLink, '_blank')}
            >
              Join WhatsApp
              <MessageCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Email Subscription */}
          <div className="bg-card rounded-2xl shadow-card p-8 hover:shadow-pixel transition-all hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-secondary mb-6 mx-auto shadow-glow">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-mono font-bold mb-4 text-center uppercase tracking-wider">Email Updates</h3>
            <p className="text-sm font-mono text-muted-foreground text-center mb-6">
              Subscribe to our mailing list to get notified about upcoming events and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-mono text-sm"
              />
              <Button 
                type="submit"
                size="lg" 
                className="w-full group shadow-glow font-mono font-bold uppercase text-sm tracking-wider"
              >
                Subscribe
                <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs font-mono text-muted-foreground">
            Questions or inquiries? I am happy to help <a href="mailto:zsavaseri@ethz.ch" className="text-primary font-mono font-bold hover:underline">zsavaseri@ethz.ch</a>
          </p>
        </div>
      </div>
    </section>
  );
};
