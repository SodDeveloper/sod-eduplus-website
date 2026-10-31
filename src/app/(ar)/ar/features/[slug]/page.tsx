import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { MODULES_AR } from "@/lib/modules-ar";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const dynamicParams = false;
export function generateStaticParams() { return MODULES.map((m) => ({ slug: m.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = MODULES_AR[slug];
  if (!a) return {};
  return pageMetaAr(`وحدة ${a.name}`, `${a.intro} جزء من SOD EduPlus، نظام ERP المبتكر لإدارة المدارس.`, `/features/${slug}/`);
}

function editionsLine(full: boolean, lite: boolean) {
  if (full && lite) return "متوفر في: الإصدارين الكامل (Full) والمختصر (Lite).";
  if (full) return "متوفر في: الإصدار الكامل (Full) فقط.";
  return "متوفر في: الإصدار المختصر (Lite).";
}

export default async function ModulePageAr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = MODULES.find((x) => x.slug === slug);
  if (!m) notFound();
  const a = MODULES_AR[m.slug];
  const others = MODULES.filter((x) => x.slug !== m.slug).slice(0, 6);
  return (
    <>
      <PageHero eyebrow={`المزايا · ${a.name}`} title={`${a.name} في SOD EduPlus`} body={a.intro}>
        <ButtonLink href="/ar/demo/" size="lg">اطلب عرضًا تجريبيًا</ButtonLink>
        <ButtonLink href="/ar/features/" variant="ghostLight" size="lg">جميع المزايا</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">ما ستحصل عليه</h2>
            <ul className="mt-6 space-y-4">
              {a.benefits.map((b) => <li key={b} className="flex gap-3 text-lg text-ink/80"><Check className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden />{b}</li>)}
            </ul>
            <p className="mt-8 text-sm text-ink/60">{editionsLine(m.editions.full, m.editions.lite)}</p>
          </div>
          {m.video ? <MotionScreen locale="ar" name={m.video} label={`${a.name} في SOD EduPlus أثناء العمل`} /> : <Shot name={m.shot} alt={`شاشة ${a.name} في SOD EduPlus`} eager />}
        </Container>
        {m.video ? <Container className="mt-12"><Shot name={m.shot} alt={`شاشة ${a.name} في SOD EduPlus`} /></Container> : null}
      </section>
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading title="يعمل مع بقية أنظمة المدرسة" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => <li key={o.slug}><Link href={`/ar/features/${o.slug}/`} className="block rounded-2xl bg-white p-5 card-shadow hover:-translate-y-0.5 transition"><span className="font-bold text-navy">{MODULES_AR[o.slug].name}</span><span className="mt-1 block text-sm text-ink/65">{MODULES_AR[o.slug].short}</span></Link></li>)}
          </ul>
          <Link href="/ar/features/" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal hover:underline"><ArrowRight className="h-4 w-4" aria-hidden /> العودة إلى جميع المزايا</Link>
        </Container>
      </section>
      <CtaBand locale="ar" />
    </>
  );
}
