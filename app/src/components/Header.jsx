import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navGroups, navLinks } from '../data/nav'
import Icon from './ui/Icon'
import { easeApple } from '../lib/motion'

function ChevronDown({ open }) {
  return (
    <motion.svg
      className="h-3 w-3 opacity-60"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: easeApple }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </motion.svg>
  )
}

function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3">
      <img
        src="/images/logo_header.png"
        alt="DFB — Digital For Business"
        className="h-9 w-auto"
      />
      <span className="hidden h-6 w-px bg-white/15 md:block" />
      <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 md:block">
        Digital For Business
      </span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeApple }}
      className="fixed top-0 z-50 w-full"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(6,26,44,0.92)' : 'rgba(6,26,44,0.8)',
          borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.4, ease: easeApple }}
        className="border-b"
      >
        <div className="mx-auto flex max-w-container-max-width items-center justify-between px-5 md:px-20">
          <motion.div
            animate={{ paddingTop: scrolled ? 10 : 18, paddingBottom: scrolled ? 10 : 18 }}
            transition={{ duration: 0.4, ease: easeApple }}
            className="flex w-full items-center justify-between"
          >
            <Brand />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex" onMouseLeave={() => setOpenGroup(null)}>
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                >
                  <NavLink
                    to={group.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-golden-accent' : 'text-white/70 hover:text-golden-accent'
                      }`
                    }
                  >
                    {group.label}
                    <ChevronDown open={openGroup === group.label} />
                  </NavLink>

                  <AnimatePresence>
                    {openGroup === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: easeApple }}
                        className="absolute left-0 top-full w-64 overflow-hidden border border-white/10 bg-[#061A2C]/95 shadow-2xl backdrop-blur-xl"
                      >
                        <div className="py-2">
                          {group.items.map((item) => (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              className="group/item flex items-center gap-3 px-5 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-golden-accent"
                            >
                              <Icon
                                name={item.icon}
                                className="text-base text-golden-accent transition-transform group-hover/item:scale-110"
                              />
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-golden-accent' : 'text-white/70 hover:text-golden-accent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="group relative hidden overflow-hidden bg-white px-5 py-2 text-sm font-bold text-[#061A2C] md:inline-block"
              >
                <span className="relative z-10 transition-colors group-hover:text-[#061A2C]">
                  Get in Touch
                </span>
                <span className="absolute inset-0 -translate-x-full bg-golden-accent transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Link>
              <button
                className="p-1 text-white md:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
              >
                <Icon name={mobileOpen ? 'close' : 'menu'} className="text-3xl" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeApple }}
            className="overflow-hidden border-t border-white/10 bg-[#061A2C]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-5 py-4">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-1 mt-3 font-mono text-xs uppercase tracking-widest text-golden-accent">
                    {group.label}
                  </p>
                  {group.items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-2 py-2 text-sm text-white/70 transition-colors hover:text-golden-accent"
                    >
                      <Icon name={item.icon} className="text-base text-golden-accent" />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ))}
              <div className="my-3 h-px bg-white/10" />
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="py-2 text-sm font-medium text-white/70 transition-colors hover:text-golden-accent"
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-4 block bg-golden-accent px-5 py-3 text-center text-sm font-bold text-[#061A2C]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
