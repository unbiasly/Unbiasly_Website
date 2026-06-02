"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORIES = [
  {
    source: "The Hindu",
    sourceColor: "#2D6A4F",
    lang: "EN",
    headline:
      "Parliament passes amendment after extended debate; opposition stages walkout citing procedural concerns.",
    flagWord: "stages walkout",
    flagReason: "Loaded framing",
    summary:
      "The bill passed 287 to 142 after four hours of debate. Three opposition parties left the chamber before the vote, calling the process rushed. Government called the bill essential for the next fiscal quarter.",
  },
  {
    source: "Anandabazar Patrika",
    sourceColor: "#2D6A4F",
    lang: "BN",
    headline:
      "রাজ্যে নতুন শিক্ষা নীতি ঘোষণা; বিরোধী দলগুলি প্রশ্ন তুলছে বাস্তবায়ন নিয়ে।",
    flagWord: "প্রশ্ন তুলছে",
    flagReason: "Attribution missing",
    summary:
      "State announced a new education policy effective next academic year. Two opposition parties asked about funding sources and timeline. State minister will hold a press briefing tomorrow.",
  },
  {
    source: "Dainik Jagran",
    sourceColor: "#2D6A4F",
    lang: "HI",
    headline:
      "केंद्र सरकार ने नई कृषि योजना का ऐलान किया, किसान संगठनों ने सशर्त स्वागत किया।",
    flagWord: "सशर्त स्वागत",
    flagReason: "One sided framing",
    summary:
      "The Centre announced a farm scheme with a budget allocation of 12,400 crore over three years. Three farm unions issued statements supporting the direction, with conditions on procurement pricing.",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % STORIES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = STORIES[i];

  return (
    <section className="relative overflow-hidden mesh-glow pt-32 lg:pt-40 pb-24 lg:pb-32">
      {/* Subtle grid texture */}
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

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Eyebrow chip */}
        <div className="flex justify-center fade-up" style={{ animationDelay: "0.05s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            <span className="mono text-[11px] tracking-[0.2em] uppercase text-white/80">
              AI-verified news for India
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mt-10 lg:mt-14 text-center display text-[14vw] md:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.92] tracking-tightest fade-up text-balance"
          style={{ animationDelay: "0.15s" }}
        >
          Read the news.
          <br />
          <span className="display-italic text-white/65">See the source.</span>
          <br />
          <span className="text-accent">Decide for yourself.</span>
        </h1>

        {/* Sub */}
        <div
          className="mt-10 max-w-3xl mx-auto text-center fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-[16px] lg:text-[18px] leading-[1.55] text-white/65 text-pretty">
            India&apos;s first AI-powered news platform with source attribution
            and framing analysis on every story. Built for 900 million internet
            users who want fast information they can trust.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link href="#analyzer" className="btn-primary group">
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white pulse-dot" />
            Try the analyzer
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link href="/live-news" className="btn-ghost">
            Read the live feed
          </Link>
        </div>

        {/* LIVE PRODUCT STRIP */}
        <div
          className="mt-20 lg:mt-24 max-w-5xl mx-auto fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/55">
                Live · Last analyzed story
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
              {/* Left: source + lang */}
              <div className="lg:col-span-3 p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-between">
                <div>
                  <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                    Source verified
                  </div>
                  <div className="display text-2xl lg:text-[26px] leading-[1.1] text-white">
                    {s.source}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="bg-verified-soft-dark mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-current" />
                    Verified
                  </span>
                  <span className="border border-white/15 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full text-white/60">
                    {s.lang}
                  </span>
                </div>
              </div>

              {/* Middle: headline with flag highlight + summary */}
              <div className="lg:col-span-6 p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                  Headline · Framing analyzed
                </div>
                <p className="text-[16px] lg:text-[17px] leading-[1.45] text-white">
                  {s.headline.split(s.flagWord).map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="flag-mark-dark relative group cursor-help">
                          {s.flagWord}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                <p className="mt-4 text-[13.5px] leading-[1.6] text-white/55">
                  {s.summary}
                </p>
              </div>

              {/* Right: flag detail */}
              <div className="lg:col-span-3 p-6 lg:p-7">
                <div className="mono text-[9px] tracking-[0.25em] uppercase text-white/40 mb-3">
                  Framing flag
                </div>
                <div className="bg-flagged-soft-dark inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {s.flagReason}
                </div>
                <p className="mt-4 text-[12.5px] leading-[1.55] text-white/55">
                  The highlighted phrase carries an interpretive load. We surface
                  it so readers can weigh the framing rather than absorb it.
                </p>
                <div className="mt-6 mono text-[10px] tracking-[0.2em] uppercase text-white/35">
                  Word count · 60
                </div>
              </div>
            </div>
          </article>

          <div className="mt-3 mono text-[10px] tracking-[0.2em] uppercase text-white/35 text-center">
            Cycles every six seconds · Three real stories from the pipeline
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-12 max-w-5xl mx-auto">
          {[
            { num: "900M+", label: "Indian internet users" },
            { num: "10K", label: "Stories processed daily" },
            { num: "60", label: "Words per summary" },
            { num: "4.5★", label: "Android beta rating" },
          ].map((s, idx) => (
            <div
              key={idx}
              className="text-center fade-up"
              style={{ animationDelay: `${0.7 + idx * 0.08}s` }}
            >
              <div className="display text-5xl lg:text-6xl text-white tabular">{s.num}</div>
              <div className="mt-2 text-[12px] text-white/50 mono tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
