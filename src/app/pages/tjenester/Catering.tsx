import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/catering/catering.png";
import highlightImg from "../../../images/hele_gjengen.jpg";

const data: ServicePageData = {
  path: "/tjenester/catering",
  badge: "Mat & Drikke",
  title: (
    <>
      Catering fra{" "}
      <span className="text-[#0078C4] italic font-light">vårt eget kjøkken</span>
    </>
  ),
  intro:
    "Vi tilbereder alt i vårt eget kjøkken — fra varmmat, salater og påsmurt til spennende møte- og kursmat. Levert ferdig anrettet, til avtalt tid.",
  image: heroImg,
  imageAlt: "Catering fra Helt Opplagt",
  steps: [
    {
      title: "Fortell oss om anledningen",
      description:
        "Møte, kurs eller fest? Antall gjester, ønsker og allergier — vi tar det derfra.",
    },
    {
      title: "Meny og tilbud",
      description:
        "Du får et konkret menyforslag med pris, tilpasset anledningen og budsjettet.",
    },
    {
      title: "Vi leverer",
      description:
        "Maten leveres ferdig anrettet til avtalt tid — alt du trenger å gjøre er å servere.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor catering fra oss?",
    title: "Mat som gjør inntrykk",
    description:
      "God mat setter tonen for ethvert arrangement. Fordi vi lager alt selv, kan vi tilpasse menyen til akkurat deres anledning — og du har ett kontaktpunkt hele veien fra bestilling til levering.",
    points: [
      "Alt tilberedes ferskt i vårt eget kjøkken",
      "Menyer for alt fra små møter til store arrangementer",
      "Enkelt å bestille — og enkelt å justere i etterkant",
      "Allergier og spesialønsker håndteres uten ekstra styr",
    ],
    image: highlightImg,
  },
};

export function CateringPage() {
  return <ServicePage data={data} />;
}
