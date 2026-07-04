import Image from "next/image";
import KeyFeature1 from "@/public/key-features/key-feature-1.png";
import KeyFeature2 from "@/public/key-features/key-feature-2.png";
import KeyFeature3 from "@/public/key-features/key-feature-3.png";
import KeyFeature4 from "@/public/key-features/key-feature-4.png";

const screens = [KeyFeature1, KeyFeature2, KeyFeature3, KeyFeature4];

const columns = [
  { screens: [...screens, ...screens], cls: "scroll-up-slow" },
  { screens: [...screens.slice().reverse(), ...screens.slice().reverse()], cls: "scroll-down-med" },
  { screens: [...screens, ...screens], cls: "scroll-up-fast" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-32 bg-black">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="eyebrow mb-5">About UnbiaslyAI</div>
            <h2 className="display text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[0.98] tracking-tightest text-balance">
              An app to combat misinformation and rebuild trust in what India reads.
            </h2>

            <div className="mt-8 space-y-5 max-w-xl">
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65] text-white/70">
                Reliable content from authentic Indian and international sources. Every story delivered as a{" "}
                <span className="text-white">60-word summary</span> with full source verification.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65] text-white/70">
                India reads in many languages, and trust has fragmented across them. We give every reader the same thing:{" "}
                <span className="text-white">the story, its source, and how it was framed</span>, in the language they already read.
              </p>
            </div>

            {/* Stat row instead of CTA box */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {[
                { num: "60", label: "Word summary" },
                { num: "3", label: "Languages live" },
                { num: "10K", label: "Stories / day" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="display text-[28px] sm:text-[34px] lg:text-[40px] text-white tabular leading-none">
                    {s.num}
                  </div>
                  <div className="mt-2 mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — three columns of moving phones */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div
              className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden mask-vertical"
              aria-hidden="true"
            >
              <div
                className="absolute -inset-x-10 inset-y-0 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(230,72,30,0.18), transparent 70%)",
                }}
              />

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4 h-full">
                {columns.map((column, colIdx) => (
                  <div
                    key={colIdx}
                    className={`flex flex-col gap-2.5 sm:gap-3 lg:gap-4 ${column.cls}`}
                  >
                    {column.screens.map((src, i) => (
                      <div
                        key={`${colIdx}-${i}`}
                        className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
                      >
                        <Image
                          src={src}
                          alt=""
                          className="w-full h-auto block"
                          quality={90}
                          sizes="(min-width: 1024px) 140px, 100px"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-white/45 mono uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-accent pulse-dot" />
              Inside the UnbiaslyAI app
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
