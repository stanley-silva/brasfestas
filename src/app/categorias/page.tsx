"use client";

import React, { useState } from "react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { Search, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function CategoriasPage() {
  const [filterQuery, setFilterQuery] = useState("");

  const filteredCategories = CATEGORIES.filter(
    (cat) =>
      cat.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="bg-ice min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Categorias Oficiais" }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <Badge
              variant="accent"
              size="md"
              icon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
            >
              Linha Completa de Artigos
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              Todas as 15 Categorias do Catálogo
            </h1>
            <p className="text-sm sm:text-base text-foreground/70 max-w-2xl">
              Navegue pelos departamentos de balões, confeitaria, embalagens, descartáveis e personalizados para encontrar exatamente o que precisa para a sua comemoração.
            </p>
          </div>

          {/* Search Category Filter */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filtrar por nome de categoria..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-slate-200 rounded-xl text-sm text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-surface rounded-3xl border border-slate-200 p-8 space-y-4">
            <p className="text-foreground/70 text-base">
              Nenhuma categoria encontrada para &ldquo;<strong>{filterQuery}</strong>&rdquo;.
            </p>
            <Button
              onClick={() => setFilterQuery("")}
              variant="primary"
              size="md"
            >
              Limpar busca
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
              return <CategoryCard key={cat.id} category={cat} itemCount={count} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
