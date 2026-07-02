import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { easeApple } from '../lib/motion'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-navy px-margin-mobile">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-arctic-blue/30 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeApple }}
          className="font-display-lg text-[120px] leading-none text-white md:text-[200px]"
        >
          4<span className="text-golden-accent">0</span>4
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeApple, delay: 0.2 }}
          className="mb-10 font-body-lg text-body-lg text-arctic-blue"
        >
          Cette page n'existe pas — mais votre prochaine stratégie digitale, elle, est bien réelle.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeApple, delay: 0.35 }}
        >
          <Magnetic as={Link} to="/" className="inline-block">
            <span className="group flex items-center gap-2 bg-golden-accent px-10 py-4 font-bold text-deep-navy transition-colors hover:bg-white">
              Retour à l'accueil
              <Icon name="trending_flat" className="transition-transform group-hover:translate-x-1" />
            </span>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  )
}
