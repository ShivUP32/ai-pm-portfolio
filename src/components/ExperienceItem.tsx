"use client";

import Image from "next/image";
import { useState } from "react";

export default function ExperienceItem({ exp }: { exp: any }) {
  const [expanded, setExpanded] = useState(false);

  // If there are 2 or fewer bullets, we don't need a read more button.
  // The prompt asked to limit to 1 and fade the 2nd.
  const hasMultipleBullets = exp.bullets && exp.bullets.length > 1;

  return (
    <div className="relative pl-8 md:pl-10">
      {/* Glowing Node */}
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-glow shadow-[0_0_10px_rgba(139,92,246,0.8)] border-2 border-paper"></div>

      {/* Header: Date, Role, Company */}
      <div className="mb-4">
        <span className="text-accent-glow/70 font-mono text-xs tracking-widest uppercase block mb-1">
          {exp.date}
        </span>
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shrink-0">
              <Image src={`/Experience Company Logo/${exp.logo}`} alt={exp.company} fill className="object-contain p-2" unoptimized />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-white tracking-tight">
                {exp.role}
              </h3>
              <span className="text-ink-muted text-sm font-medium">{exp.company}</span>
            </div>
          </div>

          {/* Product Tags */}
          {exp.products && exp.products.length > 0 && (
            <div className="flex items-center gap-8 flex-wrap mt-2 md:mt-0">
              {exp.products.map((product: any, pIdx: number) => (
                <div key={pIdx} className="flex items-center gap-4 group/product cursor-pointer relative z-0 hover:z-10">
                  <div className="w-8 h-8 relative shrink-0 z-0 group-hover/product:z-20">
                    {/* Render at 48x48, scale down to 32x32 normally, scale to 48x48 on hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 scale-[0.666] group-hover/product:scale-100 transition-all duration-300 ease-out origin-center rounded-[12px] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-lg group-hover/product:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover/product:border-white/30">
                      <Image src={`/Experience Company Logo/${product.logo}`} alt={product.name} fill className="object-cover" unoptimized />
                    </div>
                  </div>
                  <div className="flex flex-col relative z-30 transition-all duration-300 ease-out">
                    <span className="text-[10px] font-mono text-white/50 leading-tight transition-colors duration-300 group-hover/product:text-white/70">{product.stage}</span>
                    <span className="text-xs font-medium text-white/90 leading-tight transition-colors duration-300 group-hover/product:text-white">{product.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bullets */}
      <div className="relative mt-6">
        <ul className="space-y-3">
          {exp.bullets.map((bullet: string, idx: number) => {
            // When collapsed, hide bullets from index 2 onwards
            if (!expanded && idx > 1) return null;
            
            const isFaded = !expanded && idx === 1;
            
            return (
              <li 
                key={idx} 
                className="text-sm leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full text-ink-muted [&_strong]:text-white [&_strong]:font-semibold transition-opacity duration-500"
                style={isFaded ? { 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
                  maskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
                  opacity: 0.6
                } : {}}
              >
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            );
          })}
        </ul>

        {hasMultipleBullets && (
          <div className={`flex justify-start pl-4 relative z-10 ${!expanded ? '-mt-1' : 'mt-5'}`}>
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-mono font-medium text-white hover:text-accent-glow transition-all duration-300 flex items-center gap-2 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 shadow-lg"
            >
              {expanded ? (
                <>Show Less <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg></>
              ) : (
                <>Read More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
