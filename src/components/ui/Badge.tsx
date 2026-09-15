import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "primary" | "whatsapp" | "neutral" | "dark";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  accent: "bg-accent-light text-accent border-accent/20",
  primary: "bg-primary-light text-primary border-primary/20",
  whatsapp: "bg-emerald-50 text-emerald-700 border-emerald-200",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
  dark: "bg-dark text-white border-dark/50",
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-[10px] font-bold rounded-full gap-1",
  md: "px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full gap-1.5",
};

export function Badge({
  variant = "accent",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border font-sans ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}
