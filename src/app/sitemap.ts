import type { MetadataRoute } from "next";
import { MODULES } from "@/lib/modules";
import { abs, languages } from "@/lib/meta";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/features/", "/editions/", "/portal/", "/payments/", "/demo/", "/pricing/", "/about/", "/contact/", "/blog/"];
  const ar = (p: string) => (p === "/" ? "/ar/" : `/ar${p}`);
  const entries = [
    ...pages.map((p) => ({ p, priority: p === "/" ? 1 : p === "/demo/" ? 0.9 : 0.7 })),
    ...MODULES.map((m) => ({ p: `/features/${m.slug}/`, priority: 0.6 })),
    { p: "/features/kindergarten/", priority: 0.6 },
  ];
  return entries.flatMap(({ p, priority }) => [
    { url: abs(p), changeFrequency: "monthly" as const, priority, alternates: { languages: languages(p) } },
    { url: abs(ar(p)), changeFrequency: "monthly" as const, priority, alternates: { languages: languages(p) } },
  ]);
}
