import Link from "next/link";
import { withBase } from "@/lib/site";
import {
  ArrowLeft, BookOpen, Bus, CalendarCheck, Check, ClipboardList, CreditCard, GraduationCap, Languages,
  Baby, LayoutDashboard, Megaphone, Smartphone, UserPlus, Users, Wallet,
} from "lucide-react";
import { MODULES } from "@/lib/modules";
import { KG } from "@/lib/kindergarten";
import { MODULES_AR } from "@/lib/modules-ar";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = {
  ...pageMetaAr(
    "نظام ERP مبتكر لإدارة المدارس",
    "SOD EduPlus نظام مبتكر لتخطيط موارد المدارس (ERP) يجمع القبول والشؤون الأكاديمية والحضور والرسوم والمكتبة والمقصف والنقل والتواصل مع أولياء الأمور في مكان واحد.",
    "/",
    "/og-home.jpg",
  ),
  title: { absolute: "SOD EduPlus | نظام ERP مبتكر لإدارة المدارس" },
};

const ICONS: Record<string, typeof UserPlus> = {
  admissions: UserPlus, academics: GraduationCap, attendance: CalendarCheck, exams: ClipboardList, fees: CreditCard,
  "hr-payroll": Users, library: BookOpen, canteen: Wallet, transport: Bus, announcements: Megaphone, dashboards: LayoutDashboard,
};

const MESSAGES = [
  { title: "نظام واحد للمدرسة بأكملها", body: "استبدِل جداول البيانات والتطبيقات المتفرقة بنظام واحد متكامل." },
  { title: "تحصيل أسرع للرسوم", body: "دفع إلكتروني وتذكيرات تلقائية وإيصالات فورية." },
  { title: "أولياء أمور على اطلاع دائم", body: "بوابة للنتائج والحضور والرسوم والتعاميم." },
  { title: "لوحات معلومات واضحة للقيادة", body: "عروض للمدير والإدارة تغطي كل وحدة، كل صباح." },
];

