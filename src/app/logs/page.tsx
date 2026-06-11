import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, ArrowUpRight, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Logs",
  description: "Product management insights, voice engineering learnings, and multi-agent framework deep-dives.",
};

export default function LogsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider animate-fade-in">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">Logs</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group animate-fade-in">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-12 animate-fade-up">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
          Builder Logs
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight text-white">
          Logs
        </h1>
        <p className="mt-6 text-lg text-ink-muted max-w-2xl leading-relaxed">
          Observations on shipping production voice agents, building orchestration layers, eval systems, and scaling multi-agent infrastructure.
        </p>
      </header>

      {/* LinkedIn Cards List */}
      <div className="grid gap-8 mt-12 animate-fade-up">
        {siteConfig.logs && siteConfig.logs.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 md:p-8 border border-white/10 rounded-3xl bg-paper-glass hover:bg-white/5 hover:border-accent-teal/40 backdrop-blur-md transition-all duration-300 relative shadow-xl"
          >
            {/* Top Row: Date, Tags & Brand Icon */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                  {post.date}
                </span>
                <span className="text-ink-faint text-xs font-mono select-none">·</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs px-2 py-0.5 bg-white/5 text-ink-muted border border-white/5 rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-all duration-300">
                <Linkedin className="w-4 h-4 text-ink-muted group-hover:text-accent-blue transition-colors duration-300" />
              </div>
            </div>

            {/* Grid Layout: Left contents & Right Original Post Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Text & Insights */}
              <div className="flex-1">
                {/* Title & Excerpt */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-accent-glow transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-ink-soft text-base md:text-lg leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                </div>

                {/* Takeaways Inner Container */}
                <div className="mt-6 p-5 rounded-2xl bg-white/[0.01] border border-white/5 group-hover:border-accent-teal/15 group-hover:bg-accent-teal/[0.005] transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                  <h3 className="text-xs uppercase tracking-wider font-mono text-accent-teal/80 mb-3">
                    Key Insights & Decisions
                  </h3>
                  <ul className="space-y-3">
                    {post.insights.map((insight, idx) => (
                      <li key={idx} className="text-sm md:text-base text-ink-soft flex items-start gap-2.5 leading-relaxed">
                        <span className="text-accent-teal/60 group-hover:text-accent-teal select-none mt-1 shrink-0 font-mono text-sm leading-none">→</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Original LinkedIn Post Screenshot Preview */}
              {post.image && (
                <div className="w-full lg:w-[300px] shrink-0 pointer-events-none">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto rounded-2xl border border-white/5 md:group-hover:border-accent-teal/25 transition-all duration-700 ease-out shadow-[0_4px_25px_rgba(0,0,0,0.5)] md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100 scale-100 md:group-hover:scale-[1.012]"
                  />
                </div>
              )}

            </div>

            {/* Footer Row */}
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
              <span className="text-xs font-mono text-ink-muted/50 uppercase tracking-wider">
                linkedin.com/in/itsshivamsingh
              </span>
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-glow group-hover:text-white transition-colors duration-300">
                <span>View on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
