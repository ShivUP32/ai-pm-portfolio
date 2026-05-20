// Edit this single file to personalize your portfolio.
// Everything on the site is driven from here.

export const siteConfig = {
  // ─── Identity ─────────────────────────────────────────────
  name: "Your Name",
  role: "Senior Product Manager, AI",
  location: "Delhi, India",

  // ─── Hero positioning ─────────────────────────────────────
  // Keep this opinionated. Two lines max.
  tagline: "I lead AI PM teams shipping LLM products that earn user trust.",
  subline: "Currently building [thing] at [company]. Previously [company], [company].",

  // ─── Contact ──────────────────────────────────────────────
  email: "you@domain.com",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },

  // ─── Now (update monthly) ─────────────────────────────────
  // Big signal for senior PMs. Update it. Date it.
  now: {
    updated: "May 2026",
    text: "Reading: 'Designing Machine Learning Systems' (Chip Huyen). Building: a small eval harness for agentic workflows. Thinking about: how to measure trust in AI products without surveys.",
  },

  // ─── About blurb ──────────────────────────────────────────
  about: `I'm a senior AI PM focused on the messy middle of LLM product development — evals, trust, latency-vs-quality trade-offs, and the org work of getting research and product to ship together.

Over the last five years I've shipped AI features at [company] and [company], led teams of PMs through 0→1 LLM launches, and learned the hard way that the hardest part of an AI product is rarely the model.`,

  // ─── What I'm good at ────────────────────────────────────
  // 4-6 items. Specific, not generic.
  strengths: [
    "0→1 LLM product launches with real eval frameworks",
    "Turning around stalled AI products by reframing the unit of work",
    "Translating between applied scientists and product teams",
    "Building PM teams that ship AI with judgment, not hype",
  ],
};
