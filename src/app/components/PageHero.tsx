import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  chip?: { label: string; value: string };
  children?: ReactNode;
}

/**
 * Shared dark hero for all sub-pages — same visual language as the
 * front page hero (navy, grid texture, eyebrow with blue dash).
 * With `image` it renders a split layout, without it a wide text layout.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  chip,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-[rgb(17,31,55)] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`max-w-[1280px] mx-auto px-8 ${
          image ? "grid lg:grid-cols-2 lg:min-h-[520px]" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-center relative z-[2] ${
            image
              ? "pt-32 pb-16 lg:pt-36 lg:pb-20 lg:pr-14"
              : "pt-32 pb-16 lg:pt-40 lg:pb-24 max-w-[720px]"
          }`}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-0.5 bg-[#0078C4]" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#66aedc]">
              {eyebrow}
            </span>
          </div>

          <h1 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px]">
              {description}
            </p>
          )}

          {children}
        </div>

        {image && (
          <div className="relative overflow-hidden min-h-[280px] lg:min-h-[480px] hidden lg:block">
            <div className="absolute top-0 left-0 w-1 h-full bg-white z-[3]" />
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="w-full h-full object-cover block brightness-[0.75]"
            />
            {chip && (
              <div className="absolute bottom-8 left-7 bg-white/10 backdrop-blur-[12px] border border-white/15 rounded-lg px-[18px] py-3 z-[3]">
                <p className="text-[11px] text-white/60 mb-0.5 uppercase tracking-[0.08em]">
                  {chip.label}
                </p>
                <p className="text-[22px] font-bold text-white tracking-tight">
                  {chip.value}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
}

/** Header row with bottom border, matching the Services section on the front page. */
export function SectionHeader({ eyebrow, title, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-gray-200 pb-8">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
          {eyebrow}
        </p>
        <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]">
          {title}
        </h2>
      </div>
      {action && <div className="mt-4 md:mt-0 flex-shrink-0 mb-1">{action}</div>}
    </div>
  );
}
