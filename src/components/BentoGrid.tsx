"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Product {
  title: string;
  vertical: string;
  description: string;
  metric: string;
  headline_metric?: string;
  slug?: string;
  coverImage?: {
    src: string;
    className: string;
    containerClassName?: string;
  };
}

const products: Product[] = [
  {
    title: "Reevo (Voice-first AI)",
    vertical: "English Learning",
    description: "AI voice-first platform scaling to 150K+ downloads via hyper-personalized growth journeys.",
    metric: "10X Revenue",
    headline_metric: "150K+ Downloads & 10X Revenue via AI Personalization",
    slug: "reevo-growth",
    coverImage: {
      src: "/images/reevo.jpg",
      className: "object-cover object-top md:object-right-top scale-100 origin-top md:origin-right-top group-hover:scale-[1.03]"
    }
  },
  {
    title: "Learner Doubt Solver",
    vertical: "Doubt Agent",
    description: "AI Doubt Solver agent across chat and voice, fundamentally lifting user retention.",
    metric: "55%+ D1 Retention",
    headline_metric: "30% D1 Retention & 55%+ Feature-Activated D1 Retention",
    slug: "learner-doubt-solver",
    coverImage: {
      src: "/images/learner.png",
      className: "object-cover object-top scale-100 origin-top group-hover:scale-[1.03]"
    }
  },
  {
    title: "Multi-Agent Framework",
    vertical: "Agent Orchestration",
    description: "Reusable architecture powering Support, English Teacher, and Doubt Solver agents.",
    metric: "3X Faster Integration",
    headline_metric: "3X Faster Integration & ~70% Code Reuse",
    slug: "multi-agent-framework",
    coverImage: {
      src: "/images/framework-hero.png",
      className: "object-cover object-[80%_50%] scale-100 origin-[80%_50%] group-hover:scale-[1.03]",
      containerClassName: "h-44"
    }
  },
  {
    title: "Knot.dating",
    vertical: "AI Matchmaking",
    description: "Conversational AI voice (IVR) & WhatsApp agents solving the cold-start profile problem.",
    metric: "₹250K in 30 Days",
    headline_metric: "₹250K Revenue in 30 Days via AI Matching",
    slug: "knot-dating",
    coverImage: {
      src: "/images/knot.png",
      className: "object-cover object-top scale-100 origin-top group-hover:scale-[1.03]"
    }
  },
  {
    title: "Hood Social AI",
    vertical: "Anonymous Social",
    description: "AI-driven personalized feed with humanoid bots, Creator Rewards, and live AMA features.",
    metric: "3X Session Time",
    headline_metric: "3X Session Time & Scaled Creator Economy",
    slug: "hood-streak-and-monetization",
    coverImage: {
      src: "/images/hood.jpg",
      className: "object-cover object-[85%_0%] scale-100 origin-[85%_0%] group-hover:scale-[1.03]"
    }
  },
];

function renderMetric(metric: string) {
  const regex = /(₹?\d+(?:\.\d+)?[Kk]\+?|\d+[Xx]|~?\d+(?:\.\d+)?%\+?)/g;
  const parts = metric.split(regex);
  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <span 
          key={index} 
          className="inline-block font-semibold text-accent-teal/80 group-hover:text-accent-teal group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.4)] group-hover:scale-[1.02] transition-all duration-500 ease-in-out"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

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
      className={`group relative overflow-hidden rounded-2xl bg-paper-glass backdrop-blur-xl border border-white/10 p-5 md:p-6 shadow-2xl transition-all duration-500 hover:border-accent/40 h-full ${className}`}
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-8">
      {products.map((product, i) => {
        const isClickable = !!product.slug;
        const colSpanClass = i === 0 ? "md:col-span-2" : "md:col-span-1";

        if (isClickable) {
          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`${colSpanClass} cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/work/${product.slug}`} className="block h-full">
                {i === 0 ? (
                  // Large Horizontal Layout for Reevo
                  <GlassCard>
                    <div className="flex flex-col md:flex-row gap-6 items-stretch h-full">
                      <div className="flex-1 flex flex-col justify-between min-h-[200px] md:min-h-0">
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="text-xs font-mono text-accent-teal uppercase tracking-wider">{product.vertical}</div>
                            <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                          </div>
                          <h3 className="text-2xl font-display font-medium text-white group-hover:text-accent-glow transition-colors mb-2">
                            {product.title}
                          </h3>
                          <p className="text-ink-muted text-sm leading-relaxed mb-4">{product.description}</p>
                        </div>
                        {product.headline_metric && (
                          <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-accent-teal/20 group-hover:bg-accent-teal/[0.01] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] self-start">
                            <p className="text-sm text-white/60 group-hover:text-white/95 transition-colors duration-500 leading-relaxed font-sans">
                              {renderMetric(product.headline_metric)}
                            </p>
                          </div>
                        )}
                      </div>
                      {product.coverImage && (
                        <div className="w-full md:w-72 h-44 md:h-auto min-h-[176px] relative rounded-xl overflow-hidden border border-white/5 shrink-0">
                          <Image
                            src={product.coverImage.src}
                            alt={product.title}
                            fill
                            className={`${product.coverImage.className} grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
                          />
                        </div>
                      )}
                    </div>
                  </GlassCard>
                ) : (
                  // Vertical Layout for Knot and Hood
                  <GlassCard>
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs font-mono text-accent-teal uppercase tracking-wider">{product.vertical}</div>
                          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                        </div>
                        <h3 className="text-xl font-display font-medium text-white group-hover:text-accent-glow transition-colors mb-2">
                          {product.title}
                        </h3>
                        <p className="text-ink-muted text-sm leading-relaxed mb-4">{product.description}</p>
                      </div>
                      <div>
                        {product.headline_metric && (
                          <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-accent-teal/20 group-hover:bg-accent-teal/[0.01] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] w-full mb-4">
                            <p className="text-sm text-white/60 group-hover:text-white/95 transition-colors duration-500 leading-relaxed font-sans">
                              {renderMetric(product.headline_metric)}
                            </p>
                          </div>
                        )}
                        {product.coverImage && (
                          <div className={`w-full relative rounded-xl overflow-hidden border border-white/5 shrink-0 ${product.coverImage.containerClassName || "h-36"}`}>
                            <Image
                              src={product.coverImage.src}
                              alt={product.title}
                              fill
                              className={`${product.coverImage.className} grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                )}
              </Link>
            </motion.div>
          );
        }

        // Static informational block (Learner and Multi-Agent)
        return (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={colSpanClass}
          >
            <GlassCard className="cursor-default flex flex-col justify-between">
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
        );
      })}
    </div>
  );
}
