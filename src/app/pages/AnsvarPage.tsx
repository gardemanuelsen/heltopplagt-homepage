import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head } from "../components/ServicePage";
import { useDocumentMeta } from "../../lib/use-document-meta";

/*
 * Content is verbatim from heltopplagt.no/samfunnsansvar and its sub-pages
 * (miljo, arbeidstrening, nettverk-etter-soning, norskkurs). The previous
 * page's invented claims ("80 % norske råvarer", five dated goals, HACCP
 * badge) are removed — everything below is documented on the live site.
 */

const miljoTiltak = [
  {
    title: "Miljøfyrtårn siden 2014",
    body: "Systematisk arbeid med miljøtiltak i hverdagen gjorde oss til en Miljøfyrtårn-sertifisert bedrift i 2014. Vår miljøgruppe, med ansatte fra alle avdelinger, kvalitetssikrer miljøtiltakene løpende.",
  },
  {
    title: "Miljøvennlige gjenbrukskurver",
    body: "Vi benytter utelukkende flettede gjenbrukskurver, laget av en familiebedrift i en liten landsby i fjellene på Filippinene.",
  },
  {
    title: "Kildesortering",
    body: "Alle avdelinger kildesorterer avfall. All papp komprimeres og leveres til gjenbruk — vi returnerer over 1 tonn emballasje i uken.",
  },
  {
    title: "Ingenting går til spille",
    body: "Frukt som sorteres ut i kvalitetskontrollen, men som er fullt brukbar, gis til barnehager og organisasjoner som Fattighuset og Gatebarnas far. Resten går til heste- og grisefôr samt biogass.",
  },
  {
    title: "CO2-nøytral virksomhet",
    body: "Vi fører årlig klimaregnskap etter GHG-protokollen og kjøper FN-godkjente CO2-kvoter for alle våre utslipp — gjennom Gold Standard-prosjektet i Mali, der husholdninger får energieffektive og rentbrennende kjøkkenovner.",
  },
  {
    title: "Gjenbruk av energi",
    body: "All oppvarming i bygget vårt på Bjørnholt er basert på gjenbruk av energi fra forbrenningsanlegget på Klemetsrud, og kjølingen gjøres med energigjerrig varmepumpeteknologi.",
  },
  {
    title: "Vaskbare filtre",
    body: "Inneklimaavdelingen skifter nær 20 000 filtre hvert år. I stedet for å kaste dem bruker vi vaskbare filtre som renses i vår egen vaskehall og brukes igjen — omtrent som med panteflasker.",
  },
  {
    title: "Nullutslipp på transport innen 2030",
    body: "Med Ford E-Transit elvarebiler, elektriske firmabiler og egen ladeinfrastruktur er innkjøp av rene fossilbiler til transportavdelingen historie.",
  },
];

const sosialt = [
  {
    title: "Arbeidstrening",
    body: "I samarbeid med arbeidsmarkedsbedrifter på Østlandet kan du som kunde få fruktkurvene dine pakket av en bedrift med varig tilrettelagte arbeidsplasser (VTA) — i dag Stiftelsen Radarveien, avdeling Skredderstua arbeidssenter. Kurvene er like våre andre, men spesielt merket.",
  },
  {
    title: "Nettverk etter soning",
    body: "Vi har stor tro på mennesket — også de som trenger en ny sjanse. Sammen med Røde Kors i Oslo tilbyr vi praksisplasser til tidligere innsatte, med oppfølging fra Røde Kors' frivillige. Fungerer arbeidsforholdet, ansetter vi personen fast.",
  },
  {
    title: "Norskkurs for ansatte",
    body: "Sammen med Folkeuniversitetet tilbyr vi norskkurs med gratis lærebøker til 45 av våre ansatte. Undervisningen er rettet mot arbeidet de utfører — og gir i tillegg til språkkunnskaper et sterkere fellesskap.",
  },
  {
    title: "En hånd til ukrainske flyktninger",
    body: "Vi tilbyr arbeid, interne fadderordninger og norskkurs til ukrainske flyktninger, i dialog med den ukrainske ambassaden, NAV og europratsya.com.",
  },
];

export function AnsvarPage() {
  useDocumentMeta(
    "Samfunnsansvar",
    "Miljøfyrtårn siden 2014, CO2-nøytral drift, arbeidstrening og nettverk etter soning: slik tar Helt Opplagt ansvar for miljø, mennesker og samfunn."
  );

  return (
    <div className="min-h-dvh bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-lime/15 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Samfunnsansvar</Kicker>
          <h1 className="mt-4 max-w-[46rem] font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Vi kan ikke redde verden alene — men vi bidrar der vi kan
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Vi har alltid hatt stort fokus på miljøtiltak — for klima og natur,
            men også i et sosialt perspektiv. Vi jobber kontinuerlig med å finne
            smarte løsninger som sparer ressurser og miljø, og håper å inspirere
            andre til å gjøre det samme.
          </p>
          <div className="mt-7">
            <Pill
              href="https://heltopplagt.no/download_file/view/455/236"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Les klimaregnskapet vårt
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>

      {/* Miljø */}
      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <Head
            title="Miljøansvaret vårt"
            proof="Konkrete tiltak i hele driften — fra gjenbrukskurver og kildesortering til CO2-nøytralitet."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {miljoTiltak.map((t) => (
              <div
                key={t.title}
                className="rounded-[1.5rem] bg-cloud/60 p-7"
              >
                <h3 className="font-lato text-[19px] font-bold text-navy">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/aktuelt/helt-opplagt-samarbeider-med-ford-pa-veien-mot-nullutslipp"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              Les om overgangen til elektriske varebiler
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sosialt ansvar */}
      <section className="relative isolate overflow-hidden bg-sand py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-16 -bottom-12 w-40 -rotate-[15deg] bg-amber/15 lg:-left-8 lg:w-60"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Mennesker og samfunn"
            proof="Vi tror på menneskene — og gir muligheter til dem som trenger en ny sjanse."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
            {sosialt.map((t) => (
              <div
                key={t.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
              >
                <h3 className="font-lato text-[19px] font-bold text-navy">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifiseringer og medlemskap */}
      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <Head
            title="Sertifiseringer og medlemskap"
            proof="Dokumentert — ikke bare fine ord."
          />
          <ul className="mt-8 grid max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: "Miljøfyrtårn",
                detail: "Sertifisert siden 2014",
              },
              {
                name: "Grønt Punkt",
                detail: "Medlem, med EL-returavtale",
              },
              {
                name: "GLOBALG.A.P.",
                detail: "Fruktleverandørene våre er tilknyttet",
              },
            ].map((c) => (
              <li
                key={c.name}
                className="rounded-[1.5rem] border border-navy/10 p-6 text-center"
              >
                <p className="font-lato text-[18px] font-bold text-navy">
                  {c.name}
                </p>
                <p className="mt-1 text-[13px] text-navy/55">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
