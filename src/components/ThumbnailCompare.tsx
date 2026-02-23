"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

/* ============================================
   ThumbnailCompare — Avant / Après miniature
   Slider interactif : l'utilisateur glisse une
   ligne de gauche à droite pour révéler
   le before (gauche) et le after (droite).
   ============================================ */

export default function ThumbnailCompare() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // % depuis la gauche
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 section-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-heading mb-4">
            Upgrade tes miniatures{" "}
            <span className="text-gradient-pink">avec nous</span>
          </h2>
          <p className="text-text-body text-base sm:text-lg max-w-xl mx-auto">
            Grâce aux services Hub Créateur, passe de miniatures basiques à des miniatures qui génèrent des clics.
          </p>
        </motion.div>

        {/* Comparateur */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-3xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl cursor-col-resize select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Image AFTER (fond complet) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/min-after.jpg"
              alt="Miniature après"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Image BEFORE (clippée par le slider) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/min-before.jpg"
                alt="Miniature avant"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100vw" }}
                draggable={false}
              />
            </div>

            {/* Ligne de séparation */}
            <div
              className="absolute top-0 bottom-0 z-10"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="w-0.5 h-full bg-white shadow-lg" />

              {/* Poignée */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-heading">
                  <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels AVANT / APRÈS */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Avant
            </div>
            <div className="absolute top-4 right-4 z-10 bg-brand-pink/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Après
            </div>
          </div>

          {/* Instruction */}
          <p className="text-center text-sm text-text-muted mt-4">
            ← Glisse pour comparer →
          </p>
          <p className="text-center text-xs text-text-muted mt-2 mb-8">
            Miniature réelle issue d&apos;une vidéo du créateur de Hub Créateur
          </p>

          {/* Aperçu style YouTube */}
          <a
            href="https://www.youtube.com/watch?v=b1lSmgOTz9U"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md mx-auto group"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Thumbnail vidéo */}
              <div className="relative aspect-video bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/min-after.jpg"
                  alt="Miniature vidéo YouTube"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                  draggable={false}
                />
                {/* Bouton play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/70 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-200">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Durée */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                  12:34
                </div>
              </div>

              {/* Infos vidéo style YouTube */}
              <div className="bg-white p-3 flex gap-3">
                {/* Avatar chaîne */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/channels4_profile.jpg"
                  alt="Togen"
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  draggable={false}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-heading leading-snug line-clamp-2 group-hover:text-brand-pink transition-colors duration-200">
                    Voici comment les Coréens se DÉTRUISENT pour sauver les apparences
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">Togen · 167k vues</p>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
