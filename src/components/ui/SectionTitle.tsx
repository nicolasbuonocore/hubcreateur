"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  shine?: boolean;
  accentFirst?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  titleAccent,
  subtitle,
  centered = true,
  dark = false,
  shine = false,
  accentFirst = false,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${centered ? "text-center" : ""} mb-14 ${className}`}
    >
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${
          dark ? "text-white" : "text-text-heading"
        }`}
      >
        {accentFirst && titleAccent && (
          <span className={shine ? "hero-shine-text" : "text-gradient-pink"}>{titleAccent}</span>
        )}
        {accentFirst && titleAccent ? " " : ""}{title}
        {!accentFirst && titleAccent && (
          <>{" "}<span className={shine ? "hero-shine-text" : "text-gradient-pink"}>{titleAccent}</span></>
        )}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className={`mt-4 text-lg max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            dark ? "text-text-light-secondary" : "text-text-body"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
