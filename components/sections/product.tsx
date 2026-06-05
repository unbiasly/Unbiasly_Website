const steps = [
  {
    n: "01",
    title: "Ingest",
    body: "Stories pulled from authentic Indian and international publishers. ~10,000 articles a day across Hindi, English, and Bangla.",
  },
  {
    n: "02",
    title: "Analyse in language",
    body: "Each story read in its original Indic language. Bias lives in idioms and honorifics — it&apos;s lost when translated to English first.",
  },
  {
    n: "03",
    title: "Attribute and flag",
    body: "Every claim tied back to its source. Loaded language, one-sided framing, and missing attribution flagged before publishing.",
  },
  {
    n: "04",
    title: "Summarise",
    body: "Each story condensed to a 60-word summary with the source visible. Scan, click to verify, decide for yourself.",
  },
];

export default function Product() {
  return (
    <section id="product" className="border-t border-white/[0.06] py-20 sm:py-24 lg:py-32 mesh-glow-soft relative">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-5">How it works</div>
          <h2 className="display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] leading-[0.95] tracking-tightest text-balance">
            The pipeline behind{" "}
            <span className="display-italic text-white/55">every story.</span>
          </h2>
          <p className="mt-6 text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.6] text-white/60 max-w-xl mx-auto text-pretty">
            Most misinformation starts as selective framing, not fake news. Our pipeline runs four checks between publish and feed.
          </p>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {steps.map((s) => (
            <article
              key={s.n}
              className="bg-black p-7 sm:p-8 lg:p-9 group transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-start justify-between mb-10 lg:mb-14">
                <span className="mono text-[11px] tracking-[0.25em] text-accent">{s.n}</span>
                <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="display text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.05] text-white">
                {s.title}
              </h3>
              <p
                className="mt-3 text-[13.5px] sm:text-[14px] lg:text-[15px] leading-relaxed text-white/55"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </article>
          ))}
        </div>

        {/* Trimmed: 4 stats → 3, removed the redundant ones */}
        <div className="mt-16 lg:mt-20 grid grid-cols-3 gap-y-8 gap-x-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="display text-[32px] sm:text-[40px] lg:text-[52px] leading-none">15-30<span className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/45 mono ml-1">min</span></div>
            <div className="mt-2 mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/45">Publisher to feed</div>
          </div>
          <div>
            <div className="display text-[32px] sm:text-[40px] lg:text-[52px] leading-none">&lt;0.2<span className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/45 mono ml-0.5">%</span></div>
            <div className="mt-2 mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/45">Summary error rate</div>
          </div>
          <div>
            <div className="display text-[32px] sm:text-[40px] lg:text-[52px] leading-none">22</div>
            <div className="mt-2 mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white/45">Indic languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
