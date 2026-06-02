const steps = [
  {
    n: "01",
    title: "Ingest",
    body: "We pull stories from authentic Indian and international sources. The pipeline processes around 10,000 articles a day across Hindi, English, and Bangla.",
  },
  {
    n: "02",
    title: "Analyse in language",
    body: "Each story is read in its original Indic language wherever possible. Bias lives in idioms, honorifics, and local framing, all of which are lost when content is translated to English first.",
  },
  {
    n: "03",
    title: "Attribute and flag",
    body: "Every claim is tied back to its source. Loaded language, one sided framing, missing attribution, and unsupported claims are flagged before content reaches the feed.",
  },
  {
    n: "04",
    title: "Summarise",
    body: "Each story is condensed into a 60-word summary with the source visible. Readers can scan the summary, click through to verify, and decide for themselves.",
  },
];

export default function Product() {
  return (
    <section id="product" className="border-t border-white/[0.06] py-24 lg:py-40 mesh-glow-soft relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="eyebrow mb-6">How it works</div>
          <h2 className="display text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tightest text-balance">
            The pipeline behind{" "}
            <span className="display-italic text-white/55">every story.</span>
          </h2>
          <p className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
            Most misinformation in India does not start as completely fake news.
            It starts as selective framing, emotional phrasing, missing context,
            or sourceless forwarding. Our pipeline runs four stages of work
            between a publisher hitting publish and a reader seeing the story.
          </p>
        </div>

        <div className="mt-20 lg:mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {steps.map((s) => (
            <article
              key={s.n}
              className="bg-black p-8 lg:p-10 group transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex items-start justify-between mb-12 lg:mb-16">
                <span className="mono text-[11px] tracking-[0.25em] text-accent">{s.n}</span>
                <div className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="display text-3xl lg:text-4xl leading-[1.05] text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-white/55">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="display text-5xl lg:text-6xl">15 to 30 min</div>
            <div className="mt-2 mono text-[11px] tracking-widest uppercase text-white/45">Publisher to feed</div>
          </div>
          <div>
            <div className="display text-5xl lg:text-6xl">99.5%</div>
            <div className="mt-2 mono text-[11px] tracking-widest uppercase text-white/45">Crash-free sessions</div>
          </div>
          <div>
            <div className="display text-5xl lg:text-6xl">&lt;0.2%</div>
            <div className="mt-2 mono text-[11px] tracking-widest uppercase text-white/45">Summary error rate</div>
          </div>
          <div>
            <div className="display text-5xl lg:text-6xl">22</div>
            <div className="mt-2 mono text-[11px] tracking-widest uppercase text-white/45">Indian languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
