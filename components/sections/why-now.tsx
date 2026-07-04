const beats = [
  {
    stat: "78%",
    label: "Get news from WhatsApp forwards",
    body: "Closed sharing strips source attribution. By the time it reaches the reader, the origin is gone.",
  },
  {
    stat: "5x",
    label: "Growth in AI-generated news since 2023",
    body: "Synthetic articles and fabricated quotes now flood Indic-language feeds. Detection lags creation.",
  },
  {
    stat: "22",
    label: "Languages, almost no native AI trust tooling",
    body: "Most fact-checking tools assume English. Bias in Hindi or Bangla idioms stays invisible.",
  },
];

export default function WhyNow() {
  return (
    <section className="relative bg-black border-t border-white/[0.06] py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(178,58,72,0.18), transparent 60%), #17130E",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-5">Why now</div>
            <h2 className="display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[76px] leading-[0.95] tracking-tightest text-balance">
              The trust layer is{" "}
              <span className="display-italic" style={{ color: "#E58794" }}>
                missing
              </span>{" "}
              and the gap is widening.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/55 lg:pt-3">
              900M internet users. Supply of unverified, AI-generated, emotionally framed content has outscaled every safeguard.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {beats.map((b, i) => (
            <div key={i} className="bg-black p-7 sm:p-8 lg:p-9">
              <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-8">
                0{i + 1}
              </div>
              <div
                className="display text-[56px] sm:text-[64px] lg:text-[80px] leading-none tabular"
                style={{ color: "#E58794" }}
              >
                {b.stat}
              </div>
              <div className="mt-4 text-[14px] sm:text-[15px] leading-snug text-white font-medium">
                {b.label}
              </div>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-white/55">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
