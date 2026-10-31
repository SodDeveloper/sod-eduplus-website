import { CalendarClock, MonitorPlay, PhoneCall } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { Container } from "@/components/ui";
import { DemoForm } from "@/components/demo-form";
import { MotionScreen } from "@/components/motion-screen";
import { WhatsAppButton } from "@/components/whatsapp";

export const metadata = pageMetaAr("اطلب عرضًا تجريبيًا", "اطلب عرضًا تجريبيًا لنظام SOD EduPlus، نظام ERP المبتكر لإدارة المدارس، واحصل على وصول إلى العرضين التجريبيين للإصدارين الكامل والمختصر.", "/demo/");

const EXPECT = [
  { icon: MonitorPlay, t: "استكشف الإصدارين", b: "احصل على بيانات الدخول للعرضين التجريبيين Full وLite فور إرسال الطلب." },
  { icon: PhoneCall, t: "اتصال من فريقنا", b: "نتواصل معك خلال يوم عمل واحد للتعرّف على مدرستك." },
  { icon: CalendarClock, t: "جولة إرشادية", b: "اختر موعدًا لجلسة مباشرة تركّز على الوحدات التي تحتاجها." },
];

export default function DemoPageAr() {
  return (
    <section className="bg-mist">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-bold text-teal">اطلب عرضًا تجريبيًا</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">شاهد SOD EduPlus أثناء العمل</h1>
          <p className="mt-4 text-lg text-ink/70">أخبرنا كيف نتواصل معك، وجرّب نظام ERP المدرسي المبتكر بنفسك.</p>
          <ul className="mt-8 space-y-5">
            {EXPECT.map((e) => (
              <li key={e.t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal card-shadow"><e.icon className="h-5 w-5" aria-hidden /></span>
                <span><span className="block font-bold text-navy">{e.t}</span><span className="text-sm text-ink/70">{e.b}</span></span>
              </li>
            ))}
          </ul>
          <MotionScreen locale="ar" name="06_modules_walkthrough" label="جولة قصيرة في وحدات SOD EduPlus" className="mt-10 hidden lg:block" />
        </div>
        <div className="lg:pt-6">
          <div className="rounded-3xl bg-white p-6 card-shadow sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-2xl font-extrabold text-navy">جرّب العرض التجريبي المباشر</h2>
            <p className="mb-6 mt-1 text-sm text-ink/60">يستغرق أقل من دقيقة.</p>
            <DemoForm locale="ar" />
            <WhatsAppButton locale="ar" className="mt-4 w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
