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

    // Create stars - subtle and elegant
    const numStars = 300;
    const stars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1.2 + 0.3,
        size: Math.random() * 1 + 0.2,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create shooting stars rarely
      if (Date.now() - lastShootingStarTime > 8000 && Math.random() < 0.01) {
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

        // Subtle interactive effect
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          star.x += dx * force * 0.08;
          star.y += dy * force * 0.08;
        }

        // Twinkle effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
        const currentOpacity = star.opacity * twinkle;

        // Draw star with subtle elegance
        ctx.save();
        
        // Soft, sophisticated colors
        const colorVariant = index % 3;
        let hue;
        if (colorVariant === 0) hue = 240; // Soft blue
        else if (colorVariant === 1) hue = 270; // Soft purple
        else hue = 260; // Blue-purple
        
        // Subtle core
        ctx.beginPath();
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity * 0.4})`;
        ctx.arc(star.x, star.y, star.size * star.z * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        // Soft glow
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * star.z * 3);
        glow.addColorStop(0, `hsla(${hue}, 50%, 70%, ${currentOpacity * 0.3})`);
        glow.addColorStop(0.5, `hsla(${hue}, 40%, 60%, ${currentOpacity * 0.15})`);
        glow.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.z * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Minimal sparkle effect
        if (star.size > 0.8 && twinkle > 0.8) {
          ctx.strokeStyle = `hsla(0, 0%, 100%, ${currentOpacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 1.5, star.y);
          ctx.lineTo(star.x + star.size * 1.5, star.y);
          ctx.moveTo(star.x, star.y - star.size * 1.5);
          ctx.lineTo(star.x, star.y + star.size * 1.5);
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
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity * 0.5})`);
        gradient.addColorStop(0.3, `rgba(200, 180, 255, ${shootingStar.opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
        );
        ctx.stroke();
        ctx.restore();
      }

      // Very subtle connecting lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 60) {
            const opacity = (60 - distance) / 60 * 0.05;
            ctx.strokeStyle = `rgba(200, 180, 255, ${opacity})`;
            ctx.lineWidth = 0.3;
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
