import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from '../ui/AnimatedText'
import { fadeUp } from '../../lib/motion'

/**
 * Reusable hero for interior pages: parallax background image, animated
 * eyebrow + title, optional subtitle. Keeps every page visually cohesive.
 */
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {image && (
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/70 via-deep-navy/85 to-deep-navy" />
        </motion.div>
      )}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-container-max-width px-margin-mobile text-center md:px-margin-desktop"
      >
        {eyebrow && (
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 block font-label-caps text-label-caps uppercase tracking-widest text-golden-accent"
          >
            {eyebrow}
          </motion.span>
        )}
        <AnimatedText
          as="h1"
          text={title}
          className="mx-auto max-w-4xl font-display-lg text-headline-xl-mobile leading-tight text-white md:text-display-lg"
        />
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl font-body-lg text-body-lg text-surface-variant"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </motion.div>
    </section>
  )
}
