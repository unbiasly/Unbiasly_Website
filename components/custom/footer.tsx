import Link from "next/link";
import Image from "next/image";
import SubscribeForm from "./subscribe";
import UnbiaslyLogo from "@/public/unbiasly-ai-logo.png";

const socials = [
  { href: "https://www.linkedin.com/company/unbiasly-ai", label: "LinkedIn", short: "Li" },
  { href: "https://www.instagram.com/unbiasly.ai", label: "Instagram", short: "Ig" },
  { href: "https://x.com/unbiaslyai", label: "X / Twitter", short: "X" },
  { href: "https://www.youtube.com/@unbiaslyai", label: "YouTube", short: "Yt" },
  { href: "https://medium.com/@unbiaslyAI", label: "Medium", short: "Md" },
  { href: "https://www.facebook.com/UnbiaslyAI", label: "Facebook", short: "Fb" },
  { href: "https://www.quora.com/profile/UnbiaslyAI", label: "Quora", short: "Qa" },
];

const links = {
  product: [
    { href: "/live-news", label: "Live News" },
    { href: "/#product", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/#abcdep", label: "ABCDEP wedge" },
  ],
  company: [
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#advisors", label: "Advisors" },
    { href: "/#creators", label: "Creators" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      {/* Subscribe block */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">The Bulletin</div>
            <h2 className="display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tightest text-balance">
              Get the briefing.{" "}
              <span className="display-italic text-white/55">
                Source-attributed, weekly.
              </span>
            </h2>
            <p className="mt-6 text-white/55 max-w-xl text-[15px] leading-relaxed">
              A weekly dispatch from New Delhi. We share what India read, what was
              framed honestly, and what was not. The newsletter is free, with no
              spam, and you can unsubscribe in one click.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <SubscribeForm />
            <div className="mt-6 flex items-center gap-3 text-[12px] text-white/45">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              <span>Read by people across 22+ Indian languages.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Link columns */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="relative w-[140px] h-[34px]">
                <Image
                  src={UnbiaslyLogo}
                  alt="UnbiaslyAI"
                  fill
                  className="object-contain object-left invert"
                  quality={100}
                />
              </div>
            </Link>
            <p className="mt-6 text-[14px] leading-relaxed text-white/55 max-w-xs">
              India&apos;s trust layer for news and content. We provide verified
              sources, native Indic-language framing analysis, and 60-word clarity.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://apps.apple.com/in/app/unbiasly/id6477892005"
                target="_blank"
                rel="noreferrer"
                className="mono text-[11px] uppercase tracking-[0.2em] px-3.5 py-2 border border-white/15 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.unbiasly.app"
                target="_blank"
                rel="noreferrer"
                className="mono text-[11px] uppercase tracking-[0.2em] px-3.5 py-2 border border-white/15 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                Android
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-5">
              Product
            </div>
            <ul className="space-y-3">
              {links.product.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/75 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-5">
              Company
            </div>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/75 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mono text-[10px] tracking-[0.25em] uppercase text-white/35 mb-5">
              Contact
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@unbiasly.ai"
                  className="text-[14px] text-white/75 hover:text-accent transition-colors"
                >
                  contact@unbiasly.ai
                </a>
              </li>
              <li className="text-[14px] text-white/55 leading-relaxed">
                Basement C11,
                <br />
                Green Park Extension,
                <br />
                New Delhi, 110016
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/45 mono">
            © 2025 Triverge Insight Private Limited &nbsp;|&nbsp;{" "}
            {links.legal.map((l, i) => (
              <span key={l.href}>
                <Link href={l.href} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
                {i < links.legal.length - 1 && <span> &nbsp;|&nbsp; </span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center text-[10px] mono tracking-wider border border-white/15 rounded-full hover:border-accent hover:text-accent hover:bg-white/5 transition-all uppercase"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
