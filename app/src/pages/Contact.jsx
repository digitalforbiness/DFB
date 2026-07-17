import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Icon from '../components/ui/Icon'
import SocialIcon from '../components/ui/SocialIcon'
import HCaptcha from '../components/ui/HCaptcha'
import { easeApple } from '../lib/motion'
import { submitContact } from '../lib/submitForm'
import { CONTACT, SOCIALS, SERVICES } from '../data/site'

const fieldClass =
  'w-full border-0 border-b border-outline-variant bg-transparent py-3 font-body-md text-body-md text-deep-navy outline-none transition-all focus:border-deep-navy focus:ring-0'
const labelClass = 'font-label-caps text-label-caps uppercase text-on-surface-variant'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!captchaToken) {
      setError('Veuillez valider le captcha avant d’envoyer.')
      setStatus('error')
      return
    }
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    setError('')
    try {
      await submitContact({
        subject: `Contact site DFB — ${data.get('Nom complet') || ''}`.trim(),
        captchaToken,
        'Nom complet': data.get('Nom complet'),
        'Email professionnel': data.get('Email professionnel'),
        Entreprise: data.get('Entreprise'),
        'Service souhaité': data.get('Service souhaité'),
        'Votre projet': data.get('Votre projet'),
      })
      form.reset()
      setCaptchaToken('')
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setCaptchaToken('')
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <div className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="mx-auto mb-section-gap max-w-container-max-width px-margin-mobile pt-40 md:px-margin-desktop">
        <div className="flex flex-col justify-between gap-gutter md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-secondary">Contactez l'Expertise</span></Reveal>
            <AnimatedText as="h1" className="font-display-lg text-headline-xl-mobile leading-tight text-deep-navy md:text-display-lg">
              Donnons vie à vos ambitions digitales.
            </AnimatedText>
          </div>
          <Reveal delay={0.2} className="hidden pb-4 lg:block">
            <p className="max-w-sm font-body-lg text-body-lg text-on-surface-variant">
              Une approche sur mesure pour transformer votre infrastructure et accélérer votre
              croissance stratégique.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section className="mx-auto mb-section-gap max-w-container-max-width px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          {/* Info column */}
          <Reveal className="flex flex-col gap-12 lg:col-span-4">
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-headline-md text-headline-md text-deep-navy">Siège Social</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {CONTACT.address.line1}<br />{CONTACT.address.line2}
                </p>
              </div>
              <div>
                <h3 className="mb-6 font-headline-md text-headline-md text-deep-navy">Canaux Directs</h3>
                <div className="space-y-4">
                  <a className="flex items-center gap-3 font-body-md text-body-md text-on-surface transition-colors hover:text-secondary" href={`mailto:${CONTACT.email}`}>
                    <Icon name="mail" className="text-secondary" /> {CONTACT.email}
                  </a>
                  <a className="flex items-center gap-3 font-body-md text-body-md text-on-surface transition-colors hover:text-secondary" href={CONTACT.phoneHref}>
                    <Icon name="call" className="text-secondary" /> {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-6 font-headline-md text-headline-md text-deep-navy">Suivez-nous</h3>
                <div className="flex gap-4">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-12 w-12 items-center justify-center bg-surface-container-low text-deep-navy transition-all hover:bg-deep-navy hover:text-white"
                    >
                      <SocialIcon name={s.name} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-auto space-y-6 bg-primary-container p-8">
              {[
                { icon: 'verified_user', title: 'CONFIDENTIALITÉ', text: 'Garantie stricte de vos données stratégiques.' },
                { icon: 'bolt', title: 'RÉACTIVITÉ', text: 'Premier retour stratégique sous 24h ouvrées.' },
              ].map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <Icon name={p.icon} className="text-golden-accent" />
                  <div>
                    <p className="mb-1 font-label-caps text-label-caps text-white">{p.title}</p>
                    <p className="text-sm text-surface-variant">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 shadow-sm md:p-12">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }} className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-deep-navy">
                      <Icon name="check" className="text-3xl text-golden-accent" filled />
                    </motion.div>
                    <h3 className="mb-2 font-headline-md text-headline-md text-deep-navy">Message envoyé avec succès</h3>
                    <p className="max-w-sm text-on-surface-variant">Nos experts reviendront vers vous sous 24h ouvrées.</p>
                    <button onClick={() => setStatus('idle')} className="mt-8 font-label-caps text-label-caps uppercase text-deep-navy hover:text-secondary">
                      Nouveau message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClass}>Nom Complet</label>
                        <input className={fieldClass} name="Nom complet" placeholder="Jean Dupont" required type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Email Professionnel</label>
                        <input className={fieldClass} name="Email professionnel" placeholder="jean@entreprise.com" required type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClass}>Entreprise</label>
                        <input className={fieldClass} name="Entreprise" placeholder="Structure S.A." type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Service Souhaité</label>
                        <select className={`${fieldClass} appearance-none`} name="Service souhaité" defaultValue={SERVICES[0]}>
                          {SERVICES.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClass}>Votre Projet</label>
                      <textarea className={`${fieldClass} resize-none`} name="Votre projet" placeholder="Décrivez brièvement vos enjeux..." required rows="5" />
                    </div>
                    <HCaptcha theme="light" onVerify={setCaptchaToken} onExpire={() => setCaptchaToken('')} />
                    {status === 'error' && (
                      <p className="text-sm text-red-500" role="alert">{error}</p>
                    )}
                    <div className="flex flex-col justify-between gap-6 pt-4 md:flex-row md:items-center">
                      <p className="max-w-md text-xs italic text-on-surface-variant">
                        En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                        Vos données sont traitées exclusivement pour répondre à votre demande.
                      </p>
                      <motion.button whileTap={sending ? undefined : { scale: 0.97 }} type="submit" disabled={sending || !captchaToken} className="group flex items-center justify-center gap-4 bg-deep-navy px-10 py-5 font-label-caps text-label-caps text-white transition-all hover:gap-6 disabled:cursor-not-allowed disabled:opacity-60">
                        {sending ? 'ENVOI EN COURS…' : 'ENVOYER LE MESSAGE'}
                        {!sending && <Icon name="arrow_forward" />}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="group relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-navy/80 via-transparent to-deep-navy/30" />
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-sm border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md">
            <h4 className="mb-2 font-headline-md text-headline-md text-white">Visitez nos bureaux</h4>
            <p className="mb-6 font-body-md text-body-md text-arctic-blue">Au cœur du quartier Haussmann, Paris 8ème.</p>
            <a className="pointer-events-auto inline-block border border-white px-6 py-2 font-label-caps text-label-caps text-white transition-all hover:bg-white hover:text-deep-navy" href="https://maps.google.com/?q=61+Boulevard+Haussmann+75008+Paris" target="_blank" rel="noreferrer">
              VOIR SUR MAPS
            </a>
          </div>
        </div>
        <div className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/img_be77281daf65.png')" }} />
      </section>
    </div>
  )
}
