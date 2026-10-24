import { LEAD_ENDPOINT } from "@/lib/site";

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$/;
export const PHONE_RE = /^\+?[0-9][0-9 ()\-]{6,19}$/;
export const isPreviewMode = () => !LEAD_ENDPOINT;

export async function postLead(body: Record<string, unknown>): Promise<Response> {
  return fetch(LEAD_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
}

export async function readJson(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return null;
  try { return JSON.parse(text) as unknown; } catch { return null; }
}
