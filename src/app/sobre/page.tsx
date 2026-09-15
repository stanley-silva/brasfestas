import React from "react";
import Image from "next/image";
import { STORE_INFO } from "@/data/store-info";
import {
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Award,
} from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function SobrePage() {
  const pillars = [
    {
      icon: Award,
      title: "1. Qualidade Comprovada",
      description:
        "Insumos e materiais de alta performance que não desbotam, têm acabamento refinado e não te deixam na mão durante o evento.",
      color: "text-primary",
      bg: "bg-primary-light",
    },
    {
      icon: Users,
      title: "2. Atendimento de Amigo",
      description:
        "Não somos um robô. Quem te atende no WhatsApp é alguém pronto para dar dicas, tirar dúvidas técnicas e resolver sua demanda com empatia.",
      color: "text-accent",
      bg: "bg-accent-light",
    },
    {
      icon: Clock,
      title: "3. Compromisso com o Prazo",
      description:
        "Sabemos que a data da festa não muda — por isso cumprimos rigorosamente nossos envios e preparos de pedidos para retirada.",
      color: "text-foreground",
      bg: "bg-slate-100",
    },
  ];

  return (
    <div className="bg-ice min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section of About */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="accent" size="md">
            SOBRE A BRASFESTAS
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight leading-tight">
            Celebrar momentos felizes é a nossa maior paixão.
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-normal">
            Fornecendo tudo o que você precisa para transformar datas especiais em memórias inesquecíveis, com carinho e padrão profissional.
          </p>
        </div>

        {/* Story & Visuals */}
        <div className="bg-surface rounded-3xl border border-slate-200/80 shadow-xs p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Nossa Trajetória
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                  O mundo encantado das festas tudo em um só lugar
                </h2>
              </div>

              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed font-normal">
                Nossa história nasceu do amor por festas e da vontade de descomplicar a vida de quem organiza eventos. Percebemos que era desgastante precisar ir a vários lugares diferentes para comprar o topo de bolo em um canto, os balões em outro e as caixas de doces em outro.
              </p>

              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed font-normal">
                Criamos um espaço completo para que você resolva tudo com agilidade e qualidade. Seja para o primeiro mesversário de um bebê, uma festa de 15 anos marcante, um casamento sofisticado ou a produção semanal de bolos das melhores doceiras da região, oferecemos produtos rigorosamente selecionados para que o seu trabalho brilhe.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">
                  Loja física com 2 andares em Santana: {STORE_INFO.address.fullAddress}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=80"
                  alt="Instalações e Loja Brasfestas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              Nossos Pilares de Atuação
            </h2>
            <p className="text-sm text-foreground/70 font-normal">
              O que nos guia todos os dias no atendimento aos nossos clientes e parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-surface p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 hover:border-primary/40 transition-colors"
                >
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission, Vision, Values from original site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-white p-6 rounded-3xl space-y-2 shadow-xs">
            <h3 className="font-black text-lg">MISSÃO</h3>
            <p className="text-sm font-medium leading-relaxed text-white/95">
              Buscamos atender às necessidades e expectativas dos nossos clientes oferecendo produtos com o melhor custo e benefício, ideias inovadoras e excelência no atendimento para ajudar a realização da festa dos seus sonhos.
            </p>
          </div>

          <div className="bg-dark text-white p-6 rounded-3xl space-y-2 shadow-xs">
            <h3 className="font-black text-lg text-primary">VISÃO</h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Ser uma loja referência em artigos de festas e reconhecida como a melhor opção dos clientes pela confiança em nossos produtos, eficiência no serviço e excelência no atendimento humanizado.
            </p>
          </div>

          <div className="bg-accent text-white p-6 rounded-3xl space-y-2 shadow-xs">
            <h3 className="font-black text-lg">VALORES</h3>
            <p className="text-sm font-medium leading-relaxed text-white/95">
              Respeito • Qualidade comprovada • Humildade • Honestidade • Companheirismo com clientes e confeiteiras • Comprometimento com prazos e celebrações felizes.
            </p>
          </div>
        </div>

        {/* CTA to Contact/WhatsApp */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 sm:p-12 rounded-3xl text-center space-y-6 text-white">
          <h2 className="text-2xl sm:text-4xl font-black">
            Venha nos conhecer ou fale direto com um especialista
          </h2>
          <p className="text-white/90 text-base max-w-xl mx-auto font-medium">
            Estamos prontos para te ajudar na escolha dos melhores balões, topos, formas e descartáveis para o seu evento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/produtos"
              variant="secondary"
              size="lg"
            >
              Explorar Catálogo de Produtos
            </Button>
            <Button
              href={buildGeneralContactWhatsAppUrl()}
              external
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="w-4 h-4 fill-white" />}
            >
              Chamar no WhatsApp ({STORE_INFO.contacts.whatsapp})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
