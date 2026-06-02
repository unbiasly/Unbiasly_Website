const features = [
  {
    icon: "60",
    title: "60-word summaries",
    body: "Every story is condensed into a single scannable paragraph with the source clearly visible. Readers cover more news in a minute than in an hour of scrolling.",
  },
  {
    icon: "✓",
    title: "Source attribution",
    body: "Every article links back to a verified publisher. We surface who reported it, when it was reported, and how. Stories are never anonymous and never sourceless.",
  },
  {
    icon: "↔",
    title: "Framing analysis",
    body: "Loaded language, one sided framing, and missing attribution are flagged in real time. Making bias visible is the first step toward addressing it.",
  },
  {
    icon: "अ",
    title: "Indic-first AI",
    body: "The platform supports Hindi, Bangla, and English today, with nineteen additional languages on the roadmap. The system is built on AI4Bharat embeddings, with a proprietary Indic news SLM in development.",
  },
  {
    icon: "◯",
    title: "Recommendation first",
    body: "The feed is recommendation first rather than publisher first. It learns from what each user reads, skips, shares, listens to, watches, and returns to.",
  },
  {
    icon: "▶",
    title: "Audio and video",
    body: "AI generated audio and AI anchor short form video for verified stories will roll out across Indian languages over the next twelve months.",
    upcoming: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/[0.06] py-24 lg:py-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Features</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              Six things that make a{" "}
              <span className="display-italic text-white/55">feed worth trusting.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-white/55">
              We do not claim to determine the truth. We show what was reported,
              who reported it, and how it was framed. Readers can then form a
              better judgment.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-black p-8 lg:p-10 relative group hover:bg-white/[0.02] transition-colors duration-300"
            >
              {f.upcoming && (
                <div className="absolute top-6 right-6 mono text-[9px] tracking-[0.2em] uppercase text-accent border border-accent/50 px-2 py-0.5 rounded-full">
                  Coming
                </div>
              )}
              <div className="display text-[5rem] lg:text-[6rem] leading-none text-accent mb-8 lg:mb-10 group-hover:rotate-[-3deg] transition-transform origin-bottom-left duration-500">
                {f.icon}
              </div>
              <h3 className="display text-2xl lg:text-3xl leading-tight">{f.title}</h3>
              <p className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-white/55">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
