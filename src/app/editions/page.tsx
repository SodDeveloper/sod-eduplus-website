import { Check, Minus } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMeta("Editions: Full vs Lite", "Compare SOD EduPlus Full, the complete innovative school ERP with every module, and Lite, the essential modules for smaller schools.", "/editions/");

const EXTRA = [
  { name: "Payroll pay runs", full: true, lite: false },
  { name: "Parent & student portal", full: true, lite: true },
  { name: "English and Arabic interface", full: true, lite: true },
];

function Mark({ on, label }: { on: boolean; label: string }) {
  return on ? <><Check className="mx-auto h-5 w-5 text-teal" aria-hidden /><span className="sr-only">Included in {label}</span></> : <><Minus className="mx-auto h-5 w-5 text-ink/30" aria-hidden /><span className="sr-only">Not included in {label}</span></>;
}

export default function EditionsPage() {
  return (
    <>
      <PageHero eyebrow="Editions" title="Full or Lite: pick the right fit" body="Both editions share the same core and the same easy interface. Start with Lite and move to Full when you need more." />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Full", body: "The complete innovative school ERP with every module.", suits: ["Established schools with several departments", "Schools running payroll, transport and canteen in-house", "Groups and multi-campus schools"] },
              { name: "Lite", body: "The essential modules for smaller schools.", suits: ["Smaller and newly opened schools", "Teams that want to start quickly", "Schools planning to grow into Full later"] },
            ].map((e) => (
              <div key={e.name} className="rounded-3xl border border-navy/10 bg-white p-8 card-shadow">
                <h2 className="text-2xl font-extrabold text-navy">SOD EduPlus {e.name}</h2>
                <p className="mt-2 text-ink/70">{e.body}</p>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-teal">Suits</h3>
                <ul className="mt-3 space-y-2">{e.suits.map((s) => <li key={s} className="flex gap-2 text-ink/80"><Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />{s}</li>)}</ul>
                <ButtonLink href="/demo/" className="mt-8">Try the {e.name} demo</ButtonLink>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-x-auto rounded-2xl border border-navy/10">
            <table className="w-full min-w-[480px] text-left text-sm">
              <caption className="sr-only">Modules by edition</caption>
              <thead className="bg-mist text-navy">
                <tr><th scope="col" className="px-5 py-4 font-bold">Module</th><th scope="col" className="px-5 py-4 text-center font-bold">Full</th><th scope="col" className="px-5 py-4 text-center font-bold">Lite</th></tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {[...MODULES.map((m) => ({ name: m.name, ...m.editions })), ...EXTRA].map((r) => (
                  <tr key={r.name}><th scope="row" className="px-5 py-3 font-medium text-ink">{r.name}</th><td className="px-5 py-3"><Mark on={r.full} label="Full" /></td><td className="px-5 py-3"><Mark on={r.lite} label="Lite" /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink/55">Module depth can differ between editions. Ask us for the detailed breakdown for your school.</p>
        </Container>
      </section>
      <CtaBand title="Not sure which edition fits?" body="Tell us about your school and we will recommend the right starting point." />
    </>
  );
}
