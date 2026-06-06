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
        <article className="space-y-7">
          <p className="drop-cap-ink text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            For most of the last decade, India&apos;s news problem was framed as a fake-news problem. It isn&apos;t. The hard problem is provenance, framing, and language. Almost nothing built so far reads Hindi, Bangla, or Tamil the way they are actually written.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 lg:my-12 pl-5 sm:pl-7 border-l-2 border-[#E6481E]">
            <p className="display-italic text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.2] ink text-balance">
              &ldquo;Bias does not survive translation. It lives in idioms, honorifics, and the verbs reporters reach for first.&rdquo;
            </p>
          </blockquote>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            We are not building another news app. We are building a trust layer underneath the ones 900 million Indians already use. Every story is attributed to its source. Every loaded phrase is flagged. Every summary is readable in the language the reader speaks at home.
          </p>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink">
            It will not determine the truth for anyone. It will show what was reported, who reported it, and how it was framed. The reader decides. That is the only model of journalism that scales without trading freedom for credibility.
          </p>

          <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.65] ink font-medium">
            This is what we are building. We would love you with us.
          </p>
        </article>

        {/* Signature */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="display-italic text-[24px] sm:text-[28px] lg:text-[32px] ink leading-none mb-1">
            Umesh, Ashwani, Kriti, Robin and Saharsh
          </div>
          <div className="mono text-[10px] tracking-[0.28em] uppercase ink-45">
            Co-founders, UnbiaslyAI, Gurugram
          </div>
        </div>
      </div>
    </section>
  );
}
