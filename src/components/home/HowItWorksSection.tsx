import React from "react";
import { MousePointerClick, MessageSquareShare, PackageCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "01",
      icon: MousePointerClick,
      title: "1. Navegue e Selecione",
      description:
        "Explore as categorias, escolha seus produtos favoritos e adicione tudo à sua sacola com as variações desejadas (cor, tamanho ou quantidade).",
      tag: "Escolha com calma",
    },
    {
      stepNumber: "02",
      icon: MessageSquareShare,
      title: "2. Envie sua Lista para o WhatsApp",
      description:
        "Ao clicar em \"Enviar Pedido pelo WhatsApp\", sua lista de produtos é convertida automaticamente em uma mensagem organizada para a nossa equipe.",
      tag: "Conversão em 1 clique",
    },
    {
      stepNumber: "03",
      icon: PackageCheck,
      title: "3. Confirme e Receba",
      description:
        "Nosso atendente confere o estoque, calcula as melhores opções de frete ou retirada em Santana/SP, combina o pagamento (Pix/Cartão) e despacha o pedido!",
      tag: "Entrega ou retirada",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-primary-light/30 border-b border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="accent" size="md">
            SIMPLES E RÁPIDO
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
            Como comprar pelo nosso catálogo em 3 passos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Você escolhe com calma no catálogo e tem o suporte humanizado de nossa equipe para concluir seu pedido.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.stepNumber}
                className="relative bg-surface p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-black shadow-md shadow-primary/25">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 select-none">
                    {s.stepNumber}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    {s.tag}
                  </span>
                  <h3 className="font-extrabold text-foreground text-lg">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                {/* Progress arrow indicator for 1 and 2 */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-primary font-black text-xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
