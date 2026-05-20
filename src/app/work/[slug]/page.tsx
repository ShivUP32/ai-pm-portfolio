import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <article className="max-w-3xl mx-auto px-6 pt-12 pb-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink mb-12"
      >
        <ArrowLeft className="w-4 h-4" /> All work
      </Link>

      <header className="mb-14 pb-10 border-b border-ink/10">
        <div className="flex flex-wrap gap-2 mb-5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-6">
          {work.title}
        </h1>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <Meta label="Role" value={work.role} />
          <Meta label="Company" value={work.company} />
          <Meta label="Year" value={work.year} />
          <Meta label="Team" value={work.team} />
        </div>

        <div className="mt-8 p-5 bg-ink text-paper rounded-lg">
          <p className="text-xs uppercase tracking-wider text-paper/60 mb-1">
            Headline outcome
          </p>
          <p className="font-mono text-base md:text-lg">{work.headline_metric}</p>
        </div>
      </header>

      <div className="prose-case">
        <MDXRemote
          source={work.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-ink/50 mb-1">{label}</p>
      <p className="text-ink/90">{value}</p>
    </div>
  );
}
