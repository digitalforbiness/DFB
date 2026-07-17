import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './ui/Icon'
import HCaptcha from './ui/HCaptcha'
import { easeApple } from '../lib/motion'
import { submitContact } from '../lib/submitForm'

const inputClass =
  'w-full bg-deep-navy border-0 border-b border-white/20 focus:border-golden-accent focus:ring-0 text-white p-4 placeholder:text-surface-variant/40 transition-colors outline-none'

/**
 * Home-page contact form. Submits to contact@dfb.digital via Web3Forms
 * (see src/lib/submitForm.js), with loading / error / success states.
 */
export default function ContactForm() {
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
        subject: `Contact site DFB — ${data.get('Nom') || ''}`.trim(),
        captchaToken,
        Nom: data.get('Nom'),
        Email: data.get('Email'),
        Objet: data.get('Objet'),
        Message: data.get('Message'),
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
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: easeApple }}
            className="flex h-full min-h-[360px] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 14 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-golden-accent"
            >
              <Icon name="check" className="text-3xl text-deep-navy" filled />
            </motion.div>
            <h4 className="mb-2 font-headline-md text-headline-md text-white">Message envoyé !</h4>
            <p className="max-w-sm text-surface-variant/70">
              Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 text-sm font-bold text-golden-accent hover:text-white"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input className={inputClass} name="Nom" placeholder="Votre nom" type="text" required />
              <input className={inputClass} name="Email" placeholder="Email" type="email" required />
            </div>
            <input className={inputClass} name="Objet" placeholder="Objet" type="text" />
            <textarea className={inputClass} name="Message" placeholder="Votre message" rows="4" required />
            <div className="flex items-center gap-2 py-2">
              <input
                className="rounded border-white/20 bg-deep-navy text-golden-accent focus:ring-golden-accent"
                id="terms"
                type="checkbox"
                required
              />
              <label className="text-sm text-surface-variant/60" htmlFor="terms">
                Accepter les termes et conditions
              </label>
            </div>
            <HCaptcha theme="dark" onVerify={setCaptchaToken} onExpire={() => setCaptchaToken('')} />
            {status === 'error' && (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
            <motion.button
              whileHover={sending ? undefined : { scale: 1.02 }}
              whileTap={sending ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeApple }}
              type="submit"
              disabled={sending || !captchaToken}
              className="flex w-full items-center justify-center gap-2 rounded bg-golden-accent py-4 font-bold text-deep-navy transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? 'Envoi en cours…' : 'Envoyer le message'}
              {!sending && <Icon name="send" />}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
