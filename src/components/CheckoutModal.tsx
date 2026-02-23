"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, createContext, useContext, useCallback } from "react";

/* ============================================
   Checkout Modal — Email + choix tarif
   Context global pour ouvrir depuis n'importe où
   ============================================ */

const PRICE = 197;

/* ─── Stripe links (à remplacer par tes vrais liens Stripe) ─── */
const STRIPE_LINKS: Record<string, string> = {
  // Offre principale
  "main-1x":  "https://buy.stripe.com/REPLACE_MAIN_1X",
  "main-2x":  "https://buy.stripe.com/REPLACE_MAIN_2X",
  "main-3x":  "https://buy.stripe.com/REPLACE_MAIN_3X",
  // Upsells
  "starter-pack": "https://buy.stripe.com/REPLACE_STARTER_PACK",
  "audit":        "https://buy.stripe.com/REPLACE_AUDIT",
  "cercle":       "https://buy.stripe.com/REPLACE_CERCLE",
};

function getStripeUrl(linkKey: string, email: string): string {
  const base = STRIPE_LINKS[linkKey] || "#";
  if (base === "#") return "#";
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}prefilled_email=${encodeURIComponent(email)}`;
}

export type CheckoutProduct = {
  key: string;       // clé dans STRIPE_LINKS (ex: "starter-pack")
  name: string;      // nom affiché (ex: "Starter Pack")
  price: string;     // prix affiché (ex: "397€")
};

type ModalContextType = {
  openCheckout: (product?: CheckoutProduct | unknown) => void;
};

const ModalContext = createContext<ModalContextType>({ openCheckout: () => {} });
export const useCheckout = () => useContext(ModalContext);

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-pink flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Modal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: CheckoutProduct | null;
}) {
  const [step, setStep] = useState<"email" | "pricing">("email");
  const [email, setEmail] = useState("");

  /* Détermine si c'est un upsell (lien direct Stripe) ou l'offre principale (choix 1x/2x/3x) */
  const isUpsell = product !== null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    if (isUpsell) {
      // Upsell → redirection directe vers Stripe
      const url = getStripeUrl(product!.key, email);
      window.open(url, "_blank");
      handleClose();
    } else {
      // Offre principale → étape choix de tarif
      setStep("pricing");
    }
  };

  const handlePlanClick = (planKey: string) => {
    const url = getStripeUrl(planKey, email);
    window.open(url, "_blank");
    handleClose();
  };

  const handleClose = () => {
    onClose();
    // Reset après la fermeture
    setTimeout(() => {
      setStep("email");
      setEmail("");
    }, 300);
  };

  const plans = [
    {
      id: "1x",
      key: "main-1x",
      label: "Paiement unique",
      price: `${PRICE}€`,
      detail: "Un seul paiement",
      badge: "Meilleur prix",
      popular: true,
    },
    {
      id: "2x",
      key: "main-2x",
      label: "En 2 fois",
      price: `${Math.ceil(PRICE / 2)}€`,
      detail: "× 2 mensualités",
      badge: null,
      popular: false,
    },
    {
      id: "3x",
      key: "main-3x",
      label: "En 3 fois",
      price: `${Math.ceil(PRICE / 3)}€`,
      detail: "× 3 mensualités",
      badge: "Sans frais",
      popular: false,
    },
  ];

  /* Titre et sous-titre dynamiques */
  const emailTitle = isUpsell ? product!.name : "Rejoins le Hub";
  const emailSubtitle = isUpsell
    ? `${product!.price} — Entre ton email pour continuer`
    : "Entre ton email pour commencer";
  const emailCta = isUpsell ? `Payer ${product!.price}` : "Continuer";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 cursor-pointer"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {step === "email" ? (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 sm:p-10"
                  >
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-2xl mx-auto mb-4">
                        🚀
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-text-heading">
                        {emailTitle}
                      </h3>
                      <p className="text-sm text-text-muted mt-2">
                        {emailSubtitle}
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="checkout-email" className="block text-sm font-medium text-text-heading mb-1.5">
                          Adresse email
                        </label>
                        <input
                          id="checkout-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="toi@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all duration-200"
                          autoFocus
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-brand-pink text-white font-semibold text-base hover:bg-brand-pink-hover transition-colors duration-200 btn-shine relative cursor-pointer"
                      >
                        {emailCta}
                      </button>
                    </form>

                    <p className="text-[11px] text-text-muted text-center mt-4">
                      🔒 On ne spamme pas. Ton email est en sécurité.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pricing"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 sm:p-10"
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-2xl font-bold text-text-heading">
                        Choisis ton tarif
                      </h3>
                      <p className="text-sm text-text-muted mt-1">
                        La Méthode Hub Créateur — Accès à vie
                      </p>
                    </div>

                    {/* Plans */}
                    <div className="space-y-3">
                      {plans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => handlePlanClick(plan.key)}
                          className={`relative w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer group ${
                            plan.popular
                              ? "border-brand-pink bg-brand-pink/[0.03] hover:bg-brand-pink/[0.06]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          {plan.badge && (
                            <span className={`absolute -top-2.5 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              plan.popular
                                ? "bg-brand-pink text-white"
                                : "bg-gray-100 text-text-muted"
                            }`}>
                              {plan.badge}
                            </span>
                          )}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-text-heading text-sm group-hover:text-brand-pink transition-colors duration-200">
                                {plan.label}
                              </p>
                              <p className="text-xs text-text-muted mt-0.5">{plan.detail}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-black text-text-heading tracking-tight">
                                {plan.price}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Trust */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <CheckIcon />
                        <span>Accès à vie à toute la méthode</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <CheckIcon />
                        <span>Satisfait ou remboursé 14 jours</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <CheckIcon />
                        <span>Paiement 100% sécurisé</span>
                      </div>
                    </div>

                    {/* Back */}
                    <button
                      onClick={() => setStep("email")}
                      className="mt-4 w-full text-center text-xs text-text-muted hover:text-text-heading transition-colors cursor-pointer"
                    >
                      ← Modifier mon email
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<CheckoutProduct | null>(null);

  const openCheckout = useCallback((p?: CheckoutProduct | unknown) => {
    // Guard : si onClick passe un MouseEvent au lieu d'un produit, on l'ignore
    if (p && typeof p === "object" && "key" in p && "name" in p && "price" in p) {
      setProduct(p as CheckoutProduct);
    } else {
      setProduct(null);
    }
    setIsOpen(true);
  }, []);

  return (
    <ModalContext.Provider value={{ openCheckout }}>
      {children}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} />
    </ModalContext.Provider>
  );
}
