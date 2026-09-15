import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { FeaturedProductsCarousel } from "@/components/home/FeaturedProductsCarousel";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, getFeaturedProducts } from "@/data/products";
import { ArrowRight, Sparkles, Flame } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const featuredCategories = CATEGORIES.filter((c) => c.featured);
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="space-y-0">
      <HeroSection />
      <TrustBar />

      {/* Categorias em Destaque */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[11px] font-black uppercase tracking-wider text-accent">
                  Nosso Catálogo
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-dark tracking-tight uppercase">
                Escolha o que você procura por categoria
              </h2>
              <p className="text-sm sm:text-base text-dark-muted font-normal">
                Clique na categoria desejada para ver todos os modelos, cores e formatos disponíveis.
              </p>
            </div>

            <Link
              href="/categorias"
              className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-xs text-accent hover:underline shrink-0"
            >
              <span>Ver todas as 15 categorias</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((cat) => {
              const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
              return <CategoryCard key={cat.id} category={cat} itemCount={count} />;
            })}
          </div>
        </div>
      </section>

      {/* Mais Vendidos e Destaques da Semana */}
      <section className="py-16 sm:py-24 bg-ice border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-primary/20">
                <Flame className="w-3.5 h-3.5 fill-primary text-primary" />
                <span className="text-[11px] font-black uppercase tracking-wider text-primary">
                  Os Favoritos para Festas
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-dark tracking-tight uppercase">
                Mais Vendidos & Destaques da Semana
              </h2>
              <p className="text-sm sm:text-base text-dark-muted font-normal">
                Os itens mais pedidos por confeiteiras e decoradores em nossa loja.
              </p>
            </div>

            <Button
              href="/produtos"
              variant="accent"
              size="md"
              icon={<Sparkles className="w-4 h-4" />}
              className="shrink-0 uppercase text-xs tracking-wider"
            >
              Ver Catálogo Completo
            </Button>
          </div>

          <FeaturedProductsCarousel products={featuredProducts} />
        </div>
      </section>

      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}
