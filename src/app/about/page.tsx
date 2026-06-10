import Link from "next/link";
import { ArrowLeft, Home, HelpCircle, Laptop } from "lucide-react";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative">
      <div className="bg-glow"></div>

      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3 h-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-white">About</span>
      </div>

      {/* Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent-glow hover:text-white transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>

      <header className="mb-12">
        <p className="text-sm text-ink-muted uppercase tracking-wider mb-3">About</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight text-white">
          {siteConfig.name}
        </h1>
      </header>

      {/* Structured Premium Layout */}
      <div className="space-y-8 text-lg leading-relaxed text-ink-muted mb-16">
        
        {/* Pitch / Hook */}
        <p className="text-xl md:text-2xl text-white font-medium leading-normal tracking-tight">
          I build AI products where <span className="text-accent-glow">the model is the product</span> — voice and chat agents, multi-agent systems, and the messy infrastructure underneath that nobody wants to talk about: orchestration, memory, tool-calling, guardrails and evals.
        </p>

        {/* Narrative / Context */}
        <p>
          6+ years in, across Consumer, EdTech, and Enterprise. Most recently at Adda Education, where I ran Reevo to 1.5L+ downloads and 6k+ DAU. Shipped an AI Doubt Solver, then turned the underlying multi-agent setup into a framework other product teams here build on. Before Adda, I was at Hood through the Knot.dating pivot, and rebuilt our growth stack in-house after CleverTap got too expensive — cutting that cost by 90%. Going further back, I spent time at Infosys on a large enterprise client where the account grew from $100M to $180M and the program picked up a Gold rating along the way.
        </p>

        {/* Callout box: What actually keeps me up */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow/5 rounded-full blur-2xl"></div>
          <h3 className="font-display text-xl font-medium text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-accent-glow" />
            What actually keeps me up:
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-accent-glow font-mono pt-0.5">•</span>
              <span className="text-base text-ink-muted leading-relaxed">
                How do you evaluate an agent in production when there's no ground truth?
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-accent-glow font-mono pt-0.5">•</span>
              <span className="text-base text-ink-muted leading-relaxed">
                When should an LLM make the call vs. when do you wrap it in deterministic logic?
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-accent-glow font-mono pt-0.5">•</span>
              <span className="text-base text-ink-muted leading-relaxed">
                How do you keep a persona from drifting after 50 turns?
              </span>
            </li>
          </ul>
        </div>

        {/* Focus & Guardrails */}
        <p>
          I spend most of my time thinking about evals, guardrails, hallucination control — the unsexy middle layer where AI products actually live or die.
        </p>

        {/* Day-to-day Stack capsules */}
        <div className="pt-4 border-t border-white/5">
          <h3 className="text-xs font-mono tracking-wider uppercase text-white/40 mb-4 flex items-center gap-2">
            <Laptop className="w-4 h-4 text-accent-blue" />
            Day-to-day Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Livekit", "Sarvam", "ElevenLabs", "Claude", "Codex", "Lovable",
              "SQL", "BigQuery", "Looker", "MoEngage", "Figma", "Jira"
            ].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.03] border border-white/5 text-white/70 hover:text-white hover:border-white/15 hover:bg-white/[0.05] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact/CTA */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-base md:text-lg">
            If you're building something real in voice agents, multi-agent systems, or AI-led growth —{" "}
            <Link href={`mailto:${siteConfig.email}`} className="text-accent-glow font-semibold hover:text-white transition-colors link-underline">
              LET'S TALK
            </Link>
            .
          </p>
        </div>

      </div>

      {/* What I do well (Strengths) */}
      <section className="border-t border-white/10 pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-6 text-white flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></div>
          What I do well
        </h2>
        <ul className="space-y-4">
          {siteConfig.strengths.map((s, i) => (
            <li key={i} className="flex gap-4 text-ink-muted items-start p-4 bg-paper-glass backdrop-blur-sm border border-white/5 rounded-xl">
              <span className="text-accent-teal font-mono text-sm pt-0.5">
                0{i + 1}
              </span>
              <span className="text-base md:text-lg">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}
