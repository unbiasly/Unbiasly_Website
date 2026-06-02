const categories = [
  {
    letter: "A",
    name: "Astrology",
    devanagari: "ज्योतिष",
    sample: "Festival timing updates and life-event guidance, with named source astrologers.",
  },
  {
    letter: "B",
    name: "Bollywood",
    devanagari: "बॉलीवुड",
    sample: "Film, music, and OTT coverage with paid-placement detection on every review.",
  },
  {
    letter: "C",
    name: "Cricket",
    devanagari: "क्रिकेट",
    sample: "Live scores, IPL coverage, and player news pulled from verified beat reporters.",
  },
  {
    letter: "D",
    name: "Devotion",
    devanagari: "भक्ति",
    sample: "Temple events and sacred calendars, attributed to recognised religious bodies.",
  },
  {
    letter: "E",
    name: "Economics",
    devanagari: "अर्थशास्त्र",
    sample: "Markets, policy, and personal finance with source pills on every claim.",
  },
  {
    letter: "P",
    name: "Politics",
    devanagari: "राजनीति",
    sample: "National, state, and constituency-level coverage with framing flags applied.",
  },
];

export default function ABCDEP() {
  return (
    <section id="abcdep" className="relative overflow-hidden border-t border-white/[0.06] py-24 lg:py-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(230,72,30,0.22), transparent 60%), #000",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="eyebrow mb-6">The wedge</div>
          <h2 className="display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tightest text-balance">
            Indian attention does not live in{" "}
            <span className="text-accent">&ldquo;news.&rdquo;</span>
          </h2>
          <p className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
            It lives in six high frequency categories that existing apps treat
            as side categories. We treat them as the main wedge. This is where
            Indians spend time every day, and it is also where framing and
            rumours spread fastest.
          </p>
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {categories.map((c) => (
            <div
              key={c.letter}
              className="group relative bg-black p-6 lg:p-7 hover:bg-accent transition-colors duration-500 cursor-default min-h-[320px] flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="display text-[5.5rem] lg:text-[6.5rem] leading-none text-white">
                  {c.letter}
                </div>
                <div className="display text-[18px] lg:text-[22px] leading-tight text-white/35 group-hover:text-white/90 transition-colors text-right max-w-[60px]">
                  {c.devanagari}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/45 group-hover:text-white/90 transition-colors">
                {c.name}
              </div>
              <p className="mt-2 text-[12px] leading-[1.5] text-white/55 group-hover:text-white/95 transition-colors">
                {c.sample}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-24 max-w-4xl mx-auto text-center">
          <p className="display text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.25] text-white/85 text-balance">
            &ldquo;Native Indic neutralisation is a moat, not a feature. Bias in
            Hindi or Bangla cannot be detected by translating to English first.
            It lives in idioms, honorifics, and local framing.&rdquo;
          </p>
          <div className="mt-8 eyebrow">UnbiaslyAI Engineering</div>
        </div>
      </div>
    </section>
  );
}
