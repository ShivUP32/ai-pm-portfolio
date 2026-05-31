# AI PM Portfolio — Claude Code Handoff Context

## Who I am
- **Name:** Shiv (GitHub: ShivUP32)
- **Role:** Senior AI Product Manager
- **Location:** Delhi, India
- **OS:** macOS
- **Project folder:** `~/Documents/Portfolio/portfolio`

## What I'm building
A personal portfolio website to showcase my work as a senior AI PM. Already scaffolded, on GitHub, attempting to deploy to Vercel.

## Repo & deployment
- **GitHub repo:** https://github.com/ShivUP32/ai-pm-portfolio
- **Branch:** `main`
- **Deploy target:** Vercel (auto-deploys on push to main)
- **Vercel status:** Build is FAILING — need to fix and redeploy

---

## Tech stack
- Next.js 14.2.5 (App Router)
- TypeScript
- Tailwind CSS (custom palette: ink/paper/amber accent — no purple)
- MDX for case studies (`next-mdx-remote`)
- Framer Motion for subtle animations
- Fonts: Fraunces (display serif), Inter (body), JetBrains Mono (stats)
- `gray-matter` for frontmatter parsing
- `remark-gfm` for GitHub-flavored markdown

---

## Project structure
```
~/Documents/Portfolio/portfolio/
├── content/
│   └── work/                        # MDX case studies
│       ├── 01-llm-product-shipped.mdx
│       ├── 02-internal-ai-turnaround.mdx
│       └── 03-side-project-evals.mdx
├── src/
│   ├── app/
│   │   ├── page.tsx                 # home
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── work/
│   │   │   ├── page.tsx             # work index
│   │   │   └── [slug]/page.tsx      # case study detail
│   │   ├── writing/page.tsx
│   │   ├── about/page.tsx
│   │   └── now/page.tsx
│   ├── components/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── site.ts                  # single config file for personalization
│   └── lib/
│       └── content.ts               # MDX loader
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.js
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

---

## 🔴 ACTIVE BUG — fix this first

### Symptom
Vercel build fails at "Generating static pages" with this error:

```
[Error: [next-mdx-remote] error compiling MDX:
Unexpected character `3` (U+0033) before name, expected a character that can start a name, such as a letter, `$`, or `_`
More information: https://mdxjs.com/docs/troubleshooting-mdx]
{ digest: '175688699' }
```

Build succeeds locally with `npm run build` only sometimes — this is breaking specifically when MDX is parsed for static page generation.

### Root cause
MDX interprets `<` followed by a non-letter as the start of a JSX tag. My case study MDX files contain prose like `<30 seconds`, `<5 minutes`, and possibly `<X` patterns that MDX is choking on. Also possibly issues with `→`, `×`, `−` characters used in metric strings.

### What I've already tried
1. Ran this Mac `sed` to replace `<NUMBER` with `under NUMBER`:
   ```bash
   sed -i '' 's/<\([0-9]\)/under \1/g' content/work/*.mdx
   ```
2. Committed and pushed — Vercel still failing with same error.
3. The Vercel error doesn't tell me which file/line is broken (just the generic message).

### What I need from Claude Code
1. **Find every line in `content/work/*.mdx` that could break MDX parsing.** Look for:
   - `<` followed by anything that isn't a letter, `/`, `!`, `?`
   - Standalone special characters in prose that MDX might misinterpret
   - Frontmatter values containing characters that need escaping
2. **Fix them all** by either:
   - Replacing `<N` with `under N` in prose
   - Wrapping problematic prose snippets in backticks (code spans)
   - Escaping `<` as `\<` where it must stay
3. **Verify the fix locally** by running:
   ```bash
   npm run build
   ```
   The build must complete with no MDX errors.
4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Fix MDX parsing errors across all case studies"
   git push
   ```
5. **Confirm the Vercel deployment succeeds** (or tell me to check the dashboard).

---

## After the bug is fixed — next priorities

In this order:

### Priority 1: Personalize the site
Edit `src/config/site.ts` to replace all placeholder content with my real info. The fields are:
- `name`, `role`, `location`
- `tagline` (1–2 line positioning, opinionated)
- `subline` (current role + previous companies)
- `email`, `social.github`, `social.linkedin`, `social.twitter`
- `now.updated`, `now.text` (what I'm currently reading/building/thinking about)
- `about` (2-paragraph bio)
- `strengths` (4–6 specific things I do well)

Ask me each field one at a time if I haven't filled them in yet.

### Priority 2: Rewrite the 3 case studies
The MDX files in `content/work/` contain **template content** I need to replace with my real work. Each case study follows this structure (keep the structure, swap the substance):

```
1. Hero strip (frontmatter)
2. Context — business problem, why it mattered
3. Why this was hard *because* it was AI — eval/trust/latency/cost angle
4. Key decisions & trade-offs — 3-5 decisions with rationale
5. Artifacts — PRD excerpts, eval rubrics, decision memos
6. Outcome — quantitative + qualitative
7. What I'd do differently — senior signal
```

Ask me about my real projects to fill these in. I have:
- Real shipped AI/ML products at work (Case 1)
- Internal projects to anonymize (Case 2)
- Side projects / experiments (Case 3)

### Priority 3: Add Writing
Create `content/writing/` folder + a loader extension in `src/lib/content.ts` + a working `/writing` page that lists essays from MDX files.

### Priority 4: Optional polish
- Add a real OG image (currently default Next.js one)
- Set up custom domain on Vercel (I'll buy it separately)
- Add Vercel Analytics (toggle in Vercel dashboard)
- Add an "AI Experiments" page with a live Claude-powered demo (highest signal for AI PM)

---

## Design intent (don't change these — they're intentional)

- **Serif display font (Fraunces), not Inter for headings.** Editorial confidence over dev-portfolio cliché.
- **Amber accent color (#d97706), not purple.** Purple-on-white is the AI cliché.
- **Custom palette in `tailwind.config.ts`:** `ink` (text), `paper` (background), `accent` (amber).
- **Subtle grain texture overlay** via SVG noise in `globals.css`.
- **Custom prose-case styles** in `globals.css` (em-dash bullets, serif h2, mono headline metric).
- **`/now` page exists on purpose.** Senior signal — shows active thinking, not just past wins.
- **No skills tag cloud.** Strengths are written as sentences, not buzzwords.

---

## Useful commands

```bash
# Dev
npm install
npm run dev                          # localhost:3000

# Build (must pass before push)
npm run build

# Git workflow
git add .
git commit -m "describe change"
git push                             # auto-deploys to Vercel

# Vercel CLI (optional)
npm i -g vercel
vercel                               # manual deploy
vercel logs                          # see runtime logs
```

---

## Known/expected warnings (ignore these)
- `npm warn deprecated rimraf@3.0.2` — comes from a transitive dep, harmless
- `npm warn deprecated inflight@1.0.6` — same
- `npm warn deprecated eslint@8.57.1` — same
- Any `glob@7.x` warnings — same

These don't break the build. Only stop if you see `Error:` lines.

---

## When you're done
Tell me:
1. ✅ MDX errors fixed (yes/no)
2. ✅ Vercel build status (Ready / Error)
3. ✅ Live URL
4. What you want to tackle next from the priority list above
