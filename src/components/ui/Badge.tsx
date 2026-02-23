"use client";

import { motion } from "framer-motion";

/* ============================================
   Badge — Pill, clean, style Uppbeat
   ============================================ */

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "pink" | "dark" | "success";
  size?: "sm" | "md";
  className?: string;
  animated?: boolean;
}

const variantStyles = {
  default: "bg-gray-100 text-gray-600 border border-gray-200",
  pink: "bg-brand-pink/10 text-brand-pink border border-brand-pink/20",
  dark: "bg-white/10 text-white/90 border border-white/10",
  success: "bg-emerald-50 text-emerald-600 border border-emerald-200",
};

const sizeStyles = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
  animated = false,
}: BadgeProps) {
  const classes = `inline-flex items-center font-medium rounded-full whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (animated) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        className={classes}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={classes}>{children}</span>;
}
