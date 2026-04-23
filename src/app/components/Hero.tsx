import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="bg-[rgb(17,31,55)] relative overflow-hidden min-h-[600px]">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: text */}
        <div className="flex flex-col justify-center py-20 lg:pr-12 relative z-[2]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-8 h-0.5 bg-[#0078C4]" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#66aedc]">
               Lunsj &middot; Kantine &middot; Frukt &middot; Catering &middot; Inneklima &middot; Renhold  
            </span>
          </div>

          <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Det{" "}
            <span className="text-[#0078C4] italic font-light">
              Helt Opplagte
            </span>{" "}
            valg for en sunnere, renere og enklere hverdag!
          </h1>

          <p className="text-[17px] text-white/60 leading-relaxed mb-9 max-w-[420px]">
            Helt Opplagt på jobben er en markedsorientert leverandør av løpende
            abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen.
            
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/kontakt"
              className="bg-[#0078C4] text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
            >
              Kontakt oss i dag
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#tjenester"
              className="border border-white/20 text-white/75 px-6 py-3.5 rounded-md text-sm font-medium hover:border-white/50 hover:text-white transition-all text-center"
            >
              Se våre tjenester
            </a>
          </div>
        </div>

        {/* Right: image panel */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-[600px] hidden lg:block">
          {/* Blue accent bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ffffff] z-[3]" />
          <img
            src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/user_picture_800_crop-v4/image_uploads/ad1e67e5-90ff-43d4-ab8c-c8eea0884b77/original.jpg"
            alt="Helt Opplagt"
            className="w-full h-full object-cover block brightness-[0.7]"
          />
          {/* Label chip */}
          <div className="absolute bottom-8 left-7 bg-white/10 backdrop-blur-[12px] border border-white/15 rounded-lg px-[18px] py-3 z-[3]">
            <p className="text-[11px] text-white/60 mb-0.5 uppercase tracking-[0.08em]">
              Siden
            </p>
            <p className="text-[22px] font-bold text-white tracking-tight">
              1985
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
