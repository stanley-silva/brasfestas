"use client";

import React, { useState, useMemo, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowUpDown, MessageCircle } from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

interface CategorySlugPageProps {
  params: Promise<{ slug: string }>;
}

export default function CategorySlugPage({ params }: CategorySlugPageProps) {
  const { slug } = use(params);
  const category = CATEGORIES.find((c) => c.slug === slug);

  const [sortBy, setSortBy] = useState<"recent" | "price-asc" | "price-desc" | "popular">("popular");

  if (!category) {
    notFound();
  }

  const categoryProducts = useMemo(() => {
    const list = PRODUCTS.filter((p) => p.categoryId === category.id);

    return [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "popular") {
        const aPop = a.tags.includes("Mais Vendido") ? 1 : 0;
        const bPop = b.tags.includes("Mais Vendido") ? 1 : 0;
        return bPop - aPop;
      }
      return 0;
    });
  }, [category.id, sortBy]);

  const breadcrumbs = [
    { label: "Categorias", href: "/categorias" },
    { label: category.name },
  ];

  return (
    <div className="bg-ice min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Category Banner Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-pink-100/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center sm:items-start gap-5">
            {/* Category Photo Frame */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border-2 border-pink-100 shrink-0 shadow-xs">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover"
              />
              <div className="absolute top-1.5 left-1.5 w-6 h-6 rounded-lg bg-white/90 backdrop-blur-sm text-accent flex items-center justify-center shadow-xs">
                <DynamicIcon name={category.iconName} className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-dark tracking-tight uppercase">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-dark-muted max-w-xl leading-relaxed font-normal">
                {category.description}
              </p>
              <p className="text-xs font-black text-accent pt-1 uppercase tracking-wider">
                {categoryProducts.length}{" "}
                {categoryProducts.length === 1 ? "produto cadastrado" : "produtos cadastrados"}
              </p>
            </div>
          </div>

          {/* Quick Help WhatsApp */}
          <Button
            href={buildGeneralContactWhatsAppUrl(
              `Olá! Gostaria de consultar itens da categoria "${category.name}" na loja Brasfestas.`
            )}
            external
            variant="whatsapp"
            size="sm"
            icon={<MessageCircle className="w-4 h-4 fill-white text-white" />}
            className="shrink-0"
          >
            Consultar estoque desta categoria
          </Button>
        </div>

        {/* Controls Bar: Sort & Counter */}
        <div className="flex items-center justify-between gap-4 bg-surface p-4 rounded-2xl border border-slate-200/70 shadow-2xs">
          <span className="text-xs sm:text-sm font-semibold text-foreground/70">
            Exibindo todos os modelos e variações
          </span>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-foreground rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <option value="popular">Mais vendidos</option>
              <option value="recent">Mais recentes</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 bg-surface rounded-3xl border border-slate-200 p-8 space-y-4">
            <p className="text-slate-500 text-base">
              Nenhum produto cadastrado diretamente nesta categoria no momento. Que tal nos chamar no WhatsApp para conferirmos os modelos em estoque físico?
            </p>
            <Button
              href={buildGeneralContactWhatsAppUrl()}
              external
              variant="whatsapp"
              size="md"
              icon={<MessageCircle className="w-4 h-4 fill-white" />}
            >
              Chamar Atendente no WhatsApp
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
