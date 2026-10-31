import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { MODULES_AR } from "@/lib/modules-ar";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero, Shot } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMetaAr("المزايا حسب الوحدة", "القبول والشؤون الأكاديمية والحضور والاختبارات والرسوم والموارد البشرية والرواتب والمكتبة ومحافظ المقصف والنقل والإعلانات ولوحات المعلومات في نظام ERP مدرسي مبتكر واحد.", "/features/");

export default function FeaturesPageAr() {
  return (
    <>
      <PageHero eyebrow="المزايا" title="كل وحدة تحتاجها مدرستك" body="تعمل كل وحدة بشكل مستقل وتتشارك البيانات مع بقية الوحدات، فتُدخَل المعلومات مرة واحدة وتُستخدم في كل مكان.">
        <ButtonLink href="/ar/demo/" size="lg">اطلب عرضًا تجريبيًا</ButtonLink>
      </PageHero>
      <nav aria-label="الوحدات" className="sticky top-16 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
        <Container className="no-scrollbar flex gap-2 overflow-x-auto py-3 lg:flex-wrap lg:justify-center lg:overflow-visible">
          {MODULES.map((m) => <a key={m.slug} href={`#${m.slug}`} className="shrink-0 rounded-full bg-mist px-3 py-1.5 text-sm font-medium text-navy hover:bg-teal/10">{MODULES_AR[m.slug].name}</a>)}
        </Container>
      </nav>
      {MODULES.map((m, i) => {
        const a = MODULES_AR[m.slug];
        return (
          <section key={m.slug} id={m.slug} className={i % 2 ? "scroll-mt-32 bg-mist py-16" : "scroll-mt-32 py-16"}>
            <Container className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-extrabold tracking-tight text-navy">{a.name}</h2>
                <p className="mt-4 text-lg text-ink/70">{a.intro}</p>
                <ul className="mt-6 space-y-3">
                  {a.benefits.map((b) => <li key={b} className="flex gap-3 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{b}</li>)}
                </ul>
                {!m.editions.lite ? <p className="mt-4 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">متوفر في الإصدار الكامل (Full) فقط</p> : null}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/ar/demo/">اطلب عرضًا تجريبيًا</ButtonLink>
                  <Link href={`/ar/features/${m.slug}/`} className="inline-flex items-center gap-1 font-semibold text-teal hover:underline">المزيد عن {a.name} <ArrowLeft className="h-4 w-4" aria-hidden /></Link>
                </div>
              </div>
              <Shot name={m.shot} alt={`شاشة ${a.name} في SOD EduPlus`} />
            </Container>
          </section>
        );
      })}
      <CtaBand locale="ar" />
    </>
  );
}
