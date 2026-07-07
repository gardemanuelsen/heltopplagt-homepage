import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/inneklima/inneklima.png";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const inneklimaData: ServicePageData = {
  path: "/tjenester/inneklima",
  badge: "Arbeidsmiljø",
  title: (
    <>
      Vi kan{" "}
      <span className="text-[#0078C4] italic font-light">inneklima!</span>
    </>
  ),
  intro:
    "Inneklimaet i norske virksomheter har hvert år skyld i mye sykdom blant ansatte. Vår lange erfaring og dokumenterte løsninger hjelper deg å ta de rette valgene. Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  image: heroImg,
  imageAlt: "Inneklima fra Helt Opplagt",
  brochureUrl:
    "https://heltopplagt.no/application/files/7716/8682/5172/Helt_Opplagt_Inneklima_2023.pdf",
  subServices: [
    {
      slug: "kontor",
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
      ],
    },
    {
      slug: "helsesektor-institusjoner-og-barnehager",
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
      title: "Produktene",
      description:
        "Helt Opplagt sine produkter kan både løse og forebygge alle deres problemer med dårlig inneluft på jobben. Se hvilke produkter som passer for ditt miljø.",
      image: `${thumbs}/0ef7eda942798fe0f452c71e2cdfaa10.jpg`,
      content: [
        {
          type: "cards",
          heading: "Våre produkter",
          items: [
            {
              title: "Grace",
              description:
                "Gulvmodellen som fjerner opptil 99 % av den forurensede luften, perfekt for bruk i mindre rom opptil 25 m². Som for eksempel cellekontorer, møterom og kopirom. Grace har et diskret og tidløst design, og passer inn i ethvert (kontor)miljø. Kan leveres med forskjellige filterløsninger tilpasset deres behov og lokaler.",
              image: `${thumbs}/0f0bc47e058fdd37dc57bb650c22e310.jpg`,
            },
            {
              title: "VisionAir1 og VisionAir2",
              description:
                "Perfekt for lokaler opptil ca 80 m². Kommer i to størrelser og kan plasseres i tak, vegg og/eller gulv — uten byggtekniske endringer. Perfekt for kopirom, kontorlandskap og fellesområder. Kan leveres som CarbonMax mot lukt, kombineres med elektrostatiske filtre mot støv, og utstyres med UV (SterilAir).",
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
                "Tilgjengelig i fire modeller avhengig av luftvolum og forurensningstype. Filtrerer selv de minste partikler og eventuelle gasser og lukter. Elektrofiltrene er enkle å rense og gjenbruke — ikke kast etter bruk!",
              image: `${thumbs}/668745cf1fc2f86ff706874e3bf7a44d.jpg`,
            },
          ],
        },
      ],
    },
    {
      slug: "sesong-sare-oyne-og-luftveisplager",
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
