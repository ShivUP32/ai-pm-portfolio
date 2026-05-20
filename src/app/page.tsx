import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getAllWork } from "@/lib/content";

export default function HomePage() {
  const work = getAllWork().filter((w) => w.featured).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* HERO */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="text-sm text-ink/60 mb-6 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle"></span>
          {siteConfig.role} · {siteConfig.location}
        </p>
        <h1
          className="font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight max-w-4xl animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {siteConfig.tagline}
        </h1>
        <p
          className="mt-8 text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          {siteConfig.subline}
        </p>
      </section>

      {/* FEATURED WORK */}
      <section className="py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm text-ink/60 hover:text-ink flex items-center gap-1"
          >
            All work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-4">
          {work.map((w, i) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group block p-6 md:p-8 border border-ink/10 rounded-lg bg-paper-soft/40 hover:bg-paper-soft hover:border-ink/20 transition-all"
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
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-sm text-ink/70 font-mono">
                    {w.headline_metric}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-ink/5 text-ink/60 rounded"
                      >
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
      </section>

      {/* NOW */}
      <section className="py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Now
          </h2>
          <span className="text-xs text-ink/50 font-mono uppercase tracking-wider">
            Updated {siteConfig.now.updated}
          </span>
        </div>
        <p className="text-lg text-ink/80 leading-relaxed max-w-3xl">
          {siteConfig.now.text}
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-16 border-t border-ink/10">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-4">
          Get in touch
        </h2>
        <p className="text-lg text-ink/70 mb-6 max-w-2xl">
          I'm always up for a conversation about AI products, evals, and the messy work of shipping LLMs.
        </p>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 font-display text-2xl md:text-3xl text-accent hover:text-ink transition-colors link-underline"
        >
          {siteConfig.email}
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
