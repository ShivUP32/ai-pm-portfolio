import { siteConfig } from "@/config/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <header className="mb-12">
        <p className="text-sm text-ink/50 uppercase tracking-wider mb-3">About</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
          {siteConfig.name}
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-ink/85 mb-16">
        {siteConfig.about.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="border-t border-ink/10 pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-6">
          What I do well
        </h2>
        <ul className="space-y-3">
          {siteConfig.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-ink/85">
              <span className="text-accent font-mono text-sm pt-1">
                0{i + 1}
              </span>
              <span className="text-base md:text-lg">{s}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
