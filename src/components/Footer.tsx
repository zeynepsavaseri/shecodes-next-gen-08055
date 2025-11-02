import { Heart, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-base font-pixel bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              HerCode
            </h3>
            <p className="text-xs font-mono text-muted-foreground">
              Empowering women in technology through community, mentorship, and opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-xs mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li><a href="#mission" className="hover:text-primary transition-colors">Mission</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-xs mb-4 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Participate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sponsor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-xs mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/109190205/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hercode.ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>&copy; 2025 HerCode. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="w-3 h-3 text-primary fill-current" /> for women in tech
          </p>
        </div>
      </div>
    </footer>
  );
};