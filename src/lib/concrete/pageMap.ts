/**
 * Route ↔ Concrete pageID mapping.
 *
 * The Concrete REST API looks pages up by numeric ID, not by path.
 * Fill in the IDs from the Concrete sitemap (hover a page in
 * Dashboard → Sitemap, or check the URL when editing: cID=...).
 *
 * Alternative: build a small custom API endpoint in a Concrete package
 * that resolves paths → IDs, or walk the tree from sites/default →
 * home_page_id at sync time.
 */
export const pageMap: Record<string, number | null> = {
  "/": 1, // home (local Docker test; on prod verify via GET /sites/default → home_page_id)
  "/tjenester/frukt": null,
  "/tjenester/frukt/fruktkurv": null,
  "/tjenester/frukt/jobbsmoothie": null,
  "/tjenester/frukt/vare-fruktrutiner": null,
  "/tjenester/lunsj": null,
  "/tjenester/kantine": null,
  "/tjenester/catering": null,
  "/tjenester/inneklima": null,
  "/tjenester/renhold": null,
  // ... fill in the rest when the API is enabled
};
