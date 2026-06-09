import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, Home } from "lucide-react";
import { getAllWork } from "@/lib/content";

export const metadata = {
  title: "Work",
};

const getCoverImage = (slug: string) => {
  if (slug.includes('reevo')) {
    return { 
      src: '/images/reevo.jpg', 
      className: 'object-cover object-top scale-100 origin-top group-hover:scale-[1.03]' 
    };
  }
  if (slug.includes('knot')) {
    return { 
      src: '/images/knot.png', 
      className: 'object-cover object-top scale-100 origin-top group-hover:scale-[1.03]' 
    };
  }
  if (slug.includes('hood')) {
    return { 
      src: '/images/hood.jpg', 
      className: 'object-cover object-[85%_0%] scale-100 origin-[85%_0%] group-hover:scale-[1.03]' 
    };
  }
  return null;
}

function renderMetric(metric: string) {
  const regex = /(₹?\d+(?:\.\d+)?[Kk]\+?|\d+[Xx])/g;
  const parts = metric.split(regex);
  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <span 
          key={index} 
          className="inline-block font-semibold text-accent-teal/80 group-hover:text-accent-teal group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.4)] group-hover:scale-[1.02] transition-all duration-500 ease-in-out"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

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

      <div className="grid gap-6">
        {work.map((w, i) => {
          const coverImage = getCoverImage(w.slug);
          return (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group block p-5 md:p-6 border border-white/10 rounded-3xl bg-paper-glass hover:bg-white/5 hover:border-accent/40 backdrop-blur-md transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 items-stretch">
                {/* Featured Image Container */}
                {coverImage && (
                  <div className="w-full md:w-64 h-44 md:h-auto min-h-[176px] relative rounded-2xl overflow-hidden border border-white/5 shrink-0">
                    <Image
                      src={coverImage.src}
                      alt={w.title}
                      fill
                      className={`${coverImage.className} grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
                    />
                  </div>
                )}
                
                {/* Text Contents */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 text-xs text-accent-teal uppercase tracking-wider font-mono">
                        <span>0{i + 1}</span>
                        <span>·</span>
                        <span>{w.year}</span>
                        <span>·</span>
                        <span>{w.company}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>
                    
                    <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3 text-white group-hover:text-accent-glow transition-colors">
                      {w.title}
                    </h2>
                    
                    {/* Dynamic Metric Box */}
                    <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-accent-teal/20 group-hover:bg-accent-teal/[0.01] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] inline-block">
                      <p className="text-sm text-white/60 group-hover:text-white/95 transition-colors duration-500 leading-relaxed font-sans">
                        {renderMetric(w.headline_metric)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {w.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-ink-muted border border-white/5 rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
