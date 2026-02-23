"use client";

import { motion } from "framer-motion";
import { pricingMainOffer, pricingUpsells } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useCheckout, type CheckoutProduct } from "@/components/CheckoutModal";

/* ============================================
   Pricing — Fond gris clair (section-light)
   PARTIE A : Grande card hero "La Méthode"
   PARTIE B : 3 cards upsells secondaires
   Style Uppbeat clean
   ============================================ */

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─── PARTIE A — L'offre principale ─── */

function MainOffer() {
  const offer = pricingMainOffer;
  const { openCheckout } = useCheckout();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-brand-pink/20 shadow-xl shadow-brand-pink/5">
        <div className="p-8 sm:p-10 md:p-14 lg:p-16">
          {/* Layout deux colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Features */}
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-text-heading">
                <span className="text-gradient-pink">{offer.name}</span>
              </h3>
              <p className="text-text-body text-lg leading-relaxed mb-8 max-w-lg">
                Bien plus qu'une formation vidéo : un accompagnement par un YouTuber aguerri, une communauté de créateurs, et un réseau d'agents pour décrocher tes premiers placements produits.
              </p>

              <ul className="space-y-4">
                {offer.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-brand-pink" />
                    </div>
                    <span className="text-text-heading text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Prix + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-text-heading">
                    {offer.price}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-brand-pink">
                    {offer.currency}
                  </span>
                </div>
                <p className="mt-2 text-text-body text-base font-medium">
                  {offer.priceNote}
                </p>
              </div>

              <Button variant="primary" size="xl" onClick={openCheckout} className="w-full max-w-sm text-lg">
                {offer.cta}
              </Button>

              <p className="mt-5 text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
                {offer.trustNote}
              </p>

              {/* Étoiles d'évaluation */}
              <div className="mt-6 flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-text-muted">
                  <span className="font-semibold text-text-heading">4.9/5</span> — noté par nos membres
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PARTIE B — Upsells secondaires (style Uppbeat exact) ─── */

/* Mapping nom de service → clé Stripe */
const UPSELL_KEYS: Record<string, string> = {
  "Starter Pack": "starter-pack",
  "Audit Chaîne": "audit",
  "Le Cercle Privé": "cercle",
};

function UpsellCard({
  service,
  index,
  popular = false,
}: {
  service: (typeof pricingUpsells.services)[0];
  index: number;
  popular?: boolean;
}) {
  const { openCheckout } = useCheckout();

  const handleClick = () => {
    const product: CheckoutProduct = {
      key: UPSELL_KEYS[service.name] || service.name.toLowerCase(),
      name: service.name,
      price: `${service.price}${service.currency}${service.period || ""}`,
    };
    openCheckout(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="relative"
    >
      {/* Badge au-dessus */}
      {service.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <span className="bg-brand-pink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
            {service.badge}
          </span>
        </div>
      )}

      <div className={`h-full flex flex-col p-6 rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-md ${
        popular
          ? "border-brand-pink/40 shadow-md shadow-brand-pink/10 bg-[#fff8f9]"
          : "border-gray-200"
      }`}>

        {/* Nom + description */}
        <div className="mb-4">
          <h4 className="font-heading text-xl font-bold text-text-heading mb-1">
            {service.name}
          </h4>
          <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
        </div>

        {/* Prix */}
        <div className="flex items-baseline gap-0.5 mb-5">
          <span className="text-4xl font-black text-text-heading tracking-tight">
            {service.price}
          </span>
          <span className="text-lg font-bold text-text-heading">{service.currency}</span>
          {service.period && (
            <span className="text-sm text-text-muted ml-0.5">{service.period}</span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleClick}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 mb-6 cursor-pointer ${
          popular
            ? "bg-brand-pink text-white border-brand-pink hover:bg-brand-pink-hover"
            : "bg-white text-text-heading border-gray-200 hover:border-gray-400"
        }`}>
          {service.cta}
        </button>

        {/* Features */}
        <div className="flex-1">
          {service.tag && (
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              {service.tag}
            </p>
          )}
          <ul className="space-y-2.5">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${popular ? "text-brand-pink" : "text-text-muted"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-body">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Export ─── */

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 section-light">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PARTIE A */}
        <SectionTitle
          title={pricingMainOffer.sectionTitle}
          titleAccent={pricingMainOffer.sectionTitleAccent}
          subtitle={pricingMainOffer.sectionSubtitle}
          shine
        />
        <MainOffer />

        {/* Séparateur */}
        <div className="my-20 sm:my-24 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-pink/30" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
        </div>

        {/* PARTIE B */}
        <SectionTitle
          title={pricingUpsells.sectionTitle}
          titleAccent=""
          subtitle={pricingUpsells.sectionSubtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingUpsells.services.map((service, index) => (
            <UpsellCard key={service.name} service={service} index={index} popular={!!service.badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
