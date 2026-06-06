"use client";
import { useEffect, useState } from "react";

type Chapter = { id: string; label: string };

const CHAPTERS: Chapter[] = [
  { id: "hero", label: "Index" },
  { id: "trust", label: "Built by" },
  { id: "analyzer", label: "Analyzer" },
  { id: "about", label: "About" },
  { id: "formats", label: "Formats" },
  { id: "product", label: "Pipeline" },
  { id: "manifesto", label: "Manifesto" },
  { id: "positioning", label: "Position" },
  { id: "whynow", label: "Why now" },
  { id: "abcdep", label: "Wedge" },
  { id: "features", label: "What else" },
  { id: "team", label: "Team" },
  { id: "quote", label: "Voices" },
  { id: "closing", label: "Get the app" },
];

export default function ChapterRail() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal after we've scrolled past hero
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Track active section
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean
    ) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        // Find the most-visible section
        let best: { idx: number; ratio: number } | null = null;
        entries.forEach((e) => {
          const idx = sections.indexOf(e.target as HTMLElement);
          if (idx === -1) return;
          if (e.isIntersecting) {
            const r = e.intersectionRatio;
            if (best === null || r > best.ratio) {
              best = { idx, ratio: r };
            }
          }
        });
        if (best !== null) setActive((best as { idx: number; ratio: number }).idx);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 select-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(-50%) translateX(${visible ? 0 : -8}px)`,
        transition: "opacity 0.5s ease, transform 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {CHAPTERS.map((c, i) => {
        const isActive = i === active;
        return (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="chapter-rail-item group flex items-center gap-2.5 py-1 pr-2"
            style={{
              opacity: isActive ? 1 : 0.32,
            }}
          >
            <span
              className="block h-px transition-all"
              style={{
                width: isActive ? 28 : 12,
                background: "currentColor",
              }}
            />
            <span
              className="mono uppercase tracking-[0.22em] whitespace-nowrap"
              style={{
                fontSize: "9.5px",
                transform: isActive ? "translateX(0)" : "translateX(-4px)",
                transition: "transform 0.35s ease",
              }}
            >
              {String(i + 1).padStart(2, "0")} · {c.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
