import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const pillars = [
  {
    icon: 'insights',
    title: 'Conseil en Stratégie',
    text: 'Définition de votre roadmap digitale, audit de performance et accompagnement au changement.',
    accent: 'border-deep-navy',
    filled: true,
    list: ['Audit 360°', 'Transformation Digitale', 'Roadmap ROI'],
  },
  {
    icon: 'web',
    title: 'Web Design',
    text: 'Expériences utilisateur immersives et interfaces performantes centrées sur la conversion.',
    accent: 'border-arctic-blue',
    image: 'img_5b25d6613e79.png',
  },
  {
    icon: 'rocket_launch',
    title: 'Activation Marketing',
    text: 'Accélération de votre visibilité via des campagnes omnicanales ciblées et mesurables.',
    dark: true,
    filled: true,
    progress: '+75% Growth Target',
  },
  {
    icon: 'share',
    title: 'Social Media',
    text: "Gestion de communauté, création de contenu viral et stratégie d'engagement durable.",
    accent: 'border-deep-navy',
  },
  {
    icon: 'analytics',
    title: 'Data Marketing',
    text: 'Analyse prédictive et exploitation de la donnée pour des décisions business éclairées.',
    accent: 'border-golden-accent',
    filled: true,
    tags: ['Predictive', 'CRM', 'Analytics'],
  },
  {
    icon: 'connect_without_contact',
    title: 'Social Selling',
    text: 'Transformer vos réseaux sociaux en puissants canaux de prospection B2B directe.',
    accent: 'border-deep-navy',
  },
]

const specifics = [
  { n: '01', icon: 'shopping_cart', title: 'Amazon Mastery', text: 'Optimisation de fiches produits (SEO Amazon), gestion publicitaire AMS et stratégie de Buy Box pour maximiser vos ventes sur la marketplace leader.' },
  { n: '02', icon: 'ads_click', title: 'Media Purchase', text: "Achat d'espace programmatique, Google Ads et Meta Ads avec une obsession pour le ROAS et le coût d'acquisition client." },
]

