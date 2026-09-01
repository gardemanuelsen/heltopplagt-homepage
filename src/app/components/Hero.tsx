import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import heroLunsj from "../../images/hero/web/hero-lunsj.jpg";
import heroKantine from "../../images/hero/web/hero-kantine.jpg";
import heroFrukt from "../../images/hero/web/hero-frukt.jpg";
import heroCatering from "../../images/hero/web/hero-catering.jpg";
import heroInneklima from "../../images/hero/web/hero-inneklima.jpg";
import heroRenhold from "../../images/hero/web/hero-renhold.jpg";
import { LIVERY_CONTAINER, LiveryCta } from "./livery";

const SLIDE_DURATION = 6000;

const slides = [
  { src: heroFrukt, label: "Frukt" },
  { src: heroLunsj, label: "Lunsj" },
  { src: heroKantine, label: "Kantine" },
  { src: heroCatering, label: "Catering" },
  { src: heroInneklima, label: "Inneklima" },
  { src: heroRenhold, label: "Renhold" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [progressRunning, setProgressRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, [active]);

  useEffect(() => {
    setProgressRunning(false);
    const raf = requestAnimationFrame(() => setProgressRunning(true));
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section className="relative isolate overflow-hidden bg-white text-ink">
      <div
        className={`${LIVERY_CONTAINER} grid min-h-[calc(100svh-9rem)] items-center gap-y-9 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-14 lg:py-14 xl:gap-x-20 2xl:gap-x-24`}
      >
        <div className="relative z-10 max-w-[42rem] lg:max-w-none">
          <h1 className="font-jakarta text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px]">
            Det{" "}
            <span className="font-normal italic text-signal">Helt Opplagte</span>{" "}
            valg for en sunnere, renere og enklere hverdag
          </h1>

          <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-ink/70 lg:text-[17px] xl:mt-8 xl:max-w-[42rem] xl:text-[19px]">
            Helt Opplagt på jobben er en markedsorientert leverandør av løpende
            abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10">
            <LiveryCta to="/kontakt">
              Kontakt oss i dag
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </LiveryCta>
            <LiveryCta href="#tjenester" variant="ghost-dark">
              Se tjenestene
            </LiveryCta>
          </div>
        </div>

        {/* Image carousel — window-cut panel. */}
        <div className="relative z-10 text-ink lg:h-[clamp(26rem,64vh,44rem)] xl:h-[clamp(30rem,68vh,52rem)]">
          <div className="livery-panel livery-notch relative h-[62vw] max-h-[30rem] w-full overflow-hidden sm:h-[26rem] lg:h-full lg:max-h-none">
            {slides.map((slide, i) => (
              <div
                key={slide.label}
                className={
                  i === active
                    ? "absolute inset-0 z-[1] opacity-100 transition-opacity duration-[1200ms] ease-in-out"
                    : "absolute inset-0 z-0 opacity-0 transition-opacity duration-[1200ms] ease-in-out"
                }
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  className={
                    i === active
                      ? "h-full w-full scale-110 object-cover transition-transform duration-[7500ms] ease-out"
                      : "h-full w-full scale-100 object-cover"
                  }
                />
              </div>
            ))}

            {/* Slide labels over a graded foot. */}
            <div className="absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-ink/85 via-ink/40 to-transparent px-3 pb-3 pt-20 sm:px-4">
              <div className="flex gap-1.5 sm:gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.label}
                    onClick={() => setActive(i)}
                    className="group flex-1 text-left"
                    aria-label={`Vis ${slide.label}`}
                  >
                    <div className="mb-2 h-[3px] w-full overflow-hidden bg-white/25">
                      {i === active ? (
                        <div
                          className={
                            progressRunning
                              ? "h-full w-full bg-amber transition-[width] duration-[6000ms] ease-linear"
                              : "h-full w-0 bg-amber"
                          }
                        />
                      ) : (
                        <div className="h-full w-0 bg-amber transition-[width] duration-300 group-hover:w-full" />
                      )}
                    </div>
                    <span
                      className={
                        "hidden font-jakarta text-[11px] font-semibold transition-colors sm:inline-flex sm:items-center sm:border sm:px-2 sm:py-0.5 " +
                        (i === active
                          ? "border-amber text-white"
                          : "border-white/25 text-white/60 group-hover:border-white/50 group-hover:text-white/90")
                      }
                    >
                      {slide.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
