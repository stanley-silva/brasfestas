import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { STORE_INFO } from "@/data/store-info";
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-slate-300 relative pt-14 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Store Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Logo size="md" />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sua loja completa de artigos para festas, confeitaria, embalagens e personalizados DTF UV. Variedade, preço justo e atendimento consultivo direto no WhatsApp.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-accent">
              <ShieldCheck className="w-4 h-4 shrink-0 text-accent" />
              <span>Compras seguras com atendimento humanizado</span>
            </div>
          </div>

          {/* Col 2: Categories (3 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/categorias/baloes" className="hover:text-accent transition-colors">
                  Balões e Bexigas
                </Link>
              </li>
              <li>
                <Link href="/categorias/confeitaria" className="hover:text-accent transition-colors">
                  Confeitaria
                </Link>
              </li>
              <li>
                <Link href="/categorias/decoracao-e-topos-de-bolo" className="hover:text-accent transition-colors">
                  Topos de Bolo
                </Link>
              </li>
              <li>
                <Link href="/categorias/bandejas-e-suportes" className="hover:text-accent transition-colors">
                  Bandejas e Boleiras
                </Link>
              </li>
              <li>
                <Link href="/categorias/dtf-uv-personalizados" className="hover:text-accent transition-colors">
                  Personalizados DTF UV
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/categorias" className="text-accent font-black uppercase text-xs hover:underline flex items-center gap-1">
                  <span>Todas as 15 Categorias →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="hover:text-accent transition-colors">
                  Como Comprar
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-accent transition-colors">
                  Localização da Loja
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Loja Física & Atendimento
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="leading-snug">
                  {STORE_INFO.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                </div>
                <a
                  href={`tel:${STORE_INFO.contacts.phone.replace(/\D/g, "")}`}
                  className="hover:text-accent transition-colors"
                >
                  {STORE_INFO.contacts.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <a
                  href={buildGeneralContactWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors font-medium"
                >
                  {STORE_INFO.contacts.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                </div>
                <a
                  href={`mailto:${STORE_INFO.contacts.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {STORE_INFO.contacts.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  <p>{STORE_INFO.businessHours.weekdays}</p>
                  <p>{STORE_INFO.businessHours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {STORE_INFO.name}. Todos os direitos reservados.</p>
          <p className="text-slate-400 font-medium">
            Santana • São Paulo/SP • Vendas no Atacado e Varejo
          </p>
        </div>
      </div>
    </footer>
  );
}

