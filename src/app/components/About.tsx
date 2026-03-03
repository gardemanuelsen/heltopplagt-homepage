import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users, label: "Fornøyde kunder", value: "1000+" },
  { icon: Clock, label: "Års erfaring", value: "40+" },
  { icon: Award, label: "Kvalitetssertifisert", value: "ISO 9001" },
  { icon: CheckCircle, label: "Oppgaver fullført", value: "10,000+" },
];

export function About() {
  return (
    <section id="om-oss" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Pålitelig partner siden 1985
            </h2>
            <p className="text-lg text-gray-600">
              Helt Opplagt er en ledende leverandør av fasilitetsløsninger i Oslo-området. 
              Vi kombinerer erfaring, kvalitet og kundefokus for å levere tjenester som 
              overgår forventningene.
            </p>
            <p className="text-lg text-gray-600">
              Vårt mål er enkelt: å gjøre hverdagen enklere for våre kunder ved å levere 
              profesjonelle tjenester som skaper trivsel, effektivitet og verdi for 
              din bedrift.
            </p>
            <div className="pt-4">
              <a
                href="#kontakt"
                className="inline-block bg-[#2a76b8] text-white px-8 py-3 rounded-md hover:bg-[#152643] transition-colors"
              >
                Lær mer om oss
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#2a76b8]" />
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}