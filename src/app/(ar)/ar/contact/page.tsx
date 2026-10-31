import { Globe, Mail } from "lucide-react";
import { pageMetaAr } from "@/lib/meta";
import { CONTACT_EMAIL, COUNTRIES, withBase } from "@/lib/site";
import { COUNTRIES_AR } from "@/lib/i18n";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp";

export const metadata = pageMetaAr("تواصل معنا", "تواصل مع فريق SOD EduPlus عبر البريد الإلكتروني أو نموذج التواصل.", "/contact/");

export default function ContactPageAr() {
  return (
    <>
      <PageHero eyebrow="تواصل معنا" title="تحدّث مع فريق SOD EduPlus" body="هل لديك أسئلة عن الوحدات أو الإصدارات أو الأسعار؟ أرسِل إلينا رسالة وسنردّ عليك خلال يوم عمل واحد." />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">ابقَ على تواصل</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`راسلنا على ${CONTACT_EMAIL}`} className="flex items-center gap-3 break-all font-semibold text-navy hover:text-teal">
                  <Mail className="h-5 w-5 shrink-0 text-teal" aria-hidden />
                  <span dir="ltr">{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                <span><span className="block font-semibold text-navy">الدول</span>
                  <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink/70">
                    {COUNTRIES.map((c, i) => (
                      <span key={c.code} className="inline-flex items-center gap-2">
                        {i > 0 && <span className="text-ink/30" aria-hidden>|</span>}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={withBase(`/flags/${c.code}.svg`)} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-navy/10" loading="lazy" />
                        {COUNTRIES_AR[c.code]}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
            <WhatsAppButton locale="ar" className="mt-8" />
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-6 card-shadow sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy">أرسِل رسالة</h2>
            <ContactForm kind="contact" locale="ar" />
          </div>
        </Container>
      </section>
    </>
  );
}
