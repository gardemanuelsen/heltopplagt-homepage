import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import teamImg from "../../images/hele_gjengen.jpg";
import { useCountUp } from "../../lib/motion/useCountUp";
import { useParallax } from "../../lib/motion/useParallax";
import { useReveal } from "../../lib/motion/useReveal";
import { useSplitReveal } from "../../lib/motion/useSplitReveal";
import { CONTAINER, Kicker, Pill } from "./site";

/*
 * Every line below is checkable: the brochure (januar 2026), PRODUCT.md, or
 * the Ansvar page. Two figures from /om-oss were deliberately NOT promoted
 * here — "98% kundetilfredshet", which no source backs, and the headcount,
 * which /om-oss puts at 50+ while Renhold.tsx says 100.
 */
const points = [
  "Over 200 bedrifter i Oslo-området",
  "Rundt 12 000 leveranser i uken, til over 50 000 ansatte",
  "Én kontaktperson og én faktura for alle seks tjenester",
  "Miljøfyrtårn-sertifisert, med CO2-nøytral drift",
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  useSplitReveal(ref);
  useReveal(ref);
  useCountUp(ref);
  useParallax(ref, { amount: 6 });

  return (
    <section id="om-oss" ref={ref} className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div
        className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}
      >
        <div
          data-reveal
          className="relative order-2 mx-auto w-full max-w-[26rem] lg:order-1 lg:max-w-[30rem]"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-photo">
            <img
              src={teamImg}
              alt="Teamet i Helt Opplagt"
              data-parallax
              className="h-full w-full object-cover"
            />
          </div>
          {/* Floating stat chip — the number counts up once in view. */}
          <div className="absolute -right-2 bottom-10 rounded-[1.25rem] bg-white px-6 py-4 shadow-[0_16px_36px_-8px_rgba(13,43,64,0.22)] sm:-right-6">
            <p
              data-countup={40}
              data-suffix="+"
              className="font-lato text-[34px] font-light leading-none text-brand tabular-nums"
            >
              40+
            </p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-navy/55">
              År erfaring
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Kicker>Om oss</Kicker>
          <h2
            data-split
            className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-navy sm:text-[38px] lg:text-[44px]"
          >
            Helse og trivsel på arbeidsplassen siden 1985
          </h2>

          <p data-reveal className="mt-6 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
            Helt Opplagt er en markedsorientert leverandør av løpende,
            abonnementsbaserte tjenester innen helse og trivsel på
            arbeidsplassen. Frukt, lunsj, kantine, catering, inneklima og
            renhold, levert av de samme folkene, uke etter uke.
          </p>
          <p data-reveal className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
            Målet er enkelt: å gjøre arbeidsdagen litt bedre for menneskene som
            jobber der, og litt enklere for dere som har ansvaret for den.
          </p>

          <ul data-reveal-stagger className="mt-8 flex flex-col gap-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3.5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                  <Check className="h-4 w-4 text-lime" strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-navy/80">{p}</span>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-9">
            <Pill to="/om-oss" variant="outline">
              Mer om oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
