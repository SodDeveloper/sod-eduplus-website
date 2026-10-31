import { Baby, Check, Minus } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { KG } from "@/lib/kindergarten";
import { MODULES_AR } from "@/lib/modules-ar";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMetaAr("الإصدارات: الكامل مقابل المختصر", "قارن بين SOD EduPlus Full، نظام ERP المدرسي المبتكر بكامل وحداته، وSOD EduPlus Lite، الذي يضم الوحدات الأساسية للمدارس الأصغر حجمًا.", "/editions/");

const EXTRA = [
  { name: "مسيرات الرواتب ومكافأة نهاية الخدمة وملف نظام حماية الأجور (WPS)", full: true, lite: false },
  { name: "محاسبة متقدمة للرسوم (الإيرادات المؤجلة، والشطب، والمطابقة البنكية)", full: true, lite: false },
  { name: "بوابة أولياء الأمور والطلاب", full: true, lite: true },
  { name: "واجهة بالعربية والإنجليزية", full: true, lite: true },
];

function Mark({ on, label }: { on: boolean; label: string }) {
  return on ? <><Check className="mx-auto h-5 w-5 text-teal" aria-hidden /><span className="sr-only">مشمول في {label}</span></> : <><Minus className="mx-auto h-5 w-5 text-ink/30" aria-hidden /><span className="sr-only">غير مشمول في {label}</span></>;
}

export default function EditionsPageAr() {
  return (
    <>
      <PageHero eyebrow="الإصدارات" title="الكامل أو المختصر: اختر ما يناسبك" body="يشترك الإصداران في النواة نفسها والواجهة السهلة نفسها. ابدأ بالإصدار المختصر (Lite) وانتقل إلى الإصدار الكامل (Full) عندما تحتاج إلى المزيد." />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Full", ar: "الإصدار الكامل", body: "نظام ERP المدرسي المبتكر بكامل وحداته.", suits: ["المدارس الراسخة ذات الأقسام المتعددة", "المدارس التي تدير الرواتب والنقل والمقصف داخليًا", "المجموعات التعليمية والمدارس متعددة الفروع"] },
              { name: "Lite", ar: "الإصدار المختصر", body: "الوحدات الأساسية للمدارس الأصغر حجمًا.", suits: ["المدارس الصغيرة والمدارس حديثة الافتتاح", "الفرق التي تريد البدء بسرعة", "المدارس التي تخطط للانتقال إلى الإصدار الكامل لاحقًا"] },
            ].map((e) => (
              <div key={e.name} className="rounded-3xl border border-navy/10 bg-white p-8 card-shadow">
                <h2 className="text-2xl font-extrabold text-navy"><span dir="ltr">SOD EduPlus {e.name}</span></h2>
                <p className="mt-1 text-sm font-semibold text-teal">{e.ar}</p>
                <p className="mt-2 text-ink/70">{e.body}</p>
                <h3 className="mt-6 text-sm font-bold text-teal">مناسب لـ</h3>
                <ul className="mt-3 space-y-2">{e.suits.map((s) => <li key={s} className="flex gap-2 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{s}</li>)}</ul>
                <ButtonLink href="/ar/demo/" className="mt-8">جرّب العرض التجريبي لإصدار {e.name}</ButtonLink>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-navy/10">
            <table className="w-full table-fixed text-start text-sm">
              <caption className="sr-only">الوحدات حسب الإصدار</caption>
              <thead className="bg-mist text-navy">
                <tr><th scope="col" className="px-4 py-4 text-start font-bold sm:px-5">الوحدة</th><th scope="col" className="w-16 px-2 py-4 text-center font-bold sm:w-28 sm:px-5">Full</th><th scope="col" className="w-16 px-2 py-4 text-center font-bold sm:w-28 sm:px-5">Lite</th></tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {[...MODULES.map((m) => ({ name: m.slug === "hr-payroll" ? "الموارد البشرية وسجلات الموظفين" : MODULES_AR[m.slug].name, ...m.editions })), ...EXTRA].map((r) => (
                  <tr key={r.name}><th scope="row" className="px-4 py-3 text-start font-medium text-ink break-words sm:px-5">{r.name}</th><td className="px-2 py-3 sm:px-5"><Mark on={r.full} label="Full" /></td><td className="px-2 py-3 sm:px-5"><Mark on={r.lite} label="Lite" /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink/55">قد يختلف عمق الوحدات بين الإصدارين. اطلب منا التفاصيل الكاملة الخاصة بمدرستك.</p>

          <div className="mt-16 grid items-center gap-6 rounded-3xl border border-teal/30 bg-mist p-8 md:grid-cols-[auto_1fr_auto]">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal"><Baby className="h-7 w-7" aria-hidden /></span>
            <div>
              <p className="text-xs font-bold text-teal">إصدار مستقل</p>
              <h2 className="mt-1 flex flex-wrap items-center gap-2 text-2xl font-extrabold text-navy">{KG.ar.name}</h2>
              <p className="mt-2 text-ink/70">{KG.ar.short} EduPlus Kindergarten منتج مستقل له إصداران Lite وFull خاصّان به، وليس جزءًا من إصدارات المدارس (K-12) المذكورة أعلاه.</p>
              <p className="mt-2 text-sm text-ink/60">{KG.ar.editionsBody}</p>
            </div>
            <ButtonLink href="/ar/features/kindergarten/" variant="outline">{KG.ar.learn}</ButtonLink>
          </div>
        </Container>
      </section>
      <CtaBand locale="ar" title="لست متأكدًا أي إصدار يناسبك؟" body="أخبرنا عن مدرستك وسنقترح عليك نقطة البداية المناسبة." />
    </>
  );
}
