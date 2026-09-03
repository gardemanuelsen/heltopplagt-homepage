import { ArrowUpRight } from "lucide-react";
import { CONTAINER, Kicker, Pill } from "../components/site";
import { Head } from "../components/ServicePage";
import teamImg from "../../images/hele_gjengen.jpg";
import { useDocumentMeta } from "../../lib/use-document-meta";

/*
 * Content is verbatim from heltopplagt.no/om-oss and /om-oss/historikk.
 * NOTE: the live site states both "drøyt 320 ansatte" (historikk) and
 * "ca. 350" (karriere.heltopplagt.com) — historikk's figure is used here.
 */

const stats = [
  { value: "1985", label: "Grunnlagt som Euromiljø" },
  { value: "320+", label: "Ansatte i konsernet" },
  { value: "3500", label: "Fruktkurver hver uke" },
  { value: "15 000", label: "Serveres lunsj hver dag" },
  { value: "1200", label: "Anlegg på service" },
];

const values = [
  {
    title: "Vi dyrker samhold",
    body: "Hos oss har alle et ansvar for å skape et inkluderende arbeidsmiljø hvor vi presterer, har det moro sammen og bryr oss om hverandre. Vi har tro på våre medarbeidere, noe som gjenspeiles i vår flate struktur — og vi har et mangfold som viser hverandre tillit og respekt.",
  },
  {
    title: "Vi er nysgjerrige",
    body: "Vi lærer av våre feil, og skaper nye og bedre løsninger. For å kunne lære av og med hverandre har vi et åpent sinn, og mot til å dele og stille spørsmål. Vi utforsker fremtiden og de muligheter som ligger i den.",
  },
  {
    title: "Vi skaper kvalitet",
    body: "Vi jobber for å knytte til oss de rette menneskene med den riktige kompetansen, og rekrutterer gjerne internt for å videreutvikle mennesker, kunnskap og erfaring. Vi er fleksible og snur oss raskt for å gi unik kundeservice og holde kvaliteten vi har lovet.",
  },
];

const timeline = [
  {
    year: "1985",
    title: "Det starter med ren luft",
    body: "Euromiljø etableres, med luftrensere, kjøling og varmepumper — løsninger for rask bedring av innemiljøet hos bedrifter på Østlandet.",
  },
  {
    year: "Midt på 90-tallet",
    title: "Jobbfrukten kommer",
    body: "Vi starter levering av fruktkurver — lett tilgjengelig frukt på arbeidsplassen. I dag er tjenesten en selvfølge hos svært mange bedrifter.",
  },
  {
    year: "1999",
    title: "Sunn lunsj",
    body: "Levering av sunn lunsj til små og mellomstore bedrifter. Tjenesten utvides senere med kantinedrift med personell, varmmat og catering fra eget kjøkken.",
  },
  {
    year: "2007",
    title: "Helt Opplagt på jobben",
    body: "Euromiljø beholdes som firmanavn, men profilnavnet Helt Opplagt på jobben tas i bruk.",
  },
  {
    year: "2011",
    title: "Nytt bygg på Bjørnholt",
    body: "Vårt eget bygg ferdigstilles, bygget spesielt for våre virksomheter — med over 900 m² pakkearealer og oppvarming basert på gjenbruksenergi.",
  },
  {
    year: "2014",
    title: "Miljøfyrtårn",
    body: "Systematisk miljøarbeid i hverdagen gjør oss til en Miljøfyrtårn-sertifisert bedrift.",
  },
  {
    year: "2016",
    title: "Rett Hjem",
    body: "Vi kjøper Rett Hjem for å tilby netthandel av lunsj og catering — og Rett Hjem PLUSS, med levering av dagligvarer og middagsmat til eldre.",
  },
  {
    year: "I dag",
    title: "Drøyt 320 ansatte",
    body: "Vi gjør service på rundt 1200 luftrensere og varmepumper hver måned, produserer rundt 3500 fruktkurver per uke, og serverer lunsj til over 15 000 mennesker hver dag.",
  },
];

