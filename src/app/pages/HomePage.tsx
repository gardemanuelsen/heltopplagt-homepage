/*
 * Helt Opplagt homepage — "Opplagt" refresh (2026-09-01). Calm, airy,
 * photo-forward, per the reference language of compass-group.no, detrestuer.no
 * and incworks.no.
 *
 * Section grounds carry the rhythm (no hairline seams): white hero + logo
 * strip → cloud (pale blue) services → white about → sand (warm) reviews →
 * white aktuelt → navy contact panel → navy footer. Headings are Lato Light,
 * body Inter; every action is a pill; the arch photo crop (hero, About) is the
 * one signature shape.
 *
 * Order: what we deliver (Services) → who we are (About) → what customers say
 * (Reviews) → latest (Aktuelt) → get in touch (Contact), with the customer
 * logos promoted to a trust strip directly under the hero.
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
