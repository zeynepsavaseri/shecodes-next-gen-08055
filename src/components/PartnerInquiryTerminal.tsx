import { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PartnerInquiryTerminalProps {
  onClose: () => void;
}

export const PartnerInquiryTerminal = ({ onClose }: PartnerInquiryTerminalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !organization.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-partner-inquiry", {
        body: { name, email, organization, message },
      });

      if (error) throw error;

      toast.success("Inquiry sent successfully! We'll be in touch soon.");
      onClose();
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-background/95 border-2 border-primary rounded-lg shadow-glow overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-primary/10 border-b border-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <span className="ml-4 text-sm text-foreground font-mono">partnership_inquiry.sh</span>
          </div>
          <button
            onClick={onClose}
            className="text-foreground hover:text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 font-mono text-sm max-h-[70vh] overflow-y-auto">
          <div className="text-primary mb-4">
            <span className="text-accent">$</span> ./init_partnership.sh
          </div>
          <div className="text-muted-foreground mb-6">
            &gt; Initializing partnership inquiry protocol...<br />
            &gt; Ready to receive data transmission
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-primary block mb-2">
                <span className="text-accent">--name</span> [REQUIRED]
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background/50 border border-primary/30 rounded px-3 py-2 text-foreground font-mono focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-primary block mb-2">
                <span className="text-accent">--email</span> [REQUIRED]
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background/50 border border-primary/30 rounded px-3 py-2 text-foreground font-mono focus:outline-none focus:border-primary transition-colors"
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-primary block mb-2">
                <span className="text-accent">--organization</span> [REQUIRED]
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full bg-background/50 border border-primary/30 rounded px-3 py-2 text-foreground font-mono focus:outline-none focus:border-primary transition-colors"
                placeholder="Your organization/company"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-primary block mb-2">
                <span className="text-accent">--message</span> [REQUIRED]
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-background/50 border border-primary/30 rounded px-3 py-2 text-foreground font-mono focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-y"
                placeholder="Tell us about your partnership idea..."
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded font-mono hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "> Transmitting..." : "> Execute [ENTER]"}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 border border-primary/30 text-foreground rounded font-mono hover:bg-primary/10 transition-colors disabled:opacity-50"
              >
                [ESC] Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
