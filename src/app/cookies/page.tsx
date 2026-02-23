import LegalLayout from "@/app/legal/layout";

export const metadata = {
  title: "Politique de Cookies — Hub Créateur",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-xl text-text-heading mb-4 pb-2 border-b border-border-light">{title}</h2>
      <div className="space-y-3 text-text-body leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-pink flex-shrink-0" />
          <span>
            {item.label && <strong className="text-text-heading">{item.label} : </strong>}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Cookies() {
  return (
    <LegalLayout>
      <div className="mb-12">
        <h1 className="font-heading text-3xl sm:text-4xl text-text-heading mb-2">Politique de Cookies</h1>
        <p className="text-sm text-text-muted">Dernière mise à jour : 23/02/2026</p>
      </div>

      <Section title="1. Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite. Il permet
          au site de mémoriser vos préférences et d&apos;analyser votre comportement de navigation.
        </p>
      </Section>

      <Section title="2. Les cookies que nous utilisons">
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-border-light p-5">
            <p className="font-semibold text-text-heading text-sm mb-2">🔒 Cookies strictement nécessaires</p>
            <p className="text-sm text-text-body mb-3">Indispensables au fonctionnement du site, non désactivables.</p>
            <BulletList items={[
              { text: "Maintenir votre session utilisateur" },
              { text: "Mémoriser vos préférences de navigation" },
              { text: "Assurer la sécurité de votre connexion" },
            ]} />
          </div>

          <div className="bg-white rounded-2xl border border-border-light p-5">
            <p className="font-semibold text-text-heading text-sm mb-2">📊 Cookies analytiques</p>
            <p className="text-sm text-text-body mb-3">Collectent des informations anonymes pour améliorer le site.</p>
            <BulletList items={[
              { label: "Google Analytics", text: "Analyse du trafic et du comportement des visiteurs" },
            ]} />
          </div>

          <div className="bg-white rounded-2xl border border-border-light p-5">
            <p className="font-semibold text-text-heading text-sm mb-2">💳 Cookies de paiement</p>
            <p className="text-sm text-text-body">
              Notre prestataire <strong className="text-text-heading">Stripe</strong> peut déposer des cookies
              nécessaires à la sécurisation des transactions.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border-light p-5">
            <p className="font-semibold text-text-heading text-sm mb-2">⚙️ Cookies de préférence</p>
            <p className="text-sm text-text-body">
              Mémorisent vos choix (langue, affichage) pour personnaliser vos prochaines visites.
            </p>
          </div>
        </div>
      </Section>

      <Section title="3. Durée de conservation">
        <BulletList items={[
          { label: "Cookies de session", text: "Supprimés à la fermeture du navigateur" },
          { label: "Cookies persistants", text: "Conservés entre 30 jours et 2 ans selon leur finalité" },
        ]} />
      </Section>

      <Section title="4. Gestion des cookies">
        <p>
          Vous pouvez à tout moment modifier vos préférences via les paramètres de votre navigateur :
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
            { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
            { name: "Apple Safari", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
            { name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" },
          ].map((browser) => (
            <a
              key={browser.name}
              href={browser.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-border-light p-3 text-sm text-text-body hover:border-brand-pink/40 hover:text-brand-pink transition-colors duration-200"
            >
              {browser.name} →
            </a>
          ))}
        </div>
        <p className="text-sm text-text-muted">
          La désactivation de certains cookies peut affecter le fonctionnement du site.
        </p>
      </Section>

      <Section title="5. Opt-out Google Analytics">
        <p>
          Pour vous opposer au suivi par Google Analytics :{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">
            tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </Section>

      <Section title="6. Contact">
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p>Adresse : 651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
