import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";
import IndusStore from "@/public/app-stores/indus.png";

export default function AppStores() {
  return (
    <section className="border-t border-white/[0.06] py-20 lg:py-32 bg-black">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 text-center">
        <div className="eyebrow mb-6">Download</div>
        <h3 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tightest text-balance">
          Read with the trust layer{" "}
          <span className="display-italic text-accent">always on.</span>
        </h3>
        <p className="mt-6 text-white/55 max-w-xl mx-auto text-[15px] leading-relaxed">
          Free. Indic-first. Works on iOS, Android, and Indus AppStore.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="https://apps.apple.com/in/app/unbiasly/id6477892005"
            target="_blank"
            className="transition-transform hover:scale-[1.04]"
          >
            <Image src={AppleStore} alt="Download on the App Store" className="h-14 w-auto" quality={100} />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
            target="_blank"
            className="transition-transform hover:scale-[1.04]"
          >
            <Image src={GoogleStore} alt="Get it on Google Play" className="h-14 w-auto" quality={100} />
          </Link>
          <Link
            href="https://www.indusappstore.com/apps/news-magazines/unbiaslyai/com.unbiasly.app/"
            target="_blank"
            className="transition-transform hover:scale-[1.04]"
          >
            <Image src={IndusStore} alt="Get it on Indus AppStore" className="h-14 w-auto" quality={100} />
          </Link>
        </div>
      </div>
    </section>
  );
}
