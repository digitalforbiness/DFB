import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SocialIcon from './ui/SocialIcon'
import Reveal from './ui/Reveal'
import { SOCIALS } from '../data/site'
import { easeApple } from '../lib/motion'

const columns = [
  {
    title: 'Liens',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Insights', to: '/article' },
      { label: 'Careers', to: '/jobs' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Privacy Policy', to: '/protection-donnees' },
      { label: 'Terms of Service', to: '/cgu' },
      { label: 'Mentions Légales', to: '/mentions-legales' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-black px-margin-mobile py-20 md:px-margin-desktop">
      <div className="mx-auto max-w-container-max-width">
        <div className="mb-20 flex flex-col justify-between gap-gutter md:flex-row">
          <Reveal className="max-w-xs" direction="up">
            <motion.img
              src="/images/dfb-logo.png"
              alt="DFB — Digital For Business"
              className="mb-8 h-20 w-20 rounded-full"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.4, ease: easeApple }}
            />
            <p className="font-body-md text-surface-variant/50">
              Digital For Business (DFB) • Strategic digital mastery for modern enterprises.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
            {columns.map((col) => (
              <Reveal key={col.title} direction="up" delay={0.1}>
                <h6 className="mb-6 font-bold text-white">{col.title}</h6>
                <ul className="space-y-3 text-surface-variant/60">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center transition-colors hover:text-golden-accent"
                      >
                        <span className="mr-0 h-px w-0 bg-golden-accent transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal direction="up" delay={0.2}>
              <h6 className="mb-6 font-bold text-white">Suivez-nous</h6>
              <div className="flex gap-4">
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: easeApple }}
                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition-all hover:border-golden-accent hover:bg-golden-accent hover:text-deep-navy"
                  >
                    <SocialIcon name={s.name} className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-surface-variant/40">
            © {new Date().getFullYear()} Digital For Business (DFB). All rights reserved. Strategic
            digital mastery.
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-surface-variant/20">
            #dfb #design #web #development #digitalpr #ai #ux #strategy
          </div>
        </div>
      </div>
    </footer>
  )
}
