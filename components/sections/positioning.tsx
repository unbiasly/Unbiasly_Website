type Cell = "yes" | "no" | "partial";

const rows: { feature: string; cells: Cell[]; note?: string }[] = [
  { feature: "Source attribution on every story", cells: ["yes", "no", "no", "partial", "no"] },
  { feature: "Framing and bias analysis", cells: ["yes", "no", "no", "no", "no"] },
  { feature: "Native Indic-language processing", cells: ["yes", "partial", "partial", "partial", "no"], note: "We read in Hindi and Bangla without translating to English first" },
  { feature: "No paid placements in the feed", cells: ["yes", "partial", "no", "yes", "no"] },
  { feature: "Recommendation-first feed", cells: ["yes", "yes", "yes", "no", "yes"] },
  { feature: "60-word summaries with source", cells: ["yes", "partial", "no", "no", "no"] },
  { feature: "Verified creator program", cells: ["yes", "no", "no", "no", "partial"] },
];

const competitors = ["UnbiaslyAI", "Inshorts", "Dailyhunt", "Google News", "X / Twitter"];

function Mark({ v }: { v: Cell }) {
  if (v === "yes")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-verified-soft">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7.5l2.6 2.6L11 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  if (v === "partial")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/[0.06] ink-45">
        <span className="w-2.5 h-[2px] bg-current rounded-full" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-flagged-soft">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function Positioning() {
  return (
    <section id="positioning" className="section-paper py-24 lg:py-40 border-t border-b rule-ink">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="eyebrow-ink mb-6">Where we sit</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tightest text-balance ink">
              Not another news app.{" "}
              <span className="display-italic ink-60">
                A trust layer for the ones you already use.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] ink-60">
              Indians already get news from many places. The problem is not
              access. The problem is provenance, framing, and language. Here is
              how UnbiaslyAI compares with the platforms most readers use today.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border rule-ink overflow-hidden bg-white/40">
          {/* Header row */}
          <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] lg:grid-cols-[2fr_repeat(5,1fr)] border-b rule-ink bg-black/[0.03]">
            <div className="p-4 lg:p-5 mono text-[10px] tracking-[0.25em] uppercase ink-45">
              Capability
            </div>
            {competitors.map((c, i) => (
              <div
                key={c}
                className={`p-4 lg:p-5 text-center mono text-[10px] tracking-[0.18em] uppercase ${
                  i === 0 ? "ink font-medium" : "ink-45"
                }`}
              >
                {c}
              </div>
            ))}
          </div>

          {rows.map((r, idx) => (
            <div
              key={r.feature}
              className={`grid grid-cols-[1.6fr_repeat(5,1fr)] lg:grid-cols-[2fr_repeat(5,1fr)] items-center ${
                idx !== rows.length - 1 ? "border-b rule-ink" : ""
              } hover:bg-black/[0.02] transition-colors`}
            >
              <div className="p-4 lg:p-5">
                <div className="text-[14.5px] lg:text-[15.5px] ink leading-tight">
                  {r.feature}
                </div>
                {r.note && (
                  <div className="mt-1 text-[12px] ink-45 leading-snug">{r.note}</div>
                )}
              </div>
              {r.cells.map((c, i) => (
                <div
                  key={i}
                  className={`p-4 lg:p-5 flex justify-center ${
                    i === 0 ? "bg-[#E6481E]/[0.04]" : ""
                  }`}
                >
                  <Mark v={c} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6 mono text-[11px] tracking-[0.2em] uppercase ink-45">
          <span className="flex items-center gap-2">
            <Mark v="yes" /> Yes
          </span>
          <span className="flex items-center gap-2">
            <Mark v="partial" /> Partial
          </span>
          <span className="flex items-center gap-2">
            <Mark v="no" /> No
          </span>
        </div>
      </div>
    </section>
  );
}
