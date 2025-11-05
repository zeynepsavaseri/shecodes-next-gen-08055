import { Heart, Zap, Users, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const MissionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [glitchingCard, setGlitchingCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "A space where every woman feels welcome and empowered to thrive in tech.",
      microLine: "ETH roots. EU network."
    },
    {
      icon: Zap,
      title: "Courage", 
      description: "Bold ideas and fearless experimentation drive everything we create.",
      microLine: "Ideas → prototypes. Fast."
    },
    {
      icon: Users,
      title: "Community",
      description: "Women supporting women, learning and growing together.",
      microLine: "500+ builders (and growing)."
    },
    {
      icon: Sparkles,
      title: "Well-Being",
      description: "A reminder that innovation starts with a clear mind and balanced energy. We nurture creativity through mindful, healthy, and sustainable ways of learning and building together.",
      microLine: "Clarity fuels creativity."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (isMobile) return;
    
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }
    setHoveredCard(null);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
    if (!isMobile) {
      setGlitchingCard(index);
      setTimeout(() => setGlitchingCard(null), 120);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="container relative mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              What is HerCode?
            </h2>
          </div>

          {/* Flowing Story */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
            <div className="text-xs sm:text-sm md:text-base font-mono text-foreground/90 leading-relaxed space-y-4 sm:space-y-5 max-w-3xl mx-auto">
              <p>
                HerCode started from a simple observation: too many talented women are missing from tech — not because they lack the skills or ambition, but because the space doesn't always feel like it's made for them.
              </p>
              <p>
                We're building a community where women feel encouraged to explore technology, learn by doing, and create fearlessly. HerCode is for the curious, the bold, and the ambitious — women who want to challenge themselves, support one another, and shape the future of tech on their own terms.
              </p>
              <p className="text-foreground font-semibold">
                Everything we do is guided by our core values.
              </p>
            </div>
          </div>

          {/* Core Values - Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative bg-card/60 backdrop-blur-sm rounded-lg shadow-card p-5 sm:p-6 border border-primary/20 overflow-hidden grain-overlay cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transition: 'transform 180ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease',
                  willChange: 'transform'
                }}
              >
                {/* Neon trace border */}
                <div 
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    padding: '1px',
                    background: hoveredCard === index && !isMobile
                      ? 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)'
                      : 'transparent',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    animation: hoveredCard === index && !isMobile ? 'neon-trace 300ms linear forwards' : 'none'
                  }}
                />

                {/* CRT scanline sweep */}
                {hoveredCard === index && !isMobile && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, hsla(var(--primary) / 0.15) 50%, transparent 100%)',
                      height: '50%',
                      animation: 'scanline-sweep 180ms linear forwards'
                    }}
                  />
                )}

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                {/* Parallax glow under title */}
                {hoveredCard === index && !isMobile && (
                  <div 
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/10 blur-xl rounded-full pointer-events-none"
                  />
                )}
                
                <div className="relative flex flex-col items-center text-center gap-3">
                  {/* Icon with glitch */}
                  <div className="relative inline-block">
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow transition-all duration-500 ${
                        glitchingCard === index ? 'animate-pixel-glitch' : ''
                      }`}
                      style={{
                        boxShadow: hoveredCard === index 
                          ? 'var(--shadow-glow-intense)' 
                          : 'var(--shadow-glow)'
                      }}
                    >
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Glowing ring effect */}
                    <div 
                      className={`absolute inset-0 rounded-xl border-2 border-primary/30 transition-all duration-500 ${
                        hoveredCard === index ? 'scale-110 opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="w-full">
                    <h4 className="text-sm sm:text-base font-mono font-bold mb-2 text-foreground uppercase tracking-wider">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                    
                    {/* Typewriter micro-line */}
                    <div className="h-5 mt-3 flex items-center justify-center">
                      {hoveredCard === index && (
                        <div className="flex items-center gap-1">
                          <span 
                            className="text-[10px] sm:text-xs font-mono text-primary/90 overflow-hidden whitespace-nowrap border-r-2 border-primary/80"
                            style={{
                              animation: 'typewriter 300ms steps(30) forwards, blink 1s step-end 300ms infinite'
                            }}
                          >
                            {value.microLine}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
