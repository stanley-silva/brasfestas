import React from "react";
import {
  Award,
  Zap,
  Sparkles,
  MessageCircle,
  PackageCheck,
  Clock,
} from "lucide-react";

export function WhyChooseUsSection() {
  const differentials = [
    {
      number: "01",
      icon: Award,
      iconBg: "bg-pink-50 text-accent",
      borderColor: "border-pink-100/80 hover:border-accent",
      title: "Mais de 8 Anos de Experiência",
      description:
        "Tradição no mercado paulistano de festas e confeitaria, transformando momentos especiais com compromisso, qualidade e pontualidade.",
    },
    {
      number: "02",
      icon: Zap,
      iconBg: "bg-orange-50 text-primary",
      borderColor: "border-orange-100/80 hover:border-primary",
      title: "Produção Própria",
      description:
        "Fabricação e personalização direta em nossa estrutura em Santana, garantindo agilidade no prazo e excelente custo-benefício para sua celebração.",
    },
    {
      number: "03",
      icon: Sparkles,
      iconBg: "bg-pink-50 text-accent",
      borderColor: "border-pink-100/80 hover:border-accent",
      title: "Tecnologia DTF UV",
      description:
        "Estamparia própria de alta precisão com relevo táctil, cores vibrantes e durabilidade resistente à água para copos, topos e artigos decorativos.",
    },
    {
      number: "04",
      icon: MessageCircle,
      iconBg: "bg-orange-50 text-primary",
      borderColor: "border-orange-100/80 hover:border-primary",
      title: "Atendimento Consultivo",
      description:
        "Consultores reais no WhatsApp prontos para tirar dúvidas sobre combinações de cores, temas e quantidades ideais para sua festa.",
    },
    {
      number: "05",
      icon: PackageCheck,
      iconBg: "bg-pink-50 text-accent",
      borderColor: "border-pink-100/80 hover:border-accent",
      title: "Variedade em um Só Lugar",
      description:
        "Mais de 15 categorias completas reunidas em um único catálogo: balões, confeitaria, embalagens, descartáveis, suportes e artigos temáticos.",
    },
    {
      number: "06",
      icon: Clock,
      iconBg: "bg-orange-50 text-primary",
      borderColor: "border-orange-100/80 hover:border-primary",
      title: "Orçamento Rápido",
      description:
        "Sem cadastros demorados. Selecione o que precisa em nosso catálogo e receba o retorno com valores e disponibilidade em minutos.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, Uncluttered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-accent/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[11px] font-black uppercase tracking-wider text-accent">
              Diferenciais BrasFestas
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-dark tracking-tight uppercase leading-tight">
            Por que comemorar com a BrasFestas?
          </h2>

          <p className="text-sm sm:text-base text-dark-muted mt-3 font-normal leading-relaxed">
            Uma experiência leve, prática e transparente para você encontrar tudo o que precisa e realizar sua celebração com total tranquilidade.
          </p>
        </div>

        {/* 6 Balanced, Spacious Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group bg-white p-7 sm:p-8 rounded-3xl border-2 ${item.borderColor} hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top row with icon & subtle sequence number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-200`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-300 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-dark mb-2.5 leading-snug group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark-muted font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
