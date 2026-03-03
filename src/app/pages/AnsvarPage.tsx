import { Leaf, Recycle, Heart, Users } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Bærekraftig innkjøp",
    description: "Vi prioriterer lokale og økologiske leverandører for alle våre produkter. Over 80% av våre råvarer kommer fra norske produsenter.",
  },
  {
    icon: Recycle,
    title: "Avfallshåndtering",
    description: "Vi har implementert omfattende kildesortering og resirkulering i alle våre kantiner. Matavfall komposteres eller brukes til biogassproduksjon.",
  },
  {
    icon: Heart,
    title: "Sosialt ansvar",
    description: "Vi donerer overskuddsmat til lokale veldedighetsorganisasjoner og støtter sosiale prosjekter i Oslo-området.",
  },
  {
    icon: Users,
    title: "Ansattes velferd",
    description: "Vi investerer i våre ansatte gjennom opplæring, gode arbeidsforhold og muligheter for karriereutvikling.",
  },
];

const goals = [
  "Redusere matsvinn med 50% innen 2027",
  "100% fornybar energi i alle våre fasiliteter innen 2026",
  "Kun bruk av miljøvennlige rengjøringsprodukter",
  "Samarbeide med minst 5 nye lokale leverandører årlig",
  "Donere minimum 1000 måltider til trengende per år",
];

export function AnsvarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Vårt <span className="text-[#2a76b8]">samfunnsansvar</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Hos Helt Opplagt tar vi ansvar for miljø, samfunn og våre medarbeidere. 
              Bærekraft er en naturlig del av alt vi gjør.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Våre initiativer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi jobber aktivt med flere områder for å sikre bærekraftig drift
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2a76b8]" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-[#f5f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Våre mål
            </h2>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2a76b8] text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 pt-1">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8">
              Sertifiseringer og standarder
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl text-gray-900 mb-2">ISO 9001</h3>
                <p className="text-gray-600">Kvalitetsledelse</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl text-gray-900 mb-2">Miljøfyrtårn</h3>
                <p className="text-gray-600">Miljøsertifisering</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl text-gray-900 mb-2">HACCP</h3>
                <p className="text-gray-600">Mattrygghet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
