"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/use-cart-store";
import { formatBRL, buildCartWhatsAppUrl } from "@/lib/whatsapp";
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import confetti from "canvas-confetti";

const emptySubscribe = () => () => {};

export function CartSheet() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getSubtotal, getTotalItems } =
    useCartStore();
  
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const totalCount = getTotalItems();

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch {
      // safe fallback
    }

    const cartParams = {
      items: items.map((i) => ({
        productName: i.name,
        variantName: i.variantName,
        quantity: i.quantity,
        unitPrice: i.price,
        totalPrice: i.price * i.quantity,
      })),
      subtotal,
    };

    const url = buildCartWhatsAppUrl(cartParams);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-dark/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-surface z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Sacola de Compras"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-ice/70">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-foreground text-lg leading-tight">
                Sua Sacola de Festas
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {totalCount === 0
                  ? "Nenhum item adicionado"
                  : `${totalCount} ${totalCount === 1 ? "item selecionado" : "itens selecionados"}`}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-foreground transition-colors cursor-pointer"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List / Empty State */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent-light text-accent flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 opacity-70" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-foreground text-base">Sua sacola está vazia</h3>
                <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                  Que tal dar uma olhada nos nossos balões ou descartáveis para começar?
                </p>
              </div>
              <div className="flex flex-col w-full max-w-xs gap-2 pt-2">
                <Button
                  href="/produtos"
                  variant="primary"
                  size="md"
                  onClick={() => setIsOpen(false)}
                >
                  Explorar Catálogo de Produtos
                </Button>
                <Button
                  href="/categorias/baloes"
                  variant="outline"
                  size="md"
                  onClick={() => setIsOpen(false)}
                >
                  Ver Balões e Bexigas
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-2xl border border-slate-100 bg-surface hover:border-slate-200 transition-colors shadow-xs"
                >
                  {/* Item Image */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-ice shrink-0 border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          href={`/produtos/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="font-bold text-sm text-foreground hover:text-accent transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-accent p-1 transition-colors cursor-pointer"
                          title="Remover item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.variantName && (
                        <p className="text-xs text-primary font-medium mt-0.5 bg-primary-light px-2 py-0.5 rounded-md inline-block">
                          {item.variantName}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-extrabold text-sm text-foreground">
                        {formatBRL(item.price * item.quantity)}
                      </span>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-slate-200 rounded-lg bg-ice">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 rounded-l-lg transition-colors cursor-pointer"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 rounded-r-lg transition-colors cursor-pointer"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-ice/80 space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm text-slate-600">
                <span>Subtotal ({totalCount} itens):</span>
                <span className="font-bold text-foreground text-lg">
                  {formatBRL(subtotal)}
                </span>
              </div>
              <p className="text-xs text-slate-500 italic bg-surface p-2.5 rounded-lg border border-slate-200/70">
                ⚠️ Frete e eventuais taxas calculados pelo atendente no WhatsApp de acordo com o seu CEP ou opção de retirada em Santana/SP.
              </p>
            </div>

            <Button
              onClick={handleCheckoutWhatsApp}
              variant="whatsapp"
              size="lg"
              fullWidth
              icon={<MessageCircle className="w-5 h-5 fill-white text-white" />}
            >
              Enviar Pedido pelo WhatsApp →
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
