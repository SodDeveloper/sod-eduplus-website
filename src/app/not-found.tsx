import { ButtonLink, Container } from "@/components/ui";
export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <h1 className="text-4xl font-extrabold text-navy">Page not found</h1>
      <p className="mt-3 text-ink/70">The page you are looking for does not exist.</p>
      <ButtonLink href="/" size="lg" className="mt-8">Back to home</ButtonLink>
    </Container>
  );
}
