import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import grillingImg from "../../images/garden/grilling.jpg";
import newsKantine from "../../images/hero/web/hero-kantine.jpg";
import newsFrukt from "../../images/hero/web/hero-frukt.jpg";
import { LIVERY_CONTAINER, SectionPlate, StencilPlate } from "./livery";

/**
 * Homepage teaser for Aktuelt. The farm/venue story (Helt Opplagt på gården)
 * runs as the featured item since it's the most visual, evergreen story.
 * NOTE: the two list items below are placeholder headlines carried over from
 * AktueltPage — swap for real news before launch (thumbnails are self-hosted).
 */
const listItems = [
  {
    title: "Helt Opplagt vinner bransjepris",
    date: "15. februar 2026",
    category: "Priser",
    image: newsFrukt,
  },
  {
    title: "Ny kantineløsning lansert hos DNB",
    date: "1. mars 2026",
    category: "Nyheter",
    image: newsKantine,
  },
];

export function Aktuelt() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className={LIVERY_CONTAINER}>
        <SectionPlate
          title="Siste nytt fra Helt Opplagt"
          proof="Nyheter, priser og livet på Store Stensrud Gård"
          action={
            <Link
              to="/aktuelt"
              className="inline-flex items-center gap-1.5 border border-ink/25 px-4 py-2.5 font-jakarta text-[13px] font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Alle nyheter
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Link>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Featured — the gård */}
          <Link
            to="/tjenester/catering/helt-opplagt-pa-garden"
            className="group block"
          >
            <div className="livery-panel livery-notch relative aspect-[16/10] overflow-hidden text-ink">
              <img
                src={grillingImg}
                alt="Helt Opplagt på gården, Store Stensrud Gård"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-0 top-0 z-[2]">
                <StencilPlate label="Store Stensrud Gård" />
              </span>
            </div>
            <h3 className="mt-5 font-jakarta text-[20px] font-bold leading-[1.2] tracking-[-0.01em] text-ink transition-colors group-hover:text-signal lg:text-[23px]">
              Leter du etter det perfekte stedet for arrangementet?
            </h3>
            <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink/65">
              På Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for
              både store og små feiringer, inne og ute, med full service,
              gårdsleker, badeplass, paintball og Archery Tag.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 font-jakarta text-[13px] font-semibold text-signal">
              Les mer om gården
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </Link>

          {/* Ledger of real news */}
          <div className="flex flex-col divide-y divide-ink/15 border-y border-ink/15">
            {listItems.map((item) => (
              <Link
                key={item.title}
                to="/aktuelt"
                className="group flex items-center gap-4 py-5"
              >
                <div className="livery-notch h-16 w-16 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 font-jakarta text-[12px] font-semibold uppercase tracking-[0.04em]">
                    <span className="text-signal">{item.category}</span>
                    <span className="text-ink/25">·</span>
                    <span className="text-ink/40">{item.date}</span>
                  </div>
                  <h4 className="mt-1.5 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-signal">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
