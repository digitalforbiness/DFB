import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Marquee from '../components/ui/Marquee'
import Icon from '../components/ui/Icon'
import ContactForm from '../components/ContactForm'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const services = [
  { icon: 'strategy', title: 'Conseil en stratégie', text: "Great work doesn't just “happen”, it's born out of inspiration, trust, and collaboration. Nous aidons les entreprises à réussir leur transformation." },
  { icon: 'campaign', title: 'Activation Marketing', text: 'Modéliser, itérer et enfin attribuer. Nous libérons la véritable puissance des campagnes médias tout en optimisant vos dépenses.' },
  { icon: 'web', title: 'Web Design & Services', text: 'Nos designers conçoivent des produits originaux et complexes utilisant les dernières technologies pour une expérience utilisateur unique.' },
  { icon: 'database', title: 'Data Marketing', text: "Nous aidons nos clients à augmenter leurs ventes grâce à l'apport de la data et de l'intelligence artificielle décisionnelle." },
  { icon: 'share', title: 'Social Media', text: 'Développer votre marque employeur et générer des leads à travers une présence digitale maîtrisée sur tous les réseaux sociaux.' },
  { icon: 'person_add', title: 'Social Selling', text: 'Sales training, lead generation, customer insight, professional social accounts et lead nurturing pour vos équipes commerciales.' },
]

const values = [
  { title: 'Respect', text: 'Une équipe diverse, des collaborations fructueuses et des réalisations exceptionnelles.' },
  { title: 'Engagement', text: 'Le digital pour tous, quel que soit votre budget ou la taille de votre structure.' },
  { title: 'Communication', text: 'Des piliers fondateurs qui façonnent notre culture et notre performance globale.' },
  { title: 'Travail', text: 'Empathie et intégrité guident nos actions quotidiennes et notre réputation interne.' },
]

