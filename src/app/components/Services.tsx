import { Utensils, Coffee, Apple, Sparkles, Wind } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import kantineImg from "../../images/kantine.jpg";
import cateringImg from "../../images/catering.jpg";
import fruktImg from "../../images/frukt.jpg";
import renholdImg from "../../images/renhold.jpg";
import inneklimaImg from "../../images/inneklima.jpg"
import lunsjImg from "../../images/lunsj.jpg";


const services = [
  {
    icon: Utensils,
    title: "Kantine",
    description: "Profesjonell kantinedrift med variert meny og høy kvalitet. Vi sørger for gode måltider til dine ansatte hver dag.",
    image: kantineImg,
  },
  {
    icon: Coffee,
    title: "Lunsj",
    description: "Lunsjordninger tilpasset deres behov. Sunn og næringsrik mat levert direkte til arbeidsplassen.",
    image: lunsjImg,
  },
  {
    icon: Apple,
    title: "Frukt",
    description: "Fersk frukt levert regelmessig. Bidra til økt trivsel og helse blant dine medarbeidere.",
    image: fruktImg,
  },
  {
    icon: Sparkles,
    title: "Renhold",
    description: "Profesjonell rengjøring av kontorer og lokaler. Vi holder arbeidsplassen ren og innbydende.",
    image: renholdImg,
  },
  {
    icon: Wind,
    title: "Inneklima",
    description: "Optimalisering av inneklima for bedre arbeidsmiljø. Vi sikrer frisk luft og komfortable temperaturer.",
    image: inneklimaImg,
  },
    {
    icon: Wind,
    title: "Catering",
    description: "Optimalisering av inneklima for bedre arbeidsmiljø. Vi sikrer frisk luft og komfortable temperaturer.",
    image: cateringImg,
  },
];

export function Services() {
  return (
    <section id="tjenester" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Våre tjenester
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vi tilbyr et komplett spekter av fasilitetsløsninger som dekker alle dine behov
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2a76b8]" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}