/**
 * Concrete CMS headless configuration.
 *
 * NOTE: auth.ts (client secret) must only run server-side — in the
 * sync-content build script or a BFF proxy. Never expose the secret
 * in Vite client code (anything prefixed VITE_ is public!).
 */
export interface ConcreteConfig {
  /** e.g. https://heltopplagt.no */
  baseUrl: string;
  clientId: string;
  clientSecret: string;
  /** Space-separated OAuth2 scopes, e.g. "site:read pages:read files:read" */
  scopes: string;
}

export function getConcreteConfig(): ConcreteConfig {
  const env = process.env;
  const baseUrl = env.CONCRETE_BASE_URL;
  const clientId = env.CONCRETE_CLIENT_ID;
  const clientSecret = env.CONCRETE_CLIENT_SECRET;

  if (!baseUrl || !clientId || !clientSecret) {
    throw new Error(
      "Missing Concrete CMS config. Set CONCRETE_BASE_URL, CONCRETE_CLIENT_ID and CONCRETE_CLIENT_SECRET (see .env.example)."
    );
  }

  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    clientId,
    clientSecret,
    // Empty by default: 8.5 and 9.x expose different scopes.
    // For 9.2+ content pulling set e.g. "site:read pages:read files:read".
    scopes: env.CONCRETE_SCOPES ?? "",
  };
}
