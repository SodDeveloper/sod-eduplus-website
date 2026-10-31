import { Check } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata = pageMetaAr("الأسعار", "تُسعَّر باقات SOD EduPlus لكل طالب سنويًا حسب الإصدار، وتشمل الإعداد ونقل البيانات والتدريب والدعم. اطلب عرض سعر.", "/pricing/");

const INCLUDED = ["الإعداد والتهيئة", "نقل البيانات من نظامك الحالي", "تدريب الموظفين", "دعم مستمر", "عرض تجريبي مجاني قبل اتخاذ القرار"];

export default function PricingPageAr() {
  return (
    <>
      <PageHero eyebrow="الأسعار" title="أسعار بسيطة، بعرض مخصّص لمدرستك" body="يُسعَّر SOD EduPlus لكل طالب سنويًا حسب الإصدار، وتحصل المجموعات التعليمية على عرض سعر مخصّص.">
        <ButtonLink href="#quote" size="lg">تحدّث مع فريق المبيعات</ButtonLink>
        <ButtonLink href="/ar/demo/" variant="ghostLight" size="lg">اطلب عرضًا تجريبيًا</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">ما تتضمنه كل باقة</h2>
            <ul className="mt-6 space-y-3">
              {INCLUDED.map((t) => <li key={t} className="flex gap-3 text-lg text-ink/80"><Check className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden />{t}</li>)}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[{ n: "Lite", ar: "الإصدار المختصر", b: "الوحدات الأساسية للمدارس الأصغر حجمًا." }, { n: "Full", ar: "الإصدار الكامل", b: "نظام ERP المدرسي المبتكر بكامل وحداته." }].map((e) => (
                <div key={e.n} className="rounded-2xl bg-mist p-6">
                  <h3 className="text-lg font-extrabold text-navy">{e.ar} ({e.n})</h3>
                  <p className="mt-1 text-sm text-ink/70">{e.b}</p>
                  <p className="mt-4 font-semibold text-teal">تواصل معنا للحصول على عرض سعر</p>
                </div>
              ))}
            </div>
          </div>
          <div id="quote" className="scroll-mt-24 rounded-3xl border border-navy/10 bg-white p-6 card-shadow sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy">اطلب عرض سعر</h2>
            <p className="mt-2 text-sm text-ink/65">أخبرنا عن مدرستك وسنرسل إليك عرض سعر خلال يوم عمل واحد.</p>
            <ContactForm kind="pricing" locale="ar" />
          </div>
        </Container>
      </section>
    </>
  );
}
