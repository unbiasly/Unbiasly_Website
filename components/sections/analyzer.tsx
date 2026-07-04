"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import CountUp from "@/components/ui-fx/count-up";

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

  let verdict = "Reads neutral. No flagged language.";
  if (score >= 60) verdict = "Heavy framing. Multiple loaded signals.";
  else if (score >= 30) verdict = "Some framing. Worth reading the source.";
  else if (score > 0) verdict = "Minor framing. Otherwise reads clean.";

  return { score, flags, attribution, verdict };
}

function highlight(text: string, flags: Flag[]) {
  if (flags.length === 0) return text;
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

  // Custom cursor state
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scoreColor =
    result.score >= 60
      ? "#B23A48"
      : result.score >= 30
      ? "#E6481E"
      : result.score > 0
      ? "#A88A2C"
      : "#2D6A4F";

  return (
    <section
      id="analyzer"
      className="section-paper-grain py-20 sm:py-24 lg:py-32 border-t border-b rule-ink relative"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: pitch */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="eyebrow-ink mb-5">Meet UB60</div>
            <h2 className="display fluid-h2 tracking-tightest text-balance ink">
              UB60.{" "}
              <span className="display-italic ink-60">Our flagship AI reasoning engine.</span>
            </h2>
            <p className="mt-5 fluid-lead ink-60 max-w-md">
              UB60 scans every headline for loaded language, missing attribution, and sensational framing. The full pipeline also runs source verification and native Indic-language analysis. Paste any news headline below to see it work.
            </p>

            <div className="mt-7 space-y-2">
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
                  <div className="text-[13px] ink leading-[1.45] line-clamp-1">
                    {s.text}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: analyzer */}
          <div className="lg:col-span-7">
            <div
              ref={cardRef}
              className="relative rounded-2xl border rule-ink bg-white/60 backdrop-blur-sm overflow-hidden shadow-[0_30px_80px_-40px_rgba(10,10,10,0.20)]"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b rule-ink bg-black/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E6481E]" />
                  <span className="w-2 h-2 rounded-full bg-[#A88A2C]" />
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                </div>
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45">
                  UB60 · demo
                </div>
              </div>

              <div
                className="p-5 sm:p-6 border-b rule-ink relative"
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
              >
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-2">
                  Input
                </div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  className="cursor-analyzer w-full bg-transparent ink text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.55] outline-none resize-none placeholder:ink-30"
                  placeholder="Paste a news headline or short paragraph…"
                  style={{ cursor: "text" }}
                />
              </div>

              <div className="p-5 sm:p-6 border-b rule-ink">
                <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                  Annotated reading
                </div>
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] ink">
                  {highlight(text || "—", result.flags)}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x rule-ink">
                <div className="p-5 sm:p-6">
                  <div className="mono text-[10px] tracking-[0.25em] uppercase ink-45 mb-3">
                    Framing score
                  </div>
                  <div
                    className="display text-5xl lg:text-6xl tabular leading-none"
                    style={{ color: scoreColor }}
                  >
                    <CountUp
                      end={result.score}
                      duration={0.6}
                      restartKey={`s-${result.score}`}
                    />
                  </div>
                  <div className="mt-2 mono text-[10px] tracking-[0.2em] uppercase ink-45">
                    / 100
                  </div>
                </div>
                <div className="p-5 sm:p-6">
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
                <div className="p-5 sm:p-6">
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

            <div className="mt-4 mono text-[10px] tracking-[0.22em] uppercase ink-45">
              Runs locally · Full pipeline also covers Hindi and Bangla
            </div>
          </div>
        </div>
      </div>

      {/* Floating custom cursor label */}
      {cursorVisible && (
        <div
          className="hidden md:block fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(14px, 14px)",
          }}
        >
          <div className="mono text-[9px] tracking-[0.22em] uppercase bg-black text-[#F5F1EA] px-2.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-lg">
            <span className="w-1 h-1 rounded-full bg-[#E6481E] pulse-dot" />
            UB60
          </div>
        </div>
      )}
    </section>
  );
}
