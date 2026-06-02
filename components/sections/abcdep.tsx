const categories = [
  { letter: "A", name: "Astrology", note: "Daily forecasts, festival timing, life-event guidance." },
  { letter: "B", name: "Bollywood", note: "Film, music, celebrity culture, OTT releases." },
  { letter: "C", name: "Cricket", note: "Live scores, match reports, IPL coverage, player news." },
  { letter: "D", name: "Devotion", note: "Religious updates, temple events, sacred calendars." },
  { letter: "E", name: "Economics", note: "Markets, policy, business, personal finance." },
  { letter: "P", name: "Politics", note: "National, state, and constituency-level coverage." },
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
          <div className="eyebrow mb-6">The Wedge</div>
          <h2 className="display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tightest text-balance">
            Indian attention<br />
            doesn&apos;t live in{" "}
            <span className="display-italic text-accent">&ldquo;news.&rdquo;</span>
          </h2>
          <p className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
            It lives in six high-frequency categories that existing news apps
            treat as side categories. We treat them as the main wedge — because
            this is where Indians spend time every day, and where framing,
            rumors, and misinformation spread fastest.
          </p>
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {categories.map((c) => (
            <div
              key={c.letter}
              className="group bg-black p-6 lg:p-8 hover:bg-accent transition-colors duration-500 cursor-default"
            >
              <div className="display text-[6rem] lg:text-[7rem] leading-none text-white">{c.letter}</div>
              <div className="mt-8 mono text-[10px] uppercase tracking-[0.25em] text-white/45 group-hover:text-white/90 transition-colors">
                {c.name}
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-white/55 group-hover:text-white/90 transition-colors">
                {c.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-28 max-w-5xl mx-auto text-center">
          <div className="display-italic text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white/85 text-balance">
            &ldquo;Native Indic neutralisation is a moat, not a feature. Loaded
            language in Hindi or Bangla can&apos;t be reliably detected by
            translating to English first — bias lives in idioms, implication,
            honorifics, and local framing.&rdquo;
          </div>
          <div className="mt-8 eyebrow">— UnbiaslyAI Engineering</div>
        </div>
      </div>
    </section>
  );
}
