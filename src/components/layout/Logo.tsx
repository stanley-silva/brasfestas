import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  // Dimensions based on 190x33 aspect ratio (~5.75:1)
  const sizeConfig = {
    sm: { width: 150, height: 26, imgClass: "h-[26px] w-auto" },
    md: { width: 190, height: 33, imgClass: "h-[32px] sm:h-[36px] w-auto" },
    lg: { width: 230, height: 40, imgClass: "h-[40px] sm:h-[44px] w-auto" },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-transform hover:scale-[1.02] ${className}`}
      aria-label="BrasFestas - Início"
    >
      <div className="relative flex items-center">
        <Image
          src="/logo-brasfestas-horizontal.png"
          alt="BrasFestas"
          width={currentSize.width}
          height={currentSize.height}
          priority
          style={{ width: "auto" }}
          className={`${currentSize.imgClass} object-contain transition-transform group-hover:scale-105 duration-200`}
        />
      </div>
    </Link>
  );
}
