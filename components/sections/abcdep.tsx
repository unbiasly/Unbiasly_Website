const categories = [
  { letter: "A", name: "Astrology", devanagari: "ज्योतिष", sample: "Festival timing and life-event guidance, with named source astrologers." },
  { letter: "B", name: "Bollywood", devanagari: "बॉलीवुड", sample: "Film, music, OTT, with paid-placement detection on every review." },
  { letter: "C", name: "Cricket", devanagari: "क्रिकेट", sample: "Live scores, IPL coverage, player news from verified beat reporters." },
  { letter: "D", name: "Devotion", devanagari: "भक्ति", sample: "Temple events and sacred calendars, attributed to recognised bodies." },
  { letter: "E", name: "Economics", devanagari: "अर्थशास्त्र", sample: "Markets, policy, personal finance with source pills on every claim." },
  { letter: "P", name: "Politics", devanagari: "राजनीति", sample: "National, state, and constituency coverage with framing flags." },
];

export default function ABCDEP() {
  return (
    <section id="abcdep" className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(230,72,30,0.22), transparent 60%), #000",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-5">The wedge</div>
          <h2 className="display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-tightest text-balance">
            Indian attention doesn&apos;t live in{" "}
            <span className="text-accent">&ldquo;news.&rdquo;</span>
          </h2>
          <p className="mt-6 text-[14px] sm:text-[15px] lg:text-[17px] leading-[1.6] text-white/60 max-w-xl mx-auto text-pretty">
            It lives in six high-frequency categories most apps treat as sidebars. We treat them as the main wedge.
          </p>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {categories.map((c) => (
            <div
              key={c.letter}
              className="group relative bg-black p-5 sm:p-6 lg:p-7 hover:bg-accent transition-colors duration-500 cursor-default min-h-[280px] sm:min-h-[300px] flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="display text-[64px] sm:text-[80px] lg:text-[88px] leading-none text-white">
                  {c.letter}
                </div>
                <div className="display text-[16px] sm:text-[18px] lg:text-[20px] leading-tight text-white/35 group-hover:text-white/90 transition-colors text-right max-w-[60px]">
                  {c.devanagari}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/45 group-hover:text-white/90 transition-colors">
                {c.name}
              </div>
              <p className="mt-2 text-[11.5px] sm:text-[12px] leading-[1.5] text-white/55 group-hover:text-white/95 transition-colors">
                {c.sample}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 lg:mt-20 max-w-3xl mx-auto text-center">
          <p className="display text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-[1.25] text-white/85 text-balance">
            &ldquo;Bias in Hindi or Bangla cannot be detected by translating to English first. It lives in idioms, honorifics, and local framing.&rdquo;
          </p>
          <div className="mt-6 eyebrow">UnbiaslyAI Engineering</div>
        </div>
      </div>
    </section>
  );
}
