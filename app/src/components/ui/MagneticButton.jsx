import { useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Magnetic hover: the element gently follows the cursor, then springs
 * back — a signature "premium" micro-interaction. Renders as a Link,
 * anchor, or button depending on props.
 */
export default function Magnetic({
  children,
  className = '',
  strength = 0.35,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })

  const rotateX = useTransform(springY, [-40, 40], [6, -6])
  const rotateY = useTransform(springX, [-40, 40], [-6, 6])

  const MotionTag = useMemo(() => (typeof Tag === 'string' ? motion[Tag] : motion.create(Tag)), [Tag])

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
