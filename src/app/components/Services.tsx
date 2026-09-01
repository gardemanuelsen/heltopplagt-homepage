import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import fruktImg from "../../images/frukt/frukt.png";
import lunsjImg from "../../images/lunsj/lunsj.png";
import kantineImg from "../../images/kantine/kantine.png";
import cateringImg from "../../images/catering/catering.png";
import inneklimaImg from "../../images/inneklima/inneklima.png";
import renholdImg from "../../images/renhold/renhold.png";
import {
  LIVERY_CONTAINER,
  LiveryCta,
  SERVICES,
  SectionPlate,
  type LiveryService,
} from "./livery";

const PHOTO: Record<string, string> = {
  Frukt: fruktImg,
  Lunsj: lunsjImg,
  Kantine: kantineImg,
  Catering: cateringImg,
  Inneklima: inneklimaImg,
  Renhold: renholdImg,
};

function ServiceCell({ service }: { service: LiveryService }) {
  return (
    <Link
      to={service.href}
      /* drop-shadow on the unclipped wrapper so the lift follows the notched
         silhouette (a box-shadow on the clipped card would be cut away) */
      className="group block transition duration-300 [filter:drop-shadow(0_1px_2px_rgba(13,26,45,0.05))] hover:[filter:drop-shadow(0_16px_30px_rgba(13,26,45,0.13))]"
    >
      <div className="livery-notch flex h-full flex-col bg-white shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(13,26,45,0.22)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={PHOTO[service.name]}
            alt={service.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent px-5 pb-4 pt-16">
            <h3 className="font-jakarta text-[19px] font-bold leading-none tracking-[-0.01em] text-white sm:text-[22px]">
              {service.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="flex-1 text-[15px] leading-relaxed text-ink/70">
            {service.blurb}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 font-jakarta text-[13px] font-semibold text-ink transition-colors group-hover:text-signal">
            Se tjenesten
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section
      id="tjenester"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
      aria-labelledby="tjenester-tittel"
    >
      <div className={LIVERY_CONTAINER}>
        <div id="tjenester-tittel">
          <SectionPlate
            title="Våre tjenester"
            proof="Pålitelig for over 200 bedrifter i Oslo-området"
            action={
              <LiveryCta to="/kontakt" variant="ghost-dark">
                Få tilbud på alle
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </LiveryCta>
            }
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCell key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
