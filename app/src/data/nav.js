// Central navigation model — drives both the desktop mega-menu and the
// mobile drawer. Paths are clean routes handled by React Router.

export const navGroups = [
  {
    label: 'Services',
    to: '/services',
    items: [
      { label: 'Nos Services', to: '/services', icon: 'hub' },
      { label: "Développement d'Apps", to: '/dev-applications', icon: 'app_registration' },
      { label: 'Expertise Vidéo', to: '/expertise-video', icon: 'videocam' },
    ],
  },
  {
    label: 'Références',
    to: '/references',
    items: [
      { label: 'Nos Références', to: '/references', icon: 'cases' },
      { label: 'Témoignages', to: '/temoignages', icon: 'format_quote' },
      { label: 'Étude de cas Etraelec', to: '/cas-etraelec', icon: 'bolt' },
    ],
  },
  {
    label: 'À Propos',
    to: '/equipe-davney',
    items: [
      { label: 'Notre Fondateur', to: '/equipe-davney', icon: 'person' },
      { label: 'Nos Partenaires', to: '/partenaires', icon: 'handshake' },
      { label: 'Devenir Partenaire', to: '/devenir-partenaire', icon: 'add_circle' },
    ],
  },
]

export const navLinks = [
  { label: 'Jobs', to: '/jobs' },
  { label: 'Articles', to: '/article' },
  { label: 'Contact', to: '/contact' },
]
