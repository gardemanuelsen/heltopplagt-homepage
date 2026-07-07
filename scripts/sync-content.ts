/**
 * Build-time content sync from Concrete CMS.
 *
 * Fetches every page in pageMap from the Concrete REST API, maps blocks
 * to our ContentBlock model and writes JSON to src/content/. The frontend
 * imports these JSON files — no runtime dependency on Concrete, and the
 * OAuth2 secret never reaches the browser.
 *
 * Usage:
 *   1. Copy .env.example → .env and fill in the Concrete credentials
 *   2. npx tsx scripts/sync-content.ts
 *
 * Wire this into CI and trigger it with a build hook when editors publish.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { getPage, getDefaultSite } from "../src/lib/concrete/client";
import { mapPageContent } from "../src/lib/concrete/blocks";
import { pageMap } from "../src/lib/concrete/pageMap";

const OUT_DIR = fileURLToPath(new URL("../src/content/", import.meta.url));

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const site = await getDefaultSite();
  console.log(`Connected to site "${site.name}" (home page #${site.home_page_id})`);

  for (const [route, pageID] of Object.entries(pageMap)) {
    if (!pageID) {
      console.log(`SKIP  ${route} (no pageID mapped yet)`);
      continue;
    }

    const page = await getPage(pageID);

    // Dump the raw API response too, so we can inspect the real shape
    // and refine the block mapping.
    const rawName = route === "/" ? "home" : route.slice(1).replaceAll("/", "__");
    await mkdir(join(OUT_DIR, "_raw"), { recursive: true });
    await writeFile(
      join(OUT_DIR, "_raw", `${rawName}.json`),
      JSON.stringify(page, null, 2),
      "utf8"
    );

    const blocks = mapPageContent(page);

    const out = {
      route,
      pageID,
      name: page.name,
      description: page.description,
      lastUpdated: page.date_last_updated,
      blocks,
    };

    const filename = route === "/" ? "home" : route.slice(1).replaceAll("/", "__");
    await writeFile(
      join(OUT_DIR, `${filename}.json`),
      JSON.stringify(out, null, 2),
      "utf8"
    );
    console.log(`OK    ${route} → src/content/${filename}.json (${blocks.length} blocks)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
