import { useEffect, useRef } from "react";

export const AnimatedBlob = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const drawBlob = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const baseRadius = Math.min(rect.width, rect.height) * 0.35;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Create multiple layered blobs for depth
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.3;
        const layerScale = 1 - layer * 0.15;
        const layerOpacity = 0.4 - layer * 0.1;

        ctx.beginPath();

        const points = 8;
        const angleStep = (Math.PI * 2) / points;

        for (let i = 0; i <= points; i++) {
          const angle = i * angleStep;
          
          // Organic noise-like movement
          const noise1 = Math.sin(time * 0.5 + i * 0.8 + layerOffset) * 0.15;
          const noise2 = Math.cos(time * 0.3 + i * 1.2 + layerOffset) * 0.1;
          const noise3 = Math.sin(time * 0.7 + i * 0.5 + layerOffset) * 0.08;
          
          const radiusVariation = 1 + noise1 + noise2 + noise3;
          const radius = baseRadius * layerScale * radiusVariation;

          const x = centerX + Math.cos(angle + time * 0.1 * (layer + 1) * 0.3) * radius;
          const y = centerY + Math.sin(angle + time * 0.1 * (layer + 1) * 0.3) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            // Use bezier curves for smooth organic shape
            const prevAngle = (i - 1) * angleStep;
            const prevNoise1 = Math.sin(time * 0.5 + (i - 1) * 0.8 + layerOffset) * 0.15;
            const prevNoise2 = Math.cos(time * 0.3 + (i - 1) * 1.2 + layerOffset) * 0.1;
            const prevNoise3 = Math.sin(time * 0.7 + (i - 1) * 0.5 + layerOffset) * 0.08;
            const prevRadiusVariation = 1 + prevNoise1 + prevNoise2 + prevNoise3;
            const prevRadius = baseRadius * layerScale * prevRadiusVariation;
            
            const prevX = centerX + Math.cos(prevAngle + time * 0.1 * (layer + 1) * 0.3) * prevRadius;
            const prevY = centerY + Math.sin(prevAngle + time * 0.1 * (layer + 1) * 0.3) * prevRadius;

            const cpX1 = lerp(prevX, x, 0.5) + Math.sin(time + i) * 20;
            const cpY1 = lerp(prevY, y, 0.5) + Math.cos(time + i) * 20;

            ctx.quadraticCurveTo(cpX1, cpY1, x, y);
          }
        }

        ctx.closePath();

        // Create iridescent gradient
        const gradient = ctx.createRadialGradient(
          centerX + Math.sin(time * 0.2) * 50,
          centerY + Math.cos(time * 0.3) * 50,
          0,
          centerX,
          centerY,
          baseRadius * 1.5
        );

        // Shifting iridescent colors
        const hueShift = time * 10;
        gradient.addColorStop(0, `hsla(${270 + hueShift % 60}, 70%, 60%, ${layerOpacity})`);
        gradient.addColorStop(0.3, `hsla(${210 + hueShift % 60}, 80%, 55%, ${layerOpacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${180 + hueShift % 60}, 75%, 50%, ${layerOpacity * 0.6})`);
        gradient.addColorStop(0.7, `hsla(${320 + hueShift % 60}, 70%, 55%, ${layerOpacity * 0.7})`);
        gradient.addColorStop(1, `hsla(${270 + hueShift % 60}, 60%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = `hsla(${270 + hueShift % 60}, 80%, 60%, 0.3)`;
        ctx.shadowBlur = 60;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Add highlight streaks
      for (let i = 0; i < 5; i++) {
        const streakAngle = time * 0.2 + i * 1.2;
        const streakRadius = baseRadius * (0.6 + Math.sin(time * 0.5 + i) * 0.3);
        
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(streakAngle) * streakRadius * 0.5,
          centerY + Math.sin(streakAngle) * streakRadius * 0.5,
          baseRadius * 0.02,
          0,
          Math.PI * 2
        );
        
        const highlightGradient = ctx.createRadialGradient(
          centerX + Math.cos(streakAngle) * streakRadius * 0.5,
          centerY + Math.sin(streakAngle) * streakRadius * 0.5,
          0,
          centerX + Math.cos(streakAngle) * streakRadius * 0.5,
          centerY + Math.sin(streakAngle) * streakRadius * 0.5,
          baseRadius * 0.15
        );
        highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = highlightGradient;
        ctx.fill();
      }

      time += 0.016;
      animationId = requestAnimationFrame(drawBlob);
    };

    drawBlob();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        filter: "blur(1px)",
        mixBlendMode: "screen" 
      }}
    />
  );
};
