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
    <section id="om-oss" className="bg-base-100 py-24 px-8">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          {/* Accent block */}
          <div className="absolute -bottom-5 -right-5 w-[65%] h-[65%] bg-base-200 rounded-[10px] z-0" />
          <div className="relative z-[1] rounded-[10px] overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src={lunsjImg}
              alt="Om Helt Opplagt"
              className="w-full h-full object-cover block"
            />
          </div>
          {/* Floating stat chip */}
          <div className="stats absolute top-6 -left-5 z-[2] bg-primary text-primary-content rounded-lg shadow-[0_8px_24px_rgba(0,120,196,0.35)]">
            <div className="stat px-5 py-4">
              <div className="stat-value text-[28px] leading-none mb-0.5">40+</div>
              <div className="stat-title text-primary-content/80 text-[11px] uppercase tracking-[0.06em]">
                Års erfaring
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-4">
            Om oss
          </p>
          <h2 className="text-3xl lg:text-[40px] font-bold text-base-content tracking-tight leading-[1.15] mb-5">
            Pålitelig partner
            <br />
            siden 1985
          </h2>
          <p className="text-base text-base-content/65 leading-[1.7] mb-4">
            Helt Opplagt er en ledende leverandør av fasilitetsløsninger i
            Oslo-området. Vi kombinerer erfaring, kvalitet og kundefokus for å
            levere tjenester som overgår forventningene.
          </p>
          <p className="text-base text-base-content/65 leading-[1.7] mb-8">
            Vårt mål er enkelt: å gjøre hverdagen enklere for våre kunder — ved å
            levere profesjonelle tjenester som skaper trivsel, effektivitet og
            verdi.
          </p>

          {/* Checkpoints */}
          <div className="flex flex-col gap-2.5 mb-9">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-base-200 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-base-content/80">{p}</span>
              </div>
            ))}
          </div>

          <Link
            to="/om-oss"
            className="btn btn-secondary border-2 border-secondary rounded-md px-6 h-auto py-3 text-sm font-medium hover:bg-base-100 hover:text-secondary"
          >
            Lær mer om oss
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
