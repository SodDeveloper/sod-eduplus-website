import { BookOpen, CalendarCheck, ClipboardList, CreditCard, Languages, Megaphone } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero, PhoneShot, SectionHeading } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = pageMeta("Parent & student portal", "A mobile-friendly, bilingual parent and student portal for fees, attendance, results, library and announcements.", "/portal/");

const FEATURES = [
  { icon: CreditCard, title: "Fees", body: "See invoices, pay online and download receipts." },
  { icon: CalendarCheck, title: "Attendance", body: "Daily attendance for every child, as it is marked." },
  { icon: ClipboardList, title: "Results", body: "Exam results and report cards as soon as they are published." },
  { icon: BookOpen, title: "Library", body: "Books on loan and due dates." },
  { icon: Megaphone, title: "Announcements", body: "School notices, messages and meeting requests." },
  { icon: Languages, title: "Bilingual", body: "English and Arabic, with a right-to-left layout." },
];

export default function PortalPage() {
  return (
    <>
      <PageHero eyebrow="Parent & student portal" title="Keep every family in the loop" body="Parents and students get one simple, mobile-friendly place for everything school-related.">
        <ButtonLink href="/demo/" size="lg">Request a demo</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container><MotionScreen name="03_parent_portal_mobile" label="Parent portal walkthrough on mobile" eager /></Container>
      </section>
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading center title="Everything parents ask the office about" />
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
          <SectionHeading center title="Designed for the phone in every parent's hand" />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
            <PhoneShot name="portal_01" alt="Parent portal home screen" />
            <PhoneShot name="portal_05" alt="Parent portal attendance screen" />
            <PhoneShot name="portal_06" alt="Parent portal fees screen" />
            <PhoneShot name="portal_08" alt="Parent portal results screen" />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
