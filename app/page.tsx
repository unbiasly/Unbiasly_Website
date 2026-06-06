import Hero from "@/components/sections/hero";
import TrustMarquee from "@/components/sections/trust-marquee";
import Analyzer from "@/components/sections/analyzer";
import About from "@/components/sections/about";
import FormatSwitcher from "@/components/sections/format-switcher";
import Product from "@/components/sections/product";
import Manifesto from "@/components/sections/manifesto";
import Positioning from "@/components/sections/positioning";
import WhyNow from "@/components/sections/why-now";
import ABCDEP from "@/components/sections/abcdep";
import Features from "@/components/sections/features";
import Team from "@/components/sections/team";
import PullQuote from "@/components/sections/pull-quote";
import Closing from "@/components/sections/closing";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      {/* 1. Hero — CREAM (flipped) */}
      <Hero />

      {/* 2. Trust marquee — dark thin band */}
      <section id="trust"><TrustMarquee /></section>

      {/* 3. Interactive analyzer — CREAM */}
      <Analyzer />

      {/* 4. About + phones — dark */}
      <About />

      {/* 5. NEW: Format switcher — dark, the killer demo */}
      <FormatSwitcher />

      {/* 6. How it works pipeline — dark */}
      <Product />

      {/* 7. NEW: Manifesto — CREAM editorial moment */}
      <Manifesto />

      {/* 8. Positioning comparison — CREAM */}
      <Positioning />

      {/* 9. Why now — dark */}
      <section id="whynow"><WhyNow /></section>

      {/* 10. ABCDEP wedge — dark */}
      <ABCDEP />

      {/* 11. Features — dark */}
      <Features />

      {/* 12. Team — CREAM */}
      <Team />

      {/* 13. NEW: Named pull quote — dark */}
      <PullQuote />

      {/* 14. What's next + final CTA — dark */}
      <Closing />

      <ScrollToTop />
    </>
  );
}
