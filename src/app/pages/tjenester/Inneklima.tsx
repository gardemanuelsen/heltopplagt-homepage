import {
  ContentBlock,
  ServicePage,
  ServicePageData,
} from "../../components/ServicePage";
import heroImg from "../../../images/inneklima/inneklima.png";
import openingImg from "../../../images/hero/web/hero-inneklima.jpg";
/* NOT div/web/inneklima.jpg — that is the same shot as the hero. */
import explainerImg from "../../../images/div/web/tekniker.jpg";
/* Euromate application photo (VisionAir installed at a nursery in Delft) —
   the user's pick for the products-overview page header. */
import luftrensereImg from "../../../images/inneklima/luftrensere.jpg";
/* Njord Clean Air product photos (downloaded from njordcleanair.com). */
import njordXpS from "../../../images/inneklima/njord/xp-s.jpg";
import njordXpF from "../../../images/inneklima/njord/xp-f.jpg";
import njordXp2 from "../../../images/inneklima/njord/xp-2.jpg";
import njordXp4 from "../../../images/inneklima/njord/xp-4.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

/*
 * Shared Njord XP-platform blocks — the four models are the same technology in
 * different capacities, so the platform story and the options list are written
 * once. All facts from njordcleanair.com/no (no m²-coverage exists there by
 * design: Njord sizes by CADR, so none is invented here).
 */
const njordPlattform: ContentBlock = {
  type: "text",
  heading: "Njord-plattformen",
  paragraphs: [
    "Alle Njords luftrensere bruker totrinnsfiltrering: et forfilter fanger opp større støvpartikler, mens hovedfilteret fjerner de minste og mest helseskadelige forurensningene (PM10, PM2,5 og PM1). Filtre leveres opp til filterklasse H14, og alle er sertifisert i henhold til ISO 16890 eller EN 1822.",
    "Njord Connect™ Core for trådløs styring og planlegging via Wi-Fi eller Bluetooth er standard. Konstantstrømsstyringen Njord Constant Flow™ justerer viftehastigheten automatisk, slik at renseeffekten opprettholdes uavhengig av filterbelastning. Filterbytte er vanligvis hver 3., 6. eller 9. måned avhengig av støvbelastning — enheten varsler automatisk om et filter må byttes tidligere.",
    "Enhetene er helt frittstående, uten tilkobling til ventilasjonsanlegget, og kobles i en vanlig stikkontakt (230 V). De er bygget i resirkulert aluminium, oppfyller generelle krav til takmontering under sprinkleranlegg — og filtrene er håndlaget i Sverige med miljøvennlig filtermateriale fra Norge.",
  ],
};

const njordTilvalg: ContentBlock = {
  type: "bullets",
  heading: "Tilvalg",
  items: [
    "Njord UV-C — eliminerer opptil 99,999 % av skadelige mikroorganismer, virus og bakterier.",
    "Njord Ionisering — effektiv fjerning av lukt.",
    "Njord Safe-Zone™ — definerte renluftssoner der smitterisikoen reduseres med opptil 90 %.",
    "Lyddemper — reduserer utblåsningsstøyen med 10–15 dBA.",
    "Njord Connect™ ECO+ — luftkvalitetsmåling i sanntid og automatisk drift basert på partikkelnivå.",
    "Oppgradering til molekylær-/gassfiltrering i henhold til Eurovent 4/203-218.9.",
  ],
};

