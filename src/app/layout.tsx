import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BASE_PATH, CORE_LINE, SITE_URL, withBase } from "@/lib/site";
import { abs } from "@/lib/meta";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

const isPreview = Boolean(BASE_PATH);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: "SOD EduPlus | Innovative school ERP", template: "%s | SOD EduPlus" },
  description: CORE_LINE,
  applicationName: "SOD EduPlus",
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  icons: {
    icon: [
      { url: withBase("/favicon.ico"), sizes: "any" },
      { url: withBase("/favicon-32x32.png"), type: "image/png", sizes: "32x32" },
      { url: withBase("/favicon-16x16.png"), type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: withBase("/apple-touch-icon.png"), sizes: "180x180" }],
  },
  manifest: withBase("/manifest.webmanifest"),
  openGraph: { images: [abs("/og-home.jpg")] },
};

export const viewport: Viewport = { themeColor: "#252F78", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "SOD Infotech", url: SITE_URL, logo: abs("/android-chrome-512x512.png") },
    {
      "@type": "SoftwareApplication",
      name: "SOD EduPlus",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "School ERP",
      operatingSystem: "Web",
      description: CORE_LINE,
      url: SITE_URL,
      publisher: { "@type": "Organization", name: "SOD Infotech" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
