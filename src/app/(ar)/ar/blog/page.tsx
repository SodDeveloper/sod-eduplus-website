import { pageMetaAr } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata = pageMetaAr("المدونة", "أدلة لمديري المدارس وملاحظات الإصدارات ونصائح للتحول الرقمي في المدارس من فريق SOD EduPlus.", "/blog/");

export default function BlogPageAr() {
  return (
    <>
      <PageHero eyebrow="المدونة" title="أدلة ومستجدات لقادة المدارس" body="أدلة عملية لمديري المدارس، وملاحظات الإصدارات، ونصائح لإدارة مدرسة رقمية." />
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-navy">أولى المقالات قريبًا</h2>
          <p className="mx-auto mt-3 max-w-lg text-ink/70">نعمل حاليًا على إعداد أولى أدلتنا. وفي الأثناء، شاهد SOD EduPlus أثناء العمل.</p>
          <ButtonLink href="/ar/demo/" size="lg" className="mt-8">اطلب عرضًا تجريبيًا</ButtonLink>
        </Container>
      </section>
    </>
  );
}
