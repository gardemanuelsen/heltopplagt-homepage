import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import heroLunsj from "../../images/hero/web/hero-lunsj.jpg";
import heroKantine from "../../images/hero/web/hero-kantine.jpg";
import heroFrukt from "../../images/hero/web/hero-frukt.jpg";
import heroCatering from "../../images/hero/web/hero-catering.jpg";
import heroInneklima from "../../images/hero/web/hero-inneklima.jpg";
import heroRenhold from "../../images/hero/web/hero-renhold.jpg";
import { CONTAINER, Kicker, Pill } from "./site";

const SLIDE_DURATION = 6000;

const slides = [
  { src: heroFrukt, label: "Frukt", href: "/tjenester/frukt" },
  { src: heroLunsj, label: "Lunsj", href: "/tjenester/lunsj" },
  { src: heroKantine, label: "Kantine", href: "/tjenester/kantine" },
  { src: heroCatering, label: "Catering", href: "/tjenester/catering" },
  { src: heroInneklima, label: "Inneklima", href: "/tjenester/inneklima" },
  { src: heroRenhold, label: "Renhold", href: "/tjenester/renhold" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="bg-white">
      <div
        className={`${CONTAINER} grid items-center gap-y-12 py-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:py-16 xl:gap-x-24`}
      >
        <div className="max-w-[42rem] lg:max-w-none">
          <Kicker>Helt Opplagt på jobben</Kicker>

          <h1 className="mt-5 font-lato text-[38px] font-light leading-[1.1] tracking-[-0.01em] text-navy sm:text-[48px] lg:text-[54px] xl:text-[64px]">
            Det{" "}
            {/* The brand phrase carries the payoff face — its one hero moment. */}
            <span className="payoff-marker font-payoff font-bold text-brand">
              Helt Opplagte
            </span>{" "}
            valg for en sunnere, renere og enklere hverdag
          </h1>

          <p className="mt-6 max-w-[36rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px] xl:mt-7">
            Frukt, lunsj, kantine, catering, inneklima og renhold — levert til
            arbeidsplassen av én leverandør, med én kontaktperson og én faktura.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Pill to="/kontakt">
              Kontakt oss i dag
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
            <Pill to="/tjenester" variant="outline">
              Se tjenestene
            </Pill>
          </div>
        </div>

        {/* Arch photo carousel — the site's one signature shape. */}
        <div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-t-full rounded-b-[2rem] lg:max-w-[30rem] xl:max-w-[33rem]">
            {slides.map((slide, i) => (
              <img
                key={slide.label}
                src={slide.src}
                alt={slide.label}
                className={
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out " +
                  (i === active ? "z-[1] opacity-100" : "z-0 opacity-0")
                }
              />
            ))}
            <Link
              to={slides[active].href}
              className="absolute bottom-4 left-1/2 z-[2] -translate-x-1/2 rounded-full bg-white/90 px-5 py-2 text-[13px] font-semibold text-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-brand"
            >
              {slides[active].label}
            </Link>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Vis ${slide.label}`}
                aria-current={i === active}
                className={
                  "h-2 rounded-full transition-all duration-300 " +
                  (i === active
                    ? "w-6 bg-brand"
                    : "w-2 bg-navy/20 hover:bg-navy/40")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
