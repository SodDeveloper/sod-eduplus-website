import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const abs = (path: string) => `${SITE_URL}${path}`;

/** hreflang alternates for a page, given its English path. */
export function languages(enPath: string) {
  const ar = enPath === "/" ? "/ar/" : `/ar${enPath}`;
  return { en: abs(enPath), ar: abs(ar), "x-default": abs(enPath) };
}

export function pageMeta(title: string, description: string, path: string, og = "/og-generic.jpg"): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: abs(path), languages: languages(path) },
    openGraph: { title: full, description, url: abs(path), siteName: SITE_NAME, type: "website", locale: "en", images: [{ url: abs(og), width: 1200, height: 630, alt: "SOD EduPlus, innovative school ERP" }] },
    twitter: { card: "summary_large_image", title: full, description, images: [abs(og)] },
  };
}

/** Arabic page metadata. `enPath` is the English path of the same page. */
export function pageMetaAr(title: string, description: string, enPath: string, og = "/og-generic.jpg"): Metadata {
  const path = enPath === "/" ? "/ar/" : `/ar${enPath}`;
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: abs(path), languages: languages(enPath) },
    openGraph: { title: full, description, url: abs(path), siteName: SITE_NAME, type: "website", locale: "ar", images: [{ url: abs(og), width: 1200, height: 630, alt: "SOD EduPlus، نظام مبتكر لإدارة المدارس" }] },
    twitter: { card: "summary_large_image", title: full, description, images: [abs(og)] },
  };
}
