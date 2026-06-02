"use client";
import { useEffect, useState } from "react";

// Deterministic-ish "today" numbers. They tick up gently while the user watches,
// which feels right for a live pipeline.
function startingNumber(base: number, jitter: number) {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return base + Math.floor((minutes / (24 * 60)) * jitter);
}

function sparkline(seed: number, points = 28) {
  const out: number[] = [];
  let v = 40 + (seed % 25);
  for (let i = 0; i < points; i++) {
    v += Math.sin(i * 0.7 + seed) * 8 + (Math.random() - 0.5) * 6;
    out.push(Math.max(8, Math.min(96, v)));
  }
  return out;
}

function Spark({ values, stroke = "#E6481E" }: { values: number[]; stroke?: string }) {
  const w = 120;
  const h = 36;
  const step = w / (values.length - 1);
  const d = values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(h - (v / 100) * h).toFixed(1)}`)
    .join(" ");
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <path d={area} fill={stroke} opacity={0.12} />
      <path d={d} fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TodayCounter() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 3500);
    return () => clearInterval(t);
  }, []);

  const stories = startingNumber(7200, 3000) + tick * 3;
  const flags = startingNumber(180, 90) + Math.floor(tick * 0.4);
  const languages = 3;
  const sources = startingNumber(420, 80);

  const cards = [
    {
      label: "Stories analyzed today",
      value: stories.toLocaleString("en-IN"),
      spark: sparkline(11),
      color: "#E6481E",
      sub: "Live, updating every few seconds",
    },
    {
      label: "Framing flags raised",
      value: flags.toLocaleString("en-IN"),
      spark: sparkline(31),
      color: "#B23A48",
      sub: "Across all three languages",
    },
    {
      label: "Languages processed",
      value: String(languages),
      spark: sparkline(7),
      color: "#2D6A4F",
      sub: "Hindi, English, Bangla · 19 more on roadmap",
    },
    {
      label: "Verified sources active",
      value: sources.toLocaleString("en-IN"),
      spark: sparkline(23),
      color: "#F5F1EA",
      sub: "National and regional publishers",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] py-24 lg:py-32 bg-black relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
          <div>
            <div className="eyebrow mb-5">Today on UnbiaslyAI</div>
            <h2 className="display text-4xl md:text-5xl lg:text-[4.5rem] leading-[0.98] tracking-tightest">
              The pipeline is running{" "}
              <span className="display-italic text-white/55">right now.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/55">
              Live · last update {tick}s ago
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {cards.map((c) => (
            <div key={c.label} className="bg-black p-6 lg:p-7">
              <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/45 mb-4 leading-tight">
                {c.label}
              </div>
              <div className="display text-[2.75rem] lg:text-[3.5rem] leading-[0.95] text-white tabular">
                {c.value}
              </div>
              <div className="mt-4">
                <Spark values={c.spark} stroke={c.color} />
              </div>
              <div className="mt-3 text-[11.5px] leading-[1.5] text-white/45">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
