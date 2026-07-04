"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import RevealWords from "@/components/ui-fx/reveal-words";
import CountUp from "@/components/ui-fx/count-up";
import Sparkline from "@/components/ui-fx/sparkline";
import Magnetic from "@/components/ui-fx/magnetic";

const STORIES = [
  {
    source: "The Hindu",
    lang: "EN",
    headline:
      "Parliament passes amendment after extended debate; opposition stages walkout citing procedural concerns.",
    flagWord: "stages walkout",
    flagReason: "Loaded framing",
    summary:
      "The bill passed 287 to 142 after four hours of debate. Three opposition parties left the chamber before the vote.",
  },
  {
    source: "Anandabazar Patrika",
    lang: "BN",
    headline:
      "রাজ্যে নতুন শিক্ষা নীতি ঘোষণা; বিরোধী দলগুলি প্রশ্ন তুলছে বাস্তবায়ন নিয়ে।",
    flagWord: "প্রশ্ন তুলছে",
    flagReason: "Attribution missing",
    summary:
      "State announced a new education policy. Two opposition parties asked about funding and timeline.",
  },
  {
    source: "Dainik Jagran",
    lang: "HI",
    headline:
      "केंद्र सरकार ने नई कृषि योजना का ऐलान किया, किसान संगठनों ने सशर्त स्वागत किया।",
    flagWord: "सशर्त स्वागत",
    flagReason: "One-sided framing",
    summary:
      "The Centre announced a farm scheme worth ₹12,400 crore over three years. Three unions backed it with conditions.",
  },
];

// Deterministic seeds for sparklines (24 hourly points each)
const STORIES_SPARK = [
  220, 240, 260, 280, 300, 310, 340, 360, 380, 400, 430, 460,
  490, 520, 550, 580, 620, 660, 700, 740, 770, 800, 830, 855,
];
const FLAGS_SPARK = [
  10, 12, 14, 13, 15, 17, 16, 18, 20, 19, 22, 24,
  23, 26, 28, 27, 30, 33, 31, 34, 36, 35, 38, 41,
];

function liveStories() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return 7200 + Math.floor((minutes / (24 * 60)) * 3000);
}
function liveFlags() {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return 180 + Math.floor((minutes / (24 * 60)) * 90);
}

