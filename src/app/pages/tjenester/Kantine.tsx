import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/kantine/kantine.png";

const data: ServicePageData = {
  path: "/tjenester/kantine",
  badge: "Mat & Drikke",
  title: (
    <>
      Fullservice kantine —{" "}
      <span className="text-[#0078C4] italic font-light">
        vi tar oss av alt
      </span>
    </>
  ),
  intro:
    "Et fullservicetilbud som passer alle typer kjøkken, der vi tar oss av hele lunsjavviklingen — fra innkjøp og tilberedning til servering og opprydding.",
  image: heroImg,
  imageAlt: "Kantinedrift fra Helt Opplagt",
  steps: [
    {
      title: "Befaring og kartlegging",
      description:
        "Vi besøker lokalene deres, ser på kjøkkenet og kartlegger behov, antall og ønsker.",
    },
    {
      title: "Løsning og avtale",
      description:
        "Du får et konkret forslag til bemanning, meny og økonomi — tilpasset akkurat deres kantine.",
    },
    {
      title: "Vi overtar driften",
      description:
        "Vårt team er på plass fra dag én, og vi følger opp tett for å sikre kvaliteten over tid.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor kantine fra oss?",
    title: "En kantine de ansatte gleder seg til",
    description:
      "Kantinen er hjertet på arbeidsplassen. Med et dedikert team som kjenner huset og menneskene, blir lunsjpausen dagens høydepunkt — mens dere kan konsentrere dere om det dere er best på.",
    points: [
      "Passer alle typer kjøkken, store som små",
      "Fast personale som kjenner huset og de ansatte",
      "Menyer som tilpasses ønsker, allergier og sesong",
      "Én leverandør og ett kontaktpunkt for hele lunsjavviklingen",
    ],
    image:
      "https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  quote: {
    text: "Helt Opplagt leverer god, variert og sunn mat — fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse, hver dag! Helt Opplagt er fleksible og imøtekommende med høy servicegrad — vi er superfornøyd.",
    name: "Wenche Revhaug",
    role: "Styremedlem",
    company: "Kronos Titan",
  },
};

export function KantinePage() {
  return <ServicePage data={data} />;
}
