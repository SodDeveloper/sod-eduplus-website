"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, Check, CheckCircle2, Copy, ExternalLink, Loader2 } from "lucide-react";
import { EMAIL_RE, PHONE_RE, isPreviewMode, postLead, readJson } from "@/lib/lead";
import { CONTACT_EMAIL, DEMO_LOGINS, LEAD_DEMO_TYPE, LEAD_SOURCE, LEAD_TAG, PRODUCT } from "@/lib/site";
import { btn } from "@/components/ui";
import { FIELD } from "@/components/contact-form";
import { cn } from "@/lib/utils";

type Creds = { url: string; username: string; password: string };
type Demos = { full?: Creds; lite?: Creds };
type Draft = { name: string; phone: string; email: string };
type Errors = Partial<Record<keyof Draft, string>>;
type Step = "form" | "success" | "thanks" | "preview";

function configuredDemos(): Demos | null {
  const ok = (c: Creds) => c.username && c.password;
  const out: Demos = { full: ok(DEMO_LOGINS.full) ? DEMO_LOGINS.full : undefined, lite: ok(DEMO_LOGINS.lite) ? DEMO_LOGINS.lite : undefined };
  return out.full || out.lite ? out : null;
}

function readCreds(v: unknown): Creds | undefined {
  if (!v || typeof v !== "object") return undefined;
  const r = v as Record<string, unknown>;
  if (typeof r.username !== "string" || typeof r.password !== "string") return undefined;
  return { url: typeof r.url === "string" ? r.url : "", username: r.username, password: r.password };
}

/** Endpoint returns { demos: { full, lite } }; a single { demo } is accepted as Full. */
function readDemos(body: unknown): Demos | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const out: Demos = {};
  if (b.demos && typeof b.demos === "object") {
    const d = b.demos as Record<string, unknown>;
    out.full = readCreds(d.full);
    out.lite = readCreds(d.lite);
  }
  // A single "demo" object belongs to another product on the shared endpoint, so it is ignored.
  return out.full || out.lite ? out : null;
}

async function copyText(value: string) {
  try { await navigator.clipboard.writeText(value); return true; } catch { return false; }
}

