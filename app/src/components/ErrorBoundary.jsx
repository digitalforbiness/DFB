import { Component } from 'react'

/**
 * Catches render errors in the routed page so a single broken page shows
 * a readable message instead of blanking the whole app. Reset per route
 * by keying this boundary on the pathname in Layout.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Surface in dev so the real cause is visible in the console.
    console.error('Page render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-deep-navy px-6 text-center">
          <h1 className="mb-4 font-headline-xl text-headline-xl-mobile text-white">
            Une erreur est survenue
          </h1>
          <p className="mb-8 max-w-md text-arctic-blue">
            Cette page n'a pas pu s'afficher. Détail technique&nbsp;:
          </p>
          <pre className="max-w-xl overflow-auto rounded-lg border border-white/10 bg-white/5 p-4 text-left text-xs text-white/70">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <a href="/" className="mt-8 bg-golden-accent px-8 py-3 font-bold text-deep-navy">
            Retour à l'accueil
          </a>
        </section>
      )
    }
    return this.props.children
  }
}
