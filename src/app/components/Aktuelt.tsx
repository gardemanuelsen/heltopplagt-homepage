import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import grillingImg from "../../images/garden/grilling.jpg";
import newsKantine from "../../images/hero/web/hero-kantine.jpg";
import newsFrukt from "../../images/hero/web/hero-frukt.jpg";
import { CONTAINER, Pill, SectionHead } from "./site";

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
      <div className={CONTAINER}>
        <SectionHead
          kicker="Aktuelt"
          title="Siste nytt fra Helt Opplagt"
          lede="Nyheter, priser og livet på Store Stensrud Gård."
          action={
            <Pill to="/aktuelt" variant="outline">
              Alle nyheter
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Featured — the gård */}
          <Link
            to="/tjenester/catering/helt-opplagt-pa-garden"
            className="group block"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <img
                src={grillingImg}
                alt="Helt Opplagt på gården, Store Stensrud Gård"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-[12px] font-semibold text-navy backdrop-blur">
                Store Stensrud Gård
              </span>
            </div>
            <h3 className="mt-6 font-lato text-[22px] font-bold leading-[1.25] text-navy transition-colors group-hover:text-brand lg:text-[24px]">
              Leter du etter det perfekte stedet for arrangementet?
            </h3>
            <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-navy/60">
              På Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for
              både store og små feiringer, inne og ute, med full service,
              gårdsleker, badeplass, paintball og Archery Tag.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
              Les mer om gården
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </span>
          </Link>

          {/* News list */}
          <div className="flex flex-col gap-5">
            {listItems.map((item) => (
              <Link
                key={item.title}
                to="/aktuelt"
                className="group flex items-center gap-5 rounded-[1.5rem] bg-cloud/60 p-4 transition-colors hover:bg-cloud sm:p-5"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-[1rem] sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[12px] font-semibold">
                    <span className="text-brand">{item.category}</span>
                    <span className="text-navy/25">·</span>
                    <span className="text-navy/45">{item.date}</span>
                  </div>
                  <h4 className="mt-1.5 text-[16px] font-semibold leading-snug text-navy transition-colors group-hover:text-brand">
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
