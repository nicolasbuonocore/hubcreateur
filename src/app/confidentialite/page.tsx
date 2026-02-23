import LegalLayout from "@/app/legal/layout";

export const metadata = {
  title: "Politique de Confidentialité — Hub Créateur",
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

export default function Confidentialite() {
  return (
    <LegalLayout>
      <div className="mb-12">
        <h1 className="font-heading text-3xl sm:text-4xl text-text-heading mb-2">Politique de Confidentialité</h1>
        <p className="text-sm text-text-muted">Dernière mise à jour : 23/02/2026</p>
      </div>

      <Section title="1. Introduction">
        <p>
          La protection de vos données personnelles est une priorité pour Hub Créateur. Cette Politique de
          Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données conformément
          au RGPD.
        </p>
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p><strong className="text-text-heading">Responsable du traitement : XOXO Commerce, Inc.</strong></p>
          <p>651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
        </div>
      </Section>

      <Section title="2. Données collectées">
        <BulletList items={[
          { label: "Données d'identification", text: "Nom, prénom, adresse email" },
          { label: "Données de connexion", text: "Adresse IP, logs de connexion, données de navigation" },
          { label: "Données de paiement", text: "Informations de facturation traitées par Stripe — nous ne stockons pas vos données bancaires" },
          { label: "Données d'utilisation", text: "Progression dans les modules, statistiques d'apprentissage" },
          { label: "Données de communication", text: "Messages envoyés via le formulaire de contact, demandes d'assistance" },
        ]} />
      </Section>

      <Section title="3. Finalités du traitement">
        <BulletList items={[
          { text: "Création et gestion de votre compte utilisateur" },
          { text: "Fourniture des services de formation et d'accompagnement" },
          { text: "Gestion des paiements" },
          { text: "Personnalisation de votre expérience" },
          { text: "Communication avec vous (support, notifications, mises à jour)" },
          { text: "Amélioration de nos services" },
          { text: "Respect de nos obligations légales et réglementaires" },
        ]} />
      </Section>

      <Section title="4. Base légale du traitement">
        <BulletList items={[
          { label: "Exécution du contrat", text: "Pour la fourniture des services auxquels vous avez souscrit" },
          { label: "Consentement", text: "Pour l'envoi de communications marketing (retirable à tout moment)" },
          { label: "Intérêt légitime", text: "Pour l'amélioration de nos services et la sécurité de la plateforme" },
          { label: "Obligation légale", text: "Pour le respect de nos obligations comptables et fiscales" },
        ]} />
      </Section>

      <Section title="5. Destinataires des données">
        <BulletList items={[
          { label: "Prestataires de services", text: "Stripe (paiements), Vercel (hébergement), services d'emailing" },
          { label: "Autorités compétentes", text: "En cas d'obligation légale ou de demande judiciaire" },
        ]} />
      </Section>

      <Section title="6. Transferts de données hors UE">
        <p>
          Certains de nos prestataires (Vercel, Stripe) peuvent être situés hors UE. Des garanties appropriées sont
          mises en place (clauses contractuelles types de la Commission européenne).
        </p>
      </Section>

      <Section title="7. Durée de conservation">
        <BulletList items={[
          { label: "Données de compte", text: "Pendant toute la durée d'accès actif, puis 3 ans après la dernière connexion" },
          { label: "Données de paiement", text: "10 ans conformément aux obligations comptables" },
          { label: "Données de progression", text: "Pendant toute la durée de l'accès actif" },
        ]} />
      </Section>

      <Section title="8. Vos droits">
        <BulletList items={[
          { label: "Accès", text: "Obtenir une copie de vos données personnelles" },
          { label: "Rectification", text: "Corriger vos données inexactes ou incomplètes" },
          { label: "Effacement", text: "Demander la suppression de vos données (sous conditions)" },
          { label: "Limitation", text: "Limiter le traitement de vos données" },
          { label: "Portabilité", text: "Recevoir vos données dans un format structuré et lisible" },
          { label: "Opposition", text: "Vous opposer au traitement de vos données" },
        ]} />
        <p className="text-sm">
          Pour exercer vos droits, contactez{" "}
          <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a>.
          Vous pouvez également contacter la{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">CNIL</a>.
        </p>
      </Section>

      <Section title="9. Sécurité des données">
        <BulletList items={[
          { text: "Chiffrement des données en transit (HTTPS/TLS)" },
          { text: "Authentification sécurisée et gestion des accès" },
          { text: "Sauvegardes régulières" },
          { text: "Surveillance et détection des incidents de sécurité" },
        ]} />
      </Section>

      <Section title="10. Cookies">
        <p>
          Notre site utilise des cookies. Pour plus d&apos;informations, consultez notre{" "}
          <a href="/cookies" className="text-brand-pink hover:underline">Politique de Cookies</a>.
        </p>
      </Section>

      <Section title="11. Contact">
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p>Adresse : 651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
