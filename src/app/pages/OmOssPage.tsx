import { Target, Users, Heart, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Vårt oppdrag",
    description: "Å levere fremragende fasilitetsløsninger som gjør hverdagen enklere for våre kunder.",
  },
  {
    icon: Users,
    title: "Teamet vårt",
    description: "Over 50 dedikerte medarbeidere med erfaring og kompetanse innen fasilitetsforvaltning.",
  },
  {
    icon: Heart,
    title: "Våre verdier",
    description: "Kvalitet, pålitelighet og kundetilfredshet står i sentrum av alt vi gjør.",
  },
  {
    icon: Award,
    title: "Vår visjon",
    description: "Å være den foretrukne partneren for fasilitetsløsninger i Oslo-området.",
  },
];

export function OmOssPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                Om <span className="text-[#2a76b8]">Helt Opplagt</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Helt Opplagt er en ledende leverandør av fasilitetsløsninger i Oslo-området. 
                Siden vår etablering i 2011 har vi vokst til å bli en pålitelig partner for over 200 bedrifter.
              </p>
              <p className="text-lg text-gray-600">
                Vi tilbyr et komplett spekter av tjenester innen kantine, lunsj, frukt, renhold og inneklima. 
                Vårt mål er å levere høy kvalitet og skape trivsel for våre kunders medarbeidere.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjYW50ZWVuJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc3MjUzMTAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Helt Opplagt team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Hvem vi er
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er et team av dedikerte fagfolk som brenner for å levere førsteklasses service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#f5f9fc] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#2a76b8]" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-[#f5f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8 text-center">
              Vår historie
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Helt Opplagt ble grunnlagt i 2011 med en visjon om å tilby profesjonelle fasilitetsløsninger 
                som gjør hverdagen enklere for bedrifter i Oslo-området.
              </p>
              <p>
                Fra en liten oppstart har vi vokst til å bli en av regionens ledende leverandører, 
                med over 200 fornøyde kunder og mer enn 50 dedikerte medarbeidere.
              </p>
              <p>
                I dag tilbyr vi et bredt spekter av tjenester, fra kantinedrift og catering til renhold 
                og inneklimaoptimalisering. Vår styrke ligger i vår evne til å tilpasse løsninger til 
                hver enkelt kundes behov.
              </p>
              <p>
                Vi er stolte av vårt arbeid og forpliktet til å fortsette å levere den høye kvaliteten 
                våre kunder forventer av oss.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
