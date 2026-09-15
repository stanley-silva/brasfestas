import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartSheet } from "@/components/cart/CartSheet";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BrasFestas | Catálogo de Artigos para Festa, Confeitaria e Decoração",
  description:
    "O mundo encantado das festas em Santana, São Paulo. Balões, confeitaria, embalagens, descartáveis, bandejas e personalizados DTF UV. Navegue no catálogo e feche direto no WhatsApp!",
  keywords: [
    "artigos para festas",
    "confeitaria",
    "balões de aniversário",
    "decoração de festas",
    "Santana São Paulo",
    "BrasFestas",
    "personalizados DTF UV",
    "embalagens para doces",
  ],
  openGraph: {
    title: "BrasFestas - O Mundo Encantado das Festas",
    description:
      "Tudo para transformar qualquer celebração em um momento inesquecível. Escolha no catálogo e feche direto pelo WhatsApp.",
    siteName: "BrasFestas",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${font.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-dark selection:bg-accent selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartSheet />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
