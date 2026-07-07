import { getConcreteConfig } from "./config";

/**
 * OAuth2 client_credentials flow against Concrete CMS.
 * Token endpoint: POST {baseUrl}/oauth/2.0/token
 *
 * SERVER-SIDE ONLY — uses the client secret.
 */

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

export async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 30_000) {
    return cachedToken.token;
  }

  const { baseUrl, clientId, clientSecret, scopes } = getConcreteConfig();

  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });
  // Scopes differ between Concrete versions (8.5 vs 9.2+).
  // Leave CONCRETE_SCOPES empty to request the default scope.
  if (scopes.trim()) params.set("scope", scopes);

  const res = await fetch(`${baseUrl}/oauth/2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!res.ok) {
    throw new Error(
      `Concrete OAuth2 token request failed: ${res.status} ${await res.text()}`
    );
  }

  const data = (await res.json()) as TokenResponse;
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return data.access_token;
}
