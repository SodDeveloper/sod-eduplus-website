"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, withBase } from "@/lib/site";
import { btn, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-navy focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="SOD EduPlus home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/brand/logo-horizontal-colour.png")} alt="SOD EduPlus" width={480} height={105} className="h-8 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
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
          <Link href="/demo/" className={cn(btn("primary"), "hidden sm:inline-flex")}>Request a demo</Link>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-mist lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist">{item.label}</Link>
            ))}
            <Link href="/blog/" className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist">Blog</Link>
            <Link href="/demo/" className={cn(btn("primary", "lg"), "mt-2")}>Request a demo</Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
