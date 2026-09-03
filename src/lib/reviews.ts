/**
 * The customer testimonials — the single shared source for the homepage
 * Reviews carousel and the Referanser page. All ten are verbatim from
 * heltopplagt.no/referanser (the previous in-repo copies had drifted and
 * mis-credited Vinmonopolet's quote to "Maria Bergström"; the site credits
 * Jorunn Kristiansen).
 */
export interface Review {
  name: string;
  role: string;
  company: string;
  /** Which service the quote is about — matches the service names. */
  service: "Kantine" | "Lunsj" | "Frukt" | "Inneklima" | "Renhold";
  text: string;
  /** Short headline-style quote, used large on the Referanser page. */
  pullQuote?: string;
}

export const reviews: Review[] = [
  {
    name: "Kristin Gresmo Johansen",
    role: "Sport Holding AS (Sport 1, Intersport, Bergans)",
    company: "Sport Holding AS",
    service: "Kantine",
    text: "Vi har hatt Helt Opplagt som kantineleverandør siden juni 2021. Vi er en stor bedrift som stadig vokser, nå ca. 180 personer. Vi har valgt nivå medium i vår kantine, og har varmmat én gang i uken. I tillegg til salatbar og brød/pålegg dukker det stadig opp småretter som omeletter, supper etc. Fredag = vafler. Maten som presenteres er delikat, de er flinke til å variere både salatbar, pålegg og småretter slik at det hele tiden finnes noe spennende å velge i.",
  },
  {
    name: "Wenche Revhaug",
    role: "Styremedlem",
    company: "Kronos Titan",
    service: "Kantine",
    text: "Kronos Titan har i flere år hatt fleksibel matleveranse fra Helt Opplagt med daglig lunsjbuffet i kantinen. Helt Opplagt leverer god, variert og sunn mat – fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse – hver dag! Helt Opplagt er fleksible, imøtekommende med høy servicegrad – vi er superfornøyd!",
  },
  {
    name: "Tor Anders Andersen",
    role: "Avdelingsleder",
    company: "Team Verksted AS Avd Follo",
    service: "Lunsj",
    text: "Vi har i tre år hatt lunsjkurver fra Helt Opplagt og valgte Go'lunsjen. Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud, og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
  },
  {
    name: "Tom Liseth",
    role: "Samsung Electronics",
    company: "Samsung Electronics",
    service: "Lunsj",
    text: "Vi har hatt Superlunsjen fra Helt Opplagt som et spleiselag mellom bedriften og de ansatte. Vi ønsket en felles lunsjordning for å få et mer naturlig samlingspunkt for de ansatte. Tjenesten oppleves veldig bra, og ikke minst kostnadseffektiv. Løsningen har fungert over forventning på alle punkt. Leveranse skjer daglig med godt pålegg, og dagsferskt brød er sammen med eplejuicen fra Askim høydepunktene blant produktene.",
  },
  {
    name: "Tone Sandstå",
    role: "Lysaker idrettsbarnehage",
    company: "Lysaker idrettsbarnehage",
    service: "Frukt",
    text: "Vi bestiller frukt hos Helt Opplagt og er veldig fornøyd med det. Variert frukt med god kvalitet. Vi bestiller også en stor fruktkurv/knaskekurv hver mandag som står på pauserommet vårt. Ulempen er at den blir så fort tom. Jeg er også svært fornøyd med at vi kan legge inn en ekstra bestilling på kort varsel dersom vi ønsker en knaskekurv til diverse møter.",
  },
  {
    name: "Jorunn Kristiansen",
    role: "Vinmonopolet AS",
    company: "Vinmonopolet AS",
    service: "Frukt",
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Vi har valgt Knaskekurven og Go'kurven. Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer så vi kan holde energien oppe ut dagen. Frukten er veldig populær og det er konkurranse om å kaste seg over kurvene når de kommer. Vi er veldig godt fornøyd med Helt Opplagt. De er svært fleksible og raske til å følge opp ønsker.",
  },
  {
    name: "Edmund Ellingsen",
    role: "Refinansiering.no – Zen Finans AS",
    company: "Refinansiering.no",
    service: "Frukt",
    text: "Refinansiering har fått frukt til ca. 20 ansatte fra Helt Opplagt siden 2023. Fruktordningen gir et positivt løft i hverdagen, og de ansatte er veldig fornøyde! Fruktkurven skaper en liten, men viktig grunn til å ta en pause og slå av en prat, noe som styrker samholdet blant de ansatte. De som leverer er alltid hyggelige, og servicen er fantastisk.",
  },
  {
    name: "Anette Rosendahl",
    role: "Den Norske Opera & Ballett",
    company: "Den Norske Opera & Ballett",
    service: "Inneklima",
    pullQuote:
      "Å produsere Svanesjøen med hodepine var ikke optimalt. Løsningen var Helt Opplagt.",
    text: "Vi hadde problemer med støv og dårlig luft på grunn av produksjon av kostymer, masker og andre objekter som skulle brukes i forestillingene. Vi forsøkte uten hell å gjøre noe med dette, helt til vi kom i kontakt med Helt Opplagt, som anbefalte oss de riktige løsningene for å redusere svevestøvet. Vi er nå veldig fornøyde med luftrenserne, og arbeidsmiljøet er forbedret kraftig. Helt Opplagt kommer hver måned for å skifte filtre og rense luftrenserne.",
  },
  {
    name: "Maria",
    role: "Rystad Energy AS",
    company: "Rystad Energy AS",
    service: "Inneklima",
    pullQuote: "Luften på kontoret var tung, tett og tørr. Dette måtte vi gjøre noe med.",
    text: "De ansatte klaget over luftkvaliteten, noe som gikk ut over trivsel, arbeidsmiljø og effektivitet. Etter befaringer og et godt tilbud så vi ingen grunn til å ikke inngå samarbeid med Helt Opplagt. Det har vi aldri angret på, for vi opplever stor forbedring. Alle er mye mer fornøyde og kan konsentrere seg om jobben. Helt Opplagt følger opp avtalen til punkt og prikke, og gjør all jobben med montering, service og vedlikehold.",
  },
  {
    name: "Helge Stensrud",
    role: "Driftsansvarlig",
    company: "Schibsted Trykk Oslo AS",
    service: "Renhold",
    text: "Høsten 2023 så vi etter ny samarbeidspartner på daglig og temporært renhold, og valget falt på Helt Opplagt — et firma som tar stort sosialt ansvar, noe som er svært viktig for oss og våre verdier. Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Jeg vil spesielt trekke frem positiviteten de viser: de er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om. Vi er glade for valget vi tok om ny samarbeidspartner.",
  },
];
