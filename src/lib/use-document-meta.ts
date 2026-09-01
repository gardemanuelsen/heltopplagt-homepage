import { useEffect } from "react";

const SITE_NAME = "Helt Opplagt";

/** Sets the document title and meta description for the current route. No head-management library needed for a page count this small. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} — ${SITE_NAME}`;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? null;
    meta?.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta?.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
