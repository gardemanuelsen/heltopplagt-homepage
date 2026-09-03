import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CONTAINER, Kicker } from "../components/site";
import { articles } from "../../lib/articles";
import { useDocumentMeta } from "../../lib/use-document-meta";

/**
 * The Aktuelt listing, in the Opplagt grammar: the real articles from
 * heltopplagt.no (see src/lib/articles.ts — currently the four newest;
 * the site's ~22 older articles can be added there later and will appear
 * here automatically). The site publishes no dates, so cards carry a
 * category kicker instead.
 */
export function AktueltPage() {
  useDocumentMeta(
    "Aktuelt",
    "Siste nytt fra Helt Opplagt: nyheter, miljøarbeid og livet på Store Stensrud Gård."
  );

  const [featured, ...rest] = articles;

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Aktuelt</Kicker>
          <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Siste nytt fra Helt Opplagt
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Nyheter, miljøarbeid, menneskene våre og livet på Store Stensrud
            Gård.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          {/* Featured story */}
          <Link to={`/aktuelt/${featured.slug}`} className="group block lg:grid lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                {featured.category}
              </span>
              <h2 className="mt-3 font-lato text-[26px] font-bold leading-[1.2] text-navy transition-colors group-hover:text-brand sm:text-[30px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-navy/60 lg:text-[16px]">
                {featured.ingress}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                Les hele saken
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </span>
            </div>
          </Link>

          {/* The rest */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to={`/aktuelt/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">
                    {a.category}
                  </span>
                  <h3 className="mt-2 font-lato text-[19px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-navy/60">
                    {a.ingress}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                    Les mer
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
