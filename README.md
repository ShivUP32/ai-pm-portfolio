# AI PM Portfolio

A minimal, modern portfolio for a senior AI Product Manager. Built with Next.js 14, Tailwind, and MDX. Deploys to Vercel in two clicks.

## What's inside

- **Next.js 14** App Router, TypeScript
- **Tailwind CSS** with a custom paper/ink/amber palette (no purple gradients)
- **Fraunces** display serif + **Inter** body + **JetBrains Mono** for stats
- **MDX-based case studies** — write in markdown, no DB
- **Single config file** for all personalization (`src/config/site.ts`)
- Subtle grain texture, fade-up animations on hero
- Routes: `/`, `/work`, `/work/[slug]`, `/writing`, `/about`, `/now`

## Quick start

```bash
# 1. Install
npm install

# 2. Run locally
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
```

## Personalizing — read this part

### 1. Edit `src/config/site.ts`

Everything visible on the site (name, tagline, contact, "Now" section, About copy, strengths) lives in this one file. Edit it first.

### 2. Edit your case studies in `content/work/`

Each `.mdx` file becomes a case study page. The frontmatter at the top controls the metadata:

```yaml
---
title: "Your case study title"
role: "Your role"
company: "Company name or 'Confidential'"
year: "2025"
team: "1 PM · 4 eng · 1 designer"
headline_metric: "Your big stat — keep it punchy"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true     # show on homepage
order: 1           # display order (1, 2, 3...)
---

Markdown content below.
```

The three starter case studies (`01-`, `02-`, `03-`) are templates written in a senior AI PM voice. **Read them, then replace with your real work.** The structure (Context → Why this was hard because it was AI → Decisions → Artifacts → Outcome → What I'd do differently) is the part to keep.

### 3. Add writing

Drop MDX files in `content/writing/` and extend the loader in `src/lib/content.ts` (or ask Claude to do it).

## Deploying to Vercel

### Option A: One-click (easiest)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   gh repo create ai-pm-portfolio --public --source=. --push
   # or use github.com to create the repo and `git push` manually
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click Deploy — no env vars needed
5. Done. Every `git push` from now on auto-deploys.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
# follow the prompts
```

### Custom domain

In Vercel project settings → Domains → Add. Point your domain's DNS at Vercel. Their docs walk you through it.

## Project structure

```
.
├── content/
│   └── work/                   # MDX case studies
├── src/
│   ├── app/
│   │   ├── page.tsx            # home
│   │   ├── work/
│   │   │   ├── page.tsx        # work index
│   │   │   └── [slug]/page.tsx # case study detail
│   │   ├── writing/page.tsx
│   │   ├── about/page.tsx
│   │   ├── now/page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── site.ts             # ← edit me first
│   └── lib/
│       └── content.ts          # MDX loader
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Launch checklist

Before you share the URL:

- [ ] Replaced `Your Name` everywhere in `src/config/site.ts`
- [ ] Rewrote all 3 case studies with your real work (or anonymized real work)
- [ ] Updated the `now` section with this month's date
- [ ] Replaced placeholder email + social links
- [ ] Set up a custom domain on Vercel (optional but worth it — costs ~$12/yr)
- [ ] Tested on mobile
- [ ] Wrote at least one essay in `content/writing/`
- [ ] Added a real OG image (replace default Next.js)

## Why these choices

- **Serif display font (Fraunces).** Most dev portfolios use Inter/Space Grotesk. Serif signals editorial confidence — appropriate for senior PMs who lead with writing.
- **Amber accent, not purple.** Purple-on-white is the AI-product cliché. Amber feels considered.
- **`/now` page.** Senior signal. Shows you're actively thinking, not just listing past wins.
- **No "Skills" tag cloud.** Senior PMs are evaluated on judgment, not skills. Strengths are written as sentences.
- **Decisions + trade-offs over outcomes.** The case study template forces you to show your thinking, which is what hiring managers actually want.
