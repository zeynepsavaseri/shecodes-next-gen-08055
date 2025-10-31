export const ScanLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180, 148, 246, 0.03) 2px, rgba(180, 148, 246, 0.03) 4px)',
          animation: 'scan 8s linear infinite'
        }}
      />
      <style>
        {`
          @keyframes scan {
            0% { transform: translateY(0); }
            100% { transform: translateY(10px); }
          }
        `}
      </style>
    </div>
  );
};
