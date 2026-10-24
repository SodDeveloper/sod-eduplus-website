import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { MODULES } from "@/lib/modules";
import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero, SectionHeading, Shot } from "@/components/ui";
import { MotionScreen } from "@/components/motion-screen";
import { CtaBand } from "@/components/cta";

export const dynamicParams = false;
export function generateStaticParams() { return MODULES.map((m) => ({ slug: m.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = MODULES.find((x) => x.slug === slug);
  if (!m) return {};
  return pageMeta(`${m.name} module`, `${m.intro} Part of SOD EduPlus, the innovative school ERP.`, `/features/${m.slug}/`);
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = MODULES.find((x) => x.slug === slug);
  if (!m) notFound();
  const others = MODULES.filter((x) => x.slug !== m.slug).slice(0, 6);
  return (
    <>
      <PageHero eyebrow={`Features · ${m.name}`} title={`${m.name} in SOD EduPlus`} body={m.intro}>
        <ButtonLink href="/demo/" size="lg">Request a demo</ButtonLink>
        <ButtonLink href="/features/" variant="ghostLight" size="lg">All features</ButtonLink>
      </PageHero>
      <section className="py-16">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">What you get</h2>
            <ul className="mt-6 space-y-4">
              {m.benefits.map((b) => <li key={b} className="flex gap-3 text-lg text-ink/80"><Check className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden />{b}</li>)}
            </ul>
            <p className="mt-8 text-sm text-ink/60">Available in: {[m.editions.full && "Full", m.editions.lite && "Lite"].filter(Boolean).join(" and ")} edition{m.editions.full && m.editions.lite ? "s" : ""}.</p>
          </div>
          {m.video ? <MotionScreen name={m.video} label={`SOD EduPlus ${m.name} in action`} /> : <Shot name={m.shot} alt={`SOD EduPlus ${m.name} screen`} eager />}
        </Container>
        {m.video ? <Container className="mt-12"><Shot name={m.shot} alt={`SOD EduPlus ${m.name} screen`} /></Container> : null}
      </section>
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading title="Works with the rest of the school" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => <li key={o.slug}><Link href={`/features/${o.slug}/`} className="block rounded-2xl bg-white p-5 card-shadow hover:-translate-y-0.5 transition"><span className="font-bold text-navy">{o.name}</span><span className="mt-1 block text-sm text-ink/65">{o.short}</span></Link></li>)}
          </ul>
          <Link href="/features/" className="mt-8 inline-flex items-center gap-2 font-semibold text-teal hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden /> Back to all features</Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
