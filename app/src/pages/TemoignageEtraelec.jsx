import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Icon from '../components/ui/Icon'
import { easeApple } from '../lib/motion'

const clientInfo = [
  { label: 'Secteur', value: 'Ingénierie & Énergie' },
  { label: 'Localisation', value: 'Lyon, France' },
  { label: 'Solution', value: 'Modernisation SI & Cloud' },
]

export default function TemoignageEtraelec() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero video */}
      <section className="relative overflow-hidden bg-deep-navy pt-40 pb-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 flex items-center gap-2 font-label-caps uppercase text-arctic-blue/60">
            <Link className="transition-colors hover:text-golden-accent" to="/temoignages">Témoignages</Link>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-white">Etraelec</span>
          </div>
          <div className="mb-12 grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
            <div className="lg:col-span-8">
              <AnimatedText as="h1" className="mb-6 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl">
                Accélération de la Transformation Digitale pour Etraelec
              </AnimatedText>
              <Reveal delay={0.15}>
                <p className="max-w-2xl font-body-lg text-body-lg text-arctic-blue">
                  Comment DFB Agency a restructuré l'écosystème technique d'Etraelec pour optimiser leur
                  productivité opérationnelle de 40%.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <img alt="Témoignage vidéo Etraelec" className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105" src="/images/img_ed47a3a6a9f2.png" />
              <div className="absolute inset-0 bg-deep-navy/40 transition-colors duration-500 group-hover:bg-deep-navy/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, ease: easeApple }} className="flex h-20 w-20 items-center justify-center rounded-full bg-golden-accent shadow-2xl md:h-28 md:w-28">
                  <Icon name="play_arrow" filled className="translate-x-1 text-5xl text-deep-navy" />
                </motion.div>
              </div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-golden-accent">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/img_9671a6254fc1.png')" }} />
                </div>
                <div>
                  <p className="font-bold leading-none text-white">Marc-Antoine Durand</p>
                  <p className="text-sm text-arctic-blue">Directeur Général, Etraelec</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Context & strategy */}
      <section className="bg-background py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main */}
            <div className="space-y-16 lg:col-span-2">
              <div className="space-y-6">
                <Reveal><span className="inline-block rounded-sm bg-secondary-container px-3 py-1 font-label-caps text-xs uppercase tracking-widest text-on-secondary-fixed-variant">Le Défi</span></Reveal>
                <AnimatedText as="h2" text="Une dette technique limitant la croissance organique" className="font-headline-lg text-headline-lg text-deep-navy" />
                <Reveal>
                  <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    Etraelec faisait face à une fragmentation critique de ses données et des outils de
                    gestion obsolètes qui freinaient sa réactivité commerciale. La problématique n'était
                    plus seulement technique, mais stratégique : comment unifier les flux pour soutenir
                    une croissance de +20% par an ?
                  </p>
                </Reveal>
              </div>

              <div className="space-y-6">
                <Reveal><span className="inline-block rounded-sm bg-secondary-container px-3 py-1 font-label-caps text-xs uppercase tracking-widest text-on-secondary-fixed-variant">Notre Intervention</span></Reveal>
                <AnimatedText as="h2" text="Restructuration Agile et Cloud-Native" className="font-headline-lg text-headline-lg text-deep-navy" />
                <Reveal>
                  <p className="mb-8 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    Notre équipe a déployé une méthodologie d'audit flash pour identifier les goulots
                    d'étranglement, suivie d'une migration complète vers une architecture micro-services.
                    Nous avons mis en place un hub central de données temps-réel.
                  </p>
                </Reveal>
                <Reveal className="group relative h-96 w-full overflow-hidden rounded-xl">
                  <img alt="Collaboration stratégique" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/img_2d0dd51c743b.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 max-w-md text-white">
                    <p className="mb-1 text-lg font-bold italic">"La rigueur méthodologique de DFB a transformé notre vision du SI."</p>
                    <p className="text-sm opacity-80">— Équipe Projet Etraelec</p>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-8">
                <Reveal><span className="inline-block rounded-sm bg-secondary-container px-3 py-1 font-label-caps text-xs uppercase tracking-widest text-on-secondary-fixed-variant">Impact Mesurable</span></Reveal>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    { icon: 'speed', value: '+40%', label: 'Gain de productivité opérationnelle' },
                    { icon: 'trending_down', value: '-25%', label: 'Réduction des coûts de maintenance' },
                  ].map((b, i) => (
                    <Reveal key={b.value} delay={i * 0.1} className="rounded-lg border border-outline-variant/20 bg-white p-8">
                      <Icon name={b.icon} filled className="mb-4 text-4xl text-golden-accent" />
                      <p className="font-headline-xl text-headline-xl text-deep-navy">{b.value}</p>
                      <p className="font-medium text-on-surface-variant">{b.label}</p>
                    </Reveal>
                  ))}
                  <Reveal className="flex flex-col items-center justify-between gap-8 rounded-lg bg-deep-navy p-8 text-white md:col-span-2 md:flex-row">
                    <div>
                      <p className="mb-2 font-headline-lg text-headline-lg">ROI Atteint en 8 mois</p>
                      <p className="text-arctic-blue opacity-80">Une transformation rentable dès la première année d'exploitation.</p>
                    </div>
                    <Icon name="verified" className="shrink-0 text-6xl text-golden-accent opacity-20" filled />
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              <div className="space-y-12 lg:sticky lg:top-32">
                <div className="rounded-lg border border-outline-variant/10 bg-surface-container-low p-8">
                  <h3 className="mb-6 font-label-caps text-xs uppercase tracking-widest text-on-surface-variant">À propos du client</h3>
                  <div className="mb-6 h-12 w-32">
                    <div className="h-full w-full bg-contain bg-left bg-no-repeat opacity-80" style={{ backgroundImage: "url('/images/img_48854dd6ee21.png')" }} />
                  </div>
                  <div className="space-y-4">
                    {clientInfo.map((c) => (
                      <div key={c.label}>
                        <p className="mb-1 font-label-caps text-xs text-on-surface-variant/60">{c.label}</p>
                        <p className="font-bold text-deep-navy">{c.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative border-l-4 border-golden-accent pl-8">
                  <Icon name="format_quote" filled className="absolute -left-4 -top-6 select-none text-6xl text-golden-accent/30" />
                  <blockquote className="font-headline-md text-headline-md italic leading-snug text-deep-navy">
                    "DFB Agency ne se contente pas de livrer du code ; ils livrent une vision stratégique
                    qui a radicalement changé notre trajectoire."
                  </blockquote>
                  <cite className="mt-4 block font-bold not-italic text-on-surface-variant">— Marc-Antoine Durand</cite>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="border-t border-outline-variant/10 bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-2">
            <Link to="/cas-etraelec" className="group inline-flex items-center gap-4 text-deep-navy transition-all hover:text-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-deep-navy transition-all group-hover:bg-deep-navy group-hover:text-white">
                <Icon name="arrow_back" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant/60">Étude de cas</span>
                <span className="text-lg font-bold">Projet Etraelec : SI & IA</span>
              </div>
            </Link>
            <div className="md:text-right">
              <p className="mb-6 text-lg text-on-surface-variant">Votre projet mérite la même attention stratégique.</p>
              <Link to="/contact" className="group inline-flex items-center gap-4 rounded-sm bg-deep-navy px-8 py-4 font-bold text-white transition-all hover:bg-ink-black">
                Discutons de votre projet
                <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
