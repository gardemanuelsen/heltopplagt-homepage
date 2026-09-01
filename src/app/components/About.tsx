import { ArrowRight, Check } from "lucide-react";
import teamImg from "../../images/hele_gjengen.jpg";
import { LIVERY_CONTAINER, LiveryCta, SectionPlate } from "./livery";

/*
 * Every line below is checkable: the brochure (januar 2026), PRODUCT.md, or
 * the Ansvar page. Two figures from /om-oss were deliberately NOT promoted
 * here — "98% kundetilfredshet", which no source backs, and the headcount,
 * which /om-oss puts at 50+ while Renhold.tsx says 100.
 */
const points = [
  "Over 200 bedrifter i Oslo-området",
  "Rundt 12 000 leveranser i uken, til over 50 000 ansatte",
  "Én kontaktperson og én faktura for alle seks tjenester",
  "Miljøfyrtårn-sertifisert, med CO2-nøytral drift",
];

export function About() {
  return (
    <section id="om-oss" className="scroll-mt-20 bg-tint py-20 lg:py-28">
      <div
        className={`${LIVERY_CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}
      >
        {/* Who is behind the van */}
        <div className="relative order-2 lg:order-1">
          <div className="livery-panel livery-notch relative aspect-[4/3] overflow-hidden text-ink">
            <img
              src={teamImg}
              alt="Teamet i Helt Opplagt"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Fleet plate */}
          <div className="absolute -left-2 top-6 bg-signal px-4 py-3 text-white sm:-left-5 sm:px-5">
            <div className="font-archivo text-[44px] font-black leading-[0.8] sm:text-[56px]">
              40<span className="text-aqua">+</span>
            </div>
            <div className="mt-1 font-archivo text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">
              År erfaring
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionPlate
            title="Om oss"
            proof="Leverandør av helse og trivsel på arbeidsplassen siden 1985"
          />

          {/* The positioning sentence is the company's own, from the brochure's
              back page and the /om-oss hero. It says what the business actually
              is, which the previous "ledende leverandør av fasilitetsløsninger"
              did not. */}
          <p className="mt-6 text-[15px] leading-[1.7] text-ink/70 lg:text-[17px]">
            Helt Opplagt er en markedsorientert leverandør av løpende,
            abonnementsbaserte tjenester innen helse og trivsel på
            arbeidsplassen. Frukt, lunsj, kantine, catering, inneklima og
            renhold, levert av de samme folkene, uke etter uke.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink/70 lg:text-[17px]">
            Målet er enkelt: å gjøre arbeidsdagen litt bedre for menneskene som
            jobber der, og litt enklere for dere som har ansvaret for den.
          </p>

          <ul className="mt-8 flex flex-col divide-y divide-ink/12 border-y border-ink/15">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 py-3.5">
                <Check
                  className="h-4 w-4 flex-shrink-0 text-lime"
                  strokeWidth={3}
                />
                <span className="text-[15px] font-medium text-ink/80">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <LiveryCta to="/om-oss" variant="ghost-dark">
              Lær mer om oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </LiveryCta>
          </div>
        </div>
      </div>
    </section>
  );
}
