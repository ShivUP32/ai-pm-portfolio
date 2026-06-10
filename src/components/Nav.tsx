"use client";

import { useState, useEffect } from "react";
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

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
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
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-ink-muted hover:text-white transition-colors focus:outline-none shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              key="drawer"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { 
                  x: 0,
                  transition: { type: "tween", duration: 0.3, ease: "easeOut" }
                },
                closed: { 
                  x: "100%",
                  transition: { type: "tween", duration: 0.25, ease: "easeIn" }
                }
              }}
              className="fixed top-0 right-0 bottom-0 h-full w-[300px] max-w-[85vw] z-[110] bg-[#050505]/75 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-white/10">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-baseline gap-1 group shrink-0">
                  <span className="font-signature text-3xl font-semibold text-accent-glow group-hover:text-white transition-colors tracking-tight">Shivam</span>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">SINGH</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-ink-muted hover:text-white transition-colors focus:outline-none shrink-0"
                  aria-label="Close navigation menu"
                >
                  <motion.div
                    whileTap={{ scale: 0.9, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                </button>
              </div>

              {/* Navigation Links inside Side Panel */}
              <motion.div 
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
                  },
                  closed: {}
                }}
                className="flex flex-col gap-3 p-6 overflow-y-auto flex-1"
              >
                {links.map((l) => {
                  const isActive = pathname === l.href || pathname?.startsWith(l.href + "/");
                  
                  return (
                    <motion.div
                      key={l.href}
                      variants={{
                        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                        closed: { opacity: 0, x: 20 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative px-5 py-4 font-mono text-base uppercase tracking-[0.15em] transition-all duration-300 rounded-lg border flex items-center justify-between
                          ${isActive 
                            ? "text-accent-teal border-accent-teal/30 bg-accent-teal/5 text-accent-teal" 
                            : "text-ink-muted border-white/5 bg-white/[0.02] hover:text-white hover:border-white/10 hover:bg-white/5"
                          }
                        `}
                      >
                        <span>{l.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                    closed: { opacity: 0, x: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="mailto:shivamsingh0013@gmail.com"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-5 py-4 font-mono text-base uppercase tracking-[0.15em] text-white border border-white/10 bg-[#0a0a0a] rounded-lg hover:border-white/30 hover:bg-white/5 transition-all mt-2"
                  >
                    <span>CONTACT</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
