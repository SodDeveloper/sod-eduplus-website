import { Mail, MapPin, Phone } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { BRANCHES, CONTACT_EMAIL } from "@/lib/site";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp";

export const metadata = pageMeta("Contact", "Contact the SOD EduPlus team by email, phone or the contact form.", "/contact/");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to the SOD EduPlus team" body="Questions about modules, editions or pricing? Send us a message and we will reply within one working day." />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Get in touch</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-teal" aria-hidden /><a className="font-semibold text-navy hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              {BRANCHES.map((b) => (
                <li key={b.name} className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                  <span><span className="block font-semibold text-navy">{b.name}</span><span className="text-sm text-ink/70">{b.address}</span>
                    {b.phone ? <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="mt-1 flex items-center gap-1 text-sm text-ink/70 hover:text-navy"><Phone className="h-3.5 w-3.5" aria-hidden />{b.phone}</a> : null}
                  </span>
                </li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8" />
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-6 card-shadow sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy">Send a message</h2>
            <ContactForm kind="contact" />
          </div>
        </Container>
      </section>
    </>
  );
}
