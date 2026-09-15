import React from "react";
import { MessageCircle, Sparkles, Clock, CheckCircle } from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF5F7] border-t border-pink-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/20 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-wider text-accent">
            Atendimento Personalizado
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-dark tracking-tight uppercase leading-[1.12]">
          Vamos criar uma <span className="text-accent">festa única?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-dark-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Fale com nossos consultores agora mesmo e receba o orçamento dos seus artigos e balões personalizados sem compromisso.
        </p>

        {/* Pink CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={buildGeneralContactWhatsAppUrl("Olá! Gostaria de personalizar os artigos para a minha festa.")}
            external
            variant="accent"
            size="lg"
            icon={<MessageCircle className="w-5 h-5 fill-white text-white" />}
            className="w-full sm:w-auto shadow-xl shadow-accent/25 uppercase text-xs sm:text-sm tracking-wide"
          >
            Personalizar Artigos de Festa
          </Button>
        </div>

        {/* 3 Trust Badges below CTA */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-dark">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="uppercase tracking-wider">Arte Exclusiva Grátis</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="uppercase tracking-wider">Atendimento em Minutos</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="uppercase tracking-wider">Sem Pedido Mínimo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
