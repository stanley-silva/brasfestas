"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import { STORE_INFO } from "@/data/store-info";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none pointer-events-auto">
      {/* Friendly floating balloon bubble */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2 max-w-[220px] animate-bounce duration-1000">
          <span className="leading-snug">
            Dúvidas ou orçamento? <strong>Fale no WhatsApp!</strong>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-emerald-100 transform rotate-45" />
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={buildGeneralContactWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={`Conversar no WhatsApp com ${STORE_INFO.name}`}
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-xs" />
      </a>
    </div>
  );
}
