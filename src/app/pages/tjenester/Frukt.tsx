import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/frukt/frukt2.png";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const fruktData: ServicePageData = {
  path: "/tjenester/frukt",
  badge: "Helse & Trivsel",
  title: (
    <>
      Kurver med{" "}
      <span className="text-[#0078C4] italic font-light">
        jobbfrukt og grønnsaker
      </span>{" "}
      levert i hele Oslo
    </>
  ),
  intro:
    "Bestill fruktkurver levert i hele Oslo. Våre kurver passer perfekt til kontor, gaver og spesielle anledninger. Velg størrelse og leveringstid, vi ordner resten.",
  image: heroImg,
  imageAlt: "Fruktkurv fra Helt Opplagt",
  brochureUrl:
    "https://heltopplagt.no/application/files/7317/6785/9195/HeltOpplagt_Fruktbrosjyre_januar_2026_web.pdf",
  subServices: [
    {
      slug: "fruktkurv",
      title: "Velg din fruktkurv",
      description:
        "Vi leverer flere ulike kurver med jobbfrukt og grønnsaker. Bestill et fruktabonnement til din bedrift og velg en fruktkurv som passer til dere. Velg mellom Hverdagskurven, Go’kurven, Superkurven, Knaskekurven og Rullekurven.",
      image: `${thumbs}/8fe101beb0e2e3ccd7b255e2957a1ac8.jpg`,
      content: [
        {
          type: "bullets",
          heading: "Visste du at frukt:",
          items: [
            "gir umiddelbar energi og økt konsentrasjon?",
            "på arbeidsplassen øker trivselen og yteevnen?",
            "styrker immunforsvaret og reduserer korttidsfraværet?",
            "er et lønnsomt og godt synlig gode til dine ansatte?",
            "gir positiv og varig energi som holder lenger enn energien fra kaker og sjokolade?",
          ],
        },
        {
          type: "cards",
          heading: "Velg din fruktkurv:",
          items: [
            {
              title: "Hverdagskurven",
              description: "Priseksempel 12 pers: ca 6,- pr hode / dag",
              image: `${thumbs}/a34edd7c2592381df8dcfa444f2055c0.jpg`,
            },
            {
              title: "Knaskekurven",
              description: "Priseksempel 10 pers: ca 11,- pr hode / dag",
              image: `${thumbs}/e11c93ca2acda77f28dc85d6fcfbbbc4.jpg`,
            },
            {
              title: "Superkurven",
              description: "Priseksempel 12 pers: ca 11,- pr hode / dag",
              image: `${thumbs}/9dc25befdd6ba298943344f1b5453847.jpg`,
            },
            {
              title: "Go’kurven",
              description: "Priseksempel 12 pers: ca 8,- pr hode / dag",
              image: `${thumbs}/96803673f7a94df5f3913f6f4a4cf2bc.jpg`,
            },
            {
              title: "Rullekurven",
              description: "Priseksempel 12 pers: ca 9,- pr hode / dag",
              image: `${thumbs}/2b069cde48e3d0e523b00bd639165d78.png`,
            },
            {
              title: "Smoothiekurven",
              description: "Priseksempel 12 pers: ca 11,- pr hode / dag",
              image: `${thumbs}/bf97eb8f29a91dc54881f086962d7fab.jpg`,
            },
          ],
        },
      ],
    },
    {
      slug: "jobbsmoothie",
      title: "Jobbsmoothie",
      description:
        "Våre spennende, næringsrike og ferske smoothies er laget fra bunnen av på vårt eget kjøkken med ekte frukt og bær.",
      image: `${thumbs}/0f4e0649d2119d89e9f23b17cfc2ae78.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "De er utviklet med fokus på sunn energi, og er fulle av antioksidanter og vitaminer. På den måten sørger man for at hele bedriften er frisk, effektiv og Helt Opplagt — hele dagen. Vi leverer også til arrangementer og events.",
          ],
        },
        {
          type: "bullets",
          heading:
            "Vi leverer to ulike varianter hver uke der vi rullerer blant disse:",
          items: [
            "Blåbær og Pære",
            "Gojibær og Jordbær",
            "Nektarin og Jordbær",
            "Açai og Bjørnebær",
            "Jordbær og Pære",
            "Açai og Blåbær",
            "Gojibær og Plomme",
            "Ananas og Pære",
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Liten Smoothie-pakke",
              description:
                "3 flasker a 1 liter – 3 liter i uka – 985,- inkl levering per måned.",
              image: `${thumbs}/1ff3dd9faf6885160c0cd585489a6ba6.jpg`,
            },
            {
              title: "Stor Smoothie-pakke",
              description:
                "5 flasker a 1 liter – 5 liter i uka – 1495,- inkl levering per måned.",
              image: `${thumbs}/84880641e437bfb7b441396f2b721a9d.jpg`,
            },
          ],
        },
        {
          type: "text",
          heading:
            "Hva vil det bety for din bedrift å ha et Smoothie-abonnement?",
          paragraphs: [
            "Vi bruker ferskpresset sitron i våre smoothies for naturlig konservering og best smak, og bananer for naturlig fylde. For å oppnå den naturlig friske smaken bruker vi premium eplemost fra Askim Frukt- og Bærpresseri.",
            "Smoothiene leveres i 1-litersflasker som vi setter direkte inn i deres kjøleskap. På den måten kan dere forsyne dere når dere trenger en boost, både før og etter lunsj.",
            "Vi varierer smoothiene fra uke til uke, slik at dere til enhver tid har noe nytt og spennende å tilby medarbeidere, kunder og gjester.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Gir energi og lavere sykefravær",
            "Perfekt hvis du vil imponere i møter",
            "Del noe godt — erstatt litt av kaffedrikken",
          ],
        },
        {
          type: "text",
          heading: "Prøv oss!",
          paragraphs: [
            "Ta kontakt på 0 23 46, eller bruk skjema for mer informasjon og tilbud!",
          ],
        },
      ],
    },
    {
      slug: "vare-fruktrutiner",
      title: "Våre fruktrutiner",
      description:
        "Gode rutiner på renhold og hygiene er selve nøkkelen til at våre kunder alltid mottar sunn, frisk og velsmakende frukt, hver dag.",
      image: `${thumbs}/3660ed1a222d7d3dde58c2ee0b824500.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Hver tirsdag møtes Helt Opplagts smakspanel. Da skal frukt for neste ukes kurver velges ut.",
            "Pakkingen utføres av et eget pakketeam nærmest mulig leveringstidspunkt. Hver enkelt frukt blir kontinuerlig sjekket. Det benyttes hansker, forklær og hårnett under pakking. Hygiene og temperatur i pakkelokalene kontrolleres og logges jevnlig i henhold til Mattilsynets regler. Helt Opplagt har daglige utkjøringer. Fruktkurvene leveres helt inn på ønsket avdeling/kontor.",
          ],
        },
        {
          type: "text",
          heading: "Fruktpakketeamet og sosialt ansvar",
          paragraphs: [
            "Helt Opplagt er opptatt av å ta være på nærmiljøet. Derfor tilbyr vi arbeidsplasser og arbeidstrening til ungdommer i bydelen. Vi har også et samarbeid med arbeidsmarkedsbedrifter på Østlandet. Dette gir deg mulighet til å få pakket din fruktkurv av en bedrift med varig tilrettelagte arbeidsplasser (VTA). På denne måten gir vi også deg muligheten til å ta et sosialt ansvar rundt din leveranse.",
          ],
        },
        {
          type: "bullets",
          heading:
            "Vi er en miljøfyrtårnbedrift som prioriterer miljøet i alt vi gjør, som for eksempel:",
          items: [
            "Gjenbrukskurver brukes til alle leveranser.",
            "Bilparken er nøye planlagt i forhold til utslipp.",
            "Alt avfall kildesorteres: Frukt som sorteres ut av vår strenge kvalitetskontroll, men som fremdeles er brukbar, blir gitt bort til lokale barnehager og organisasjoner. Frukt som ikke lenger kan benyttes gis bort som heste- og grisefôr, eller gjenvinnes som biogass.",
            "Økologisk frukt blir benyttet såfremt det er tilgjengelig.",
          ],
        },
      ],
    },
  ],
};

export function FruktPage() {
  return <ServicePage data={fruktData} />;
}
