import React from "react";
import { STORE_INFO } from "@/data/store-info";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-4 py-2 select-none shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Text without chat bubble */}
        <div className="text-left">
          <p className="tracking-wide font-medium text-white/95 line-clamp-1">
            Atendimento rápido e orçamentos direto no WhatsApp: Tire dúvidas em tempo real!
          </p>
        </div>

        {/* Right: Phone, Location, and WhatsApp grouped together */}
        <div className="flex items-center gap-3 text-white/95 shrink-0 flex-wrap justify-end">
          <a
            href={`tel:${STORE_INFO.contacts.phone.replace(/\D/g, "")}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-white/90" />
            <span>{STORE_INFO.contacts.phone}</span>
          </a>

          <span className="hidden sm:inline text-white/50">•</span>

          <span className="hidden md:flex items-center gap-1 text-white/90">
            <MapPin className="w-3.5 h-3.5 text-white/80" />
            <span>Santana, São Paulo/SP</span>
          </span>

          <span className="hidden md:inline text-white/50">•</span>

          <a
            href={buildGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white hover:bg-white/25 font-bold transition-all bg-white/15 px-3 py-0.5 rounded-full"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
            <span>WhatsApp: {STORE_INFO.contacts.whatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
