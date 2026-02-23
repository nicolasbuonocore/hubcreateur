import LegalLayout from "@/app/legal/layout";

export const metadata = {
  title: "Conditions Générales de Vente — Hub Créateur",
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

export default function CGV() {
  return (
    <LegalLayout>
      <div className="mb-12">
        <h1 className="font-heading text-3xl sm:text-4xl text-text-heading mb-2">Conditions Générales de Vente</h1>
        <p className="text-sm text-text-muted">Dernière mise à jour : 23/02/2026</p>
      </div>

      <Section title="1. Informations légales">
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p><strong className="text-text-heading">XOXO Commerce, Inc.</strong></p>
          <p>Forme juridique : Corporation (Delaware)</p>
          <p>651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
          <p>TVA OSS : EU372077443</p>
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p className="pt-1 text-text-muted">Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        </div>
      </Section>

      <Section title="2. Objet">
        <p>
          Les présentes Conditions Générales de Vente régissent les relations contractuelles entre Hub Créateur
          et tout utilisateur achetant un accès à la Méthode Hub Créateur ou à l&apos;un de ses services complémentaires.
          En procédant au paiement, vous acceptez sans réserve les présentes CGV.
        </p>
      </Section>

      <Section title="3. Services proposés">
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-border-light p-5 text-sm">
            <p className="font-semibold text-text-heading mb-2">🎓 La Méthode Hub Créateur</p>
            <p className="text-text-body">
              Accès complet aux modules de formation vidéo, à l&apos;accompagnement personnalisé par un YouTuber aguerri,
              à la communauté privée et au réseau d&apos;agents pour placements produits. Disponible en paiement comptant
              ou en plusieurs fois.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-border-light p-5 text-sm">
            <p className="font-semibold text-text-heading mb-2">⚡ Services complémentaires</p>
            <p className="text-text-body">
              Accompagnement individuel, audit de chaîne, accès au Cercle (groupe de suivi mensuel).
              Les détails sont décrits sur la page de vente.
            </p>
          </div>
        </div>
        <div className="bg-brand-pink/5 border border-brand-pink/20 rounded-2xl p-4 text-sm">
          <p>
            Hub Créateur n&apos;est en aucun cas affilié à YouTube, Google LLC ou Meta Platforms. Les résultats
            présentés sur le site sont basés sur des cas réels et ne constituent pas une garantie de revenus.
          </p>
        </div>
      </Section>

      <Section title="4. Tarifs et modalités de paiement">
        <p>
          Les tarifs sont indiqués sur la page de vente au moment de l&apos;achat, exprimés en euros TTC.
          Les paiements sont effectués par carte bancaire via <strong className="text-text-heading">Stripe</strong>.
          Des options de paiement en plusieurs fois peuvent être proposées.
        </p>
      </Section>

      <Section title="5. Accès aux services">
        <p>
          Après validation du paiement, vous recevrez un email de confirmation avec vos accès. L&apos;accès à la
          Méthode est à vie. Pour les services d&apos;accompagnement, la durée est précisée dans la description
          de chaque offre.
        </p>
      </Section>

      <Section title="6. Droit de rétractation">
        <p>
          Conformément à l&apos;article L221-28 du Code de la consommation, vous disposez d&apos;un délai de
          <strong className="text-text-heading"> 14 jours</strong> à compter de l&apos;achat pour exercer votre
          droit de rétractation.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
          <p>
            ⚠️ Si vous accédez aux contenus numériques avant l&apos;expiration de ce délai, vous renoncez
            expressément à votre droit de rétractation (article L221-28 du Code de la consommation).
          </p>
        </div>
        <p className="text-sm">
          Pour exercer ce droit, contactez{" "}
          <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a>{" "}
          avant tout accès aux contenus.
        </p>
      </Section>

      <Section title="7. Résiliation">
        <p>
          Pour les services à durée déterminée, la résiliation peut être effectuée avant la prochaine échéance
          en contactant{" "}
          <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a>.
          L&apos;accès reste disponible jusqu&apos;à la fin de la période payée.
        </p>
      </Section>

      <Section title="8. Propriété intellectuelle">
        <p>
          Tous les contenus de la plateforme (vidéos, textes, images, logos) sont protégés par le droit
          d&apos;auteur. Toute reproduction, redistribution ou revente est strictement interdite et passible
          de poursuites.
        </p>
      </Section>

      <Section title="9. Responsabilité">
        <p>
          Hub Créateur ne garantit aucun résultat spécifique en termes de revenus ou d&apos;abonnés. Les résultats
          dépendent de l&apos;implication et du travail personnel de chaque utilisateur.
        </p>
      </Section>

      <Section title="10. Médiation">
        <p>
          Conformément à l&apos;article L612-1 du Code de la consommation, vous pouvez recourir gratuitement
          à un médiateur de la consommation :{" "}
          <a href="https://www.economie.gouv.fr/mediation-conso" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">
            www.economie.gouv.fr/mediation-conso
          </a>
        </p>
      </Section>

      <Section title="11. Droit applicable">
        <p>
          Les présentes CGV sont régies par le droit français. En cas de litige, les tribunaux français
          seront seuls compétents.
        </p>
      </Section>

      <Section title="12. Contact">
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p>Adresse : 651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