export default function Hero() {
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % STORIES.length), 6500);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 3500);
    return () => clearInterval(t);
  }, []);
  const s = STORIES[i];

  const storiesNow = liveStories() + tick * 3;
  const flagsNow = liveFlags() + Math.floor(tick * 0.4);

  return (
    <section
      id="hero"
      className="hero-cream relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28"
    >
      {/* Paper grid texture */}
      <div aria-hidden className="absolute inset-0 hero-cream-grid pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* Live pill */}
        <div className="flex justify-center fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/12 bg-white/50 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6481E] pulse-dot" />
            <span className="mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase ink-60">
              AI-verified news for India
            </span>
          </div>
        </div>

        {/* Headline — fluid clamp, word-by-word reveal */}
        <h1 className="mt-8 sm:mt-10 lg:mt-12 text-center display fluid-hero text-balance ink">
          <RevealWords text="Read the news." delayStart={80} stagger={80} />
          <br />
          <RevealWords
            text="See the source."
            className="display-italic ink-45"
            delayStart={340}
            stagger={80}
          />
          <br />
          <RevealWords
            text="Decide for yourself."
            className="text-[#E6481E]"
            delayStart={620}
            stagger={80}
          />
        </h1>

        {/* Sub */}
        <p
          className="mt-7 sm:mt-9 max-w-xl mx-auto text-center fluid-lead ink-60 text-pretty fade-up"
          style={{ animationDelay: "1.05s" }}
        >
          Source attribution and framing analysis on every story. Built for India&apos;s 900M readers.
        </p>

        {/* CTAs — magnetic */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          <Magnetic radius={120} strength={10}>
            <Link
              href="#analyzer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[13px] font-medium rounded-full hover:bg-[#E6481E] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6481E] group-hover:bg-white pulse-dot" />
              Try UB60
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </Magnetic>
          <Magnetic radius={100} strength={6}>
            <Link
              href="#get-app"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/15 ink text-[13px] font-medium rounded-full hover:bg-black/5 transition-colors"
            >
              Get the app
            </Link>
          </Magnetic>
        </div>

        {/* LIVE PRODUCT STRIP — cream card on cream */}
        <div
          className="mt-16 lg:mt-20 max-w-4xl mx-auto fade-up"
          style={{ animationDelay: "1.35s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6481E] pulse-dot" />
              <span className="mono text-[10px] tracking-[0.25em] uppercase ink-45">
                Live · Last analyzed
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show story ${idx + 1}`}
                  className={`h-[3px] rounded-full transition-all ${
                    idx === i ? "w-8 bg-[#E6481E]" : "w-4 bg-black/15 hover:bg-black/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <article
            key={i}
            className="rounded-2xl border border-black/10 bg-white/55 backdrop-blur-sm overflow-hidden fade-up shadow-[0_30px_80px_-40px_rgba(10,10,10,0.18)]"
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-3 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-black/[0.08] flex flex-col justify-between gap-4">
                <div>
                  <div className="mono text-[9px] tracking-[0.25em] uppercase ink-45 mb-3">
                    Source verified
                  </div>
                  <div className="display text-xl sm:text-2xl lg:text-[24px] leading-[1.1] ink">
                    {s.source}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-verified-soft mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-current" />
                    Verified
                  </span>
                  <span className="border border-black/15 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ink-60">
                    {s.lang}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-black/[0.08]">
                <div className="mono text-[9px] tracking-[0.25em] uppercase ink-45 mb-3">
                  Headline · framing analyzed
                </div>
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.45] ink">
                  {s.headline.split(s.flagWord).map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="flag-mark">{s.flagWord}</span>
                      )}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] ink-45">
                  {s.summary}
                </p>
              </div>

              <div className="lg:col-span-3 p-5 sm:p-6">
                <div className="mono text-[9px] tracking-[0.25em] uppercase ink-45 mb-3">
                  Framing flag
                </div>
                <div className="bg-flagged-soft inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {s.flagReason}
                </div>
                <p className="mt-3 text-[12px] leading-[1.55] ink-45">
                  We surface the phrase so readers weigh it, not absorb it.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* LIVE STATS with count-ups + sparklines */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-10 max-w-4xl mx-auto">
          <LiveStat
            value={storiesNow}
            label="Stories analyzed today"
            spark={STORIES_SPARK}
            live
            restartKey={tick}
          />
          <LiveStat
            value={flagsNow}
            label="Framing flags raised"
            spark={FLAGS_SPARK}
            live
            restartKey={tick}
          />
          <StaticStat value="900M+" label="Indian internet users" />
          <StaticStat value="4.5★" label="Android beta rating" />
        </div>
      </div>
    </section>
  );
}

function LiveStat({
  value,
  label,
  spark,
  live,
  restartKey,
}: {
  value: number;
  label: string;
  spark: number[];
  live?: boolean;
  restartKey?: number;
}) {
  return (
    <div className="text-center fade-up">
      <div className="relative inline-block">
        <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-50 ink" aria-hidden>
          <Sparkline data={spark} width={92} height={20} />
        </div>
        <CountUp
          end={value}
          duration={1.3}
          restartKey={restartKey}
          className="relative display fluid-stat ink tabular leading-none"
        />
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] ink-45 mono tracking-widest uppercase">
        {live && <span className="w-1 h-1 rounded-full bg-[#E6481E] pulse-dot" />}
        {label}
      </div>
    </div>
  );
}

function StaticStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center fade-up">
      <div className="display fluid-stat ink tabular leading-none">{value}</div>
      <div className="mt-2.5 text-[10px] sm:text-[11px] ink-45 mono tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}
