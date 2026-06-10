// Edit this single file to personalize your portfolio.
// Everything on the site is driven from here.

export const siteConfig = {
  // ─── Identity ─────────────────────────────────────────────
  name: "Shivam Singh",
  role: "AI Product Manager",
  location: "Gurugram, India",

  // ─── Hero positioning ─────────────────────────────────────
  // Keep this opinionated. Two lines max.
  tagline: "Strategise > Build > Ship > Repeat! 💪",
  subline: "Currently building Reevo at Adda Education. Previously Hood, Infosys, Grant Thornton and PCS.",

  // ─── Contact ──────────────────────────────────────────────
  email: "shivamsingh0013@gmail.com",
  social: {
    github: "https://github.com/ShivUP32",
    linkedin: "https://www.linkedin.com/in/itsshivamsingh/",
    twitter: "https://twitter.com/yourhandle", // Keep placeholder if none provided
  },

  // ─── Now (update monthly) ─────────────────────────────────
  // Big signal for senior PMs. Update it. Date it.
  now: {
    updated: "May 2026",
    text: "Building: 0-to-1 AI products at ADDA EDUCATION. Scaling: Multi-agent frameworks for Voice and Chat. Exploring: New ways to solve D1 retention with personalized AI agents.",
  },

  // ─── About blurb ──────────────────────────────────────────
  about: `I build AI products where the model is the product - voice and chat agents, multi-agent systems, and the messy infrastructure underneath that nobody wants to talk about: orchestration, memory, tool-calling, guardrails and evals.

6+ years in, across Consumer, EdTech, and Enterprise. Most recently at Adda Education, where I ran Reevo to 1.5L+ downloads and 6k+ DAU. Shipped an AI Doubt Solver, then turned the underlying multi-agent setup into a framework other product teams here build on. Before Adda, I was at Hood through the Knot.dating pivot, and rebuilt our growth stack in-house after CleverTap got too expensive - cut that cost by 90%. Going further back, I spent time at Infosys on a large enterprise client where the account grew from $100M to $180M and the program picked up a Gold rating along the way.

What actually keeps me up:
- How do you evaluate an agent in production when there's no ground truth?
- When should an LLM make the call vs. when do you wrap it in deterministic logic?
- How do you keep a persona from drifting after 50 turns?

I spend most of my time thinking about evals, guardrails, hallucination control - the unsexy middle layer where AI products actually live or die.

Day-to-day stack: Livekit, Sarvam, ElevenLabs, Claude, Codex, Lovable, and the usual PM kit (SQL, BigQuery, Looker, MoEngage, Figma, Jira).

If you're building something real in voice agents, multi-agent systems, or AI-led growth - LET'S TALK.`,

  // ─── What I'm good at ────────────────────────────────────
  // 4-6 items. Specific, not generic.
  strengths: [
    "0→1 AI product engineering & delivery (Reevo, Knot.dating pivot)",
    "Designing & deploying reusable Multi-Agent Frameworks",
    "Core AI middleware: orchestration, memory, tool-calling, guardrails & evals",
    "Data-driven growth stack optimization (90% CleverTap cost reduction)",
    "Large-scale program governance (growing enterprise accounts from $100M to $180M)",
  ],

  // ─── LinkedIn Logs Posts ──────────────────────────────────
  logs: [
    {
      id: "voice-agent-turn-ratio",
      title: "Riya Voice Agent: Less Talking, More Learning",
      date: "May 26, 2026",
      excerpt: "The best voice agent for a learning product is the one that talks the LEAST. We built Riya for Reevo, an English speaking practice app, with a strict target: User-to-Agent Turn Ratio > 1.",
      url: "https://www.linkedin.com/posts/itsshivamsingh_the-best-voice-agent-for-a-learning-product-share-7464937297910763521-Eq5R/",
      tags: ["Voice Agents", "Metrics", "EdTech"],
      image: "/images/linkedin-post-01.png",
      bodySnippet: "The best voice agent for a learning product is the one that talks the LEAST.\n\nTook us a while to learn this.\n\nWe built Riya for Reevo, an English speaking practice app.\n\n𝗧𝗵𝗲 𝗴𝗼𝗮𝗹: 𝗚𝗲𝘁 𝘂𝘀𝗲𝗿𝘀 𝘁𝗼 𝘁𝗮𝗹𝗸 𝗺𝗼𝗿𝗲. We watched one metric closely...",
      insights: [
        "Sessions where users led were roughly 4X longer than when the agent led.",
        "Rebuilt interruption logic, cut default agent text, and shifted persona to follow-up questions.",
        "A side benefit: TTS costs 5x STT, so reducing agent speech cut audio costs significantly."
      ]
    },
    {
      id: "voice-agent-latency-accents",
      title: "Our Voice Agent for Reevo: The Hardest Parts of Shipping Voice",
      date: "May 21, 2026",
      excerpt: "All our Voice Agent Evals looked great, but then we shipped, and users hated it. We learned three major lessons about what metrics actually define the voice product.",
      url: "https://www.linkedin.com/posts/itsshivamsingh_our-voice-agent-for-reevo-english-speaking-share-7463119835036717056-oaeE/",
      tags: ["Voice Engineering", "Evals", "Latency"],
      image: "/images/linkedin-post-02.png",
      bodySnippet: "Our Voice Agent for Reevo (English speaking practice) had a problem.\n\nAll our Voice Agent Evals looked great and by every metric, Riya (our agent) was working awesome.\n\nThen we shipped, and users hated her...",
      insights: [
        "Pipeline speed is not the same as endpointing. Latency was under 900ms, but we needed deliberate pause walls for complex/reflective queries.",
        "Indian accents broke the pipeline in ways that our urban-biased test data evals completely missed.",
        "The agent talked too much initially. Rebuilding interruption logic and giving it permission to leave space restored CSAT and Play Store ratings."
      ]
    },
    {
      id: "skills-new-rag",
      title: "Skills Are the New RAG (And How Teams Will Build Them Badly)",
      date: "May 20, 2026",
      excerpt: "Lovable, Anthropic, OpenAI, MCP, Cursor—modular context that loads on demand is being rediscovered. Skills are the new RAG, and here's how to ship them properly.",
      url: "https://www.linkedin.com/posts/itsshivamsingh_lovable-launched-skills-this-week-anthropic-share-7462642426726363136-lKKz/",
      tags: ["AI Abstractions", "Prompt Engineering", "MCP"],
      image: "/images/linkedin-post-03.png",
      bodySnippet: "Lovable launched SKILLS this week. Anthropic shipped Skills earlier. OpenAI has Custom GPTs. MCP exists. Cursor has rules.\n\nThis isn't five different features. It's one raw capability being rediscovered...",
      insights: [
        "Skills don't replace prompting. A great skill on top of a vague prompt still produces vague output.",
        "Small changes in prompt instructions can quietly corrupt the model's behavior layers downstream.",
        "Skills go stale faster than docs. They require active version control, ownership, and an eval loop."
      ]
    },
    {
      id: "multi-agent-doubt-solver",
      title: "Lessons from Building a Multi-Agent Framework: 3 Dos and 2 Don'ts",
      date: "May 19, 2026",
      excerpt: "We built a Multi-Agent Framework for a Doubt Solver, Tutor, and Support Agent. Here is what we would double down on, and what we would undo.",
      url: "https://www.linkedin.com/posts/itsshivamsingh_we-built-a-multi-agent-framework-for-doubt-share-7462378960178556929-5JyO/",
      tags: ["Multi-Agent Systems", "System Architecture", "Product Lessons"],
      image: "/images/linkedin-post-04.png",
      bodySnippet: "We built a Multi-Agent Framework for Doubt Solver, English Tutor and Support Agent. Here are 3 things I would do again, and 2 I would undo.\n\nWould do again:\n1. Keep orchestration separate...",
      insights: [
        "DO: Keep orchestration separate from agents, build eval harnesses early, and cap tools to 4 sharp ones per agent.",
        "UNDO: Building for general-purpose flexibility too early, and over-engineering memory (recency beats completeness)."
      ]
    }
  ]
};

