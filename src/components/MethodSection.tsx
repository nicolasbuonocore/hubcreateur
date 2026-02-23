"use client";

import { motion } from "framer-motion";
import { methodData } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

/* ============================================
   MethodSection — Section BLANCHE
   Cards modules sur fond blanc
   Style Uppbeat clean
   ============================================ */

export default function MethodSection() {
  return (
    <section id="methode" className="relative py-24 sm:py-32 section-white overflow-hidden">
      {/* Wave décorative en bas — boucle horizontale */}
      <div
        className="absolute bottom-0 left-0 w-full h-[800px] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/wave.webp)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom center",
        }}
      />

      {/* Blobs subtils */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] blob-corner-left opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob-corner-right opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={methodData.title}
          titleAccent={methodData.titleAccent}
          subtitle={methodData.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodData.modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
            >
              <div className="group h-full p-6 card-white relative overflow-hidden">
                {/* Module number watermark */}
                <div className="absolute top-3 right-4 text-4xl font-black text-black/[0.04] group-hover:text-black/[0.07] transition-colors duration-500 select-none">
                  {module.number}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-lg group-hover:bg-brand-pink/10 transition-colors duration-300">
                    {module.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted group-hover:text-brand-pink transition-colors duration-300">
                    Module {module.number}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-text-heading mb-2 group-hover:text-brand-pink transition-colors duration-300 leading-snug">
                  {module.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
