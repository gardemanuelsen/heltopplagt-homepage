import { ArrowUpRight, MapPin } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head, FaqList } from "../components/ServicePage";
import { useDocumentMeta } from "../../lib/use-document-meta";

/*
 * Content is from Helt Opplagt's real careers site
 * (karriere.heltopplagt.com, Teamtailor) — culture copy, open positions and
 * the application FAQ. Applications happen on Teamtailor, so all job links
 * go there (the old page's karriere@heltopplagt.no mailto was invented and
 * is removed). Open positions change over time — sync this list with
 * karriere.heltopplagt.com when updating the site.
 */

const KARRIERE_URL = "https://karriere.heltopplagt.com/";

const culture = [
  {
    title: "Kommunikasjon",
    body: "I Helt Opplagt snakker vi med hverandre, ikke om hverandre.",
  },
  {
    title: "Åpenhet og fellesskap",
    body: "Åpenhet, fellesskap og godt arbeidsmiljø skal gjøre oss i stand til å løfte hverandre til topp prestasjoner i alle ledd.",
  },
  {
    title: "Kundefokus",
    body: "I Helt Opplagt er det kunden vi jobber for. Vi ønsker å være markedets foretrukne samarbeidspartner i våre nisjer.",
  },
  {
    title: "Flat struktur",
    body: "I Helt Opplagt er det «høyt under taket», og det er lett å komme med innspill og å dele ideer.",
  },
  {
    title: "Intern rekruttering",
    body: "For den rette personen vil det være mulig å klatre på karrierestigen innenfor Helt Opplagt-konsernet.",
  },
  {
    title: "Samfunnsansvar",
    body: "Vi vet at vi ikke kan redde verden på egenhånd, men vi bidrar der vi kan og prøver å inspirere andre til å gjøre det samme.",
  },
];

const positions = [
  {
    title: "Områdeleder kantine",
    department: "Kantine",
    location: "Oslo",
    href: "https://karriere.heltopplagt.com/jobs/8303458-omradeleder-kantine",
  },
  {
    title: "Lunsjselger B2B",
    department: "Salg",
    location: "Oslo",
    href: "https://karriere.heltopplagt.com/jobs/8189749-lunsjselger-b2b",
  },
  {
    title: "Kokk",
    department: "Catering",
    location: "Oslo",
    href: "https://karriere.heltopplagt.com/jobs/8171707-kokk",
  },
  {
    title: "Servicetekniker",
    department: "Inneklima",
    location: "Oslo",
    href: "https://karriere.heltopplagt.com/jobs/7436215-servicetekniker",
  },
  {
    title: "Tilkallingshjelp til kantine",
    department: "Kantine",
    location: "Oslo",
    href: "https://karriere.heltopplagt.com/jobs/5761180-vi-soker-tilkallingshjelp-til-kantine",
  },
];

const faq = [
  {
    question: "Hva skjer med søknaden min?",
    answer:
      "Vi bruker et elektronisk søknadsbehandlingsprogram som administrerer alle søknader vi får inn. Søknaden din registreres i den avdelingen du ønsker å jobbe i, og vurderes fortløpende av rekrutterende leder. Når søknaden er sendt inn får du en bekreftelse på e-post, og deretter en ny e-post med avslag eller invitasjon til intervju. Alle intervjuer gjennomføres på vårt hovedkontor i Slimeveien 2b, 1275 Oslo.",
  },
  {
    question: "Må jeg ha arbeids- og oppholdstillatelse?",
    answer: "Ja, for å arbeide i Helt Opplagt må du ha arbeids- og oppholdstillatelse.",
  },
  {
    question: "Hvilke norskkunnskaper trenger jeg?",
    answer:
      "Vi ønsker at alle våre ansatte skal ha språkferdigheter som tilsvarer minimum B1. De fleste stillingene i Helt Opplagt har direkte kontakt med våre kunder, derfor er det viktig å ha tilfredsstillende norskkunnskaper.",
  },
  {
    question: "Hvilke stillinger finnes i Helt Opplagt?",
    answer:
      "Vi opererer med både deltids- og fulltidsstillinger. De som jobber med renhold og i våre kantiner er timesansatte — timeantallet avhenger av hva som behøves for å drifte den enkelte kantine eller utføre renholdet hos den aktuelle bedriften. Vi utlyser også fulltidsstillinger, primært innenfor salg, administrasjon og kundebehandling.",
  },
  {
    question: "Får jeg opplæring?",
    answer:
      "Alle nyansatte har de første ukene en opplæringsperiode med fokus på rollen de skal ha i Helt Opplagt. Opplæringsprogrammet gir deg informasjon om Helt Opplagt og kunnskapene som behøves for å gjøre en god jobb hos oss.",
  },
];

export function KarrierePage() {
  useDocumentMeta(
    "Karriere",
    "Vil du bli med oss på reisen? Se ledige stillinger i Helt Opplagt — kantine, catering, salg, inneklima og renhold i Oslo-området."
  );

  return (
    <div className="min-h-dvh bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Karriere</Kicker>
          <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Vil du bli med oss på reisen?
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            I Helt Opplagt ser vi den enkelte og hans eller hennes innsats og
            motivasjon. Vi gir deg tid og rom til å vokse og finne din plass —
            og mange av våre mellomledere startet som renholdere, sjåfører og
            kantineverter.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Pill href="#stillinger">Se ledige stillinger</Pill>
            <Pill
              href={KARRIERE_URL}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besøk karrieresiden vår
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy/5 bg-white">
        <div className={`${CONTAINER} py-10 lg:py-12`}>
          <dl className="grid grid-cols-3 gap-6">
            {[
              { value: "1985", label: "Grunnlagt" },
              { value: "ca. 350", label: "Medarbeidere" },
              { value: "25+", label: "Nasjoner blant ansatte" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-[13px] leading-snug text-navy/55">
                  {s.label}
                </dt>
                <dd className="font-lato text-[34px] font-light leading-none text-brand">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <Head
            title="Dette er oss"
            proof="Vi er stolte av å ha ansatte fra mer enn 25 nasjoner. Likestilling på alle nivåer står sterkt hos oss — alle får like muligheter."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((c) => (
              <div
                key={c.title}
                className="rounded-[1.5rem] bg-cloud/60 p-7"
              >
                <h3 className="font-lato text-[19px] font-bold text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section
        id="stillinger"
        className="relative isolate scroll-mt-24 overflow-hidden bg-cloud py-16 lg:py-24"
      >
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -left-14 -bottom-10 w-36 -rotate-[12deg] bg-brand/20 lg:-left-8 lg:w-52"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Ledige stillinger"
            proof="Søknader behandles på karrieresiden vår — klikk på en stilling for å lese mer og søke."
          />
          <div className="mt-10 flex max-w-[820px] flex-col gap-4">
            {positions.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-[1.5rem] bg-white p-6 shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_24px_-12px_rgba(13,43,64,0.14)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-lato text-[19px] font-bold text-navy transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-3 text-[13px] text-navy/55">
                    <span>{p.department}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                      {p.location}
                    </span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                  Les mer og søk
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <Pill
              href={`${KARRIERE_URL}connect`}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ingen passende stilling? Koble deg på
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <Head
            title="Spørsmål vi ofte får"
            proof="Om søknadsprosessen, språkkrav og opplæring."
          />
          <FaqList items={faq} />
        </div>
      </section>
    </div>
  );
}
