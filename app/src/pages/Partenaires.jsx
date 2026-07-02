import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

// Renders a partner's real logo; if the image is missing/fails, falls back
// to the Material icon so the card never shows a broken image.
function PartnerLogo({ logo, icon, name }) {
  const [failed, setFailed] = useState(false)
  if (logo && !failed) {
    return (
      <img
        className="max-h-11 w-auto max-w-[160px] object-contain"
        src={`/images/${logo}`}
        alt={name}
        onError={() => setFailed(true)}
      />
    )
  }
  return <Icon name={icon || 'hub'} className="text-4xl text-deep-navy" />
}

const financial = [
  { logo: 'logo-caisse-epargne.png', name: "Caisse d'Épargne Île-de-France", text: "Une collaboration étroite pour sécuriser et accélérer les projets d'investissement digital de nos clients. Nous facilitons les transitions technologiques majeures grâce à des solutions financières adaptées au secteur IT.", tags: ['Conseil financier', 'Audit stratégique'] },
  { logo: 'logo-bpifrance.jpeg', name: 'Bpifrance', text: "Accompagnement stratégique dans le cadre de la transformation numérique des PME et ETI françaises. Un gage de sérieux et d'expertise reconnu par l'État.", tags: ['Partenaire référence'] },
]

const tech = [
  { logo: 'logo-google-cloud.svg', name: 'Google Cloud', text: "Partenariat axé sur le Cloud, le Data-Mining et l'Intelligence Artificielle. DFB intègre les solutions Google pour optimiser les performances infrastructurelles.", label: 'Google Cloud Partner', endIcon: 'cloud_done' },
  { logo: 'logo-adlook.png', name: 'Adlook', text: 'Solutions publicitaires innovantes basées sur le Deep Learning. Notre partenariat permet de déployer des campagnes ultra-ciblées sans cookies tiers.', label: 'Adtech Expert', endIcon: 'analytics' },
  { logo: 'logo-aws.png', name: 'Amazon (AWS)', text: "Leader mondial du cloud et de l'infrastructure e-commerce, offrant une scalabilité sans précédent.", label: 'Global Scale', endIcon: 'public' },
  { logo: 'logo-saleslydr.png', name: 'SalesLydr', text: 'Solution CRM intelligente pour optimiser votre tunnel de vente et la gestion de la relation client.', label: 'CRM', endIcon: 'link' },
  { logo: 'logo-a7.png', name: 'A7 Emailing', text: 'Expert en activation de données et campagnes emailing haute performance pour maximiser votre engagement.', label: 'Data & Email Marketing', endIcon: 'database' },
  { logo: 'logo-scaleway.svg', icon: 'cloud_queue', name: 'Scaleway', text: "Infrastructure cloud performante mettant l'accent sur la souveraineté européenne et la protection des données.", label: 'European Cloud', endIcon: 'security' },
]

function SectionTitle({ children, dark }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <AnimatedText as="h2" text={children} className={`font-headline-lg text-headline-lg ${dark ? 'text-white' : 'text-deep-navy'}`} />
      <div className={`h-px flex-grow ${dark ? 'bg-on-primary-container/20' : 'bg-outline-variant/30'}`} />
    </div>
  )
}

