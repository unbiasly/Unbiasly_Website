import Link from "next/link";

const roadmap = [
  {
    track: "Formats",
    items: [
      { label: "Text", status: "Live", title: "60-word summaries", body: "Hindi, English, Bangla. Every story scannable with full source attribution.", live: true },
      { label: "Audio", status: "Beta", title: "AI-generated audio", body: "Verified stories listenable in Indian languages. Try the demo above.", live: true },
      { label: "Video", status: "Beta", title: "AI anchor video", body: "Same trusted summary in 30 seconds. Provenance preserved across formats.", live: true },
    ],
  },
  {
    track: "Supply",
    items: [
      { label: "Journalists", status: "Onboarding", title: "Trusted reporters", body: "Verified regional journalists publishing through our provenance layer.", live: true },
      { label: "Creators", status: "Soon", title: "Domain experts", body: "Verified creators across ABCDEP earning through a revenue share model.", live: false },
      { label: "Institutions", status: "Soon", title: "Public information", body: "Government departments and civic bodies reaching citizens in their language.", live: false },
    ],
  },
];

export default function Closing() {
  return (
    <section id="closing" className="relative border-t border-white/[0.06] py-20 sm:py-24 lg:py-32 mesh-glow-soft overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        {/* Roadmap intro */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">What&apos;s next</div>
            <h2 className="display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[0.98] tracking-tightest text-balance">
              Trust scales in{" "}
              <span className="display-italic text-white/55">formats and supply.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/55">
              Text is live today. Audio and video are in beta. Try the demo above. Verified journalists, creators, and institutions onboard next.
            </p>
            <Link
              href="#formats"
              className="mt-4 inline-flex items-center gap-2 mono text-[10px] tracking-[0.22em] uppercase text-accent hover:text-white transition-colors"
            >
              See the format demo →
            </Link>
          </div>
        </div>

        {/* Two roadmap tracks */}
        <div className="space-y-10 lg:space-y-12">
          {roadmap.map((track) => (
            <div key={track.track}>
              <div className="mono text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-accent mb-5">
                {track.track}
              </div>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {track.items.map((f, i) => (
                  <article
                    key={f.label}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 lg:p-8 hover:bg-white/[0.04] transition-colors duration-300 lift-card"
                  >
                    <div className="flex items-center justify-between mb-7 sm:mb-8">
                      <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/45">
                        {String(i + 1).padStart(2, "0")} / {f.label}
                      </span>
                      <span
                        className={`mono text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-full ${
                          f.live
                            ? "bg-accent/15 text-accent border border-accent/30"
                            : "bg-white/5 text-white/55 border border-white/15"
                        }`}
                      >
                        {f.live && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle pulse-dot" />
                        )}
                        {f.status}
                      </span>
                    </div>
                    <h3 className="display text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1]">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/55">
                      {f.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Creator CTA strip */}
        <div className="mt-16 lg:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div>
            <div className="display text-[22px] sm:text-[26px] lg:text-[30px] leading-tight">
              Journalist or creator?
            </div>
            <div className="mt-1.5 text-[13px] sm:text-[14px] text-white/55">
              Early access applications are open.
            </div>
          </div>
          <Link
            href="mailto:contact@unbiasly.ai?subject=Creator%20program%20early%20access"
            className="btn-primary"
          >
            Apply for early access
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
