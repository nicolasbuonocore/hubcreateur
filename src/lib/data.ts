/* ============================================
   HUB CRÉATEUR — Données du site
   Fichier centralisé pour tout le contenu texte
   Facile à modifier et à maintenir
   ============================================ */

// ─── Configuration Générale ────────────────────────
export const siteConfig = {
  name: "Hub Créateur",
  description: "La méthode, l'accompagnement par un YouTuber aguerri et le réseau pour lancer et vivre de ta chaîne YouTube",
  url: "https://hubcreateur.com",
};

// ─── Navigation ────────────────────────────────────
export const navLinks = [
  { label: "Méthode", href: "#methode" },
  { label: "Simulateur", href: "#simulateur" },
  { label: "Offres", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── Hero Section ──────────────────────────────────
export const heroData = {
  title: "de sa chaîne YouTube.",
  titleAccent: "Vivre",
  subtitleBefore: "La méthode, l'accompagnement par un YouTuber",
  subtitleStriked: "(et pas Shorters)",
  subtitleAfter: "à 180k abonnés, et un réseau d'agents pour tes placements.",
  ctaPrimary: "Découvrir la méthode",
  ctaPrimaryHref: "#methode",
  ctaSecondary: "Voir les offres",
  ctaSecondaryHref: "#pricing",
  badges: [
    "✓ Accompagnement personnalisé",
    "✓ Réseau d'agents placements produits",
    "✓ Accès à vie",
  ],
};

// ─── Section "Pourquoi Hub Créateur" ───────────────
export const whyData = {
  title: "Tout ce qu'il faut pour passer",
  titleAccent: "de l'idée à la chaîne",
  items: [
    {
      icon: "🎯",
      title: "Trouve ta niche",
      description:
        "Identifie le sujet qui te correspond et qui a du potentiel sur YouTube.",
    },
    {
      icon: "🎬",
      title: "Maîtrise le game",
      description:
        "Scripting, tournage, montage, SEO, miniatures — tout est couvert dans la méthode.",
    },
    {
      icon: "💰",
      title: "Monétise",
      description:
        "Comprends comment YouTube paye et comment accélérer tes revenus dès le début.",
    },
    {
      icon: "🤝",
      title: "Rejoins le cercle",
      description:
        "Une communauté de créateurs qui s'entraident et se challengent au quotidien.",
    },
  ],
};

// ─── Section "La Méthode" ──────────────────────────
export const methodData = {
  title: "Une méthode complète,",
  titleAccent: "pas un énième cours théorique",
  subtitle:
    "8 modules concrets + un accompagnement personnalisé par un YouTuber aguerri + un réseau d'agents pour tes placements. Chaque module est actionnable immédiatement.",
  modules: [
    {
      icon: "🔍",
      number: "01",
      title: "Trouver sa niche & son positionnement",
      description:
        "Analyse le marché, identifie ta valeur unique et choisis un positionnement qui te démarque.",
    },
    {
      icon: "✍️",
      number: "02",
      title: "Scripter des vidéos qui captent l'attention",
      description:
        "Apprends les structures narratives qui retiennent les spectateurs de la première à la dernière seconde.",
    },
    {
      icon: "📹",
      number: "03",
      title: "Tourner avec n'importe quel setup",
      description:
        "Smartphone ou caméra pro — apprends à tirer le meilleur de ton matériel actuel.",
    },
    {
      icon: "🎞️",
      number: "04",
      title: "Monter comme un pro",
      description:
        "Techniques de montage, rythme, effets, musique — rends chaque vidéo captivante.",
    },
    {
      icon: "📊",
      number: "05",
      title: "SEO YouTube & algorithme",
      description:
        "Comprends comment l'algorithme fonctionne et optimise chaque vidéo pour la découvrabilité.",
    },
    {
      icon: "🖼️",
      number: "06",
      title: "Miniatures qui cliquent",
      description:
        "Design des miniatures irrésistibles qui boostent ton taux de clics sans clickbait.",
    },
    {
      icon: "💸",
      number: "07",
      title: "Monétisation & revenus",
      description:
        "AdSense, sponsoring, affiliation, produits — toutes les sources de revenus expliquées.",
    },
    {
      icon: "👥",
      number: "08",
      title: "Construire sa communauté",
      description:
        "Transforme tes spectateurs en fans engagés et crée une audience fidèle.",
    },
  ],
};

// ─── Section Témoignages ───────────────────────────
export const testimonialsData = {
  title: "Ce qu'en disent",
  titleAccent: "les membres",
  testimonials: [
    {
      name: "Lucas Martin",
      role: "Créateur tech, 12K abos",
      quote:
        "En 3 mois, j'ai lancé ma chaîne et atteint la monétisation. La méthode est ultra concrète, pas de blabla.",
      avatar: "LM",
    },
    {
      name: "Sarah Dubois",
      role: "Créatrice lifestyle, 8K abos",
      quote:
        "Le module sur les miniatures a changé la donne. Mon CTR a doublé en deux semaines. Le Cercle Privé est incroyable.",
      avatar: "SD",
    },
    {
      name: "Thomas Bernard",
      role: "Créateur gaming, 5K abos",
      quote:
        "J'ai testé plein de formations, celle-ci est la seule qui m'a donné des résultats concrets. La communauté est en or.",
      avatar: "TB",
    },
    {
      name: "Emma Leroy",
      role: "Créatrice voyage, 15K abos",
      quote:
        "Le Starter Pack m'a permis de lancer avec une identité visuelle pro dès le jour 1. Meilleur investissement de ma vie.",
      avatar: "EL",
    },
    {
      name: "Maxime Petit",
      role: "Créateur finance, 20K abos",
      quote:
        "L'audit de chaîne a été un game changer. Des recommandations précises qui ont boosté mes vues de 300%.",
      avatar: "MP",
    },
    {
      name: "Julie Moreau",
      role: "Créatrice food, 3K abos",
      quote:
        "Débutante totale il y a 4 mois, j'ai maintenant 50 vidéos et une communauté engagée. Merci Hub Créateur !",
      avatar: "JM",
    },
    {
      name: "Antoine Roux",
      role: "Créateur documentaire, 7K abos",
      quote:
        "Le module scripting est une masterclass. Mes vidéos ont une rétention de 60% maintenant. Le game a changé.",
      avatar: "AR",
    },
    {
      name: "Camille Fontaine",
      role: "Créatrice développement personnel, 10K abos",
      quote:
        "La recherche de niche personnalisée m'a fait gagner des mois de tâtonnement. L'accompagnement est top.",
      avatar: "CF",
    },
  ],
};

// ─── Section "Qui est derrière" ────────────────────
export const aboutData = {
  title: "Qui est derrière",
  titleAccent: "Hub Créateur ?",
  description:
    "YouTuber depuis plus de 10 ans, 180 000 abonnés cumulés sur toutes mes chaînes, créateur de documentaires et de contenus true crime. Aujourd'hui, je vis en Corée du Sud en grande partie grâce aux revenus de mes chaînes YouTube. J'ai appris sur le terrain — les erreurs, les galères, les victoires. J'ai compilé tout ce que j'aurais aimé savoir au début en une seule méthode. Pas de théorie creuse. Que du vécu, du concret, du terrain.",
  stats: [
    { value: "180K", label: "Abonnés" },
    { value: "30M+", label: "Vues totales" },
    { value: "10 ans", label: "Sur YouTube" },
    { value: "400+", label: "Vidéos publiées" },
  ],
};

// ─── Section Pricing ───────────────────────────────

// PARTIE A — L'offre principale (dominante visuellement)
export const pricingMainOffer = {
  sectionTitle: "La Méthode",
  sectionTitleAccent: "Hub Créateur",
  sectionSubtitle: "Bien plus qu'une formation. Un accompagnement complet pour vivre de YouTube.",
  name: "La Méthode",
  price: "197",
  currency: "€",
  priceNote: "Accès à vie",
  tag: "⭐ Le plus populaire",
  features: [
    "8 modules de formation vidéo complets et actionnables",
    "Accompagnement par un YouTuber à 180K abonnés",
    "Accès à notre réseau d'agents pour placements produits",
    "Communauté privée de créateurs qui s'entraident",
    "Mises à jour et nouveaux contenus à vie",
  ],
  cta: "Rejoindre le Hub",
  href: "#",
  trustNote:
    "🔒 Paiement sécurisé • Satisfait ou remboursé 14 jours • Paiement en 3x sans frais disponible",
};

// PARTIE B — Services complémentaires (upsells, secondaires)
export const pricingUpsells = {
  sectionTitle: "Va plus loin avec ta chaîne",
  sectionSubtitle:
    "Accompagnement sur-mesure et services exclusifs pour accélérer ta progression",
  services: [
    {
      name: "Starter Pack",
      price: "397",
      currency: "€",
      period: "",
      description: "Tu pars de zéro ? On construit ta chaîne ensemble de A à Z avant même ta première vidéo.",
      badge: "Création d'une chaîne de 0",
      tag: "Places limitées — 5-10/mois",
      features: [
        "Recherche de niche personnalisée",
        "Nom de chaîne sur-mesure",
        "Création logo + bannière",
        "5 miniatures à fort taux de clics",
        "5 premières vidéos à faire avec leur script complet",
      ],
      cta: "Réserver ma place",
      href: "#",
    },
    {
      name: "Audit Chaîne",
      price: "147",
      currency: "€",
      period: "",
      description: "Ta chaîne existe déjà mais stagne ? Je l'analyse en profondeur et te donne un plan d'action précis.",
      badge: "Tu as déjà une chaîne ?",
      tag: null,
      features: [
        "Analyse vidéo personnalisée de ta chaîne",
        "Recommandations miniatures & titres",
        "Analyse de rétention & SEO",
        "Plan d'action concret",
      ],
      cta: "Demander un audit",
      href: "#",
    },
    {
      name: "Le Cercle Privé",
      price: "47",
      currency: "€",
      period: "/mois",
      description:
        "Tu veux progresser plus vite ? Accède à un groupe restreint de créateurs sérieux avec un accès direct à moi chaque mois.",
      badge: "Tu veux aller plus vite ?",
      tag: "Limité à 30 places",
      features: [
        "Calls mensuels privés avec le créateur",
        "Canal privé exclusif pour poser tes questions",
        "Feedback direct sur tes vidéos et miniatures",
        "Accès à tous les membres du cercle",
      ],
      cta: "Rejoindre le Cercle",
      href: "#",
    },
  ],
};

// ─── Section FAQ ───────────────────────────────────
export const faqData = {
  title: "Questions",
  titleAccent: "fréquentes",
  items: [
    {
      question: "C'est quoi exactement Hub Créateur ?",
      answer:
        "Hub Créateur, c'est bien plus qu'une formation vidéo. C'est un accompagnement complet par un YouTuber à 180K abonnés, 8 modules actionnables, une communauté privée de créateurs, et un réseau d'agents qui te connecte à des placements de produits dès que ta chaîne décolle. Le tout avec un accès à vie.",
    },
    {
      question: "Est-ce que c'est pour les débutants complets ?",
      answer:
        "Absolument. La méthode est conçue pour partir de zéro. On commence par les bases (trouver ta niche, configurer ta chaîne) et on monte en puissance jusqu'à la monétisation et le scaling. Même si tu n'as jamais touché une caméra.",
    },
    {
      question: "J'ai déjà une chaîne, est-ce que c'est pour moi ?",
      answer:
        "Oui ! Si tu stagnes ou que tu veux accélérer, la méthode couvre des sujets avancés comme le SEO, l'optimisation des miniatures, et les stratégies de rétention. L'Audit Chaîne est aussi pensé pour les créateurs existants.",
    },
    {
      question: "Combien de temps dure la formation ?",
      answer:
        "Tu peux suivre les 8 modules à ton rythme. Certains finissent en 2 semaines, d'autres prennent un mois. L'accès est à vie, donc aucune pression. Le plus important c'est d'appliquer au fur et à mesure.",
    },
    {
      question: "L'accès est vraiment à vie ?",
      answer:
        "Oui, à 100%. Tu payes une fois, tu accèdes pour toujours. Et ça inclut toutes les futures mises à jour de la méthode. Pas de renouvellement, pas de frais cachés.",
    },
    {
      question: "Comment fonctionne le Cercle Privé ?",
      answer:
        "Le Cercle Privé c'est un abonnement mensuel qui te donne accès à des calls de groupe mensuels, du feedback sur tes vidéos avant publication, un canal privé exclusif, et un accès direct au créateur. Limité à 30 membres pour garder la qualité.",
    },
    {
      question: "Je peux payer en plusieurs fois ?",
      answer:
        "Oui ! Le paiement en 2 ou 3 fois sans frais est disponible pour La Méthode. Tu pourras choisir cette option au moment du paiement.",
    },
    {
      question: "Et si ça ne me convient pas ?",
      answer:
        "Tu as 14 jours pour tester. Si la méthode ne te convient pas, tu es remboursé intégralement, sans question. On est confiant sur la qualité du contenu.",
    },
  ],
};

// ─── CTA Final ─────────────────────────────────────
export const finalCtaData = {
  title: "Prêt à lancer ta chaîne ?",
  subtitle: "Méthode, accompagnement, réseau d'agents — tout ce qu'il faut pour vivre de YouTube.",
  cta: "Commencer maintenant",
  href: "#pricing",
};

// ─── Footer ────────────────────────────────────────
export const footerData = {
  columns: [
    {
      title: "Méthode",
      links: [
        { label: "Modules", href: "#methode" },
        { label: "Programme", href: "#methode" },
      ],
    },
    {
      title: "Offres",
      links: [
        { label: "La Méthode", href: "#pricing" },
        { label: "Starter Pack", href: "#pricing" },
        { label: "Audit Chaîne", href: "#pricing" },
        { label: "Cercle Privé", href: "#pricing" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "YouTube", href: "https://youtube.com" },
        { label: "Discord", href: "https://discord.gg" },
        { label: "Email", href: "mailto:contact@hubcreateur.com" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "CGV", href: "/cgv" },
        { label: "Politique de confidentialité", href: "/confidentialite" },
      ],
    },
  ],
  socials: [
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Discord", href: "https://discord.gg", icon: "discord" },
  ],
};
