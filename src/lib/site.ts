export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://sodeduplus.com").replace(/\/$/, "");
export const SITE_NAME = "SOD EduPlus";
export const TAGLINE = "Innovative school ERP";
export const CORE_LINE =
  "SOD EduPlus is an innovative school ERP that runs admissions, academics, fees and parent communication in one place.";

/**
 * Lead endpoint for the demo, contact and pricing forms. Single config value.
 * Defaults to the shared SOD website lead endpoint. Set NEXT_PUBLIC_LEAD_ENDPOINT=""
 * (or "off") at build time for preview mode: forms validate locally and nothing is sent.
 */
const RAW_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "https://erp.sodraqam.com/api/website-lead";
export const LEAD_ENDPOINT = RAW_ENDPOINT === "off" ? "" : RAW_ENDPOINT;
/**
 * "demo" (default): post type "demo" with product "eduplus"; the shared endpoint tags the lead
 * SOD EduPlus and returns { demos: { full, lite } }.
 * "contact": fallback that posts the demo request as a contact lead (no logins returned).
 */
export const LEAD_DEMO_TYPE = process.env.NEXT_PUBLIC_LEAD_DEMO_TYPE === "contact" ? "contact" : "demo";
export const PRODUCT = "SOD EduPlus";
/** Product key the shared endpoint uses to pick EduPlus tag, source and demo logins. */
export const PRODUCT_KEY = "eduplus";
export const LEAD_TAG = "SOD EduPlus";
export const LEAD_SOURCE = "Website - sodeduplus.com";

/**
 * Demo logins shown after a successful request when the endpoint does not return them.
 * Build-time values only; never commit real usernames or passwords. Empty = no login cards.
 */
const env = (v: string | undefined) => (v || "").trim();
export const DEMO_LOGINS = {
  full: { url: env(process.env.NEXT_PUBLIC_DEMO_FULL_URL), username: env(process.env.NEXT_PUBLIC_DEMO_FULL_USER), password: env(process.env.NEXT_PUBLIC_DEMO_FULL_PASSWORD) },
  lite: { url: env(process.env.NEXT_PUBLIC_DEMO_LITE_URL), username: env(process.env.NEXT_PUBLIC_DEMO_LITE_USER), password: env(process.env.NEXT_PUBLIC_DEMO_LITE_PASSWORD) },
};

/** WhatsApp click-to-chat number in international format without "+" (empty = button hidden). */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export function withBase(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

export const NAV = [
  { href: "/features/", label: "Features" },
  { href: "/editions/", label: "Editions" },
  { href: "/portal/", label: "Parent portal" },
  { href: "/payments/", label: "Payments" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const CONTACT_EMAIL = "contact@sodeduplus.com";

export const COUNTRIES = [
  { code: "ae", name: "UAE" },
  { code: "qa", name: "Qatar" },
  { code: "in", name: "India" },
];
