const features = [
  {
    icon: "अ",
    title: "Indic-first AI",
    body: "Hindi, Bangla, and English today; 19 more on the roadmap. Built on AI4Bharat embeddings with a proprietary Indic news SLM in development.",
  },
  {
    icon: "◯",
    title: "Recommendation-first",
    body: "Not publisher-first. The feed learns what you read, skip, share, listen to, and return to — across every category.",
  },
  {
    icon: "▶",
    title: "Audio and video",
    body: "AI-generated audio and AI anchor short-form video for verified stories, rolling out across Indian languages.",
    upcoming: true,
  },
  {
    icon: "✦",
    title: "Verified creators",
    body: "Regional journalists, domain experts, and institutions publishing through the same provenance layer — revenue-shared as trusted inventory scales.",
    upcoming: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/[0.06] py-20 sm:py-24 lg:py-32 bg-black">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">What else</div>
            <h2 className="display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[0.98] tracking-tightest text-balance">
              Beyond the basics,{" "}
              <span className="display-italic text-white/55">a feed worth trusting.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/55">
              We don&apos;t claim to determine the truth. We show what was reported, who reported it, and how it was framed.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-black p-7 sm:p-8 lg:p-9 relative group hover:bg-white/[0.02] transition-colors duration-300"
            >
              {f.upcoming && (
                <div className="absolute top-5 right-5 mono text-[9px] tracking-[0.2em] uppercase text-accent border border-accent/50 px-2 py-0.5 rounded-full">
                  Coming
                </div>
              )}
              <div className="display text-[56px] sm:text-[68px] lg:text-[80px] leading-none text-accent mb-7 lg:mb-9 group-hover:rotate-[-3deg] transition-transform origin-bottom-left duration-500">
                {f.icon}
              </div>
              <h3 className="display text-[20px] sm:text-[22px] lg:text-[26px] leading-tight">{f.title}</h3>
              <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-white/55">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
