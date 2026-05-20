import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllWork } from "@/lib/content";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  const work = getAllWork();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
      <header className="mb-16">
        <p className="text-sm text-ink/50 uppercase tracking-wider mb-3">Case Studies</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
          Work
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
          A selection of AI product work — what I shipped, how I decided, and what I'd do differently.
        </p>
      </header>

      <div className="grid gap-3">
        {work.map((w, i) => (
          <Link
            key={w.slug}
            href={`/work/${w.slug}`}
            className="group block p-6 md:p-8 border border-ink/10 rounded-lg hover:bg-paper-soft hover:border-ink/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs text-ink/50 uppercase tracking-wider">
                  <span>0{i + 1}</span>
                  <span>·</span>
                  <span>{w.year}</span>
                  <span>·</span>
                  <span>{w.company}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {w.title}
                </h2>
                <p className="text-sm text-ink/70 font-mono">{w.headline_metric}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {w.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-ink/5 text-ink/60 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
