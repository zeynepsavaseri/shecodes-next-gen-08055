import { useEffect, useState } from 'react';

const generateRandomChar = () => {
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  return chars[Math.floor(Math.random() * chars.length)];
};

const Stream = ({ delay, left }: { delay: number; left: string }) => {
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChars(prev => {
        const newChars = [generateRandomChar(), ...prev];
        return newChars.slice(0, 15);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 flex flex-col font-mono text-xs text-primary/30"
      style={{
        left,
        animationDelay: `${delay}s`,
      }}
    >
      {chars.map((char, index) => (
        <div
          key={index}
          className="animate-fade-in"
          style={{
            opacity: 1 - index * 0.08,
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export const DataStream = () => {
  const streams = [
    { delay: 0, left: '5%' },
    { delay: 2, left: '15%' },
    { delay: 4, left: '25%' },
    { delay: 1, left: '35%' },
    { delay: 3, left: '45%' },
    { delay: 5, left: '55%' },
    { delay: 1.5, left: '65%' },
    { delay: 3.5, left: '75%' },
    { delay: 2.5, left: '85%' },
    { delay: 4.5, left: '95%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden opacity-40">
      {streams.map((stream, index) => (
        <Stream key={index} {...stream} />
      ))}
    </div>
  );
};
