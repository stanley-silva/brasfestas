"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatBRL, buildDirectProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/use-cart-store";
import { ShoppingBag, Eye, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : undefined;
    addItem(product, defaultVariant, 1);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
      });
    } catch {
      // safe fallback
    }
  };

  const handleDirectWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : undefined;
    const url = buildDirectProductWhatsAppUrl({
      productName: product.name,
      skuOrId: product.sku || product.id,
      variantName: defaultVariant?.name,
      price: product.price + (defaultVariant?.priceDiff || 0),
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group relative bg-white rounded-3xl border-2 border-pink-100/70 hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image Container */}
      <Link href={`/produtos/${product.slug}`} className="relative aspect-square overflow-hidden bg-pink-50/40 block">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges / Dark Pills */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tags.map((tag) => {
            const isBestSeller = tag === "Mais Vendido";
            return (
              <span
                key={tag}
                className={`px-3 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-full shadow-xs ${
                  isBestSeller
                    ? "bg-accent text-white"
                    : "bg-dark/90 backdrop-blur-xs text-white"
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* Hover quick action overlay */}
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <span className="p-3 rounded-full bg-white text-dark shadow-lg hover:bg-accent hover:text-white transition-colors">
            <Eye className="w-5 h-5" />
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <Link
            href={`/produtos/${product.slug}`}
            className="font-black text-dark text-sm md:text-base uppercase tracking-tight hover:text-accent transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>
          {product.shortDescription && (
            <p className="text-xs text-dark-muted line-clamp-1 font-normal">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-dark">
              {formatBRL(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatBRL(product.originalPrice)}
              </span>
            )}
          </div>
          <p className="text-[11px] text-whatsapp font-bold">
            Em até 3x ou à vista no Pix
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-5 gap-2 pt-3 border-t border-slate-100">
          <button
            onClick={handleAddToCart}
            className="col-span-4 py-2.5 px-3 bg-accent hover:bg-accent-hover text-white font-black uppercase tracking-wider rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm shadow-accent/20 cursor-pointer active:scale-[0.98]"
            aria-label="Adicionar produto à sacola"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Adicionar</span>
          </button>

          <button
            onClick={handleDirectWhatsApp}
            className="col-span-1 py-2.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            title="Pedir direto no WhatsApp"
            aria-label="Pedir no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
