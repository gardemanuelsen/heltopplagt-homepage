import { ServicePage, ServicePageData } from "../../components/ServicePage";
import heroImg from "../../../images/catering/catering.png";

const thumbs = "https://heltopplagt.no/application/files/cache/thumbnails";

export const cateringData: ServicePageData = {
  path: "/tjenester/catering",
  badge: "Mat & Drikke",
  title: (
    <>
      Hjemmelagede{" "}
      <span className="text-[#0078C4] italic font-light">
        kvalitetsprodukter
      </span>
    </>
  ),
  intro:
    "Vi har vårt eget kjøkken og kan derfor tilby alt! Her lages det blant annet varmmat, salater og påsmurt, samt en spennende meny for møte- og kursmat.",
  image: heroImg,
  imageAlt: "Catering fra Helt Opplagt",
  brochureUrl:
    "https://heltopplagt.no/application/files/8417/5526/4710/Catering_2025.pdf",
  subServices: [
    {
      slug: "pasmurt",
      title: "Påsmurt",
      description:
        "Når du har et arrangement, kurs eller gjester som krever mat utover den vanlige lunsjen, stiller vi med et vidt spekter av diverse møtemat og påsmurt.",
      image: `${thumbs}/e9e4a392e580476d3d23ab5a5d2d2b7d.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Når du har et arrangement, kurs eller gjester, som krever mat utover den vanlige lunsjen, stiller vi med et vidt spekter av diverse møtemat og påsmurt. Vi lager blant annet baguetter, foccacia eller wraps av høy kvalitet, og hjelper til å skreddersy bestillingen så den blir riktig for akkurat deg. Snitter til et styremøte? Rundstykker til frokostseminar? Vi hjelper deg!",
            "Vi får stadig høre at vi har Oslos beste påsmurt. Prøv oss neste gang og se om du er enig.",
          ],
        },
        {
          type: "table",
          heading: "Prisliste — baguetter, focaccia eller ciabatta",
          rows: [
            ["Ost og skinke på spansk vis", "(E, SE, SL, SU)", "81,-"],
            ["Kyllingsalat (indisk masala)", "(E, SE, SL, SU)", "81,-"],
            ["Roastbeef og remulade", "(E, SE, SU, HG)", "81,-"],
            ["Tunfisksalat med kapers", "(F, E, SE, ME)", "81,-"],
            ["Chorizo og cheddar", "(ME, SO, E, SE, SL, SU)", "81,-"],
            ["BLT", "(E, SE, SU)", "81,-"],
            [
              "Tomat, mozzarella og pesto",
              "(ME, SE, E, N, spor av peanøtter)",
              "81,-",
            ],
            ["Brie og ruccola", "(E, SE, ME, SU)", "81,-"],
            ["Egg og tomat", "(E, SU, SE)", "81,-"],
          ],
        },
        {
          type: "table",
          heading: "Annet påsmurt",
          rows: [
            ["Rundstykker", "Leveres med tilsvarende pålegg", "47,-"],
            [
              "Snitter, 5 stk pr kuvert",
              "Grovt brød med pålegg som serranoskinke, håndpillede reker, røkelaks, brie og roastbiff",
              "165,-",
            ],
            ["Wraps", "Spekeskinke, laks, roastbeef eller kylling", "81,-"],
            [
              "Kanapeer, 5 stk pr kuvert",
              "Grovt brød med pålegg som serranoskinke, håndpillede reker, røkelaks, brie og roastbiff",
              "165,-",
            ],
          ],
        },
      ],
    },
    {
      slug: "varmmat",
      title: "Varmmat",
      description:
        "Helt Opplagt lager forskjellige varmretter hver uke, slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker, kjøtt og fisk av god kvalitet.",
      image: `${thumbs}/f6b4963e322aafa37844cd4403388db1.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Her i Helt Opplagt lager vi hver uke forskjellige varmretter slik at du kan nyte god mat laget fra bunn av. Vi starter med tomme kjeler og jobber oss opp ved hjelp av friske grønnsaker og kjøtt og fisk av god kvalitet.",
            "Menyen består av hverdagsretter fra hele verden, for eksempel indisk kylling curry, amerikansk chili con carne, russisk stroganoff og norsk lapskaus.",
          ],
        },
      ],
    },
    {
      slug: "salater",
      title: "Salater",
      description:
        "Friske grønnsaker og forskjellige salattyper utgjør basen i vår salatmeny, og fra den kan du velge grønne salater ved siden av varmmaten eller lunsjen, eller rene salatmåltider.",
      image: `${thumbs}/3d1ba52d8c13ebc884ca2ef2304b2516.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Friske grønnsaker og forskjellige salattyper utgjør basen i vår salatmeny, og fra den kan du velge grønne salater ved siden av varmmaten eller lunsjen, eller rene salatmåltider som porsjonspakket pasta- eller nicoisesalat.",
            "Prøv for eksempel vår populære cæsarsalat, laget tradisjonelt med romanosalat og vår spesielle cæsardressing!",
          ],
        },
        {
          type: "table",
          heading: "Prisliste",
          rows: [
            [
              "Hverdagssalat med topping",
              "(SE, F (hvis tunfisk), SK (hvis reker), ME)",
              "74,-",
            ],
            [
              "Grønn salat med topping",
              "(SE, F (hvis tunfisk), SK (hvis reker), ME)",
              "87,-",
            ],
            ["Grønn salat med kylling", "(E, ME, SU)", "87,-"],
            ["Nicoisesalat", "(E, ME, F, SE)", "87,-"],
            ["Cæsarsalat", "(ME, F, E)", "87,-"],
            ["Pastasalat", "(HG, ME, N, E)", "87,-"],
            ["Taboulesalat", "(E, HG, SU, ME)", "87,-"],
            ["Tex-Mex salat", "(ME, E)", "87,-"],
            ["Thai-inspirert nudelsalat", "(HG, E, SO, S)", "87,-"],
            [
              "Hverdagssalat/grønn salat/gresk salat uten topping",
              "Passer fint som tilbehør til brødmat eller varmmat",
              "62,-/67,-",
            ],
          ],
          footnote:
            "Salatene kan toppes med for eksempel ost og skinke (ME), pasta med hvitløksdressing (ME, E, HG), kylling, reker (SK) eller couscous (HG, E, ME). Salatprisene er per porsjon (ca 250–300 g), kan leveres enkeltvis eller i storforpakning.",
        },
      ],
    },
    {
      slug: "overtidsmat",
      title: "Overtidsmat",
      description:
        "Vi lager nydelige varmretter i porsjonspakker. Våre overtidspakker leveres som «overtidsmat abonnement» som sørger for at dere har mat klar i kjøleskapet som enkelt kan varmes i micro. Vi varierer menyen hver uke.",
      image: `${thumbs}/fae8c770cb3e37279d5d9083d9b71ddd.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Vår flotte varmmat-meny kan også leveres i porsjonspakker som passer perfekt som overtidsmat. Vi leverer avtalt antall porsjoner en gang pr uke. Dette oppbevares i kjøleskap og er dermed tilgjengelig for enkel oppvarming i mikroen når dere trenger det. Menyen varierer fra uke til uke slik at dere opplever god og spennende variasjon! Alle våre retter er laget fra bunn, uten bruk av unødvendige tilsetningsstoffer. Vi har fokus på gode råvarer, samt redusert salt- og fettinnhold.",
          ],
        },
      ],
    },
    {
      slug: "moteservicepakker",
      title: "Møteservice",
      description:
        "Helt Opplagt leverer møtepakker. Våre pakker koster fra 65,- per person for kaffe og snack til full pakke med kaffe, smoothie, wraps, bakervare og oppskåret frukt/grønt. Vi lover fornøyde og opplagte møtedeltakere.",
      image: `${thumbs}/66e6182e79cbe18dbcaa6f73443b883e.jpg`,
      content: [
        {
          type: "bullets",
          heading: "Pakke 1 — Mini",
          items: [
            "Kaffepakke med kaffemelk, sukkerbit og kaffesjokolade",
            "Snack — velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
          ],
        },
        {
          type: "bullets",
          heading: "Pakke 2 — Medium",
          items: [
            "Kaffepakke",
            "Miniwraps — 2 stk. per person.",
            "Snack — velg mellom assortert bakevare, oppskåret frukt eller oppskåret grønt.",
          ],
        },
        {
          type: "bullets",
          heading: "Pakke 3 — Full pakke",
          items: [
            "Drikke — smoothie eller kaffepakke.",
            "Miniwraps — 2 stk. per person",
            "Assortert bakevare",
            "Oppskåret frukt og grønt.",
          ],
        },
      ],
    },
    {
      slug: "event",
      title: "Event",
      description:
        "Vi hjelper deg med alle former for events og firmafest! Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils? Kontakt oss.",
      image: `${thumbs}/4369d98cf7a58b256a4e4e21a89c5655.jpg`,
      content: [
        {
          type: "text",
          heading: "Vi hjelper deg med alle former for events og firmafest!",
          paragraphs: [
            "Planlegger du et arrangement for kunder og forretningsforbindelser, en feiring eller fest med kolleger, eller rett og slett bare en fredagspils? Hva med digitalt kick-off med hjemkjøring av varer? Kontakt oss.",
          ],
        },
        {
          type: "image",
          src: "https://heltopplagt.no/application/files/7316/1348/5394/Kickoff_2021.jpg",
          alt: "Kick-off med Helt Opplagt",
        },
        {
          type: "bullets",
          heading: "Vi kan også bidra med:",
          items: [
            "Middager",
            "Påsmurt",
            "Fingermat",
            "Tapas",
            "Desserter og kaker",
            "Drikke (mineralvann, øl, tappetårn)",
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Se ikke bort fra at vi også kan stille med kokk eller serveringshjelp hvis dere skulle ønske det. Ring oss på 0 23 46 for en prat, så hjelper vi dere å sette sammen et vellykket arrangement.",
          ],
        },
      ],
    },
    {
      slug: "helt-opplagt-pa-garden",
      title: "Helt Opplagt på gården",
      description: "Nå kan vi også stille med lokaler til ditt arrangement.",
      image: `${thumbs}/88375d2d8c649f17faafa2f6ad6ccc56.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "På Store Stensrud gård syd i Oslo har vi plass til store utendørs arrangementer som sommerfest, kick-off, grillfest etc på et tradisjonsrikt gårdstun. Store arealer gir muligheter for dans, lek, spill og aktiviteter. Innendørs kan vi arrangere mindre selskaper for inntil 40–50 personer i koselige og ærverdige stuer, enten du skal arrangere bryllup, konfirmasjon eller firmafest.",
            "Vi kan stille med mat, drikke, kokk og servitører.",
            "Gården ligger lett tilgjengelig 15 minutters kjøretid syd for Oslo sentrum og har eget busstopp for ankomst med offentlig transport.",
          ],
        },
        {
          type: "image",
          src: `${thumbs}/86c421f900ce5141ff7024eae753265e.jpg`,
          alt: "Helt Opplagt på gården",
        },
      ],
    },
    {
      slug: "kaker-og-bakervarer",
      title: "Kaker og bakervarer",
      description:
        "Vi tilbyr alle slag bakervarer fra wienerbrød og boller til et godt utvalg av store og små kaker.",
      image: `${thumbs}/8b7ff6700fea5e4a1b4f16ff4e9863cb.jpg`,
      content: [
        {
          type: "text",
          paragraphs: [
            "Marsipan og kremkaker fra 6 til 120 personer. Nydelige ostekaker, bringebærkaker, sjokoladekaker mm.",
            "Av bakervarer leverer vi blant annet ferske sprøe wienerstenger, boller, skolebrød, croissant, muffins, mm. Vi har alt du trenger til møter, fredagssamlingen, eller en markering på kontoret.",
          ],
        },
      ],
    },
  ],
};

export function CateringPage() {
  return <ServicePage data={cateringData} />;
}
