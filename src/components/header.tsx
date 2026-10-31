"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, withBase } from "@/lib/site";
import { altPath, NAV_AR, type Locale } from "@/lib/i18n";
import { btn, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const T = {
  en: { skip: "Skip to content", home: "SOD EduPlus home", main: "Main", mobile: "Mobile", demo: "Request a demo", blog: "Blog", open: "Open menu", close: "Close menu", lang: "Language" },
  ar: { skip: "انتقل إلى المحتوى", home: "الصفحة الرئيسية لـ SOD EduPlus", main: "القائمة الرئيسية", mobile: "قائمة الجوال", demo: "اطلب عرضًا تجريبيًا", blog: "المدونة", open: "فتح القائمة", close: "إغلاق القائمة", lang: "اللغة" },
};

function LangSwitch({ locale, pathname, className }: { locale: Locale; pathname: string; className?: string }) {
  const base = "rounded-full px-2.5 py-1 transition-colors";
  return (
    <div role="group" aria-label={T[locale].lang} className={cn("flex items-center gap-0.5 rounded-full border border-navy/15 p-0.5 text-sm font-semibold", className)}>
      {locale === "en" ? (
        <span aria-current="true" className={cn(base, "bg-navy text-white")}>English</span>
      ) : (
        <Link href={altPath(pathname, "en")} hrefLang="en" lang="en" className={cn(base, "text-ink/70 hover:bg-mist hover:text-navy")}>English</Link>
      )}
      {locale === "ar" ? (
        <span aria-current="true" className={cn(base, "bg-navy text-white")}>العربية</span>
      ) : (
        <Link href={altPath(pathname, "ar")} hrefLang="ar" lang="ar" className={cn(base, "text-ink/70 hover:bg-mist hover:text-navy")}>العربية</Link>
      )}
    </div>
  );
}

export function Header({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  useEffect(() => setOpen(false), [pathname]);
  const t = T[locale];
  const nav = locale === "ar" ? NAV_AR : NAV;
  const home = locale === "ar" ? "/ar/" : "/";
  const demo = locale === "ar" ? "/ar/demo/" : "/demo/";
  const blog = locale === "ar" ? "/ar/blog/" : "/blog/";

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-white">{t.skip}</a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={home} className="shrink-0" aria-label={t.home}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/brand/logo-horizontal-colour.png")} alt="SOD EduPlus" width={480} height={105} className="h-8 w-auto" />
        </Link>
        <nav aria-label={t.main} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname?.startsWith(item.href) ? "page" : undefined}
                  className={cn("rounded-full px-3 py-2 text-sm font-medium text-ink/75 hover:bg-mist hover:text-navy", pathname?.startsWith(item.href) && "text-navy bg-mist")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} pathname={pathname} className="hidden sm:flex" />
          <Link href={demo} className={cn(btn("primary"), "hidden sm:inline-flex")}>{t.demo}</Link>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-mist lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.close : t.open} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>
      {open ? (
        <nav id="mobile-nav" aria-label={t.mobile} className="border-t border-navy/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist">{item.label}</Link>
            ))}
            <Link href={blog} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist">{t.blog}</Link>
            <LangSwitch locale={locale} pathname={pathname} className="mt-2 self-start sm:hidden" />
            <Link href={demo} className={cn(btn("primary", "lg"), "mt-2")}>{t.demo}</Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
