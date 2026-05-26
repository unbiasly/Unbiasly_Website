import Link from "next/link";

const pillars = [
  {
    label: "Journalists",
    title: "Trusted reporters, trusted reach.",
    body: "Verified regional journalists publish directly through our provenance layer. Their stories carry source attribution, framing analysis, and native-language coverage on day one.",
  },
  {
    label: "Creators",
    title: "Domain experts, monetised.",
    body: "Onboarding verified creators across ABCDEP categories. Earn through revenue-share as trusted inventory scales — without losing provenance.",
  },
  {
    label: "Institutions",
    title: "Public information, properly distributed.",
    body: "Government departments, public-information channels, and civic bodies reach citizens through verified channels in their native language.",
  },
];

export default function Creators() {
  return (
    <section id="creators" className="border-t border-white/[0.06] py-24 lg:py-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">The supply side</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              A platform for verified{" "}
              <span className="display-italic text-white/55">
                journalists, creators, and institutions.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-white/55">
              Trust scales when supply does. Verified regional creators,
              journalists, and domain experts will publish through the same
              provenance layer that powers our news feed — and earn through a
              revenue-share model as trusted inventory grows.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <article key={p.label} className="bg-black p-8 lg:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <span className="mono text-[10px] tracking-[0.25em] uppercase text-accent">
                  0{i + 1} / {p.label}
                </span>
                <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/30">
                  Coming
                </span>
              </div>
              <h3 className="display text-[28px] lg:text-[34px] leading-[1.05]">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-white/55 flex-1">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Inline CTA strip */}
        <div className="mt-16 lg:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 lg:p-10 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div>
            <div className="display text-3xl lg:text-4xl leading-tight">
              Are you a journalist or creator?
            </div>
            <div className="mt-2 text-[14px] text-white/55">
              Early-access applications are open. We&apos;ll be in touch.
            </div>
          </div>
          <Link
            href="mailto:contact@unbiasly.ai?subject=Creator%20program%20%E2%80%94%20early%20access"
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
