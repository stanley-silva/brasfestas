import React from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Economizo muito tempo comprando aqui. Pego os corantes, as caixas de transporte de bolo e os topos em um único pedido. O atendimento no WhatsApp responde super rápido e nunca me deixaram na mão com prazo.",
      author: "Juliana M.",
      role: "Confeiteira Artesanal",
      rating: 5,
    },
    {
      quote:
        "A qualidade dos balões e a variedade de cores é fantástica. Montei um arco desconstruído completo usando os balões metalizados e candy colors que pedi pelo catálogo. Chegou tudo impecável.",
      author: "Camila R.",
      role: "Designer de Festas Infantis",
      rating: 5,
    },
    {
      quote:
        "Fiz a festa do meu filho em casa e achei incrível poder escolher tudo pelo site e tirar dúvidas de quantas forminhas eu precisava direto com a atendente no zap. Praticidade nota 10!",
      author: "Marcos S.",
      role: "Cliente Satisfeito",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            DEPOIMENTOS REAIS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            O que nossos clientes dizem sobre nós
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            A confiança de quem conta com a Brasfestas para comemorações e produções gastronômicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-slate-50/70 p-7 rounded-3xl border border-slate-100 flex flex-col justify-between hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300/60" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-amber-400 flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm leading-tight">
                    {t.author}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
