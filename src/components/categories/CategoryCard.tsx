import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/data/categories";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  itemCount: number;
}

export function CategoryCard({ category, itemCount }: CategoryCardProps) {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group relative bg-white p-4 sm:p-5 rounded-3xl border-2 border-pink-100/80 hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background festive subtle ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-50 transition-colors pointer-events-none" />

      <div>
        {/* Photo Container */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Subtle gradient vignette to increase badge contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />

          {/* Floating Icon Badge (Top Left) */}
          <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-white/70 text-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
            <DynamicIcon name={category.iconName} className="w-4.5 h-4.5" />
          </div>

          {/* Item Count Pill (Top Right) */}
          <div className="absolute top-3 right-3">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white bg-dark/85 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
              {itemCount} {itemCount === 1 ? "item" : "itens"}
            </span>
          </div>
        </div>

        {/* Name & Description */}
        <h3 className="font-black text-dark text-base sm:text-lg uppercase tracking-tight group-hover:text-accent transition-colors leading-tight">
          {category.name}
        </h3>
        <p className="text-xs sm:text-sm text-dark-muted mt-1.5 line-clamp-2 leading-relaxed font-normal">
          {category.description}
        </p>
      </div>

      {/* Link indicator */}
      <div className="pt-4 mt-4 border-t border-slate-100/90 flex items-center justify-between text-xs font-black uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
        <span>Ver produtos</span>
        <div className="w-7 h-7 rounded-full bg-pink-50 group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

