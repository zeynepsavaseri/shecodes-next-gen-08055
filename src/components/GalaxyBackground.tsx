import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: { h: number; s: number; l: number };
  speed: number;
  angle: number;
  rotationSpeed: number;
}

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

      // Set canvas size - extend below hero section further
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 800;
      };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars - minimal and elegant
    const numStars = 150;
    const stars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 0.8 + 0.5,
        size: Math.random() * 0.8 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
        opacity: Math.random() * 0.4 + 0.2,
        twinkleSpeed: Math.random() * 0.005 + 0.001,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create subtle ambient glow - very minimal
    const numNebulas = 3;
    const nebulas: Nebula[] = [];
    
    for (let i = 0; i < numNebulas; i++) {
      nebulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 400 + 300,
        color: {
          h: Math.random() * 20 + 270, // Subtle purple/blue
          s: Math.random() * 20 + 40,
          l: Math.random() * 10 + 15,
        },
        speed: Math.random() * 0.03 + 0.01,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.0002,
      });
    }

    // Animation
    let animationFrameId: number;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;
    
    const animate = () => {
      frame++;
      
      // Clear background - solid for clean look
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw very subtle ambient glow
      nebulas.forEach((nebula) => {
        // Minimal movement
        nebula.angle += nebula.rotationSpeed;
        nebula.x += Math.cos(nebula.angle) * nebula.speed;
        nebula.y += Math.sin(nebula.angle) * nebula.speed;

        // Wrap around edges
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius;
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;

        // Draw single subtle gradient layer
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        
        const opacity = 0.04;
        gradient.addColorStop(0, `hsla(${nebula.color.h}, ${nebula.color.s}%, ${nebula.color.l}%, ${opacity})`);
        gradient.addColorStop(0.6, `hsla(${nebula.color.h}, ${nebula.color.s - 10}%, ${nebula.color.l - 5}%, ${opacity * 0.4})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach((star, index) => {
        // Minimal movement - mostly static
        star.y -= star.speed;
        star.x += Math.sin(star.y * 0.002 + frame * 0.005) * 0.15;

        // Reset star position when it goes off screen
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        // Interactive effect - very subtle
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          star.x += dx * force * 0.02;
          star.y += dy * force * 0.02;
        }

        // Very subtle twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Draw minimal, modern stars
        ctx.save();
        
        // Simple clean dot - no sparkle effects
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
        ctx.arc(star.x, star.y, star.size * star.z, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle soft glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 3);
        gradient.addColorStop(0, `rgba(200, 200, 255, ${currentOpacity * 0.15})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Remove connecting lines - too busy
      
      // Add gradient fade at bottom for smooth transition into next section
      const fadeHeight = 700;
      const fadeGradient = ctx.createLinearGradient(0, canvas.height - fadeHeight, 0, canvas.height);
      fadeGradient.addColorStop(0, 'transparent');
      fadeGradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.1)');
      fadeGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
      fadeGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.6)');
      fadeGradient.addColorStop(0.9, 'rgba(0, 0, 0, 0.85)');
      fadeGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = fadeGradient;
      ctx.fillRect(0, canvas.height - fadeHeight, canvas.width, fadeHeight);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ 
        height: 'calc(100vh + 800px)',
        mixBlendMode: 'screen'
      }}
    />
  );
};
