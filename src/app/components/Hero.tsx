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

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="relative h-screen overflow-hidden bg-[rgb(17,31,55)]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === active ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.label}
            className={`w-full h-full object-cover ${
              i === active ? "animate-hero-zoom" : ""
            }`}
          />
        </div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[rgba(13,26,45,0.82)] via-[rgba(13,26,45,0.45)] to-[rgba(13,26,45,0.1)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 z-[2] bg-gradient-to-t from-[rgba(13,26,45,0.7)] to-transparent" />

      {/* Content */}
      <div className="relative z-[3] max-w-[1280px] mx-auto px-8 h-full flex flex-col justify-center">
        <div className="max-w-[640px] pt-20">
      
          <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Det{" "}
            <span className="text-[#4da7dd] italic font-light">
              Helt Opplagte
            </span>{" "}
            valg for en sunnere, renere og enklere hverdag!
          </h1>

          <p className="text-[17px] text-white/70 leading-relaxed mb-9 max-w-[460px]">
            Helt Opplagt på jobben er en markedsorientert leverandør av løpende
            abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/kontakt"
              className="bg-[#0078C4] text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
            >
              Kontakt oss i dag
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#tjenester"
              className="border border-white/30 text-white/80 px-6 py-3.5 rounded-md text-sm font-medium hover:border-white/60 hover:text-white transition-all text-center backdrop-blur-sm"
            >
              Se våre tjenester
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-8 right-8 z-[3]">
          <div className="max-w-[1280px] mx-auto flex gap-2 sm:gap-4">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => setActive(i)}
                className="group flex-1 sm:flex-none sm:w-32 text-left pt-3"
                aria-label={`Vis ${slide.label}`}
              >
                <div className="h-[3px] w-full bg-white/25 rounded-full overflow-hidden mb-2">
                  <div
                    key={i === active ? `progress-${active}` : `idle-${i}`}
                    className={`h-full bg-white rounded-full ${
                      i === active
                        ? "animate-hero-progress"
                        : "w-0 group-hover:w-full group-hover:bg-white/50 transition-all duration-300"
                    }`}
                  />
                </div>
                <span
                  className={`hidden sm:block text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors ${
                    i === active ? "text-white" : "text-white/45 group-hover:text-white/75"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
