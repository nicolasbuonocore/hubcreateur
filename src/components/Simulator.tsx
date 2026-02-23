"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

/* ============================================
   Simulator — Simulateur de gains YouTube
   L'utilisateur entre :
     - Nombre de vidéos / mois
     - Vues moyennes par vidéo (tranches)
     - Durée des vidéos (tranches)
   → Affiche les revenus mensuels estimés
     et la croissance d'abonnés.
   CPM réaliste : 5–8€ selon la durée.
   ============================================ */

const VIEW_RANGES = [
  { label: "0 – 10k", avg: 5000 },
  { label: "10k – 20k", avg: 15000 },
  { label: "20k – 30k", avg: 25000 },
  { label: "30k – 40k", avg: 35000 },
  { label: "40k – 50k", avg: 45000 },
  { label: "+ 50k", avg: 65000 },
];

const DURATION_RANGES = [
  { label: "10 – 20 min", adMultiplier: 4 },  // 4 pubs
  { label: "20 – 30 min", adMultiplier: 6 },  // 6 pubs
  { label: "+ 30 min", adMultiplier: 8 },      // 8 pubs
];

/* Taux de conversion vues → abonnés (~0.5% réaliste, basé sur des stats réelles) */
const SUB_CONVERSION_RATE = 0.005;

export default function Simulator() {
  const [videosPerMonth, setVideosPerMonth] = useState(4);
  const [viewRangeIdx, setViewRangeIdx] = useState(1);
  const [durationIdx, setDurationIdx] = useState(0);

  const results = useMemo(() => {
    const views = VIEW_RANGES[viewRangeIdx].avg;
    const baseRpm = 4; // RPM de base = 4€
    const adMultiplier = DURATION_RANGES[durationIdx].adMultiplier;
    // Le RPM est proportionnel au nombre de pubs (base 4 pubs = 4€ RPM)
    const rpm = baseRpm * (adMultiplier / 4);
    const monthlyViews = videosPerMonth * views;
    const monthlyRevenue = (monthlyViews / 1000) * rpm;
    const yearlyRevenue = monthlyRevenue * 12;
    const monthlyNewSubs = Math.round(monthlyViews * SUB_CONVERSION_RATE);

    return { monthlyRevenue, yearlyRevenue, monthlyNewSubs, monthlyViews };
  }, [videosPerMonth, viewRangeIdx, durationIdx]);

  return (
    <section
      id="simulateur"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#fce4ec" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Titre centré style Uppbeat ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-text-heading mb-4">
            Combien pourrais-tu gagner<br className="hidden sm:block" /> avec ta chaîne YouTube ?
          </h2>
          <p className="text-text-body text-base sm:text-lg max-w-4xl mx-auto">
            On n&apos;est pas des vendeurs de rêve à te promettre des millions. Nos estimations sont basées sur les{" "}
            <a
              href="https://www.youtube.com/@togen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text-heading underline underline-offset-2 hover:text-brand-pink transition-colors duration-200"
            >revenus réels de chaînes déjà créées grâce au Hub</a> —{" "}
            <span className="font-semibold text-text-heading">des chiffres tout à fait réalistes à atteindre</span>.
          </p>
        </motion.div>

        {/* ── Calculateur sur fond blanc ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-sm p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── INPUTS ── */}
            <div className="space-y-8">
              {/* Vidéos par mois */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-text-heading">Vidéos par mois</span>
                  <span className="text-sm font-bold text-brand-pink">{videosPerMonth}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={videosPerMonth}
                  onChange={(e) => setVideosPerMonth(Number(e.target.value))}
                  className="sim-slider w-full"
                />
                <div className="flex justify-between text-[10px] text-text-muted mt-1">
                  <span>1</span><span>15</span><span>30</span>
                </div>
              </div>

              {/* Vues moyennes */}
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-3">
                  Vues moyennes par vidéo
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {VIEW_RANGES.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => setViewRangeIdx(i)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer ${
                        viewRangeIdx === i
                          ? "bg-brand-pink text-white border-brand-pink shadow-sm"
                          : "bg-gray-50 text-text-body border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Durée vidéo */}
              <div>
                <label className="block text-sm font-semibold text-text-heading mb-3">
                  Durée moyenne de tes vidéos
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {DURATION_RANGES.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => setDurationIdx(i)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer ${
                        durationIdx === i
                          ? "bg-brand-pink text-white border-brand-pink shadow-sm"
                          : "bg-gray-50 text-text-body border-gray-100 hover:border-gray-300"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-text-muted leading-relaxed">
                * RPM estimé à 4€ (10-20min), 6€ (20-30min), 8€ (+30min). Résultats indicatifs.
              </p>
            </div>

            {/* ── RÉSULTATS ── */}
            <div className="space-y-4">
              <motion.div
                key={`rev-${results.monthlyRevenue}`}
                initial={{ scale: 0.97, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 sm:p-8 text-white"
                style={{ backgroundColor: "#E8446D" }}
              >
                <p className="text-sm font-medium text-white/80 mb-1">Revenus estimés / mois</p>
                <p className="font-heading text-4xl sm:text-5xl tracking-tight">
                  {Math.round(results.monthlyRevenue).toLocaleString("fr-FR")}€
                </p>
                <p className="text-sm text-white/70 mt-2">
                  soit ~{Math.round(results.yearlyRevenue).toLocaleString("fr-FR")}€ / an
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  key={`subs-${results.monthlyNewSubs}`}
                  initial={{ scale: 0.97, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <p className="text-xs font-medium text-text-muted mb-1">Nouveaux abos / mois</p>
                  <p className="font-heading text-2xl tracking-tight text-text-heading">
                    +{results.monthlyNewSubs.toLocaleString("fr-FR")}
                  </p>
                </motion.div>

                <motion.div
                  key={`views-${results.monthlyViews}`}
                  initial={{ scale: 0.97, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                >
                  <p className="text-xs font-medium text-text-muted mb-1">Vues totales / mois</p>
                  <p className="font-heading text-2xl tracking-tight text-text-heading">
                    {(results.monthlyViews / 1000).toFixed(0)}k
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
