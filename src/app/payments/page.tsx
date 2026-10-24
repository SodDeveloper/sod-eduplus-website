import { Bell, FileCheck2, Receipt, Scale, Wallet } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const metadata = pageMeta("Online fee payments", "Online school fee payments with instant receipts, reminders, canteen wallet top-ups and reconciliation reports.", "/payments/");

const STEPS = [
  { title: "Invoice", body: "Fee invoices are generated from your fee plans." },
  { title: "Notify", body: "Parents get the invoice and a reminder before the due date." },
  { title: "Pay online", body: "Parents pay from the portal in a few taps." },
  { title: "Receipt", body: "A receipt is issued instantly and the balance updates." },
];
const POINTS = [
  { icon: Receipt, title: "Instant receipts", body: "Every payment produces a receipt parents can download." },
  { icon: Bell, title: "Reminders", body: "Automatic reminders for upcoming and overdue fees." },
  { icon: Wallet, title: "Canteen wallet top-ups", body: "Parents top up student wallets from the same portal." },
  { icon: Scale, title: "Reconciliation reports", body: "Collections matched to invoices, ready for your accountant." },
  { icon: FileCheck2, title: "Defaulter follow-up", body: "See who owes what and follow up from one list." },
];

export default function PaymentsPage() {
  return (
    <>
      <PageHero eyebrow="Payments" title="Collect school fees online, without the chasing" body="From invoice to receipt to reconciliation, fee collection runs in one flow.">
        <ButtonLink href="/demo/" size="lg">Request a demo</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container>
          <ol className="grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-navy/10 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white" aria-hidden>{i + 1}</span>
                <h2 className="mt-4 font-bold text-navy">{s.title}</h2>
                <p className="mt-1 text-sm text-ink/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <MotionScreen name="02_fees_payments" label="Online fee payment flow" className="mt-12" />
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Peace of mind for your finance team" />
            <ul className="mt-8 space-y-5">
              {POINTS.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal card-shadow"><p.icon className="h-5 w-5" aria-hidden /></span>
                  <span><span className="block font-bold text-navy">{p.title}</span><span className="text-sm text-ink/70">{p.body}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <Shot name="08_fees_receipts" alt="SOD EduPlus fee receipts list" />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
