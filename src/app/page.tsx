import Link from "next/link";
import { withBase } from "@/lib/site";
import {
  ArrowRight, BookOpen, Bus, CalendarCheck, Check, ClipboardList, CreditCard, GraduationCap, Languages,
  LayoutDashboard, Megaphone, Smartphone, UserPlus, Users, Wallet,
} from "lucide-react";
import { MODULES } from "@/lib/modules";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = {
  ...pageMeta(
    "Innovative school ERP",
    "SOD EduPlus is an innovative school ERP for admissions, academics, attendance, fees, library, canteen, transport and parent communication in one place.",
    "/",
    "/og-home.jpg",
  ),
  title: { absolute: "SOD EduPlus | Innovative school ERP" },
};

const ICONS: Record<string, typeof UserPlus> = {
  admissions: UserPlus, academics: GraduationCap, attendance: CalendarCheck, exams: ClipboardList, fees: CreditCard,
  "hr-payroll": Users, library: BookOpen, canteen: Wallet, transport: Bus, announcements: Megaphone, dashboards: LayoutDashboard,
};

const MESSAGES = [
  { title: "One system for the whole school", body: "Replace spreadsheets and disconnected apps with one connected system." },
  { title: "Collect fees faster", body: "Online payments, automatic reminders and instant receipts." },
  { title: "Parents stay informed", body: "A portal for results, attendance, fees and notices." },
  { title: "Clear dashboards for leaders", body: "Principal and admin views of every module, every morning." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient relative overflow-hidden text-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Run your whole school from <span className="text-gradient">one place</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              SOD EduPlus brings admissions, academics, fees and parent communication together, so your team spends less time on admin and more time on students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/demo/" size="lg">Request a demo <ArrowRight className="h-4 w-4" aria-hidden /></ButtonLink>
              <ButtonLink href="/features/" variant="ghostLight" size="lg">Explore features</ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              {["Full and Lite editions", "Parent portal on mobile", "English and Arabic"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-mint" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative pb-10 lg:pb-12 lg:pr-10">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
              <div className="flex items-center gap-1.5 border-b border-navy/10 bg-[#f1f4f8] px-4 py-2.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-ink/50">SOD EduPlus · Principal dashboard</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/shots/hero_dashboard.webp")} alt="SOD EduPlus principal dashboard" width={2400} height={1500} className="block h-auto w-full" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-2 right-0 w-[26%] max-w-[190px] overflow-hidden rounded-[1.6rem] border-[5px] border-navy-deep bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/shots/hero_portal.webp")} alt="SOD EduPlus parent portal on mobile" width={720} height={1558} className="block h-auto w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Messages */}
      <section className="border-b border-navy/10 bg-white">
        <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {MESSAGES.map((m) => (
            <div key={m.title}>
              <h2 className="text-base font-bold text-navy">{m.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.body}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Module grid */}
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <SectionHeading center eyebrow="Modules" title="Every part of school life, connected" body="Start with the modules you need today and switch on more as your school grows." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = ICONS[m.slug] ?? LayoutDashboard;
              return (
                <li key={m.slug}>
                  <Link href={`/features/${m.slug}/`} className="group flex h-full gap-4 rounded-2xl bg-white p-5 card-shadow transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-teal">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon className="h-5 w-5" aria-hidden /></span>
                    <span>
                      <span className="block font-bold text-navy group-hover:text-teal">{m.name}</span>
                      <span className="mt-1 block text-sm text-ink/65">{m.short}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Dashboards" title="Your school at a glance, every morning" body="Principals see attendance, admissions, fees and pending approvals on one screen. Finance teams get their own view of collections and outstanding balances." />
            <ul className="mt-6 space-y-3">
              {["Principal and finance dashboards", "Quick access to approvals, attendance and exams", "Drill down from any number to the record behind it"].map((t) => (
                <li key={t} className="flex gap-3 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link href="/demo/" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal hover:underline">Request a demo <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <Shot name="01b_finance_dashboard" alt="SOD EduPlus finance dashboard with fee collection figures" />
        </Container>
      </section>

      {/* Editions teaser */}
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <SectionHeading center eyebrow="Editions" title="Full or Lite: start small and grow" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { name: "SOD EduPlus Full", body: "The complete innovative school ERP with every module.", tag: "For established and multi-campus schools" },
              { name: "SOD EduPlus Lite", body: "The essential modules for smaller schools.", tag: "For smaller and growing schools" },
            ].map((e) => (
              <div key={e.name} className="rounded-3xl bg-white p-8 card-shadow">
                <p className="text-xs font-bold uppercase tracking-widest text-teal">{e.tag}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-navy">{e.name}</h3>
                <p className="mt-3 text-ink/70">{e.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/demo/">Try the demo</ButtonLink>
                  <ButtonLink href="/editions/" variant="outline">Compare editions</ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portal + payments */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-teal"><Smartphone className="h-5 w-5" aria-hidden /><span className="text-xs font-bold uppercase tracking-[0.18em]">Parent & student portal</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">Families see what matters, on their phone</h2>
            <p className="mt-4 text-lg text-ink/70">Results, attendance, fees, library and announcements in one mobile-friendly portal.</p>
            <MotionScreen name="03_parent_portal_mobile" label="Parent portal on a mobile phone" className="mt-8" />
            <Link href="/portal/" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:underline">See the portal <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-teal"><CreditCard className="h-5 w-5" aria-hidden /><span className="text-xs font-bold uppercase tracking-[0.18em]">Online payments</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">Fees collected online, reconciled automatically</h2>
            <p className="mt-4 text-lg text-ink/70">Online fee payment, instant receipts, reminders and canteen wallet top-ups.</p>
            <MotionScreen name="02_fees_payments" label="Online fee payment and receipts" className="mt-8" />
            <Link href="/payments/" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:underline">How payments work <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </Container>
      </section>

      {/* Bilingual */}
      <section className="brand-gradient py-16 text-white sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-mint"><Languages className="h-5 w-5" aria-hidden /><span className="text-xs font-bold uppercase tracking-[0.18em]">English and Arabic</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Bilingual and right-to-left ready</h2>
            <p className="mt-4 text-lg text-white/80">Staff, parents and students can use SOD EduPlus in English or Arabic, with a full right-to-left interface.</p>
          </div>
          <MotionScreen name="05_arabic_rtl" label="SOD EduPlus dashboard in Arabic, right to left" className="ring-1 ring-white/15" />
        </Container>
      </section>

      {/* Pilot strip (placeholder until names are approved) */}
      <section className="py-14">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ink/50">Trusted by schools</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Client logos (placeholders)">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex h-16 items-center justify-center rounded-xl border border-dashed border-navy/20 text-sm text-ink/40">[Client logo]</li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
