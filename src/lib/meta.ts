import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const abs = (path: string) => `${SITE_URL}${path}`;

export function pageMeta(title: string, description: string, path: string, og = "/og-generic.jpg"): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: abs(path) },
    openGraph: { title: full, description, url: abs(path), siteName: SITE_NAME, type: "website", locale: "en", images: [{ url: abs(og), width: 1200, height: 630, alt: "SOD EduPlus, innovative school ERP" }] },
    twitter: { card: "summary_large_image", title: full, description, images: [abs(og)] },
  };
}
