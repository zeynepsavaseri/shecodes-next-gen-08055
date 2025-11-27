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

      // Set canvas size - extend below hero section further
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + 800;
      };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars - more dynamic and colorful
    const numStars = 700;
    const stars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2 + 0.3,
        size: Math.random() * 2 + 0.3,
        speed: Math.random() * 0.5 + 0.15,
        opacity: Math.random() * 0.9 + 0.3,
        twinkleSpeed: Math.random() * 0.05 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
    }
    
    const shootingStars: ShootingStar[] = [];
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 3 + 2,
        opacity: 1,
        angle: Math.PI / 4 + Math.random() * 0.3,
      });
    };

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
    let lastShootingStarTime = 0;
    
    const animate = () => {
      frame++;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create shooting stars randomly
      if (Date.now() - lastShootingStarTime > 2000 && Math.random() < 0.02) {
        createShootingStar();
        lastShootingStarTime = Date.now();
      }

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
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          star.x += dx * force * 0.15;
          star.y += dy * force * 0.15;
        }

        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * twinkle;

        // Draw star more dynamically with varied colors
        ctx.save();
        
        // More color variety - blues, purples, pinks
        const colorVariant = index % 4;
        let hue;
        if (colorVariant === 0) hue = 260 + Math.sin(star.y * 0.01) * 20; // Purple-blue
        else if (colorVariant === 1) hue = 200 + Math.sin(star.y * 0.01) * 15; // Cyan-blue
        else if (colorVariant === 2) hue = 320 + Math.sin(star.y * 0.01) * 20; // Pink-purple
        else hue = 280 + Math.sin(star.y * 0.01) * 25; // Purple
        
        // Core of the star (bright white center)
        ctx.beginPath();
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity})`;
        ctx.arc(star.x, star.y, star.size * star.z * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner glow
        const innerGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 3);
        innerGlow.addColorStop(0, `hsla(${hue}, 90%, 95%, ${currentOpacity * 0.8})`);
        innerGlow.addColorStop(0.5, `hsla(${hue}, 85%, 80%, ${currentOpacity * 0.5})`);
        innerGlow.addColorStop(1, 'transparent');
        
        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Outer glow - more pronounced
        const outerGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 6);
        outerGlow.addColorStop(0, `hsla(${hue}, 80%, 70%, ${currentOpacity * 0.4})`);
        outerGlow.addColorStop(0.5, `hsla(${hue}, 70%, 60%, ${currentOpacity * 0.2})`);
        outerGlow.addColorStop(1, 'transparent');
        
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z * 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Add sparkle effect to larger stars
        if (star.size > 1.2 && twinkle > 0.7) {
          ctx.strokeStyle = `hsla(0, 0%, 100%, ${currentOpacity * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 3, star.y);
          ctx.lineTo(star.x + star.size * 3, star.y);
          ctx.moveTo(star.x, star.y - star.size * 3);
          ctx.lineTo(star.x, star.y + star.size * 3);
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Draw and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const shootingStar = shootingStars[i];
        
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.01;
        
        if (shootingStar.opacity <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStars.splice(i, 1);
          continue;
        }
        
        ctx.save();
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(0.3, `rgba(200, 180, 255, ${shootingStar.opacity * 0.6})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );
        ctx.stroke();
        ctx.restore();
      }

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
