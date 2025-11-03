import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, ArrowLeft, Calendar, Home } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";

const partnershipInterests = [
  "Event Sponsorship",
  "Mentors/Speakers",
  "Hiring/Recruiting",
  "Tech/Product Support",
  "Community Partnership",
  "Other",
];

const partnerFormSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Please add a valid email so we can reply.").max(255),
  websiteLinkedIn: z.string().trim().max(500).optional(),
  eventContext: z.string().min(1, "Please select an option"),
  eventOther: z.string().trim().max(200).optional(),
  partnershipInterests: z.array(z.string()).min(1, "Select at least one partnership interest"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  consent: z.boolean().refine(val => val === true, "You must agree to continue"),
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

export default function Partner() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<Partial<PartnerFormData>>({
    company: "",
    contactName: "",
    email: "",
    websiteLinkedIn: "",
    eventContext: "",
    eventOther: "",
    partnershipInterests: [],
    message: "",
    consent: false,
  });

  const toggleInterest = (interest: string) => {
    const newInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter(i => i !== interest)
      : [...selectedInterests, interest];
    setSelectedInterests(newInterests);
    setFormData({ ...formData, partnershipInterests: newInterests });
  };

  const handleInputChange = (
    field: keyof PartnerFormData,
    value: string | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
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
        title: "Inquiry sent!",
        description: "We'll be in touch within 2–3 days.",
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

  if (isSubmitted) {
    return (
      <main className="min-h-screen relative flex items-center justify-center px-3 sm:px-4">
        <ParticleBackground />
        <div className="w-full max-w-xl relative z-10">
          <div className="bg-card rounded-2xl shadow-card p-8 sm:p-10 md:p-12 text-center animate-fade-in">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary mb-6 mx-auto shadow-glow">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-pixel mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase tracking-wide">
              Thanks!
            </h1>
            <p className="text-sm sm:text-base font-mono text-muted-foreground mb-8">
              We'll be in touch within 2–3 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] shadow-glow"
              >
                <Home className="mr-2 w-4 h-4" />
                Return Home
              </Button>
              <Button
                onClick={() => navigate("/#events")}
                size="lg"
                variant="outline"
                className="font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px]"
              >
                <Calendar className="mr-2 w-4 h-4" />
                View Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative py-12 sm:py-16 px-3 sm:px-4">
      <ParticleBackground />
      
      {/* Back Button */}
      <div className="container mx-auto max-w-2xl mb-6 relative z-10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Form Container */}
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Partner with HerCode
          </h1>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground">
            Let's build something impactful together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-6 sm:p-8 md:p-10 animate-fade-in">
          <div className="space-y-6">
            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Company name <span className="text-primary">*</span>
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className={`font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50 ${errors.company ? 'border-destructive' : ''}`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="text-xs text-destructive font-mono">{errors.company}</p>
              )}
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <Label htmlFor="contactName" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Contact name <span className="text-primary">*</span>
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

            {/* Event Context */}
            <div className="space-y-3">
              <Label className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Are you reaching out about a specific event? <span className="text-primary">*</span>
              </Label>
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground -mt-1">
                This helps us route you to the right person.
              </p>
              <RadioGroup 
                value={formData.eventContext} 
                onValueChange={(value) => handleInputChange("eventContext", value)}
                className={`space-y-2 ${errors.eventContext ? 'border border-destructive rounded-lg p-3' : ''}`}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ey-hackathon" id="ey-hackathon" />
                  <Label htmlFor="ey-hackathon" className="font-mono text-xs cursor-pointer">
                    EY x HerCode Hackathon (2026)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="longevity-hacks" id="longevity-hacks" />
                  <Label htmlFor="longevity-hacks" className="font-mono text-xs cursor-pointer">
                    Longevity Hacks (Zürich)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general" className="font-mono text-xs cursor-pointer">
                    General partnership
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-mono text-xs cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
              {formData.eventContext === "other" && (
                <Input
                  value={formData.eventOther}
                  onChange={(e) => handleInputChange("eventOther", e.target.value)}
                  className="font-mono text-xs sm:text-sm min-h-[44px] focus-visible:ring-primary/50 mt-2"
                  placeholder="Please specify..."
                />
              )}
              {errors.eventContext && (
                <p className="text-xs text-destructive font-mono">{errors.eventContext}</p>
              )}
            </div>

            {/* Partnership Interests */}
            <div className="space-y-3">
              <Label className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Partnership interest <span className="text-primary">*</span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {partnershipInterests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-200 border ${
                      selectedInterests.includes(interest)
                        ? 'bg-primary text-primary-foreground border-primary shadow-glow'
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              {errors.partnershipInterests && (
                <p className="text-xs text-destructive font-mono">{errors.partnershipInterests}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-xs sm:text-sm uppercase tracking-wider">
                Message / goals <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`font-mono text-xs sm:text-sm min-h-[100px] focus-visible:ring-primary/50 ${errors.message ? 'border-destructive' : ''}`}
                placeholder="Tell us what you have in mind (event, format, goals)."
              />
              {errors.message && (
                <p className="text-xs text-destructive font-mono">{errors.message}</p>
              )}
            </div>

            {/* Consent */}
            <div className="space-y-3">
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
                  You can contact me about partnerships. <span className="text-primary">*</span>
                </Label>
              </div>
              {errors.consent && (
                <p className="text-xs text-destructive font-mono">{errors.consent}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center space-y-3">
            <Button
              type="submit"
              size="lg"
              className="min-w-[200px] font-mono font-bold uppercase text-xs sm:text-sm tracking-wider min-h-[48px] shadow-glow hover:shadow-[0_0_30px_hsla(280,65%,60%,0.6)] transition-all duration-300"
            >
              Send Inquiry
            </Button>
            <p className="text-xs font-mono text-muted-foreground">
              Prefer email?{" "}
              <a 
                href="mailto:partnerships@hercode.ch" 
                className="text-primary hover:underline"
              >
                partnerships@hercode.ch
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
