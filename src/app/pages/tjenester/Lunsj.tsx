import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/lunsj/lunsj.png";
import openingImg from "../../../images/hero/web/hero-lunsj.jpg";

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
