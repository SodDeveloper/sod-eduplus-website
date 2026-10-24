"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { EMAIL_RE, PHONE_RE, isPreviewMode, postLead } from "@/lib/lead";
import { CONTACT_EMAIL, LEAD_SOURCE, LEAD_TAG, PRODUCT, PRODUCT_KEY } from "@/lib/site";
import { btn } from "@/components/ui";
import { cn } from "@/lib/utils";

export const FIELD = "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25";
const LABEL = "mb-1.5 block text-sm font-medium text-ink";
const INTERESTS = ["SOD EduPlus Full", "SOD EduPlus Lite", "Not sure yet", "Pricing", "Partnership", "Other"];

type Status = "idle" | "sending" | "ok" | "preview" | "err";

export function ContactForm({ kind }: { kind: "contact" | "pricing" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim()) { setStatus("err"); setMsg("Please fill in your name, email and phone."); return; }
    if (!EMAIL_RE.test(data.email.trim())) { setStatus("err"); setMsg("Please enter a valid email address."); return; }
    if (!PHONE_RE.test(data.phone.trim())) { setStatus("err"); setMsg("Please enter a valid phone number with country code."); return; }
    if (isPreviewMode()) { setStatus("preview"); setMsg(""); form.reset(); return; }
    setStatus("sending"); setMsg("");
    try {
      const interest = `${PRODUCT}: ${data.interest || (kind === "pricing" ? "Pricing" : "General enquiry")}`;
      const message = `[${LEAD_TAG} · ${LEAD_SOURCE} · ${kind} form]\n${data.message || ""}`.trim();
      const res = await postLead({ ...data, interest, message, product: PRODUCT_KEY, tag: LEAD_TAG, source: LEAD_SOURCE, locale: "en" });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok"); form.reset();
    } catch {
      setStatus("err"); setMsg(`Sorry, we could not send your message. Please email us at ${CONTACT_EMAIL}.`);
    }
  }

  if (status === "ok" || status === "preview") {
    return (
      <div role="status" className="mt-6 rounded-2xl bg-mist p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal" aria-hidden />
        <p className="mt-3 font-bold text-navy">Thank you, your message has been received.</p>
        <p className="mt-1 text-sm text-ink/65">Our team will get back to you within one working day.</p>
        {status === "preview" ? <p className="mt-3 text-xs font-semibold text-ink/50">Preview mode: this site is not yet connected to our system, so nothing was sent.</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div><label htmlFor={`${kind}-name`} className={LABEL}>Name *</label><input id={`${kind}-name`} name="name" autoComplete="name" required className={FIELD} /></div>
      <div><label htmlFor={`${kind}-company`} className={LABEL}>School / organisation</label><input id={`${kind}-company`} name="company" autoComplete="organization" className={FIELD} /></div>
      <div><label htmlFor={`${kind}-email`} className={LABEL}>Email *</label><input id={`${kind}-email`} name="email" type="email" autoComplete="email" required dir="ltr" className={FIELD} /></div>
      <div><label htmlFor={`${kind}-phone`} className={LABEL}>Phone *</label><input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" required dir="ltr" placeholder="+ country code" className={FIELD} /></div>
      <div><label htmlFor={`${kind}-country`} className={LABEL}>Country</label><input id={`${kind}-country`} name="country" autoComplete="country-name" className={FIELD} /></div>
      <div>
        <label htmlFor={`${kind}-interest`} className={LABEL}>Interested in</label>
        <select id={`${kind}-interest`} name="interest" defaultValue={kind === "pricing" ? "Pricing" : ""} className={FIELD}>
          <option value="">Choose one</option>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2"><label htmlFor={`${kind}-message`} className={LABEL}>Message</label><textarea id={`${kind}-message`} name="message" rows={4} placeholder={kind === "pricing" ? "Number of students, campuses and the modules you need" : "How can we help?"} className={FIELD} /></div>
      {status === "err" ? <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{msg}</p> : null}
      <button type="submit" disabled={status === "sending"} className={cn(btn("primary", "lg"), "sm:col-span-2")}>
        {status === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden />Sending…</> : kind === "pricing" ? "Request a quote" : "Send message"}
      </button>
    </form>
  );
}
