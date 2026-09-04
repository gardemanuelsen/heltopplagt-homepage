/*
 * Helt Opplagt homepage (2026-09-04). A deliberate mix, per the user's review:
 *   - "Poster" pieces (components/poster.tsx, Lato Light clamp scale, hard
 *     corners): Header, References (logo marquee), Services (sticky photo +
 *     ruled rows with giant numerals), Contact (navy block).
 *   - "Opplagt" pieces (components/site.tsx, pills, arch photo crops, tinted
 *     grounds): Hero, About, Reviews, Aktuelt, Footer.
 * Every section runs the GSAP motion from src/lib/motion/ (split headings,
 * staggered reveals, count-up, parallax, marquee), all behind
 * prefers-reduced-motion.
 *
 * Order: what we deliver (Services) → who we are (About) → what customers say
 * (Reviews) → latest (Aktuelt) → get in touch (Contact), with the customer
 * logos as a trust band directly under the hero.
 */
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Aktuelt } from "../components/Aktuelt";
import { References } from "../components/References";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <References />
      <Services />
      <About />
      <Reviews />
      <Aktuelt />
      <Contact />
    </>
  );
}