export function DemoForm() {
  const [step, setStep] = useState<Step>("form");
  const [draft, setDraft] = useState<Draft>({ name: "", phone: "", email: "" });
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [demos, setDemos] = useState<Demos | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (step !== "form") resultRef.current?.focus(); }, [step]);

  function validate(): Errors {
    const e: Errors = {};
    if (draft.name.trim().length < 2) e.name = "Please enter your name.";
    if (!PHONE_RE.test(draft.phone.trim())) e.phone = "Please enter a valid phone number with country code.";
    if (!EMAIL_RE.test(draft.email.trim())) e.email = "Please enter a valid email address.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`demo-${first}`)?.focus();
      return;
    }
    if (isPreviewMode()) { setStep("preview"); return; }
    setSending(true); setServerError(null);
    try {
      const base = { product: PRODUCT, tag: LEAD_TAG, source: LEAD_SOURCE, name: draft.name.trim(), phone: draft.phone.trim(), email: draft.email.trim(), website, locale: "en" };
      const res = await postLead(
        LEAD_DEMO_TYPE === "demo"
          ? { type: "demo", ...base }
          : { ...base, interest: `${PRODUCT} demo (Full + Lite)`, message: `Demo request for ${PRODUCT} (innovative school ERP). Tag: ${LEAD_TAG}. Source: ${LEAD_SOURCE}.` },
      );
      if (res.status === 429) { setServerError("Too many requests. Please wait a minute and try again."); return; }
      if (!res.ok) { setServerError(`Sorry, something went wrong. Please try again or email ${CONTACT_EMAIL}.`); return; }
      const d = readDemos(await readJson(res)) ?? configuredDemos();
      if (d) { setDemos(d); setStep("success"); } else setStep("thanks");
    } catch {
      setServerError(`Sorry, something went wrong. Please try again or email ${CONTACT_EMAIL}.`);
    } finally { setSending(false); }
  }

  if (step === "preview" || step === "thanks") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="text-center outline-none">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal" aria-hidden />
        <h2 className="mt-4 text-2xl font-extrabold text-navy">{step === "preview" ? "Demo request received (preview mode)" : "Thank you, your request has been received"}</h2>
        <p className="mt-3 text-ink/70">Our team will contact you within one working day to arrange your demo.</p>
        {step === "preview" ? <p className="mt-4 rounded-xl bg-mist p-3 text-sm text-ink/60">This preview site is not connected to our system yet, so no request was sent and no demo logins are shown.</p> : null}
      </div>
    );
  }

  if (step === "success" && demos) {
    return (
      <div ref={resultRef} tabIndex={-1} className="outline-none">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-teal" aria-hidden />
          <h2 className="mt-4 text-2xl font-extrabold text-navy">Your demo is ready</h2>
          <p className="mt-2 text-ink/70">Use these logins to explore both editions. Our team will also be in touch within one working day.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {demos.full ? <DemoCard title="Full demo" body="The complete innovative school ERP with every module." creds={demos.full} /> : null}
          {demos.lite ? <DemoCard title="Lite demo" body="The essential modules for smaller schools." creds={demos.lite} /> : null}
        </div>
        <p className="mt-4 text-center text-xs text-ink/50">Demo environments use sample data and may be reset regularly.</p>
      </div>
    );
  }

  const field = (name: keyof Draft, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={`demo-${name}`} className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      <input
        id={`demo-${name}`} name={name} value={draft[name]}
        onChange={(e) => { setDraft((d) => ({ ...d, [name]: e.target.value })); if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined })); }}
        aria-invalid={errors[name] ? true : undefined} aria-describedby={errors[name] ? `demo-${name}-err` : undefined}
        className={FIELD} {...props}
      />
      {errors[name] ? <p id={`demo-${name}-err`} className="mt-1.5 text-xs text-red-600">{errors[name]}</p> : null}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label></div>
      {field("name", "Full name", { autoComplete: "name", placeholder: "Your name" })}
      {field("phone", "Phone (with country code)", { type: "tel", inputMode: "tel", dir: "ltr", autoComplete: "tel", placeholder: "+1 555 123 4567" })}
      {field("email", "Work email", { type: "email", inputMode: "email", dir: "ltr", autoComplete: "email", placeholder: "you@school.edu" })}
      {serverError ? <div role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /><span>{serverError}</span></div> : null}
      <button type="submit" disabled={sending} className={cn(btn("primary", "lg"), "w-full")}>
        {sending ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden />Sending…</> : "Try live demo"}
      </button>
      <p className="text-center text-xs text-ink/50">We use your details only to arrange your demo and follow up.</p>
    </form>
  );
}

function DemoCard({ title, body, creds }: { title: string; body: string; creds: Creds }) {
  return (
    <div className="flex flex-col rounded-2xl border border-navy/10 bg-mist p-5">
      <h3 className="text-lg font-extrabold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-ink/65">{body}</p>
      <div className="mt-4 space-y-3">
        <CredRow label="Username" value={creds.username} />
        <CredRow label="Password" value={creds.password} />
      </div>
      {creds.url ? (
        <a href={creds.url} target="_blank" rel="noopener" className={cn(btn("navy", "md"), "mt-5 w-full")}>Open demo <ExternalLink className="h-4 w-4" aria-hidden /></a>
      ) : null}
    </div>
  );
}

function CredRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2">
      <div className="min-w-0 flex-1">
        <p className="text-xs text-ink/50">{label}</p>
        <code dir="ltr" className="block break-all text-sm font-semibold text-ink">{value}</code>
      </div>
      <button type="button" aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
        onClick={async () => { if (await copyText(value)) { setCopied(true); window.setTimeout(() => setCopied(false), 1500); } }}
        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-navy hover:bg-mist">
        {copied ? <Check className="h-4 w-4 text-teal" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}{copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