export function OmOssPage() {
  useDocumentMeta(
    "Om oss",
    "Helt Opplagt har levert helse og trivsel på arbeidsplassen siden 1985: frukt, lunsj, kantine, catering, inneklima og renhold fra én leverandør."
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
          <Kicker>Om oss</Kicker>
          <h1 className="mt-4 max-w-[46rem] font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Menneskene bak det Helt Opplagte valget
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Sammen skal vi være det Helt Opplagte valg for en sunnere, renere og
            enklere hverdag! Helt Opplagt på jobben er en markedsorientert
            leverandør av løpende abonnementsbaserte tjenester innen helse og
            trivsel på arbeidsplassen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy/5 bg-white">
        <div className={`${CONTAINER} py-10 lg:py-12`}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
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

      {/* Team + forretningsidé */}
      <section className="bg-white py-16 lg:py-24">
        <div
          className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
        >
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem]">
              <img
                src={teamImg}
                alt="Hele gjengen i Helt Opplagt"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <Head
              title="Markedets foretrukne samarbeidspartner"
              proof="Gjennom høy kvalitet, presise leveranser, nærhet til kundene, høy servicegrad og riktige priser skal vi være markedets foretrukne samarbeidspartner i våre nisjer."
            />
            <p className="mt-6 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi tror på menneskene, og vi bryr oss om deg. Gjennom våre verdier
              får vi mennesker til å blomstre, trives og gjøre et godt stykke
              arbeid.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-navy/65 lg:text-[16px]">
              Vi er stolte av å identifisere oss som en virksomhet med god
              kultur og rutiner for å fremme likestilling og hindre
              diskriminering på arbeidsplassen. I våre stillingsannonser
              oppfordrer vi kvalifiserte søkere til å søke uansett alder, kjønn,
              legning og kulturell bakgrunn.
            </p>
            <div className="mt-8">
              <Pill to="/karriere" variant="outline">
                Jobb hos oss
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Pill>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative isolate overflow-hidden bg-cloud py-16 lg:py-24">
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -left-14 -top-8 w-36 -rotate-[12deg] bg-brand/20 lg:-left-8 lg:w-52"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Verdiene våre"
            proof="Samhold, nysgjerrighet og kvalitet skal gjøre oss i stand til å løfte hverandre til topp prestasjoner i alle ledd."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.5rem] bg-white p-7 shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
              >
                <h3 className="font-lato text-[20px] font-bold text-navy">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 lg:py-24">
        <div className={CONTAINER}>
          <Head
            title="Historien vår"
            proof="Fra luftrensere i 1985 til seks tjenester under ett tak."
          />
          <ol className="mt-10 max-w-[820px] border-l-2 border-brand/20 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-brand shadow-[0_0_0_1px_rgba(0,119,190,0.3)]"
                />
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
                  {t.year}
                </p>
                <h3 className="mt-1.5 font-lato text-[19px] font-bold text-navy">
                  {t.title}
                </h3>
                <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-navy/65">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Åpenhetsloven */}
      <section className="relative isolate overflow-hidden bg-sand py-16 lg:py-20">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-16 -bottom-12 w-40 rotate-[15deg] bg-amber/15 lg:-right-8 lg:w-56"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <Head
            title="Åpenhetsloven"
            proof="Vi tar ansvar for menneskerettigheter og arbeidsforhold i vår virksomhet og leverandørkjede."
          />
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.7] text-navy/70">
            Åpenhetsloven trådte i kraft 1. juli 2022 for å forebygge brudd på
            menneskerettigheter og uanstendige arbeidsforhold. Vi har derfor
            gjennomført aktsomhetsvurderinger basert på OECD-retningslinjer, og
            vil gjøre dette årlig. Ingen faktiske negative konsekvenser for
            menneskerettigheter eller uanstendige arbeidsforhold har blitt
            identifisert i vår aktsomhetsvurdering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Pill
              href="https://heltopplagt.no/download_file/view/494/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse — konsernet
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/495/180"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redegjørelse — Euromiljø Natur AS
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
            <Pill
              href="https://heltopplagt.no/download_file/view/458"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supplier code of conduct
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Pill>
          </div>
        </div>
      </section>
    </div>
  );
}
