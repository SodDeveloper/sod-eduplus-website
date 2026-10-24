import type { NextConfig } from "next";

// PAGES_BASE_PATH is set only for the GitHub Pages preview (served from /sod-eduplus-website).
// The production build for sodeduplus.com leaves it empty so the export works at the domain root.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
