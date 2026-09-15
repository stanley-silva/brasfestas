"use client";

import React, { useState } from "react";
import { STORE_INFO } from "@/data/store-info";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Por que o pedido é finalizado no WhatsApp?",
    answer:
      "Porque artigos de festa e confeitaria exigem cuidado especial com cores, detalhes e prazos. No WhatsApp, conferimos o lote exato com você, tiramos fotos reais do produto caso queira e calculamos o frete mais vantajoso para a sua localidade.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos Pix (com confirmação imediata), transferência bancária e cartões de crédito/débito via link de pagamento seguro.",
  },
  {
    question: "Como funciona a personalização em DTF UV?",
    answer:
      "As estampas em DTF UV possuem alta fixação e relevo premium. Após escolher os copos, taças ou garrafas, você nos envia a sua arte ou logotipo pelo WhatsApp e nós validamos a prévia antes da produção.",
  },
  {
    question: " Vocês fazem envios ou têm loja física para retirada?",
    answer:
      "Ambos! Se você estiver na nossa região em São Paulo, pode retirar diretamente em nossa loja física na Avenida Imirim, 2000, Santana/SP sem custo de entrega. Também despachamos diariamente via Correios e transportadoras com código de rastreio para todo o Brasil.",
  },
  {
    question: "Qual o prazo de resposta no WhatsApp?",
    answer:
      "Respondemos em poucos minutos durante o horário comercial (Segunda a Sexta das 08h às 18h e Sábados das 08h às 13h). Pedidos enviados fora do horário são respondidos logo no início do dia útil seguinte.",
  },
];

export default function ContatoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formName || "Cliente"}. Mensagem: ${formMessage}`;
    const url = buildGeneralContactWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  return (
    <div className="bg-ice min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="accent" size="md">
            ATENDIMENTO HUMANIZADO
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
            Dúvidas Frequentes & Atendimento
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 font-normal">
            Tire suas dúvidas sobre pagamentos, envios e encomendas personalizadas ou fale direto com nossa equipe.
          </p>
        </div>

        {/* Channels & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Message Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-surface p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-black text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Nossos Canais de Atendimento</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-primary-light border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Loja Física</strong>
                    <p>{STORE_INFO.address.fullAddress}</p>
                    <a
                      href={STORE_INFO.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-bold hover:underline inline-block mt-1"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">WhatsApp Comercial</strong>
                    <p>{STORE_INFO.contacts.whatsapp}</p>
                    <a
                      href={buildGeneralContactWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-bold hover:underline inline-block mt-1"
                    >
                      Iniciar conversa no WhatsApp agora →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Telefone Fixo</strong>
                    <p>{STORE_INFO.contacts.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Clock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Horário de Funcionamento</strong>
                    <p>{STORE_INFO.businessHours.weekdays}</p>
                    <p>{STORE_INFO.businessHours.saturday}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{STORE_INFO.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-surface p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-foreground">
                Envie uma mensagem rápida
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Preencha abaixo e sua mensagem abrirá automaticamente formatada no WhatsApp da loja.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    Qual o seu evento ou dúvida?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Ex: Gostaria de saber sobre balões personalizados e orçamento para 15 anos..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Janela do WhatsApp iniciada com sua mensagem!</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  icon={<Send className="w-4 h-4" />}
                >
                  Enviar para o WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-surface p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Tire suas dúvidas
                </span>
                <h2 className="text-2xl font-black text-foreground mt-1">
                  Perguntas Frequentes (FAQ)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-100/80 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-sm text-foreground leading-snug">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white text-sm text-foreground/75 leading-relaxed font-normal border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Banner Placeholder */}
            <div className="bg-surface p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                Venha nos visitar em Santana / São Paulo
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {STORE_INFO.address.fullAddress}. Estacionamento e fácil acesso na Zona Norte de São Paulo.
              </p>
              <Button
                href={STORE_INFO.address.googleMapsUrl}
                external
                variant="primary"
                size="sm"
              >
                Abrir Rota no GPS / Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
