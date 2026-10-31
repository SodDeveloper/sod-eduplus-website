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
const INTERESTS_AR: Record<string, string> = { "SOD EduPlus Full": "SOD EduPlus Full (الإصدار الكامل)", "SOD EduPlus Lite": "SOD EduPlus Lite (الإصدار المختصر)", "Not sure yet": "لم أقرّر بعد", Pricing: "الأسعار", Partnership: "الشراكة", Other: "أخرى" };

const T = {
  en: { req: "Please fill in your name, email and phone.", email: "Please enter a valid email address.", phone: "Please enter a valid phone number with country code.", fail: (e: string) => `Sorry, we could not send your message. Please try again later or email ${e}.`, thanks: "Thank you, your message has been received.", reply: "Our team will get back to you within one working day.", preview: "Preview mode: this site is not yet connected to our system, so nothing was sent.", name: "Name *", org: "School / organisation", emailL: "Email *", phoneL: "Phone *", phonePh: "+ country code", country: "Country", interest: "Interested in", choose: "Choose one", message: "Message", msgPricing: "Number of students, campuses and the modules you need", msgContact: "How can we help?", sending: "Sending…", quote: "Request a quote", send: "Send message" },
  ar: { req: "يرجى إدخال الاسم والبريد الإلكتروني ورقم الهاتف.", email: "يرجى إدخال بريد إلكتروني صحيح.", phone: "يرجى إدخال رقم هاتف صحيح مع رمز الدولة.", fail: (e: string) => `عذرًا، تعذّر إرسال رسالتك. يرجى المحاولة لاحقًا أو مراسلتنا على ${e}.`, thanks: "شكرًا لك، تم استلام رسالتك.", reply: "سيتواصل معك فريقنا خلال يوم عمل واحد.", preview: "وضع المعاينة: هذا الموقع غير مرتبط بنظامنا بعد، لذلك لم يُرسَل أي شيء.", name: "الاسم *", org: "المدرسة / الجهة", emailL: "البريد الإلكتروني *", phoneL: "رقم الهاتف *", phonePh: "+ رمز الدولة", country: "الدولة", interest: "مجال الاهتمام", choose: "اختر خيارًا", message: "الرسالة", msgPricing: "عدد الطلاب والفروع والوحدات التي تحتاجها", msgContact: "كيف يمكننا مساعدتك؟", sending: "جارٍ الإرسال…", quote: "اطلب عرض سعر", send: "إرسال الرسالة" },
};

type Status = "idle" | "sending" | "ok" | "preview" | "err";

export function ContactForm({ kind, locale = "en" }: { kind: "contact" | "pricing"; locale?: "en" | "ar" }) {
  const t = T[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim()) { setStatus("err"); setMsg(t.req); return; }
    if (!EMAIL_RE.test(data.email.trim())) { setStatus("err"); setMsg(t.email); return; }
    if (!PHONE_RE.test(data.phone.trim())) { setStatus("err"); setMsg(t.phone); return; }
    if (isPreviewMode()) { setStatus("preview"); setMsg(""); form.reset(); return; }
    setStatus("sending"); setMsg("");
    try {
      const interest = `${PRODUCT}: ${data.interest || (kind === "pricing" ? "Pricing" : "General enquiry")}`;
      const message = `[${LEAD_TAG} · ${LEAD_SOURCE} · ${kind} form]\n${data.message || ""}`.trim();
      const res = await postLead({ ...data, interest, message, product: PRODUCT_KEY, tag: LEAD_TAG, source: LEAD_SOURCE, locale });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok"); form.reset();
    } catch {
      setStatus("err"); setMsg(t.fail(CONTACT_EMAIL));
    }
  }

  if (status === "ok" || status === "preview") {
    return (
      <div role="status" className="mt-6 rounded-2xl bg-mist p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal" aria-hidden />
        <p className="mt-3 font-bold text-navy">{t.thanks}</p>
        <p className="mt-1 text-sm text-ink/65">{t.reply}</p>
        {status === "preview" ? <p className="mt-3 text-xs font-semibold text-ink/50">{t.preview}</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="hidden" aria-hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div><label htmlFor={`${kind}-name`} className={LABEL}>{t.name}</label><input id={`${kind}-name`} name="name" autoComplete="name" required className={FIELD} /></div>
      <div><label htmlFor={`${kind}-company`} className={LABEL}>{t.org}</label><input id={`${kind}-company`} name="company" autoComplete="organization" className={FIELD} /></div>
      <div><label htmlFor={`${kind}-email`} className={LABEL}>{t.emailL}</label><input id={`${kind}-email`} name="email" type="email" autoComplete="email" required dir="ltr" className={FIELD} /></div>
      <div><label htmlFor={`${kind}-phone`} className={LABEL}>{t.phoneL}</label><input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" required dir="ltr" placeholder={t.phonePh} className={FIELD} /></div>
      <div><label htmlFor={`${kind}-country`} className={LABEL}>{t.country}</label><input id={`${kind}-country`} name="country" autoComplete="country-name" className={FIELD} /></div>
      <div>
        <label htmlFor={`${kind}-interest`} className={LABEL}>{t.interest}</label>
        <select id={`${kind}-interest`} name="interest" defaultValue={kind === "pricing" ? "Pricing" : ""} className={FIELD}>
          <option value="">{t.choose}</option>
          {INTERESTS.map((i) => <option key={i} value={i}>{locale === "ar" ? INTERESTS_AR[i] : i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2"><label htmlFor={`${kind}-message`} className={LABEL}>{t.message}</label><textarea id={`${kind}-message`} name="message" rows={4} placeholder={kind === "pricing" ? t.msgPricing : t.msgContact} className={FIELD} /></div>
      {status === "err" ? <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{msg}</p> : null}
      <button type="submit" disabled={status === "sending"} className={cn(btn("primary", "lg"), "sm:col-span-2")}>
        {status === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden />{t.sending}</> : kind === "pricing" ? t.quote : t.send}
      </button>
    </form>
  );
}
