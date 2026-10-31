import { ButtonLink, Container } from "@/components/ui";
import type { Locale } from "@/lib/i18n";

const T = {
  en: { title: "See SOD EduPlus with your own school in mind", body: "Book a short demo. We will walk through the modules that matter to you and answer your questions.", demo: "Request a demo", talk: "Talk to us" },
  ar: { title: "اكتشف SOD EduPlus بما يناسب مدرستك", body: "احجز عرضًا تجريبيًا قصيرًا، وسنستعرض معك الوحدات التي تهمّك ونجيب عن أسئلتك.", demo: "اطلب عرضًا تجريبيًا", talk: "تحدّث معنا" },
};

export function CtaBand({ title, body, locale = "en" }: { title?: string; body?: string; locale?: Locale }) {
  const t = T[locale];
  const p = (path: string) => (locale === "ar" ? `/ar${path}` : path);
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">{title ?? t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{body ?? t.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={p("/demo/")} variant="light" size="lg">{t.demo}</ButtonLink>
            <ButtonLink href={p("/contact/")} variant="ghostLight" size="lg">{t.talk}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