export default function HomeAr() {
  return (
    <>
      {/* Hero */}
      <section className="brand-gradient relative overflow-hidden text-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.3] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              أدِر مدرستك بالكامل من <span className="text-gradient">مكان واحد</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              يجمع SOD EduPlus القبول والشؤون الأكاديمية والرسوم والتواصل مع أولياء الأمور في نظام واحد، ليقضي فريقك وقتًا أقل في الأعمال الإدارية ووقتًا أكثر مع الطلاب.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/ar/demo/" size="lg">اطلب عرضًا تجريبيًا <ArrowLeft className="h-4 w-4" aria-hidden /></ButtonLink>
              <ButtonLink href="/ar/features/" variant="ghostLight" size="lg">استكشف المزايا</ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
              {["إصداران: الكامل (Full) والمختصر (Lite)", "بوابة أولياء الأمور على الجوال", "باللغتين العربية والإنجليزية"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-mint" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative pb-10 lg:pb-12 lg:pe-10">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
              <div dir="ltr" className="flex items-center gap-1.5 border-b border-navy/10 bg-[#f1f4f8] px-4 py-2.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span dir="rtl" className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-right text-[11px] text-ink/50">SOD EduPlus · لوحة معلومات المدير</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/shots/hero_dashboard.webp")} alt="لوحة معلومات المدير في SOD EduPlus" width={2400} height={1500} className="block h-auto w-full" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-2 end-0 w-[26%] max-w-[190px] overflow-hidden rounded-[1.6rem] border-[5px] border-navy-deep bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/shots/hero_portal.webp")} alt="بوابة أولياء الأمور في SOD EduPlus على الجوال" width={720} height={1558} className="block h-auto w-full" />
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
          <SectionHeading center eyebrow="الوحدات" title="كل جوانب الحياة المدرسية، مترابطة" body="ابدأ بالوحدات التي تحتاجها اليوم، وفعّل المزيد مع نمو مدرستك." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => {
              const Icon = ICONS[m.slug] ?? LayoutDashboard;
              const a = MODULES_AR[m.slug];
              return (
                <li key={m.slug}>
                  <Link href={`/ar/features/${m.slug}/`} className="group flex h-full gap-4 rounded-2xl bg-white p-5 card-shadow transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-teal">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon className="h-5 w-5" aria-hidden /></span>
                    <span>
                      <span className="block font-bold text-navy group-hover:text-teal">{a.name}</span>
                      <span className="mt-1 block text-sm text-ink/65">{a.short}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/ar/features/kindergarten/" className="group flex h-full gap-4 rounded-2xl bg-white p-5 card-shadow transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-teal">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><Baby className="h-5 w-5" aria-hidden /></span>
                <span>
                  <span className="flex flex-wrap items-center gap-2 font-bold text-navy group-hover:text-teal">{KG.ar.name}</span>
                  <span className="mt-1 block text-sm text-ink/65">{KG.ar.short}</span>
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Dashboard */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="لوحات المعلومات" title="مدرستك في لمحة واحدة، كل صباح" body="يطّلع المديرون على الحضور والقبول والرسوم والموافقات المعلّقة في شاشة واحدة، ويحصل الفريق المالي على عرض خاص به للتحصيل والأرصدة المستحقة." />
            <ul className="mt-6 space-y-3">
              {["لوحات معلومات للمدير وللشؤون المالية", "وصول سريع إلى الموافقات والحضور والاختبارات", "الانتقال من أي رقم إلى السجل الذي يقف خلفه"].map((t) => (
                <li key={t} className="flex gap-3 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link href="/ar/demo/" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal hover:underline">اطلب عرضًا تجريبيًا <ArrowLeft className="h-4 w-4" aria-hidden /></Link>
          </div>
          <Shot name="01b_finance_dashboard" alt="لوحة المعلومات المالية في SOD EduPlus مع أرقام تحصيل الرسوم" />
        </Container>
      </section>

      {/* Editions teaser */}
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <SectionHeading center eyebrow="الإصدارات" title="الكامل أو المختصر: ابدأ صغيرًا وتوسّع" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { name: "SOD EduPlus Full", body: "نظام ERP المدرسي المبتكر بكامل وحداته.", tag: "للمدارس الراسخة والمدارس متعددة الفروع" },
              { name: "SOD EduPlus Lite", body: "الوحدات الأساسية للمدارس الأصغر حجمًا.", tag: "للمدارس الصغيرة والنامية" },
            ].map((e) => (
              <div key={e.name} className="rounded-3xl bg-white p-8 card-shadow">
                <p className="text-xs font-bold text-teal">{e.tag}</p>
                <h3 dir="ltr" className="mt-2 text-end text-2xl font-extrabold text-navy">{e.name}</h3>
                <p className="mt-3 text-ink/70">{e.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/ar/demo/">جرّب العرض التجريبي</ButtonLink>
                  <ButtonLink href="/ar/editions/" variant="outline">قارن بين الإصدارات</ButtonLink>
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
            <div className="flex items-center gap-3 text-teal"><Smartphone className="h-5 w-5" aria-hidden /><span className="text-xs font-bold">بوابة أولياء الأمور والطلاب</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">تطّلع الأسر على ما يهمّها، من هواتفها</h2>
            <p className="mt-4 text-lg text-ink/70">النتائج والحضور والرسوم والمكتبة والتعاميم في بوابة واحدة تناسب الجوال.</p>
            <MotionScreen locale="ar" name="03_parent_portal_mobile" label="بوابة أولياء الأمور على الهاتف الجوال" className="mt-8" />
            <Link href="/ar/portal/" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:underline">تعرّف على البوابة <ArrowLeft className="h-4 w-4" aria-hidden /></Link>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-teal"><CreditCard className="h-5 w-5" aria-hidden /><span className="text-xs font-bold">المدفوعات الإلكترونية</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">رسوم تُحصَّل إلكترونيًا وتُطابَق تلقائيًا</h2>
            <p className="mt-4 text-lg text-ink/70">دفع إلكتروني للرسوم، وإيصالات فورية، وتذكيرات، وشحن لمحافظ المقصف.</p>
            <MotionScreen locale="ar" name="02_fees_payments" label="الدفع الإلكتروني للرسوم والإيصالات" className="mt-8" />
            <Link href="/ar/payments/" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal hover:underline">كيف تعمل المدفوعات <ArrowLeft className="h-4 w-4" aria-hidden /></Link>
          </div>
        </Container>
      </section>

      {/* Bilingual */}
      <section className="brand-gradient py-16 text-white sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-mint"><Languages className="h-5 w-5" aria-hidden /><span className="text-xs font-bold">العربية والإنجليزية</span></div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">ثنائي اللغة ويدعم الكتابة من اليمين إلى اليسار</h2>
            <p className="mt-4 text-lg text-white/80">يمكن للموظفين وأولياء الأمور والطلاب استخدام SOD EduPlus بالعربية أو الإنجليزية، مع واجهة كاملة من اليمين إلى اليسار.</p>
          </div>
          <MotionScreen locale="ar" name="05_arabic_rtl" label="لوحة معلومات SOD EduPlus بالعربية من اليمين إلى اليسار" className="ring-1 ring-white/15" />
        </Container>
      </section>

      <CtaBand locale="ar" />
    </>
  );
}
