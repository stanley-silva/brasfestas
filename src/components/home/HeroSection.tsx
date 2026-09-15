import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface HeroBannerItem {
  id: string;
  image: string;
  alt: string;
  link: string;
  width: number;
  height: number;
  title?: string;
}

export const HERO_BANNERS: HeroBannerItem[] = [
  {
    id: "banner-1-comemoracao",
    image: "/images/banners/banner-1-hero-section.jpeg",
    alt: "Qual é a próxima comemoração? Tem festa para todos os momentos — e tudo começa na BrasFestas! Chá Revelação, Festa Boteco, Despedida de Solteira, Festa Retrô, Festa Pet.",
    link: "/categorias",
    width: 1920,
    height: 720,
    title: "Qual é a próxima comemoração? Escolha sua festa na BrasFestas",
  },
];

export function HeroSection() {
  // Configured as a single active banner now, architected for multi-slide carousel later
  const currentBanner = HERO_BANNERS[0];

  return (
    <section className="w-full bg-[#FFF5F7] overflow-hidden select-none border-b border-pink-100/60">
      <div className="w-full relative">
        <Link
          href={currentBanner.link}
          className="block relative w-full overflow-hidden group focus:outline-none focus:ring-4 focus:ring-accent/40"
          style={{ aspectRatio: `${currentBanner.width} / ${currentBanner.height}` }}
          title={currentBanner.title}
          aria-label={currentBanner.title}
        >
          <Image
            src={currentBanner.image}
            alt={currentBanner.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </Link>
      </div>
    </section>
  );
}
