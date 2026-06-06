import Hero from "@/components/sections/hero";
import TrustMarquee from "@/components/sections/trust-marquee";
import Analyzer from "@/components/sections/analyzer";
import About from "@/components/sections/about";
import FormatSwitcher from "@/components/sections/format-switcher";
import Product from "@/components/sections/product";
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
      <section id="whynow"><WhyNow /></section>
      <ABCDEP />
      <Features />
      <Team />
      <Closing />
      <ScrollToTop />
    </>
  );
}
