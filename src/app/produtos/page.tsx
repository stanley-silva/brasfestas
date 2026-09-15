"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Search,
  Filter,
  ArrowUpDown,
  MessageCircle,
  X,
  Sparkles,
} from "lucide-react";
import { buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"recent" | "price-asc" | "price-desc" | "popular">("popular");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Text Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesSku = product.sku.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesSku) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== "all" && product.categoryId !== selectedCategory) {
        return false;
      }

      // 3. Price Filter
      if (selectedPriceRange === "under-20" && product.price >= 20) return false;
      if (selectedPriceRange === "20-40" && (product.price < 20 || product.price > 40)) return false;
      if (selectedPriceRange === "over-40" && product.price <= 40) return false;

      // 4. Tag Filter
      if (selectedTag !== "all" && !product.tags.includes(selectedTag)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "popular") {
        const aPop = a.tags.includes("Mais Vendido") ? 1 : 0;
        const bPop = b.tags.includes("Mais Vendido") ? 1 : 0;
        return bPop - aPop;
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedPriceRange, selectedTag, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedTag("all");
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || selectedPriceRange !== "all" || selectedTag !== "all";

  return (
    <div className="bg-ice min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Catálogo Completo" }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <Badge
              variant="accent"
              size="md"
              icon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
            >
              Exploração Geral
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              Catálogo Completo de Artigos para Festa
            </h1>
            <p className="text-sm sm:text-base text-foreground/70 max-w-2xl">
              Encontre materiais, insumos de confeitaria e decorações com facilidade.
            </p>
          </div>

          {/* Quick Clear or Filter toggle for mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-surface border border-slate-200 rounded-xl text-sm font-bold text-foreground shadow-2xs cursor-pointer"
            >
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters + Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block bg-surface p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-black text-foreground text-base">
                <Filter className="w-4 h-4 text-primary" />
                <span>Filtros de Busca</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-accent hover:underline font-bold cursor-pointer"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Search Input Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Buscar por termo
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Nome, cor, tamanho..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Categoria
              </label>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground font-bold"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span>Todas as Categorias</span>
                  <span className="text-[10px] opacity-70">{PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground font-bold"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span className="text-[10px] opacity-70 shrink-0">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Faixa de Preço
              </label>
              <div className="space-y-1 text-xs font-semibold text-slate-600">
                {[
                  { id: "all", label: "Qualquer valor" },
                  { id: "under-20", label: "Até R$ 20,00" },
                  { id: "20-40", label: "De R$ 20,00 a R$ 40,00" },
                  { id: "over-40", label: "Acima de R$ 40,00" },
                ].map((range) => (
                  <label
                    key={range.id}
                    className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="price-range"
                      checked={selectedPriceRange === range.id}
                      onChange={() => setSelectedPriceRange(range.id)}
                      className="accent-primary"
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Destaques
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: "Todos" },
                  { id: "Mais Vendido", label: "Mais Vendidos" },
                  { id: "Pronta Entrega", label: "Pronta Entrega" },
                  { id: "Lançamento", label: "Lançamentos" },
                ].map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      selectedTag === tag.id
                        ? "bg-dark text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              <div
                className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="relative ml-auto w-full max-w-xs bg-white h-full p-6 shadow-2xl flex flex-col space-y-6 overflow-y-auto z-10">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                    <Filter className="w-4 h-4 text-amber-500" />
                    <span>Filtros</span>
                  </div>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Category List */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Categoria
                  </label>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setMobileFiltersOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold ${
                        selectedCategory === "all"
                          ? "bg-amber-400 text-slate-950 font-bold"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      Todas as Categorias
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setMobileFiltersOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold ${
                          selectedCategory === cat.id
                            ? "bg-amber-400 text-slate-950 font-bold"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Price Filter */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Faixa de Preço
                  </label>
                  <div className="space-y-1 text-xs font-semibold text-slate-600">
                    {[
                      { id: "all", label: "Qualquer valor" },
                      { id: "under-20", label: "Até R$ 20,00" },
                      { id: "20-40", label: "De R$ 20,00 a R$ 40,00" },
                      { id: "over-40", label: "Acima de R$ 40,00" },
                    ].map((range) => (
                      <label
                        key={range.id}
                        className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="mobile-price-range"
                          checked={selectedPriceRange === range.id}
                          onChange={() => {
                            setSelectedPriceRange(range.id);
                            setMobileFiltersOpen(false);
                          }}
                          className="accent-amber-500"
                        />
                        <span>{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-2">
                  <button
                    onClick={() => {
                      clearAllFilters();
                      setMobileFiltersOpen(false);
                    }}
                    className="flex-1 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Limpar
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl"
                  >
                    Ver Resultados
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Product Area */}
          <main className="lg:col-span-3 space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-semibold text-slate-700">
                Encontrados <strong>{filteredProducts.length}</strong> produtos
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <ArrowUpDown className="w-4 h-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                >
                  <option value="popular">Mais vendidos</option>
                  <option value="recent">Mais recentes</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                </select>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 px-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-5">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-lg font-black text-slate-900">
                    Nenhum produto encontrado com esses termos
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    Que tal nos mandar uma foto no WhatsApp para verificarmos em estoque ou encomendarmos para você?
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={clearAllFilters}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors"
                  >
                    Limpar todos os filtros
                  </button>

                  <a
                    href={buildGeneralContactWhatsAppUrl(
                      "Olá! Estava buscando um produto no catálogo da Brasfestas e não encontrei. Poderiam me ajudar a verificar a disponibilidade no estoque da loja?"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Mandar foto no WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Carregando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
