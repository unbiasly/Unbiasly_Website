const formats = [
  {
    label: "Text",
    status: "Live",
    title: "60-word summaries.",
    body: "Available now. Every story across HI / EN / BN as a scannable summary with source attribution.",
    statusColor: "accent",
  },
  {
    label: "Audio",
    status: "12 months",
    title: "AI-generated audio.",
    body: "Verified stories listenable in Indian languages — for commutes, kitchens, and accessibility. Powered by Sarvam APIs.",
    statusColor: "muted",
  },
  {
    label: "Video",
    status: "12 months",
    title: "AI-anchor short-form video.",
    body: "Watch the same trusted summary you'd read — in thirty seconds. Same provenance layer, new format.",
    statusColor: "muted",
  },
];

export default function Formats() {
  return (
    <section className="border-t border-white/[0.06] py-24 lg:py-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="eyebrow mb-6">What&apos;s next</div>
          <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
            Trust scales{" "}
            <span className="display-italic text-white/55">in formats.</span>
          </h2>
          <p className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
            Text was the start. The next twelve months take verified content
            into audio, video, and conversational interfaces — without losing
            provenance.
          </p>
        </div>

        <div className="mt-20 lg:mt-28 grid md:grid-cols-3 gap-6 lg:gap-8">
          {formats.map((f, i) => (
            <article
              key={f.label}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10 hover:bg-white/[0.04] transition-colors duration-300 lift-card"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/60">
                  Format {i + 1}
                </span>
                <span
                  className={`mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full ${
                    f.statusColor === "accent"
                      ? "bg-accent/15 text-accent border border-accent/30"
                      : "bg-white/5 text-white/55 border border-white/15"
                  }`}
                >
                  {f.statusColor === "accent" && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle pulse-dot" />
                  )}
                  {f.status}
                </span>
              </div>

              <div className="display text-2xl text-white/40 tracking-wide mb-3">{f.label}</div>
              <h3 className="display text-3xl lg:text-4xl leading-[1.05]">{f.title}</h3>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-white/55">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
