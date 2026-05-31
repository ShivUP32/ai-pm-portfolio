"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/writing", label: "WRITING" },
  { href: "/about", label: "ABOUT" },
  { href: "/now", label: "NOW" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#050505] border-b border-white/10 shadow-lg">
      <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        
        <Link href="/" className="flex items-baseline gap-1 group shrink-0">
          <span className="font-signature text-3xl font-semibold text-accent-glow group-hover:text-white transition-colors tracking-tight">Shivam</span>
          <span className="font-mono text-xs tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">SINGH</span>
        </Link>
        
        <nav className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
          {links.map((l) => {
            const isActive = pathname === l.href || pathname?.startsWith(l.href + "/");
            
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 font-mono uppercase tracking-[0.2em] transition-all duration-300 rounded-md border
                  ${isActive 
                    ? "text-accent-teal border-accent-teal/30 bg-accent-teal/5" 
                    : "text-ink-muted border-white/5 bg-white/[0.02] hover:text-white hover:border-white/20 hover:bg-white/5"
                  }
                `}
              >
                {/* Tactical Corner Brackets for Active State */}
                {isActive && (
                  <>
                    <span className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-accent-teal"></span>
                    <span className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-accent-teal"></span>
                    <span className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-accent-teal"></span>
                    <span className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-accent-teal"></span>
                  </>
                )}
                {l.label}
              </Link>
            );
          })}
          
          {/* Contact Button with Dot */}
          <Link
            href="mailto:shivamsingh0013@gmail.com"
            className="flex items-center gap-2 px-4 py-2 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-white border border-white/10 bg-[#0a0a0a] rounded-md hover:border-white/30 hover:bg-white/5 transition-all"
          >
            CONTACT <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
