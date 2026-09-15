"use client";

import React, { useRef, useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedProductsCarouselProps {
  products: Product[];
}

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getItemsPerViewSnapshot(): number {
  if (typeof window === "undefined") return 4;
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
}

export function FeaturedProductsCarousel({ products }: FeaturedProductsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemsPerView = useSyncExternalStore(
    subscribeToResize,
    getItemsPerViewSnapshot,
    () => 4
  );

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerView));

  const checkScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const ratio = Math.max(0, Math.min(1, scrollLeft / maxScroll));
    const currentIdx = Math.round(ratio * (totalPages - 1));
    setActiveIndex(currentIdx);
  }, [totalPages]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * itemsPerView;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const goToPage = (pageIdx: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const targetScroll =
      pageIdx === totalPages - 1 ? maxScroll : (pageIdx / (totalPages - 1)) * maxScroll;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(pageIdx);
  };

  const showNavigation = products.length > 4;

  return (
    <div className="relative">
      <div className="relative px-10 sm:px-14">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Ver produtos anteriores"
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 shadow-md flex items-center justify-center transition-all duration-200 select-none ${
            canScrollLeft
              ? "bg-white text-dark border-pink-200 hover:border-accent hover:bg-accent hover:text-white hover:scale-105 active:scale-95 cursor-pointer opacity-100"
              : "bg-white/70 text-slate-300 border-slate-200 opacity-40 cursor-not-allowed pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Ver próximos produtos"
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 shadow-md flex items-center justify-center transition-all duration-200 select-none ${
            canScrollRight
              ? "bg-white text-dark border-pink-200 hover:border-accent hover:bg-accent hover:text-white hover:scale-105 active:scale-95 cursor-pointer opacity-100"
              : "bg-white/70 text-slate-300 border-slate-200 opacity-40 cursor-not-allowed pointer-events-none"
          }`}
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {showNavigation && totalPages > 1 && (
        <div
          className="flex items-center justify-center gap-2.5 mt-8"
          role="tablist"
          aria-label="Navegação entre páginas de produtos"
        >
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goToPage(idx)}
                aria-label={`Ir para a página ${idx + 1} de ${totalPages}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-8 h-2.5 bg-accent shadow-xs"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:scale-125"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
