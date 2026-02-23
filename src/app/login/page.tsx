"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ============================================
   Page de connexion — Hub Créateur
   Email + mot de passe + Google Sign-In
   Pas de sign-up, seulement sign-in
   ============================================ */

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: intégrer l'authentification réelle
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleGoogleSignIn = () => {
    // TODO: intégrer Google OAuth
  };

  return (
    <div className="min-h-screen bg-bg-light flex">
      {/* ─── Colonne gauche : branding ─── */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-bg-dark items-center justify-center overflow-hidden">
        {/* Blobs décoratifs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-pink/10 blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/10 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-md px-12 text-center">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Hub Créateur"
              width={180}
              height={45}
              className="mx-auto mb-10 h-[28px] w-auto"
            />
          </Link>
          <h2 className="font-heading text-3xl text-white mb-4">
            Content de te revoir 👋
          </h2>
          <p className="text-text-light-secondary text-base leading-relaxed">
            Accède à ta méthode, ta communauté et toutes tes ressources.
          </p>

          {/* Points clés */}
          <div className="mt-10 space-y-3 text-left">
            {[
              "📚 8 modules de formation actionnables",
              "🎯 Accompagnement par un YouTuber aguerri",
              "🤝 Réseau d'agents pour tes placements",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-text-light-secondary text-sm">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Colonne droite : formulaire ─── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Logo mobile */}
          <div className="lg:hidden mb-10 text-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Hub Créateur"
                width={160}
                height={40}
                className="mx-auto h-[22px] w-auto"
              />
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl text-text-heading">
              Se connecter
            </h1>
            <p className="text-text-muted mt-2 text-sm">
              Connecte-toi pour accéder à ton espace membre.
            </p>
          </div>

          {/* ─── Bouton Google ─── */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-border-light bg-white hover:bg-bg-light-alt transition-all duration-200 text-text-heading font-medium text-sm cursor-pointer hover:shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuer avec Google
          </button>

          {/* ─── Séparateur ─── */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border-light" />
            <span className="text-xs text-text-muted font-medium">ou</span>
            <div className="flex-1 h-px bg-border-light" />
          </div>

          {/* ─── Formulaire email / mot de passe ─── */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-text-heading mb-1.5"
              >
                Adresse email
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all duration-200"
                autoComplete="email"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-text-heading"
                >
                  Mot de passe
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-brand-pink hover:text-brand-pink-hover transition-colors font-medium"
                >
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-border-light bg-white text-text-heading placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all duration-200"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-brand-pink text-white font-semibold text-base hover:bg-brand-pink-hover transition-colors duration-200 relative overflow-hidden btn-shine cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Connexion…
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          {/* ─── Retour au site ─── */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-text-muted hover:text-text-heading transition-colors duration-200"
            >
              ← Retour au site
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
