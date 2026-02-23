"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { heroData } from "@/lib/data";
import Button from "@/components/ui/Button";
import { useCheckout } from "@/components/CheckoutModal";

/* ============================================
   Hero — Style EXACT Uppbeat.io
   ✓ Fond blanc pur au centre (contenu propre)
   ✓ Blobs aquarelle confinés aux coins
   ✓ Bold sans-serif (Plus Jakarta Sans 800)
   ✓ Layout centré, whitespace généreux
   ✓ Trust badges + CTA rose pill (1 seul)
   ============================================ */

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { openCheckout } = useCheckout();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">

      {/* ── Image décorative haut-droite ──────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-top.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 select-none"
        draggable={false}
      />

      {/* ── CONTENU — Centre blanc propre ────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-32 pb-24">

        {/* Titre — Plus Jakarta Sans 800 bold */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-tight leading-[1.1] text-text-heading"
        >
          {heroData.titleAccent && (
            <span className="hero-shine-text">{heroData.titleAccent} </span>
          )}
          {heroData.title}
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-base sm:text-lg text-text-body max-w-lg mx-auto leading-relaxed"
        >
          {heroData.subtitleBefore} <em className="line-through italic text-text-muted">{heroData.subtitleStriked}</em> {heroData.subtitleAfter}
        </motion.p>

        {/* Player vidéo — style DA Hub Créateur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-pink/10 border border-gray-100 bg-black aspect-video group">
            {!isPlaying ? (
              <>
                {/* Thumbnail / poster */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-top.webp"
                  alt="Présentation Hub Créateur"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Bouton Play */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  aria-label="Lancer la vidéo"
                >
                  <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-pink/90 backdrop-blur-sm shadow-lg shadow-brand-pink/30 group-hover:scale-110 group-hover:bg-brand-pink transition-all duration-300">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>

                {/* Label bas */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white/90 text-sm font-medium drop-shadow-lg">
                    Découvre la méthode en vidéo
                  </span>
                  <span className="text-white/60 text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                    ▶ Regarder
                  </span>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/b1lSmgOTz9U?autoplay=1&rel=0"
                title="Présentation Hub Créateur"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>

        {/* Trust badges — checkmarks minimalistes comme Uppbeat */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
        >
          {heroData.badges.map((badge, i) => (
            <span key={i} className="flex items-center gap-1.5 text-sm text-text-body">
              <svg
                className="w-4 h-4 text-brand-pink flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {badge.replace("✓ ", "")}
            </span>
          ))}
        </motion.div>

        {/* CTA — 1 seul bouton rose pill, comme Uppbeat "Start browsing" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <Button variant="primary" size="lg" onClick={() => openCheckout()}>
            {heroData.ctaPrimary}
          </Button>
        </motion.div>
      </div>

      {/* ── Image transition bas-gauche ─────────
          À cheval entre le Hero blanc et la section
          sombre. Z-index élevé pour passer par-dessus
          le fond noir de la section suivante.
          ──────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-transition.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 select-none translate-y-[45%] z-[1]"
        style={{ maxWidth: "55vw" }}
        draggable={false}
      />
    </section>
  );
}
