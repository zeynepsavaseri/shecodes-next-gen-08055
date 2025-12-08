import { Copy, Linkedin, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zsavaseri@ethz.ch");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappGroupLink = "https://chat.whatsapp.com/HVJlizkRiFVDonC0TCeWgi";

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact */}
          <div>
            <h4 className="font-mono font-bold text-sm mb-6 uppercase tracking-wider text-foreground">
              CONTACT
            </h4>
            <div className="flex items-center gap-3">
              <a 
                href="mailto:zsavaseri@ethz.ch" 
                className="font-mono text-base text-foreground hover:text-primary transition-colors"
              >
                zsavaseri@ethz.ch
              </a>
              <button 
                onClick={handleCopyEmail}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-mono font-bold text-sm mb-6 uppercase tracking-wider text-foreground">
              SOCIALS
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/109190205/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/hercode.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://discord.gg/sFrQnZ76" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-mono font-bold text-sm mb-6 uppercase tracking-wider text-foreground">
              COMMUNITY
            </h4>
            <a 
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-base text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1"
            >
              Join WhatsApp Group
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          © 2025 HERCODE. ZURICH.
        </div>
      </div>
    </footer>
  );
};