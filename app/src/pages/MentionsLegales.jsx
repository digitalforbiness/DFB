import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Hero */}
      <section className="border-b border-surface-container bg-white pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-margin-mobile">
          <Reveal><span className="mb-4 block font-label-caps text-label-caps text-slate-gray">INFORMATIONS LÉGALES</span></Reveal>
          <AnimatedText as="h1" text="Mentions Légales & Conditions" className="font-headline-xl text-headline-xl-mobile leading-tight text-deep-navy md:text-headline-xl" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-slate-gray">
              Transparence et conformité au cœur de notre stratégie digitale. Retrouvez ici l'ensemble
              des informations relatives à l'éditeur, l'hébergement et l'utilisation de nos services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-section-gap">
        <div className="legal-content mx-auto max-w-3xl px-margin-mobile">
          <Reveal as="article" id="mentions-legales">
            <h2>1. Éditeur du Site</h2>
            <p>Le présent site, accessible à l'URL <a href="https://dfb.digital/">https://dfb.digital/</a> (le « Site »), est édité par :</p>
            <p><strong>Digital For Business (DFB)</strong>, société au capital de [Montant] euros, inscrite au R.C.S. de Paris sous le numéro [Numéro RCS], dont le siège social est situé au 61 Boulevard Haussmann, 75008 Paris, France.</p>
            <h2>2. Hébergement</h2>
            <p>Le Site est hébergé par la société [Nom de l'hébergeur], situé [Adresse de l'hébergeur], (contact téléphonique ou email : [Contact]).</p>
            <h2>3. Directeur de publication</h2>
            <p>Le Directeur de la publication du Site est Marc-Antoine Durand.</p>
            <h2>4. Propriété Intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
            <h2>5. Contact</h2>
            <p>Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@dfb.digital">contact@dfb.digital</a> ou par téléphone au <strong>+33 (0)9 54 27 50 80</strong>.</p>
          </Reveal>

          <div className="my-10 border-b border-surface-container" />

          <Reveal as="article" id="cgu">
            <h1 className="mb-12 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl">Conditions Générales d'Utilisation (CGU)</h1>
            <h2>1. Objet</h2>
            <p>Les présentes CGU ont pour objet de définir les modalités de mise à disposition des services du site DFB et les conditions d'utilisation du site par l'Utilisateur.</p>
            <h2>2. Accès au site</h2>
            <p>Le site est accessible gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au site sont exclusivement à la charge de l'Utilisateur.</p>
            <h2>3. Propriété Intellectuelle</h2>
            <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle.</p>
            <h2>4. Responsabilité</h2>
            <p>Les sources des informations diffusées sur le site sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.</p>
          </Reveal>

          <div className="my-10 border-b border-surface-container" />

          <Reveal as="article" id="confidentialite">
            <h1 className="mb-12 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl">Politique de Protection des Données</h1>
            <h2>1. Collecte des données</h2>
            <p>DFB s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site dfb.digital, soient conformes au règlement général sur la protection des données (RGPD).</p>
            <h2>2. Finalités du traitement</h2>
            <p>Les données personnelles collectées sur le site sont utilisées pour :</p>
            <ul>
              <li>La gestion des demandes de contact via le formulaire.</li>
              <li>L'envoi de newsletters ou d'offres commerciales si l'utilisateur y a consenti.</li>
              <li>L'amélioration de l'expérience utilisateur sur le site.</li>
            </ul>
            <h2>3. Vos droits</h2>
            <p>Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à : <a href="mailto:contact@dfb.digital">contact@dfb.digital</a>.</p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
