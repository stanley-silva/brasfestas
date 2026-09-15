import { STORE_INFO } from "@/data/store-info";

export interface DirectWhatsAppParams {
  productName: string;
  skuOrId: string;
  variantName?: string;
  price: number;
  productUrl?: string;
}

export interface CartWhatsAppItem {
  productName: string;
  variantName?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartWhatsAppParams {
  items: CartWhatsAppItem[];
  subtotal: number;
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function buildDirectProductWhatsAppUrl(
  params: DirectWhatsAppParams,
  whatsappNumber: string = STORE_INFO.contacts.whatsappRaw
): string {
  const currentUrl =
    params.productUrl ||
    (typeof window !== "undefined" ? window.location.href : "https://brasfestas.com.br");

  const message = [
    "Olá! Vi este produto no catálogo online e gostaria de confirmar a disponibilidade:",
    "",
    `• Produto: ${params.productName}`,
    `• Código/Ref: ${params.skuOrId}`,
    params.variantName ? `• Variação escolhida: ${params.variantName}` : null,
    `• Preço no site: ${formatBRL(params.price)}`,
    `• Link: ${currentUrl}`,
    "",
    "Poderia me informar as opções de entrega/retirada e prazo?",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildCartWhatsAppUrl(
  params: CartWhatsAppParams,
  whatsappNumber: string = STORE_INFO.contacts.whatsappRaw
): string {
  const itemsText = params.items
    .map((item, index) => {
      const variantStr = item.variantName ? ` - ${item.variantName}` : "";
      return `${index + 1}. ${item.productName}${variantStr} (Qtd: ${item.quantity}) — ${formatBRL(
        item.totalPrice
      )}`;
    })
    .join("\n");

  const message = [
    "Olá! Montei minha sacola no site e gostaria de fechar meu pedido:",
    "",
    "📦 ITENS ESCOLHIDOS:",
    itemsText,
    "",
    `💰 Total dos Produtos: ${formatBRL(params.subtotal)}`,
    "",
    "Poderia calcular o frete para o meu CEP e me passar as formas de pagamento disponíveis?",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralContactWhatsAppUrl(
  customMessage?: string,
  whatsappNumber: string = STORE_INFO.contacts.whatsappRaw
): string {
  const defaultMessage =
    "Olá! Gostaria de tirar uma dúvida sobre os produtos da Brasfestas e atendimento para o meu evento.";
  const message = customMessage || defaultMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWholesaleWhatsAppUrl(
  whatsappNumber: string = STORE_INFO.contacts.whatsappRaw
): string {
  const message =
    "Olá! Sou profissional de festas/confeitaria e gostaria de conhecer as condições especiais para parceiros e compras recorrentes da Brasfestas.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
