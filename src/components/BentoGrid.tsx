"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface Product {
  title: string;
  description: string;
  vertical: string;
  metric: string;
}

const products: Product[] = [
  {
    title: "Reevo (Voice-first AI)",
    vertical: "English Learning",
    description: "AI voice-first platform scaling to 150K+ downloads via hyper-personalized growth journeys.",
    metric: "10X Revenue",
  },
  {
    title: "Learner Doubt Solver",
    vertical: "Doubt Agent",
    description: "AI Doubt Solver agent across chat and voice, fundamentally lifting user retention.",
    metric: "55%+ D1 Retention",
  },
  {
    title: "Multi-Agent Framework",
    vertical: "Agent Orchestration",
    description: "Reusable architecture powering Support, English Teacher, and Doubt Solver agents.",
    metric: "3X Faster Integration",
  },

  {
    title: "Knot.dating",
    vertical: "AI Matchmaking",
    description: "Conversational AI voice (IVR) & WhatsApp agents solving the cold-start profile problem.",
    metric: "₹250K in 30 Days",
  },
  {
    title: "Hood Social AI",
    vertical: "Anonymous Social",
    description: "AI-driven personalized feed with humanoid bots, Creator Rewards, and live AMA features.",
    metric: "3X Session Time",
  },
];

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-paper-glass backdrop-blur-xl border border-white/10 p-6 shadow-2xl transition-all duration-500 hover:border-accent/40 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
      {products.map((product, i) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <GlassCard className="h-full flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent-teal mb-3 uppercase tracking-wider">{product.vertical}</div>
              <h3 className="text-xl font-display font-medium text-white mb-2">{product.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{product.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-glow/10 border border-accent-glow/20 text-accent-glow font-mono text-sm font-semibold shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                {product.metric}
              </span>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
