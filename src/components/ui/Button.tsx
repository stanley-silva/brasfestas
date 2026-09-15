import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "whatsapp" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
  accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-hover shadow-sm",
  secondary: "bg-dark text-white hover:bg-dark/90 shadow-sm",
  outline: "bg-transparent border border-border-subtle text-foreground hover:bg-ice hover:border-primary",
  ghost: "bg-transparent text-foreground hover:bg-ice",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-xs rounded-xl font-bold gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl font-bold gap-2",
  lg: "px-8 py-3.5 text-base rounded-2xl font-extrabold gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  fullWidth,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-[0.98] ${
    variantStyles[variant]
  } ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {icon}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
