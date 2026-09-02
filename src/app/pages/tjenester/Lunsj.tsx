import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/lunsj/lunsj.png";
import openingImg from "../../../images/hero/web/hero-lunsj.jpg";
/* NOT div/web/lunsj.jpg — that is the same shot as the hero. */
import explainerImg from "../../../images/div/web/fat-anretning.jpg";
/* Helt Opplagt's own tray photos (div/Hof1-3.jpg) — white-background product
   shots, rendered un-cropped via the cut-out treatment. */
import fatHof1 from "../../../images/div/web/hof1.jpg";
import fatHof2 from "../../../images/div/web/hof2.jpg";
import fatHof3 from "../../../images/div/web/hof3.jpg";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const lunsjData: ServicePageData = {
  path: "/tjenester/lunsj",
  badge: "Mat & Drikke",
  title: (
    <>
      Lunsj
    </>
  ),
  subtitle: "Lønnsomme lunsjordninger. Fra fem personer og oppover.",
  intro:
    "Er du en bedrift med mellom 5–300 ansatte kan vi levere alt fra enkle lunsjbokser til proffkantine. Ta kontakt i dag og prøv våre velsmakende lunsjer.",
  image: heroImg,
  imageAlt: "Lunsj fra Helt Opplagt",
  heroImage: openingImg,
  brochureUrl:
    "https://heltopplagt.no/application/files/8917/6785/9195/HeltOpplagt_Lunsjbrosjyre_januar_2026_web.pdf",
  /* All copy below is sourced from heltopplagt.no (lunsj + sub-pages).
     Prices deliberately stay out of the catalogs (user rule) — the entry
     price lives in the FAQ instead. */
  heroPoints: [
    {
      label: "Levert før kl. 11",
      body: "Sunn lunsj levert helt inn på spiserommet, hver dag før lunsjrushet.",
    },
    {
      label: "Sparer tid og penger",
      body: "Effektivisert lunsjavvikling gir bedre tid til viktige arbeidsoppgaver.",
    },
    {
      label: "Et sosialt avbrekk",
      body: "En hyggelig pause til fast tid, hver eneste dag.",
    },
    {
      label: "Fra eske til proffkantine",
      body: "Fire formater som dekker bedrifter fra 5 til 300 ansatte.",
    },
  ],
  explainer: {
    body: [
      "Helt Opplagt leverer faste lunsjordninger til bedrifter med mellom 5 og 300 ansatte: ferskt brød, dagens pålegg, grønnsaker, frukt og drikke, levert hver dag før kl. 11 — helt inn på spiserommet.",
      "Dere velger blant fire formater: selvbetjente lunsjesker i tre nivåer, ferdige fat rett i kjøleskapet, varm lunsj — eller full kantine når dere vokser.",
    ],
    points: [
      "Lunsjesker i tre nivåer — Hverdags-, Go'- og Superlunsjen",
      "Ferdige fat, rett inn i kjøleskapet",
      "Varm lunsj — over 50 retter fra eget kjøkken",
      "Daglig levering før kl. 11, eller etter behov",
      "Fra 5 personer og oppover",
    ],
    image: explainerImg,
    imageAlt: "Kokk fra Helt Opplagt anretter påleggsfat",
  },
  catalogs: [
    {
      heading: "Velg din lunsjeske",
      proof:
        "Tre nivåer, samme prinsipp: ferskt brød, dagens pålegg, grønnsaker, frukt og drikke.",
      /* No `photo` flag: the boxes are white-background product shots that
         should show whole, un-cropped. */
      layout: "grid",
      items: [
        {
          name: "Hverdagslunsjen",
          tag: "Rimelig",
          spec: "Den enkle lunsjen",
          description:
            "Ferskt brød, dagens pålegg, grønnsaker og frukt — fordelene ved en ordnet lunsj, til lavest mulig pris.",
          image: `${thumbs}/290d0d3af785a03f9928633743d0223f.jpg`,
        },
        {
          name: "Go'lunsjen",
          tag: "Populær",
          spec: "Mest valgt",
          description:
            "Den populære mellomvarianten med mer variasjon i pålegg og tilbehør.",
          image: `${thumbs}/03595fb0f7c1faaf3074043226e836e1.jpg`,
        },
        {
          name: "Superlunsjen",
          tag: "Luksuriøs",
          spec: "Vårt flaggskip",
          description:
            "Kun våre flotteste brød- og påleggsvarianter, med hyppige innslag av karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger. Ferskpresset juice, eventuelt melk.",
          image: `${thumbs}/945e13ebbe9d5460a1aa0f7faf816c2a.jpg`,
        },
      ],
    },
    {
      heading: "Ferdige fat",
      proof: "Vårt nyeste lunsjkonsept, der det aller meste er tilrettelagt på forhånd.",
      /* One of Helt Opplagt's own tray photos (white background, un-cropped);
         the other Hof trays live on the ferdige-fat sub-page. */
      layout: "band",
      items: [
        {
          name: "Ferdige fat — rett inn i kjøleskapet",
          tag: "Fra ca. 10 personer",
          description:
            "Kjøtt- og fiskepålegg, ost, egg og grønnsaker ferdig pakket på fat — vi setter dem rett inn i kjøleskapet deres ved de daglige leveransene. 50 rullerende menyer og egen fredagsmeny med karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger.",
          image: fatHof3,
        },
      ],
      link: { label: "Les mer om ferdige fat", to: "/tjenester/lunsj/ferdige-fat" },
    },
    {
      heading: "Varm lunsj",
      proof: "Over 50 retter laget helt fra bunn av, med fokus på sunnhet og naturlige råvarer.",
      layout: "band",
      photo: true,
      items: [
        {
          name: "Varm lunsj — porsjonspakket eller i storforpakning",
          description:
            "Kylling curry, marinerte kyllinglår, albondigas, viltgryte, lapskaus, chili con carne, thai green curry og pasta carbonara — klar til rask oppvarming i komfyr eller mikrobølgeovn.",
          image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
        },
      ],
      link: { label: "Se flere varmretter", to: "/tjenester/lunsj/varm-lunsj" },
    },
  ],
  /* The four formats are carried by the catalogs + the image links in "Les
     mer" — the generic sub-service card grid would duplicate them. */
  hideSubServiceCards: true,
  faq: [
    {
      question: "Hvor mange må vi være for å få lunsjlevering?",
      answer:
        "Vi leverer til bedrifter fra 5 personer og oppover. Ferdige fat passer best fra cirka 10 personer.",
    },
    {
      question: "Når og hvor leveres lunsjen?",
      answer:
        "Vi leverer hver dag før kl. 11, helt inn på spiserommet eller det rommet dere ønsker.",
    },
    {
      question: "Må vi ha levering hver dag?",
      answer:
        "Nei — vi leverer daglig eller etter behov, og ordningen tilpasses hvor ofte dere ønsker lunsj.",
    },
    {
      question: "Hva koster en lunsjordning?",
      answer:
        "Lunsjeskene starter på cirka 32 kroner per person per dag for Hverdagslunsjen. Ta kontakt, så setter vi opp et uforpliktende tilbud for deres størrelse og utvalgsnivå.",
    },
    {
      question: "Hva kommer i esken?",
      answer:
        "Ferskt brød, dagens pålegg, grønnsaker, frukt og drikke. Noen ting, som smør og syltetøy, kommer mandager og er ment å vare uken ut — resten er ferskt hver dag.",
    },
  ],
  readMore: [
    {
      label: "Lunsjesker",
      description: "Hverdagslunsjen, Go'lunsjen og Superlunsjen i detalj — med priser.",
      to: "/tjenester/lunsj/lunsjesker",
      image: `${thumbs}/4b5debec2dd9e84aaaa4847cf6ad5852.png`,
    },
    {
      label: "Ferdige fat",
      description: "Slik fungerer fatene, menyene og fredagsmenyen.",
      to: "/tjenester/lunsj/ferdige-fat",
      image: `${thumbs}/41d9e0eadce975c155ef731dbce1b6a8.jpg`,
    },
    {
      label: "Varm lunsj",
      description: "Hele utvalget av retter laget fra bunn av.",
      to: "/tjenester/lunsj/varm-lunsj",
      image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
    },
    {
      label: "Kantine — full lunsjavvikling",
      description: "Vert eller vertinne, buffet og full service for 15–300 ansatte.",
      to: "/tjenester/kantine",
      image: `${thumbs}/f8b24672f313f2f3ca35fd4b0765e8ab.jpg`,
    },
  ],
  subServices: [
    {
      slug: "lunsjesker",
      title: "Lunsjesker",
      description:
        "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
      image: `${thumbs}/4b5debec2dd9e84aaaa4847cf6ad5852.png`,
      content: [
        {
          type: "bullets",
          heading: "Ved å bestille lunsj fra oss får du:",
          items: [
            "Sunn lunsj levert helt inn på spiserommet før kl. 11 hver dag.",
            "Et enkelt, variert og spennende måltid.",
            "Effektivisert lunsjavviklingen, og du sparer tid og penger.",
            "Et sosialt avbrekk i en travel hverdag, til fast tid hver eneste dag.",
            "Bedre tid til viktige arbeidsoppgaver. Vi tar oss av lunsjen!",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Noen ting, som for eksempel smør og syltetøy, kommer mandager og er ment å vare utover uken, mens det aller meste er dagens pålegg for at dere skal slippe å rydde det samme pålegget ut og inn av kjøleskapet hver dag. Lunsjkurven leveres helt inn på deres spiserom, og våre kunder opplever at de sparer masse verdifull tid med våre løsninger. Velg lunsjen som passer best for dere. Velg blant vår enkle Hverdagslunsj™, populære Go’lunsj™ eller luksuriøse Superlunsj™. Vi kommer daglig med en eske som inneholder ferskt brød, dagens pålegg, grønnsaker, frukt og drikke.",
          ],
        },
        {
          type: "cards",
          heading: "Velg din lunsjeske:",
          items: [
            {
              title: "Hverdagslunsjen",
              description: "Fra kr 32,- pr hode / dag",
              image: `${thumbs}/290d0d3af785a03f9928633743d0223f.jpg`,
            },
            {
              title: "Go’lunsjen",
              description: "Fra kr 50,- pr hode / dag",
              image: `${thumbs}/03595fb0f7c1faaf3074043226e836e1.jpg`,
            },
            {
              title: "Superlunsjen",
              description: "Fra kr 61,- pr hode / dag",
              image: `${thumbs}/945e13ebbe9d5460a1aa0f7faf816c2a.jpg`,
            },
          ],
        },
      ],
    },
    {
      slug: "ferdige-fat",
      title: "Ferdige fat",
      description:
        "Vårt nyeste lunsjkonsept, der det aller meste er tilrettelagt på forhånd. Godt og variert, ferskt og friskt. Et tidsbesparende og lønnsomt alternativ til å handle mat i butikken. Passer best fra ca 10 pers og oppover.",
      image: `${thumbs}/41d9e0eadce975c155ef731dbce1b6a8.jpg`,
      content: [
        {
          type: "text",
          heading: "Leveres rett inn i deres kjøleskap",
          paragraphs: [
            "Kjøtt- og fiskepålegg, ost, egg, grønnsaker osv pakkes på fat. Drikke, smør, syltetøy og andre pålegg som ikke egner seg så godt på fat kommer ved siden av. Fatene setter vi rett inn i kjøleskapet hos dere ved våre daglige leveranser. I tillegg etterfylles andre pålegg etter rullerende meny. Vi hjelper dere med å holde orden i kjøleskapet, noe som sikrer fersk mat og hindrer svinn.",
          ],
        },
        {
          type: "bullets",
          heading: "Brød, pålegg, grønt, drikke og en ekstra fredagsmeny",
          items: [
            "Variert og sunt brød + margarin. Brødet leveres ferdig oppskåret.",
            "Flere typer pålegg hver dag, varieres med 50 rullerende menyer. Her er vi innom de fleste kjente typer kjøtt- og fiskepålegg, kokte egg, majones, kaviar, assorterte skivede oster, smøre- og kremoster, italiensk- og skalldyrsalater, syltetøy, leverpostei og mye mer.",
            "Ekstra fredagsmeny. Varieres mellom karbonader, roastbiff, kokte egg, fiskekaker og kyllingvinger.",
            "Friske grønnsaker: tomat/agurk/salat/paprika.",
            "Juice/melk.",
          ],
        },
        {
          type: "cards",
          heading: "Slik kan fatene se ut:",
          items: [
            {
              title: "Fat med kylling, ost og grønnsaker",
              description:
                "Krydret kylling, ost, salami, kalkun, sukkererter, gulrøtter og reddiker.",
              image: fatHof1,
            },
            {
              title: "Fat med røkelaks og spekemat",
              description:
                "Røkelaks, hamburgerrygg, krydret salami, ost, agurk og tomat.",
              image: fatHof2,
            },
            {
              title: "Fat med roastbiff og skinke",
              description:
                "Pepperskinke, roastbiff med rødløk, ostruller, paprika og cherrytomater.",
              image: fatHof3,
            },
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
      slug: "varm-lunsj",
      title: "Varm lunsj",
      description:
        "Vi har et stort utvalg av velsmakende retter, alle laget helt fra bunn av, med fokus på sunnhet og naturlige råvarer. Rettene leveres både porsjonspakkede og i storforpakninger, og kan raskt og enkelt varmes opp i komfyr eller mikrobølgeovn.",
      image: `${thumbs}/317b0d000b75625d1c6eea3f9a02a605.jpg`,
      content: [
        {
          type: "text",
          heading: "Stor variasjon og lang holdbarhet",
          paragraphs: [
            "Vi jobber hele tiden med fornyelse og nye retter. Vi vil at våre kunder skal oppleve en inspirerende variasjon. Det rulleres mellom mer enn 50 retter, her er noen eksempler:",
          ],
        },
        {
          type: "bullets",
          items: [
            "Kylling curry med ris",
            "Marinerte kyllinglår med potetsalat",
            "Albondigas med stekte poteter",
            "Viltgryte med stekte poteter",
            "Lapskaus",
            "Chili con Carne med ris",
            "Thailandsk Green Curry med ris",
            "Pasta Carbonara",
            "Karbonader med ertepure og stekte poteter",
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
      slug: "kantine",
      title: "Kantine",
      description:
        "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
      image: `${thumbs}/f8b24672f313f2f3ca35fd4b0765e8ab.jpg`,
      content: [
        {
          type: "text",
          heading: "Vi kommer med maten — dere nyter",
          paragraphs: [
            "Et fullservicetilbud for litt større bedrifter der vi tar oss av hele lunsjavviklingen. Vi stiller med en hyggelig vert/vertinne. Dere kan bare komme og nyte!",
            "Gjennom mange års erfaring med fornøyde kunder er tjenesten spesialtilpasset bedrifter med mellom 20 til 150 ansatte. Våre varierte menyer gir dere en buffet som er både smaksrik og sunn for kroppen, samt presentert på en måte som er en fryd for øyet! Vi tilbyr et modulbasert kantinetilbud der dere selv kan påvirke sammensetningen.",
            "I ca 100 betjente kantiner sørger våre dyktige, blide og serviceinnstilte verter og vertinner for å skape en god lunsjopplevelse i en travel hverdag for våre kunders ansatte. Vi vet at våre kunder er opptatt av både atmosfære og smak, så vårt fokus er å skape en hyggelig ramme rundt lunsjavviklingen i tillegg til høy kvalitet på maten vi serverer.",
          ],
        },
        {
          type: "bullets",
          heading: "Modulbasert kantinetilbud — velg blant følgende moduler:",
          items: [
            "Frokostblanding & yoghurt som et alternativ eller tillegg",
            "Pålegg — pyntede fat og skåler med kjøtt- og fiskepålegg, oster, majonessalater, syltetøy og smørepålegg som varieres fra dag til dag",
            "Småretter som omelett, tunfisksalat, grønnsakspanne",
            "Salater — daglig variasjon mellom mange spennende salater som tilberedes ferskt hos dere",
            "Varmmat laget fra bunn av på vårt eget kjøkken",
            "Vafler/småkaker — perfekt som fredagskos",
            "Drikke — ulike typer juice og melk, bl.a. kundefavoritten Eplejuice fra Askim frukt- og bærpresseri",
            "Brød/knekkebrød — sunne og grove brød etter egne oppskrifter uten unødvendige tilsetningsstoffer og fiberrike knekkebrødvarianter",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Vi leverer daglig, noe som gir store fordeler i forhold til ferskhet, kvalitet og fleksibilitet. Det gir lettere tilpasning til variasjoner i antall brukere og gjester, og fjerner svinnproblematikk.",
            "Vi presenterer helst maten på fat i en buffetløsning. Dette hindrer unødvendig svinn, sparer tidsbruk og dermed også kostnader, samt ikke minst er det den gunstigste løsningen for miljøet, sammenlignet med å servere maten i kuvertbegre.",
            "Våre utmerkede verter og vertinner sørger for at dere bare kan komme og nyte maten da vi tar oss av alt arbeidet rundt, herunder gjøremål som: av- og pådekking, tilbereding av all maten i buffeten, oppvask, holde kjøkken og kantineområdet rent og ryddig etc. Vi kan også påta oss annet forefallende kontorarbeid og/eller vask av deres lokaler.",
          ],
        },
      ],
    },
  ],
};

export function LunsjPage() {
  return <ServicePage data={lunsjData} />;
}
