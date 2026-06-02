const credentials = [
  "Carnegie Mellon University",
  "IIT Delhi",
  "LSE · University of London",
  "Government of India · 16 years",
  "MIT · IBM · Meta",
  "Stanford · CodeX",
  "India Today Group",
  "AI4Bharat embeddings",
  "Sarvam APIs",
  "Indus AppStore launch partner",
];

export default function TrustMarquee() {
  const doubled = [...credentials, ...credentials];
  return (
    <section className="relative border-t border-white/[0.06] py-10 lg:py-12 bg-black overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 mb-6">
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span className="mono text-[10px] tracking-[0.28em] uppercase text-white/45">
            Built and advised by
          </span>
        </div>
      </div>
      <div className="relative mask-horizontal">
        <div className="flex marquee-x whitespace-nowrap">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-10 lg:gap-14 px-6 lg:px-8 shrink-0"
            >
              <span className="display text-2xl lg:text-3xl text-white/70 tracking-tight">
                {c}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
