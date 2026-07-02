import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const stats = [
  { value: '+40%', label: 'Efficacité opérationnelle' },
  { value: '100%', label: 'Processus digitalisés' },
  { value: '-25%', label: 'Coûts de maintenance' },
  { value: 'R-O-I', label: 'Atteint en 18 mois' },
]

const challenges = [
  { icon: 'error', title: 'Processus Manuels', text: 'Dépendance excessive aux feuilles de calcul papier et erreurs de saisie manuelles.' },
  { icon: 'visibility_off', title: 'Opacité de la Data', text: "Impossibilité d'agréger les données provenant de multiples sites industriels." },
]

const results = [
  { tag: 'OPÉRATIONS', title: 'Flux optimisés', text: "Réduction de 30% du temps de traitement des dossiers chantiers grâce à l'automatisation des workflows.", border: 'border-deep-navy' },
  { tag: 'DATA', title: 'Vision 360°', text: 'Tableaux de bord consolidés offrant une visibilité instantanée sur les KPI financiers et RH.', border: 'border-golden-accent' },
  { tag: 'SÉCURITÉ', title: 'Conformité', text: "Garantie d'intégrité des données à 99.9% avec mise aux normes RGPD complète.", border: 'border-deep-navy' },
]

export default function CasEtraelec() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero */}
      <section className="relative flex min-h-[600px] w-full items-center overflow-hidden" style={{ height: '90vh' }}>
        <div className="absolute inset-0 z-0">
          <img alt="Infrastructure industrielle Etraelec" className="h-full w-full object-cover" src="/images/img_50ccfa3ccc47.png" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <Reveal><span className="mb-6 block font-label-caps text-label-caps uppercase tracking-widest text-golden-accent">Etraelec Case Study</span></Reveal>
            <AnimatedText as="h1" text="Transformation digitale industrielle" className="mb-8 font-display-lg text-headline-xl-mobile text-white md:text-display-lg" />
            <Reveal delay={0.15}>
              <p className="mb-10 max-w-2xl font-body-lg text-body-lg leading-relaxed text-white/80">
                Accompagnement stratégique et déploiement d'un écosystème numérique sur mesure pour un
                leader de l'ingénierie électrique.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-4">
                {[{ k: 'DURÉE', v: '12 Mois' }, { k: 'DOMAINES', v: 'SI & IA' }].map((b) => (
                  <div key={b.k} className="rounded-lg border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md">
                    <span className="mb-1 block font-label-caps text-[10px] text-white/60">{b.k}</span>
                    <span className="font-headline-md text-white">{b.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-lowest py-24">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 gap-gutter border-y border-outline-variant/30 py-16 md:grid-cols-4">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center md:text-left">
                <span className="block font-display-lg text-headline-xl text-deep-navy">{s.value}</span>
                <span className="font-body-md text-on-surface-variant">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-start gap-gutter md:flex-row">
            <div className="w-full md:w-1/3">
              <AnimatedText as="h2" text="Le Challenge" className="mb-6 font-headline-lg text-headline-lg text-deep-navy" />
              <div className="h-1 w-20 bg-golden-accent" />
            </div>
            <div className="w-full md:w-2/3">
              <Reveal>
                <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  Etraelec faisait face à une fragmentation critique de ses données. Les processus de
                  gestion de chantier, autrefois manuels, entraînaient des latences décisionnelles et un
                  manque de visibilité sur la rentabilité en temps réel.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {challenges.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.1} className="flex items-start gap-4">
                    <Icon name={c.icon} className="text-3xl text-error" />
                    <div>
                      <h4 className="mb-2 font-headline-md text-deep-navy">{c.title}</h4>
                      <p className="text-on-surface-variant">{c.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution (dark) */}
      <section className="bg-deep-navy py-section-gap text-white">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <Reveal><span className="mb-4 block font-label-caps text-golden-accent">APPROCHE STRATÉGIQUE</span></Reveal>
            <AnimatedText as="h2" text="Notre Solution" className="font-headline-xl text-headline-xl-mobile md:text-headline-xl" />
          </div>

          <div className="mb-24 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-6 font-headline-lg text-headline-lg">Architecture SI & Data Hub</h3>
              <p className="mb-8 font-body-md text-white/70">
                Nous avons conçu un socle technologique robuste centralisant l'ensemble des flux
                métiers. Cette infrastructure permet une communication fluide entre le terrain et la
                direction.
              </p>
              <ul className="space-y-4">
                {['Cloud Infrastructure sécurisée', 'API Management pour interopérabilité'].map((li) => (
                  <li key={li} className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-golden-accent" /> <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal direction="left" className="order-1 md:order-2">
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img alt="Architecture SI" className="h-full w-full object-cover" src="/images/img_43108761a4fb.png" />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <Reveal direction="right">
              <div className="aspect-video overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img alt="Pilotage prédictif" className="h-full w-full object-cover" src="/images/img_ed47a3a6a9f2.png" />
              </div>
            </Reveal>
            <div>
              <h3 className="mb-6 font-headline-lg text-headline-lg">Pilotage Prédictif & IA</h3>
              <p className="mb-8 font-body-md text-white/70">
                L'intégration d'algorithmes de machine learning a permis de transformer la maintenance
                réactive en maintenance prédictive, réduisant drastiquement les arrêts de production.
              </p>
              <div className="border-l-4 border-golden-accent bg-white/5 p-8">
                <p className="font-body-md italic text-white/90">
                  "L'IA n'est plus un concept abstrait pour nous, c'est devenu un levier quotidien de
                  performance opérationnelle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <AnimatedText as="h2" text="Impact Mesurable" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal><p className="mx-auto max-w-2xl text-on-surface-variant">Une réussite technologique qui se traduit par des indicateurs clés de performance en forte progression.</p></Reveal>
          </div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {results.map((r) => (
              <motion.div key={r.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className={`rounded-lg border-t-4 bg-white p-10 shadow-sm ${r.border}`}>
                <span className="mb-4 block font-label-caps text-secondary">{r.tag}</span>
                <h4 className="mb-4 font-headline-lg text-headline-lg text-deep-navy">{r.title}</h4>
                <p className="text-on-surface-variant">{r.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section-gap">
        <div className="mx-auto max-w-4xl px-margin-mobile text-center">
          <Reveal>
            <Icon name="format_quote" className="mb-8 text-6xl text-golden-accent" filled />
            <blockquote className="mb-10 font-headline-lg text-headline-md leading-snug text-deep-navy md:text-headline-lg">
              "DFB a su comprendre les enjeux spécifiques de l'industrie électrique. Leur approche n'est
              pas seulement technique, elle est stratégique. Aujourd'hui, Etraelec est armé pour
              affronter les défis de demain."
            </blockquote>
            <p className="text-lg font-bold text-deep-navy">Direction Générale</p>
            <p className="font-label-caps text-on-surface-variant">ETRAELEC</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-deep-navy py-32">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-arctic-blue/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile text-center">
          <AnimatedText as="h2" text="Prêt à transformer votre business ?" className="mb-10 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
          <Reveal delay={0.1}>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="block rounded-lg bg-white px-12 py-5 text-lg font-bold text-deep-navy transition-all hover:bg-golden-accent">Démarrer un projet</span>
              </Magnetic>
              <Magnetic as={Link} to="/references" className="inline-block">
                <span className="block rounded-lg border-2 border-white/30 px-12 py-5 text-lg font-bold text-white transition-all hover:bg-white/10">Voir d'autres études</span>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
