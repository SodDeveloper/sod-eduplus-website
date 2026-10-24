import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { btn } from "@/components/ui";
import { cn } from "@/lib/utils";

export function WhatsAppButton({ className }: { className?: string }) {
  if (!WHATSAPP_NUMBER) return null;
  const text = encodeURIComponent("Hello, I would like to know more about SOD EduPlus.");
  return (
    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`} target="_blank" rel="noopener" className={cn(btn("outline", "lg"), className)}>
      <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden /> Chat on WhatsApp
    </a>
  );
}
