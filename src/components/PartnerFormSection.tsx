import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Download, CheckCircle2, X } from "lucide-react";

const partnershipTypes = [
  "Event Sponsorship",
  "Mentorship Program",
  "Hiring Partnership",
  "Tech/Product Support",
  "Community Partnership",
  "Other",
];

const partnerFormSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  websiteLinkedIn: z.string().trim().max(500).optional(),
  partnershipTypes: z.array(z.string()).min(1, "Select at least one partnership type"),
  budgetRange: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
  notes: z.string().trim().max(2000).optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to continue"),
  referrer: z.string().optional(),
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

export const PartnerFormSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<Partial<PartnerFormData>>(() => {
    // Auto-fill context from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    const eventTitle = urlParams.get('eventTitle');
    
    const initialTypes: string[] = [];
    if (source === 'event') {
      initialTypes.push('Event Sponsorship');
    }
    
    return {
      company: "",
      contactName: "",
      email: "",
      websiteLinkedIn: "",
      partnershipTypes: initialTypes,
      budgetRange: "",
      timeline: "",
      notes: eventTitle ? `Interested in partnering for: ${eventTitle}` : "",
      consent: false,
      referrer: typeof window !== 'undefined' ? document.referrer || window.location.search : "",
    };
  });

  // Initialize selectedTypes from formData
  useState(() => {
    if (formData.partnershipTypes && formData.partnershipTypes.length > 0) {
      setSelectedTypes(formData.partnershipTypes);
    }
  });

  const togglePartnershipType = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    setFormData({ ...formData, partnershipTypes: newTypes });
  };

  const handleInputChange = (
    field: keyof PartnerFormData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = partnerFormSchema.parse(formData);
      
      // TODO: Send to backend/database
      console.log("Partner form submission:", validatedData);
      
      setIsSubmitted(true);
      toast({
        title: "Application submitted!",
        description: "We'll reach out within 2–3 days.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Please fix the errors",
          description: "Some fields need your attention.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDownloadDeck = () => {
    // TODO: Replace with actual PDF download
    toast({
      title: "Coming soon",
      description: "Partnership deck will be available shortly.",
    });
  };

  const handleBookCall = () => {
    // TODO: Replace with actual Calendly link
    toast({
      title: "Coming soon",
      description: "Calendly integration will be available shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="partner-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-3 sm:px-4 max-w-2xl">
          <div className="bg-card rounded-2xl shadow-card p-8 sm:p-10 md:p-12 text-center animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary mb-6 mx-auto shadow-glow">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-pixel mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-wide">
              Thank You!
            </h3>
            <p className="text-sm sm:text-base font-mono text-muted-foreground mb-8">
              We'll reach out within 2–3 days to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleBookCall}
                size="lg"
                className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] shadow-glow"
              >
                Book a 15-min Intro Call
              </Button>
              <Button
                onClick={handleDownloadDeck}
                size="lg"
                variant="outline"
                className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Partnership Deck
              </Button>
              <Button
                onClick={() => setIsSubmitted(false)}
                size="lg"
                variant="ghost"
                className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px]"
              >
                Submit Another
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="partner-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Partner Inquiry
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
            Let's build something impactful together
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-5 sm:p-6 md:p-8 lg:p-10 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Company <span className="text-primary">*</span>
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className={`font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50 ${errors.company ? 'border-destructive' : ''}`}
                placeholder="Your Company Name"
              />
              {errors.company && (
                <p className="text-xs text-destructive font-mono">{errors.company}</p>
              )}
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <Label htmlFor="contactName" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Contact Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                className={`font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50 ${errors.contactName ? 'border-destructive' : ''}`}
                placeholder="Your Full Name"
              />
              {errors.contactName && (
                <p className="text-xs text-destructive font-mono">{errors.contactName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50 ${errors.email ? 'border-destructive' : ''}`}
                placeholder="contact@company.com"
              />
              {errors.email && (
                <p className="text-xs text-destructive font-mono">{errors.email}</p>
              )}
            </div>

            {/* Website/LinkedIn */}
            <div className="space-y-2">
              <Label htmlFor="websiteLinkedIn" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Website / LinkedIn
              </Label>
              <Input
                id="websiteLinkedIn"
                value={formData.websiteLinkedIn}
                onChange={(e) => handleInputChange("websiteLinkedIn", e.target.value)}
                className="font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50"
                placeholder="https://..."
              />
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <Label htmlFor="budgetRange" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Budget Range <span className="text-primary">*</span>
              </Label>
              <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange("budgetRange", value)}>
                <SelectTrigger className={`font-mono text-xs sm:text-sm min-h-[44px] ${errors.budgetRange ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="<5k">Less than CHF 5,000</SelectItem>
                  <SelectItem value="5k-10k">CHF 5,000 - 10,000</SelectItem>
                  <SelectItem value="10k-25k">CHF 10,000 - 25,000</SelectItem>
                  <SelectItem value="25k-50k">CHF 25,000 - 50,000</SelectItem>
                  <SelectItem value="50k+">CHF 50,000+</SelectItem>
                </SelectContent>
              </Select>
              {errors.budgetRange && (
                <p className="text-xs text-destructive font-mono">{errors.budgetRange}</p>
              )}
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <Label htmlFor="timeline" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Timeline <span className="text-primary">*</span>
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger className={`font-mono text-xs sm:text-sm min-h-[44px] ${errors.timeline ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                  <SelectItem value="1-3months">1-3 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6months+">6+ months</SelectItem>
                  <SelectItem value="exploring">Just exploring</SelectItem>
                </SelectContent>
              </Select>
              {errors.timeline && (
                <p className="text-xs text-destructive font-mono">{errors.timeline}</p>
              )}
            </div>

            {/* Partnership Types - Full Width */}
            <div className="md:col-span-2 space-y-3">
              <Label className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Partnership Type <span className="text-primary">*</span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {partnershipTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => togglePartnershipType(type)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-200 border ${
                      selectedTypes.includes(type)
                        ? 'bg-primary text-primary-foreground border-primary shadow-glow'
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    {selectedTypes.includes(type) && (
                      <X className="inline-block w-3 h-3 mr-1" />
                    )}
                    {type}
                  </button>
                ))}
              </div>
              {errors.partnershipTypes && (
                <p className="text-xs text-destructive font-mono">{errors.partnershipTypes}</p>
              )}
            </div>

            {/* Notes - Full Width */}
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="notes" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="font-mono text-xs sm:text-sm min-h-[120px] focus-visible:ring-primary/50"
                placeholder="Tell us more about your partnership vision..."
              />
              <p className="text-xs text-muted-foreground font-mono">
                {formData.notes?.length || 0} / 2000 characters
              </p>
            </div>

            {/* Consent - Full Width */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                  className={`mt-1 ${errors.consent ? 'border-destructive' : ''}`}
                />
                <Label
                  htmlFor="consent"
                  className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I agree to be contacted by HerCode regarding partnership opportunities and understand that my information will be handled according to privacy standards. <span className="text-primary">*</span>
                </Label>
              </div>
              {errors.consent && (
                <p className="text-xs text-destructive font-mono">{errors.consent}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              type="submit"
              size="lg"
              className="min-w-[200px] font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] shadow-glow hover:shadow-[0_0_30px_hsla(280,65%,60%,0.6)] transition-all duration-300"
            >
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
