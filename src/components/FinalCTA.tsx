"use client";

import { motion } from "framer-motion";
import { finalCtaData } from "@/lib/data";
import Button from "@/components/ui/Button";
import { useCheckout } from "@/components/CheckoutModal";

/* ============================================
   FinalCTA — Section sombre, CTA final
   Blobs subtils, centré, clean
   ============================================ */

export default function FinalCTA() {
  const { openCheckout } = useCheckout();
  return (
    <section className="relative py-32 sm:py-40 section-dark overflow-hidden">
      {/* Blobs subtils */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blob-dark-pink" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob-dark-purple" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
            {finalCtaData.title.split("chaîne")[0]}
            <span className="text-gradient-pink">chaîne ?</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-light-secondary mb-10 max-w-xl mx-auto">
            {finalCtaData.subtitle}
          </p>

          <Button
            variant="primary"
            size="xl"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {finalCtaData.cta}
          </Button>

          <p className="mt-6 text-sm text-text-light-muted">
            Accès à vie • Accompagnement personnalisé • Réseau d'agents inclus
          </p>
        </motion.div>
      </div>
    </section>
  );
}
