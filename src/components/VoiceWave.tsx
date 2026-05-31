"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });
  
  const [engineState, setEngineState] = useState(0);
  const states = [
    { text: "LISTENING", color: "#FFFFFF", glow: "rgba(255,255,255,0.05)" },             // Very subtle white glow
    { text: "THINKING", color: "hsl(280, 100%, 65%)", glow: "hsla(280, 100%, 65%, 0.15)" },  // Minimal Purple glow
    { text: "SPEAKING", color: "hsl(180, 100%, 60%)", glow: "hsla(180, 100%, 60%, 0.15)" }   // Minimal Teal glow
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setEngineState((prev) => (prev + 1) % states.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    window.addEventListener("resize", resize);
    resize();

    // Configuration for the organic fluid waves
    const waves = [
      { color: "hsla(260, 100%, 70%, 0.4)", speed: 0.02, offset: 0, amp: 0.4 },
      { color: "hsla(280, 100%, 65%, 0.3)", speed: -0.015, offset: 2, amp: 0.6 },
      { color: "hsla(200, 100%, 75%, 0.5)", speed: 0.025, offset: 4, amp: 0.5 },
      { color: "hsla(180, 100%, 60%, 0.4)", speed: -0.01, offset: 1, amp: 0.7 },
    ];

    const render = () => {
      time += 1; 
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerY = height / 2;
      
      ctx.clearRect(0, 0, width, height);
      
      // Use screen blend mode so overlapping translucent colors create intense bright white/glow spots
      ctx.globalCompositeOperation = "screen";

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, centerY);

        // We draw a continuous smooth curve across the width
        for (let x = 0; x <= width; x += 5) {
          // Normalize X for taper
          const xNorm = x / width;
          // Smooth taper at edges (0 at edges, 1 in middle) using sine
          const edgeTaper = Math.sin(xNorm * Math.PI);
          
          // Generate complex organic movement using multiple sine components
          const baseMovement = Math.sin((x * 0.01) + (time * wave.speed) + wave.offset);
          const secondaryMovement = Math.sin((x * 0.005) - (time * wave.speed * 0.5));
          
          // Maximum amplitude is a fraction of the container height
          const maxAmp = (height / 2.5) * wave.amp;
          
          let y = centerY + ((baseMovement + secondaryMovement) * maxAmp * edgeTaper);
          let drawX = x;

          // Interactive Mouse Physics (Magnetic Repel)
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const maxDist = mouseRef.current.radius;
          
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const easeForce = Math.pow(force, 2);
            y -= dy * easeForce * 0.8; // Repel vertically
            drawX += dx * easeForce * 0.2; // Repel horizontally slightly
          }

          ctx.lineTo(drawX, y);
        }

        // Complete the shape so we can fill it to create "blobs" or thick lines
        ctx.lineTo(width, centerY);
        
        // Draw the curve back but slightly offset to create a thick ribbon
        for (let x = width; x >= 0; x -= 5) {
          const xNorm = x / width;
          const edgeTaper = Math.sin(xNorm * Math.PI);
          const baseMovement = Math.sin((x * 0.01) + (time * wave.speed) + wave.offset);
          const secondaryMovement = Math.sin((x * 0.005) - (time * wave.speed * 0.5));
          
          const maxAmp = (height / 2.5) * wave.amp;
          const thickness = 10 * edgeTaper; 
          let y = centerY + ((baseMovement + secondaryMovement) * maxAmp * edgeTaper) + thickness;
          let drawX = x;

          // Interactive Mouse Physics (Magnetic Repel)
          const dx = x - mouseRef.current.x;
          // Calculate dy based on the original center line to keep ribbon together
          const dyCenter = (centerY + ((baseMovement + secondaryMovement) * maxAmp * edgeTaper)) - mouseRef.current.y;
          const dist = Math.sqrt(dx*dx + dyCenter*dyCenter);
          const maxDist = mouseRef.current.radius;
          
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const easeForce = Math.pow(force, 2);
            y -= dyCenter * easeForce * 0.8; // Repel vertically using same offset
            drawX += dx * easeForce * 0.2; // Repel horizontally
          }
          
          ctx.lineTo(drawX, y);
        }

        ctx.closePath();

        // Create a horizontal gradient for each wave that fades into the color
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.2, wave.color);
        gradient.addColorStop(0.8, wave.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        
        // Add a subtle glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = wave.color;
        
        ctx.fill();
      });

      // Reset blend mode
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full bg-paper-glass backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative flex flex-col gap-2 group">
      
      {/* Animated Border Beam - Original Shape with Perfect Linear Velocity */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none p-[1.5px]" 
        style={{
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }}
      >
        <motion.div
           className="absolute aspect-square"
           style={{
              width: 96,
              offsetPath: 'inset(0 round 24px)',
              offsetAnchor: '100% 50%',
              background: 'linear-gradient(to right, transparent 0%, rgba(6, 182, 212, 1) 60%, rgba(139, 92, 246, 1) 100%)',
           }}
           animate={{ offsetDistance: ["0%", "100%"] }}
           transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
      </div>

      {/* Widget Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-teal"></span>
          </div>
          <p className="text-xs font-mono text-ink-muted uppercase tracking-widest flex items-center gap-1">
            AI Engine: 
            <span className="relative flex overflow-hidden h-4 w-20 items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={engineState}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-0 font-bold tracking-widest"
                  style={{ 
                    color: states[engineState].color, 
                    textShadow: `0 0 12px ${states[engineState].glow}` 
                  }}
                >
                  {states[engineState].text}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </div>
      </div>
      
      {/* Fluid Canvas Wrapper - reduced height for sleeker look */}
      <div className="w-full h-14 relative mt-1">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-90 mix-blend-screen"
        />
      </div>
    </div>
  );
}
