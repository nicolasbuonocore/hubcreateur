"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import { useCheckout } from "@/components/CheckoutModal";

/* ============================================
   Navbar — EXACTEMENT style Uppbeat
   Ultra minimal : logo rose à gauche,
   quelques liens + CTA pill rose à droite
   ============================================ */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCheckout } = useCheckout();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="relative flex items-center group">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={160}
                height={40}
                className="h-[18px] sm:h-[20px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
                priority
              />
              <Image
                src="/images/logo-colored.png"
                alt={siteConfig.name}
                width={160}
                height={40}
                className="h-[18px] sm:h-[20px] w-auto object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute inset-0"
                priority
              />
            </a>

            {/* Navigation Desktop — Minimal comme Uppbeat */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-text-body hover:text-text-heading rounded-full hover:bg-black/[0.03] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" href="/login">
                Se connecter
              </Button>
              <Button variant="primary" size="sm" onClick={() => openCheckout()}>
                Rejoindre le Hub
              </Button>
            </div>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                  }}
                  className="w-full h-0.5 bg-text-heading rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="w-full h-0.5 bg-text-heading rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                  }}
                  className="w-full h-0.5 bg-text-heading rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col pt-24 px-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="px-4 py-3 text-lg font-medium text-text-body hover:text-text-heading rounded-xl hover:bg-black/[0.03] transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 px-4 space-y-2">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => { setIsMobileMenuOpen(false); openCheckout(); }}
                  >
                    Rejoindre le Hub
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    fullWidth
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Se connecter
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
