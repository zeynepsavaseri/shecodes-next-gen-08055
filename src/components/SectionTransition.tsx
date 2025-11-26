export const SectionTransition = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
      {/* Animated wave divider */}
      <div className="relative w-full overflow-hidden" style={{ height: '150px' }}>
        {/* Multiple wave layers for depth */}
        <svg
          className="absolute bottom-0 w-full"
          style={{ height: '150px' }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back wave - lighter */}
          <path
            d="M0,60 C300,90 600,30 900,60 L900,120 L0,120 Z"
            className="animate-[wave_8s_ease-in-out_infinite]"
            style={{ 
              fill: 'hsl(var(--background))',
              opacity: 0.3,
              transformOrigin: 'center'
            }}
          />
          
          {/* Middle wave */}
          <path
            d="M0,80 C300,50 600,90 900,70 C1050,60 1150,80 1200,85 L1200,120 L0,120 Z"
            className="animate-[wave_10s_ease-in-out_infinite_reverse]"
            style={{ 
              fill: 'hsl(var(--background))',
              opacity: 0.5
            }}
          />
          
          {/* Front wave - solid */}
          <path
            d="M0,90 C300,110 600,70 900,95 C1050,105 1150,90 1200,95 L1200,120 L0,120 Z"
            className="animate-[wave_12s_ease-in-out_infinite]"
            style={{ 
              fill: 'hsl(var(--background))'
            }}
          />
        </svg>
        
        {/* Floating particles transitioning */}
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-[10%] w-2 h-2 bg-primary/40 rounded-full blur-sm animate-float" />
          <div className="absolute bottom-32 left-[25%] w-1.5 h-1.5 bg-accent/30 rounded-full blur-sm animate-float-subtle" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-24 left-[40%] w-2 h-2 bg-primary/50 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-28 right-[35%] w-1.5 h-1.5 bg-accent/40 rounded-full blur-sm animate-float-subtle" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-26 right-[20%] w-2 h-2 bg-primary/30 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-30 right-[8%] w-1.5 h-1.5 bg-accent/50 rounded-full blur-sm animate-float-subtle" style={{ animationDelay: '2.5s' }} />
        </div>
        
        {/* Glowing line divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse-glow" />
        </div>
      </div>
      
      {/* Gradient overlay for smooth color transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-background"
        style={{ height: '100px', marginTop: '-50px' }}
      />
    </div>
  );
};
