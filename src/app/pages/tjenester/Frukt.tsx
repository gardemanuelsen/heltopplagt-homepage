import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/frukt/frukt2.png";
import highlightImg from "../../../images/frukt/frukt3.png";

const data: ServicePageData = {
  path: "/tjenester/frukt",
  badge: "Helse & Trivsel",
  title: (
    <>
      Fersk frukt som gir{" "}
      <span className="text-[#0078C4] italic font-light">ny energi</span>
    </>
  ),
  intro:
    "Du bestemmer størrelse og innhold — vi leverer ferske, håndplukkede fruktkurver rett til arbeidsplassen, daglig eller etter behov.",
  image: heroImg,
  imageAlt: "Fruktkurv fra Helt Opplagt",
  steps: [
    {
      title: "Fortell oss om dere",
      description:
        "Hvor mange er dere, og hva liker dere? Vi hjelper deg å finne riktig størrelse og innhold.",
    },
    {
      title: "Vi setter sammen kurven",
      description:
        "Vi plukker sesongens beste frukt og setter sammen en kurv tilpasset din bedrift.",
    },
    {
      title: "Fast levering",
      description:
        "Kurvene leveres på faste dager, og du kan justere ordningen når som helst underveis.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor fruktordning?",
    title: "Et lite gode med stor effekt",
    description:
      "En fruktkurv er en av de enkleste og rimeligste velferdsgodene en bedrift kan tilby — og en av de mest populære. Ferskt påfyll i løpet av dagen gir mer energi, bedre konsentrasjon og et hyggelig avbrekk.",
    points: [
      "Sunt alternativ som holder energien oppe hele arbeidsdagen",
      "Synlig og populært gode som ansatte setter pris på hver dag",
      "Ingen administrasjon — vi tar oss av alt fra innkjøp til levering",
      "Enkelt å skalere opp og ned etter hvor mange som er på kontoret",
    ],
    image: highlightImg,
  },
  quote: {
    text: "Vi hadde et ønske om å tilføre de ansatte ny energi i form av sunne alternativer. Frukten er veldig populær, og det er konkurranse om å kaste seg over kurvene når de kommer. Vi er veldig godt fornøyd med Helt Opplagt — de er svært fleksible og raske til å følge opp ønsker.",
    name: "Maria Bergström",
    role: "Kontorsjef",
    company: "Vinmonopolet AS",
  },
};

export function FruktPage() {
  return <ServicePage data={data} />;
}
