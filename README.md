# Jesse HQ — Digital Headquarters

The founder site of Jesse Schulman. Not a portfolio — a founder brand.
Editorial, minimal, warm. Built to still feel premium five years from now.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, philosophy intro, selected work, Now, closing CTA |
| `/projects` | Museum exhibits — Problem / Solution / Outcome per project |
| `/story` | "Why I Build" — founder story in chapters, no CV |
| `/philosophy` | One conviction per screen, large editorial type |
| `/thinking` | Essays (full-length, written) with premium cards |
| `/thinking/[slug]` | Long-form essay reading experience |
| `/timeline` | Founder timeline with scroll-linked progress line |
| `/contact` | Email / LinkedIn / Book a call — no form |

## Running it

Requires Node (installed via fnm at `%APPDATA%\fnm\node-versions\v24.15.0`).

```
npm install
npm run dev      # develop on http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing content (no code required)

All content lives in `/content` as plain data:

- `content/site.ts` — name, email, LinkedIn, booking link, domain
- `content/projects.ts` — project exhibits (add future ventures here)
- `content/essays.ts` — essays (add one object = new essay page, card, sitemap entry)
- `content/timeline.ts` — milestones (add entries; `"ahead"` status renders under "What's ahead")

## Before going live — placeholders to replace

1. `content/site.ts` → real **domain**, **LinkedIn URL**, **booking link** (Cal.com/Calendly)
2. `components/project-visual.tsx` → swap interface studies for **real product screenshots** when ready (drop images in `/public`)
3. `app/story/page.tsx` → personalise the chapter prose — it's written from the founder-story brief, and reads best with Jesse's own specifics woven in

## Design system

- **Palette:** warm paper `#faf7f1`, ink `#211d17`, muted `#6f675a`, hairline `#e8e1d3`, accent (burnt sienna) `#8f4a2a` — defined in `app/globals.css`
- **Type:** Fraunces (display + long-form serif), Inter (UI/body)
- **Motion:** one `Reveal` component (fade-up on scroll, respects `prefers-reduced-motion`); scroll-linked timeline line
- **No** gradients, glow, glass, or neon — by design constraint
