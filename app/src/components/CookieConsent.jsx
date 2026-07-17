import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { easeApple } from '../lib/motion'

const STORAGE_KEY = 'dfb-cookie-consent'

/**
 * RGPD cookie-consent banner. Shows once until the visitor accepts or declines;
 * the choice is remembered in localStorage. No third-party trackers are loaded
 * here — this is the consent surface the site's analytics can hook into later.
 */
export default function CookieConsent() {
  // 'pending' while reading storage (avoids a flash before we know the choice).
  const [choice, setChoice] = useState('pending')

  useEffect(() => {
    try {
      setChoice(localStorage.getItem(STORAGE_KEY) || 'ask')
    } catch {
      setChoice('ask')
    }
  }, [])

  function decide(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* storage unavailable (private mode) — the banner just won't persist */
    }
    setChoice(value)
  }

  return (
    <AnimatePresence>
      {choice === 'ask' && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
          role="dialog"
          aria-live="polite"
          aria-label="Consentement aux cookies"
          className="fixed inset-x-0 bottom-0 z-[60] px-margin-mobile pb-4 md:px-margin-desktop"
        >
          <div className="mx-auto flex max-w-container-max-width flex-col gap-6 border border-white/10 bg-ink-black/95 p-6 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between md:p-8">
            <p className="max-w-2xl font-body-md text-body-md text-surface-variant/80">
              Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
              Vous pouvez accepter ou refuser leur utilisation.{' '}
              <Link
                to="/protection-donnees"
                className="text-golden-accent underline underline-offset-2 transition-colors hover:text-white"
              >
                En savoir plus
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => decide('declined')}
                className="border border-white/20 px-6 py-3 font-label-caps text-label-caps uppercase text-white transition-colors hover:border-white/50"
              >
                Refuser
              </button>
              <button
                onClick={() => decide('accepted')}
                className="bg-golden-accent px-6 py-3 font-label-caps text-label-caps uppercase text-deep-navy transition-colors hover:bg-white"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
