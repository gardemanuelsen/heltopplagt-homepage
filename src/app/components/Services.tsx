import { Utensils, Coffee, Apple, Sparkles, Wind, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import kantineImg from "../../images/kantine.png";
import cateringImg from "../../images/catering.png";
import fruktImg from "../../images/frukt.png";
import renholdImg from "../../images/renhold.png";
import inneklimaImg from "../../images/inneklima.png";
import lunsjImg from "../../images/lunsj.png";

const services = [
  {
    icon: Utensils,
    title: "Kantine",
    description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
    image: kantineImg,
  },
  {
    icon: Coffee,
    title: "Lunsj",
    description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
    image: lunsjImg,
  },
  {
    icon: Apple,
    title: "Frukt",
    description: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
    image: fruktImg,
  },
  {
    icon: Sparkles,
    title: "Renhold",
    description: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
    image: renholdImg,
  },
  {
    icon: Wind,
    title: "Inneklima",
    description: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
    image: inneklimaImg,
  },
  {
    icon: Utensils,
    title: "Catering",
    description: "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
    image: cateringImg,
  },
];

function ServiceCard({ service }: { service: typeof services[number] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <Link
      to="/kontakt"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl overflow-hidden cursor-pointer bg-white transition-all duration-200 block ${
        hovered
          ? "border-[#0078C4] shadow-[0_12px_40px_rgba(0,120,196,0.12)] -translate-y-[3px]"
          : "border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      } border`}
    >
      {/* Image */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover block transition-transform duration-400 ease-out ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Dark gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <Icon
              className={`w-[22px] h-[22px] transition-colors duration-200 ${
                hovered ? "text-[#0078C4]" : "text-gray-700"
              }`}
              strokeWidth={1.75}
            />
            <h3 className="text-[17px] font-semibold text-gray-900 tracking-tight">
              {service.title}
            </h3>
          </div>
          <div
            className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
              hovered ? "bg-[#0078C4] text-white" : "bg-[#f5f9fc] text-gray-700"
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
        <p className="text-[13px] text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section id="tjenester" className="bg-white pt-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-gray-200 pb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              Våre tjenester
            </p>
            <h2 className="text-3xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.1]">
              Alt din bedrift
              <br />
              trenger, under ett tak
            </h2>
          </div>
          <Link
            to="/kontakt"
            className="mt-4 md:mt-0 border-[1.5px] border-gray-200 text-gray-700 px-5 py-2.5 rounded-md text-[13px] font-medium hover:border-[#0078C4] hover:text-[#0078C4] transition-all inline-flex items-center gap-1.5 flex-shrink-0 mb-1"
          >
            Få tilbud på alle tjenester
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="max-w-[1280px] mx-auto px-8 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
