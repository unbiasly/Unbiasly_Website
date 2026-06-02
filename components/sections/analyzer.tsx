"use client";
import { useMemo, useState } from "react";

type Flag = { word: string; reason: string };

const SAMPLES: { label: string; text: string }[] = [
  {
    label: "Political headline",
    text: "Government slams critics as opposition desperately scrambles to defend its embarrassing record on inflation.",
  },
  {
    label: "Sports report",
    text: "India crushed Australia in a humiliating defeat as the visitors limped home without a single answer.",
  },
  {
    label: "Business story",
    text: "Sources claim the firm may face a serious crisis after a controversial decision shocked the market.",
  },
];

// Lightweight, deterministic "analysis" purely for the demo UI.
const LOADED_WORDS: Record<string, string> = {
  slams: "Emotionally loaded verb",
  crushed: "Combative framing",
  humiliating: "Emotionally loaded adjective",
  desperately: "Imputed motive",
  scrambles: "Imputed motive",
  embarrassing: "Editorial judgment",
  limped: "Combative framing",
  shocked: "Sensational verb",
  controversial: "Vague framing",
  serious: "Unquantified intensifier",
  crisis: "Sensational framing",
};

const SOURCE_TRIGGERS = ["sources claim", "sources say", "reportedly", "allegedly"];

function analyze(input: string) {
  const text = input.trim();
  if (!text)
    return {
      score: 0,
      flags: [] as Flag[],
      attribution: "none",
      verdict: "Paste a headline to analyze.",
    };

  const lower = text.toLowerCase();
  const flags: Flag[] = [];
  for (const w of Object.keys(LOADED_WORDS)) {
    const re = new RegExp(`\\b${w}\\b`, "i");
    const m = text.match(re);
    if (m) flags.push({ word: m[0], reason: LOADED_WORDS[w] });
  }
  const sourceless = SOURCE_TRIGGERS.some((t) => lower.includes(t));
  const attribution = sourceless ? "weak" : flags.length === 0 ? "ok" : "missing";

  const wordCount = text.split(/\s+/).length;
  const base = Math.min(100, flags.length * 18 + (sourceless ? 22 : 0));
  const score = Math.max(0, base - (wordCount > 30 ? 6 : 0));

  let verdict = "Reads neutral. No flagged language detected.";
  if (score >= 60) verdict = "Heavy framing. Multiple loaded signals present.";
  else if (score >= 30) verdict = "Some framing. Worth reading the source itself.";
  else if (score > 0) verdict = "Minor framing. Otherwise reads clean.";

  return { score, flags, attribution, verdict };
}

function highlight(text: string, flags: Flag[]) {
  if (flags.length === 0) return text;
  // Build a regex that matches any flagged word, case-insensitive
  const pattern = new RegExp(
    `\\b(${flags.map((f) => f.word).join("|")})\\b`,
    "gi"
  );
  const parts: (string | { mark: string })[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ mark: m[0] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, i) =>
    typeof p === "string" ? (
      <span key={i}>{p}</span>
    ) : (
      <span key={i} className="flag-mark font-medium">
        {p.mark}
      </span>
    )
  );
}

export default function Analyzer() {
  const [text, setText] = useState(SAMPLES[0].text);
  const result = useMemo(() => analyze(text), [text]);

  const scoreColor =
    result.score >= 60
      ? "#B23A48"
      : result.score >= 30
      ? "#E6481E"
      : result.score > 0
      ? "#A88A2C"
      : "#2D6A4F";

  return (
    <section id="analyzer" className="section-paper-grain py-24 lg:py-40 border-t border-b rule-ink relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: pitch */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow-ink mb-6">Try it yourself</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tightest text-balance ink">
              Paste any headline.
              <br />
              <span className="display-italic ink-60">See the framing.</span>
            </h2>
            <p className="mt-6 text-[15px] lg:text-[17px] leading-[1.65] ink-60 max-w-md">
              This is a small slice of the live pipeline. It scans for loaded
              language, missing attribution, and sensational framing. The full
              system also runs source verification, claim tracing, and native
              Indic-language analysis.
            </p>

            <div className="mt-8 space-y-2">
              <div className="mono text-[10px] tracking-[0.28em] uppercase ink-45 mb-3">
                Try a sample
              </div>
              {SAMPLES.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setText(s.text)}
                  className="block w-full text-left px-4 py-3 rounded-lg border rule-ink hover:bg-black/[0.04] transition-colors"
                >
                  <div className="mono text-[10px] tracking-[0.22em] uppercase ink-45 mb-1">
                    {s.label}
                  </div>
                  <div className="text-[13.5px] ink leading-[1.45] line-clamp-1">
                    {s.text}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: analyzer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border rule-ink bg-white/60 backdrop-blur-sm overflow-hidden shadow-[0_30px_80px_-40px_rgba(10,10,10,0.20)]">
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b rule-ink bg-black/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E6481E]" />
                  <span className="w-2 h-2 rounded-full bg-[#A88A2C]" />
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                </div>
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45">
                  Framing analyzer · demo
                </div>
              </div>

              {/* Input */}
              <div className="p-5 lg:p-6 border-b rule-ink">
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-2">
                  Input
                </div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent ink text-[16px] lg:text-[17px] leading-[1.55] outline-none resize-none placeholder:ink-30"
                  placeholder="Paste a news headline or short paragraph…"
                />
              </div>

              {/* Annotated */}
              <div className="p-5 lg:p-6 border-b rule-ink">
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                  Annotated reading
                </div>
                <p className="text-[16px] lg:text-[17px] leading-[1.6] ink">
                  {highlight(text || "—", result.flags)}
                </p>
              </div>

              {/* Result */}
              <div className="grid grid-cols-3 divide-x rule-ink">
                <div className="p-5 lg:p-6">
                  <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                    Framing score
                  </div>
                  <div
                    className="display text-5xl lg:text-6xl tabular leading-none"
                    style={{ color: scoreColor }}
                  >
                    {result.score}
                  </div>
                  <div className="mt-2 mono text-[10px] tracking-[0.2em] uppercase ink-45">
                    / 100
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                    Attribution
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${
                      result.attribution === "ok"
                        ? "bg-verified-soft"
                        : "bg-flagged-soft"
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {result.attribution === "ok"
                      ? "Looks attributable"
                      : result.attribution === "weak"
                      ? "Anonymous sourcing"
                      : "Needs source"}
                  </div>
                  <p className="mt-3 text-[12.5px] leading-[1.5] ink-60">
                    {result.verdict}
                  </p>
                </div>
                <div className="p-5 lg:p-6">
                  <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                    Flags · {result.flags.length}
                  </div>
                  {result.flags.length === 0 ? (
                    <div className="text-[12.5px] ink-60">No flags raised.</div>
                  ) : (
                    <ul className="space-y-1.5">
                      {result.flags.slice(0, 4).map((f, i) => (
                        <li key={i} className="text-[12.5px] ink leading-tight">
                          <span className="font-medium">{f.word}</span>
                          <span className="ink-45"> · {f.reason}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 mono text-[10px] tracking-[0.22em] uppercase ink-45">
              Demo runs locally in your browser · Full pipeline also analyzes Hindi and Bangla
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
