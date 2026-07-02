import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const areas = [
  { icon: 'cloud_done', title: 'SaaS & Plateformes', text: 'Architecture cloud-native conçue pour la scalabilité horizontale et le multi-tenancy sécurisé.', tags: ['Scalabilité infinie', 'Multi-tenancy', 'Architectures cloud'] },
  { icon: 'hub', title: 'ERP & CRM Sur Mesure', text: 'Outils métiers alignés sur vos processus réels, garantissant une intégration de données sans friction.', tags: ['Processus métiers', 'Intégration data', 'UX orientée tâche'] },
  { icon: 'bolt', title: 'Automatisation & IA', text: 'Workflows intelligents et agents autonomes pour l’optimisation continue de vos processus critiques.', tags: ['Workflows intelligents', 'Agents autonomes', 'Machine learning ops'] },
]

const steps = [
  { n: '01', title: 'Audit & Architecture', text: 'Définition rigoureuse du socle technique et fonctionnel. Nous cartographions vos flux pour bâtir une structure solide.' },
  { n: '02', title: 'Développement Agile', text: 'Itérations rapides basées sur les retours utilisateurs. Nous livrons de la valeur concrète à chaque cycle de sprint.' },
  { n: '03', title: 'Maintenance & Scalabilité', text: 'Accompagnement long terme. Nous veillons à ce que votre application évolue avec votre croissance business.' },
]

export default function DevApplications() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero (dark) */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep-navy pt-24" style={{ height: '85vh' }}>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-cover bg-center opacity-100" style={{ backgroundImage: "url('/images/img_f09907d067ab.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/70 to-deep-navy/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <Reveal>
              <span className="mb-6 inline-block font-label-caps uppercase tracking-[0.2em] text-golden-accent">
                Service de Pointe
              </span>
            </Reveal>
            <AnimatedText as="h1" text="Applications Métiers & Écosystèmes Digitaux" className="mb-8 font-display-lg text-headline-xl-mobile text-white md:text-display-lg" />
            <Reveal delay={0.15}>
              <p className="mb-10 max-w-2xl font-body-lg text-body-lg leading-relaxed text-surface-variant/90">
                Concevoir, bâtir et scaler les outils critiques de votre performance opérationnelle.
                Nous transformons les processus complexes en solutions fluides et évolutives.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="group flex items-center gap-3 bg-white px-8 py-4 font-bold uppercase text-deep-navy transition-all hover:bg-golden-accent">
                  Initier un Audit Stratégique
                  <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise areas */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <AnimatedText as="h2" text="Domaines d'Expertise Technique" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal>
              <p className="font-body-md text-slate-gray">
                Des solutions pensées pour l'excellence opérationnelle et la durabilité technologique.
              </p>
            </Reveal>
          </div>
          <div className="mx-8 mb-4 hidden h-px flex-grow bg-outline-variant/30 md:block" />
        </div>
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {areas.map((a) => (
            <motion.div key={a.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className="group border border-outline-variant/20 bg-surface-container-lowest p-10 transition-all hover:border-deep-navy/30">
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-surface-container-high">
                <Icon name={a.icon} className="text-3xl text-deep-navy" />
              </div>
              <h3 className="mb-4 font-headline-md text-headline-md text-deep-navy">{a.title}</h3>
              <p className="mb-8 font-body-md text-slate-gray">{a.text}</p>
              <ul className="space-y-3 font-label-caps uppercase text-on-surface-variant">
                {a.tags.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs tracking-wider">
                    <span className="h-1.5 w-1.5 bg-arctic-blue" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Methodology (dark) */}
      <section className="bg-deep-navy py-section-gap text-white">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center">
            <Reveal><span className="mb-4 block font-label-caps uppercase tracking-[0.2em] text-arctic-blue">Notre Approche</span></Reveal>
            <AnimatedText as="h2" text="The DFB Way : Rigueur & Agilité" className="mb-6 font-headline-xl text-headline-xl-mobile md:text-headline-xl" />
            <Reveal><div className="mx-auto h-1 w-24 bg-golden-accent" /></Reveal>
          </div>
          <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="absolute left-0 top-16 hidden h-[2px] w-full bg-white/10 lg:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12} className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-arctic-blue font-headline-md font-bold text-deep-navy ring-8 ring-deep-navy">
                  {s.n}
                </div>
                <h4 className="mb-4 font-headline-md text-headline-md text-white">{s.title}</h4>
                <p className="font-body-md text-surface-variant/80">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business value */}
      <section className="overflow-hidden py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <Reveal direction="right" className="relative w-full lg:w-1/2">
              <div className="relative z-10 border-[12px] border-surface-container-high bg-white p-4 shadow-2xl">
                <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('/images/img_50ccfa3ccc47.png')" }} />
              </div>
              <div className="absolute -left-10 -top-10 -z-0 h-64 w-64 bg-arctic-blue/10" />
              <div className="absolute -bottom-10 -right-10 -z-0 h-48 w-48 border border-deep-navy/10" />
            </Reveal>
            <div className="w-full lg:w-1/2">
              <Reveal><span className="mb-4 block font-label-caps uppercase tracking-[0.2em] text-deep-navy">Valeur Business</span></Reveal>
              <AnimatedText as="h2" className="mb-8 font-display-lg text-headline-xl-mobile leading-tight text-deep-navy md:text-headline-xl">
                Transformer la complexité technique en simplicité opérationnelle.
              </AnimatedText>
              <Reveal delay={0.1}>
                <p className="mb-10 font-body-lg text-body-lg text-slate-gray">
                  Notre mission dépasse le simple code. Nous créons des leviers de croissance en
                  éliminant les silos de données et en automatisant les tâches à faible valeur ajoutée.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-8">
                <Reveal delay={0.15} className="space-y-2">
                  <div className="text-headline-lg font-bold text-deep-navy">ROI</div>
                  <p className="font-body-md text-slate-gray">Optimisation des coûts de structure dès le premier trimestre.</p>
                </Reveal>
                <Reveal delay={0.25} className="space-y-2">
                  <div className="text-headline-lg font-bold text-deep-navy">99.9%</div>
                  <p className="font-body-md text-slate-gray">Taux de disponibilité garanti pour vos outils critiques.</p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile text-center md:px-margin-desktop">
          <div className="mx-auto max-w-3xl">
            <AnimatedText as="h2" text="Prêt à transformer votre vision en application ?" className="mb-6 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal><p className="mb-12 font-body-lg text-slate-gray">Discutons de vos enjeux technologiques et de la manière dont nous pouvons accélérer votre roadmap produit.</p></Reveal>
            <Reveal delay={0.1}>
              <div className="inline-flex flex-col items-center gap-8 bg-white p-4 shadow-xl md:flex-row">
                <div className="hidden items-center gap-4 border-r border-outline-variant/30 px-6 md:flex">
                  <Icon name="alternate_email" className="text-deep-navy" />
                  <span className="font-body-md font-bold text-deep-navy">contact@dfb.digital</span>
                </div>
                <div className="hidden items-center gap-4 border-r border-outline-variant/30 px-6 md:flex">
                  <Icon name="call" className="text-deep-navy" />
                  <span className="font-body-md font-bold text-deep-navy">0635330669</span>
                </div>
                <Magnetic as={Link} to="/contact" className="w-full md:w-auto">
                  <span className="block w-full bg-deep-navy px-10 py-5 text-center font-bold uppercase text-white transition-all hover:bg-arctic-blue hover:text-deep-navy">
                    Prendre Rendez-vous
                  </span>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
