import { BookOpen, CalendarCheck, ClipboardList, CreditCard, Languages, Megaphone } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero, PhoneShot, SectionHeading } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = pageMetaAr("بوابة أولياء الأمور والطلاب", "بوابة ثنائية اللغة لأولياء الأمور والطلاب تناسب الجوال، للرسوم والحضور والنتائج والمكتبة والتعاميم.", "/portal/");

const FEATURES = [
  { icon: CreditCard, title: "الرسوم", body: "عرض الفواتير والدفع الإلكتروني وتنزيل الإيصالات." },
  { icon: CalendarCheck, title: "الحضور", body: "الحضور اليومي لكل طفل فور تسجيله." },
  { icon: ClipboardList, title: "النتائج", body: "نتائج الاختبارات والشهادات المدرسية فور نشرها." },
  { icon: BookOpen, title: "المكتبة", body: "الكتب المُعارة ومواعيد إرجاعها." },
  { icon: Megaphone, title: "الإعلانات", body: "تعاميم المدرسة والرسائل وطلبات الاجتماعات." },
  { icon: Languages, title: "ثنائية اللغة", body: "بالعربية والإنجليزية، مع واجهة من اليمين إلى اليسار." },
];

export default function PortalPageAr() {
  return (
    <>
      <PageHero eyebrow="بوابة أولياء الأمور والطلاب" title="أبقِ كل أسرة على اطلاع" body="يحصل أولياء الأمور والطلاب على مكان واحد بسيط يناسب الجوال لكل ما يتعلق بالمدرسة.">
        <ButtonLink href="/ar/demo/" size="lg">اطلب عرضًا تجريبيًا</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container><MotionScreen locale="ar" name="03_parent_portal_mobile" label="جولة في بوابة أولياء الأمور على الجوال" eager /></Container>
      </section>
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading center title="كل ما يسأل عنه أولياء الأمور إدارة المدرسة" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="rounded-2xl bg-white p-6 card-shadow">
                <f.icon className="h-6 w-6 text-teal" aria-hidden />
                <h3 className="mt-3 font-bold text-navy">{f.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <SectionHeading center title="مصمَّمة للهاتف الذي في يد كل ولي أمر" />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
            <PhoneShot name="portal_01" alt="الشاشة الرئيسية لبوابة أولياء الأمور" />
            <PhoneShot name="portal_05" alt="شاشة الحضور في بوابة أولياء الأمور" />
            <PhoneShot name="portal_06" alt="شاشة الرسوم في بوابة أولياء الأمور" />
            <PhoneShot name="portal_08" alt="شاشة النتائج في بوابة أولياء الأمور" />
          </div>
        </Container>
      </section>
      <CtaBand locale="ar" />
    </>
  );
}
