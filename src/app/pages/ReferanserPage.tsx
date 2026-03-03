import { Building2, CheckCircle } from "lucide-react";

const clients = [
  {
    name: "DNB",
    description: "Norges største finanskonsern",
    services: ["Kantine", "Renhold", "Inneklima"],
    since: "2015",
  },
  {
    name: "Telenor",
    description: "Telekommunikasjonsleverandør",
    services: ["Kantine", "Lunsj", "Frukt"],
    since: "2016",
  },
  {
    name: "Equinor",
    description: "Internasjonalt energiselskap",
    services: ["Kantine", "Renhold"],
    since: "2014",
  },
  {
    name: "Schibsted",
    description: "Mediehus og teknologiselskap",
    services: ["Frukt", "Lunsj", "Renhold"],
    since: "2017",
  },
  {
    name: "Aftenposten",
    description: "Norges ledende dagsavis",
    services: ["Kantine", "Frukt"],
    since: "2018",
  },
  {
    name: "Oslo Kommune",
    description: "Offentlig sektor",
    services: ["Renhold", "Inneklima"],
    since: "2013",
  },
];

export function ReferanserPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Våre <span className="text-[#2a76b8]">referanser</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er stolte av å samarbeide med noen av Norges ledende bedrifter og organisasjoner. 
              Her er et utvalg av våre fornøyde kunder.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#2a76b8]" />
                  </div>
                  <span className="text-sm text-gray-500">Siden {client.since}</span>
                </div>
                <h3 className="text-2xl text-gray-900 mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 mb-4">{client.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">Tjenester:</p>
                  {client.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2a76b8]" />
                      <span className="text-sm text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#f5f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#2a76b8] mb-2">200+</div>
              <p className="text-gray-600">Fornøyde kunder</p>
            </div>
            <div>
              <div className="text-4xl text-[#2a76b8] mb-2">15+</div>
              <p className="text-gray-600">Års erfaring</p>
            </div>
            <div>
              <div className="text-4xl text-[#2a76b8] mb-2">50+</div>
              <p className="text-gray-600">Dedikerte ansatte</p>
            </div>
            <div>
              <div className="text-4xl text-[#2a76b8] mb-2">98%</div>
              <p className="text-gray-600">Kundetilfredshet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
