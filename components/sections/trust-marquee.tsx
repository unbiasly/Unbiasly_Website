const credentials = [
  "Carnegie Mellon",
  "IIT Delhi",
  "LSE · London",
  "Government of India · 16 yrs",
  "MIT · IBM · Meta",
  "Stanford · CodeX",
  "India Today Group",
  "AI4Bharat embeddings",
  "Sarvam APIs",
];

export default function TrustMarquee() {
  const doubled = [...credentials, ...credentials];
  return (
    <section className="relative border-t border-white/[0.06] py-8 lg:py-10 bg-black overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10 mb-4">
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
              className="flex items-center gap-8 lg:gap-12 px-5 lg:px-7 shrink-0"
            >
              <span className="display text-xl sm:text-2xl lg:text-[26px] text-white/70 tracking-tight">
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
