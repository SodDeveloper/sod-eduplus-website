import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { KG } from "@/lib/kindergarten";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero, Shot } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMeta("Features by module", "Admissions, academics, attendance, exams, fees, HR and payroll, library, canteen wallets, transport, announcements and dashboards in one innovative school ERP.", "/features/");

export default function FeaturesPage() {
  return (
    <>
      <PageHero eyebrow="Features" title="Every module your school needs" body="Each module works on its own and shares data with the rest, so information is entered once and used everywhere.">
        <ButtonLink href="/demo/" size="lg">Request a demo</ButtonLink>
      </PageHero>
      <nav aria-label="Modules" className="sticky top-16 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
        <Container className="no-scrollbar flex gap-2 overflow-x-auto py-3 lg:flex-wrap lg:justify-center lg:overflow-visible">
          {MODULES.map((m) => <a key={m.slug} href={`#${m.slug}`} className="shrink-0 rounded-full bg-mist px-3 py-1.5 text-sm font-medium text-navy hover:bg-teal/10">{m.name}</a>)}
          <a href="#kindergarten" className="shrink-0 rounded-full bg-mist px-3 py-1.5 text-sm font-medium text-navy hover:bg-teal/10">{KG.en.name}</a>
        </Container>
      </nav>
      {MODULES.map((m, i) => (
        <section key={m.slug} id={m.slug} className={i % 2 ? "scroll-mt-32 bg-mist py-16" : "scroll-mt-32 py-16"}>
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy">{m.name}</h2>
              <p className="mt-4 text-lg text-ink/70">{m.intro}</p>
              <ul className="mt-6 space-y-3">
                {m.benefits.map((b) => <li key={b} className="flex gap-3 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{b}</li>)}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/demo/">Request a demo</ButtonLink>
                <Link href={`/features/${m.slug}/`} className="inline-flex items-center gap-1 font-semibold text-teal hover:underline">More about {m.name} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              </div>
            </div>
            <Shot name={m.shot} alt={`SOD EduPlus ${m.name} screen`} />
          </Container>
        </section>
      ))}
      <section id="kindergarten" className="scroll-mt-32 brand-gradient py-16 text-white">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{KG.en.name}</h2>
            <p className="mt-4 text-lg text-white/80">{KG.en.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/features/kindergarten/" variant="light" size="lg">{KG.en.learn} <ArrowRight className="h-4 w-4" aria-hidden /></ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
