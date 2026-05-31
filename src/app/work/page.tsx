import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Home } from "lucide-react";
import { getAllWork } from "@/lib/content";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  const work = getAllWork();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>
      
      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">Work</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-16">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3">Case Studies</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight text-white">
          All Work
        </h1>
        <p className="mt-6 text-lg text-ink-muted max-w-2xl leading-relaxed">
          A selection of AI product work — what I shipped, how I decided, and what I'd do differently.
        </p>
      </header>

      <div className="grid gap-4">
        {work.map((w, i) => (
          <Link
            key={w.slug}
            href={`/work/${w.slug}`}
            className="group block p-6 md:p-8 border border-white/10 rounded-2xl bg-paper-glass hover:bg-white/5 hover:border-accent/40 backdrop-blur-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs text-accent-teal uppercase tracking-wider font-mono">
                  <span>0{i + 1}</span>
                  <span>·</span>
                  <span>{w.year}</span>
                  <span>·</span>
                  <span>{w.company}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3 text-white group-hover:text-accent-glow transition-colors">
                  {w.title}
                </h2>
                <p className="text-sm text-ink-muted font-mono bg-white/5 p-3 rounded-lg border border-white/5 inline-block">
                  {w.headline_metric}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {w.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-ink-muted border border-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-accent-glow group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
