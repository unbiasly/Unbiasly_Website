import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";

const formats = [
  {
    label: "Text",
    status: "Live",
    title: "60-word summaries.",
    body: "Available now across Hindi, English, and Bangla. Every story scannable with full source attribution.",
    statusColor: "accent",
  },
  {
    label: "Audio",
    status: "12 months",
    title: "AI generated audio.",
    body: "Verified stories listenable in Indian languages, for commutes, kitchens, and accessibility. Powered by Sarvam APIs.",
    statusColor: "muted",
  },
  {
    label: "Video",
    status: "12 months",
    title: "AI anchor short form video.",
    body: "Watch the same trusted summary in thirty seconds. The provenance layer stays the same, only the format changes.",
    statusColor: "muted",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="border-t border-white/[0.06] py-24 lg:py-40 mesh-glow-soft relative">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Formats roadmap */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">What is next</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              Trust scales in{" "}
              <span className="display-italic text-white/55">formats.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-white/55">
              Text was the start. Over the next twelve months we extend
              verified content into audio, video, and conversational interfaces.
              Provenance is preserved across every format.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {formats.map((f, i) => (
            <article
              key={f.label}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10 hover:bg-white/[0.04] transition-colors duration-300 lift-card"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/60">
                  Format {i + 1}
                </span>
                <span
                  className={`mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full ${
                    f.statusColor === "accent"
                      ? "bg-accent/15 text-accent border border-accent/30"
                      : "bg-white/5 text-white/55 border border-white/15"
                  }`}
                >
                  {f.statusColor === "accent" && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle pulse-dot" />
                  )}
                  {f.status}
                </span>
              </div>

              <div className="display text-2xl text-white/40 tracking-wide mb-3">{f.label}</div>
              <h3 className="display text-3xl lg:text-4xl leading-[1.05]">{f.title}</h3>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-white/55">
                {f.body}
              </p>
            </article>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center pt-12 lg:pt-20 border-t border-white/[0.06]">
          <div className="eyebrow mb-8">Get the app</div>
          <h2 className="display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tightest text-balance max-w-5xl mx-auto">
            See the source.{" "}
            <span className="display-italic text-white/55">Always.</span>
          </h2>
          <p className="mt-10 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
            Free to use. Available on iOS, Android, and the Indus AppStore. Read
            more than 10,000 stories a day with full source attribution and
            framing analysis.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link href="https://apps.apple.com/in/app/unbiasly/id6477892005" target="_blank" className="transition-transform hover:scale-[1.04]">
              <Image src={AppleStore} alt="Download on the App Store" className="h-14 lg:h-16 w-auto" quality={100} />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.unbiasly.app" target="_blank" className="transition-transform hover:scale-[1.04]">
              <Image src={GoogleStore} alt="Get it on Google Play" className="h-14 lg:h-16 w-auto" quality={100} />
            </Link>
            <Link href="https://www.indusappstore.com/apps/news-magazines/unbiaslyai/com.unbiasly.app/" target="_blank" className="transition-transform hover:scale-[1.04]">
              <Image src={IndusStore} alt="Get it on Indus AppStore" className="h-14 lg:h-16 w-auto" quality={100} />
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 mono text-[11px] tracking-[0.25em] uppercase text-white/45">
            <span>or</span>
            <Link href="/live-news" className="link-reveal text-white hover:text-accent">
              Read the live feed →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
