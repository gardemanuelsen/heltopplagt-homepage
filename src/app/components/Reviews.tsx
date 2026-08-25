import { Quote } from "lucide-react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const reviews = [
  {
    name: "Wenche Revhaug",
    company: "Kronos Titan",
    role: "Styremedlem",
    service: "Kantine",
    rating: 5,
    text: "Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
  },
  {
    name: "Tor Anders Andersen",
    company: "Team Verksted AS Avd Follo",
    role: "Avdelingsleder",
    service: "Lunsj",
    rating: 5,
    text: "Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
  },
  {
    name: "Maria Bergström",
    company: "Vinmonopolet AS",
    role: "Kontorsjef",
    service: "Frukt",
    rating: 5,
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer så vi kan holde energien oppe ut dagen. Frukten er veldig populær og det er konkurranse om å kaste seg over kurvene når de kommer. Vi er veldig godt fornøyd med Helt Opplagt. De er svært fleksible og raske til å følge opp ønsker.",
  },
  {
    name: "Helge Stensrud",
    company: "Schibsted Trykk Oslo AS",
    role: "Driftsansvarlig",
    service: "Renhold",
    rating: 5,
    text: "Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Når ansatte kommenterer at det er rent blir man trygg på at man har gjort riktig valg av leverandør. Jeg vil spesielt trekke frem positiviteten Helt Opplagt viser. De er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om.",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Reviews() {
  return (
    <section className="py-24 bg-base-200 border-y border-base-300">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-base-300 pb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Kundehistorier
            </p>
            <h2 className="text-3xl lg:text-[44px] font-bold text-base-content tracking-tight leading-[1.1]">
              Hva kundene
              <br />
              våre sier
            </h2>
          </div>
          <Link
            to="/referanser"
            className="btn btn-sm h-auto mt-4 md:mt-0 border-[1.5px] border-base-300 bg-base-100 text-base-content/80 px-5 py-2.5 rounded-md text-[13px] font-medium hover:border-primary hover:text-primary flex-shrink-0 mb-1"
          >
            Se alle referanser
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-shadow duration-300"
            >
              <div className="card-body p-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="badge badge-sm h-auto px-3 py-1 bg-base-200 text-primary border-none text-[11px] font-semibold tracking-[0.08em] uppercase">
                    {review.service}
                  </span>
                  <div className="rating rating-sm" aria-label={`${review.rating} av 5 stjerner`}>
                    {[...Array(5)].map((_, i) =>
                      i < review.rating ? (
                        <div key={i} className="mask mask-star bg-primary" aria-hidden="true" />
                      ) : (
                        <div key={i} className="mask mask-star bg-base-300" aria-hidden="true" />
                      )
                    )}
                  </div>
                </div>

                <Quote className="w-6 h-6 text-primary/30 mb-3 rotate-180" />
                <p className="text-[15px] text-base-content/80 leading-relaxed mb-6 flex-1">
                  {review.text}
                </p>

                <div className="border-t border-base-300 pt-4 flex items-center gap-3">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-base-300 text-base-content w-10 rounded-full">
                      <span className="text-xs font-semibold">{getInitials(review.name)}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-content">
                      {review.name}
                    </p>
                    <p className="text-sm text-base-content/50">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
