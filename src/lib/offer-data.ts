export interface CompanySize {
  value: string;
  label: string;
  min: number;
  max: number;
}

export const companySizes: CompanySize[] = [
  { value: "1-9", label: "1–9 ansatte", min: 1, max: 9 },
  { value: "10-49", label: "10–49 ansatte", min: 10, max: 49 },
  { value: "50-199", label: "50–199 ansatte", min: 50, max: 199 },
  { value: "200+", label: "200+ ansatte", min: 200, max: 400 },
];

/**
 * Placeholder per-service price hints for the CTA estimate — swap in real figures before launch.
 */
export const servicePriceHints: Record<string, { rate: number; unit: string }> = {
  Frukt: { rate: 4, unit: "kr / ansatt / dag" },
  Lunsj: { rate: 45, unit: "kr / ansatt / dag" },
  Kantine: { rate: 65, unit: "kr / ansatt / dag" },
  Catering: { rate: 120, unit: "kr / person / arrangement" },
  Inneklima: { rate: 15, unit: "kr / ansatt / mnd" },
  Renhold: { rate: 25, unit: "kr / m² / mnd" },
};
