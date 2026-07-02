// Shared motion tokens — Apple-like easing & timing curves.

// Apple's signature easing (used across macOS / iOS transitions).
export const easeApple = [0.22, 1, 0.36, 1]
export const easeOutExpo = [0.16, 1, 0.3, 1]
export const easeInOutSoft = [0.65, 0, 0.35, 1]

// Fade + rise on enter (the workhorse reveal).
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeApple },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: easeApple } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
}

// Stagger container for lists / grids.
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// Word-by-word heading reveal.
export const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

export const wordChild = {
  hidden: { opacity: 0, y: '0.6em', filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeApple },
  },
}
