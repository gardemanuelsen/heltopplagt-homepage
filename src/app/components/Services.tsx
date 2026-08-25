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
  const featured = service.size === 'featured';

  const notchSize = hovered ? (featured ? 70 : 60) : (featured ? 64 : 48);
  const clipPath = getNotchedClipPath(service.notchPosition, notchSize);

  return (
    <Link
      to={service.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        featured
          ? "group relative overflow-hidden cursor-pointer block rounded-2xl lg:col-span-2 min-h-[320px] md:min-h-[380px] lg:min-h-[420px]"
          : "group relative overflow-hidden cursor-pointer block rounded-2xl min-h-[280px] md:min-h-[320px]"
      }
      style={{
        filter: hovered
          ? 'drop-shadow(0 20px 40px rgba(0, 120, 196, 0.15))'
          : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
        transition: 'filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="absolute inset-0 transition-[clip-path] duration-400"
        style={{
          clipPath,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Image layer */}
        <img
          src={service.image}
          alt={service.title}
          className={
            hovered
              ? "absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 ease-out"
              : "absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-700 ease-out"
          }
        />

        {/* Subtle gradient overlay */}
        <div
          className={
            hovered
              ? "absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.15)_40%,transparent_70%)]"
              : "absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.2)_40%,transparent_70%)]"
          }
        />

        {/* Content layer */}
        <div
          className={
            featured
              ? "absolute inset-0 flex flex-col justify-between p-6 md:p-8"
              : "absolute inset-0 flex flex-col justify-between p-5 md:p-6"
          }
        >
          {/* Top section: badge */}
          <div className="flex justify-between items-start">
            <span className="badge badge-sm bg-white/10 backdrop-blur-sm border-none text-white/90 text-[10px] md:text-xs font-semibold tracking-wider uppercase px-3 py-1.5 h-auto">
              {service.badge}
            </span>
            <div
              className={
                featured
                  ? hovered
                    ? "flex items-center justify-center rounded-full text-white transition-[background-color,transform] duration-300 w-11 h-11 md:w-12 md:h-12 bg-primary scale-110"
                    : "flex items-center justify-center rounded-full text-white transition-[background-color,transform] duration-300 w-11 h-11 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm"
                  : hovered
                    ? "flex items-center justify-center rounded-full text-white transition-[background-color,transform] duration-300 w-10 h-10 md:w-11 md:h-11 bg-primary scale-110"
                    : "flex items-center justify-center rounded-full text-white transition-[background-color,transform] duration-300 w-10 h-10 md:w-11 md:h-11 bg-white/20 backdrop-blur-sm"
              }
            >
              <ArrowUpRight className={featured ? 'w-5 h-5' : 'w-4 h-4 md:w-5 md:h-5'} />
            </div>
          </div>

          {/* Bottom section: title + description */}
          <div
            className={
              hovered
                ? "transition-[background-color,padding] duration-300 rounded-lg bg-white/20 backdrop-blur-sm p-3"
                : "transition-[background-color,padding] duration-300 rounded-lg p-0"
            }
          >
            <div className="flex items-start gap-3 mb-2">
              <Icon
                className={
                  featured
                    ? hovered
                      ? "flex-shrink-0 text-white transition-opacity duration-300 w-6 h-6 md:w-7 md:h-7 opacity-100"
                      : "flex-shrink-0 text-white transition-opacity duration-300 w-6 h-6 md:w-7 md:h-7 opacity-80"
                    : hovered
                      ? "flex-shrink-0 text-white transition-opacity duration-300 w-5 h-5 md:w-6 md:h-6 opacity-100"
                      : "flex-shrink-0 text-white transition-opacity duration-300 w-5 h-5 md:w-6 md:h-6 opacity-80"
                }
                strokeWidth={1.75}
              />
              <div className="flex-1">
                <h3
                  className={
                    featured
                      ? "font-bold text-white leading-tight drop-shadow-lg text-xl md:text-2xl lg:text-3xl"
                      : "font-bold text-white leading-tight drop-shadow-lg text-lg md:text-xl"
                  }
                >
                  {service.title}
                </h3>
              </div>
            </div>
            <p
              className={
                featured
                  ? hovered
                    ? "text-white/85 leading-relaxed text-sm md:text-base max-w-lg"
                    : "text-white/85 leading-relaxed hidden text-sm md:text-base max-w-lg"
                  : hovered
                    ? "text-white/85 leading-relaxed text-sm line-clamp-2 max-w-md"
                    : "text-white/85 leading-relaxed hidden text-sm line-clamp-2 max-w-md"
              }
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
    <section id="tjenester" className="bg-base-100 pt-24 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-base-300 pb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Våre tjenester
            </p>
            <h2 className="text-3xl lg:text-[44px] font-bold text-base-content tracking-tight leading-[1.1]">
              Alt din bedrift
              <br />
              trenger, under ett tak
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

      {/* Bento grid */}
      <div className="max-w-[1280px] mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {services.map((service, index) => (
          <NotchedServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
