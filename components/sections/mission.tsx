const blocks = [
  {
    eyebrow: "Vision",
    title: "An informed society.",
    body: "We empower individuals with reliable and accurate news. We help foster informed citizens. We work to rebuild trust in the media.",
  },
  {
    eyebrow: "Mission",
    title: "Trustworthy news, delivered.",
    body: "We combat misinformation through source verification, concise summaries, and media literacy. Our goal is to ensure that everyone has access to accurate information.",
  },
  {
    eyebrow: "Community",
    title: "More than an app.",
    body: "We run community driven campaigns about the harmful impact of misinformation and fake news. We are building a culture of accurate information consumption.",
  },
  {
    eyebrow: "Media literacy",
    title: "Critical reading, at scale.",
    body: "We help users develop the skills to critically evaluate the information they encounter. The goal is informed decisions, made independently.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="border-t border-white/[0.06] py-24 lg:py-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Why we exist</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              The fourth pillar{" "}
              <span className="display-italic text-white/55">deserves better.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-white/55">
              India has over 900 million internet users, 22 official languages,
              and more than 1.5 lakh registered newspapers and periodicals.
              People consume news every day, and often without knowing the
              source or reliability of what they are reading. We are fixing the
              trust layer underneath.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {blocks.map((b, i) => (
            <div key={i} className="bg-black p-10 lg:p-14">
              <div className="flex items-center justify-between mb-12">
                <div className="mono text-[10px] tracking-[0.25em] uppercase text-accent">
                  {b.eyebrow}
                </div>
                <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                  0{i + 1}
                </div>
              </div>
              <h3 className="display text-3xl lg:text-4xl leading-[1.1]">{b.title}</h3>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-white/55 max-w-md">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
