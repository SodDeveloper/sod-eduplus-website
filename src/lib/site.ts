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
 * "contact" (default): demo requests are posted as a contact lead so the product, tag and source
 * travel in the interest/message text the shared endpoint records.
 * "demo": post type "demo" and read { demos: { full, lite } } from a product-aware endpoint.
 */
export const LEAD_DEMO_TYPE = process.env.NEXT_PUBLIC_LEAD_DEMO_TYPE === "demo" ? "demo" : "contact";
export const PRODUCT = "SOD EduPlus";
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
export const CONTACT_EMAIL = "info@sodinfotech.com";

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

// Source: official SOD Infotech site https://sodinfotech.com/contact (branch list).
export const BRANCHES = [
  { name: "Doha office", address: "Building No 43, Street 46, Zone 46, Doha, Qatar" },
  { name: "Dubai office", address: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE", phone: "+971 58 907 4828" },
  { name: "Kochi office", address: "Jigsaw, Kandamkulathy Towers, MG Road, Ernakulam, Kerala 682011, India" },
];
