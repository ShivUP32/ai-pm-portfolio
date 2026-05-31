import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">Writing</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-12">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
          Writing
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight text-white">
          Essays & Teardowns
        </h1>
        <p className="mt-6 text-lg text-ink-muted max-w-2xl leading-relaxed">
          Coming soon. Drop MDX files in <code className="text-sm bg-white/10 px-2 py-1 rounded-md font-mono text-accent-glow border border-white/5">content/writing/</code> and they'll show up here.
        </p>
      </header>
    </div>
  );
}
