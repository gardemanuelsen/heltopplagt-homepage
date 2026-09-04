import { ArrowRight } from "lucide-react";
import { useCallback, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router";
import fruktImg from "../../images/hero/web/hero-frukt.jpg";
import lunsjImg from "../../images/div/web/lunsj.jpg";
import kantineImg from "../../images/div/web/kantine.jpg";
import cateringImg from "../../images/div/web/fat-anretning.jpg";
import inneklimaImg from "../../images/div/web/tekniker.jpg";
import renholdImg from "../../images/div/web/renhold.jpg";
import { SERVICES, type Service } from "../../lib/services";
import { useReveal } from "../../lib/motion/useReveal";
import { useSplitReveal } from "../../lib/motion/useSplitReveal";
import { useStickySwap } from "../../lib/motion/useStickySwap";
import { ACCENT, Button, Index, PosterHead, SECTION_Y, WRAP } from "./poster";

/* Light JPGs only — the <slug>/<slug>.png product shots are 0.7–1.6 MB each. */
const PHOTO: Record<string, string> = {
  frukt: fruktImg,
  lunsj: lunsjImg,
  kantine: kantineImg,
  catering: cateringImg,
  inneklima: inneklimaImg,
  renhold: renholdImg,
};

function ServiceRow({
  service,
  index,
  active,
}: {
  service: Service;
  index: number;
  active: boolean;
}) {
  const accent = ACCENT[service.accent];
  return (
    <Link
      to={service.href}
      data-row
      className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-navy/10 py-10 last:border-b lg:gap-x-10 lg:py-16"
    >
      {/* Below lg the photo sits inline; at lg+ the sticky frame shows it. */}
      <div className="col-span-2 mb-6 aspect-[16/10] overflow-hidden rounded-photo bg-navy/5 lg:hidden">
        <img
          src={PHOTO[service.slug]}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* At lg the current row's numeral takes the service accent. */}
      <Index
        n={index + 1}
        className="numeral-sm text-navy transition-colors duration-500 lg:text-(--accent)"
        style={
          { "--accent": active ? accent.hex : "var(--color-navy)" } as CSSProperties
        }
      />

      <div data-reveal>
        <span aria-hidden="true" className={`block h-[3px] w-12 ${accent.bg}`} />
        <h3 className="mt-4 display-2 text-navy transition-colors group-hover:text-brand">
          {service.name}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.55] text-navy/70">
          {service.blurb}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
          Les mer
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </span>
      </div>
    </Link>
  );
}

/**
 * The six services as full-width ruled rows with giant index numerals. At
 * lg+ a sticky photo frame on the left crossfades to whichever row is
 * crossing the middle of the viewport.
 */
export function Services() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const onChange = useCallback((i: number) => setActive(i), []);

  useSplitReveal(ref);
  useReveal(ref);
  useStickySwap(ref, { rows: "[data-row]", onChange });

  const current = SERVICES[active];

  return (
    <section
      id="tjenester"
      ref={ref}
      aria-labelledby="tjenester-tittel"
      className={`scroll-mt-16 bg-white ${SECTION_Y}`}
    >
      <div className={WRAP}>
        <PosterHead
          id="tjenester-tittel"
          label="Våre tjenester"
          title="Alt som gjør arbeidsdagen bedre, fra én leverandør"
          lede="Seks tjenester som kan bestilles hver for seg eller samlet — alltid med én kontaktperson og én faktura."
          action={
            <Button to="/kontakt" variant="outline" arrow>
              Få tilbud på alle
            </Button>
          }
        />

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24 aspect-[4/5] max-h-[calc(100svh-8rem)] overflow-hidden rounded-photo bg-navy">
              {SERVICES.map((s, i) => (
                <img
                  key={s.slug}
                  src={PHOTO[s.slug]}
                  alt=""
                  loading={i === 0 ? undefined : "lazy"}
                  decoding="async"
                  style={{ opacity: i === active ? 1 : 0 }}
                  className="absolute inset-0 h-full w-full object-cover motion-safe:transition-opacity motion-safe:duration-500"
                />
              ))}
              <span
                className={`absolute bottom-5 left-5 inline-flex items-center gap-3 rounded-btn px-4 py-2 text-[13px] font-semibold text-navy ${ACCENT[current.accent].bg}`}
              >
                <Index n={active + 1} />
                {current.name}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            {SERVICES.map((service, i) => (
              <ServiceRow
                key={service.slug}
                service={service}
                index={i}
                active={i === active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
