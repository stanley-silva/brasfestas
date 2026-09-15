"use client";

import React, { useState, useMemo, useRef, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useCartStore } from "@/store/use-cart-store";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { formatBRL, buildGeneralContactWhatsAppUrl } from "@/lib/whatsapp";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const emptySubscribe = () => () => {};

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { getTotalItems, setIsOpen } = useCartStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Dynamic live search results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(query);
      const matchDesc = p.description.toLowerCase().includes(query);
      const matchSku = p.sku.toLowerCase().includes(query);
      const matchTag = p.tags.some((t) => t.toLowerCase().includes(query));
      return matchName || matchDesc || matchSku || matchTag;
    }).slice(0, 6);
  }, [searchQuery]);

  // Click outside to close live search popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      router.push(`/produtos?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const totalItems = mounted ? getTotalItems() : 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6 shrink-0">
            <Logo size="md" />
          </div>

          {/* Search bar desktop with dynamic live results */}
          <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-xl mx-4 relative">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(e);
                  } else if (e.key === "Escape") {
                    setIsSearchOpen(false);
                  }
                }}
                placeholder="Buscar balões, formas, topos, confeitaria..."
                className="w-full pl-11 pr-10 py-2.5 bg-slate-50 border-2 border-slate-100 hover:border-pink-200 rounded-full text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all shadow-2xs font-medium"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-dark p-1 rounded-full cursor-pointer"
                  aria-label="Limpar busca"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Instant Live Search Results Popover */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-3xl shadow-2xl border-2 border-pink-100 overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-2 duration-150">
                <div className="p-3 bg-pink-50/60 border-b border-pink-100/80 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-accent">
                    Resultados ao vivo ({searchResults.length})
                  </span>
                  <span className="text-[10px] text-dark-muted">
                    Pressione Enter para ver tudo
                  </span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/produtos/${product.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3.5 p-3 hover:bg-pink-50/50 transition-colors group"
                      >
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-black uppercase tracking-tight text-dark group-hover:text-accent transition-colors truncate">
                            {product.name}
                          </p>
                          <p className="text-[11px] text-dark-muted truncate">
                            {product.shortDescription || product.sku}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs sm:text-sm font-black text-dark">
                            {formatBRL(product.price)}
                          </span>
                        </div>
                      </Link>
                    ))}

                    <div className="p-2.5 bg-slate-50 text-center">
                      <Link
                        href={`/produtos?q=${encodeURIComponent(searchQuery.trim())}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="text-xs font-black uppercase tracking-wider text-accent hover:underline inline-flex items-center gap-1"
                      >
                        <span>Ver todos os resultados no catálogo completo</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center space-y-2">
                    <p className="text-xs sm:text-sm font-bold text-dark">
                      Nenhum produto encontrado com &ldquo;{searchQuery}&rdquo;
                    </p>
                    <p className="text-xs text-dark-muted">
                      Tente outro termo ou envie uma mensagem no WhatsApp.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Actions: Cart Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-accent/20 cursor-pointer active:scale-95"
              aria-label="Abrir sacola de compras"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Sacola</span>
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-dark text-white rounded-full text-xs font-black">
                {totalItems}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-dark hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Row (Desktop) */}
        <nav className="hidden md:flex items-center justify-center border-t border-slate-100 py-2.5 text-sm font-semibold text-foreground">
          <div className="flex items-center justify-center gap-10">
            <Link
              href="/"
              className={`hover:text-accent transition-colors ${
                pathname === "/" ? "text-accent font-bold" : ""
              }`}
            >
              Início
            </Link>

            {/* Dropdown Categorias */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              onMouseLeave={() => setCategoriesDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1 hover:text-accent transition-colors cursor-pointer py-1 ${
                  pathname.startsWith("/categorias") ? "text-accent font-bold" : ""
                }`}
              >
                <span>Categorias</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Dropdown Menu */}
              {categoriesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Todas as 15 Categorias
                      </span>
                      <Link
                        href="/categorias"
                        className="text-xs text-accent hover:underline font-bold"
                        onClick={() => setCategoriesDropdownOpen(false)}
                      >
                        Ver Todas →
                      </Link>
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categorias/${cat.slug}`}
                        onClick={() => setCategoriesDropdownOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-accent-light hover:text-accent text-xs font-medium text-foreground transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="truncate">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/sobre"
              className={`hover:text-accent transition-colors ${
                pathname === "/sobre" ? "text-accent font-bold" : ""
              }`}
            >
              Sobre Nós
            </Link>

            <Link
              href="/contato"
              className={`hover:text-accent transition-colors ${
                pathname === "/contato" ? "text-accent font-bold" : ""
              }`}
            >
              Contato
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          {/* Mobile Search */}
          <div className="relative w-full">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(e);
                  }
                }}
                placeholder="Buscar balões, formas, topos..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border-2 border-slate-100 rounded-full text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-dark p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Dynamic Live Results */}
            {searchQuery.trim().length > 0 && (
              <div className="mt-2 bg-white rounded-2xl border-2 border-pink-100 shadow-lg overflow-hidden">
                <div className="p-2.5 bg-pink-50 border-b border-pink-100 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-accent">
                    Resultados ({searchResults.length})
                  </span>
                </div>
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/produtos/${product.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3 p-2.5 hover:bg-pink-50/50 transition-colors"
                      >
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-black uppercase tracking-tight text-dark truncate">
                            {product.name}
                          </p>
                          <p className="text-[11px] font-bold text-accent">
                            {formatBRL(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="p-2 bg-slate-50 text-center">
                      <Link
                        href={`/produtos?q=${encodeURIComponent(searchQuery.trim())}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setSearchQuery("");
                        }}
                        className="text-xs font-black uppercase text-accent hover:underline"
                      >
                        Ver todos no catálogo completo →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-dark-muted">
                    Nenhum produto encontrado com &ldquo;{searchQuery}&rdquo;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-2 pt-2 text-sm font-semibold text-slate-800">
            <Link
              href="/"
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/categorias"
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Todas as Categorias (15)
            </Link>
            <Link
              href="/sobre"
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/contato"
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>

          {/* Mobile WhatsApp Button */}
          <a
            href={buildGeneralContactWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chamar Atendente no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
