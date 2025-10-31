import { Code2, Zap, Sparkles, Terminal, Cpu, Binary } from "lucide-react";

export const FloatingIcons = () => {
  const icons = [
    { Icon: Code2, delay: 0, x: '10%', duration: 8 },
    { Icon: Zap, delay: 1, x: '80%', duration: 10 },
    { Icon: Sparkles, delay: 2, x: '20%', duration: 12 },
    { Icon: Terminal, delay: 1.5, x: '70%', duration: 9 },
    { Icon: Cpu, delay: 0.5, x: '40%', duration: 11 },
    { Icon: Binary, delay: 2.5, x: '60%', duration: 13 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map(({ Icon, delay, x, duration }, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            left: x,
            animation: `float-vertical ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </div>
      ))}
      
      <style>
        {`
          @keyframes float-vertical {
            0%, 100% {
              top: -10%;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              top: 110%;
              transform: translateY(0) rotate(180deg);
            }
          }
        `}
      </style>
    </div>
  );
};
