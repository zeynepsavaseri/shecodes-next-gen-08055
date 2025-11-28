import founderPixel from "@/assets/founder-pixel.png";

export const FounderSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Meet the Founder
            </h2>
            <p className="text-lg text-foreground/70">
              The vision behind HerCode
            </p>
          </div>

          {/* Founder Content */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <img 
                  src={founderPixel} 
                  alt="Zeynep Savaseri" 
                  className="w-48 h-48 object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Zeynep Savaseri
                  </h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-wider">
                    Founder & Organizer
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  Exploring health & technology at ETH Zurich, passionate about creating spaces where women in tech can thrive, connect, and innovate together.
                </p>

                {/* LinkedIn Link */}
                <div className="pt-4">
                  <a 
                    href="https://www.linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors group"
                  >
                    Connect on LinkedIn
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};