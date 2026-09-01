import { Gift, ShieldCheck, Smile, Zap } from "lucide-react";
import { ServicePage, ServicePageData } from "../../components/ServicePage";
import packehallImg from "../../../images/frukt/frukt2.png";
import pakkerImg from "../../../images/frukt/frukt.png";
import heroFruktImg from "../../../images/hero/web/hero-frukt.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const fruktData: ServicePageData = {
  path: "/tjenester/frukt",
  badge: "Helse & Trivsel",
  title: (
    <>
      Frukt
    </>
  ),
  subtitle: "Fersk frukt på kontoret. Levert hver dag.",
  intro:
    "For lite frukt er tomt før onsdag. For mye blir brunt på fredag. Vi hjelper dere å finne riktig kurv, størrelse og leveringsrytme, og leverer den helt inn på ønsket avdeling.",
  image: packehallImg,
  imageAlt: "Fruktkurv fra Helt Opplagt levert på et kontor",
  heroImage: heroFruktImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/7317/6785/9195/HeltOpplagt_Fruktbrosjyre_januar_2026_web.pdf",

  /*
   * The strip under the hero carries the argument, not the logistics: the four
   * strongest claims from the brochure's "Visste du at frukt på jobb…" list,
   * building from the immediate effect to the business case.
   *
   * It deliberately does NOT repeat delivery frequency, delivery location or
   * pricing; those are answered in the FAQ, and stating them twice was the
   * duplication this replaced.
   */
  heroPoints: [
    {
      icon: Zap,
      label: "Energi og konsentrasjon",
      body: "Rask energi midt i arbeidsdagen, som varer lenger enn den fra kaker og sjokolade.",
    },
    {
      icon: Smile,
      label: "Bedre trivsel og yteevne",
      body: "Frukt på arbeidsplassen øker både trivselen og yteevnen.",
    },
    {
      icon: ShieldCheck,
      label: "Lavere sykefravær",
      body: "Styrker immunforsvaret og bidrar til å redusere korttidsfraværet.",
    },
    {
      icon: Gift,
      label: "Et gode som synes",
      body: "Lønnsomt og godt synlig for de ansatte, og det merkes hver eneste dag.",
    },
  ],

  /*
   * The plain-language explanation, in the live site's own Norwegian: what the
   * service is, then how it works as five short checked facts. Photo right.
   */
  explainer: {
    /* No `heading`: the template's shared "Hva tilbyr vi" is the point. */
    body: [
      "Helt Opplagt leverer fruktkurver og faste fruktabonnement til bedrifter i Oslo og Stor-Oslo.",
      "Vi hjelper dere å velge riktig kurv, mengde og leveringsrytme etter antall ansatte, budsjett og hvor ofte dere ønsker påfyll.",
    ],
    points: [
      "Daglige utkjøringer",
      "Flere kurver for ulike behov og budsjetter",
      "Pakkes tett opp mot levering",
      "Leveres helt inn på ønsket kontor eller avdeling",
    ],
    image: pakkerImg,
    imageAlt:
      "Ansatt med hårnett og forkle som setter sammen en fruktkurv i pakkehallen",
  },

  /*
   * The brochure's own wording and tags, in a three-across grid: six baskets
   * fill two clean rows, so Smoothiekurven sits with the other baskets rather
   * than padding out a drinks section. Jobbsmoothie is the only true drink, so
   * it renders as one compact band instead of a half-empty card section.
   *
   * The maroon/orange print palette stays in the brochure; these render in the
   * Livery blues. Together they replace the old /tjenester/frukt/fruktkurv
   * sub-page. Prices are omitted throughout; they belong in a tilbud.
   */
  catalogs: [
    {
      heading: "Hvilken fruktkurv passer dere best?",
      proof:
        "Seks kurver som dekker de fleste behov. Vi justerer størrelse og innhold sammen med dere.",
      note: "Alle kurvene kommer i flere størrelser. Ta kontakt for et spesialtilpasset tilbud.",
      layout: "grid",
      items: [
        {
          name: "Go'kurven",
          spec: "Variert etter sesong",
          tag: "Populær",
          description:
            "Epler, sitrus, bananer, pærer, druer, plommer og nektariner, variert etter sesong. Innimellom også nøtter eller eksotisk frukt.",
          image: `${thumbs}/96803673f7a94df5f3913f6f4a4cf2bc.jpg`,
        },
        {
          name: "Knaskekurven",
          spec: "Med grønnsaker og nøtter",
          tag: "Spennende",
          description:
            "Frukt kombinert med grønnsaker og nøtter: minigulrøtter, cherrytomater, reddiker og sukkererter i tillegg til basisfrukten.",
          image: `${thumbs}/e11c93ca2acda77f28dc85d6fcfbbbc4.jpg`,
        },
        {
          name: "Hverdagskurven",
          spec: "Tre typer basisfrukt",
          tag: "Rimelig",
          description:
            "Tre typer basisfrukt, variert mellom eple, pære, banan og sitrus. Helsefordelen ved frukt, til lavest mulig pris.",
          image: `${thumbs}/a34edd7c2592381df8dcfa444f2055c0.jpg`,
        },
        {
          name: "Superkurven",
          spec: "Med nøtter og tørket frukt",
          tag: "Eksotisk",
          description:
            "Basisfrukt toppet med sesongfrukt og eksotisk frukt: plommer, nektariner, jordbær, kiwi, sharon og melon, pluss nøtter.",
          image: `${thumbs}/9dc25befdd6ba298943344f1b5453847.jpg`,
        },
        {
          name: "Rullekurven",
          spec: "Ny kurvtype hver uke",
          tag: "Vanskelig å velge?",
          description:
            "Klarer dere ikke å bestemme dere? Da varierer vi mellom de andre kurvene fra uke til uke.",
          /* NOTE: this thumbnail has green promo text burned into it. Replace
             with the brochure's clean Rullekurven photo when it is available. */
          image: `${thumbs}/2b069cde48e3d0e523b00bd639165d78.png`,
        },
        {
          name: "Smoothiekurven",
          spec: "Smoothie inkludert",
          description:
            "Basisfrukt kombinert med ferske smoothies. For dere som vil både spise og drikke frukten sin.",
          image: `${thumbs}/bf97eb8f29a91dc54881f086962d7fab.jpg`,
        },
      ],
    },
    {
      heading: "Drikke",
      proof:
        "Rene smoothies laget på vårt eget kjøkken, av frisk frukt og bær. Bestilles alene, eller som supplement til fruktkurven.",
      layout: "band",
      items: [
        {
          name: "Jobbsmoothie",
          spec: "To varianter i uka",
          description:
            "Næringsrike, ferske smoothies laget på vårt eget kjøkken, av frisk frukt og bær. Vi rullerer gjennom åtte smaker, så det kommer noe nytt hver uke.",
          image: `${thumbs}/84880641e437bfb7b441396f2b721a9d.jpg`,
        },
      ],
    },
  ],

  /* No separate benefits section: the hero strip above states the argument
     once, at the top, where it does the most work. The template still supports
     `benefits` for the other five services. */

  /* Questions and answers supplied by the client, verbatim. Note that the
     pricing answer names a figure; that is a deliberate reversal of the
     earlier "no prices on the page" decision, on the client's instruction. */
  faqHeading: "Ofte stilte spørsmål",

  faq: [
    {
      question: "Er fruktlevering bare tilgjengelig som abonnement?",
      answer:
        "Helt Opplagt leverer først og fremst faste fruktavtaler til bedrifter. Vi kan også hjelpe med enkeltleveranser når kapasiteten tillater det.",
    },
    {
      question: "Kan dere levere frukt samme dag?",
      answer:
        "Det kan enkelte ganger være mulig, avhengig av tidspunkt, kapasitet og kjørerute. Vi kan derfor ikke garantere levering samme dag. Ta kontakt, så sjekker vi hva vi kan få til.",
    },
    {
      question: "Hvor leverer Helt Opplagt frukt?",
      answer:
        "Vi leverer i Oslo og store deler av Stor-Oslo, omtrent innenfor området Drammen - Gardermoen - Fredrikstad.",
    },
    {
      question: "Hva koster frukt på jobben?",
      answer:
        "Prisen avhenger av kurvtype, størrelse og leveringsfrekvens. Våre eksisterende priseksempler starter på omtrent 6 kroner per person per dag.",
    },
    {
      question: "Hvor ofte kan vi få levert frukt?",
      answer:
        "Vi har daglige utkjøringer og tilpasser leveringsrytmen etter behov og avtale.",
    },
    {
      question: "Leveres kurven helt inn på kontoret?",
      answer:
        "Ja. Fruktkurvene kan leveres helt inn på ønsket kontor eller avdeling.",
    },
  ],

  /* The catalogs cover the baskets and the smoothies, and "Slik jobber vi"
     covers the routines, so the sub-service card grid would only repeat
     itself. Both sub-pages stay reachable through contextual links instead. */
  hideSubServiceCards: true,

  /* One place for the deeper reading, instead of a stray link trailing off the
     end of three different sections. */
  readMoreHeading: "Les mer",
  readMore: [
    {
      label: "Våre fruktrutiner",
      description:
        "Smakspanelet, pakkingen, kjølekjeden og kvalitetskontrollen bak hver leveranse.",
      to: "/tjenester/frukt/vare-fruktrutiner",
    },
    {
      label: "Jobbsmoothie",
      description: "Alle smaker og pakkestørrelser, laget på vårt eget kjøkken.",
      to: "/tjenester/frukt/jobbsmoothie",
    },
    {
      label: "Vårt samfunnsansvar",
      description:
        "Miljøfyrtårn, gjenbrukskurver, nullutslipp på transport innen 2028 og fruktpakkeskolen.",
      to: "/ansvar",
    },
    {
      label: "Alle tjenestene våre",
      description:
        "Lunsj, kantine, catering, inneklima og renhold, fra samme leverandør.",
      to: "/tjenester",
    },
  ],

  subServices: [
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
            "De er utviklet med fokus på sunn energi, og er fulle av antioksidanter og vitaminer. På den måten sørger man for at hele bedriften er frisk, effektiv og Helt Opplagt, hele dagen. Vi leverer også til arrangementer og events.",
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
            "Del noe godt, erstatt litt av kaffedrikken",
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
