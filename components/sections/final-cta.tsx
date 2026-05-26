import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";

export default function FinalCTA() {
  return (
    <section className="relative border-t border-white/[0.06] py-32 lg:py-48 overflow-hidden mesh-glow">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 text-center">
        <div className="eyebrow mb-8">Join the movement</div>
        <h2 className="display text-5xl md:text-7xl lg:text-[8.5rem] leading-[0.92] tracking-tightest text-balance max-w-5xl mx-auto">
          Get an app that{" "}
          <span className="display-italic text-white/55">
            tells you the source —
          </span>{" "}
          always.
        </h2>
        <p className="mt-10 text-[16px] lg:text-[18px] leading-[1.6] text-white/60 max-w-2xl mx-auto text-pretty">
          Free. Indic-first. Works on iOS, Android, and Indus AppStore. Read
          10,000+ stories a day with source attribution and framing analysis.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
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
    </section>
  );
}