function PillarCard({ p }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: easeApple }}
      className={`p-10 transition-all ${
        p.dark
          ? 'bg-deep-navy text-white hover:shadow-2xl'
          : `border-l-4 bg-white ${p.accent} hover:shadow-lg`
      }`}
    >
      <div className="mb-6">
        <Icon
          name={p.icon}
          filled={p.filled}
          className={`text-4xl ${p.dark ? 'text-golden-accent' : 'text-deep-navy'}`}
        />
      </div>
      <h3 className={`mb-4 font-headline-md text-headline-md ${p.dark ? 'text-white' : 'text-deep-navy'}`}>
        {p.title}
      </h3>
      <p className={`mb-6 ${p.dark ? 'text-surface-variant' : 'text-on-surface-variant'}`}>{p.text}</p>

      {p.list && (
        <ul className="space-y-2 text-sm font-semibold text-deep-navy">
          {p.list.map((li) => (
            <li key={li} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-golden-accent" /> {li}
            </li>
          ))}
        </ul>
      )}
      {p.image && (
        <img
          src={`/images/${p.image}`}
          alt={p.title}
          className="mt-4 h-40 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      )}
      {p.progress && (
        <>
          <div className="mb-6 h-1 w-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: easeApple }}
              className="h-full bg-golden-accent"
            />
          </div>
          <p className="font-label-caps text-label-caps text-golden-accent">{p.progress}</p>
        </>
      )}
      {p.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="bg-surface-container-high px-3 py-1 font-label-caps text-[10px] uppercase text-deep-navy">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile pt-40 pb-section-gap md:px-margin-desktop">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="w-full space-y-8 md:w-1/2">
            <Reveal>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-golden-accent">
                Maîtrise Numérique Stratégique
              </span>
            </Reveal>
            <AnimatedText as="h1" className="font-display-lg text-headline-xl-mobile leading-none text-deep-navy md:text-display-lg">
              Nos Services Sur Mesure
            </AnimatedText>
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Nous fusionnons l'expertise conseil avec l'implémentation technique de haut niveau
                pour propulser votre croissance digitale. Découvrez nos 6 piliers d'excellence.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="group flex items-center gap-2 bg-deep-navy px-8 py-4 font-body-md font-bold text-white">
                  Consulter un expert
                  <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative w-full md:w-1/2">
            <div className="aspect-square overflow-hidden rounded-full border-[12px] border-surface-container-high">
              <img src="/images/img_2d0dd51c743b.png" alt="Visualisation d'un globe digital" className="h-full w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeApple }}
              className="absolute -bottom-6 -left-6 max-w-xs bg-white p-8 shadow-xl"
            >
              <p className="mb-2 text-4xl font-bold text-golden-accent">12+</p>
              <p className="font-body-md italic text-on-surface-variant">
                Années d'expertise dans la transformation numérique des entreprises leaders.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mx-auto max-w-container-max-width">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <AnimatedText as="h2" text="Les 6 Piliers de l'Excellence" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal>
              <p className="font-body-md text-on-surface-variant">
                Une approche holistique pour dominer votre marché digital, de la stratégie à
                l'exécution.
              </p>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {pillars.map((p) => (
              <PillarCard key={p.title} p={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specific expertise */}
      <section className="mx-auto max-w-container-max-width overflow-hidden px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="flex flex-col gap-gutter md:flex-row">
          <div className="md:w-1/3">
            <AnimatedText as="h2" text="Expertises Spécifiques" className="mb-6 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal delay={0.1}>
              <p className="font-body-lg text-on-surface-variant">
                Au-delà de nos piliers, nous maîtrisons des leviers de croissance verticaux pour des
                besoins hautement spécialisés.
              </p>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:w-2/3"
          >
            {specifics.map((s) => (
              <motion.div key={s.n} variants={fadeUp} className="group border border-outline-variant p-8 transition-colors hover:border-deep-navy">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-surface-container">
                    <Icon name={s.icon} className="text-deep-navy" />
                  </div>
                  <span className="font-bold text-golden-accent">{s.n}</span>
                </div>
                <h4 className="mb-3 font-headline-md text-headline-md text-deep-navy">{s.title}</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">{s.text}</p>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="group border border-outline-variant p-8 transition-colors hover:border-deep-navy sm:col-span-2">
              <div className="flex items-center gap-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-deep-navy">
                  <Icon name="auto_stories" className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="mb-2 font-headline-md text-headline-md text-deep-navy">Brand Publishing</h4>
                  <p className="max-w-lg text-sm leading-relaxed text-on-surface-variant">
                    Transformez votre marque en média. Stratégie de brand content, rédaction SEO
                    premium et production de supports éditoriaux à haute valeur ajoutée pour asseoir
                    votre autorité.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap">
        <div className="relative mx-margin-mobile overflow-hidden bg-deep-navy p-12 md:mx-margin-desktop md:p-24">
          <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="text-center md:text-left">
              <AnimatedText as="h2" className="mb-6 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl">
                Prêt à dominer votre écosystème digital ?
              </AnimatedText>
              <Reveal delay={0.1}>
                <p className="max-w-xl font-body-lg text-surface-variant">
                  Nos experts sont prêts à auditer votre présence actuelle et à définir la stratégie
                  qui vous placera devant vos concurrents.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row">
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="block bg-golden-accent px-12 py-5 font-bold text-deep-navy shadow-xl">
                  Réserver un audit gratuit
                </span>
              </Magnetic>
              <Magnetic as={Link} to="/references" className="inline-block">
                <span className="block border border-white/30 px-12 py-5 font-bold text-white transition-all hover:bg-white hover:text-deep-navy">
                  Voir nos études de cas
                </span>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
