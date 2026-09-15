import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  id: string; // Composite ID: `${productId}-${variantId || 'default'}`
  productId: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  sku: string;
  variantId?: string;
  variantName?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      setIsOpen: (isOpen: boolean) => set({ isOpen }),

      addItem: (product: Product, variant?: ProductVariant, quantity = 1) => {
        const variantId = variant?.id || "default";
        const compositeId = `${product.id}-${variantId}`;
        const finalPrice = product.price + (variant?.priceDiff || 0);

        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === compositeId);

          if (existingIndex > -1) {
            const newItems = [...state.items];
            newItems[existingIndex] = {
              ...newItems[existingIndex],
              quantity: newItems[existingIndex].quantity + quantity,
            };
            return { items: newItems, isOpen: true };
          }

          const newItem: CartItem = {
            id: compositeId,
            productId: product.id,
            name: product.name,
            slug: product.slug,
            image: product.images[0] || "",
            price: finalPrice,
            quantity,
            sku: product.sku,
            variantId: variant?.id,
            variantName: variant?.name,
          };

          return { items: [...state.items, newItem], isOpen: true };
        });
      },

      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: "brasfestas-cart-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
