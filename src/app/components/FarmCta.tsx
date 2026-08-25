import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import grillingImg from "../../images/garden/grilling.jpg";

/**
 * Subtle CTA card for Helt Opplagt på gården (Store Stensrud Gård),
 * shown on the homepage after the services grid.
 */
export function FarmCta() {
  return (
    <section className="py-14 bg-base-100">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        <div className="card card-side grid lg:grid-cols-[1fr_1.4fr] rounded-2xl border border-base-300 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,120,196,0.08)] transition-shadow duration-300">
          {/* Image */}
          <figure className="relative min-h-[220px] lg:min-h-0">
            <img
              src={grillingImg}
              alt="Helt Opplagt på gården — Store Stensrud Gård"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>

          {/* Content */}
          <div className="card-body bg-base-200 px-8 py-10 lg:px-12 lg:py-12">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Helt Opplagt på gården
            </p>
            <h2 className="card-title text-2xl lg:text-3xl font-bold text-base-content tracking-tight leading-[1.15] mb-4">
              Leter du etter det perfekte stedet for ditt arrangement?
            </h2>
            <p className="text-[15px] text-base-content/65 leading-relaxed mb-6 max-w-[520px]">
              På Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for
              både store og små feiringer — inne og ute, med full service,
              gårdsleker, badeplass, paintball og Archery Tag.
            </p>
            <div className="card-actions flex flex-wrap items-center gap-5">
              <Link
                to="/tjenester/catering/helt-opplagt-pa-garden"
                className="btn btn-primary rounded-md h-auto px-6 py-3"
              >
                Les mer om gården
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                className="link link-hover text-sm font-semibold text-primary"
              >
                Book arrangement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
