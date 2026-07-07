import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

/**
 * Subtle CTA card for Helt Opplagt på gården (Store Stensrud Gård),
 * shown on the homepage after the services grid.
 */
export function FarmCta() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0_16px_40px_rgba(0,120,196,0.08)] transition-shadow duration-300">
          {/* Image */}
          <div className="relative min-h-[220px] lg:min-h-0">
            <img
              src="https://heltopplagt.no/application/files/1217/7801/5982/grilling.jpg"
              alt="Helt Opplagt på gården — Store Stensrud Gård"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-[#f5f9fc] px-8 py-10 lg:px-12 lg:py-12">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              Helt Opplagt på gården
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
              Leter du etter det perfekte stedet for ditt arrangement?
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-[520px]">
              På Store Stensrud Gård, syd i Oslo, tilbyr vi unike lokaler for
              både store og små feiringer — inne og ute, med full service,
              gårdsleker, badeplass, paintball og Archery Tag.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/tjenester/catering/helt-opplagt-pa-garden"
                className="bg-[#0078C4] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
              >
                Les mer om gården
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                className="text-sm font-semibold text-[#0078C4] hover:text-[#0062a3] transition-colors"
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
