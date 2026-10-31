import Link from "next/link";
import { ArrowLeft, ArrowRight, Baby, BookHeart, CalendarClock, Globe2, Languages, Receipt, ShieldCheck, Smartphone, Users, type LucideIcon } from "lucide-react";
import { KG, type KgIcon } from "@/lib/kindergarten";
import type { Locale } from "@/lib/i18n";
import { ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta";

const ICONS: Record<KgIcon, LucideIcon> = {
  frameworks: Globe2, journal: BookHeart, diary: Baby, attendance: CalendarClock, pickup: ShieldCheck,
  rooms: Users, billing: Receipt, portal: Smartphone, languages: Languages,
};

export function KindergartenPage({ locale }: { locale: Locale }) {
  const t = KG[locale];
  const ar = locale === "ar";
  const p = (path: string) => (ar ? `/ar${path}` : path);
  const Back = ar ? ArrowRight : ArrowLeft;
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} body={t.intro}>
        <span className="inline-flex items-center rounded-full bg-mint/20 px-4 py-2 text-sm font-bold text-mint ring-1 ring-mint/40">{t.badge}</span>
        <ButtonLink href={p("/demo/")} size="lg">{t.demo}</ButtonLink>
        <ButtonLink href={p("/contact/")} variant="ghostLight" size="lg">{t.contact}</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container>
          <div className="mb-10 rounded-2xl border border-teal/30 bg-teal/5 p-5">
            <p className="font-bold text-navy">{t.statusTitle}</p>
            <p className="mt-1 text-sm text-ink/70">{t.statusBody}</p>
          </div>
          <SectionHeading title={t.whatTitle} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <li key={f.t} className="rounded-2xl bg-white p-6 card-shadow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon className="h-5 w-5" aria-hidden /></span>
                  <h3 className="mt-4 font-bold text-navy">{f.t}</h3>
                  <p className="mt-1 text-sm text-ink/70">{f.b}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title={t.marketsTitle} body={t.marketsBody} />
          </div>
          <div className="rounded-3xl bg-white p-8 card-shadow">
            <h2 className="text-2xl font-extrabold text-navy">{t.editionsTitle}</h2>
            <p className="mt-3 text-ink/70">{t.editionsBody}</p>
          </div>
        </Container>
        <Container>
          <Link href={p("/features/")} className="mt-10 inline-flex items-center gap-2 font-semibold text-teal hover:underline"><Back className="h-4 w-4" aria-hidden /> {t.all}</Link>
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
