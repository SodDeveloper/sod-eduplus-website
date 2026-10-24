import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/site";
import { abs } from "@/lib/meta";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // The GitHub Pages preview stays out of search; the sodeduplus.com build is indexable.
  if (BASE_PATH) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: abs("/sitemap.xml") };
}
