import { ButtonLink, Container } from "@/components/ui";

export function CtaBand({ title = "See SOD EduPlus with your own school in mind", body = "Book a short demo. We will walk through the modules that matter to you and answer your questions." }: { title?: string; body?: string }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/demo/" variant="light" size="lg">Request a demo</ButtonLink>
            <ButtonLink href="/contact/" variant="ghostLight" size="lg">Talk to us</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
