import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

export const metadata = { title: "Now" };

export default function NowPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">Now</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-10">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3">Now</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white">
          What I'm thinking about
        </h1>
        <p className="mt-4 text-sm text-accent-glow font-mono uppercase tracking-wider">
          Last updated · {siteConfig.now.updated}
        </p>
      </header>

      <div className="text-lg leading-relaxed text-ink-muted space-y-6 p-6 bg-paper-glass backdrop-blur-md border border-white/10 rounded-2xl">
        <p>{siteConfig.now.text}</p>
      </div>



      <Footer />
    </div>
  );
}
