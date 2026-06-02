const beats = [
  {
    stat: "78%",
    label: "Of Indians get news from WhatsApp forwards",
    body: "Closed group sharing strips out source attribution. By the time a story reaches the reader, the origin is gone.",
  },
  {
    stat: "5x",
    label: "Growth in AI-generated news content since 2023",
    body: "Synthetic articles, AI-narrated videos, and fabricated quotes now flood Indian-language feeds. Detection lags creation.",
  },
  {
    stat: "22",
    label: "Official languages, almost no native AI trust tooling",
    body: "Most fact-checking and framing tools assume English. Bias that lives in Hindi or Bangla idioms is invisible to them.",
  },
];

export default function WhyNow() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(178,58,72,0.18), transparent 60%), #000",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">Why now</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[6rem] leading-[0.95] tracking-tightest text-balance">
              The trust layer is{" "}
              <span className="display-italic" style={{ color: "#E58794" }}>
                missing
              </span>{" "}
              and the gap is widening.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-[1.65] text-white/55 lg:pt-3">
              India crossed 900 million internet users while the supply of
              unverified, AI-generated, and emotionally framed content scaled
              past every existing safeguard. The window to build a native
              solution is now, not later.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {beats.map((b, i) => (
            <div key={i} className="bg-black p-8 lg:p-10">
              <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-10">
                0{i + 1}
              </div>
              <div
                className="display text-[5rem] lg:text-[6rem] leading-none tabular"
                style={{ color: "#E58794" }}
              >
                {b.stat}
              </div>
              <div className="mt-5 text-[15px] lg:text-[16px] leading-snug text-white font-medium">
                {b.label}
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-white/55">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
