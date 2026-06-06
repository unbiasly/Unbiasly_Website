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
import Closing from "@/components/sections/closing";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="trust"><TrustMarquee /></section>
      <Analyzer />
      <About />
      <FormatSwitcher />
      <Product />
      <Manifesto />
      <Positioning />
      <section id="whynow"><WhyNow /></section>
      <ABCDEP />
      <Features />
      <Team />
      <Closing />
      <ScrollToTop />
    </>
  );
}
