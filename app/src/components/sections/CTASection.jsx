import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import Magnetic from '../ui/MagneticButton'
import Icon from '../ui/Icon'

/** Shared "let's talk" call-to-action band, reused on most interior pages. */
export default function CTASection({
  title = 'Discutons de votre prochain projet',
  text = "Petite ou moyenne, chaque entreprise a droit au digital comme levier de développement. Parlons-en.",
  watermark = 'CONTACT',
}) {
  return (
    <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="relative mx-auto max-w-container-max-width overflow-hidden bg-primary-container p-12 md:p-24">
        <div className="relative z-10 max-w-2xl">
          <Reveal>
            <h2 className="mb-6 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-10 text-surface-variant/70">{text}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="group flex items-center justify-center gap-2 bg-golden-accent px-8 py-4 font-bold text-deep-navy transition-colors hover:bg-white">
                  Nous contacter
                  <Icon
                    name="trending_flat"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Magnetic>
              <Magnetic as={Link} to="/services" className="inline-block">
                <span className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 font-bold text-white transition-colors hover:border-golden-accent hover:text-golden-accent">
                  Nos services
                </span>
              </Magnetic>
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute -bottom-10 -right-6 select-none font-display-lg text-[160px] leading-none text-white/5 md:text-[200px]">
          {watermark}
        </div>
      </div>
    </section>
  )
}
