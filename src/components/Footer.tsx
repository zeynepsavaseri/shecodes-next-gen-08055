import { Heart, Linkedin, Instagram, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/20 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-10" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary animate-pulse-glow" />
              <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent terminal-text">
                HerCode
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering women in technology through community, mentorship, and opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#mission" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Participate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sponsor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4 terminal-text">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border-2 border-primary/30 bg-muted flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white hover:shadow-pixel transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border-2 border-primary/30 bg-muted flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white hover:shadow-pixel transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 HerCode. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-current" /> for women in tech
          </p>
        </div>
      </div>
    </footer>
  );
};