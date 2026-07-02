import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const benefits = [
  { icon: 'hub', title: 'Accès Réseau', text: 'Connectez-vous à nos clients institutionnels et partenaires de premier plan dans le monde de la tech executive.' },
  { icon: 'auto_awesome', title: 'Expertise Partagée', text: "Bénéficiez de sessions de co-working stratégiques et d'un accès privilégié à nos laboratoires de R&D." },
  { icon: 'campaign', title: 'Co-Marketing', text: 'Amplifiez votre visibilité grâce à des webinaires conjoints, des case studies et des campagnes médiatiques ciblées.' },
]

const process = [
  { n: '1', title: 'Dépôt du dossier', text: 'Soumettez votre proposition via le formulaire ci-contre.', active: true },
  { n: '2', title: 'Revue Stratégique', text: "Analyse de l'adéquation technique et commerciale par nos experts." },
  { n: '3', title: 'Finalisation', text: "Signature de l'accord-cadre et onboarding opérationnel." },
]

const fieldClass =
  'w-full border-b-2 border-outline-variant bg-transparent px-4 py-3 font-body-md text-deep-navy outline-none transition-colors placeholder:text-on-surface-variant/40 focus:border-deep-navy'
const labelClass = 'font-label-caps text-label-caps text-deep-navy/60'

