import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/inneklima/inneklima.png";

const data: ServicePageData = {
  path: "/tjenester/inneklima",
  badge: "Arbeidsmiljø",
  title: (
    <>
      Ren luft og{" "}
      <span className="text-[#0078C4] italic font-light">rett temperatur</span>
    </>
  ),
  intro:
    "Vi leverer ren luft og rett temperatur — helt uten byggtekniske endringer. Bedre inneklima gir friskere, mer opplagte medarbeidere.",
  image: heroImg,
  imageAlt: "Inneklimaløsninger fra Helt Opplagt",
  steps: [
    {
      title: "Befaring og måling",
      description:
        "Vi kartlegger lokalene og måler dagens luftkvalitet og temperaturforhold.",
    },
    {
      title: "Skreddersydd løsning",
      description:
        "Du får et konkret forslag med riktig utstyr for deres lokaler — som abonnement, uten stor investering.",
    },
    {
      title: "Installasjon og oppfølging",
      description:
        "Vi installerer uten inngrep i bygget, og følger opp med service og filterbytte.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor inneklima?",
    title: "Inneklimaet påvirker alt dere gjør",
    description:
      "Tung luft, trekk og feil temperatur stjeler konsentrasjon og energi hver eneste dag. Med riktig inneklima merker dere forskjellen umiddelbart — og det krever verken ombygging eller store investeringer.",
    points: [
      "Abonnementsbasert løsning uten stor engangsinvestering",
      "Installeres helt uten byggtekniske endringer",
      "Dokumentert effekt med måling før og etter",
      "Service, filterbytte og vedlikehold er inkludert",
    ],
    image:
      "https://images.unsplash.com/photo-1666718622537-6748ca5322e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
};

export function InneklimaPage() {
  return <ServicePage data={data} />;
}
