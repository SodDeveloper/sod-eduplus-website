import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BASE_PATH, CONTACT_EMAIL, SITE_URL, withBase } from "@/lib/site";
import { CORE_LINE_AR as CORE_LINE } from "@/lib/i18n";
import { abs } from "@/lib/meta";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-arabic", display: "swap" });

const isPreview = Boolean(BASE_PATH);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: { default: "SOD EduPlus | نظام ERP مبتكر لإدارة المدارس", template: "%s | SOD EduPlus" },
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
  openGraph: { images: [abs("/og-home.jpg")], locale: "ar" },
};

export const viewport: Viewport = { themeColor: "#252F78", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "SOD Infotech", url: SITE_URL, logo: abs("/android-chrome-512x512.png"), email: CONTACT_EMAIL },
    {
      "@type": "SoftwareApplication",
      name: "SOD EduPlus",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "School ERP",
      operatingSystem: "Web",
      description: CORE_LINE,
      url: SITE_URL,
      inLanguage: ["en", "ar"],
      publisher: { "@type": "Organization", name: "SOD Infotech" },
    },
  ],
};

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${jakarta.variable} ${arabic.variable}`}>
      <body className="min-h-screen font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header locale="ar" />
        <main id="main">{children}</main>
        <Footer locale="ar" />
      </body>
    </html>
  );
}
