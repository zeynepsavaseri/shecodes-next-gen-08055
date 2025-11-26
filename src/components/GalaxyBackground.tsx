import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
}

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars - more visible and brighter
    const numStars = 400;
    const stars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2.5 + 0.5,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.7 + 0.5,
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

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
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

        // Draw star with more brightness
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 3);
        
        // Brighter purple-pink-white gradient for stars
        const hue = 280 + Math.sin(star.y * 0.01 + index) * 40;
        gradient.addColorStop(0, `hsla(${hue}, 100%, 90%, ${star.opacity})`);
        gradient.addColorStop(0.3, `hsla(${hue}, 90%, 75%, ${star.opacity * 0.8})`);
        gradient.addColorStop(0.7, `hsla(${hue}, 70%, 60%, ${star.opacity * 0.4})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size * star.z * 3, 0, Math.PI * 2);
        ctx.fill();

        // Add brighter glow to some stars
        if (Math.random() > 0.995) {
          ctx.shadowBlur = 30;
          ctx.shadowColor = `hsla(${hue}, 100%, 90%, 1)`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * star.z * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw connecting lines between nearby stars - more visible
      ctx.strokeStyle = 'rgba(200, 150, 255, 0.15)';
      ctx.lineWidth = 0.8;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.strokeStyle = `rgba(220, 180, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

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
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
