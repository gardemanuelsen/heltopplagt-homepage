import { Utensils, Coffee, Apple, Sparkles, Wind, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import kantineImg from "../../images/kantine/kantine.png";
import cateringImg from "../../images/catering/catering.png";
import fruktImg from "../../images/frukt/frukt.png";
import renholdImg from "../../images/renhold/renhold.png";
import inneklimaImg from "../../images/inneklima/inneklima.png";
import lunsjImg from "../../images/lunsj/lunsj.png";
import { getNotchedClipPath } from "../../lib/clip-paths";

type NotchPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
type CardSize = 'default' | 'featured';

interface Service {
  icon: typeof Utensils;
  title: string;
  description: string;
  image: string;
  href: string;
  size: CardSize;
  badge: string;
  notchPosition: NotchPosition;
}

const services: Service[] = [
  {
    icon: Utensils,
    title: "Kantine",
    description: "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
    image: kantineImg,
    href: "/tjenester/kantine",
    size: "featured",
    badge: "Mat & Drikke",
    notchPosition: "bottom-right",
  },
  {
    icon: Coffee,
    title: "Lunsj",
    description: "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
    image: lunsjImg,
    href: "/tjenester/lunsj",
    size: "featured",
    badge: "Mat & Drikke",
    notchPosition: "bottom-left",
  },
  {
    icon: Apple,
    title: "Frukt",
    description: "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
    image: fruktImg,
    href: "/tjenester/frukt",
    size: "default",
    badge: "Helse & Trivsel",
    notchPosition: "bottom-right",
  },
  {
    icon: Sparkles,
    title: "Renhold",
    description: "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
    image: renholdImg,
    href: "/tjenester/renhold",
    size: "default",
    badge: "Arbeidsmiljø",
    notchPosition: "bottom-left",
  },
  {
    icon: Wind,
    title: "Inneklima",
    description: "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
    image: inneklimaImg,
    href: "/tjenester/inneklima",
    size: "default",
    badge: "Arbeidsmiljø",
    notchPosition: "bottom-right",
  },
  {
    icon: Utensils,
    title: "Catering",
    description: "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
    image: cateringImg,
    href: "/tjenester/catering",
    size: "default",
    badge: "Mat & Drikke",
    notchPosition: "bottom-left",
  },
];

function NotchedServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const notchSize = hovered ? (service.size === 'featured' ? 70 : 60) : (service.size === 'featured' ? 64 : 48);
  const clipPath = getNotchedClipPath(service.notchPosition, notchSize);

  return (
    <Link
      to={service.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden cursor-pointer block rounded-2xl transition-all duration-400 ${
        service.size === 'featured'
          ? 'lg:col-span-2 min-h-[320px] md:min-h-[380px] lg:min-h-[420px]'
          : 'min-h-[280px] md:min-h-[320px]'
      }`}
      style={{
        filter: hovered
          ? 'drop-shadow(0 20px 40px rgba(0, 120, 196, 0.15))'
          : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
        transition: 'filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-400"
        style={{
          clipPath,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Image layer */}
        <img
          src={service.image}
          alt={service.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Subtle gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-400 ${
            hovered ? 'service-card-gradient-hover' : 'service-card-gradient'
          }`}
        />

        {/* Content layer */}
        <div
          className={`absolute inset-0 flex flex-col justify-between ${
            service.size === 'featured' ? 'p-6 md:p-8' : 'p-5 md:p-6'
          }`}
        >
          {/* Top section: badge */}
          <div className="flex justify-between items-start">
            <span className="inline-block px-3 py-1.5 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-white/90 bg-white/10 backdrop-blur-sm rounded-full">
              {service.badge}
            </span>
            <div
              className={`flex items-center justify-center rounded-full text-white transition-all duration-300 ${
                service.size === 'featured'
                  ? 'w-11 h-11 md:w-12 md:h-12'
                  : 'w-10 h-10 md:w-11 md:h-11'
              } ${
                hovered
                  ? 'bg-[#0078C4] scale-110'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <ArrowUpRight className={service.size === 'featured' ? 'w-5 h-5' : 'w-4 h-4 md:w-5 md:h-5'} />
            </div>
          </div>

          {/* Bottom section: title + description */}
          <div
            className={`transition-all duration-300 rounded-lg ${
              hovered ? 'bg-white/20 backdrop-blur-sm p-3' : 'p-0'
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              <Icon
                className={`flex-shrink-0 text-white transition-opacity duration-300 ${
                  service.size === 'featured'
                    ? 'w-6 h-6 md:w-7 md:h-7'
                    : 'w-5 h-5 md:w-6 md:h-6'
                } ${hovered ? 'opacity-100' : 'opacity-80'}`}
                strokeWidth={1.75}
              />
              <div className="flex-1">
                <h3
                  className={`font-bold text-white leading-tight drop-shadow-lg ${
                    service.size === 'featured'
                      ? 'text-xl md:text-2xl lg:text-3xl'
                      : 'text-lg md:text-xl'
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            </div>
            <p
              className={`text-white/85 leading-relaxed ${hovered ? '' : 'hidden'}  ${
                service.size === 'featured'
                  ? 'text-sm md:text-base max-w-lg'
                  : 'text-sm line-clamp-2 max-w-md'
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Services() {
  return (
    <section id="tjenester" className="bg-white pt-24 scroll-mt-20">
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

      {/* Bento grid */}
      <div className="max-w-[1280px] mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {services.map((service, index) => (
          <NotchedServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
