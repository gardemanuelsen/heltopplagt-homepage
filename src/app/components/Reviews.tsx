import { Star } from "lucide-react";

const reviews = [
  {
    name: "Wenche Revhaug",
    company: "Kronos Titan,",
    role: "Styremedlem",
    rating: 5,
    text: "Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
  },
  {
    name: "Tor Anders Andersen",
    company: "Team Verksted AS Avd Follo",
    role: "Avdelingsleder",
    text: "Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Vi får en sunn lunsj med variert utvalg, deriblant våre favorittpålegg som kjøttpålegg, ost, leverpostei og syltetøy. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
    rating: 5,
  },
  {
    name: "Maria Bergström",
    company: "Vinmonopolet AS",
    role: "Kontorsjef",
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Vi har valgt Knaskekurven og Go’kurven. Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer så vi kan holde energien oppe ut dagen. Frukten er veldig populær og det er konkurranse om å kaste seg over kurvene når de kommer ?  Nøtter og bananer er de største favorittene. Vi er veldig godt fornøyd med Helt Opplagt. De er svært fleksible og raske til å følge opp ønsker",
    rating: 5,
  },
  {
    name: "Helge Stensrud",
    company: "Schibsted Trykk Oslo AS",
    role: "Driftsansvarlig",
    text: "Høsten 2023 så vi etter ny samarbeidspartner på daglig og temporært renhold og valget falt på Helt Opplagt. Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Når ansatte kommenterer at det er rent blir man trygg på at man har gjort riktig valg av leverandør. Jeg vil spesielt trekke frem positiviteten Helt Opplagt viser. De er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om. Vi er glade for valget vi tok om ny samarbeidspartner.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Hva kundene våre sier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vi er stolte av å levere førsteklasses service til våre kunder
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2a76b8] text-[#2a76b8]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role}, {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
