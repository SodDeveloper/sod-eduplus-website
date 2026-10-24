import { Check } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata = pageMeta("Pricing", "SOD EduPlus is priced per student per year by edition. Setup, data migration, training and support are included. Ask for a quote.", "/pricing/");

const INCLUDED = ["Setup and configuration", "Data migration from your current system", "Training for staff", "Ongoing support", "Free demo before you decide"];

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple pricing, quoted for your school" body="SOD EduPlus is priced per student per year, by edition. Groups of schools get a custom quote.">
        <ButtonLink href="#quote" size="lg">Talk to sales</ButtonLink>
        <ButtonLink href="/demo/" variant="ghostLight" size="lg">Request a demo</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">What every plan includes</h2>
            <ul className="mt-6 space-y-3">
              {INCLUDED.map((t) => <li key={t} className="flex gap-3 text-lg text-ink/80"><Check className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden />{t}</li>)}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[{ n: "Lite", b: "The essential modules for smaller schools." }, { n: "Full", b: "The complete innovative school ERP with every module." }].map((e) => (
                <div key={e.n} className="rounded-2xl bg-mist p-6">
                  <h3 className="text-lg font-extrabold text-navy">{e.n}</h3>
                  <p className="mt-1 text-sm text-ink/70">{e.b}</p>
                  <p className="mt-4 font-semibold text-teal">Contact us for a quote</p>
                </div>
              ))}
            </div>
          </div>
          <div id="quote" className="scroll-mt-24 rounded-3xl border border-navy/10 bg-white p-6 card-shadow sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy">Request a quote</h2>
            <p className="mt-2 text-sm text-ink/65">Tell us about your school and we will send a quote within one working day.</p>
            <ContactForm kind="pricing" />
          </div>
        </Container>
      </section>
    </>
  );
}
