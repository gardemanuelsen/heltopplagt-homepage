import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/lunsj/lunsj.png";

const data: ServicePageData = {
  path: "/tjenester/lunsj",
  badge: "Mat & Drikke",
  title: (
    <>
      Lunsjordning som{" "}
      <span className="text-[#0078C4] italic font-light">samler</span>{" "}
      arbeidsplassen
    </>
  ),
  intro:
    "Lønnsomme og velsmakende lunsjordninger for bedrifter med 5 personer og oppover. Fersk lunsj levert på døren — uten at noen må ut og handle.",
  image: heroImg,
  imageAlt: "Lunsjordning fra Helt Opplagt",
  steps: [
    {
      title: "Kartlegging",
      description:
        "Vi finner ut hvor mange dere er, hva dere liker og hvilke dager dere ønsker levering.",
    },
    {
      title: "Skreddersydd forslag",
      description:
        "Du får et konkret tilbud med meny og pris per ansatt — uforpliktende og oversiktlig.",
    },
    {
      title: "Lunsjen står klar",
      description:
        "Vi leverer til avtalt tid hver dag, og følger opp jevnlig for å sikre at dere er fornøyde.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor lunsjordning?",
    title: "Mer enn bare mat på bordet",
    description:
      "En god lunsjordning er en investering i både trivsel og produktivitet. De ansatte sparer tid og penger, bedriften får et attraktivt gode å tilby — og lunsjpausen blir dagens sosiale høydepunkt.",
    points: [
      "Fast pris per ansatt gjør kostnaden enkel å budsjettere",
      "Variert ukesmeny med både sunne valg og gode klassikere",
      "Felles lunsj styrker samholdet og arbeidsmiljøet",
      "Passer for alle bedrifter fra 5 personer og oppover",
    ],
    image:
      "https://images.unsplash.com/photo-1583331030773-1ac64d1d00db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  quote: {
    text: "Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Nå som alle spiser samtidig og er samlet i kantinen, gjør det også godt for arbeidsmiljøet og det sosiale. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
    name: "Tor Anders Andersen",
    role: "Avdelingsleder",
    company: "Team Verksted AS Avd Follo",
  },
};

export function LunsjPage() {
  return <ServicePage data={data} />;
}
