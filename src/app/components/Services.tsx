import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import fruktImg from "../../images/frukt/frukt.png";
import lunsjImg from "../../images/lunsj/lunsj.png";
import kantineImg from "../../images/kantine/kantine.png";
import cateringImg from "../../images/catering/catering.png";
import inneklimaImg from "../../images/inneklima/inneklima.png";
import renholdImg from "../../images/renhold/renhold.png";
import { CONTAINER, Pill, SectionHead } from "./site";
import { SERVICES, type LiveryService } from "./livery";

const PHOTO: Record<string, string> = {
  Frukt: fruktImg,
  Lunsj: lunsjImg,
  Kantine: kantineImg,
  Catering: cateringImg,
  Inneklima: inneklimaImg,
  Renhold: renholdImg,
};

function ServiceCard({ service }: { service: LiveryService }) {
  return (
    <Link
      to={service.href}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,43,64,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={PHOTO[service.name]}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-lato text-[21px] font-bold text-navy sm:text-[23px]">
          {service.name}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy/60">
          {service.blurb}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
          Les mer
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section
      id="tjenester"
      className="relative isolate scroll-mt-24 overflow-hidden bg-cloud py-20 lg:py-28"
      aria-labelledby="tjenester-tittel"
    >
      {/* The brand's puzzle piece — outline variant, laid over the grid's
          bottom corner and the section edge, clear of the header's action. */}
      <span
        aria-hidden="true"
        className="livery-puzzle-outline aspect-[100/129] -right-14 -bottom-12 w-44 rotate-[18deg] bg-brand/25 lg:-right-8 lg:w-60"
      />
      <div className={`${CONTAINER} relative z-10`}>
        <div id="tjenester-tittel">
          <SectionHead
            kicker="Våre tjenester"
            title="Alt som gjør arbeidsdagen bedre, fra én leverandør"
            lede="Seks tjenester som kan bestilles hver for seg eller samlet — alltid med én kontaktperson og én faktura."
            action={
              <Pill to="/kontakt" variant="outline">
                Få tilbud på alle
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
            }
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