export const inneklimaData: ServicePageData = {
  path: "/tjenester/inneklima",
  badge: "Arbeidsmiljø",
  title: (
    <>
      Inneklima
    </>
  ),
  subtitle: "Ren luft og rett temperatur. Uten byggtekniske endringer.",
  intro:
    "Inneklimaet i norske virksomheter har hvert år skyld i mye sykdom blant ansatte. Vår lange erfaring og dokumenterte løsninger hjelper deg å ta de rette valgene. Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  image: heroImg,
  imageAlt: "Inneklima fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/7716/8682/5172/Helt_Opplagt_Inneklima_2023.pdf",
  /* Copy sourced from heltopplagt.no /inneklima + sub-pages. The two catalogs
     split the products the way buyers shop: komfort (kontor/fellesarealer)
     vs. industri (lager, industri, storkjøkken). */
  heroPoints: [
    {
      label: "Ren luft og rett temperatur",
      body: "Levert uten byggtekniske endringer, i lokalene dere allerede har.",
    },
    {
      label: "10 % av yteevnen står på spill",
      body: "En gjennomsnittlig medarbeider mister 10 % av yteevnen i et dårlig inneklima.",
    },
    {
      label: "Over 30 års erfaring",
      body: "Siden 1985, med rundt 1200 anlegg på service. NOVAP-godkjent, med F-gass-sertifiserte teknikere.",
    },
    {
      label: "Gratis befaring",
      body: "Uforpliktende befaring, og luftmålinger med rapport og konkrete anbefalinger.",
    },
  ],
  explainer: {
    body: [
      "Vi kan inneklima! Vi leverer luftrensere, varmepumper og aircondition som gir ren luft og rett temperatur på arbeidsplassen — helt uten byggtekniske endringer. Dårlig inneluft gir hodepine, tørr luft, såre øyne og tretthet, og koster både trivsel og yteevne.",
      "Vi starter gjerne med en gratis befaring eller luftmålinger, anbefaler riktig løsning for deres lokaler, monterer — og følger opp med service og vedlikehold.",
    ],
    points: [
      "Luftrensere for kontor, industri og storkjøkken",
      "Varmepumper og aircondition — Eurotemp",
      "Luftmålinger med rapport og anbefaling",
      "Montering, service og vedlikehold — ca. 1200 anlegg",
      "Ingen byggtekniske endringer",
    ],
    image: explainerImg,
    imageAlt: "Servicetekniker fra Helt Opplagt med rensbare elektrofiltre",
  },
  catalogs: [
    {
      heading: "Komfortmaskiner — for kontor og fellesarealer",
      proof:
        "Diskré maskiner som renser luften der folk sitter. Klikk på en maskin for fulle tekniske spesifikasjoner.",
      layout: "grid",
      photo: true,
      items: [
        {
          name: "Njord XP-S",
          tag: "Kontor og møterom",
          spec: "1500 m³/h ved optimal drift",
          description:
            "Njords minste industrielle luftrenser: to luftinntak, filtre opptil H14, veier kun 16 kg og trenger bare en vanlig stikkontakt.",
          image: njordXpS,
          to: "/tjenester/inneklima/njord-xp-s",
        },
        {
          name: "Njord XP-F",
          tag: "Lav takhøyde",
          spec: "1800 m³/h ved optimal drift",
          description:
            "«F for Flat» — ekstremt flatt design for lokaler med lav takhøyde, med doble luftutblås som styrer den rene luften dit du vil.",
          image: njordXpF,
          to: "/tjenester/inneklima/njord-xp-f",
        },
        {
          name: "VisionAir Blue Line",
          tag: "Tak, vegg eller gulv",
          spec: "To størrelser — rom opptil 99 og 199 m³",
          description:
            "Plasseres i tak, vegg eller gulv. Leveres som CarbonMax mot lukt, med elektrostatiske filtre mot støv — og kan utstyres med UV (SterilAir).",
          image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
          to: "/tjenester/inneklima/visionair",
        },
      ],
      link: { label: "Se alle produktene", to: "/tjenester/inneklima/luftrensere" },
    },
    {
      heading: "Industrimaskiner — for lager, industri og storkjøkken",
      proof:
        "Kraftigere systemer for svevestøv, fett og røyk — der vanlig ventilasjon ikke strekker til.",
      layout: "band",
      photo: true,
      items: [
        {
          name: "Njord XP-2",
          tag: "RISE-testet ytelse",
          description:
            "Høytytende og energieffektiv luftrenser for store lager-, industri- og produksjonshaller. To luftinntak, opptil 4100 m³/h og RISE-verifisert renluftkapasitet (CADR) på opptil 3800 m³/h — og den veier kun 42 kg.",
          image: njordXp2,
          to: "/tjenester/inneklima/njord-xp-2",
        },
        {
          name: "Njord XP-4",
          tag: "360° luftinntak",
          description:
            "Høykapasitetsaggregatet for de største hallene: fire luftinntak tar inn luft fra alle sider (360°), opptil 6500 m³/h maksimal luftstrøm — i en enhet på bare 50 kg.",
          image: njordXp4,
          to: "/tjenester/inneklima/njord-xp-4",
        },
        {
          name: "Euromate HFE-serien",
          tag: "Tre størrelser",
          description:
            "Industriell luftrensing av svevestøv i terminaler, lager- og logistikkbygg — 2500 til 10 000 m³/h. Elektrofiltrene renses og gjenbrukes, ikke kastes.",
          image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
          to: "/tjenester/inneklima/hfe-serien",
        },
        {
          name: "Kitchen Air Filtration (KAF)",
          tag: "Inn i eksisterende ventilasjon",
          description:
            "Fjerner fett- og røykpartikler fra avtrekket i kantiner, kommersielle kjøkken og restauranter. Beskytter kanalene, reduserer brannfaren og fjerner lukt ved kilden.",
          image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
          to: "/tjenester/inneklima/kaf",
        },
      ],
    },
    {
      heading: "Temperatur",
      proof:
        "Riktig temperatur hele året — varmepumper og kjøling uten byggtekniske endringer.",
      /* No `photo` flag: the Eurotemp image is a white-background cut-out. */
      layout: "band",
      items: [
        {
          name: "Eurotemp",
          tag: "Varmepumpe og aircondition",
          description:
            "Vår egen varmepumpe: gir i gjennomsnitt minst tre ganger så mye varme tilbake som den bruker i strøm. NOVAP-godkjent installasjon og service.",
          image: `${thumbs}/122ead3fdf0a04dad7c0f38c110fbba9.jpg`,
          to: "/tjenester/inneklima/eurotemp",
        },
      ],
    },
  ],
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hvordan finner vi ut om vi har et inneklimaproblem?",
      answer:
        "Vi tilbyr luftmålinger: med en avansert laserpartikkelteller måler vi partikkeltetthet, CO2, relativ fuktighet og temperatur, og kan også avdekke sopp. Resultatet oppsummeres i en rapport med konkrete anbefalinger.",
    },
    {
      question: "Hva koster en befaring?",
      answer:
        "Befaringen er gratis og uforpliktende. Prisen på luftmålinger avhenger av størrelsen på oppdraget.",
    },
    {
      question: "Krever installasjonen byggtekniske endringer?",
      answer:
        "Nei. Alle løsningene monteres i lokalene dere allerede har, helt uten byggtekniske endringer.",
    },
    {
      question: "Er dere sertifisert?",
      answer:
        "Ja — vi er godkjent av Norsk Varmepumpeforening (NOVAP), og teknikerne våre har lovpålagte sertifiseringer, inkludert F-gass. Dere får nødvendig dokumentasjon og opplæring.",
    },
    {
      question: "Hvor lenge har dere holdt på med dette?",
      answer:
        "Vi har levert varmepumper, kjøleutstyr og luftrensere siden 1985, og har i dag rundt 1200 anlegg på service i Østlandsområdet.",
    },
    {
      question: "Hvilke plager kan et godt inneklima løse?",
      answer:
        "Hodepine, følelse av tørr luft, såre øyne, tretthet utover dagen og tørre slimhinner — i tillegg til driftsproblemer på maskiner og nedsmussing av lokaler.",
    },
  ],
  readMore: [
    {
      label: "Luftmålinger",
      description: "Slik måler og dokumenterer vi luftkvaliteten hos dere.",
      to: "/tjenester/inneklima/luftmalinger",
      image: `${thumbs}/7df36f969a7027bc26af0f321079c4bd.jpg`,
    },
    {
      label: "Inneklima på kontoret",
      description: "Vanlige symptomer og kjente kilder til dårlig inneluft.",
      to: "/tjenester/inneklima/kontor",
      image: `${thumbs}/121d42786d9d1762fab5c43850c2904e.jpg`,
    },
    {
      label: "Luftkvalitet i industribygg",
      description: "Støvkontroll, temperaturutjevning og lavere vedlikeholdskostnader.",
      to: "/tjenester/inneklima/luftkvalitet-i-industribygg",
      image: `${thumbs}/01563e1948803e9dc1608b0d1fea172c.jpg`,
    },
    {
      label: "Matproduksjon og HoReCa",
      description: "Fett, sot og røyk — og hvordan filtrene fjerner dem.",
      to: "/tjenester/inneklima/matproduksjon-og-horeca",
      image: `${thumbs}/b2c846886adfd43b6c09b7d45fc86082.jpg`,
    },
    {
      label: "Helsesektor, institusjoner og barnehager",
      description: "Luktproblemer og VOC-er løst med CarbonMax og UV.",
      to: "/tjenester/inneklima/helsesektor-institusjoner-og-barnehager",
      image: `${thumbs}/94206110460cfe5f947ad96596eaf304.jpg`,
    },
    {
      label: "Optimal temperatur",
      description: "Varmepumper og kjøling for norske temperatursvingninger.",
      to: "/tjenester/inneklima/temperatur",
      image: `${thumbs}/42cec552791f0c5edc00a8c5f69e51c6.jpg`,
    },
    {
      label: "Pollensesong: såre øyne og luftveisplager",
      description: "Én av fire på kontoret sliter med allergier.",
      to: "/tjenester/inneklima/sesong-sare-oyne-og-luftveisplager",
      image: `${thumbs}/6a989ffd1db602cbc63770c77ea10689.jpg`,
    },
  ],
  subServices: [
    {
      slug: "kontor",
      group: "Artikler",
      title: "Kontor",
      description:
        "Vi løser alle utfordringer med dårlig luft på arbeidsplassen. Vi tar en befaring på ditt kontor og miljø og leverer løsninger som ikke krever noen byggtekniske endringer. Enkelt, effektivt og billig!",
      image: `${thumbs}/121d42786d9d1762fab5c43850c2904e.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Forskning viser et skremmende bilde og burde få enhver næringslivsleder til å ta problemet alvorlig. Det er en kjent sak at det er lønnsomt å satse på et godt inneklima, både av hensyn til de ansattes trivsel og helse, samt hensynet til bedriftens totale lønnsomhet.",
            "En gjennomsnittlig medarbeider vil miste 10 % av sin yteevne ved et dårlig inneklima. I et kontorlokale med lite svevestøv vil de ansatte umiddelbart føle større velvære og ha mer energi.",
            "Helt Opplagt har løsninger som både kan løse og forebygge dårlig inneklima på jobben. Vi leverer ren luft og behagelig temperatur til dine lokaler. Vårt mål er at du skal være Helt Opplagt på jobben!",
            "Det finnes mange kilder og symptomer som kan bidra til dårlig inneklima. Her kommer en liten oversikt som skal gjøre det lettere for deg å identifisere de:",
          ],
        },
        {
          type: "bullets",
          heading: "Vanlige problemer:",
          items: [
            "Hodepine",
            "Følelse av tørr luft",
            "Såre øyne",
            "Problemer med kontaktlinser",
            "Tretthet utover dagen",
            "Tørr hud",
            "Halsinfeksjoner",
            "Tørre slimhinner",
            "Driftsproblemer på maskiner",
            "Nedsmussing av lokaler",
          ],
        },
        {
          type: "bullets",
          heading: "Kjente kilder:",
          items: [
            "Svevestøv fra egen aktivitet",
            "Svevestøv fra papir og tonere",
            "Kopimaskiner, printere, faxer",
            "Arkiv, post og pakkerom",
            "Tekstilstøv og bygningsmaterialer",
            "Støv utenfra, som eksos, veistøv og pollen",
            "Ventilasjonsforurensing",
            "Statisk elektrisitet",
            "Varme",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/5215/6646/4847/Euromate_Call_center_HVC_Middenmeer_2.JPG",
          alt: "Vi løser utfordringer med inneklima i alle slags lokaler",
        },
      ],
    },
    {
      slug: "temperatur",
      group: "Artikler",
      title: "Optimal temperatur",
      description:
        "Vi har i over 30 år levert varmepumper og kjøleutstyr slik at du opplever riktig temperatur på arbeidsplassen hele året.",
      image: `${thumbs}/42cec552791f0c5edc00a8c5f69e51c6.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Norge er et land med store temperatursvingninger og været er vanskelig å forutse. Vi har løsninger og produkter som gir deg rett temperatur, sommer som vinter. Vi har lang erfaring med å levere varmepumper og kjøling i kontorlokaler, data/serverrom, restauranter, butikker etc.",
          ],
        },
        {
          type: "text",
          heading: "Vi hjelper deg med løsningen",
          paragraphs: [
            "Ta kontakt med oss for et uforpliktende møte med en av våre erfarne konsulenter som vil gi deg et tilbud tilpasset dine behov og ønsker.",
            "Vi er godkjent av Norsk Varmepumpeforening (NOVAP). Det betyr at vi har faglig kvalifisert personell og lovpålagte sertifiseringer. Vi har også kapasitet til å gjennomføre oppdrag på en forsvarlig måte, og vi sørger for at du som kunde får nødvendig dokumentasjon og opplæring.",
          ],
        },
        {
          type: "link",
          label: "Se varmepumpen Eurotemp",
          href: "/tjenester/inneklima/eurotemp",
        },
      ],
    },
    {
      slug: "helsesektor-institusjoner-og-barnehager",
      group: "Artikler",
      title: "Helsesektor, institusjoner og barnehager",
      description:
        "Mange har utfordringer med uønsket lukt på arbeidsplassen. Helt Opplagt hjelper deg å skape et bedre inneklima som gir dine medarbeidere mer energi.",
      image: `${thumbs}/94206110460cfe5f947ad96596eaf304.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Innendørs luft er ofte forurenset av lukt og gasser. VOC, flyktige organiske forbindelser, er stoffer som frigjøres fra forskjellige produkter i gassform og kan avgi sjenerende lukt. Maling, rengjøringsmidler, kopimaskiner, plastprodukter, møbler, byggevarer og gulv- og veggbelegg samt lukt i spesielle rom innen helsevesenet og barnehager er bare noen eksempler som genererer store mengder VOC.",
            "Mange opplever andre typer uønsket lukt som ammoniakklukt, urinlukt, kloakklukt, avføring eller annen uønsket lukt. Også behagelige lukter som lukt fra matlaging og matos kan være uønsket og våre løsninger sørger også for å fjerne dette.",
          ],
        },
        {
          type: "text",
          heading: "Vi finner løsningen for deg",
          paragraphs: [
            "Vi tilbyr bl.a. montering av VisionAir CarbonMax. VisionAir CarbonMax er designet for å passe inn i ethvert interiør, uten behov for byggtekniske endringer. Den er perfekt for å takle luftproblematikk som du finner i sykehjem, sykehus, dialysesentre, barnehager og toaletter. Skulle dere også oppleve ubehagelig ozonlukt i kopi- og printerrom eller luktspredning i forbindelse med matlaging er den utmerket til dette også.",
            "VisionAir CarbonMax kan kombineres med elektrostatiske filtre dersom det også er et støvproblem i tillegg til lukt. Luftrenseren kan også utstyres med UV (SterilAir).",
          ],
        },
        {
          type: "text",
          heading: "Ta kontakt for gratis befaring",
          paragraphs: [
            "Fyll ut skjema nederst på siden eller ring oss på 0 23 46 eller e-post bli@heltopplagt.no.",
          ],
        },
      ],
    },
    {
      slug: "matproduksjon-og-horeca",
      group: "Artikler",
      title: "Matproduksjon og HoReCa",
      description:
        "I nesten alle profesjonelle kjøkken vil det være mye fett og sotpartikler som blir frigitt. Brannfaren øker med mer fett som legger seg i avtrekk og ventilatorer.",
      image: `${thumbs}/b2c846886adfd43b6c09b7d45fc86082.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "I nesten alle profesjonelle kjøkken vil det være mye fett og sotpartikler som blir frigitt. Brannfaren øker med mer fett som legger seg i avtrekk og ventilatorer. Euromate sitt filtersystem fjerner selv de minste fett- og røykpartikler fra luften. På den måten vil du få betydelig mindre vedlikehold i avtrekk og ventilator.",
          ],
        },
        {
          type: "text",
          heading: "Hvordan kvitte seg med kjøkkengassene?",
          paragraphs: [
            "Kommersielle og profesjonelle kjøkken blir i dag mer og mer omfattende. Mange kjøkken ligger også tett inntil både boligbebyggelse og annen kommersiell virksomhet, dette gjør kravene til gass, lukt og brannsikkerhet større.",
            "God filtrering i avtrekk hjelper deg å minimere potensielle risikoer som brann, omdømme og ikke minst kostnaden med opprydning hvis en ulykke skulle forekomme.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Filtrerer bort 90 % av sot og røykpartikler fra luftstrømmen.",
            "Spar opptil 50 % på vedlikeholdskostnader.",
            "Hjelper deg å være en god nabo ved å spare omgivelsene fra matos og lukt.",
          ],
        },
      ],
    },
    {
      slug: "luftkvalitet-i-industribygg",
      group: "Artikler",
      title: "Få kontroll over luftkvaliteten i industribygg",
      description:
        "Det er vanskelig å få god luftkvalitet når du kombinerer store arealer, stor varebeholdning og mange ansatte under et og samme tak. Vi har løsningene og produktene som løser alle utfordringer.",
      image: `${thumbs}/01563e1948803e9dc1608b0d1fea172c.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Støvet pustes inn av de ansatte og skaper helseproblemer samt legger seg på utstyr og forårsaker driftsproblemer for maskiner. Støvet legger seg på kameraer, optiske sensorer og datautstyr som forårsaker økt behov for vedlikehold og renhold. Dette utgjør en vesentlig kostnad. I bakerier, kaffeproduksjon og annen matproduksjon er ofte mikropartikler, gasser, lukter og bakterier et viktig tema, dette er utfordringer våre produkter og løsninger også kan ta seg av.",
            "Vi har i over 30 år benyttet Euromates industrielle luftrensere til å håndtere denne type problemer. Utstyret er meget godt egnet til oppgaven. I tillegg til å gi langt renere inneluft, har utstyret flere andre positive effekter, som utjevning av temperaturforskjell mellom tak og gulv, samt vesentlig reduksjon av behov av ventilasjon. Å rense luft tilstrekkelig i slike områder ved hjelp av ventilasjon er meget kostbart både installasjons- og energimessig.",
            "Å benytte oss til denne jobben er derfor meget lønnsomt. Det forsterkes også av at filtrene ofte kan vaskes og ikke kastes, noe som gir ytterligere miljø- og økonomisk gevinst.",
          ],
        },
        {
          type: "bullets",
          heading: "Fordeler",
          items: [
            "Reduksjon av støvpartikler gir betydelig helsegevinst for de ansatte (puster inn mindre mikropartikler og får mindre luftveisproblemer, «svarte neser» etc)",
            "Stor reduksjon i vaske- og vedlikeholdskostnader",
            "Mindre lukt og bakterier",
            "Færre driftsproblemer",
            "Energibesparende",
            "Jevner ut temperaturforskjeller, og renser luft uten varmetap eller varmetilførsel",
            "Vaskbare filtre gir innsparinger både for miljøet og økonomien",
          ],
        },
      ],
    },
    {
      slug: "luftmalinger",
      group: "Artikler",
      title: "Luftmålinger",
      description:
        "Hvis et firma opplever at inneluften ikke er som den bør være, kan det være hensiktsmessig å måle luftkvaliteten. Vi tilbyr målinger med fokus på partikkeltetthet, CO2, relativ fuktighet og temperatur.",
      image: `${thumbs}/7df36f969a7027bc26af0f321079c4bd.jpg`,
      content: [
        {
          type: "text",
          heading: "Vi tilbyr å måle luftkvaliteten og analyserer resultatene",
          paragraphs: [
            "Hvis et firma opplever at inneluften ikke er som den bør være, kan det være hensiktsmessig å måle luftkvaliteten. Vi tilbyr målinger med fokus på partikkeltetthet, CO2, relativ fuktighet og temperatur. Dette gir i de fleste tilfeller et godt bilde av hvordan luften er og gir et godt grunnlag for å anbefale løsninger. Vi kan også tilby undersøkelser for å avdekke om det finnes sopp i lokalene, noe som kan være hensiktsmessig å gjennomføre dersom det har vært lekkasje i bygningen.",
          ],
        },
        {
          type: "text",
          heading: "Problemer med inneklima?",
          paragraphs: [
            "Vi har mulighet for å måle de luftbårne partikler og respirabelt svevestøv som finnes alle steder. Ved hjelp av en avansert laserpartikkelteller kan vi konstatere partikkeltetthet og størrelsen på partiklene som måtte være i luften. Hvis oppgaven krever at man også bør konstatere typen av partikler, kan det naturligvis også la seg gjøre ved hjelp av en laboratorietest.",
          ],
        },
        {
          type: "text",
          heading: "Få et uforpliktende tilbud",
          paragraphs: [
            "Når målingene er foretatt lager vi en rapport hvor det står beskrevet hvordan tilstanden er rent inneklimamessig, og hvilke forbedringer som bør gjøres. Prisen for disse målinger er naturligvis avhengig av størrelsen på oppdraget.",
            "Ring oss på 0 23 46 eller bruk skjema under og gjør en avtale med en av våre inneklimarådgivere, så får dere råd og veiledning og et uforpliktende pristilbud.",
          ],
        },
      ],
    },
    {
      slug: "luftrensere",
      group: "Produkter",
      title: "Produktene",
      description:
        "Helt Opplagt sine produkter kan både løse og forebygge alle deres problemer med dårlig inneluft på jobben. Se hvilke produkter som passer for ditt miljø.",
      image: luftrensereImg,
      content: [
        {
          type: "cards",
          heading: "Våre produkter",
          /* Grace er utgått (deadstock) og fjernet fra sortimentet. */
          items: [
            {
              title: "Njord XP-S",
              description:
                "Njords minste industrielle luftrenser — ideell for kontorer, møterom, butikker og helseinstitusjoner. To luftinntak, filtre opptil H14 og kun 16 kg.",
              image: njordXpS,
            },
            {
              title: "Njord XP-F",
              description:
                "«F for Flat» — den flate luftrenseren for lokaler med lav takhøyde. Doble luftutblås styrer den rene luften effektivt i ulike retninger.",
              image: njordXpF,
            },
            {
              title: "Njord XP-2",
              description:
                "For store haller: to luftinntak, opptil 4100 m³/h og RISE-verifisert CADR på opptil 3800 m³/h — i en enhet på kun 42 kg.",
              image: njordXp2,
            },
            {
              title: "Njord XP-4",
              description:
                "Maksimal kapasitet for ren luft: fire luftinntak (360°) og opptil 6500 m³/h for de aller største lager- og industrihallene.",
              image: njordXp4,
            },
            {
              title: "VisionAir Blue Line",
              description:
                "Kommer i to størrelser (rom opptil 99 og 199 m³) og kan plasseres i tak, vegg og/eller gulv — uten byggtekniske endringer. Kan leveres som CarbonMax mot lukt, kombineres med elektrostatiske filtre mot støv, og utstyres med UV (SterilAir).",
              image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
            },
            {
              title: "Eurotemp",
              description:
                "Vår egen varmepumpe og air condition. Ved å bruke Eurotemp som varmekilde vil du i gjennomsnitt få tilbake minimum tre ganger så mye varme som den forbruker i strøm.",
              image: `${thumbs}/122ead3fdf0a04dad7c0f38c110fbba9.jpg`,
            },
            {
              title: "Kitchen Air Filtration (KAF)",
              description:
                "KAF-filtreringssystemet installeres direkte inn i eksisterende ventilasjonssystem og passer utmerket for kantiner, kommersielle kjøkken, fast food-restauranter og tradisjonelle restauranter. Kan tilpasses ulike kapasitetsmengder for et skreddersydd system.",
              image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
            },
            {
              title: "Euromate HFE-serien",
              description:
                "Tilgjengelig i tre størrelser — 2500, 5000 og 10 000 m³/h. Filtrerer selv de minste partikler. Elektrofiltrene er enkle å rense og gjenbruke — ikke kast etter bruk!",
              image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
            },
          ],
        },
      ],
    },
    {
      slug: "sesong-sare-oyne-og-luftveisplager",
      group: "Artikler",
      title: "Sesong for såre øyne og luftveisplager",
      description:
        "Visste du at en av fire på kontoret sliter med allergier som gir plager og nedsatt effektivitet? Nå er det sesong for pollen og mange arbeidstagere plages.",
      image: `${thumbs}/6a989ffd1db602cbc63770c77ea10689.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Nå er det sesong for pollen og mange arbeidstagere plages. Med en luftrenser som skaper ren luft på kontoret sikrer du at ansatte med allergier får en bra arbeidsdag også i pollensesongen.",
            "Vi løser utfordringer med pollen og annet som bidrar til dårlig luft på arbeidsplassen. Vi tar en uforpliktende befaring på din arbeidsplass og leverer løsninger som ikke krever byggtekniske endringer. Enkelt, effektivt og billig!",
            "Registrer deg under så tar vi snarlig kontakt for avtale.",
          ],
        },
      ],
    },

    /*
     * Product detail pages, reached from the clickable machine cards in the
     * catalogs. Specs are verbatim from the manufacturers (njordcleanair.com/no
     * and Euromate's published product data sheets) — nothing invented: no
     * m²-coverage for Njord (they size by CADR), no noise figures for HFE/KAF
     * (Euromate publishes none).
     */
    {
      slug: "njord-xp-s",
      group: "Produkter",
      title: "Njord XP-S",
      description:
        "Med sitt ekstremt kompakte design og doble filterflater er Njord XP-S, Njords minste industrielle luftrenser, effektiv, lett å plassere og ideell for små rom og trange områder.",
      image: njordXpS,
      content: [
        {
          type: "text",
          paragraphs: [
            "Njord XP-S skaper rene og sunne miljøer i rom og små områder: kontorer, møterom, butikker, treningsstudioer, garderober, klasserom, helseinstitusjoner, hoteller og restauranter.",
            "Det første filtersteget består av et forfilter som effektivt fanger opp større partikler og støv. Det andre filtersteget fjerner mindre partikler, helt ned til de aller fineste og mest helseskadelige luftbårne forurensningene.",
            "Njord XP-S produseres i Sverige og er bygget med høykvalitetskomponenter med lav miljøpåvirkning samt resirkulert aluminium. Luftrenseren kan installeres i tak, monteres på vegg eller utstyres med hjul for fleksibel plassering på gulv. En valgfri avlastningshylle kan også leveres i ønsket materiale.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "1500 m³/h"],
            ["Maksimal luftstrøm", "2200 m³/h"],
            ["Luftinntak", "2 (fra to sider)"],
            ["Total inntaksflate", "0,48 m²"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "300 × 460 × 800 mm"],
            ["Vekt", "16 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 1,3 A, EC-motor"],
            ["Motoreffekt", "165 W"],
            ["Effektforbruk ved optimal drift", "ca. 90 W"],
            ["Lydnivå", "30–55 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-S hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-s/",
        },
      ],
    },
    {
      slug: "njord-xp-f",
      group: "Produkter",
      title: "Njord XP-F",
      description:
        "F for Flat! Njord XP-F er en energieffektiv industriell luftrenser spesielt utviklet for effektivt å skape rene og sunne miljøer i lokaler med lav takhøyde.",
      image: njordXpF,
      content: [
        {
          type: "text",
          paragraphs: [
            "Enheten er designet for å oppta minimalt med plass, samtidig som den leverer maksimal renseeffekt og en konsekvent høy renluftstrøm. Bygget med de samme høykvalitetskomponentene som alle Njords industrielle luftrensere har XP-F et optimalisert, flatt design som gjør den både kompakt og usedvanlig lett.",
            "Luften tas inn gjennom ett luftinntak med totrinnsfiltrering, og med doble luftutblås kan den rene luften styres effektivt i ulike retninger. Det gjør XP-F godt egnet for kontoretasjer, kantiner, korridorer og garderober med lav takhøyde.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "1800 m³/h"],
            ["Maksimal luftstrøm", "2200 m³/h"],
            ["Luftinntak", "1 (med doble luftutblås)"],
            ["Total inntaksflate", "0,30 m²"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "1000 × 780 × 340 mm"],
            ["Vekt", "16 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 1,3 A, EC-motor"],
            ["Motoreffekt", "165 W"],
            ["Effektforbruk ved optimal drift", "ca. 120 W"],
            ["Lydnivå", "30–55 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-F hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-f/",
        },
      ],
    },
    {
      slug: "njord-xp-2",
      group: "Produkter",
      title: "Njord XP-2",
      description:
        "Høytytende og energieffektiv luftrenser for store lager-, industri- og produksjonshaller i kompakt og lett design, med totrinnsfiltrering for optimal luftrensing.",
      image: njordXp2,
      content: [
        {
          type: "text",
          paragraphs: [
            "De to luftinntakene suger inn og filtrerer luften fra to retninger. Doble sertifiserte og energieffektive filtre ved hvert luftinntak sikrer optimal rensing, der forfilteret fanger opp større støvpartikler, og hovedfilteret de minste og mest skadelige forurensningene. Filterkombinasjonen tilpasses driftsbehov og rensemål.",
            "Med konstantstrømsstyringen Njord Constant Flow™ justeres viftehastigheten automatisk for å sikre konstant luftstrøm og opprettholdt renseeffekt over tid. Dette garanterer samme mengde ren luft, uavhengig av filterbelastning.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "3200 m³/h"],
            ["Maksimal luftstrøm", "4100 m³/h"],
            ["Luftinntak", "2 (fra to sider)"],
            ["Total inntaksflate", "0,80 m² (2 × 0,40 m²)"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "950 × 800 × 540 mm"],
            ["Vekt", "42 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 4,5 A, EC-motor"],
            ["Motoreffekt", "1 kW"],
            ["Effektforbruk ved optimal drift", "ca. 280 W"],
            ["Lydnivå", "30–65 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        {
          type: "text",
          heading: "RISE-verifisert ytelse",
          paragraphs: [
            "Njord XP-2 er testet av RISE (Research Institutes of Sweden) i henhold til ISO 16890. Ved en målt luftstrøm på 4100 m³/h leverer systemet en renluftkapasitet (CADR) på opptil 3800 m³/h.",
          ],
        },
        {
          type: "table",
          rows: [
            ["CADR PM1", "ca. 3700–3800 m³/h (93 % partikkelfjerning)"],
            ["CADR PM2,5", "ca. 3800–3900 m³/h (95 % partikkelfjerning)"],
            ["CADR PM10", "ca. 4000 m³/h (99 % partikkelfjerning)"],
          ],
          footnote: "CADR (m³/h) = avskillingsgrad (%) × luftstrøm (m³/h).",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-2 hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-2/",
        },
      ],
    },
    {
      slug: "njord-xp-4",
      group: "Produkter",
      title: "Njord XP-4",
      description:
        "Energieffektivt høykapasitetsaggregat for store lager-, industri- og produksjonshaller med fire luftinntak for optimal luftrensing.",
      image: njordXp4,
      content: [
        {
          type: "text",
          heading: "Maksimal kapasitet for ren luft",
          paragraphs: [
            "Utstyrt med fire luftinntak med totrinnsfiltrering tar enheten inn luft fra alle fire sider (360°) for maksimal renseeffektivitet. Hvert luftinntak har doble sertifiserte og energieffektive filtre som sikrer høy separasjonseffekt.",
            "Njord XP-4 passer for de aller største lokalene: lager, distribusjonsterminaler, logistikksentre, industrilokaler, verksteder og produksjonslokaler. Luftrenseren kan kompletteres (tilvalg) med en lyddempende enhet med fire luftutblås (360°) som effektivt fordeler den rene luften i lokalet.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Luftstrøm ved optimal drift", "5000 m³/h"],
            ["Maksimal luftstrøm", "6500 m³/h"],
            ["Luftinntak", "4 (360°)"],
            ["Total inntaksflate", "1,60 m² (4 × 0,40 m²)"],
            ["Filter", "Totrinns, opptil H14 (ISO 16890 / EN 1822)"],
            ["Mål (B×D×H)", "950 × 950 × 540 mm"],
            ["Vekt", "50 kg"],
            ["Elektrisk", "230 V, 50/60 Hz, 8,7 A, EC-motor"],
            ["Motoreffekt", "2 kW"],
            ["Effektforbruk ved optimal drift", "ca. 500 W"],
            ["Lydnivå", "30–65 dB(A)"],
            ["Montering", "Tak, vegg eller gulv (evt. på hjul)"],
          ],
          footnote:
            "Optimal drift er luftrensingsvolumet som gir best balanse mellom effektivitet, energiforbruk og lydnivå. Effektforbruket avhenger av filterkonfigurasjonen.",
        },
        njordPlattform,
        njordTilvalg,
        {
          type: "link",
          label: "Se Njord XP-4 hos produsenten",
          href: "https://njordcleanair.com/no/luftrenser-njord-xp-4/",
        },
      ],
    },
    {
      slug: "visionair",
      group: "Produkter",
      title: "VisionAir Blue Line",
      description:
        "Plug-and-play luftrenser for små og mellomstore rom — plasseres i tak, vegg eller gulv, helt uten byggtekniske endringer. Filtrerer opptil 99 % av forurensningene i inneluften.",
      image: `${thumbs}/583c513de688c3e5727153b9ff5ad0e2.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "VisionAir Blue Line er Euromates resirkulerende luftrenser for kontorer, helsevirksomheter, barnehager og fellesarealer. Den kommer i to størrelser: VisionAir 1 for rom opptil 99 m³ og VisionAir 2 for rom opptil 199 m³ (omtrent 40 og 80 m² ved 2,5 meters takhøyde).",
            "Luften renses i tre trinn: et forfilter fanger større partikler som hår og hudflak, kombinasjonsfilteret fjerner opptil 99,95 % av de mest gjennomtrengende partiklene (MPPS), og et aktivt kullfilter tar lukt og gasser. Filtrene tilfredsstiller ISO 16890, og effekten er SGS-sertifisert.",
          ],
        },
        {
          type: "bullets",
          heading: "Filterpakker og tilvalg",
          items: [
            "DustFree — finstøv og svevestøv",
            "MicrobeFree — virus og bakterier",
            "GasFree — skadelige gasser og «Sick Building»-plager",
            "SmokeFree — tobakksrøyk",
            "OdourFree / CarbonMax — lukt, med stort V-formet kullfilter",
            "SterilAir — UV-C-lampe mot bakterier, virus og muggsopp (kan ettermonteres)",
            "AirMonitor og VisionDisplay",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Modell", "VisionAir 1", "VisionAir 2"],
            ["Romvolum", "99 m³", "199 m³"],
            ["Luftstrøm", "180 m³/h", "360 m³/h"],
            ["Viftekapasitet", "1300 m³/h", "2600 m³/h"],
            ["Lydnivå", "40–62 dB(A)", "40–68 dB(A)"],
            ["Effektforbruk", "90 W", "175 W"],
            ["Mål (L×B×H)", "630 × 620 × 290 mm", "630 × 1050 × 290 mm"],
            ["Vekt", "16,5 kg", "32,5 kg"],
            ["Viftetrinn", "8 manuelle / 6 automatiske", "8 manuelle / 6 automatiske"],
            ["Sensorer", "PIR (gass/støv tilvalg)", "PIR (gass/støv tilvalg)"],
            ["Montering", "Tak, vegg, gulv eller display", "Kun tak"],
          ],
          footnote:
            "Ytelsestall gjelder filterpakken SmokeFree Global; øvrige filterpakker kan avvike noe. Filtrene er engangsfiltre som byttes ved service. CE-merket, med fem års garanti ved serviceavtale.",
        },
        {
          type: "link",
          label: "Se VisionAir hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/visionair/",
        },
      ],
    },
    {
      slug: "hfe-serien",
      group: "Produkter",
      title: "Euromate HFE-serien",
      description:
        "Vegg- eller takmontert industriell luftrenser med elektrostatisk filter og integrert vifte — ingen kanaler nødvendig. Filtrerer opptil 90 % av forurensningen, ned til 0,01 mikron.",
      image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "HFE-serien er utviklet for luftbårne partikler som er typiske for lager, terminaler og logistikkbygg — som papir- og kartongstøv og gummipartikler fra transportbånd og truckhjul — og håndterer også sveiserøyk fra oljebehandlet stål, med integrert oljeoppsamler.",
            "Filteret er elektrostatisk: ioniseringsdelen gir partiklene ladning, og kollektorplatene i aluminium fanger dem. Cellene renses og gjenbrukes — ingen kostbare engangsfiltre. Serien kommer i tre størrelser, og kapasiteten kan økes ved å montere flere enheter.",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner",
          rows: [
            ["Modell", "HFE-25", "HFE-50", "HFE-100"],
            ["Maks. filtreringskapasitet", "2500 m³/h", "5000 m³/h", "10 000 m³/h"],
            ["Filterflate", "14,2 m²", "28,4 m²", "42,6 m²"],
            ["Effektforbruk (motor + filter)", "735 W", "1440 W", "2585 W"],
            ["Mål (B×H×D)", "560 × 630 × 993 mm", "1010 × 630 × 993 mm", "1460 × 630 × 1060 mm"],
            ["Vekt", "100 kg", "195 kg", "—"],
            ["Trykkfall", "< 150 Pa", "< 175 Pa", "—"],
          ],
          footnote:
            "Alle modeller: epoxylakkert stål (RAL 7035), 230 V, driftstemperatur 5–45 °C, maks. 80 % relativ luftfuktighet, CE-merket. Ionisering +5 kV / kollektor +10 kV.",
        },
        {
          type: "bullets",
          heading: "Passer ikke til",
          items: [
            "Aggressive gasser og damper (syrer, alkalier, litiumholdig loddepasta)",
            "Varm luft eller gasser over 45 °C",
            "Sliping av aluminium og magnesium",
            "Kullbuemeisling, flammesprøyting og brennende partikler",
            "Eksplosjonsfarlige miljøer",
          ],
        },
        {
          type: "bullets",
          heading: "Tilvalg",
          items: [
            "For- og etterfiltre i aluminium (standard), dråpefanger for oljetåke, syntetisk finfilter (klasse G3) eller kullfilter mot lukt",
            "Oljeutskiller for enkel oljehåndtering",
            "Fjernkontroll med timer",
          ],
        },
        {
          type: "link",
          label: "Se HF-serien hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/hf-series/",
        },
      ],
    },
    {
      slug: "kaf",
      group: "Produkter",
      title: "Kitchen Air Filtration (KAF)",
      description:
        "Elektrostatisk filtrering montert i avtrekkskanalen, rett bak kjøkkenhetten — beskytter kanalene, reduserer brannfaren og fjerner lukt ved kilden.",
      image: `${thumbs}/6c93d124acf8f09f9a662bf63f60bff3.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "KAF (Euromates SF-serie) installeres «plug & play» i nye og eksisterende ventilasjonsanlegg, så nær avtrekkshetten som mulig. I de fleste eksisterende anlegg gir avtrekksviften nok kraft til å kompensere for det lave trykkfallet.",
            "Luften går først gjennom et mekanisk forfilter som tar de største partiklene. Deretter gis fett-, røyk- og sotpartikler en elektrostatisk ladning i ioniseringsdelen, før de negativt ladede kollektorplatene fanger dem — helt ned til 0,1 mikron. Systemet er modulbasert: moduler stables for høyere kapasitet, eller settes etter hverandre for høyere renseeffekt, og kan utvides med kullfilter mot lukt.",
          ],
        },
        {
          type: "bullets",
          heading: "Derfor lønner det seg",
          items: [
            "Redusert brannfare — fett og sot stoppes før kanalene",
            "Rundt 50 % lavere vedlikeholds- og rengjøringskostnader",
            "Fjerner matlukt ved kilden — også utenfor bygget",
            "Beskytter kostbare kullfiltre og hele avtrekkskanalen",
          ],
        },
        {
          type: "table",
          heading: "Tekniske spesifikasjoner (SFE-moduler)",
          rows: [
            ["Modell", "SFE-25", "SFE-50", "SFE-75"],
            ["Maks. filtreringskapasitet", "2500 m³/h", "5000 m³/h", "7500 m³/h"],
            ["Viftekapasitet", "3400 m³/h", "6800 m³/h", "10 200 m³/h"],
            ["Filterflate", "14,2 m²", "28,4 m²", "42,6 m²"],
            ["Effektforbruk (filterdel)", "35 W", "40 W", "50 W"],
            ["Kapslingsgrad", "IP 55", "IP 55", "IP 55"],
            ["Mål (B×H×D)", "560 × 630 × 660 mm", "1010 × 630 × 660 mm", "1350 × 630 × 660 mm"],
            ["Vekt", "60 kg", "100 kg", "140 kg"],
          ],
          footnote:
            "Maksimal filtreringskapasitet avhenger av bruksområdet. Filtrene, ioniserings- og kollektordelene renses profesjonelt og gjenbrukes — vi følger opp med fast serviceavtale.",
        },
        {
          type: "link",
          label: "Se SF-serien hos Euromate",
          href: "https://www.euromate.com/group/products/air-cleaners/sf-series/",
        },
      ],
    },
    {
      slug: "eurotemp",
      title: "Eurotemp",
      group: "Produkter",
      description:
        "Vår egen varmepumpe og aircondition: gir i gjennomsnitt minst tre ganger så mye varme tilbake som den forbruker i strøm — riktig temperatur hele året, uten byggtekniske endringer.",
      image: `${thumbs}/122ead3fdf0a04dad7c0f38c110fbba9.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Norge er et land med store temperatursvingninger, og været er vanskelig å forutse. Eurotemp gir deg rett temperatur sommer som vinter: varmepumpe om vinteren og aircondition om sommeren, i samme anlegg.",
            "Vi har levert varmepumper og kjøleutstyr siden 1985 og har i dag rundt 1200 anlegg på service i Østlandsområdet. Installasjonen gjøres av våre egne NOVAP-godkjente og F-gass-sertifiserte teknikere, og vi følger opp med service, dokumentasjon og opplæring.",
          ],
        },
        {
          type: "table",
          heading: "Eurotemp DC 35 — tekniske data",
          rows: [
            ["Nominell varmekapasitet", "3,7 kW"],
            ["Nominell kjølekapasitet", "3,4 kW"],
            ["Energiklasse", "A"],
            ["COP (varmefaktor)", "4,6"],
            ["Luftmengde (høy/normal/lav)", "700 / 520 / 420 m³/h"],
            ["Lydnivå innedel (høy/normal/lav)", "42 / 35 / 30 dB(A)"],
            ["Lydnivå utedel", "55 dB(A)"],
            ["Mål innedel (B×D×H)", "800 × 280 × 205 mm"],
            ["Vekt innedel / utedel", "12 / 45 kg"],
            ["Anbefalt sikring", "16 A"],
          ],
          footnote:
            "Ta kontakt for en uforpliktende befaring, så anbefaler vi riktig modell og kapasitet for deres lokaler.",
        },
        {
          type: "link",
          label: "Les mer om optimal temperatur",
          href: "/tjenester/inneklima/temperatur",
        },
      ],
    },
  ],
  quote: {
    text: "Luften på kontoret var tung, tett og tørr. Dette måtte vi gjøre noe med.",
    name: "Maria",
    role: "Rystad Energy AS",
  },
};

export function InneklimaPage() {
  return <ServicePage data={inneklimaData} />;
}
