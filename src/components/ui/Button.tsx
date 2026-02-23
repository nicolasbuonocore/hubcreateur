"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/* ============================================
   Button — Style Uppbeat
   Rose pill rounded, clean, simple
   ============================================ */

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-sm hover:shadow-md btn-shine",
  secondary:
    "bg-bg-light text-text-heading border border-border-light hover:bg-bg-light-alt",
  outline:
    "bg-transparent text-text-heading border border-border-light hover:border-border-light-hover hover:bg-bg-light",
  ghost:
    "bg-transparent text-text-body hover:text-text-heading hover:bg-black/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm rounded-full gap-1.5",
  md: "px-6 py-2.5 text-sm rounded-full gap-2",
  lg: "px-8 py-3 text-base rounded-full gap-2.5",
  xl: "px-10 py-4 text-lg rounded-full gap-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer select-none";
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        {...motionProps}
        {...(props as HTMLMotionProps<"a">)}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={combinedClassName} {...motionProps} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
