import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/kantine/kantine.png";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const kantineData: ServicePageData = {
  path: "/tjenester/kantine",
  badge: "Mat & Drikke",
  title: (
    <>
      Vi kommer med maten —{" "}
      <span className="text-[#0078C4] italic font-light">dere nyter</span>
    </>
  ),
  intro:
    "Proffkantine er vårt fullservicetilbud til alle typer kjøkken der vi tar oss av hele lunsjavviklingen. Vi stiller med en hyggelig vert eller vertinne — dere kan bare komme og nyte! Ta kontakt med oss for en gratis befaring.",
  image: heroImg,
  imageAlt: "Kantinedrift fra Helt Opplagt",
  brochureUrl:
    "https://heltopplagt.no/application/files/9016/9636/6182/Helt_Opplagt_Kantinebrosjyre_2023_WEB.pdf",
  subServices: [
    {
      slug: "om-vare-kantiner",
      title: "Om våre kantiner",
      description:
        "Vi kommer med maten — dere nyter. Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter med mellom 20 og 300 ansatte.",
      image: `${thumbs}/1e7046a1804a25a379a1d086b08d75ee.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Våre varierte menyer gir dere en buffet som er både smaksrik og sunn for kroppen, samt presentert på en måte som er en fryd for øyet! Vi tilbyr et modulbasert kantinetilbud der dere selv kan påvirke sammensetningen.",
            "Her kan man enten ha kun deler av modulene, «alt» hver dag eller en kombinasjon med for eksempel noen moduler fast og la andre rullere utover uken. Her er det med andre ord alle muligheter for enhver smak.",
            "Vi leverer daglig, noe som gir store fordeler i forhold til ferskhet, kvalitet og fleksibilitet. Det gir lettere tilpasning til variasjoner i antall brukere og gjester, og fjerner svinnproblematikk.",
            "Vi presenterer helst maten på fat i en buffetløsning. Dette hindrer unødvendig svinn, sparer tidsbruk og dermed også kostnader, samt ikke minst er det den gunstigste løsningen for miljøet, sammenlignet med å servere maten i kuvertbegre.",
          ],
        },
        {
          type: "bullets",
          heading: "Modulbasert kantinetilbud — velg blant følgende moduler:",
          items: [
            "Frokostblanding og yoghurt som et alternativ eller tillegg.",
            "Pålegg — pyntede fat og skåler med kjøtt- og fiskepålegg, oster, majonessalater, syltetøy og smørepålegg som varieres fra dag til dag.",
            "Småretter som omelett, tunfisksalat og grønnsakspanne.",
            "Salater — daglig variasjon mellom mange spennende salater som tilberedes ferskt hos dere.",
            "Varmmat laget fra bunn av på vårt eget kjøkken.",
            "Vafler/småkaker — perfekt som fredagskos!",
            "Ulike typer drikke som juice og melk, deriblant kundefavoritten Eplejuice fra Askim frukt- og bærpresseri.",
            "Brød/knekkebrød — sunne og grove brød etter egne oppskrifter uten unødvendige tilsetningsstoffer. Variert utvalg av gode og fiberrike knekkebrødvarianter.",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "verter-og-vertinner",
      title: "Verter og vertinner",
      description:
        "I våre mer enn 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag for våre kunders ansatte.",
      image: `${thumbs}/a29ba39192bb1cdb321cad644af15f53.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi vet at våre kunder er opptatt av både atmosfære og smak, så vårt fokus er å skape en hyggelig ramme rundt lunsjavviklingen i tillegg til høy kvalitet på maten vi serverer.",
            "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten. Vi tar oss av alt av gjøremål som: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig etc. Vi kan også påta oss annet forefallende kontorarbeid og/eller vask av deres lokaler.",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/5215/5777/5035/2019-05-13_21-17_525.jpg",
          alt: "Verter og vertinner fra Helt Opplagt",
        },
      ],
    },
    {
      slug: "kombiner-kantine-og-renhold",
      title: "Kombiner kantine og renhold",
      description:
        "Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser. Du har større oversikt og det krever mindre ressurser.",
      image: `${thumbs}/37b164159bb2d27e7dd7c3be6e7d98de.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi kan tilby deg ett kontaktpunkt og fast oppfølgning ved behov. Vi ønsker alle en hverdag hvor vi kan fokusere på vår kjernevirksomhet. Ved å velge en eller flere tjenester fra Helt Opplagt vil vi legge til rette slik at dere kan rendyrke det dere er gode på.",
            "Vi tilbyr alle våre kunder en prøveperiode hvor vi skal bevise hva vi duger til. Og med over 30 års bransjeerfaring kan vi skryte av å ha ekstremt få tilfeller av frafall etter denne prøveperioden. Skulle du ønske å besøke en av våre referansekunder for å se tjenesten i praksis er du velkommen til dette.",
            "Mindre selskaper kan i tillegg dra nytte av samme person på både renhold og kantine. På denne måten får vi effektivisert tidsbruken til deres vert/vertinne som igjen gjør at dere sparer penger.",
            "Du har kanskje prøvd mange leverandører tidligere som ikke leverer over tid? Tett dialog, oppfølgning og ris/ros fra dere vil holde oss på tå hev slik at vi hele tiden kan levere den tjenesten og kvaliteten dere betaler for.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prøveperiode.",
          ],
        },
      ],
    },
    {
      slug: "kantine-pa-jobben-uten-kjokken",
      title: "Kantine på jobben – uten kjøkken? Ja, Helt Opplagt!",
      description:
        "Når mange tenker på kantine, ser de for seg storkjøkken, industrioppvaskmaskiner og kokker i fullt firsprang. Men hva med de små bedriftene? Hva med kontorfellesskapet på 10–30 personer, uten eget kjøkken, men med like stort behov for sunn, fristende og praktisk lunsj?",
      image: `${thumbs}/bb139f5c56abdc875066d1f6e8ca80c3.jpg`,
      content: [
        {
          type: "image",
          src: `${thumbs}/3a320259b5899c672ae58041a7efb3bd.jpg`,
          alt: "Kantine på jobben uten kjøkken",
        },
        {
          type: "text",
          paragraphs: [
            "Hos Helt Opplagt leverer vi fullverdige kantineløsninger til bedrifter helt ned i 15 personer – uten at dere trenger store kjøkkenfasiliteter.",
          ],
        },
        {
          type: "text",
          heading: "Skreddersydd kantine – rett på døra",
          paragraphs: [
            "Vår kantinetjeneste er modulbasert, noe som betyr at du som kunde kan velge akkurat det nivået som passer dere – både innhold og budsjett. Enten det er en enkel løsning med brød, pålegg og salater, eller en mer omfattende meny med daglig varmretter og småbakst, så leveres alt ferdig til kontoret – pakket i resirkulerte esker, klare til servering.",
          ],
        },
        {
          type: "text",
          heading: "Ingen kjøkken? Ikke noe problem!",
          paragraphs: [
            "Mange små og mellomstore bedrifter dropper kantine fordi de mangler fasilitetene. Med oss trenger du ikke et stort kjøkken, men kommer langt med en komfyr, kjøleskap og oppvaskmaskin. Alt kommer klart til bruk, og våre kantineverter tar seg av oppdekking, rydding og etterarbeid – med et smil.",
          ],
        },
        {
          type: "bullets",
          heading: "Hvorfor velge Helt Opplagt?",
          items: [
            "Tilpasset alle størrelser: Vi dekker bedrifter fra 15 til 300 ansatte – og tar de små like seriøst som de store.",
            "Fersk mat, levert daglig: Våre menyer er varierte, sunne og laget fra bunnen av på vårt eget kjøkken.",
            "Reduserer matsvinn: Daglig levering gjør at vi treffer bedre på behovet – og unngår unødig svinn.",
            "Miljø og ansvar: Vi kildesorterer alt avfall, benytter resirkulert emballasje, leverer maten i El-biler og gir overskuddsmat til veldedige formål.",
            "Personlig service: Du får fast kontaktperson, raske svar og en dedikert vert som kjenner din bedrift.",
            "Kantine kombinert med renhold: Ved å samle dine tjenester hos en leverandør vil du forenkle din arbeidshverdag. Færre leverandører bidrar til store besparelser.",
          ],
        },
        {
          type: "text",
          heading: "Det lille ekstra – når du ønsker det",
          paragraphs: [
            "Vil du ha fredagsvafler, pølseonsdag eller hjelp til event? Vi fikser det. For oss handler kantine om mer enn mat – det handler om trivsel, helse og samhold i hverdagen.",
            "Er du klar for en smartere kantineløsning? Kontakt oss i dag – vi hjelper deg å finne en løsning som passer perfekt, uansett størrelse på bedriften.",
          ],
        },
      ],
    },
  ],
  quote: {
    text: "Helt Opplagt leverer god, variert og sunn mat — fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse, hver dag! Helt Opplagt er fleksible og imøtekommende med høy servicegrad — vi er superfornøyd.",
    name: "Wenche Revhaug",
    role: "Styremedlem",
    company: "Kronos Titan",
  },
};

export function KantinePage() {
  return <ServicePage data={kantineData} />;
}
