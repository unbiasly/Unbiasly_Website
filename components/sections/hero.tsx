import Image from "next/image";
import Link from "next/link";
import KeyFeature1 from "@/public/key-features/key-feature-1.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh-glow pt-32 lg:pt-40 pb-20 lg:pb-32">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Eyebrow chip */}
        <div className="flex justify-center fade-up" style={{ animationDelay: "0.05s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            <span className="mono text-[11px] tracking-[0.2em] uppercase text-white/80">
              AI verified news &amp; content for India
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mt-10 lg:mt-14 text-center display text-[16vw] md:text-[12vw] lg:text-[9.5rem] xl:text-[11rem] leading-[0.92] tracking-tightest fade-up text-balance"
          style={{ animationDelay: "0.15s" }}
        >
          Read the news.
          <br />
          <span className="display-italic text-white/65">See the source.</span>
          <br />
          <span className="text-accent">Decide for yourself.</span>
        </h1>

        {/* Sub */}
        <div
          className="mt-10 lg:mt-14 max-w-3xl mx-auto text-center fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-[16px] lg:text-[19px] leading-[1.55] text-white/65 text-pretty">
            UnbiaslyAI is India&apos;s first AI powered news and content platform built for{" "}
            <span className="text-white">900+ million internet users</span>{" "}
            who want fast information but no longer fully trust the feeds they
            use today. Every story comes with a 60 word summary and the source
            in plain sight.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link href="/live-news" className="btn-primary group">
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white pulse-dot" />
            Read the live feed
            <span className="transition-transform group-hover:translate-x-0.5"></span>
          </Link>
          <Link href="#about" className="btn-ghost">
            About UnbiaslyAI
          </Link>
        </div>

        {/* Floating phone preview */}
        <div
          className="mt-20 lg:mt-28 relative max-w-md mx-auto fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <div
            aria-hidden
            className="absolute -inset-12 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(230,72,30,0.25), transparent 70%)",
            }}
          />
          <div className="relative gentle-float">
            <Image
              src={KeyFeature1}
              alt="UnbiaslyAI mobile app with news feed and source attribution"
              className="w-full h-auto drop-shadow-2xl"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-12 max-w-5xl mx-auto">
          {[
            { num: "900M+", label: "Indian internet users" },
            { num: "10K", label: "Stories processed daily" },
            { num: "60", label: "Words per summary" },
            { num: "4.5★", label: "Android beta rating" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center fade-up"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              <div className="display text-5xl lg:text-6xl text-white">{s.num}</div>
              <div className="mt-2 text-[12px] text-white/50 mono tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