export default function DevenirPartenaire() {
  const [sent, setSent] = useState(false)

  return (
    <div className="overflow-hidden bg-background text-on-background">
      {/* Hero (dark) */}
      <section className="relative overflow-hidden bg-deep-navy pt-40 pb-section-gap">
        <div className="relative mx-auto grid max-w-container-max-width grid-cols-1 items-center gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
          <div className="space-y-8 md:col-span-8 lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-golden-accent/30 bg-golden-accent/10 px-3 py-1">
                <span className="font-label-caps text-label-caps uppercase text-golden-accent">Partenariats Stratégiques</span>
              </div>
            </Reveal>
            <AnimatedText as="h1" className="font-headline-xl text-headline-xl-mobile leading-tight text-white md:text-headline-xl">
              Initier une Collaboration Stratégique
            </AnimatedText>
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body-lg text-body-lg text-arctic-blue">
                Nous croyons en la puissance des synergies pour redéfinir les standards
                technologiques. Rejoignez notre écosystème pour bâtir ensemble le futur de
                l'ingénierie numérique.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="#application-form" className="group inline-flex items-center gap-2 rounded bg-golden-accent px-8 py-4 font-bold text-deep-navy transition-all hover:brightness-110">
                Postuler Maintenant
                <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-full w-1/3 opacity-20">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/img_43108761a4fb.png')" }} />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <AnimatedText as="h2" text="Pourquoi s'associer à DFB ?" className="mb-4 font-headline-lg text-headline-lg text-deep-navy" />
            <Reveal><p className="font-body-md text-body-md text-on-surface-variant">Intégrez un réseau d'experts et accélérez votre croissance grâce à nos ressources partagées et notre vision d'excellence.</p></Reveal>
          </div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp} whileHover={{ y: -8 }} transition={{ duration: 0.4, ease: easeApple }} className="group rounded-xl border border-outline-variant/10 bg-white p-8 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-deep-navy transition-colors group-hover:bg-golden-accent">
                  <Icon name={b.icon} className="text-3xl text-white transition-colors group-hover:text-deep-navy" />
                </div>
                <h3 className="mb-4 font-headline-md text-headline-md text-deep-navy">{b.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section id="application-form" className="relative py-section-gap">
        <div className="mx-auto grid max-w-container-max-width grid-cols-1 gap-20 px-margin-mobile md:px-margin-desktop lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div className="space-y-4">
              <AnimatedText as="h2" text="Processus d'Adhésion" className="font-headline-lg text-headline-lg text-deep-navy" />
              <Reveal><p className="font-body-md text-body-md text-on-surface-variant">Chaque candidature est examinée par notre comité exécutif sous 7 jours ouvrés. Nous recherchons des partenaires alignés sur nos valeurs d'intégrité et de performance.</p></Reveal>
            </div>
            <div className="space-y-6">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.1} className="flex gap-4">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 font-bold text-deep-navy ${p.active ? 'border-golden-accent' : 'border-outline-variant'}`}>{p.n}</div>
                  <div>
                    <h4 className="font-semibold text-deep-navy">{p.title}</h4>
                    <p className="text-sm text-on-surface-variant">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="rounded-xl bg-deep-navy p-8 text-white">
              <p className="mb-4 font-body-md italic text-arctic-blue">"Notre partenariat avec DFB a transformé notre approche du déploiement IA, ouvrant des portes vers des marchés que nous n'aurions jamais pu atteindre seuls."</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-gray">
                  <img className="h-full w-full object-cover" src="/images/img_a2b453f20d40.png" alt="Elena Valance" />
                </div>
                <div>
                  <p className="text-sm font-bold">Elena Valance</p>
                  <p className="text-xs text-arctic-blue/70">CEO, Nexus Solutions</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white bg-white/70 p-10 shadow-2xl backdrop-blur-md">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }} className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-deep-navy">
                      <Icon name="handshake" className="text-3xl text-golden-accent" filled />
                    </motion.div>
                    <h3 className="mb-2 font-headline-md text-headline-md text-deep-navy">Candidature reçue !</h3>
                    <p className="max-w-sm text-on-surface-variant">Notre comité exécutif reviendra vers vous sous 7 jours ouvrés.</p>
                    <button onClick={() => setSent(false)} className="mt-8 font-label-caps text-label-caps uppercase text-deep-navy hover:text-secondary">Nouvelle candidature</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClass}>Nom de l'Entreprise</label>
                        <input className={fieldClass} placeholder="SARL Tech Solutions" type="text" required />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Site Web</label>
                        <input className={fieldClass} placeholder="https://www.exemple.com" type="url" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClass}>Personne de Contact</label>
                        <input className={fieldClass} placeholder="Jean Dupont" type="text" required />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Email Professionnel</label>
                        <input className={fieldClass} placeholder="contact@entreprise.com" type="email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClass}>Type de Partenariat</label>
                      <select className={fieldClass}>
                        <option value="technology">Partenariat Technologique</option>
                        <option value="financial">Partenariat Financier / Investissement</option>
                        <option value="marketing">Partenariat Marketing / Co-branding</option>
                        <option value="reseller">Distributeur / Revendeur</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClass}>Votre Proposition</label>
                      <textarea className={`${fieldClass} resize-none`} placeholder="Décrivez votre vision pour cette collaboration..." rows="5" />
                    </div>
                    <div className="pt-6">
                      <motion.button whileTap={{ scale: 0.98 }} type="submit" className="group flex w-full items-center justify-center gap-3 rounded bg-deep-navy py-4 font-headline-md text-headline-md text-white transition-all hover:bg-black">
                        Soumettre la Candidature
                        <Icon name="send" className="text-golden-accent transition-transform group-hover:translate-x-2" />
                      </motion.button>
                      <p className="mt-4 text-center text-xs text-on-surface-variant">En soumettant ce formulaire, vous acceptez notre politique de confidentialité et de gestion des données partenaires.</p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="overflow-hidden py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-deep-navy p-1 shadow-2xl md:p-4">
            <div className="absolute inset-0 opacity-40 mix-blend-screen grayscale">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/img_1e8b7bf7c892.png')" }} />
            </div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 p-10 text-center">
              <AnimatedText as="h2" text="Présence Mondiale" className="font-headline-lg text-headline-lg text-white" />
              <Reveal><p className="max-w-lg font-body-md text-arctic-blue">Rejoignez un réseau de partenaires présents sur 4 continents, unissant leurs forces pour l'excellence numérique.</p></Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
