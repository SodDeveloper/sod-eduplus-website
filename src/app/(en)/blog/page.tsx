import { pageMeta } from "@/lib/meta";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata = pageMeta("Blog", "Guides for principals, release notes and school digitisation tips from the SOD EduPlus team.", "/blog/");

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Guides and updates for school leaders" body="Practical guides for principals, release notes and tips on running a digital school." />
      <section className="py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-navy">First articles coming soon</h2>
          <p className="mx-auto mt-3 max-w-lg text-ink/70">We are preparing our first guides. In the meantime, see SOD EduPlus in action.</p>
          <ButtonLink href="/demo/" size="lg" className="mt-8">Request a demo</ButtonLink>
        </Container>
      </section>
    </>
  );
}
