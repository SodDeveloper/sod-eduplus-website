import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/site";

const VARIANTS = {
  primary: "bg-teal text-white hover:bg-[#1f9896] focus-visible:outline-teal",
  navy: "bg-navy text-white hover:bg-navy-deep focus-visible:outline-navy",
  outline: "border border-navy/20 text-navy hover:bg-mist focus-visible:outline-navy",
  light: "bg-white text-navy hover:bg-mist focus-visible:outline-white",
  ghostLight: "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
};

export function btn(variant: keyof typeof VARIANTS = "primary", size: "md" | "lg" = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
    size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
    VARIANTS[variant],
  );
}

export function ButtonLink({ href, variant, size, children, className }: { href: string; variant?: keyof typeof VARIANTS; size?: "md" | "lg"; children: ReactNode; className?: string }) {
  return <Link href={href} className={cn(btn(variant, size), className)}>{children}</Link>;
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", light ? "text-mint" : "text-teal")}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, body, center, light }: { eyebrow?: string; title: string; body?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl", light ? "text-white" : "text-navy")}>{title}</h2>
      {body ? <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/80" : "text-ink/70")}>{body}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, body, children, aside }: { eyebrow: string; title: string; body: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="brand-gradient text-white">
      <Container className={cn("py-16 sm:py-20", aside && "grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]")}>
        {aside ? <div className="order-first lg:order-last flex lg:justify-end">{aside}</div> : null}
        <div>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{body}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function Shot({ name, alt, className, eager }: { name: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-navy/10 bg-white card-shadow", className)}>
      <div className="flex items-center gap-1.5 border-b border-navy/10 bg-mist px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBase(`/shots/${name}.webp`)} alt={alt} width={1600} height={1000} loading={eager ? "eager" : "lazy"} decoding="async" className="block h-auto w-full" />
    </figure>
  );
}

export function PhoneShot({ name, alt, className }: { name: string; alt: string; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-[2rem] border-[6px] border-navy-deep bg-white card-shadow", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBase(`/shots/${name}.webp`)} alt={alt} width={600} height={1298} loading="lazy" decoding="async" className="block h-auto w-full" />
    </figure>
  );
}
