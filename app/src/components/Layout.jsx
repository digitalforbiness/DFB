import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ui/ScrollProgress'
import ErrorBoundary from './ErrorBoundary'
import { easeApple } from '../lib/motion'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-deep-navy">
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        {/*
          Keyed remount plays the enter animation on every route change.
          We intentionally avoid AnimatePresence "wait" mode here: a stuck
          exit animation would prevent the next page from mounting (blank
          screen until refresh). A plain keyed motion.div has no exit
          dependency, so navigation is always reliable.
        */}
        <ErrorBoundary key={location.pathname}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeApple }}
          >
            <Outlet />
          </motion.div>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
