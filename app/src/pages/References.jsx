import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Marquee from '../components/ui/Marquee'
import Counter from '../components/ui/Counter'
import Icon from '../components/ui/Icon'
import { REFERENCES } from '../data/site'
import { easeApple } from '../lib/motion'

const filters = [
  { key: 'all', label: 'Tous' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'social', label: 'Social Media' },
]

const projects = [
  { cat: 'ecommerce', tag: 'QITCH • E-commerce', title: "Expérience d'achat immersive", text: '+45% de taux de conversion en 6 mois.', img: 'img_d9d2a45ceb52.png', wide: false, to: '/cas-etraelec' },
  { cat: 'strategy', tag: 'ETRAELEC • Strategy', title: 'Transformation digitale industrielle', text: "Refonte complète de l'architecture SI pour une gestion prédictive des actifs.", img: 'img_3ef067523e12.png', wide: true, to: '/cas-etraelec' },
  { cat: 'marketing', tag: 'NEHO FRET • Marketing', title: 'Campagne Acquisition 360', text: "Réduction du CPA de 30% via une segmentation d'audience prédictive.", img: 'img_5b4e1fb501f4.png', wide: false, to: '/cas-etraelec' },
  { cat: 'social', tag: 'MULTI-BRAND • Social Media', title: "Écosystème d'Identité", text: 'Harmonisation de la présence digitale pour un groupe multi-filiales.', img: 'img_283958753148.png', wide: false, to: '/cas-etraelec' },
  { cat: 'strategy', tag: 'TEK SOLUTIONS • Development', title: 'SaaS Platform Architecture', text: "Déploiement d'une infrastructure cloud scalable supportant 1M+ d'utilisateurs.", img: 'img_c5514ea2265f.png', wide: false, to: '/cas-etraelec' },
]

const figures = [
  { to: 50, suffix: '+', label: 'Clients Actifs' },
  { to: 12, suffix: '+', label: "Années d'Expertise" },
  { to: 200, suffix: '+', label: 'Projets Livrés' },
  { to: 98, suffix: '%', label: 'Taux de Rétention' },
]

function ProjectCard({ p, wide }) {
  if (wide) {
    return (
      <div className="group overflow-hidden bg-white lg:col-span-2">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden lg:h-full">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style={{ backgroundImage: `url('/images/${p.img}')` }} />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="mb-2 block font-label-caps text-label-caps uppercase text-secondary">{p.tag}</span>
            <h3 className="mb-4 font-headline-lg text-headline-lg text-deep-navy">{p.title}</h3>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant">{p.text}</p>
            <Link to={p.to} className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-deep-navy transition-all hover:gap-4">
              Voir le cas client <Icon name="arrow_forward" className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="group overflow-hidden bg-white">
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" style={{ backgroundImage: `url('/images/${p.img}')` }} />
        <div className="absolute inset-0 bg-deep-navy/20 transition-colors group-hover:bg-deep-navy/40" />
      </div>
      <div className="p-8">
        <span className="mb-2 block font-label-caps text-label-caps uppercase text-secondary">{p.tag}</span>
        <h3 className="mb-4 font-headline-md text-headline-md text-deep-navy">{p.title}</h3>
        <p className="mb-6 font-body-md text-body-md text-on-surface-variant">{p.text}</p>
        <Link to={p.to} className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-deep-navy transition-all hover:gap-4">
          Voir le cas client <Icon name="arrow_forward" className="text-sm" />
        </Link>
      </div>
    </div>
  )
}

export default function References() {
  const [active, setActive] = useState('all')
  const visible = projects.filter((p) => active === 'all' || p.cat === active)

  return (
    <div className="bg-background text-on-background">
      {/* Hero */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile pt-40 pb-section-gap md:px-margin-desktop">
        <div className="lg:max-w-3xl">
          <Reveal>
            <span className="mb-6 inline-block bg-secondary-container px-3 py-1 font-label-caps text-label-caps text-on-primary-container">
              NOS RÉFÉRENCES
            </span>
          </Reveal>
          <AnimatedText as="h1" text="Façonner le futur du digital" className="mb-8 font-display-lg text-headline-xl-mobile text-deep-navy md:text-display-lg" />
          <Reveal delay={0.15}>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Nous accompagnons les leaders de demain dans leur transformation. Découvrez comment nous
              avons aidé nos clients à franchir de nouveaux sommets grâce à une expertise stratégique
              et technique sans compromis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 flex flex-wrap items-center gap-8 border-b border-outline-variant pb-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`relative py-2 font-label-caps text-label-caps uppercase transition-colors ${
                  active === f.key ? 'text-deep-navy' : 'text-on-surface-variant hover:text-deep-navy'
                }`}
              >
                {f.label}
                {active === f.key && (
                  <motion.span layoutId="filter-underline" className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-golden-accent" />
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: easeApple }}
                  className={p.wide ? 'lg:col-span-2' : ''}
                >
                  <ProjectCard p={p} wide={p.wide} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Key figures */}
      <section className="bg-deep-navy py-section-gap text-white">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 gap-gutter text-center lg:grid-cols-4">
            {figures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1}>
                <div className="mb-2 font-display-lg text-headline-xl-mobile text-golden-accent md:text-display-lg">
                  <Counter to={f.to} suffix={f.suffix} />
                </div>
                <div className="font-label-caps text-label-caps uppercase tracking-widest text-surface-variant">
                  {f.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-b border-outline-variant bg-white py-24">
        <div className="mx-auto mb-12 max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <h2 className="text-center font-label-caps text-label-caps uppercase text-on-surface-variant opacity-60">
            Ils nous font confiance
          </h2>
        </div>
        <Marquee speed={60}>
          {REFERENCES.map((c) => (
            <span key={c} className="cursor-default whitespace-nowrap font-headline-lg text-deep-navy/30 transition-colors hover:text-deep-navy">
              {c}
            </span>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap text-center md:px-margin-desktop">
        <div className="mx-auto max-w-3xl">
          <AnimatedText as="h2" text="Prêt à transformer votre business ?" className="mb-8 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
          <Reveal><p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">Chaque projet commence par une conversation. Partagez vos défis avec nous et définissons ensemble la trajectoire de votre succès.</p></Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="block bg-deep-navy px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-black">
                  Démarrer un projet
                </span>
              </Magnetic>
              <Magnetic as={Link} to="/services" className="inline-block">
                <span className="block border-2 border-deep-navy px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest text-deep-navy transition-all hover:bg-deep-navy hover:text-white">
                  Nos Services
                </span>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
