export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="section-paper py-24 sm:py-28 lg:py-40 border-t border-b rule-ink relative"
    >
      {/* Subtle paper grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(10,10,10,0.6) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(10,10,10,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px, 5px 5px",
        }}
      />

      <div className="relative mx-auto max-w-[680px] px-5 sm:px-6">
        {/* Masthead */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="eyebrow-ink mb-4">A note from the founders</div>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-black/20" />
            <span className="mono text-[10px] tracking-[0.3em] uppercase ink-45">
              Manifesto · 2026
            </span>
            <span className="h-px w-12 bg-black/20" />
          </div>
        </div>

        {/* Body */}
        <article className="space-y-7">
          <p className="drop-cap text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            For most of the last decade, India&apos;s news problem was framed as a fake-news problem. It isn&apos;t. The hard problem is provenance, framing, and language — and almost nothing built so far reads Hindi, Bangla, or Tamil the way they&apos;re actually written.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 lg:my-12 pl-5 sm:pl-7 border-l-2 border-[#E6481E]">
            <p className="display-italic text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.2] ink text-balance">
              &ldquo;Bias doesn&apos;t survive translation. It lives in idioms, honorifics, and the verbs reporters reach for first.&rdquo;
            </p>
          </blockquote>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            We&apos;re not building another news app. We&apos;re building a trust layer underneath the ones 900 million Indians already use — every story attributed to its source, every loaded phrase flagged, every summary readable in the language the reader speaks at home.
          </p>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            It won&apos;t determine the truth for anyone. It will show what was reported, who reported it, and how it was framed — then let the reader decide. That&apos;s the only model of journalism that scales without trading freedom for credibility.
          </p>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink font-medium">
            This is what we&apos;re building. We&apos;d love you with us.
          </p>
        </article>

        {/* Signature */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="display-italic text-[24px] sm:text-[28px] lg:text-[32px] ink leading-none mb-1">
            Umesh, Ashwani, Kriti, Robin & Saharsh
          </div>
          <div className="mono text-[10px] tracking-[0.28em] uppercase ink-45">
            Co-founders, UnbiaslyAI · Gurugram
          </div>
        </div>
      </div>
    </section>
  );
}
