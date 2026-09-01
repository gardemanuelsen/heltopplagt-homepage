/*
 * Helt Opplagt homepage — seed 26b45123. Light, calm, corporate.
 *
 * Section grounds alternate white and a neutral near-white grey (--color-tint,
 * NOT blue), each transition marked by a single hairline seam. Blue is detail
 * only: deep #004b8d on the primary CTA, signal #0078c4 on links / the hero
 * accent word. Headings are Plus Jakarta Sans, sentence case, semibold, ink;
 * body is Inter; Archivo survives only on the giant footer phone number.
 * Photo panels take an 18px window-cut notch; no drop shadows. One authored
 * motion: the hero image carousel and its amber progress indicator.
 * Section order follows a delivery-run logic: what we carry (Services) → who we
 * are (About) → who we serve (References) → what they say (Reviews) → latest
 * (Aktuelt) → get in touch (Contact).
 */
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Aktuelt } from "../components/Aktuelt";
import { References } from "../components/References";
import { Reviews } from "../components/Reviews";
import { Seam } from "../components/livery";

export function HomePage() {
  return (
    <>
      <Hero />
      <Seam />
      <Services />
      <Seam />
      <About />
      <Seam />
      <References />
      <Seam />
      <Reviews />
      <Seam />
      <Aktuelt />
      <Seam />
      <Contact />
    </>
  );
}
