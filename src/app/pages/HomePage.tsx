import { Hero } from "../components/Hero";
import { References } from "../components/References";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Reviews } from "../components/Reviews";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <References />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}
