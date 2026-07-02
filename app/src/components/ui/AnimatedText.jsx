import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { wordContainer, wordChild } from '../../lib/motion'

// Resolve a motion-enabled element: use the prebuilt motion.<tag> for
// string tags, and motion.create() for component tags (avoids the
// deprecated motion() factory). Memoized so it isn't recreated per render.
function useMotionTag(Tag) {
  return useMemo(() => (typeof Tag === 'string' ? motion[Tag] : motion.create(Tag)), [Tag])
}

/**
 * Word-by-word heading reveal with a subtle blur-in — the kind of
 * cinematic title animation used on Apple product pages.
 *
 * Pass plain text via `text`, or rich content via children (children
 * animates as a single block).
 */
export default function AnimatedText({
  text,
  as: Tag = 'h2',
  className = '',
  once = true,
  amount = 0.4,
  children,
}) {
  const MotionTag = useMotionTag(Tag)

  if (children) {
    return (
      <MotionTag
        className={className}
        variants={wordContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
      >
        <motion.span variants={wordChild} className="inline-block">
          {children}
        </motion.span>
      </MotionTag>
    )
  }

  const words = String(text).split(' ')

  return (
    <MotionTag
      className={className}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={wordChild} className="inline-block">
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
