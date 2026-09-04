/** Norwegian number formatting with a plain space as the thousands separator: 12000 → "12 000". */
export function formatNb(n: number): string {
  return Math.round(n)
    .toLocaleString("nb-NO")
    .replace(/[  ]/g, " ");
}
