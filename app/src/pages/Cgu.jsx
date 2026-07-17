import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { LEGAL } from '../data/site'

const toc = [
  { id: 'objet', label: '01. Objet' },
  { id: 'acces', label: '02. Accès au site' },
  { id: 'propriete', label: '03. Propriété Intellectuelle' },
  { id: 'responsabilite', label: '04. Responsabilité' },
  { id: 'mentions', label: '05. Mentions Légales' },
  { id: 'donnees', label: '06. Protection des Données' },
]

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

export default function Cgu() {
  const active = useScrollSpy(toc.map((t) => t.id))

  return (
    <div className="bg-background text-on-background">
      <main className="mx-auto max-w-container-max-width px-margin-mobile pt-40 pb-16 md:px-margin-desktop">
        {/* Hero */}
        <section className="mb-24 flex flex-col items-end justify-between gap-gutter border-b border-outline-variant/30 pb-16 md:flex-row">
          <div className="max-w-3xl">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-deep-navy/60">Document Légal</span></Reveal>
            <AnimatedText as="h1" text="Conditions Générales d'Utilisation" className="mb-6 font-display-lg text-headline-xl-mobile leading-tight text-deep-navy md:text-display-lg" />
            <Reveal delay={0.15}>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Dernière mise à jour : 15 Avril 2024. Ces conditions définissent le cadre légal de votre
                interaction avec les services digitaux de DFB.
              </p>
            </Reveal>
          </div>
          <Icon name="gavel" className="hidden select-none text-[80px] text-arctic-blue md:block" />
        </section>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* TOC */}
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-32 space-y-6">
              <p className="mb-6 font-label-caps text-label-caps uppercase text-deep-navy">Sommaire</p>
              <nav className="flex flex-col gap-4">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className={`font-body-md text-body-md transition-colors ${
                      active === t.id ? 'font-bold text-deep-navy' : 'text-on-surface-variant hover:text-deep-navy'
                    }`}
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
              <div className="mt-12 border border-outline-variant/30 bg-surface-container-low p-6">
                <p className="mb-4 font-headline-md text-headline-md text-deep-navy">Besoin d'aide ?</p>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">Pour toute question relative à nos CGU, contactez notre équipe juridique.</p>
                <a className="group flex items-center gap-2 font-bold text-deep-navy" href="mailto:contact@dfb.digital">
                  contact@dfb.digital
                  <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="legal-content md:col-span-9">
            <section id="objet">
              <h2>01. Objet</h2>
              <p>Les présentes CGU ont pour objet de définir les modalités de mise à disposition des services du site DFB et les conditions d'utilisation du site par l'Utilisateur. En accédant au site, vous acceptez sans réserve l'intégralité de ces dispositions.</p>
            </section>
            <section id="acces">
              <h2>02. Accès au site</h2>
              <p>Le site est accessible gratuitement à tout Utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de l'Utilisateur. Il est seul responsable du bon fonctionnement de son équipement informatique ainsi que de son accès à internet.</p>
              <p>DFB se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie du site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.</p>
            </section>
            <section id="propriete">
              <h2>03. Propriété Intellectuelle</h2>
              <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
              <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. L'Utilisateur s'engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation à des fins commerciales est strictement interdite.</p>
            </section>
            <section id="responsabilite">
              <h2>04. Responsabilité</h2>
              <p>Les sources des informations diffusées sur le site sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.</p>
              <p>Malgré des mises à jour régulières, le site DFB ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication.</p>
            </section>
            <section id="mentions" className="my-16 bg-surface-container-low p-8 md:p-12">
              <h2 className="!mt-0">05. Mentions Légales</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-bold text-deep-navy">Éditeur du Site</p>
                  <p>{LEGAL.companyName}<br />Capital de {LEGAL.capital}<br />{LEGAL.rcs}<br />{LEGAL.address}</p>
                </div>
                <div>
                  <p className="mb-2 font-bold text-deep-navy">Directeur de publication</p>
                  <p>{LEGAL.publicationDirector}</p>
                  <p className="mb-2 mt-4 font-bold text-deep-navy">Hébergement</p>
                  <p>{LEGAL.host.name}<br />{LEGAL.host.address}<br />{LEGAL.host.contact}</p>
                </div>
              </div>
            </section>
            <section id="donnees">
              <h2>06. Protection des Données</h2>
              <p>DFB s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site dfb.digital, soient conformes au règlement général sur la protection des données (RGPD).</p>
              <p className="font-bold text-deep-navy">Finalités du traitement :</p>
              <ul>
                <li>La gestion des demandes de contact via le formulaire.</li>
                <li>L'envoi de newsletters ou d'offres commerciales si l'utilisateur y a consenti.</li>
                <li>L'amélioration de l'expérience utilisateur sur le site.</li>
              </ul>
              <p>Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à : <strong>contact@dfb.digital</strong>.</p>
            </section>
            <div className="mt-20 flex flex-wrap gap-4 border-t border-outline-variant/30 pt-8">
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-deep-navy px-6 py-3 text-white transition-all hover:opacity-90">
                <Icon name="print" /> Imprimer le document
              </button>
              <Link to="/protection-donnees" className="flex items-center gap-2 border border-deep-navy px-6 py-3 text-deep-navy transition-all hover:bg-surface-container-low">
                <Icon name="shield" /> Protection des données
              </Link>
            </div>
          </article>
        </div>
      </main>

      {/* CTA */}
      <section className="mx-auto my-section-gap max-w-container-max-width px-margin-mobile md:px-margin-desktop">
        <div className="relative overflow-hidden bg-deep-navy p-12 text-white md:p-24">
          <div className="relative z-10 max-w-2xl">
            <AnimatedText as="h2" text="Prêt à transformer votre vision digitale ?" className="mb-6 font-headline-xl text-headline-xl-mobile md:text-headline-xl" />
            <Reveal><p className="mb-10 font-body-lg text-body-lg text-arctic-blue/80">Nos experts sont à votre disposition pour une première consultation stratégique sans engagement.</p></Reveal>
            <Reveal delay={0.1}>
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="block bg-golden-accent px-10 py-4 font-bold text-headline-md text-deep-navy transition-transform hover:scale-105">Planifier un audit</span>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
