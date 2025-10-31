export const HexagonPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon 
              points="50,0 100,25 100,75 50,100 0,75 0,25" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="1"
            />
            <animateTransform
              attributeName="patternTransform"
              type="translate"
              from="0 0"
              to="100 87"
              dur="60s"
              repeatCount="indefinite"
            />
          </pattern>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b794f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9d7ff5" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};
