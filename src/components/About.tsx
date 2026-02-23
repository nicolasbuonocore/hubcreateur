"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { aboutData } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

/** Retourne l'âge d'une chaîne sous la forme "X an(s) Y mois" */
function useChannelAge(startDate: Date): string {
  const calcAge = () => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    if (months < 0) { years--; months += 12; }
    const yPart = years > 0 ? `${years} an${years > 1 ? "s" : ""}` : "";
    const mPart = months > 0 ? `${months} mois` : "";
    return [yPart, mPart].filter(Boolean).join(" ") || "moins d'un mois";
  };

  const [age, setAge] = useState<string>("");
  useEffect(() => {
    setAge(calcAge());
    // Met à jour chaque heure (l'âge en mois ne change pas souvent)
    const id = setInterval(() => setAge(calcAge()), 1000 * 60 * 60);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return age;
}

/* ============================================
   About — Fond blanc (section-white)
   Photo placeholder + texte + stats
   Clean, aéré, style Uppbeat
   ============================================ */

export default function About() {
  const togenAge   = useChannelAge(new Date(2024, 3, 22));  // 22 avril 2024
  const redrumAge  = useChannelAge(new Date(2025, 6, 10));  // 10 juillet 2025
  const minuitAge  = useChannelAge(new Date(2025, 8, 23));  // 23 septembre 2025

  return (
    <section className="relative py-24 sm:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={aboutData.title} titleAccent={aboutData.titleAccent} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl shadow-black/5">
              <Image
                src="/images/togen.jpg"
                alt="Togen — créateur de Hub Créateur"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 384px, 384px"
              />
            </div>

            {/* Réseaux sociaux perso */}
            <div className="mt-5 max-w-sm mx-auto text-center">
              <p className="text-xs text-text-muted mb-3">
                Contacte-moi à tout moment sur mes réseaux 👇
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/togengram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-white text-sm font-medium text-text-heading hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.threads.com/@togengram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-white text-sm font-medium text-text-heading hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.083.718 5.496 2.057 7.164 1.432 1.784 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.278 3.258-.886 1.097-2.15 1.726-3.755 1.87-1.202.108-2.39-.078-3.34-.525-1.092-.513-1.8-1.354-1.994-2.368-.163-.852.017-1.725.508-2.455.726-1.082 2.086-1.778 3.834-1.965l.275-.03c1.146-.113 2.204-.063 3.156.15-.047-.54-.198-1.004-.459-1.378-.395-.567-1.05-.893-1.944-.97-.89.013-1.725.259-2.286.681l-1.27-1.61c.855-.674 2.127-1.106 3.504-1.19h.13c1.507.04 2.704.574 3.558 1.59.735.874 1.147 2.02 1.226 3.408.448.215.862.468 1.236.762 1.06.832 1.8 1.955 2.145 3.249.476 1.783.148 3.937-1.262 5.321C18.16 23.025 15.727 23.978 12.186 24zm-.09-8.064c-.07 0-.14.002-.21.005-1.26.114-2.046.558-2.337 1.003a1.17 1.17 0 00-.178.888c.068.357.375.73.937.995.593.28 1.382.408 2.22.336 1.09-.098 1.922-.503 2.474-1.186.34-.42.584-.972.73-1.643-.804-.258-1.716-.4-2.716-.4h-.003l-.917.002z" />
                  </svg>
                  Threads
                </a>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg text-text-body leading-relaxed">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                  className="text-center p-4 rounded-2xl bg-bg-light border border-border-light"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-pink mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal touch */}
            <div className="space-y-3 pt-2">
              {/* Chaîne Togen ✅ active */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/channels4_profile.jpg"
                    alt="Togen"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.youtube.com/@togen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-heading hover:text-brand-pink transition-colors duration-200"
                    >@togen</a>
                    <span className="text-xs font-medium text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">32k abonnés</span>
                  </div>
                  <p className="text-xs text-text-muted">YouTuber • Documentariste • True Crime</p>
                  {togenAge && (
                    <p className="flex items-center gap-1 text-xs text-text-muted mt-0.5">
                      <span>🗓</span>
                      <span>Chaîne créée il y a&nbsp;<strong className="text-text-heading font-semibold">{togenAge}</strong></span>
                    </p>
                  )}
                </div>
              </div>

              {/* Chaîne Redrum Society ✅ active */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/channels4_profile-redrum.jpg"
                    alt="Redrum Society"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.youtube.com/@redrumsociety"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-heading hover:text-brand-pink transition-colors duration-200"
                    >@redrumsociety</a>
                    <span className="text-xs font-medium text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">2,5k abonnés</span>
                  </div>
                  <p className="text-xs text-text-muted">True Crime</p>
                  {redrumAge && (
                    <p className="flex items-center gap-1 text-xs text-text-muted mt-0.5">
                      <span>🗓</span>
                      <span>Chaîne créée il y a&nbsp;<strong className="text-text-heading font-semibold">{redrumAge}</strong></span>
                    </p>
                  )}
                </div>
              </div>

              {/* Chaîne Le Petit Club de Minuit ✅ active */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/channels4_profile-lepetitclubdeminuit.jpg"
                    alt="Le Petit Club de Minuit"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.youtube.com/@lepetitclubdeminuit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-heading hover:text-brand-pink transition-colors duration-200"
                    >@lepetitclubdeminuit</a>
                    <span className="text-xs font-medium text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">268 abonnés</span>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Nouvelle</span>
                  </div>
                  <p className="text-xs text-text-muted">Let&apos;s play horreur</p>
                  {minuitAge && (
                    <p className="flex items-center gap-1 text-xs text-text-muted mt-0.5">
                      <span>🗓</span>
                      <span>Chaîne créée il y a&nbsp;<strong className="text-text-heading font-semibold">{minuitAge}</strong></span>
                    </p>
                  )}
                </div>
              </div>

              {/* Chaîne ToGenTV (inactive) */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 opacity-60">
                  <Image
                    src="/images/channels4_profile-togentv.jpg"
                    alt="ToGenTV"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full grayscale"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.youtube.com/@togentv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-muted hover:text-brand-pink transition-colors duration-200"
                    >@togentv</a>
                    <span className="text-xs font-medium text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">135k abonnés</span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Inactive</span>
                  </div>
                  <p className="text-xs text-text-muted">Vidéos réactions • Fermée pour se concentrer sur @togen</p>
                </div>
              </div>

              {/* Chaîne Togame (inactive) */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 opacity-60">
                  <Image
                    src="/images/channels4_profile-togame.jpg"
                    alt="Togame"
                    width={44}
                    height={44}
                    className="object-cover w-full h-full grayscale"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.youtube.com/togame"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-text-muted hover:text-brand-pink transition-colors duration-200"
                    >@togame</a>
                    <span className="text-xs font-medium text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">12,5k abonnés</span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">Inactive</span>
                  </div>
                  <p className="text-xs text-text-muted">Let&apos;s play horreur • Fermée pour lancer @lepetitclubdeminuit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
