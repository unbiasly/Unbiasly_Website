import Image from "next/image";

/**
 * ⚠️  PLACEHOLDER QUOTE — replace `QUOTE`, `AUTHOR`, `ROLE`, `OUTLET`, and the
 *    portrait below with a real testimonial when you have one. A named quote
 *    from an advisor, journalist, or early user transforms this page.
 *    Suggestions: Uday Mahurkar (former Info Commissioner) is already an
 *    advisor — could be the natural first quote. Or a regional editor.
 */
const QUOTE = "It reads each story in the language it was written in, then shows you the framing. I haven't seen another product treat Hindi reporting as a first-class input. That changes who India's next 500 million readers can trust.";
const AUTHOR = "Placeholder · Advisor name";
const ROLE = "Former editor · Replace with real role";
const OUTLET = "Major Indian publication";

export default function PullQuote() {
  return (
    <section
      id="quote"
      className="relative border-t border-white/[0.06] py-24 sm:py-28 lg:py-36 overflow-hidden bg-black"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(230,72,30,0.07), transparent 60%), #000",
        }}
      />

      <div className="relative mx-auto max-w-[1024px] px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 lg:mb-14">
          <div className="eyebrow">What people are saying</div>
        </div>

        {/* Giant quote mark */}
        <div className="text-center mb-2">
          <span
            className="display-italic text-accent leading-none inline-block"
            style={{ fontSize: "clamp(96px, 14vw, 200px)" }}
            aria-hidden
          >
            &ldquo;
          </span>
        </div>

        <blockquote className="text-center max-w-[26ch] sm:max-w-[34ch] mx-auto">
          <p
            className="display text-balance leading-[1.15]"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", letterSpacing: "-0.02em" }}
          >
            {QUOTE}
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="mt-10 lg:mt-14 flex items-center justify-center gap-4">
          {/* Replace src with a real headshot when available */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center shrink-0">
            <span className="mono text-[10px] tracking-widest uppercase text-white/35">
              IMG
            </span>
          </div>
          <div className="text-left">
            <div className="display text-[18px] sm:text-[20px] lg:text-[22px] leading-tight text-white">
              {AUTHOR}
            </div>
            <div className="mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-white/45 mt-1">
              {ROLE} · {OUTLET}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
