import type { MetadataRoute } from "next";
import { MODULES } from "@/lib/modules";
import { abs } from "@/lib/meta";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/features/", "/editions/", "/portal/", "/payments/", "/demo/", "/pricing/", "/about/", "/contact/", "/blog/"];
  return [
    ...pages.map((p) => ({ url: abs(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : p === "/demo/" ? 0.9 : 0.7 })),
    ...MODULES.map((m) => ({ url: abs(`/features/${m.slug}/`), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
