export const TechGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full tech-grid"
          style={{
            backgroundSize: '40px 40px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30" />
      
      {/* Animated corner dots */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <style>
        {`
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 40px 40px; }
          }
        `}
      </style>
    </div>
  );
};
