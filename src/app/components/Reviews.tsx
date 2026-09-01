import { useEffect, useRef } from "react";
import { Quote, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CONTAINER, Pill, SectionHead } from "./site";

const reviews = [
  {
    name: "Wenche Revhaug",
    company: "Kronos Titan",
    role: "Styremedlem",
    service: "Kantine",
    text: "Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
  },
  {
    name: "Tor Anders Andersen",
    company: "Team Verksted AS Avd Follo",
    role: "Avdelingsleder",
    service: "Lunsj",
    text: "Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
  },
  {
    name: "Maria Bergström",
    company: "Vinmonopolet AS",
    role: "Kontorsjef",
    service: "Frukt",
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer så vi kan holde energien oppe ut dagen. Frukten er veldig populær og det er konkurranse om å kaste seg over kurvene når de kommer. Vi er veldig godt fornøyd med Helt Opplagt. De er svært fleksible og raske til å følge opp ønsker.",
  },
  {
    name: "Helge Stensrud",
    company: "Schibsted Trykk Oslo AS",
    role: "Driftsansvarlig",
    service: "Renhold",
    text: "Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Når ansatte kommenterer at det er rent blir man trygg på at man har gjort riktig valg av leverandør. Jeg vil spesielt trekke frem positiviteten Helt Opplagt viser. De er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om.",
  },
];

const COUNT = reviews.length;
/** Three copies back to back so there's always a real card to scroll to in either direction; the middle copy is "home". */
const loopedReviews = [...reviews, ...reviews, ...reviews];

export function Reviews() {
  const rowRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(COUNT);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pollToken = useRef(0);

  useEffect(() => {
    cardRefs.current[COUNT]?.scrollIntoView({
      behavior: "auto",
      inline: "start",
      block: "nearest",
    });
  }, []);

  /** Waits until the row's smooth-scroll animation has actually settled (scrollLeft unchanged for a few frames), rather than guessing a fixed duration. */
  function whenScrollSettles(callback: () => void) {
    const row = rowRef.current;
    if (!row) return;
    const token = ++pollToken.current;
    let lastLeft = row.scrollLeft;
    let stableFrames = 0;
    let frame = 0;
    function tick() {
      if (token !== pollToken.current) return; // a newer scroll superseded this one
      frame++;
      if (frame > 2 && Math.abs(row!.scrollLeft - lastLeft) < 0.5) {
        stableFrames++;
      } else {
        stableFrames = 0;
      }
      lastLeft = row!.scrollLeft;
      if (stableFrames >= 4) {
        callback();
        return;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function goTo(target: number) {
    cardRefs.current[target]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    activeRef.current = target;

    whenScrollSettles(() => {
      let landed = target;
      if (target >= COUNT * 2) landed = target - COUNT;
      else if (target < COUNT) landed = target + COUNT;

      if (landed !== target) {
        cardRefs.current[landed]?.scrollIntoView({
          behavior: "auto",
          inline: "start",
          block: "nearest",
        });
        activeRef.current = landed;
      }
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 lg:py-28">
      {/* Puzzle motif — warm amber tint on the warm ground, off the left edge. */}
      <span
        aria-hidden="true"
        className="livery-puzzle aspect-[100/129] -left-16 -bottom-12 w-40 -rotate-[15deg] bg-amber/15 lg:-left-8 lg:w-60"
      />
      <div className={`${CONTAINER} relative z-10`}>
        <SectionHead
          kicker="Kundene våre"
          title="Det bedriftene selv sier om oss"
          lede="Ekte tilbakemeldinger fra bedrifter vi leverer til hver dag."
          action={
            <div className="flex items-center gap-3">
              <Pill to="/referanser" variant="outline">
                Alle referanser
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
              <button
                type="button"
                onClick={() => goTo(activeRef.current - 1)}
                aria-label="Forrige"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeRef.current + 1)}
                aria-label="Neste"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          }
        />

        <div
          ref={rowRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopedReviews.map((review, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex w-[290px] flex-shrink-0 flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)] sm:w-[340px] lg:w-[400px]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand/10 px-3.5 py-1.5 text-[12px] font-semibold text-brand">
                  {review.service}
                </span>
                <Quote
                  className="h-6 w-6 rotate-180 text-amber"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-navy/75">
                {review.text}
              </p>
              <div className="mt-6 border-t border-navy/10 pt-4">
                <p className="text-[15px] font-semibold text-navy">
                  {review.name}
                </p>
                <p className="mt-0.5 text-[13px] text-navy/55">
                  {review.role}, {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
