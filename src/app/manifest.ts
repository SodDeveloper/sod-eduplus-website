import type { MetadataRoute } from "next";
import { withBase } from "@/lib/site";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SOD EduPlus",
    short_name: "EduPlus",
    description: "SOD EduPlus - innovative school ERP",
    start_url: withBase("/"),
    display: "standalone",
    theme_color: "#252F78",
    background_color: "#F4F6FB",
    icons: [
      { src: withBase("/android-chrome-192x192.png"), sizes: "192x192", type: "image/png" },
      { src: withBase("/android-chrome-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}
