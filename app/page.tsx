import Hero from "@/components/sections/hero";
import TrustMarquee from "@/components/sections/trust-marquee";
import Analyzer from "@/components/sections/analyzer";
import About from "@/components/sections/about";
import Product from "@/components/sections/product";
import Positioning from "@/components/sections/positioning";
import WhyNow from "@/components/sections/why-now";
import ABCDEP from "@/components/sections/abcdep";
import Features from "@/components/sections/features";
import Team from "@/components/sections/team";
import Closing from "@/components/sections/closing";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      {/* 1. Hero — dark */}
      <Hero />

      {/* 2. Trust marquee — dark thin band */}
      <TrustMarquee />

      {/* 3. Interactive analyzer — CREAM */}
      <Analyzer />

      {/* 4. About + phones — dark */}
      <About />

      {/* 5. How it works pipeline — dark */}
      <Product />

      {/* 6. Positioning comparison — CREAM */}
      <Positioning />

      {/* 7. Why now urgency — dark, red-tinted */}
      <WhyNow />

      {/* 8. ABCDEP wedge — dark */}
      <ABCDEP />

      {/* 9. Features (trimmed) — dark */}
      <Features />

      {/* 10. Team & advisors — CREAM */}
      <Team />

      {/* 11. What's next + final CTA — dark */}
      <Closing />

      <ScrollToTop />
    </>
  );
}
