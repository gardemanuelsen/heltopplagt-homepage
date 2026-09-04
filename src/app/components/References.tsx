import { useRef } from "react";
import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";
import { useMarquee } from "../../lib/motion/useMarquee";
import { Label, WRAP } from "./poster";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

/**
 * Customer logo band under the hero. With motion the logos drift as a
 * marquee (the list is rendered twice, second copy hidden from AT); with
 * reduced motion the duplicate is hidden and the single row wraps, centred.
 * Each item carries its own padding instead of a track gap so both halves
 * measure the same and the loop is seamless.
 */
export function References() {
  const trackRef = useRef<HTMLUListElement>(null);
  useMarquee(trackRef, { pxPerSecond: 45 });

  const items = (duplicate: boolean) =>
    customers.map((c) => (
      <li
        key={(duplicate ? "dup-" : "") + c.name}
        aria-hidden={duplicate || undefined}
        className={
          "flex items-center justify-center px-7 py-3 lg:px-10 " +
          (duplicate ? "hidden motion-safe:flex" : "")
        }
      >
        <img
          src={c.logo}
          alt={duplicate ? "" : c.name}
          className="h-8 w-auto max-w-[9rem] object-contain opacity-70 grayscale lg:h-10"
        />
      </li>
    ));

  return (
    <section aria-label="Noen av bedriftene vi leverer til" className="border-b border-navy/10 bg-white">
      <div className={`${WRAP} grid gap-6 py-10 lg:grid-cols-12 lg:items-center lg:py-12`}>
        <div className="lg:col-span-3">
          <Label>Noen av bedriftene vi leverer til</Label>
        </div>
        <div className="overflow-hidden lg:col-span-9 motion-safe:mask-fade-x">
          <ul
            ref={trackRef}
            className="flex flex-wrap items-center justify-center motion-safe:w-max motion-safe:flex-nowrap motion-safe:justify-start"
          >
            {items(false)}
            {items(true)}
          </ul>
        </div>
      </div>
    </section>
  );
}
