import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { CtaSection } from "../components/CtaSection";
import { Contact } from "../components/Contact";
import { FarmCta } from "../components/FarmCta";
import { References } from "../components/References";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CtaSection />
      <FarmCta />
      <References />
      <Reviews />
      <About />
      <Contact />
    </>
  );
}
