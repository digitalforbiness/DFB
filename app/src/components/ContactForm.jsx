import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './ui/Icon'
import { easeApple } from '../lib/motion'

const inputClass =
  'w-full bg-deep-navy border-0 border-b border-white/20 focus:border-golden-accent focus:ring-0 text-white p-4 placeholder:text-surface-variant/40 transition-colors outline-none'

/**
 * Client-only contact form — this is a static showcase site (no backend),
 * so submission simply validates and shows a confirmation state.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
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
              onClick={() => setSent(false)}
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
              <input className={inputClass} placeholder="Votre nom" type="text" required />
              <input className={inputClass} placeholder="Email" type="email" required />
            </div>
            <input className={inputClass} placeholder="Objet" type="text" />
            <textarea className={inputClass} placeholder="Votre message" rows="4" required />
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
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeApple }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-golden-accent py-4 font-bold text-deep-navy transition-colors hover:bg-white"
            >
              Envoyer le message
              <Icon name="send" />
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
