import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/[0.06] py-24 lg:py-36 bg-black">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div className="text-center">
          <div className="eyebrow mb-6">About UnbiaslyAI</div>
          <h2 className="display text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tightest text-balance mx-auto max-w-5xl">
            Reliable content for a country that reads in many languages.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 text-[15px] lg:text-[17px] leading-[1.65] text-white/70">
              UnbiaslyAI curates reliable content from authentic national and
              international sources. Every story is presented with a concise
              summary, visible source attribution, and context that helps users
              understand what they are reading.
            </p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 text-[15px] lg:text-[17px] leading-[1.65] text-white/70">
              Our feed is built around user relevance, not publisher priority.
              It learns what people read, skip, share, listen to, watch, and
              return to, while preserving provenance across text, audio, video,
              and creator led formats.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8 backdrop-blur-sm text-left">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="display text-3xl lg:text-4xl leading-tight">
                  Download the app
                </div>
                <div className="mt-1.5 text-[14px] text-white/55">
                  Available on iOS, Android, and Indus Appstore in Hindi, English, and Bangla.
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
                  <Image src={IndusStore} alt="Get it on Indus Appstore" className="h-12 lg:h-14 w-auto" quality={100} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
