import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/renhold/renhold.png";

const data: ServicePageData = {
  path: "/tjenester/renhold",
  badge: "Arbeidsmiljø",
  title: (
    <>
      Renhold som gir{" "}
      <span className="text-[#0078C4] italic font-light">bedre trivsel</span>
    </>
  ),
  intro:
    "Godt renhold gir bedre trivsel og et bedre arbeidsmiljø. Vi leverer fast, kvalitetssikret renhold med faste renholdere som kjenner lokalene deres.",
  image: heroImg,
  imageAlt: "Renholdstjenester fra Helt Opplagt",
  steps: [
    {
      title: "Befaring",
      description:
        "Vi går gjennom lokalene sammen med dere og kartlegger behov, flater og frekvens.",
    },
    {
      title: "Renholdsplan og tilbud",
      description:
        "Du får en konkret plan med hva som gjøres når, og en tydelig, forutsigbar pris.",
    },
    {
      title: "Oppstart og oppfølging",
      description:
        "Faste renholdere starter opp, og vi følger opp med kvalitetskontroller underveis.",
    },
  ],
  highlight: {
    eyebrow: "Hvorfor renhold fra oss?",
    title: "Rene lokaler merkes av alle",
    description:
      "Et rent kontor er noe både ansatte og besøkende legger merke til — bevisst eller ubevisst. Godt renhold reduserer sykefravær, forlenger levetiden på inventar og gir et profesjonelt førsteinntrykk.",
    points: [
      "Faste renholdere som kjenner lokalene deres",
      "Løsningsorientert team som fikser det dere ber om",
      "Miljøvennlige produkter og metoder",
      "Enkel kombinasjon med våre andre tjenester — ett kontaktpunkt",
    ],
    image:
      "https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  quote: {
    text: "Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Jeg vil spesielt trekke frem positiviteten de viser — de er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om.",
    name: "Helge Stensrud",
    role: "Driftsansvarlig",
    company: "Schibsted Trykk Oslo AS",
  },
};

export function RenholdPage() {
  return <ServicePage data={data} />;
}
