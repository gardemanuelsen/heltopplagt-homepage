import { Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHero } from "../components/PageHero";
import { useDocumentMeta } from "../../lib/use-document-meta";

const news = [
  {
    title: "Ny kantineløsning lansert hos DNB",
    date: "1. mars 2026",
    category: "Nyheter",
    excerpt:
      "Vi er stolte av å presentere vår nye, bærekraftige kantineløsning som nå er operativ hos DNB.",
    image:
      "https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjYW50ZWVuJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc3MjUzMTAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Helt Opplagt vinner bransjepris",
    date: "15. februar 2026",
    category: "Priser",
    excerpt:
      "Vi er hedret over å motta årets fasilitetsløsningspris for fremragende service og bærekraft.",
    image:
      "https://images.unsplash.com/photo-1583331030773-1ac64d1d00db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbHVuY2glMjBjYXRlcmluZ3xlbnwxfHx8fDE3NzI1MzEwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Ny fruktkurv for våren 2026",
    date: "1. februar 2026",
    category: "Produkter",
    excerpt:
      "Oppdag vår nye sesongbaserte fruktkurv med det beste Norge har å tilby denne våren.",
    image:
      "https://images.unsplash.com/photo-1574064577165-27cb98ca8209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwYmFza2V0JTIwb2ZmaWNlfGVufDF8fHx8MTc3MjUzMTAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Satsing på bærekraft og miljø",
    date: "15. januar 2026",
    category: "Bærekraft",
    excerpt:
      "Les om våre nye miljøinitiativ og hvordan vi jobber for en grønnere fremtid.",
    image:
      "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbmRvb3IlMjBjbGltYXRlJTIwdmVudGlsYXRpb258ZW58MXx8fHwxNzcyNTMxMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Samarbeid med Oslo Kommune utvides",
    date: "5. januar 2026",
    category: "Samarbeid",
    excerpt:
      "Vi er glade for å kunne utvide vårt samarbeid med Oslo Kommune til å omfatte flere bygg.",
    image:
      "https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NzI0NDc0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Julegave til lokalsamfunnet",
    date: "20. desember 2025",
    category: "Samfunnsansvar",
    excerpt:
      "I desember donerte vi mat og ressurser til lokale veldedighetsorganisasjoner.",
    image:
      "https://images.unsplash.com/photo-1729101183152-baeeb1658378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyME9zbG98ZW58MXx8fHwxNzcyNTMxMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const categories = ["Alle", ...Array.from(new Set(news.map((n) => n.category)))];

export function AktueltPage() {
  useDocumentMeta(
    "Aktuelt",
    "Nyheter og oppdateringer fra Helt Opplagt: se hva som skjer hos oss innen lunsj, kantine, frukt, catering, inneklima og renhold."
  );
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered =
    activeCategory === "Alle"
      ? news
      : news.filter((n) => n.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-dvh bg-white">
      <PageHero
        eyebrow="Aktuelt"
        title={
          <>
            Siste nytt fra{" "}
            <span className="text-[#0078C4] italic font-light">
              Helt Opplagt
            </span>
          </>
        }
        description="Hold deg oppdatert på nyheter, produkter og det som skjer hos oss og kundene våre."
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#152643] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#0078C4] hover:text-[#0078C4]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {featured && (
            <a
              href="#"
              className="group grid lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden mb-12 hover:shadow-[0_16px_48px_rgba(0,120,196,0.1)] transition-shadow duration-300"
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#f5f9fc]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-white text-[#0078C4] text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full border border-gray-200">
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featured.date}</span>
                  </div>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-4 group-hover:text-[#0078C4] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0078C4]">
                  Les hele saken
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          )}

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-shadow duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-[#f5f9fc] text-[#0078C4] text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mb-2 group-hover:text-[#0078C4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-4 flex-1">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0078C4]">
                    Les mer
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="bg-[rgb(17,31,55)] py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-[2]">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">
              Få nyhetene rett i innboksen
            </h2>
            <p className="text-[15px] text-white/55">
              Meld deg på nyhetsbrevet vårt — nyheter, tilbud og tips til en
              bedre arbeidsplass.
            </p>
          </div>
          <form
            className="flex flex-col sm:flex-row gap-3 lg:min-w-[420px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="din@epost.no"
              className="flex-1 px-4 py-3 rounded-md bg-white/[0.07] border border-white/15 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[#0078C4] focus-visible:ring-2 focus-visible:ring-[#0078C4] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(17,31,55)] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#0078C4] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0062a3] transition-colors flex-shrink-0"
            >
              Meld meg på
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
