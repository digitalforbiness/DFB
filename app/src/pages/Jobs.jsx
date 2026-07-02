import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const values = [
  { icon: 'handshake', title: 'Respect', text: "L'écoute active et la considération mutuelle sont les piliers de notre collaboration interne et client.", border: 'border-arctic-blue' },
  { icon: 'verified', title: 'Engagement', text: 'Nous nous investissons pleinement dans chaque projet, avec une passion qui transcende le simple livrable.', border: 'border-deep-navy' },
  { icon: 'forum', title: 'Communication', text: "La clarté et la transparence sont nos maîtres-mots pour garantir l'alignement et la confiance durable.", border: 'border-golden-accent' },
  { icon: 'precision_manufacturing', title: 'Travail', text: "L'exigence technique et le goût du détail font la différence entre un projet réussi et une maîtrise digitale.", border: 'border-slate-gray' },
]

const perks = [
  { icon: 'bolt', title: "Culture de l'Impact", text: 'Ici, vos idées ne dorment pas dans un tiroir. Nous implémentons ce que nous conseillons, voyant l\'impact direct de notre travail.' },
  { icon: 'psychology', title: 'Apprentissage Continu', text: 'Budget formation, séminaires tech et sessions de co-working stratégiques pour rester à la pointe du marché.' },
  { icon: 'diversity_3', title: 'Environnement Agile', text: "Pas de hiérarchie pesante. Nous valorisons l'initiative, l'autonomie et le droit à l'expérimentation." },
]

const jobs = [
  { dept: 'Design', title: 'Senior UX Designer', text: "Refonte d'écosystèmes complexes pour nos clients grands comptes.", loc: 'Paris / Remote Friendly' },
  { dept: 'Marketing', title: 'Media Buyer Expert', text: 'Gestion de budgets annuels > 2M€ sur les plateformes Google & Meta.', loc: 'Paris' },
  { dept: 'Data', title: 'Senior Data Analyst', text: 'Structuration des stacks analytiques et dashboarding stratégique.', loc: 'Paris / Remote Friendly' },
]

const departments = ['Tous les départements', 'Design', 'Marketing', 'Data']

