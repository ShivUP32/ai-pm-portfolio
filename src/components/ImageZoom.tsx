"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ImageZoom() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState<string>("");

  useEffect(() => {
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" && target.closest(".prose-case")) {
        e.preventDefault();
        const img = target as HTMLImageElement;
        setActiveSrc(img.getAttribute("src"));
        setActiveAlt(img.getAttribute("alt") || "");
      }
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  useEffect(() => {
    if (activeSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeSrc]);

  if (!activeSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out animate-fade-in"
      onClick={() => setActiveSrc(null)}
    >
      <button 
        className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors shadow-lg z-[110]"
        onClick={() => setActiveSrc(null)}
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="relative max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={activeSrc} 
          alt={activeAlt} 
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10 animate-scale-up"
        />
        {activeAlt && (
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono tracking-widest uppercase text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md select-none">
            {activeAlt}
          </p>
        )}
      </div>
    </div>
  );
}
