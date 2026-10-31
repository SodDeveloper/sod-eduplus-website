import { Bell, FileCheck2, Receipt, Scale, Wallet } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = pageMetaAr("الدفع الإلكتروني للرسوم", "دفع إلكتروني للرسوم المدرسية مع إيصالات فورية وتذكيرات وشحن لمحافظ المقصف وتقارير مطابقة.", "/payments/");

const STEPS = [
  { title: "الفاتورة", body: "تُصدَر فواتير الرسوم تلقائيًا من خطط الرسوم لديك." },
  { title: "الإشعار", body: "يتسلّم أولياء الأمور الفاتورة وتذكيرًا قبل تاريخ الاستحقاق." },
  { title: "الدفع الإلكتروني", body: "يدفع أولياء الأمور من البوابة بلمسات قليلة." },
  { title: "الإيصال", body: "يصدر الإيصال فورًا ويُحدَّث الرصيد." },
];
const POINTS = [
  { icon: Receipt, title: "إيصالات فورية", body: "كل عملية دفع تُصدر إيصالًا يمكن لأولياء الأمور تنزيله." },
  { icon: Bell, title: "التذكيرات", body: "تذكيرات تلقائية بالرسوم القادمة والمتأخرة." },
  { icon: Wallet, title: "شحن محافظ المقصف", body: "يشحن أولياء الأمور محافظ الطلاب من البوابة نفسها." },
  { icon: Scale, title: "تقارير المطابقة", body: "مطابقة المبالغ المحصّلة مع الفواتير، جاهزة لمحاسبك." },
  { icon: FileCheck2, title: "متابعة المتأخرين عن السداد", body: "اعرف المبالغ المستحقة على كل ولي أمر وتابِعها من قائمة واحدة." },
];

export default function PaymentsPageAr() {
  return (
    <>
      <PageHero eyebrow="المدفوعات" title="حصّل الرسوم المدرسية إلكترونيًا، دون عناء المتابعة" body="من الفاتورة إلى الإيصال إلى المطابقة، يسير تحصيل الرسوم في مسار واحد.">
        <ButtonLink href="/ar/demo/" size="lg">اطلب عرضًا تجريبيًا</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container>
          <ol className="grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-navy/10 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white" aria-hidden>{(i + 1).toLocaleString("ar-EG")}</span>
                <h2 className="mt-4 font-bold text-navy">{s.title}</h2>
                <p className="mt-1 text-sm text-ink/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <MotionScreen locale="ar" name="02_fees_payments" label="مسار الدفع الإلكتروني للرسوم" className="mt-12" />
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="راحة بال لفريقك المالي" />
            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal card-shadow"><p.icon className="h-5 w-5" aria-hidden /></span>
                  <span><span className="block font-bold text-navy">{p.title}</span><span className="text-sm text-ink/70">{p.body}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <Shot name="08_fees_receipts" alt="قائمة إيصالات الرسوم في SOD EduPlus" />
        </Container>
      </section>
      <CtaBand locale="ar" />
    </>
  );
}
