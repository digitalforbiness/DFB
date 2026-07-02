import { motion } from 'framer-motion'
import { easeApple } from '../../lib/motion'

/**
 * Scroll-triggered reveal. Fades + rises into view once, Apple-style.
 *
 * Props:
 *  - as: element/component to render (default motion.div)
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'none'
 *  - delay, duration, distance
 */
export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 32,
  once = true,
  amount = 0.25,
  ...rest
}) {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: easeApple, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
