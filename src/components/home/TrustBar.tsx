import React from "react";

export function TrustBar() {
  const advantages = [
    {
      title: "ATENDIMENTO ÁGIL NO WHATSAPP",
      description:
        "Tire dúvidas sobre cores, tamanhos e combinações em minutos direto com nossos consultores especializados.",
      borderColor: "border-pink-100/80 hover:border-accent",
      highlightColor: "group-hover:text-accent",
      accentBar: "group-hover:bg-accent",
    },
    {
      title: "RETIRADA OU UBER FLASH",
      description:
        "Retire seu pedido rapidamente em nossa loja física em Santana (SP) ou receba com agilidade via Uber Flash.",
      borderColor: "border-orange-100/80 hover:border-primary",
      highlightColor: "group-hover:text-primary",
      accentBar: "group-hover:bg-primary",
    },
    {
      title: "PERSONALIZAÇÃO DTF UV",
      description:
        "Tecnologia própria para personalizar balões, topos e artigos com cores vibrantes e acabamento profissional.",
      borderColor: "border-pink-100/80 hover:border-accent",
      highlightColor: "group-hover:text-accent",
      accentBar: "group-hover:bg-accent",
    },
    {
      title: "VARIEDADE COM PREÇO JUSTO",
      description:
        "Mais de 15 categorias completas, do descartável básico aos insumos finos de confeitaria em um só lugar.",
      borderColor: "border-orange-100/80 hover:border-primary",
      highlightColor: "group-hover:text-primary",
      accentBar: "group-hover:bg-primary",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 border-b border-pink-100/60 relative overflow-hidden">
      {/* Delicate ambient lighting */}
      <div className="absolute -top-20 right-10 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4 Advantages Cards Grid - No header, no icons, balanced layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className={`group bg-white p-6 sm:p-7 rounded-3xl border-2 ${item.borderColor} hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 flex flex-col justify-center relative overflow-hidden min-h-[170px]`}
            >
              {/* Subtle top indicator pill */}
              <div
                className={`w-8 h-1 rounded-full bg-slate-200 ${item.accentBar} transition-colors mb-4`}
              />

              <h3
                className={`text-sm sm:text-base font-black uppercase tracking-tight text-dark mb-2 leading-snug ${item.highlightColor} transition-colors`}
              >
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

