import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const finalites = [
  { icon: 'contact_support', title: 'Gestion des demandes', text: 'Traitement et réponse aux messages envoyés via nos formulaires de contact pour assurer un suivi personnalisé de vos projets.' },
  { icon: 'mail', title: 'Communications', text: "Envoi de newsletters ou d'offres commerciales exclusives, uniquement si vous avez explicitement donné votre consentement." },
  { icon: 'insights', title: 'Optimisation', text: "Analyse anonymisée des comportements de navigation pour améliorer continuellement l'expérience utilisateur sur notre plateforme." },
]

const droits = ["Droit d'accès", 'Droit de rectification', "Droit d'effacement", 'Droit de portabilité']

export default function ProtectionDonnees() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-container-low/50 pt-40 pb-section-gap">
        <div className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-deep-navy">Transparence & Sécurité</span></Reveal>
            <AnimatedText as="h1" text="Politique de Protection des Données" className="mb-6 font-display-lg text-headline-xl-mobile text-deep-navy md:text-display-lg" />
            <Reveal delay={0.15}>
              <p className="font-body-lg text-body-lg leading-relaxed text-slate-gray">
                Chez DFB, la confidentialité de vos informations est au cœur de notre expertise
                stratégique. Nous nous engageons à traiter vos données avec une rigueur absolue et une
                transparence totale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content bento */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="border-l-4 border-deep-navy bg-white p-10 md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <Icon name="security" className="scale-125 text-deep-navy" />
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">1. Collecte des données</h2>
            </div>
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              DFB s'engage à ce que la collecte et le traitement de vos données, effectués à partir du
              site <strong className="text-deep-navy">dfb.digital</strong>, soient conformes au règlement
              général sur la protection des données (RGPD). Chaque service limite la collecte des données
              personnelles au strict nécessaire (minimisation des données).
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-between bg-primary-container p-10 text-white md:col-span-4">
            <div>
              <h3 className="mb-4 font-headline-md text-headline-md text-primary-fixed">Besoin d'aide ?</h3>
              <p className="mb-8 font-body-md text-body-md opacity-80">Pour toute question relative à vos données personnelles, notre DPO est à votre disposition.</p>
            </div>
            <a className="group flex items-center gap-2 font-semibold transition-all hover:gap-4" href="mailto:contact@dfb.digital">
              contact@dfb.digital <Icon name="arrow_forward" />
            </a>
          </Reveal>

          <div className="mt-4 md:col-span-12">
            <h2 className="mb-8 flex items-center gap-4 font-headline-lg text-headline-lg text-deep-navy">
              <Icon name="task_alt" className="text-deep-navy" /> 2. Finalités du traitement
            </h2>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {finalites.map((f) => (
                <motion.div key={f.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className="border border-outline-variant/30 bg-white p-8">
                  <Icon name={f.icon} className="mb-4 text-deep-navy" />
                  <h4 className="mb-3 font-headline-md text-headline-md text-deep-navy">{f.title}</h4>
                  <p className="text-on-surface-variant">{f.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Reveal className="mt-4 border border-deep-navy/10 bg-surface-container-low p-10 md:col-span-12">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="md:w-1/3">
                <h2 className="mb-4 font-headline-lg text-headline-lg text-deep-navy">3. Vos droits</h2>
                <div className="h-1 w-24 bg-golden-accent" />
              </div>
              <div className="md:w-2/3">
                <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  Conformément à la réglementation européenne, vous disposez d'un contrôle total sur vos
                  informations personnelles. Vous pouvez exercer vos droits de manière simple et gratuite.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {droits.map((d) => (
                    <div key={d} className="flex items-center gap-3 border-l-2 border-deep-navy bg-white/50 p-4">
                      <Icon name="check_circle" className="text-sm text-deep-navy" filled />
                      <span className="font-semibold text-deep-navy">{d}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col items-start justify-between gap-4 bg-deep-navy p-6 text-white sm:flex-row sm:items-center">
                  <p className="font-body-md">Pour exercer ces droits :</p>
                  <a className="border-b-2 border-golden-accent font-bold transition-colors hover:text-golden-accent" href="mailto:contact@dfb.digital">contact@dfb.digital</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closure */}
      <section className="mx-auto mb-section-gap max-w-container-max-width px-margin-mobile md:px-margin-desktop">
        <div className="relative h-96 overflow-hidden">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/img_363e43f3cf63.png')" }} />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-deep-navy/80 to-transparent px-8 md:px-20">
            <div className="max-w-md">
              <h3 className="mb-4 font-headline-lg text-headline-lg text-white">L'excellence au service de votre sécurité.</h3>
              <p className="font-body-md text-white/70">Nous appliquons les mêmes standards de rigueur à la protection de vos données qu'à nos stratégies de croissance digitale.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
