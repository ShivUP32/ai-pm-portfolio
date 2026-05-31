import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">About</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-12">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3">About</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight text-white">
          {siteConfig.name}
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-ink-muted mb-16">
        {siteConfig.about.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="border-t border-white/10 pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 text-white flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></div>
          What I do well
        </h2>
        <ul className="space-y-4">
          {siteConfig.strengths.map((s, i) => (
            <li key={i} className="flex gap-4 text-ink-muted items-start p-4 bg-paper-glass backdrop-blur-sm border border-white/5 rounded-xl">
              <span className="text-accent-teal font-mono text-sm pt-0.5">
                0{i + 1}
              </span>
              <span className="text-base md:text-lg">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
