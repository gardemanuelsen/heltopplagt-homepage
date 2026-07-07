import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import lunsjImg from "../../images/lunsj/lunsj.png";

const points = [
  "Pålitelig partner for over 200 bedrifter i Oslo",
  "Dedikert kundeansvarlig for hver klient",
  "Bærekraftige og miljøvennlige løsninger",
];

export function About() {
  return (
    <section id="om-oss" className="bg-white py-24 px-8">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          {/* Accent block */}
          <div className="absolute -bottom-5 -right-5 w-[65%] h-[65%] bg-[#f5f9fc] rounded-[10px] z-0" />
          <div className="relative z-[1] rounded-[10px] overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src={lunsjImg}
              alt="Om Helt Opplagt"
              className="w-full h-full object-cover block"
            />
          </div>
          {/* Floating chip */}
          <div className="absolute top-6 -left-5 z-[2] bg-[#0078C4] text-white rounded-lg px-5 py-4 shadow-[0_8px_24px_rgba(0,120,196,0.35)]">
            <p className="text-[28px] font-bold leading-none mb-0.5">40+</p>
            <p className="text-[11px] opacity-80 uppercase tracking-[0.06em]">
              Års erfaring
            </p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-4">
            Om oss
          </p>
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
            Pålitelig partner
            <br />
            siden 1985
          </h2>
          <p className="text-base text-gray-600 leading-[1.7] mb-4">
            Helt Opplagt er en ledende leverandør av fasilitetsløsninger i
            Oslo-området. Vi kombinerer erfaring, kvalitet og kundefokus for å
            levere tjenester som overgår forventningene.
          </p>
          <p className="text-base text-gray-600 leading-[1.7] mb-8">
            Vårt mål er enkelt: å gjøre hverdagen enklere for våre kunder — ved å
            levere profesjonelle tjenester som skaper trivsel, effektivitet og
            verdi.
          </p>

          {/* Checkpoints */}
          <div className="flex flex-col gap-2.5 mb-9">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#f5f9fc] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#0078C4]" />
                </div>
                <span className="text-sm text-gray-700">{p}</span>
              </div>
            ))}
          </div>

          <Link
            to="/om-oss"
            className="bg-[#152643] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0078C4] transition-colors inline-flex items-center gap-2 hover:bg-[#ffffff] hover:border-2 hover:border-[#152643] border-2 hover:text-[#152643]"
          >
            Lær mer om oss
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
