import Link from "next/link";
import { NAV, withBase } from "@/lib/site";
import { MODULES } from "@/lib/modules";
import { ButtonLink, Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/brand/logo-horizontal-on-dark.png")} alt="SOD EduPlus" width={480} height={105} className="h-8 w-auto" loading="lazy" />
          <p className="mt-4 text-sm leading-relaxed">The innovative school ERP from SOD Infotech.</p>
          <ButtonLink href="/demo/" className="mt-5">Request a demo</ButtonLink>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Product</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.slice(0, 5).map((n) => <li key={n.href}><Link className="hover:text-mint" href={n.href}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Modules</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            {MODULES.slice(0, 7).map((m) => <li key={m.slug}><Link className="hover:text-mint" href={`/features/${m.slug}/`}>{m.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-mint" href="/about/">About</Link></li>
            <li><Link className="hover:text-mint" href="/contact/">Contact</Link></li>
            <li><Link className="hover:text-mint" href="/blog/">Blog</Link></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} SOD Infotech. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {[["ae", "UAE"], ["qa", "Qatar"], ["in", "India"]].map(([c, n], i) => (
              <span key={c} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-white/30" aria-hidden>|</span>}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBase(`/flags/${c}.svg`)} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-white/20" loading="lazy" />
                {n}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </footer>
  );
}