export default function Jobs() {
  const [dept, setDept] = useState('Tous les départements')
  const visible = jobs.filter((j) => dept === 'Tous les départements' || j.dept === dept)

  return (
    <div className="bg-background text-on-surface">
      {/* Hero */}
      <section className="mx-auto mb-section-gap max-w-container-max-width px-5 pt-40 md:px-20">
        <div className="flex flex-col items-end gap-gutter md:flex-row">
          <div className="w-full md:w-2/3">
            <Reveal><span className="mb-6 inline-block bg-secondary-fixed px-3 py-1 font-label-caps text-label-caps text-secondary">REJOIGNEZ L'ÉLITE DIGITALE</span></Reveal>
            <AnimatedText as="h1" className="mb-8 font-display-lg text-headline-xl-mobile leading-tight text-deep-navy md:text-display-lg">
              Bâtissons ensemble le futur du conseil stratégique.
            </AnimatedText>
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Chez DFB, nous ne cherchons pas seulement des experts, mais des visionnaires capables
                de marier conseil de haut vol et exécution technique irréprochable.
              </p>
            </Reveal>
          </div>
          <div className="flex w-full justify-end md:w-1/3">
            <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="flex h-24 w-24 items-center justify-center border-2 border-golden-accent">
              <Icon name="expand_more" className="text-4xl text-golden-accent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max-width px-5 md:px-20">
          <div className="mb-16">
            <AnimatedText as="h2" text="Nos Valeurs Fondamentales" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal><p className="font-body-md text-body-md text-on-surface-variant">L'ADN DFB : l'excellence au service de l'humain.</p></Reveal>
          </div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className={`border-b-4 bg-white p-8 ${v.border}`}>
                <Icon name={v.icon} filled className="mb-6 text-3xl text-secondary" />
                <h3 className="mb-4 font-headline-md text-headline-md text-deep-navy">{v.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workplace */}
      <section className="mx-auto flex max-w-container-max-width flex-col items-center gap-16 px-5 py-section-gap md:flex-row md:px-20">
        <Reveal direction="right" className="relative w-full md:w-1/2">
          <div className="aspect-[4/5] overflow-hidden bg-surface-dim shadow-xl">
            <img alt="Ambiance de travail DFB" className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" src="/images/img_283958753148.png" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden bg-deep-navy p-10 text-white md:block">
            <p className="mb-4 font-label-caps text-label-caps">LOCALISATION</p>
            <p className="font-headline-md text-headline-md">Paris, 8ème</p>
            <p className="font-body-md text-body-md opacity-70">Hub de Création & Stratégie</p>
          </div>
        </Reveal>
        <div className="w-full md:w-1/2">
          <AnimatedText as="h2" text="Pourquoi nous rejoindre ?" className="mb-8 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
          <div className="space-y-8">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary-container">
                  <Icon name={p.icon} className="text-white" />
                </div>
                <div>
                  <h4 className="mb-2 font-headline-md text-lg text-deep-navy">{p.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job offers (dark) */}
      <section className="bg-deep-navy py-section-gap text-white">
        <div className="mx-auto max-w-container-max-width px-5 md:px-20">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <Reveal><span className="mb-4 block font-label-caps text-label-caps text-golden-accent">OPEN OPPORTUNITIES</span></Reveal>
              <AnimatedText as="h2" text="Nos Postes Ouverts" className="font-display-lg text-headline-xl-mobile text-white md:text-display-lg" />
            </div>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className="border border-white/20 bg-transparent px-4 py-2 font-body-md focus:ring-golden-accent">
              {departments.map((d) => (
                <option key={d} className="text-deep-navy">{d}</option>
              ))}
            </select>
          </div>
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {visible.map((j) => (
                <motion.div
                  key={j.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: easeApple }}
                  className="group flex cursor-pointer flex-col items-center justify-between border border-white/10 p-8 transition-all hover:bg-white/5 md:flex-row"
                >
                  <div className="mb-6 md:mb-0">
                    <div className="mb-3 flex gap-3">
                      <span className="bg-arctic-blue px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest text-deep-navy">{j.dept}</span>
                      <span className="bg-white/10 px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest text-white">Full-Time</span>
                    </div>
                    <h3 className="mb-2 font-headline-lg text-headline-lg">{j.title}</h3>
                    <p className="font-body-md text-on-primary-container">{j.text}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-body-md text-white/60">{j.loc}</span>
                    <Icon name="arrow_forward" className="text-golden-accent transition-transform group-hover:translate-x-2" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-16 text-center">
            <p className="mb-6 font-body-md text-white/60">Vous ne trouvez pas le poste idéal ?</p>
            <button className="border border-golden-accent px-10 py-4 font-label-caps tracking-widest text-golden-accent transition-all hover:bg-golden-accent hover:text-deep-navy">
              Candidature Spontanée
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-container-max-width px-5 py-section-gap md:px-20">
        <div className="relative flex flex-col items-center gap-12 overflow-hidden bg-surface-container p-12 md:flex-row md:p-20">
          <div className="relative z-10 w-full md:w-1/2">
            <AnimatedText as="h2" text="Restez à l'écoute de nos projets." className="mb-6 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal><p className="mb-8 font-body-md text-body-md text-on-surface-variant">Inscrivez-vous pour recevoir nos insights mensuels et les nouvelles opportunités en avant-première.</p></Reveal>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:flex-row">
              <input className="flex-grow border-none bg-white p-4 font-body-md focus:ring-2 focus:ring-deep-navy" placeholder="Votre email professionnel" type="email" />
              <button className="whitespace-nowrap bg-deep-navy px-8 py-4 font-label-caps uppercase tracking-widest text-white">S'inscrire</button>
            </form>
          </div>
          <div className="hidden w-full md:block md:w-1/2">
            <div className="flex h-64 w-full items-center justify-center border border-deep-navy/10 opacity-20">
              <Icon name="send" className="text-[160px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
