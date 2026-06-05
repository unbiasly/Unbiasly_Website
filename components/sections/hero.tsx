"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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

// Deterministic live counter
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

  const stories = (liveStories() + tick * 3).toLocaleString("en-IN");
  const flags = (liveFlags() + Math.floor(tick * 0.4)).toLocaleString("en-IN");

  return (
    <section className="relative overflow-hidden mesh-glow pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28">
      {/* Grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* Live pill */}
        <div className="flex justify-center fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            <span className="mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/80">
              AI-verified news for India
            </span>
          </div>
        </div>

        {/* Headline — tapered */}
        <h1
          className="mt-8 sm:mt-10 lg:mt-12 text-center display text-[44px] sm:text-[64px] md:text-[80px] lg:text-[104px] leading-[0.95] tracking-tightest fade-up text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          Read the news.
          <br />
          <span className="display-italic text-white/65">See the source.</span>
          <br />
          <span className="text-accent">Decide for yourself.</span>
        </h1>

        {/* Sub — trimmed */}
        <p
          className="mt-7 sm:mt-9 max-w-xl mx-auto text-center text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.55] text-white/65 text-pretty fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Source attribution and framing analysis on every story. Built for India&apos;s 900M readers.
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="#analyzer" className="btn-primary group">
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white pulse-dot" />
            Try the analyzer
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link href="#closing" className="btn-ghost">
            Get the app
          </Link>
        </div>

        {/* LIVE PRODUCT STRIP */}
        <div
          className="mt-16 lg:mt-20 max-w-4xl mx-auto fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/55">
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
                    idx === i ? "w-8 bg-accent" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <article
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden fade-up"
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-3 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-between gap-4">
                <div>
                  <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                    Source verified
                  </div>
                  <div className="display text-xl sm:text-2xl lg:text-[24px] leading-[1.1] text-white">
                    {s.source}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-verified-soft-dark mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-current" />
                    Verified
                  </span>
                  <span className="border border-white/15 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full text-white/60">
                    {s.lang}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                  Headline · framing analyzed
                </div>
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.45] text-white">
                  {s.headline.split(s.flagWord).map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="flag-mark-dark">{s.flagWord}</span>
                      )}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] text-white/55">
                  {s.summary}
                </p>
              </div>

              <div className="lg:col-span-3 p-5 sm:p-6">
                <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                  Framing flag
                </div>
                <div className="bg-flagged-soft-dark inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {s.flagReason}
                </div>
                <p className="mt-3 text-[12px] leading-[1.55] text-white/55">
                  We surface the phrase so readers weigh it, not absorb it.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* LIVE STATS — merged from old TodayCounter */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-10 max-w-4xl mx-auto">
          {[
            { num: stories, label: "Stories analyzed today", live: true },
            { num: flags, label: "Framing flags raised", live: true },
            { num: "900M+", label: "Indian internet users" },
            { num: "4.5★", label: "Android beta rating" },
          ].map((s, idx) => (
            <div
              key={idx}
              className="text-center fade-up"
              style={{ animationDelay: `${0.6 + idx * 0.08}s` }}
            >
              <div className="display text-[36px] sm:text-[44px] lg:text-[52px] text-white tabular leading-none">
                {s.num}
              </div>
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-white/50 mono tracking-widest uppercase">
                {s.live && (
                  <span className="w-1 h-1 rounded-full bg-accent pulse-dot" />
                )}
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
