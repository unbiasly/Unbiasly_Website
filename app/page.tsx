import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Product from "@/components/sections/product";
import Features from "@/components/sections/features";
import ABCDEP from "@/components/sections/abcdep";
import Formats from "@/components/sections/formats";
import Creators from "@/components/sections/creators";
import Mission from "@/components/sections/mission";
import Team from "@/components/sections/team";
import FinalCTA from "@/components/sections/final-cta";
import ScrollToTop from "@/components/custom/scroll-to-top";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Product />
      <Features />
      <ABCDEP />
      <Formats />
      <Creators />
      <Mission />
      <Team />
      <FinalCTA />
      <ScrollToTop />
    </>
  );
}
