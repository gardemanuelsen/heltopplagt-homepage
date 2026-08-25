import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import kantineImg from "../../images/kantine/kantine.png";
import cateringImg from "../../images/catering/catering.png";
import fruktImg from "../../images/frukt/frukt.png";
import renholdImg from "../../images/renhold/renhold.png";
import inneklimaImg from "../../images/inneklima/inneklima.png";
import lunsjImg from "../../images/lunsj/lunsj.png";
import fruktIcon from "../../images/icons/fruktkurv (1).png";
import lunsjIcon from "../../images/icons/lunsj (1).png";
import kantineIcon from "../../images/icons/jobbsmoothie (1).png";
import cateringIcon from "../../images/icons/catering (1).png";
import inneklimaIcon from "../../images/icons/inneklima (1).png";
import renholdIcon from "../../images/icons/renhold (1).png";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

const frukt: Service = {
  title: "Frukt",
  description: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
  image: fruktImg,
  icon: fruktIcon,
  href: "/tjenester/frukt",
};
const lunsj: Service = {
  title: "Lunsj",
  description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
  image: lunsjImg,
  icon: lunsjIcon,
  href: "/tjenester/lunsj",
};
const kantine: Service = {
  title: "Kantine",
  description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
  image: kantineImg,
  icon: kantineIcon,
  href: "/tjenester/kantine",
};
const catering: Service = {
  title: "Catering",
  description: "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
  image: cateringImg,
  icon: cateringIcon,
  href: "/tjenester/catering",
};
const inneklima: Service = {
  title: "Inneklima",
  description: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  image: inneklimaImg,
  icon: inneklimaIcon,
  href: "/tjenester/inneklima",
};
const renhold: Service = {
  title: "Renhold",
  description: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
  image: renholdImg,
  icon: renholdIcon,
  href: "/tjenester/renhold",
};

const mealServices = [frukt, lunsj, catering, kantine];
const facilityServices = [renhold, inneklima];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group h-full flex flex-col">
      <div className="relative z-0">
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-0 rounded-2xl border border-primary/50 z-0 translate-x-0 translate-y-0 opacity-0 transition-[translate,opacity] duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-100"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-0 rounded-2xl border border-primary/80 z-0 translate-x-0 translate-y-0 opacity-0 transition-[translate,opacity] duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100"
        />
        <Link to={service.href} className="relative z-10 block aspect-square overflow-hidden rounded-2xl bg-base-200">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-1 pt-5">
        <Link
          to={service.href}
          className="text-xl sm:text-2xl font-semibold text-base-content"
        >
          {service.title}
        </Link>

        <p className="mt-2 text-sm text-base-content/65 leading-relaxed flex-1">
          {service.description}
        </p>
        <Link
          to={service.href}
          className="btn btn-sm btn-outline border-base-300 text-base-content group-hover:!border-primary group-hover:!text-primary group-hover:!bg-transparent mt-4 self-start"
        >
          Les mer
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

function ServiceGroup({
  label,
  items,
  gridClassName,
}: {
  label: string;
  items: Service[];
  gridClassName: string;
}) {
  return (
    <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24 mb-16 last:mb-0">
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-4">
        {label}
      </p>
      <ul
        className={`flex gap-8 overflow-x-auto pb-2 md:overflow-visible md:mt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${gridClassName}`}
      >
        {items.map((service) => (
          <li key={service.title} className="w-[220px] flex-shrink-0 md:w-auto md:flex-shrink">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="tjenester" className="bg-base-100 pt-24 pb-24 scroll-mt-20">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Alt din bedrift trenger, under ett tak
            </p>
            <h2 className="text-2xl lg:text-4xl font-semibold text-base-content/90 tracking-tight leading-snug">
              Våre tjenester
            </h2>
          </div>
          <Link
            to="/kontakt"
            className="btn btn-sm h-auto mt-4 md:mt-0 border-[1.5px] border-base-300 bg-transparent text-base-content/80 px-5 py-2.5 rounded-md text-[13px] font-medium hover:border-primary hover:text-primary hover:bg-transparent flex-shrink-0 mb-1"
          >
            Få tilbud på alle tjenester
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <ServiceGroup label="Måltider på jobb" items={mealServices} gridClassName="md:grid md:grid-cols-4" />
      <ServiceGroup label="Arbeidsmiljø" items={facilityServices} gridClassName="md:grid md:grid-cols-4" />
    </section>
  );
}
