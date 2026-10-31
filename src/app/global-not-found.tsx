import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ButtonLink, Container } from "@/components/ui";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = { title: "Page not found | SOD EduPlus", robots: { index: false, follow: false } };

export default function GlobalNotFound() {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main id="main">
          <Container className="py-28 text-center">
            <h1 className="text-4xl font-extrabold text-navy">Page not found</h1>
            <p className="mt-3 text-ink/70">The page you are looking for does not exist.</p>
            <ButtonLink href="/" size="lg" className="mt-8">Back to home</ButtonLink>
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
