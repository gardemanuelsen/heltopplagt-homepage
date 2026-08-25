import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import heroLunsj from "../../images/hero/web/hero-lunsj.jpg";
import heroKantine from "../../images/hero/web/hero-kantine.jpg";
import heroFrukt from "../../images/hero/web/hero-frukt.jpg";
import heroCatering from "../../images/hero/web/hero-catering.jpg";
import heroInneklima from "../../images/hero/web/hero-inneklima.jpg";
import heroRenhold from "../../images/hero/web/hero-renhold.jpg";

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
    <section className="h-[calc(100vh-5rem)] bg-base-100">
      <div className="max-w-[1600px] 2xl:max-w-[1800px] 3xl:max-w-[2000px] 4xl:max-w-[2200px] 5xl:max-w-[2400px] mx-auto h-full px-4 sm:px-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16 3xl:gap-20 4xl:gap-24">
        {/* Text */}
        <div className="flex items-center py-10 sm:py-14 lg:py-0">
          <div className="max-w-[700px] 2xl:max-w-[820px] 3xl:max-w-[900px] 4xl:max-w-[980px] 5xl:max-w-[1060px]">
            <h1 className="text-4xl lg:text-[48px] xl:text-[52px] 2xl:text-[60px] 3xl:text-[68px] 4xl:text-[76px] 5xl:text-[84px] font-semibold text-base-content leading-[1.1] mb-6 tracking-tight">
              Det{" "}
              <span className="text-primary italic font-light ">
                Helt Opplagte
              </span>{" "}
              valg for en sunnere, renere og enklere hverdag!
            </h1>

            <p className="text-base lg:text-[17px] 2xl:text-lg 3xl:text-xl 4xl:text-xl 5xl:text-2xl text-base-content/65 leading-relaxed mb-9 max-w-[550px] 2xl:max-w-[680px] 3xl:max-w-[740px] 4xl:max-w-[800px] 5xl:max-w-[860px]">
              Helt Opplagt på jobben er en markedsorientert leverandør av løpende
              abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/kontakt"
                className="btn btn-primary rounded-md px-6 h-auto py-3.5 text-sm 2xl:text-base 4xl:text-lg font-medium"
              >
                Kontakt oss i dag
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#tjenester"
                className="btn btn-sm h-auto px-6 py-3.5 rounded-md text-sm 2xl:text-base 4xl:text-lg font-medium bg-transparent border border-base-300 text-base-content/80 hover:bg-transparent hover:border-primary hover:text-primary"
              >
                Se våre tjenester
              </a>
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <div className="relative flex-1 mt-4 mb-4 sm:mt-5 sm:mb-5 lg:mt-6 lg:mb-6 overflow-hidden rounded-2xl min-h-[300px]">
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
                    ? "w-full h-full object-cover scale-110 transition-transform duration-[7500ms] ease-out"
                    : "w-full h-full object-cover scale-100"
                }
              />
            </div>
          ))}

          {/* Slide indicators, overlaid on the image */}
          <div className="absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-neutral/85 via-neutral/40 to-transparent pt-24 pb-5 px-6 sm:px-8">
            <div className="flex gap-2 sm:gap-4">
              {slides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => setActive(i)}
                  className="group flex-1 text-left"
                  aria-label={`Vis ${slide.label}`}
                >
                  <div className="h-[3px] w-full bg-neutral-content/25 rounded-full overflow-hidden mb-2">
                    {i === active ? (
                      <div
                        className={
                          progressRunning
                            ? "h-full w-full bg-neutral-content rounded-full transition-[width] duration-[6000ms] ease-linear"
                            : "h-full w-0 bg-neutral-content rounded-full"
                        }
                      />
                    ) : (
                      <div className="h-full w-0 bg-neutral-content rounded-full transition-[width,background-color] duration-300 group-hover:w-full group-hover:bg-neutral-content/50" />
                    )}
                  </div>
                  <span
                    className={
                      i === active
                        ? "hidden sm:block text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors text-neutral-content"
                        : "hidden sm:block text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors text-neutral-content/45 group-hover:text-neutral-content/75"
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
    </section>
  );
}
