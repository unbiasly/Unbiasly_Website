import Hero from "@/components/sections/hero";
import TrustMarquee from "@/components/sections/trust-marquee";
import Analyzer from "@/components/sections/analyzer";
import About from "@/components/sections/about";
import Product from "@/components/sections/product";
import TodayCounter from "@/components/sections/today-counter";
import Positioning from "@/components/sections/positioning";
import WhyNow from "@/components/sections/why-now";
import ABCDEP from "@/components/sections/abcdep";
import Features from "@/components/sections/features";
import Team from "@/components/sections/team";
import Creators from "@/components/sections/creators";
import Formats from "@/components/sections/formats";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      {/* 1. Hero with live product strip (dark) */}
      <Hero />

      {/* 2. Credibility marquee (dark band) */}
      <TrustMarquee />

      {/* 3. INTERACTIVE ANALYZER — the killer demo (paper) */}
      <Analyzer />

      {/* 4. About + moving phones (dark) */}
      <About />

      {/* 5. How it works pipeline (dark) */}
      <Product />

      {/* 6. Live counter — pipeline running now (dark) */}
      <TodayCounter />

      {/* 7. Positioning comparison (paper) */}
      <Positioning />

      {/* 8. Why now urgency (dark, red-tinted) */}
      <WhyNow />

      {/* 9. ABCDEP wedge with Devanagari (dark) */}
      <ABCDEP />

      {/* 10. Features (dark) */}
      <Features />

      {/* 11. Team & advisors (paper) */}
      <Team />

      {/* 12. Creators supply side (dark) */}
      <Creators />

      {/* 13. Formats roadmap + final CTA (dark) */}
      <Formats />

      <ScrollToTop />
    </>
  );
}
