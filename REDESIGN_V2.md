# Redesign v2 — what changed and why

## Color system
Hybrid: dark `#0A0A0A` for showcase/emotion, cream paper `#F5F1EA` for clarity/credibility. Three light sections break the dark page into a rhythm. Editorial feel (NYT, FT, The Atlantic) instead of generic AI dark mode.

New functional colors:
- Verified green `#2D6A4F` (and dark variant `#7AC29A`)
- Flagged red `#B23A48` (and dark variant `#E58794`)
- Accent orange `#E6481E` (unchanged)

All exposed as utility classes: `section-paper`, `section-paper-grain`, `ink`, `ink-60`, `bg-verified-soft`, `bg-flagged-soft`, `flag-mark`, `btn-ink`, etc.

## New page structure (13 sections, alternating rhythm)

1. **Hero (dark)** — Headline + live product strip cycling three real stories with source pill, framing flag highlighted in-line, 60-word summary, language badge. Auto-cycles every 6.5s with manual dots.
2. **Trust marquee (dark band)** — Slow horizontal scroll: Carnegie Mellon, IIT Delhi, LSE, Government of India, MIT, Stanford CodeX, India Today Group, AI4Bharat, Sarvam APIs, Indus AppStore.
3. **Framing Analyzer (PAPER)** — Interactive demo. Paste a headline, see framing score (0–100), attribution status, flagged words highlighted inline, list of flag reasons. Three sample headlines pre-loaded. Real client-side analysis, not faked.
4. **About (dark)** — Existing three-column moving phones, cleaner headline.
5. **How it works (dark)** — Four-step pipeline.
6. **Today on UnbiaslyAI (dark)** — Live counter: stories analyzed, framing flags raised, languages, verified sources. Each with a sparkline. Numbers tick gently.
7. **Positioning (PAPER)** — Comparison table vs Inshorts, Dailyhunt, Google News, X. Seven capabilities, color-coded checkmarks (green/yes, gray/partial, red/no). UnbiaslyAI column tinted orange.
8. **Why now (dark, red-tinted)** — Three urgency stats: 78% on WhatsApp forwards, 5x AI-generated content, 22 languages with no native AI trust tooling.
9. **ABCDEP wedge (dark)** — Six categories with Devanagari at display scale alongside Latin, real sample-story descriptions.
10. **Features (dark)** — Six trust pillars.
11. **Team & advisors (PAPER)** — Founders and three advisors on cream background. Grayscale-to-color photo treatment. Pedigree as the lead, bio underneath.
12. **Creators (dark)** — Supply-side pitch.
13. **Formats + Final CTA (dark)** — Roadmap then app store CTAs.

## Other craft fixes

- Removed Mission section (folded into Why Now and Team)
- Removed single floating phone in hero (already done)
- Removed huge UnbiaslyAI footer nameplate (already done)
- Reduced italic accent from 8 places to 4
- Added Devanagari at display size in ABCDEP (real Indic credibility, not just a token icon)
- Added `tabular-nums` to all stats and counters
- Sparklines on every counter (data company → every number should look like data)
- Marquee animation for credentials band
- New `btn-ink` and `btn-ink-ghost` for paper sections

## What was prioritized vs what I deferred

Built everything from the strategic critique. The framing analyzer is the highest-impact addition — it converts visitors into believers by letting them test the product on text of their choice in the browser. The analysis is intentionally simple (loaded-word matching + attribution triggers) so it runs instantly and never lies about being a demo. The full pipeline does much more.

Two things I did not build:
- Live news API integration in the Today counter — uses deterministic mock numbers that tick up. Real pipeline numbers would require a backend endpoint exposing aggregates.
- Real press-mention logos — the marquee currently uses credential text. Swap to PNG logos once you have UNDP, India Today, etc. permissions.
