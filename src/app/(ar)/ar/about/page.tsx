import { HeartHandshake, Lightbulb, LifeBuoy } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { withBase } from "@/lib/site";
import { Container, PageHero } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMetaAr("من نحن", "تطوّر SOD Infotech نظام SOD EduPlus، وهي شركة برمجيات تركّز على أنظمة أعمال عملية مدعومة بخدمة موثوقة.", "/about/");

export default function AboutPageAr() {
  return (
    <>
      <PageHero eyebrow="من نحن" title="من تطوير SOD Infotech" body="تطوّر SOD Infotech برمجيات الأعمال وتدعم الفرق التي تستخدمها كل يوم، ويحمل SOD EduPlus هذه الخبرة إلى المدارس." />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">رسالتنا</h2>
            <p>ينبغي أن تقضي المدارس وقتها في التعليم لا في الأعمال الورقية. يمنح SOD EduPlus الملّاك والمديرين والموظفين نظام ERP مدرسيًا مبتكرًا واحدًا للقبول والشؤون الأكاديمية والرسوم والتواصل، فتُدخَل المعلومات مرة واحدة وتبقى محدّثة دائمًا.</p>
            <p>نعمل عن قرب مع كل مدرسة خلال مرحلة الإعداد، وننقل بياناتها الحالية، وندرّب الموظفين، ونبقى إلى جانبها بعد ذلك.</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/photos/school-classroom.webp")} alt="طلاب يتعلمون في فصل دراسي حديث (تصوير: Yan Krukau، Pexels)" width={1200} height={800} className="aspect-[4/3] w-full rounded-3xl object-cover card-shadow" loading="lazy" />
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Lightbulb, t: "ابتكار هادف", b: "مزايا توفّر وقت الموظفين وتُبقي الأسر على اطلاع." },
            { icon: HeartHandshake, t: "شراكة", b: "نتولّى الإعداد ونقل البيانات والتدريب جنبًا إلى جنب مع فريقك." },
            { icon: LifeBuoy, t: "التزامنا بالدعم", b: "فريق حقيقي يستجيب، مع متابعة خلال يوم عمل واحد." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-white p-6 card-shadow">
              <v.icon className="h-6 w-6 text-teal" aria-hidden />
              <h3 className="mt-3 font-bold text-navy">{v.t}</h3>
              <p className="mt-1 text-sm text-ink/70">{v.b}</p>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand locale="ar" />
    </>
  );
}