export default function Partenaires() {
  return (
    <div className="overflow-hidden bg-background text-on-background">
      {/* Hero */}
      <section className="relative mb-section-gap px-margin-mobile pt-40 md:px-margin-desktop">
        <div className="max-w-4xl">
          <Reveal><span className="mb-4 block font-label-caps text-label-caps text-on-primary-container">NOTRE RÉSEAU</span></Reveal>
          <AnimatedText as="h1" text="Un Écosystème d'Excellence" className="mb-6 font-display-lg text-headline-xl-mobile tracking-tight text-deep-navy md:text-display-lg" />
          <Reveal delay={0.15}>
            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-slate-gray">
              Chez DFB, nous croyons que l'innovation naît de la collaboration. Nos partenariats
              stratégiques, technologiques et institutionnels renforcent notre expertise digitale
              pour offrir des solutions de classe mondiale à nos clients.
            </p>
          </Reveal>
        </div>
        <div className="absolute -right-20 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-surface-container-high opacity-50 blur-3xl" />
      </section>

      {/* Institutional */}
      <section className="mb-section-gap px-margin-mobile md:px-margin-desktop">
        <SectionTitle>Partenaires Institutionnels & Labels</SectionTitle>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-start border-l-4 border-arctic-blue bg-white p-10">
              <div className="mb-8 flex h-20 w-48 items-center justify-start grayscale transition-all duration-500 hover:grayscale-0">
                <img className="h-full object-contain" src="/images/img_e0b06fd16b47.png" alt="Les entreprises s'engagent" />
              </div>
              <span className="mb-4 bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-on-surface-variant">LABEL ENGAGEMENT</span>
              <h3 className="mb-3 font-headline-md text-headline-md text-deep-navy">Les entreprises s'engagent</h3>
              <p className="mb-6 font-body-md text-body-md text-slate-gray">
                Une communauté d'entreprises œuvrant pour une croissance inclusive. Notre engagement
                au service de l'emploi et de l'impact social positif.
              </p>
              <div className="group flex cursor-pointer items-center gap-2 font-bold text-deep-navy transition-all hover:gap-4">
                <span className="font-body-md">Notre charte</span>
                <Icon name="trending_flat" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Financial (dark) */}
      <section className="relative mb-section-gap overflow-hidden bg-primary-container px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="relative z-10">
          <SectionTitle dark>Partenaires Financiers & Stratégiques</SectionTitle>
          <div className="max-w-3xl space-y-gutter">
            {financial.map((f) => (
              <Reveal key={f.name}>
                <div className="group border border-on-primary-container/20 bg-deep-navy p-12">
                  <div className="flex flex-col items-center gap-12 md:flex-row">
                    <div className="w-full md:w-1/3">
                      <div className="flex h-28 w-full items-center justify-center rounded-xl bg-white p-6 transition-transform duration-500 group-hover:scale-105">
                        <img className="max-h-16 w-auto max-w-[180px] object-contain" src={`/images/${f.logo}`} alt={f.name} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="mb-6 font-body-md text-body-md leading-relaxed text-surface-variant">{f.text}</p>
                      <div className="flex flex-wrap gap-3">
                        {f.tags.map((t) => (
                          <span key={t} className="border border-on-primary-container px-3 py-1 font-label-caps text-label-caps uppercase text-on-primary-container">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
          <Icon name="account_balance" className="text-[400px] text-white" />
        </div>
      </section>

      {/* Tech */}
      <section className="mb-section-gap px-margin-mobile md:px-margin-desktop">
        <SectionTitle>Partenaires Technologiques & Solutions</SectionTitle>
        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {tech.map((t) => (
            <motion.div key={t.name} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className="flex h-full flex-col bg-white p-10 shadow-sm">
              <div className="mb-8 flex h-12 items-center">
                <PartnerLogo logo={t.logo} icon={t.icon} name={t.name} />
              </div>
              <div className="flex-grow">
                <p className="mb-6 font-body-md text-body-md text-slate-gray">{t.text}</p>
              </div>
              <div className="flex items-center justify-between border-t border-surface-container-high pt-6">
                <span className="font-label-caps text-label-caps uppercase text-deep-navy">{t.label}</span>
                <Icon name={t.endIcon || t.icon} className="text-deep-navy" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile pb-section-gap md:px-margin-desktop">
        <div className="relative overflow-hidden bg-deep-navy p-16 text-center md:p-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <AnimatedText as="h2" text="Devenez partenaire de notre succès" className="mb-6 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
            <Reveal><p className="mb-10 font-body-lg text-body-lg text-surface-variant opacity-80">Vous proposez une solution technologique de pointe ou un service stratégique complémentaire ? Explorons ensemble de nouvelles opportunités de croissance.</p></Reveal>
            <Reveal delay={0.1}>
              <Magnetic as={Link} to="/devenir-partenaire" className="inline-block">
                <span className="mx-auto flex items-center gap-3 bg-golden-accent px-10 py-4 font-body-md text-body-md font-bold text-deep-navy transition-all hover:bg-white">
                  Initier une collaboration <Icon name="handshake" />
                </span>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
