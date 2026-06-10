"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/logs", label: "LOGS" },
  { href: "/about", label: "ABOUT" },
  { href: "/now", label: "NOW" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 group shrink-0">
          <span className="font-signature text-3xl font-semibold text-accent-glow group-hover:text-white transition-colors tracking-tight">Shivam</span>
          <span className="font-mono text-xs tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">SINGH</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 text-xs md:text-sm">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-white transition-colors focus:outline-none shrink-0"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-5">
              {links.map((l) => {
                const isActive = pathname === l.href || pathname?.startsWith(l.href + "/");
                
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-4 py-3 font-mono text-sm uppercase tracking-[0.15em] transition-all duration-300 rounded-lg border flex items-center justify-between
                      ${isActive 
                        ? "text-accent-teal border-accent-teal/20 bg-accent-teal/5" 
                        : "text-ink-muted border-transparent bg-white/[0.01] hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    <span>{l.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                    )}
                  </Link>
                );
              })}
              
              <Link
                href="mailto:shivamsingh0013@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 font-mono text-sm uppercase tracking-[0.15em] text-white border border-white/10 bg-[#0a0a0a] rounded-lg hover:border-white/30 hover:bg-white/5 transition-all mt-2"
              >
                <span>CONTACT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
