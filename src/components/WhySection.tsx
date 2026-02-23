"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

/* ============================================
   WhySection — Barre de progression
   Horizontale desktop / Verticale mobile
   ============================================ */

const steps = [
  {
    icon: "🚀",
    title: "Rejoins le Hub",
    desc: "Accède à la méthode, l'accompagnement par un YouTuber aguerri, la communauté et le réseau d'agents.",
  },
  {
    icon: "🎯",
    title: "Trouve ta niche",
    desc: "Identifie LE sujet qui te passionne et qui a du potentiel.",
  },
  {
    icon: "📺",
    title: "Crée ta chaîne",
    desc: "Branding, bannière, logo, description — ta chaîne est prête.",
  },
  {
    icon: "🎬",
    title: "Publie tes vidéos",
    desc: "Script, tournage, montage — grâce au Hub, tes premières vidéos sont en ligne.",
  },
  {
    icon: "📈",
    title: "Maîtrise l'algo",
    desc: "SEO, miniatures, rétention — grâce à la méthode du Hub, YouTube pousse tes vidéos.",
  },
  {
    icon: "💰",
    title: "Monétise",
    desc: "Adsense, sponsors, produits — le Hub te connecte à son réseau d'agents pour décrocher des placements produits.",
  },
  {
    icon: "🏆",
    title: "Vis de YouTube",
    desc: "Ta chaîne tourne, tes revenus sont stables. GG.",
  },
];

/* ─── Version mobile : barre verticale ─── */
function VerticalTimeline({ isInView }: { isInView: boolean }) {
  return (
    <div className="block md:hidden relative pl-10">
      {/* Ligne verticale */}
      <div className="absolute left-[15px] top-0 bottom-0 w-[3px] rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : {}}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full rounded-full bg-gradient-to-b from-brand-pink via-brand-purple to-brand-cyan"
        />
      </div>

      <div className="space-y-8">
        {steps.map((step, i) => {
          const stepDelay = (i / (steps.length - 1)) * 2;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: stepDelay + 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: stepDelay + 0.1, type: "spring", stiffness: 350 }}
                className="absolute -left-10 top-1 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-brand-pink shadow-[0_0_10px_rgba(232,68,109,0.5)] z-10"
                style={{ left: "-25px" }}
              />

              {/* Contenu */}
              <div>
                <span className="text-2xl">{step.icon}</span>
                <h3 className="text-base font-bold text-text-light mt-1">{step.title}</h3>
                <p className="text-sm text-text-light-muted leading-relaxed mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Version desktop : barre horizontale ─── */
function HorizontalTimeline({ isInView }: { isInView: boolean }) {
  return (
    <div className="hidden md:block relative max-w-5xl mx-auto px-4 mt-64">
      {/* Track de fond */}
      <div className="relative h-3 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan"
        />
        {/* Glow animé */}
        <motion.div
          initial={{ left: "0%" }}
          animate={isInView ? { left: "100%" } : {}}
          transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/20 blur-md"
        />
      </div>

      {/* Marqueurs + labels */}
      {steps.map((step, i) => {
        const percent = (i / (steps.length - 1)) * 100;
        const stepDelay = (percent / 100) * 2.5;
        const isAbove = i % 2 === 0;

        return (
          <div
            key={i}
            className="absolute"
            style={{ left: `${percent}%`, top: 0 }}
          >
            {/* Dot sur la barre */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.35, delay: stepDelay + 0.1, type: "spring", stiffness: 350 }}
              className="absolute left-0 -translate-x-1/2 top-0 -translate-y-[calc(50%-6px)] z-10"
            >
              <div className="w-5 h-5 rounded-full bg-white border-[3px] border-brand-pink shadow-[0_0_10px_rgba(232,68,109,0.5)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              </div>
            </motion.div>

            {/* Ligne verticale de connexion */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: stepDelay + 0.2 }}
              className="absolute left-0 -translate-x-1/2 w-px bg-white/15"
              style={{
                ...(isAbove
                  ? { bottom: "18px", top: "auto", height: "24px", transformOrigin: "bottom" }
                  : { top: "18px", height: "24px", transformOrigin: "top" }),
              }}
            />

            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, y: isAbove ? 8 : -8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: stepDelay + 0.3, ease: "easeOut" }}
              className={`absolute left-0 -translate-x-1/2 w-44 lg:w-52 text-center ${
                isAbove ? "bottom-[48px]" : "top-[48px]"
              }`}
            >
              <span className="text-3xl mb-2 block">{step.icon}</span>
              <p className="text-base font-bold text-text-light leading-tight mb-1">
                {step.title}
              </p>
              <p className="text-sm text-text-light-muted leading-snug">
                {step.desc}
              </p>
            </motion.div>
          </div>
        );
      })}

      {/* Spacer pour le contenu en dessous */}
      <div className="h-56" />
    </div>
  );
}

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative section-dark overflow-hidden md:min-h-[700px] flex items-center">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <SectionTitle
          title="Ton parcours créateur,"
          titleAccent="étape par étape"
          dark
        />

        {/* Mobile : vertical */}
        <VerticalTimeline isInView={isInView} />

        {/* Desktop : horizontal */}
        <HorizontalTimeline isInView={isInView} />
      </div>
    </section>
  );
}