const articles = [
  { img: 'equipe-chevignon.png', date: '9 février 2024 • Article', title: "Choisis un travail que tu aimes et tu n'auras plus à travailler un seul jour." },
  { img: 'puzzle-equipe.jpg', date: '12 février 2024 • Article', title: "Travailler Ensemble, S'épanouir Ensemble pour la performance." },
  { img: 'instagram-reseaux.jpg', date: '12 février 2024 • Article', title: 'Transformez vos Réseaux, Élevez votre Business avec nous.' },
]

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden pt-24">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-[0.55]"
          style={{ backgroundImage: "url('/images/img_3ef067523e12.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/50 via-deep-navy/70 to-deep-navy" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile text-center md:px-margin-desktop"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeApple, delay: 0.2 }}
          className="mb-6 block font-label-caps text-label-caps uppercase tracking-widest text-golden-accent"
        >
          Digital Strategy Mastery
        </motion.span>

        <h1 className="mb-8 font-display-lg text-headline-xl-mobile leading-tight text-white md:text-display-lg">
          <AnimatedText as="span" text="Cabinet de Conseils en" className="block" />
          <span className="block">
            <AnimatedText as="span" className="text-arctic-blue">
              Stratégie digitale
            </AnimatedText>{' '}
            <AnimatedText as="span">et e-Commerce</AnimatedText>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeApple, delay: 0.6 }}
          className="mx-auto mb-12 max-w-3xl font-body-lg text-body-lg text-surface-variant"
        >
          Petite ou moyenne, chaque entreprise a droit au digital comme levier de développement !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeApple, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-gutter md:flex-row"
        >
          <Magnetic as={Link} to="/services" className="w-full md:w-auto">
            <span className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-10 py-4 text-lg font-bold text-deep-navy transition-colors hover:bg-golden-accent">
              Nos Services
              <Icon name="trending_flat" className="transition-transform group-hover:translate-x-1" />
            </span>
          </Magnetic>
          <Magnetic as={Link} to="/contact" className="w-full md:w-auto">
            <span className="flex w-full items-center justify-center rounded-lg border border-surface-variant/30 px-10 py-4 text-lg font-bold text-white transition-colors hover:border-golden-accent hover:text-golden-accent">
              Consultation Gratuite
            </span>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <Icon name="expand_more" className="text-4xl text-arctic-blue" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-20 flex flex-col items-end justify-between gap-gutter md:flex-row">
          <div className="max-w-2xl">
            <Reveal>
              <span className="mb-4 block font-label-caps text-label-caps uppercase text-golden-accent">
                Expertise
              </span>
            </Reveal>
            <AnimatedText as="h2" text="Nos Services" className="font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
            <Reveal>
              <div className="mt-6 h-1 w-24 bg-golden-accent" />
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md font-body-md text-surface-variant">
              Des solutions technologiques de pointe et un accompagnement stratégique pour propulser
              votre croissance.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: easeApple }}
              className="group border border-white/5 bg-primary-container p-8 transition-colors duration-300 hover:border-golden-accent/40"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center bg-deep-navy transition-colors group-hover:bg-golden-accent">
                <Icon name={s.icon} className="text-4xl text-golden-accent transition-colors group-hover:text-deep-navy" />
              </div>
              <h3 className="mb-4 font-headline-md text-headline-md text-white">{s.title}</h3>
              <p className="mb-6 font-body-md text-surface-variant/70">{s.text}</p>
              <Link to="/services" className="flex items-center gap-2 font-bold text-arctic-blue transition-all group-hover:gap-4">
                Découvrir <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-ink-black py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="mb-4 block font-label-caps text-label-caps uppercase text-golden-accent">
                  Culture & ADN
                </span>
              </Reveal>
              <AnimatedText as="h2" text="Les Valeurs de l'Entreprise" className="mb-8 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
              <Reveal>
                <p className="mb-12 font-body-lg text-surface-variant">
                  Notre performance repose sur un socle de valeurs humaines et d'engagement
                  professionnel total.
                </p>
              </Reveal>
              <motion.div
                variants={staggerContainer(0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 gap-10 sm:grid-cols-2"
              >
                {values.map((v) => (
                  <motion.div key={v.title} variants={fadeUp}>
                    <h4 className="mb-3 flex items-center gap-2 font-headline-md text-white">
                      <span className="h-2 w-2 bg-golden-accent" /> {v.title}
                    </h4>
                    <p className="text-surface-variant/60">{v.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Reveal direction="left" className="group relative">
              <div className="absolute -inset-4 border border-golden-accent/20 transition-all group-hover:border-golden-accent" />
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src="/images/camera-valeurs.png"
                  alt="Appareil photo en production, savoir-faire et exigence de l'entreprise"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="mb-4 block font-label-caps text-label-caps uppercase text-golden-accent">
              Insights
            </span>
          </Reveal>
          <AnimatedText as="h2" text="Dernières Actualités" className="font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
        </div>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-gutter md:grid-cols-3"
        >
          {articles.map((a) => (
            <motion.div key={a.title} variants={fadeUp} className="group">
              <Link to="/article">
                <div className="mb-6 aspect-[4/5] overflow-hidden bg-primary-container">
                  <img
                    src={`/images/${a.img}`}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <span className="mb-2 block font-label-caps text-[10px] uppercase text-arctic-blue">
                  {a.date}
                </span>
                <h3 className="mb-4 font-headline-md text-white transition-colors group-hover:text-golden-accent">
                  {a.title}
                </h3>
                <span className="inline-flex items-center gap-2 border-b border-white/20 pb-1 font-bold text-surface-variant transition-colors group-hover:text-white">
                  Lire l'article <Icon name="north_east" className="text-sm" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partners marquee */}
      <section className="border-y border-white/5 bg-deep-navy py-24">
        <div className="mx-auto flex max-w-container-max-width flex-col gap-10 px-margin-mobile md:px-margin-desktop">
          <span className="text-center font-label-caps text-label-caps uppercase text-surface-variant/40 md:text-left">
            Ils nous font confiance
          </span>
          <Marquee speed={28} className="opacity-60">
            {['ETRAELEC', 'NEHO FRET', 'QITCH', 'ETRAELEC', 'NEHO FRET', 'QITCH'].map((name, i) => (
              <span key={i} className="whitespace-nowrap font-display-lg text-3xl font-bold tracking-tighter text-white">
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="relative overflow-hidden bg-primary-container p-12 md:p-24">
          <div className="relative z-10 grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <AnimatedText as="h2" text="Discutons de votre prochain projet" className="mb-8 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
              <Reveal>
                <p className="mb-12 max-w-md text-surface-variant/70">
                  Nous sommes basés à Paris mais travaillons avec des entreprises dans toute l'Europe.
                </p>
              </Reveal>
              <div className="space-y-8">
                {[
                  { icon: 'location_on', title: 'Paris Office', text: '61 Bd Haussmann, 75008 Paris, France' },
                  { icon: 'mail', title: 'Email', text: 'contact@dfb.digital' },
                  { icon: 'call', title: 'Téléphone', text: '+33 9 54 27 50 80' },
                ].map((c, i) => (
                  <Reveal key={c.icon} delay={i * 0.1} className="flex items-start gap-4">
                    <Icon name={c.icon} className="text-golden-accent" />
                    <div>
                      <h5 className="mb-1 font-bold text-white">{c.title}</h5>
                      <p className="text-surface-variant/60">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 select-none font-display-lg text-[200px] leading-none text-white/5">
            CONTACT
          </div>
        </div>
      </section>
    </>
  )
}
