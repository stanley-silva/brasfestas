"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, ProductVariant } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { formatBRL, buildDirectProductWhatsAppUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/use-cart-store";
import { ProductCard } from "@/components/products/ProductCard";
import {
  ShoppingBag,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import confetti from "canvas-confetti";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  const { addItem } = useCartStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);

  const currentPrice = product.price + (selectedVariant?.priceDiff || 0);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // safe fallback
    }
  };

  const handleBuyOnWhatsApp = () => {
    const url = buildDirectProductWhatsAppUrl({
      productName: product.name,
      skuOrId: product.sku || product.id,
      variantName: selectedVariant?.name,
      price: currentPrice * quantity,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  const breadcrumbs = [
    { label: "Categorias", href: "/categorias" },
    ...(category ? [{ label: category.name, href: `/categorias/${category.slug}` }] : []),
    { label: product.name },
  ];

  return (
    <div className="bg-ice min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Main PDP Grid */}
        <div className="bg-surface rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-ice border border-slate-100">
                <Image
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="accent"
                      size="sm"
                      className="shadow-xs font-black"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        selectedImage === idx
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & SKU */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <Badge variant="accent" size="sm">
                    {category?.name || "Catálogo"}
                  </Badge>
                  <span>Ref: {product.sku}</span>
                </div>

                {/* H1 Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight leading-tight">
                  {product.name}
                </h1>

                {/* Pricing & Installments */}
                <div className="p-4 rounded-2xl bg-accent-light border border-accent/20 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-foreground">
                      {formatBRL(currentPrice)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through font-medium">
                        {formatBRL(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-whatsapp font-bold">
                    Pagamento via Pix ou Cartão de Crédito no fechamento do WhatsApp.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Descrição do Produto
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Variant Selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Escolha a Opção / Variação:
                      </label>
                      {selectedVariant && (
                        <span className="text-xs font-semibold text-accent">
                          {selectedVariant.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v) => {
                        const isSelected = selectedVariant?.id === v.id;
                        return (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariant(v)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                              isSelected
                                ? "bg-dark border-dark text-white shadow-xs"
                                : "bg-white border-slate-200 text-slate-700 hover:border-primary"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                            <span>{v.name}</span>
                            {v.priceDiff ? (
                              <span className="text-[10px] opacity-80">
                                (+{formatBRL(v.priceDiff)})
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Quantidade desejada:
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-slate-200 text-slate-700 rounded-l-xl transition-colors cursor-pointer"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-black text-sm text-foreground">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-slate-200 text-slate-700 rounded-r-xl transition-colors cursor-pointer"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="text-xs text-slate-500 font-medium">
                      Subtotal: <strong>{formatBRL(currentPrice * quantity)}</strong>
                    </span>
                  </div>
                </div>

                {/* Conversion Buttons */}
                <div className="space-y-2.5 pt-4">
                  {/* Primary WhatsApp Direct Button */}
                  <button
                    onClick={handleBuyOnWhatsApp}
                    className="w-full py-4 px-6 bg-whatsapp hover:bg-whatsapp-hover active:bg-whatsapp-hover text-white font-black rounded-2xl text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Comprar este item pelo WhatsApp →</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 font-semibold">
                    ⚡ Resposta imediata em horário comercial.
                  </p>

                  {/* Secondary Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3.5 px-6 bg-primary hover:bg-primary-hover active:bg-primary-hover text-primary-foreground font-black rounded-2xl text-sm flex items-center justify-center gap-2.5 shadow-md shadow-primary/20 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>+ Adicionar à Sacola de Compras</span>
                  </button>
                </div>
              </div>

              {/* Trust Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-xs">
                <div className="flex items-start gap-2 text-slate-600">
                  <Package className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Disponibilidade</strong>
                    Pronta entrega ou encomenda personalizada.
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <Truck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Entrega & Retirada</strong>
                    Envio para todo o Brasil ou retirada em Santana/SP.
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-whatsapp shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Garantia</strong>
                    Produtos originais selecionados com padrão profissional.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-black text-foreground">
                Você também pode gostar
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
