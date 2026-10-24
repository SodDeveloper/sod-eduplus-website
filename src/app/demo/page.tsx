import { CalendarClock, MonitorPlay, PhoneCall } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { Container } from "@/components/ui";
import { DemoForm } from "@/components/demo-form";
import { MotionScreen } from "@/components/motion-screen";
import { WhatsAppButton } from "@/components/whatsapp";

export const metadata = pageMeta("Request a demo", "Request a demo of SOD EduPlus, the innovative school ERP, and get access to the Full and Lite demo editions.", "/demo/");

const EXPECT = [
  { icon: MonitorPlay, t: "Explore both editions", b: "Get logins for the Full and Lite demos right after you submit." },
  { icon: PhoneCall, t: "A call from our team", b: "We contact you within one working day to understand your school." },
  { icon: CalendarClock, t: "A guided walkthrough", b: "Pick a time for a live session focused on the modules you need." },
];

export default function DemoPage() {
  return (
    <section className="bg-mist">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Request a demo</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">See SOD EduPlus in action</h1>
          <p className="mt-4 text-lg text-ink/70">Tell us how to reach you and try the innovative school ERP for yourself.</p>
          <ul className="mt-8 space-y-5">
            {EXPECT.map((e) => (
              <li key={e.t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal card-shadow"><e.icon className="h-5 w-5" aria-hidden /></span>
                <span><span className="block font-bold text-navy">{e.t}</span><span className="text-sm text-ink/70">{e.b}</span></span>
              </li>
            ))}
          </ul>
          <MotionScreen name="06_modules_walkthrough" label="Short walkthrough of SOD EduPlus modules" className="mt-10 hidden lg:block" />
        </div>
        <div className="lg:pt-6">
          <div className="rounded-3xl bg-white p-6 card-shadow sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-2xl font-extrabold text-navy">Try live demo</h2>
            <p className="mb-6 mt-1 text-sm text-ink/60">Takes less than a minute.</p>
            <DemoForm />
            <WhatsAppButton className="mt-4 w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
