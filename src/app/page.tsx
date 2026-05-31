import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, FileText, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getAllWork } from "@/lib/content";
import { experienceData } from "@/lib/experience";
import VoiceWave from "@/components/VoiceWave";
import BentoGrid from "@/components/BentoGrid";
import ScrollReveal from "@/components/ScrollReveal";
import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";

const getCoverImage = (slug: string) => {
  if (slug.includes('reevo')) return '/images/reevo.png';
  if (slug.includes('knot')) return '/images/knot.png';
  if (slug.includes('hood')) return '/images/hood.png';
  return null;
}

export default function HomePage() {
  const work = getAllWork().filter((w) => w.featured).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative pt-8 md:pt-10 border-x border-transparent xl:border-white/[0.03]">
      {/* Background Glow */}
      <div className="bg-glow"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
        
        {/* LEFT SIDEBAR (Sticky Profile) */}
        <aside className="lg:sticky lg:top-8 self-start flex flex-col gap-6 z-20">
          <ScrollReveal delay={0}>
            <div className="bg-paper-glass backdrop-blur-xl border border-white/10 p-6 lg:p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center">
              
              <div className="relative mb-5 lg:mb-6 w-24 h-24 lg:w-32 lg:h-32 shrink-0 animate-fade-in">
                <div className="absolute inset-0 bg-accent-glow rounded-full blur-[30px] opacity-40 animate-pulse"></div>
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="rounded-full object-cover border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative z-10"
                  priority
                />
              </div>
              
              <h1 className="flex flex-col items-center gap-1 mb-2">
                <span className="font-signature text-3xl lg:text-4xl font-semibold text-white tracking-tight">Shivam</span>
                <span className="font-mono text-xs tracking-[0.3em] text-white/50">SINGH</span>
              </h1>
              <p className="text-accent-glow font-mono text-xs uppercase tracking-widest mb-4">
                {siteConfig.role}
              </p>
              {/* Animated Process Loop Motto */}
              <div className="flex items-center justify-center gap-1.5 mb-8 text-[13px] group cursor-default whitespace-nowrap">
                <span className="font-light text-white/50 group-hover:text-white/90 transition-colors duration-500">Strategise</span>
                
                <svg className="w-2.5 h-2.5 text-white/20 group-hover:text-[#8b5cf6]/60 transition-colors duration-500 transform group-hover:translate-x-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                <span className="font-normal text-white/70 group-hover:text-white transition-colors duration-500 delay-75">Build</span>
                
                <svg className="w-2.5 h-2.5 text-white/20 group-hover:text-[#8b5cf6]/80 transition-colors duration-500 delay-75 transform group-hover:translate-x-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                <span className="font-medium text-white/90 group-hover:text-white transition-colors duration-500 delay-150">Ship</span>
                
                <svg className="w-3 h-3 text-[#8b5cf6] transform group-hover:rotate-180 transition-transform duration-700 ease-in-out delay-150 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] group-hover:from-[#6366f1] group-hover:to-[#8b5cf6] transition-all duration-500">Repeat!</span>
                
                <span className="inline-block hover:scale-125 transition-transform origin-bottom-left cursor-pointer ml-0.5">💪</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col w-full gap-3">
                <Link
                  href="https://drive.google.com/file/d/1dFJWf8xWNqnh-rB43LmsgazQpam0NHyr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full"
                >
                  <FileText className="w-4 h-4" />
                  View CV
                </Link>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Link
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 border border-white/5 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-accent-teal" />
                    LinkedIn
                  </Link>
                  <Link
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 border border-white/5 transition-colors"
                  >
                    <Github className="w-4 h-4 text-accent-blue" />
                    GitHub
                  </Link>
                </div>
              </div>

              {/* Experience Logos Section */}
              <div className="w-full mt-6 pt-6 border-t border-white/10 flex flex-col gap-5 items-center">
                <div className="flex items-center justify-center gap-6 w-full mb-1 mt-1">
                  {/* Left Side */}
                  <div className="text-2xl font-bold text-white tracking-wider whitespace-nowrap">
                    6+ <span className="text-white/60 text-lg font-medium tracking-[0.1em]">YEARS</span>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-[2px] h-10 bg-white/10 rounded-full"></div>

                  {/* Right Side */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase whitespace-nowrap">
                      AI · PRODUCT
                    </div>
                    <div className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase whitespace-nowrap">
                      TECH · GROWTH
                    </div>
                  </div>
                </div>
                <div className="w-full mt-2 p-4 bg-white/5 rounded-[20px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)] border border-white/10">
                  <div className="flex flex-wrap gap-x-3 gap-y-4 items-center justify-center">
                    {[
                      { file: "Reevo.png", name: "Reevo" },
                      { file: "Adda-Education.png", name: "ADDA Education" },
                      { file: "Hood.png", name: "Hood" },
                      { file: "Saint-Gobain.png", name: "Saint-Gobain" },
                      { file: "Careers Adda.png", name: "Careers Adda" },
                      { file: "Knot.Dating.jpeg", name: "Knot Dating" },
                      { file: "Learner.png", name: "Learner" },
                      { file: "grant-thornton.png", name: "Grant Thornton" },
                      { file: "infosys-logo-infosys-icon-free-free-vector.jpg", name: "Infosys" },
                      { file: "Assam-Government.png", name: "Govt. of Assam" },
                      { file: "Prosper-Consultancy-Services.png", name: "Prosper Consultancy" }
                    ].map((logo, idx) => (
                      <div 
                        key={idx} 
                        className="group relative flex items-center justify-center cursor-pointer"
                      >
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1a1c20] text-white text-[10px] font-mono tracking-widest uppercase rounded-lg border border-white/10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap shadow-2xl">
                          {logo.name}
                        </div>
                        
                        <img 
                          src={`/Experience%20Company%20Logo/${encodeURIComponent(logo.file)}`} 
                          alt={logo.name} 
                          className="h-[30px] w-auto max-w-[90px] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.35] transition-transform duration-300 origin-center"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </aside>

        {/* RIGHT FEED (Scrollable content) */}
        <main className="space-y-16 mt-8 lg:mt-0 p-1">
          
          {/* Intro Header */}
          <ScrollReveal delay={0.2}>
            <section className="flex flex-col items-start gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight max-w-2xl text-white mb-4">
                  Building AI Products that Drive Real Impact.
                </h2>
                <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
                  {siteConfig.subline}
                </p>
              </div>
              
              <VoiceWave />
            </section>
          </ScrollReveal>

          {/* 0-1 PRODUCTS BUILT */}
          <ScrollReveal delay={0.1}>
            <section className="relative z-10">
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-glow animate-pulse"></div>
                  0-1 AI Products
                </h2>
                <p className="text-ink-muted mt-2 font-mono text-xs uppercase tracking-widest">
                  Agents, Bots & Co-Pilots across verticals
                </p>
              </div>
              <BentoGrid />
            </section>
          </ScrollReveal>

          {/* ARSENAL & CAPABILITIES */}
          <ScrollReveal delay={0.1}>
            <section className="relative z-10 mb-16">
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-glow animate-pulse"></div>
                  Arsenal & Capabilities
                </h2>
                <p className="text-ink-muted mt-2 font-mono text-xs uppercase tracking-widest">
                  The stack and tools that power the products
                </p>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* Tech & Analytics */}
                <div className="p-6 border border-white/10 rounded-3xl bg-paper-glass backdrop-blur-md hover:-translate-y-1 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] group/card cursor-default">
                  <h3 className="text-sm font-mono tracking-widest uppercase text-accent-teal mb-6 border-b border-white/10 pb-4">
                    Tech & Analytics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
                    {[
                      { name: "Claude", file: "Claude-code.svg.png" },
                      { name: "Open AI", file: "openai-new-logo_f252fc.webp", customClass: "object-cover object-center scale-[1.25]" },
                      { name: "Sarvam", file: "sarvam-ai-indus-logo-icon-hd.webp", customClass: "object-contain p-0.5 scale-[1.35]" },
                      { name: "Eleven Labs", file: "eleven-labs.png" },
                      { name: "Codex", file: "codex-color.png" },
                      { name: "Claude Code", file: "Claude-code.svg.png" },
                      { name: "Moengage", file: "moengage.png" },
                      { name: "CleverTap", file: "clevertap.png" },
                      { name: "Firebase", file: "firebase.png" },
                      { name: "Looker", file: "Looker.webp" },
                      { name: "Google BQ", file: "BQ.png" },
                      { name: "Excel", file: "Excel.svg.png" },
                      { name: "Ads", file: "ads.svg" },
                      { name: "Meta Suite", file: "meta-suite.svg" },
                      { name: "Google Analytics", file: "Google Analytics.jpg" }
                    ].map(tool => (
                      <div key={tool.name} className="flex items-center gap-2 text-sm text-ink-muted group cursor-default">
                        <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shrink-0">
                          <Image src={`/images/colored-logos/${tool.file}`} alt={tool.name} fill className={`transition-all duration-300 grayscale opacity-50 group-hover/card:grayscale-0 group-hover/card:opacity-100 ${tool.customClass || "object-contain p-0.5"}`} unoptimized />
                        </div>
                        <span className="group-hover/card:text-white transition-colors">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Tools */}
                <div className="p-6 border border-white/10 rounded-3xl bg-paper-glass backdrop-blur-md hover:-translate-y-1 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] group/card cursor-default">
                  <h3 className="text-sm font-mono tracking-widest uppercase text-accent-blue mb-6 border-b border-white/10 pb-4">
                    Product Tools
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
                    {[
                      { name: "Jira", file: "jira.svg" },
                      { name: "Lovable", file: "lovable-logo-icon.png" },
                      { name: "Claude Design", file: "claude-design-icon-filled-256.png" },
                      { name: "Notion", file: "notion.png" },
                      { name: "Whimsical", file: "whimsical.png" },
                      { name: "Google Doc", file: "Google_Docs_logo_(2014-2020).svg.png" },
                      { name: "Figma", file: "figma.png" }
                    ].map(tool => (
                      <div key={tool.name} className="flex items-center gap-2 text-sm text-ink-muted group cursor-default">
                        <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative shrink-0">
                          <Image src={`/images/colored-logos/${tool.file}`} alt={tool.name} fill className="object-contain p-0.5 grayscale opacity-50 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300" unoptimized />
                        </div>
                        <span className="group-hover/card:text-white transition-colors">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Skills */}
                <div className="p-6 border border-white/10 rounded-3xl bg-paper-glass backdrop-blur-md hover:-translate-y-1 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] group/card cursor-default">
                  <h3 className="text-sm font-mono tracking-widest uppercase text-accent-glow mb-6 border-b border-white/10 pb-4">
                    Core Skills
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      "LLM Evals", "Voice AI", "Persona Design", 
                      "Agent Orchestration", "Multi Agent Workflow", "Agent Memory Design",
                      "Tool Calling", "AI Guardrails", "Hallucination Control", "A/B Testing", 
                      "Product Strategy", "Product Growth", "GTM Strategy", "Monetisation",
                      "Market Research", "Data Analytics", "Data & Innovation", "GMV Growth",
                      "User Stories", "Design Thinking"
                    ].map(skill => (
                      <li key={skill} className="text-sm text-ink-muted flex items-center gap-3 before:content-[''] before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full hover:text-white transition-colors">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* DEEP DIVE CASE STUDIES */}
          <ScrollReveal delay={0.1}>
            <section>
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></div>
                  Deep Dive Case Studies
                </h2>
                <Link
                  href="/work"
                  className="text-sm text-accent-glow hover:text-white flex items-center gap-1 transition-colors"
                >
                  All <span className="hidden md:inline">case studies</span> <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {work.map((w, i) => {
                  const coverImage = getCoverImage(w.slug);
                  return (
                    <Link
                      key={w.slug}
                      href={`/work/${w.slug}`}
                      className="group block p-5 border border-white/10 rounded-3xl bg-paper-glass hover:bg-white/5 hover:border-accent/40 backdrop-blur-md transition-all h-full flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        {coverImage && (
                          <div className="w-full h-40 relative rounded-2xl overflow-hidden mb-6 border border-white/5">
                            <Image 
                              src={coverImage} 
                              alt={w.title} 
                              fill 
                              className="object-cover object-top grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                            />
                          </div>
                        )}
                        <div className="flex items-center gap-3 mb-4 text-xs font-mono text-accent-teal uppercase tracking-wider">
                          <span>0{i + 1}</span>
                          <span>·</span>
                          <span>{w.year}</span>
                        </div>
                        <h3 className="font-display text-xl font-medium tracking-tight mb-3 text-white group-hover:text-accent-glow transition-colors">
                          {w.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-4 mb-6">
                          {w.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-1 bg-white/5 text-ink-muted rounded border border-white/5 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white font-mono bg-white/5 p-3 rounded-lg border border-white/5">
                          {w.headline_metric}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          {/* EXPERIENCE TIMELINE */}
          <ScrollReveal delay={0.1}>
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-glow animate-pulse"></div>
                  Experience
                </h2>
                <p className="text-ink-muted mt-2 font-mono text-xs uppercase tracking-widest">
                  6+ years | AI · Product · Tech · Growth
                </p>
              </div>

              <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
                {experienceData.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* HOBBY PROJECTS & OPEN SOURCE */}
          <ScrollReveal delay={0.1}>
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
                Hobby Projects & Open Source
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="https://github.com/ShivUP32" target="_blank" className="p-6 rounded-3xl border border-white/10 bg-paper-glass backdrop-blur-md hover:border-accent-blue/40 transition-colors group block">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-display font-medium text-white">Aira</h3>
                    <Github className="w-5 h-5 text-ink-muted group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-ink-muted text-sm mb-6 leading-relaxed">AI Doubt Solver specifically designed for Class 12 students.</p>
                  <span className="text-accent-blue hover:text-white text-xs font-mono flex items-center gap-1 transition-colors">
                    View on Github <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>

                <Link href="https://github.com/ShivUP32" target="_blank" className="p-6 rounded-3xl border border-white/10 bg-paper-glass backdrop-blur-md hover:border-accent-blue/40 transition-colors group block">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-display font-medium text-white">Aira Studio</h3>
                    <Github className="w-5 h-5 text-ink-muted group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-ink-muted text-sm mb-6 leading-relaxed">Visual Agent Builder and Orchestration tool.</p>
                  <span className="text-accent-blue hover:text-white text-xs font-mono flex items-center gap-1 transition-colors">
                    View on Github <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>

                <Link href="https://github.com/ShivUP32" target="_blank" className="p-6 rounded-3xl border border-white/10 bg-paper-glass backdrop-blur-md hover:border-accent-blue/40 transition-colors group block md:col-span-2 lg:col-span-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-display font-medium text-white">ApplyPilot</h3>
                    <Github className="w-5 h-5 text-ink-muted group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-ink-muted text-sm mb-6 leading-relaxed">Automated tool to apply for jobs directly using AI matching.</p>
                  <span className="text-accent-blue hover:text-white text-xs font-mono flex items-center gap-1 transition-colors">
                    View on Github <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </section>
          </ScrollReveal>

          {/* MOBILE ONLY NOW SECTION */}
          <section className="lg:hidden p-6 rounded-3xl border border-white/10 bg-paper-glass backdrop-blur-md">
            <h2 className="font-display text-lg font-semibold tracking-tight text-white mb-3">
              Now
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed mb-4">
              {siteConfig.now.text}
            </p>
            <span className="text-[10px] text-accent-glow font-mono uppercase tracking-wider">
              Updated {siteConfig.now.updated}
            </span>
          </section>

          {/* CONTACT */}
          <ScrollReveal delay={0.1}>
            <section className="pb-10 pt-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white mb-4">
                Get in touch
              </h2>
              <p className="text-ink-muted mb-6 max-w-md">
                I'm always up for a conversation about AI products, evals, and the messy work of shipping LLMs.
              </p>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 font-display text-2xl md:text-3xl text-accent-glow hover:text-white transition-colors link-underline"
              >
                {siteConfig.email}
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </section>
          </ScrollReveal>

          {/* Footer inside the right scrollable column */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
