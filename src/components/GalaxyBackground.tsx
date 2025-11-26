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

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size - extend below hero section
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + 300;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars - more realistic
    const numStars = 500;
    const stars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1.5 + 0.3,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        // Move stars
        star.y -= star.speed;
        star.x += Math.sin(star.y * 0.01) * 0.5;

        // Reset star position when it goes off screen
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        // Interactive effect - stars move away from cursor
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          star.x += dx * force * 0.1;
          star.y += dy * force * 0.1;
        }

        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * twinkle;

        // Draw star more realistically
        ctx.save();
        
        // Main star body
        const hue = 280 + Math.sin(star.y * 0.01 + index) * 30;
        
        // Core of the star (bright white center)
        ctx.beginPath();
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity * 0.9})`;
        ctx.arc(star.x, star.y, star.size * star.z * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Glow around star
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 4);
        gradient.addColorStop(0, `hsla(${hue}, 80%, 90%, ${currentOpacity * 0.6})`);
        gradient.addColorStop(0.4, `hsla(${hue}, 70%, 70%, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Add sparkle effect to larger stars
        if (star.size > 1 && twinkle > 0.7) {
          ctx.strokeStyle = `hsla(0, 0%, 100%, ${currentOpacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Draw subtle connecting lines between very close stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = (80 - distance) / 80 * 0.1;
            ctx.strokeStyle = `rgba(200, 180, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Add gradient fade at bottom for smooth transition into next section
      const fadeHeight = 350;
      const fadeGradient = ctx.createLinearGradient(0, canvas.height - fadeHeight, 0, canvas.height);
      fadeGradient.addColorStop(0, 'transparent');
      fadeGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.3)');
      fadeGradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
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
        height: 'calc(100vh + 300px)',
        mixBlendMode: 'screen'
      }}
    />
  );
};
