import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill, SectionHead } from "./site";
import { articles } from "../../lib/articles";

/**
 * Homepage teaser for Aktuelt, driven by the real article data in
 * src/lib/articles.ts. The farm/venue story runs as the featured item since
 * it's the most visual, evergreen story; the next two articles fill the list.
 */
export function Aktuelt() {
  const featured = articles[0];
  const listItems = articles.slice(1, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className={CONTAINER}>
        <SectionHead
          kicker="Aktuelt"
          title="Siste nytt fra Helt Opplagt"
          lede="Nyheter, miljøarbeid og livet på Store Stensrud Gård."
          action={
            <Pill to="/aktuelt" variant="outline">
              Alle nyheter
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Featured — the gård */}
          <Link to={`/aktuelt/${featured.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
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

          {/* The next real stories */}
          <div className="flex flex-col gap-5">
            {listItems.map((item) => (
              <Link
                key={item.slug}
                to={`/aktuelt/${item.slug}`}
                className="group flex items-center gap-5 rounded-[1.5rem] bg-cloud/60 p-4 transition-colors hover:bg-cloud sm:p-5"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-[1rem] sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                    {item.category}
                  </span>
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
