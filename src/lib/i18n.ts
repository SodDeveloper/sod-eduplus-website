export type Locale = "en" | "ar";

/** Path of the same page in the other language. Paths are without base path and end with "/". */
export function altPath(pathname: string, to: Locale): string {
  let p = pathname || "/";
  if (!p.endsWith("/")) p += "/";
  if (/^\/(ar\/)?(_not-found|404)\//.test(p)) p = "/";
  const isAr = p === "/ar/" || p.startsWith("/ar/");
  const en = isAr ? p.slice(3) || "/" : p;
  return to === "ar" ? (en === "/" ? "/ar/" : `/ar${en}`) : en;
}

/** Prefix a site path for a locale: lhref("ar", "/demo/") -> "/ar/demo/". */
export const lhref = (locale: Locale, path: string) => (locale === "ar" ? (path === "/" ? "/ar/" : `/ar${path}`) : path);

export const NAV_AR = [
  { href: "/ar/features/", label: "المزايا" },
  { href: "/ar/editions/", label: "الإصدارات" },
  { href: "/ar/portal/", label: "بوابة أولياء الأمور" },
  { href: "/ar/payments/", label: "المدفوعات" },
  { href: "/ar/pricing/", label: "الأسعار" },
  { href: "/ar/about/", label: "من نحن" },
  { href: "/ar/contact/", label: "تواصل معنا" },
];

export const COUNTRIES_AR: Record<string, string> = { ae: "الإمارات", qa: "قطر", in: "الهند" };

export const CORE_LINE_AR =
  "SOD EduPlus نظام مبتكر لتخطيط موارد المدارس (ERP) يدير القبول والشؤون الأكاديمية والرسوم والتواصل مع أولياء الأمور في مكان واحد.";
