import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const news = [
  {
    title: "Ny kantineløsning lansert hos DNB",
    date: "1. mars 2026",
    category: "Nyheter",
    excerpt: "Vi er stolte av å presentere vår nye, bærekraftige kantineløsning som nå er operativ hos DNB.",
    image: "https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjYW50ZWVuJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc3MjUzMTAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Helt Opplagt vinner bransjepris",
    date: "15. februar 2026",
    category: "Priser",
    excerpt: "Vi er hedret over å motta årets fasilitetsløsningspris for fremragende service og bærekraft.",
    image: "https://images.unsplash.com/photo-1583331030773-1ac64d1d00db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbHVuY2glMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzI1MzEwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Ny fruktkurv for våren 2026",
    date: "1. februar 2026",
    category: "Produkter",
    excerpt: "Oppdage vår nye sesongbaserte fruktkurv med det beste Norge har å tilby denne våren.",
    image: "https://images.unsplash.com/photo-1574064577165-27cb98ca8209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwYmFza2V0JTIwb2ZmaWNlfGVufDF8fHx8MTc3MjUzMTAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Satsing på bærekraft og miljø",
    date: "15. januar 2026",
    category: "Bærekraft",
    excerpt: "Les om våre nye miljøinitiativ og hvordan vi jobber for en grønnere fremtid.",
    image: "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbmRvb3IlMjBjbGltYXRlJTIwdmVudGlsYXRpb258ZW58MXx8fHwxNzcyNTMxMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Samarbeid med Oslo Kommune utvides",
    date: "5. januar 2026",
    category: "Samarbeid",
    excerpt: "Vi er glade for å kunne utvide vårt samarbeid med Oslo Kommune til å omfatte flere bygg.",
    image: "https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzI0NDc0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Julegave til lokalsamfunnet",
    date: "20. desember 2025",
    category: "Samfunnsansvar",
    excerpt: "I desember donerte vi mat og ressurser til lokale veldedighetsorganisasjoner.",
    image: "https://images.unsplash.com/photo-1729101183152-baeeb1658378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyME9zbG98ZW58MXx8fHwxNzcyNTMxMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function AktueltPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              <span className="text-[#2a76b8]">Aktuelt</span> fra Helt Opplagt
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Hold deg oppdatert på de siste nyhetene, produktene og hendelsene fra Helt Opplagt
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-block px-3 py-1 bg-[#f5f9fc] text-[#2a76b8] text-xs rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#2a76b8] hover:text-[#152643] transition-colors"
                  >
                    Les mer
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
