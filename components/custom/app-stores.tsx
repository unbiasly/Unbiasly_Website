import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/app-stores/apple.png";
import GoogleStore from "@/public/app-stores/google.png";

export default function AppStores() {
  return (
    <section className="border-t border-white/[0.06] py-20 lg:py-28 bg-black">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10 text-center">
        <div className="eyebrow mb-5">Download</div>
        <h3 className="display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tightest text-balance">
          Read with the trust layer{" "}
          <span className="display-italic text-accent">always on.</span>
        </h3>
        <p className="mt-5 text-white/55 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed">
          Free. Indic-first. iOS and Android.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="https://apps.apple.com/in/app/unbiasly/id6477892005"
            target="_blank"
            className="transition-transform hover:scale-[1.04]"
          >
            <Image src={AppleStore} alt="Download on the App Store" className="h-12 sm:h-14 w-auto" quality={100} />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
            target="_blank"
            className="transition-transform hover:scale-[1.04]"
          >
            <Image src={GoogleStore} alt="Get it on Google Play" className="h-12 sm:h-14 w-auto" quality={100} />
          </Link>
        </div>
      </div>
    </section>
  );
}
