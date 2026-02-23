import LegalLayout from "@/app/legal/layout";

export const metadata = {
  title: "Mentions Légales — Hub Créateur",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-xl text-text-heading mb-4 pb-2 border-b border-border-light">{title}</h2>
      <div className="space-y-3 text-text-body leading-relaxed">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <LegalLayout>
      <div className="mb-12">
        <h1 className="font-heading text-3xl sm:text-4xl text-text-heading mb-2">Mentions Légales</h1>
        <p className="text-sm text-text-muted">Dernière mise à jour : 23/02/2026</p>
      </div>

      <Section title="1. Éditeur du site">
        <p>Le site Hub Créateur (<strong className="text-text-heading">hubcreateur.com</strong>) est édité par :</p>
        <div className="bg-white rounded-2xl border border-border-light p-5 space-y-1 text-sm">
          <p><strong className="text-text-heading">XOXO Commerce, Inc.</strong></p>
          <p>Forme juridique : Corporation (Delaware)</p>
          <p>Siège social : 651 N Broad St Suite 206, Middletown, 19709 Delaware, États-Unis</p>
          <p>TVA OSS : EU372077443</p>
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p>Directeur de la publication : XOXO Commerce, Inc.</p>
        </div>
      </Section>

      <Section title="2. Hébergement">
        <p>Le site est hébergé par :</p>
        <div className="bg-white rounded-2xl border border-border-light p-5 space-y-1 text-sm">
          <p><strong className="text-text-heading">Vercel Inc.</strong></p>
          <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-pink hover:underline">vercel.com</a></p>
        </div>
      </Section>

      <Section title="3. Propriété intellectuelle">
        <p>
          L&apos;ensemble du contenu de ce site (structure, textes, logos, images, vidéos, sons, bases de données, logiciels, etc.)
          est la propriété exclusive de Hub Créateur ou de ses partenaires et est protégé par les lois françaises et
          internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du
          site est interdite, sauf autorisation écrite préalable de Hub Créateur.
        </p>
      </Section>

      <Section title="4. Marques">
        <p>
          Les marques, logos et signes du site font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle.
        </p>
        <div className="bg-brand-pink/5 border border-brand-pink/20 rounded-2xl p-4 text-sm">
          <p>
            Hub Créateur n&apos;est en aucun cas affilié à YouTube, Google LLC ou Meta Platforms (Facebook/Instagram).
            YouTube™ est une marque déposée de Google LLC.
          </p>
        </div>
      </Section>

      <Section title="5. Liens hypertextes">
        <p>
          Le site peut contenir des liens hypertextes vers d&apos;autres sites. Hub Créateur n&apos;exerce aucun contrôle sur
          ces sites et décline toute responsabilité quant à leur contenu.
        </p>
        <p>
          La création de liens vers le site Hub Créateur nécessite une autorisation préalable écrite à{" "}
          <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a>.
        </p>
      </Section>

      <Section title="6. Protection des données personnelles">
        <p>
          Les données personnelles collectées sur le site sont traitées conformément au RGPD et à la loi Informatique
          et Libertés. Pour plus d&apos;informations, consultez notre{" "}
          <a href="/confidentialite" className="text-brand-pink hover:underline">Politique de Confidentialité</a>.
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          Le site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour plus d&apos;informations,
          consultez notre <a href="/cookies" className="text-brand-pink hover:underline">Politique de Cookies</a>.
        </p>
      </Section>

      <Section title="8. Responsabilité">
        <p>
          Hub Créateur s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site, sans
          toutefois en garantir l&apos;exhaustivité. Hub Créateur ne saurait être tenu responsable des dommages directs
          ou indirects résultant de l&apos;utilisation du site.
        </p>
      </Section>

      <Section title="9. Droit applicable">
        <p>
          Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux
          français seront seuls compétents.
        </p>
      </Section>

      <Section title="10. Contact">
        <div className="bg-white rounded-2xl border border-border-light p-5 text-sm space-y-1">
          <p>Email : <a href="mailto:nicolas@hubcreateur.com" className="text-brand-pink hover:underline">nicolas@hubcreateur.com</a></p>
          <p>Adresse : 651 N Broad St Suite 206, Middletown, 19709 Delaware, USA</p>
        </div>
      </Section>
    </LegalLayout>
  );
}
