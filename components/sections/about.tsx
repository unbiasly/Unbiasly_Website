import Image from "next/image";
import Link from "next/link";
import KeyFeature1 from "@/public/key-features/key-feature-1.png";
import KeyFeature2 from "@/public/key-features/key-feature-2.png";
import KeyFeature3 from "@/public/key-features/key-feature-3.png";
import KeyFeature4 from "@/public/key-features/key-feature-4.png";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";

const screens = [KeyFeature1, KeyFeature2, KeyFeature3, KeyFeature4];

// Build three columns of phones, each repeated 2x for seamless loop
const columns = [
  { screens: [...screens, ...screens], cls: "scroll-up-slow" },
  { screens: [...screens.slice().reverse(), ...screens.slice().reverse()], cls: "scroll-down-med" },
  { screens: [...screens, ...screens], cls: "scroll-up-fast" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/[0.06] py-24 lg:py-40 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT — copy + CTAs */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="eyebrow mb-6">About UnbiaslyAI</div>
            <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance">
              An app dedicated to{" "}
              <span className="display-italic text-white/60">
                combating misinformation
              </span>{" "}
              and rebuilding trust.
            </h2>

            <div className="mt-10 space-y-6 max-w-2xl">
              <p className="text-[15px] lg:text-[17px] leading-[1.65] text-white/70">
                UnbiaslyAI curates reliable content from authentic national and
                international sources. Every story is delivered as an easy to
                understand{" "}
                <span className="text-white">60-word summary</span> with full
                source verification. Our pipeline reads each story in its
                original Indian language wherever possible. This allows bias
                that lives in idioms, honorifics, and local framing to be
                detected before it reaches the reader.
              </p>
              <p className="text-[15px] lg:text-[17px] leading-[1.65] text-white/70">
                We are{" "}
                <span className="text-white">recommendation first, not publisher first.</span>{" "}
                The feed learns what you read, skip, share, listen to, watch,
                and return to. It then recommends source attributed content in
                your preferred language and format. Over the next twelve months,
                the same verified stories will be available as text,{" "}
                <span className="text-white">AI generated audio</span>, and{" "}
                <span className="text-white">AI anchor short form video</span>.
                Verified journalists and creators will publish through the same
                provenance layer and earn through a revenue share model as
                trusted inventory scales.
              </p>
            </div>

            {/* App store callout box */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="display text-3xl lg:text-4xl leading-tight">
                    Download the app
                  </div>
                  <div className="mt-1.5 text-[14px] text-white/55">
                    Free. Available on iOS, Android, and Indus AppStore. Hindi, English, and Bangla.
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="https://apps.apple.com/in/app/unbiasly/id6477892005"
                    target="_blank"
                    className="block transition-transform hover:scale-[1.04]"
                  >
                    <Image src={AppleStore} alt="Download on the App Store" className="h-12 lg:h-14 w-auto" quality={100} />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
                    target="_blank"
                    className="block transition-transform hover:scale-[1.04]"
                  >
                    <Image src={GoogleStore} alt="Get it on Google Play" className="h-12 lg:h-14 w-auto" quality={100} />
                  </Link>
                  <Link
                    href="https://www.indusappstore.com/apps/news-magazines/unbiaslyai/com.unbiasly.app/"
                    target="_blank"
                    className="block transition-transform hover:scale-[1.04]"
                  >
                    <Image src={IndusStore} alt="Get it on Indus AppStore" className="h-12 lg:h-14 w-auto" quality={100} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — three columns of moving phones */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div
              className="relative h-[520px] lg:h-[680px] overflow-hidden mask-vertical"
              aria-hidden="true"
            >
              {/* Side glow behind phones */}
              <div
                className="absolute -inset-x-10 inset-y-0 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(230,72,30,0.18), transparent 70%)",
                }}
              />

              <div className="grid grid-cols-3 gap-3 lg:gap-5 h-full">
                {columns.map((column, colIdx) => (
                  <div
                    key={colIdx}
                    className={`flex flex-col gap-3 lg:gap-5 ${column.cls}`}
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

            {/* Label tag */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-white/45 mono uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-accent pulse-dot" />
              Inside the UnbiaslyAI app
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
