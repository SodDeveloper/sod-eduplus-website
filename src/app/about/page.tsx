import { HeartHandshake, Lightbulb, LifeBuoy } from "lucide-react";
import { pageMeta } from "@/lib/meta";
import { Container, PageHero } from "@/components/ui";
import { CtaBand } from "@/components/cta";

export const metadata = pageMeta("About", "SOD EduPlus is built by SOD Infotech, a software company focused on practical, well-supported business systems.", "/about/");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Built by SOD Infotech" body="SOD Infotech builds business software and supports the teams who use it every day. SOD EduPlus brings that experience to schools." />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">Our mission</h2>
            <p>Schools should spend their time on teaching, not paperwork. SOD EduPlus gives owners, principals and staff one innovative school ERP for admissions, academics, fees and communication, so information is entered once and is always up to date.</p>
            <p>We work closely with each school during setup, migrate existing data, train staff and stay on hand afterwards.</p>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-navy/25 bg-mist text-ink/45">[Directors photo]</div>
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Lightbulb, t: "Innovation with purpose", b: "Features that save staff time and keep families informed." },
            { icon: HeartHandshake, t: "Partnership", b: "We set up, migrate and train alongside your team." },
            { icon: LifeBuoy, t: "Support promise", b: "A real team that responds, with follow-up within one working day." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-white p-6 card-shadow">
              <v.icon className="h-6 w-6 text-teal" aria-hidden />
              <h3 className="mt-3 font-bold text-navy">{v.t}</h3>
              <p className="mt-1 text-sm text-ink/70">{v.b}</p>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
