import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/renhold/renhold.png";
import openingImg from "../../../images/hero/web/hero-renhold.jpg";
/* NOT div/web/renhold.jpg — that is the same shot as the hero. This is the
   window-washing frame from the user's own brand archive (div/6O1A6339.jpg). */
import explainerImg from "../../../images/div/web/vinduspuss.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const renholdData: ServicePageData = {
  path: "/tjenester/renhold",
  badge: "Arbeidsmiljø",
  title: (
    <>
      Renhold
    </>
  ),
  subtitle: "Godt renhold og vedlikehold. Bedre trivsel og arbeidsmiljø.",
  intro:
    "Våre 100 profesjonelle medarbeidere ønsker seg flere nye oppdragssteder. Ønsker du at dine kollegaer skal få et rent innemiljø? Da er Helt Opplagt Rent løsningen for deg!",
  image: heroImg,
  imageAlt: "Renhold fra Helt Opplagt",
  heroImage: openingImg,
  /* NB: ingen renholdsbrosjyre er publisert på heltopplagt.no — brochureUrl
     utelatt med vilje; trenger avklaring fra kunde. Copy sourced from
     heltopplagt.no /renhold + sub-pages. */
  heroPoints: [
    {
      label: "Bedre trivsel",
      body: "Godt renhold gir større trivsel og et bedre arbeidsmiljø.",
    },
    {
      label: "Bedre inneklima",
      body: "Mindre støv reduserer risikoen for astma- og allergiplager, og virker positivt på sykefraværet.",
    },
    {
      label: "100 fagfolk",
      body: "Fagutdannede medarbeidere med vekt på HMS, service og arbeidssystematikk.",
    },
    {
      label: "Behovstilpasset avtale",
      body: "Avtalen tilpasses deres lokaler og behov — med prøveperiode der vi beviser hva vi duger til.",
    },
  ],
  explainer: {
    body: [
      "Helt Opplagt Rent er en renholdsentreprenør med rundt 100 fagutdannede medarbeidere. Vi holder arbeidsplassen deres ren på fast, behovstilpasset avtale.",
      "Tilbudet dekker hele renholdsbildet: daglig renhold, hovedrengjøring, gulvvedlikehold, vinduspuss, tepperens og møbelrens — og vaktmestertjenester ute og inne.",
    ],
    points: [
      "Daglig renhold på fast avtale",
      "Hovedrengjøring, gulvvedlikehold og vinduspuss",
      "Tepperens og møbelrens",
      "Vaktmesterservice — feiing, snø og gress",
      "Kan kombineres med kantine — ett kontaktpunkt",
    ],
    image: explainerImg,
    imageAlt: "Medarbeider fra Helt Opplagt vasker vinduer",
  },
  catalogs: [
    {
      heading: "Dette kan vi ta oss av",
      proof: "Seks tjenesteområder som til sammen dekker hele renholdsbildet.",
      layout: "grid",
      photo: true,
      items: [
        {
          name: "Daglig renhold",
          spec: "Fast avtale",
          description:
            "Behovstilpasset daglig renhold som forlenger levetiden på gulv og inventar.",
          image: `${thumbs}/25ddb625b59a219605acc899d9230432.jpg`,
          to: "/tjenester/renhold/daglig-renhold",
        },
        {
          name: "Hovedrengjøring",
          spec: "Frekvens etter bransje og smussgrad",
          description:
            "Grundig rengjøring av vegger, tak og områder det daglige renholdet ikke dekker.",
          image: `${thumbs}/77582f78736eb1356bae7dd359ef7852.jpg`,
          to: "/tjenester/renhold/hovedrengjoring",
        },
        {
          name: "Gulvvedlikehold",
          spec: "Alle typer gulv",
          description:
            "Vi renser, skurer, boner og oljer. Utsatt gulvvedlikehold kan mangedoble kostnadene.",
          image: `${thumbs}/dca037a67392f3e04161f36a0e694b15.jpg`,
          to: "/tjenester/renhold/gulvvedlikehold",
        },
        {
          name: "Vinduspuss",
          spec: "Jevnlig avtale",
          description:
            "Moderne utstyr og fagmessig utførelse — se ut gjennom vinduene, ikke på dem.",
          image: `${thumbs}/345d12b02398938002207c1977b9faac.jpg`,
          to: "/tjenester/renhold/vinduspuss",
        },
        {
          name: "Tepperens og møbelrens",
          spec: "Årlig dyprens",
          description:
            "Fjerner støv og bakterier fra teppefibre og tekstilmøbler — bedre inneluft og lengre levetid.",
          image: `${thumbs}/42921c719d882a03f23a614b86a36794.jpg`,
          to: "/tjenester/renhold/tepperens-og-mobelrens",
        },
        {
          name: "Vedlikehold, feiing, snø og gress",
          spec: "Vaktmesterservice",
          description:
            "Avfallshåndtering, belysning, montering, små reparasjoner, gressklipping, snømåking og strøing.",
          image: `${thumbs}/b150c85e26357ff9c7b793aaaaaa6351.jpg`,
          to: "/tjenester/renhold/vedlikehold-feiing-sno-og-gress",
        },
      ],
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hvordan settes renholdsavtalen opp?",
      answer:
        "Avtalen er behovstilpasset: sammen finner vi riktig frekvens og omfang for deres lokaler og ønsker.",
    },
    {
      question: "Kan vi prøve dere først?",
      answer:
        "Ja — vi tilbyr alle våre kunder en prøveperiode hvor vi skal bevise hva vi duger til.",
    },
    {
      question: "Hvem utfører renholdet?",
      answer:
        "Fagutdannede medarbeidere med vekt på HMS, service og arbeidssystematikk. Alle får tid til videreutvikling og læring, og vi holder kontinuerlige norskkurs i samarbeid med Folkeuniversitetet.",
    },
    {
      question: "Leverer dere mer enn vanlig kontorrenhold?",
      answer:
        "Ja: hovedrengjøring, gulvvedlikehold, vinduspuss, tepperens og møbelrens — og vaktmestertjenester ute og inne, fra snømåking til små reparasjoner.",
    },
    {
      question: "Kan renhold kombineres med kantine?",
      answer:
        "Ja — ett kontaktpunkt og fast oppfølging, og i mindre selskaper kan samme person ta både renhold og kantine.",
    },
  ],
  /* The six service cards above ARE the sub-page links, so "Les mer" points
     at other parts of the site instead (user's call, Catering-style). */
  readMore: [
    {
      label: "Kombiner kantine og renhold",
      description: "Én leverandør, ett kontaktpunkt — og samme person på begge tjenester.",
      to: "/tjenester/kantine/kombiner-kantine-og-renhold",
    },
    {
      label: "Inneklima — ren luft og rett temperatur",
      description: "Mindre støv er bare starten: se hva luftrenserne våre gjør.",
      to: "/tjenester/inneklima",
    },
    {
      label: "Vårt samfunnsansvar",
      description: "Norskkurs, arbeidstrening og miljøarbeid i hele driften.",
      to: "/ansvar",
    },
    {
      label: "Vil du jobbe hos oss?",
      description: "Våre 100 medarbeidere ønsker seg flere kollegaer og nye oppdragssteder.",
      to: "/karriere",
    },
  ],
  subServices: [
    {
      slug: "daglig-renhold",
      title: "Daglig renhold",
      description:
        "Vi er en renholdsentreprenør som ivaretar dine behov på en profesjonell måte. Vi kan bistå dere med en behovstilpasset renholdsavtale som på en bærekraftig og effektiv måte forlenger levetid på gulv og inventar. Samtidig vil et godt renhold bidra positivt til et lavere sykefravær og bedre lønnsomhet.",
      image: `${thumbs}/25ddb625b59a219605acc899d9230432.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vi har fagutdannede og kompetente medarbeidere, og det forplikter. Alle våre medarbeidere får bruke tid på videreutvikling og læring, blant annet gjennom nært samarbeid med våre leverandører som er spesialister på sine felt. Her legger vi også stor vekt på HMS, service og arbeidssystematikk.",
            "Vi avholder kontinuerlig norskkurs etter behov i samarbeid med Folkeuniversitetet. Denne kontinuerlige kompetanseutviklingen gjør at du som kunde får de beste leveransene fra våre motiverte medarbeidere.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "vedlikehold-feiing-sno-og-gress",
      title: "Vedlikehold, feiing, snø og gress",
      description:
        "Vi kan utføre en rekke oppgaver innen vaktmesterservice, små reparasjoner, montering, avfallshåndtering, skifting av lyspærer etc. Kort fortalt det meste du behøver av både innendørs og utendørs vedlikehold.",
      image: `${thumbs}/b150c85e26357ff9c7b793aaaaaa6351.jpg`,
      content: [
        {
          type: "image",
          src: `${thumbs}/25ee209e6fa9f31e2b3c02b4ad38bb6d.jpg`,
          alt: "Vedlikehold, feiing, snø og gress",
        },
        {
          type: "bullets",
          heading: "Eksempler på oppgaver vi kan utføre:",
          items: [
            "Avfallshåndtering",
            "Kontroll og bytte av belysning",
            "Vanning av planter",
            "Montering av dispensere og møbler etc.",
            "Små reparasjoner",
            "Kosting og vedlikehold av utemiljøer",
            "Gressklipping",
            "Fasadevask",
            "Snømåking, salting og strøing av utemiljøer",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Har dere behov for denne typen tjenester? Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat.",
            "PS! Har dere behov utover det vi har listet opp her kan vi helt sikkert hjelpe dere med det også.",
          ],
        },
      ],
    },
    {
      slug: "hovedrengjoring",
      title: "Hovedrengjøring",
      description:
        "Godt renhold og rengjøring på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager. Godt renhold har også en positiv effekt på sykefraværet.",
      image: `${thumbs}/77582f78736eb1356bae7dd359ef7852.jpg`,
      content: [
        {
          type: "text",
          heading: "En viktig del av det totale renholdsbildet",
          paragraphs: [
            "En hovedrengjøring innebærer en grundig rengjøring av både vegger og tak. Det kan også innbefatte andre områder som ikke blir rengjort ved daglig rengjøring. Dette blir vi enige om sammen. Hovedrengjøring er en viktig del av det totale renholdsbildet. Hvor ofte en trenger hovedrengjøring avhenger av bransje og smussgraden. Hovedrengjøring utføres av renholder med lang erfaring fra denne type arbeid.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "gulvvedlikehold",
      title: "Gulvvedlikehold",
      description:
        "Gulvvedlikehold er viktig for å unngå store renovasjonskostnader i fremtiden.",
      image: `${thumbs}/dca037a67392f3e04161f36a0e694b15.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vedlikehold av gulv er en viktig del av renholdet. Kostnadene kan bli mangedoblet om man utsetter dette arbeidet for lenge. Med våre moderne maskiner kan vi rense, skure, bone, olje og vedlikeholde alle typer gulv. Snakk med oss for å få en vurdering av hva som er riktig rengjøring av ditt gulv.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "vinduspuss",
      title: "Vinduspuss",
      description:
        "Godt renhold på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager.",
      image: `${thumbs}/345d12b02398938002207c1977b9faac.jpg`,
      content: [
        {
          type: "text",
          heading: "Se ut gjennom vinduene — ikke på vinduene",
          paragraphs: [
            "Vi utfører vinduspuss og bruker moderne utstyr for å gjøre vinduene rene og flekkfrie på en fagmessig og riktig måte. Slik at du kan se gjennom vinduene – ikke på vinduene.",
            "Sammen med våre kunder, kommer vi frem til en avtale om jevnlig vinduspuss.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
    {
      slug: "tepperens-og-mobelrens",
      title: "Tepperens og møbelrens",
      description:
        "Godt renhold på arbeidsplassen gir større trivsel og bedre arbeidsmiljø. Mindre støv gir også et bedre inneklima og reduserer risikoen for astma- og allergiplager.",
      image: `${thumbs}/42921c719d882a03f23a614b86a36794.jpg`,
      content: [
        {
          type: "text",
          heading: "Skitne tepper og møbler påvirker inneluften",
          paragraphs: [
            "Dersom det ikke utføres jevnlig tepperens vil dette gå utover rommets brukere i form av dårligere kvalitet på inneluften, i verste fall betyr dette høyere sykefravær. Regelmessig støvsuging av tepper er en viktig del av vedlikeholdet. I tillegg bør man årlig ta en dypere rens av teppet, for å fjerne støv og bakterier som har samlet seg i teppets fibre. Vi er klare til å bli kalt inn på teppet!",
            "Vi anbefaler også at man renser tekstilmøbler med jevne mellomrom. Dette ivaretar stoffet i møblene og vil dermed øke holdbarheten. Og så er det jo hyggeligere å sitte i en nyrenset sofa.",
            "Ring oss på 0 23 46 eller bruk skjema under for en uforpliktende prat!",
          ],
        },
      ],
    },
  ],
};

export function RenholdPage() {
  return <ServicePage data={renholdData} />;
}
