# UnbiaslyAI — Classic Black Redesign

Apple/Anthropic-grade redesign of the UnbiaslyAI marketing site. Pure black, single saffron accent, editorial typography. Next.js 14.2, TypeScript, Tailwind, shadcn/ui, TanStack Query.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production: `npm run build && npm start`.

## What's on the homepage

One long single page, top to bottom:

1. **Hero** — giant three-line headline, centered phone, four stat callouts
2. **About** — copy on the left, **three columns of phone screens drifting at different speeds** on the right, three app store CTAs (iOS, Android, Indus AppStore)
3. **Product** — the four-stage pipeline (Ingest → Analyse → Attribute → Summarise) + latency stats
4. **Features** — six cards: 60-word summaries, source attribution, framing analysis, Indic-first AI, recommendation-first, audio/video
5. **ABCDEP** — the six categories that own Indian attention
6. **Formats** — Text (live) / Audio (12 months) / Video (12 months)
7. **Creators** — Journalists / Creators / Institutions + "Apply for early access" CTA
8. **Mission** — Vision / Mission / Community / Media literacy
9. **Team** — five co-founders with real photos including Saharsh
10. **Advisors** — three honorary advisors
11. **Final CTA** — big closing headline + three app store buttons

## Live News stays standalone

`/live-news` keeps the exact API integration from the previous build — same `useInfiniteQuery`, same `/live-news/api` proxy, same EN/HI switch, same mobile filter drawer. Just redesigned in the classic black aesthetic.

## Environment

Backend URL is in `.env.development` / `.env.production`:

```
NEXT_PUBLIC_UNBIASLY_BASE_API_URL=http://api.unbiasly.ai
```

Vercel picks this up automatically. If your backend has moved, update both files.

## Where things live

```
app/
  page.tsx                Composes all homepage sections
  layout.tsx              Header + Footer + fonts (loaded via <link> tags)
  globals.css             Pure black tokens, glow utilities, animations
  live-news/              The only other route — feed with infinite scroll
  privacy-policy/
  terms-and-conditions/
  not-found.tsx
  subscribe/api/route.ts  Newsletter proxy

components/
  sections/               One file per homepage section (hero, about, product, features, abcdep, formats, creators, mission, team, final-cta)
  custom/                 Shared shell — Header, Footer, Subscribe, AppStores, PageTitle, etc.
  ui/                     shadcn/ui primitives (Sheet, Drawer, Switch, Form, Input, Carousel, etc.)

service/                  Backend API client — unchanged
public/                   Logos, phone screens, founder photos, app store badges
```

## Design tokens (`tailwind.config.ts` + `globals.css`)

- **Background**: `#000000` pure black
- **Foreground**: `#FAFAFA` off-white
- **Accent**: `#E6481E` (saffron-red, from the logo)
- **Fonts**: `display` Instrument Serif · `sans` Inter · `mono` JetBrains Mono
- **Utilities**: `.display` / `.display-italic`, `.eyebrow`, `.mono`, `.mesh-glow`, `.scroll-up-slow|med|fast`, `.scroll-down-med`, `.btn-primary`, `.btn-ghost`, `.lift-card`, `.link-reveal`, `.mask-vertical`, `.mask-horizontal`, `.pulse-dot`, `.gentle-float`

## Notes

- Fonts loaded via `<link>` in `app/layout.tsx` for build-environment portability (works identically in production).
- All copy is sourced from the YC application: AI-verified news for India, recommendation-first not publisher-first, AI audio + AI-anchor video roadmap, verified journalists & creators with revenue-share, 60-word summaries, native Indic-language framing analysis.
- Removed unused `lib/redux/`, `lib/constants/`, and career-related utilities since careers/blog aren't in scope for this rebuild — saves bundle size and removes broken imports. If you want to bring careers back later, restore those folders from your prior repo or ask me to rebuild them in the new aesthetic.
- `next.config.mjs` keeps `images.unoptimized: true` so Vercel doesn't bill image transforms.
