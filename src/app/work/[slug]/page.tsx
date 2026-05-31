import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Home, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllWork, getWorkBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.headline_metric,
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 pt-12 pb-24 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <Link href="/work" className="hover:text-white transition-colors">
          Work
        </Link>
        <span>/</span>
        <span className="text-white">{work.title}</span>
      </div>

      {/* Top Back Link */}
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
      </div>

      <header className="mb-14 pb-10 border-b border-white/10">
        <div className="flex flex-wrap gap-2 mb-5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-accent-glow/10 text-accent-glow rounded font-medium border border-accent-glow/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6 text-white">
          {work.title}
        </h1>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <Meta label="Role" value={work.role} />
          <Meta label="Company" value={work.company} />
          <Meta label="Year" value={work.year} />
          <Meta label="Team" value={work.team} />
        </div>

        <div className="mt-8 p-6 bg-paper-glass backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
          <p className="text-xs uppercase tracking-wider text-ink-muted mb-2 font-mono">
            Headline outcome
          </p>
          <p className="font-mono text-base md:text-lg text-white font-medium">{work.headline_metric}</p>
        </div>
      </header>

      <div className="prose-case">
        <MDXRemote
          source={work.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {/* Bottom Back Link (Footer of Case Study) */}
      <footer className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-accent-glow transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Return to Home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-white transition-colors"
        >
          View all case studies <ArrowUpRight className="w-4 h-4" />
        </Link>
      </footer>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-ink-muted mb-1 font-mono">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}
