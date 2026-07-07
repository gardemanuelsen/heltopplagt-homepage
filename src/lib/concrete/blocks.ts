import type { ContentBlock } from "../../app/components/ServicePage";
import type { ConcreteBlock, ConcretePage } from "./types";

/**
 * Mapping layer: Concrete CMS blocks → our frontend ContentBlock model.
 *
 * This is the heart of the "hybrid headless" setup: editors add/edit blocks
 * in Concrete's dashboard, and this file decides which of our React
 * components render them. Extend the switch below as we map more block
 * types (including custom block types we create in Concrete for things
 * like price tables and service cards).
 */

export function mapConcreteBlock(block: ConcreteBlock): ContentBlock | null {
  switch (block.type) {
    // Core "Content" block (rich text). The value contains HTML —
    // for now we strip it to paragraphs; later we can render sanitized
    // HTML with a dedicated block type.
    case "content": {
      const html = String(block.value.content ?? "");
      const paragraphs = htmlToParagraphs(html);
      return paragraphs.length ? { type: "text", paragraphs } : null;
    }

    // Core "Image" block — value contains a file ID (fID). The build
    // script resolves file IDs to URLs via the Files API and stores the
    // resolved URL in value.resolvedUrl.
    case "image": {
      const src = String(block.value.resolvedUrl ?? "");
      return src
        ? { type: "image", src, alt: String(block.value.altText ?? "") }
        : null;
    }

    // Custom block types we plan to create in Concrete.
    // Editors get a simple form; the frontend owns the design.
    case "ho_bullets":
      return {
        type: "bullets",
        heading: block.value.heading as string | undefined,
        items: (block.value.items as string[]) ?? [],
      };

    case "ho_price_table":
      return {
        type: "table",
        heading: block.value.heading as string | undefined,
        rows: (block.value.rows as string[][]) ?? [],
        footnote: block.value.footnote as string | undefined,
      };

    case "ho_cards":
      return {
        type: "cards",
        heading: block.value.heading as string | undefined,
        items:
          (block.value.items as {
            title: string;
            description?: string;
            image?: string;
          }[]) ?? [],
      };

    default:
      // Unknown block type — log during sync so we notice gaps.
      console.warn(`[concrete] Unmapped block type: ${block.type}`);
      return null;
  }
}

/**
 * Normalize page.areas — the docs describe an array, but real 9.x
 * responses may return an object keyed by area name.
 */
/** Unwrap Concrete 9.x nested `{ data: ... }` envelopes. */
function unwrap<T>(value: unknown): T {
  if (value && typeof value === "object" && "data" in (value as object)) {
    return (value as { data: T }).data;
  }
  return value as T;
}

export function getAreas(
  page: ConcretePage
): { name: string; blocks: ConcreteBlock[] }[] {
  const areas = unwrap<unknown>(page.areas as unknown);
  if (!areas) return [];
  const toArea = (name: string, v: unknown) => {
    const area = v as { name?: string; blocks?: unknown } | null;
    const blocks = unwrap<unknown>(area?.blocks);
    return {
      name: area?.name ?? name,
      blocks: Array.isArray(blocks) ? (blocks as ConcreteBlock[]) : [],
    };
  };

  if (Array.isArray(areas)) {
    return areas.map((a, i) => toArea(String(i), a));
  }
  if (typeof areas === "object") {
    return Object.entries(areas as Record<string, unknown>).map(([name, v]) =>
      toArea(name, v)
    );
  }
  return [];
}

/**
 * Map blocks to our ContentBlock model. If areaName is given, only that
 * area; otherwise all areas in order.
 */
export function mapPageContent(
  page: ConcretePage,
  areaName?: string
): ContentBlock[] {
  const areas = getAreas(page).filter(
    (a) => !areaName || a.name === areaName
  );
  return areas
    .flatMap((a) => a.blocks)
    .map(mapConcreteBlock)
    .filter((b): b is ContentBlock => b !== null);
}

/** Very small HTML → plain paragraphs helper (build-time use). */
function htmlToParagraphs(html: string): string[] {
  return html
    .split(/<\/p>|<br\s*\/?>/i)
    .map((part) =>
      part
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean);
}
