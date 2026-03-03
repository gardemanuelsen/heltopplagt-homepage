import { Briefcase, TrendingUp, Award, Coffee } from "lucide-react";

const openings = [
  {
    title: "Kantinemedarbeider",
    location: "Oslo sentrum",
    type: "Heltid",
    description: "Vi søker en erfaren kantinemedarbeider til å bli en del av vårt team hos DNB.",
  },
  {
    title: "Renholdsassistent",
    location: "Fornebu",
    type: "Deltid",
    description: "Deltidsstilling som renholdsassistent hos en av våre kunder på Fornebu.",
  },
  {
    title: "Cateringsjef",
    location: "Oslo",
    type: "Heltid",
    description: "Vi søker en dyktig cateringsjef med erfaring fra større arrangementer.",
  },
  {
    title: "Inneklimatekniker",
    location: "Stor-Oslo",
    type: "Heltid",
    description: "Erfaren tekniker til arbeid med ventilasjons- og inneklimaløsninger.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Karriereutvikling",
    description: "Vi investerer i våre ansatte med kurs, opplæring og muligheter for forfremmelse.",
  },
  {
    icon: Award,
    title: "Konkurransedyktig lønn",
    description: "Vi tilbyr gode lønns- og pensjonsordninger tilpasset bransjen.",
  },
  {
    icon: Coffee,
    title: "Godt arbeidsmiljø",
    description: "Et inkluderende og støttende miljø med fokus på trivsel.",
  },
  {
    icon: Briefcase,
    title: "Fleksibilitet",
    description: "Vi tilbyr fleksible arbeidsordninger som passer ditt liv.",
  },
];

export function KarrierePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              <span className="text-[#2a76b8]">Karriere</span> hos Helt Opplagt
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Bli en del av vårt team! Vi søker dedikerte medarbeidere som ønsker å gjøre en forskjell.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Hvorfor jobbe hos oss?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr mer enn bare en jobb - vi tilbyr en karriere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#f5f9fc] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#2a76b8]" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#f5f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Ledige stillinger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Se våre nåværende ledige stillinger
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                    </div>
                    <p className="text-gray-600">
                      {job.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block bg-[#2a76b8] text-white px-6 py-3 rounded-md hover:bg-[#152643] transition-colors whitespace-nowrap"
                    >
                      Søk nå
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
            Finner du ikke en passende stilling?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vi mottar gjerne uoppfordrede søknader! Send oss din CV og søknad til karriere@heltopplagt.no
          </p>
          <a
            href="mailto:karriere@heltopplagt.no"
            className="inline-block bg-[#2a76b8] text-white px-8 py-3 rounded-md hover:bg-[#152643] transition-colors"
          >
            Send søknad
          </a>
        </div>
      </section>
    </div>
  );
}
