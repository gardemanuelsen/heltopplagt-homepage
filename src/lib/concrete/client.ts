import { getAccessToken } from "./auth";
import { getConcreteConfig } from "./config";
import type { ConcreteFile, ConcretePage, ConcreteSite } from "./types";

/**
 * Thin client for the Concrete CMS REST API (v1.0).
 * SERVER-SIDE ONLY (build script / BFF) — requests are authenticated.
 */

async function apiGet<T>(path: string): Promise<T> {
  const { baseUrl } = getConcreteConfig();
  const token = await getAccessToken();

  const res = await fetch(`${baseUrl}/ccm/api/1.0${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(
      `Concrete API GET ${path} failed: ${res.status} ${await res.text()}`
    );
  }

  // Concrete 9.x wraps responses in a { data, meta? } envelope.
  const json = (await res.json()) as { data?: T } | T;
  if (json && typeof json === "object" && "data" in json) {
    return (json as { data: T }).data;
  }
  return json as T;
}

/** Default site, incl. home_page_id — useful as tree entry point. */
export function getDefaultSite(): Promise<ConcreteSite> {
  return apiGet<ConcreteSite>("/sites/default?includes[]=locales");
}

/**
 * Fetch a page with its areas, blocks and rendered content.
 * @param version "active" (approved, default) or "recent" (draft — for preview mode)
 */
export function getPage(
  pageID: number,
  version: "active" | "recent" = "active"
): Promise<ConcretePage> {
  const includes = ["custom_attributes", "areas", "files", "content", "areas.content"]
    .map((i) => `includes[]=${i}`)
    .join("&");
  return apiGet<ConcretePage>(`/pages/${pageID}?${includes}&version=${version}`);
}

/** Fetch a file (image) — response includes the public URL. */
export function getFile(fileID: number | string): Promise<ConcreteFile> {
  return apiGet<ConcreteFile>(`/files/${fileID}?includes[]=custom_attributes`);
}

/** List files, newest first (max 100 per call, paginate with `after`). */
export function listFiles(limit = 100, after?: number): Promise<ConcreteFile[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (after) params.set("after", String(after));
  return apiGet<ConcreteFile[]>(`/files?${params}`);
}
