import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { btn } from "@/components/ui";
import { cn } from "@/lib/utils";

const T = {
  en: { text: "Hello, I would like to know more about SOD EduPlus.", label: "Chat on WhatsApp" },
  ar: { text: "مرحبًا، أودّ معرفة المزيد عن SOD EduPlus.", label: "تواصل عبر واتساب" },
};

export function WhatsAppButton({ className, locale = "en" }: { className?: string; locale?: Locale }) {
  if (!WHATSAPP_NUMBER) return null;
  const t = T[locale];
  const text = encodeURIComponent(t.text);
  return (
    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`} target="_blank" rel="noopener" className={cn(btn("outline", "lg"), className)}>
      <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden /> {t.label}
    </a>
  );
}
