import Link from "next/link";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, COUNTRIES, NAV, withBase } from "@/lib/site";
import { COUNTRIES_AR, NAV_AR, type Locale } from "@/lib/i18n";
import { MODULES } from "@/lib/modules";
import { MODULES_AR } from "@/lib/modules-ar";
import { ButtonLink, Container } from "@/components/ui";

const T = {
  en: { tag: "The innovative school ERP from SOD Infotech.", demo: "Request a demo", product: "Product", modules: "Modules", company: "Company", about: "About", contact: "Contact", blog: "Blog", email: "Email", rights: "SOD Infotech. All rights reserved." },
  ar: { tag: "نظام ERP المدرسي المبتكر من SOD Infotech.", demo: "اطلب عرضًا تجريبيًا", product: "المنتج", modules: "الوحدات", company: "الشركة", about: "من نحن", contact: "تواصل معنا", blog: "المدونة", email: "راسلنا على", rights: "SOD Infotech. جميع الحقوق محفوظة." },
};

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = T[locale];
  const ar = locale === "ar";
  const p = (path: string) => (ar ? `/ar${path}` : path);
  const nav = ar ? NAV_AR : NAV;
  return (
    <footer className="bg-navy-deep text-white/75">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/brand/logo-horizontal-on-dark.png")} alt="SOD EduPlus" width={480} height={105} className="h-8 w-auto" loading="lazy" />
          <p className="mt-4 text-sm leading-relaxed">{t.tag}</p>
          <ButtonLink href={p("/demo/")} className="mt-5">{t.demo}</ButtonLink>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">{t.product}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.slice(0, 5).map((n) => <li key={n.href}><Link className="hover:text-mint" href={n.href}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">{t.modules}</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            {MODULES.slice(0, 7).map((m) => <li key={m.slug}><Link className="hover:text-mint" href={p(`/features/${m.slug}/`)}>{ar ? MODULES_AR[m.slug].name : m.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">{t.company}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-mint" href={p("/about/")}>{t.about}</Link></li>
            <li><Link className="hover:text-mint" href={p("/contact/")}>{t.contact}</Link></li>
            <li><Link className="hover:text-mint" href={p("/blog/")}>{t.blog}</Link></li>
            <li><a className="inline-flex items-center gap-2 break-all hover:text-mint" href={`mailto:${CONTACT_EMAIL}`} aria-label={`${t.email} ${CONTACT_EMAIL}`}><Mail className="h-4 w-4 shrink-0" aria-hidden /><span dir="ltr">{CONTACT_EMAIL}</span></a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {t.rights}</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {COUNTRIES.map(({ code: c, name: n }, i) => (
              <span key={c} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-white/30" aria-hidden>|</span>}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBase(`/flags/${c}.svg`)} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-white/20" loading="lazy" />
                {ar ? COUNTRIES_AR[c] : n}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </footer>
  );
}
