import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const expertises = [
  { icon: 'business_center', title: 'Corporate Movies', text: "Valorisez votre culture d'entreprise et vos valeurs à travers des récits institutionnels premium." },
  { icon: 'animation', title: 'Motion Design', text: 'Simplifiez vos concepts complexes grâce à une animation graphique fluide et didactique.' },
  { icon: 'phonelink_ring', title: 'Social Snippets', text: "Captez l'attention instantanément sur LinkedIn, Instagram et TikTok avec des formats courts." },
  { icon: 'campaign', title: 'Digital Ads', text: 'Optimisez vos campagnes publicitaires avec des spots haute performance orientés ROI.' },
]

const process = [
  { n: '01', title: 'Strategy & Script', text: "Analyse de vos objectifs, définition de l'audience et écriture d'un script percutant qui sert votre message stratégique." },
  { n: '02', title: 'Filming & Production', text: 'Tournage haute définition avec équipement de pointe. Direction artistique rigoureuse pour une esthétique premium.' },
  { n: '03', title: 'Post-production', text: 'Montage, étalonnage, sound design et déclinaison des formats pour une diffusion multi-canal optimisée.' },
]

export default function ExpertiseVideo() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero (dark) */}
      <section className="relative flex items-center overflow-hidden bg-deep-navy pt-24" style={{ height: '80vh' }}>
        <div className="absolute inset-0 opacity-60">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/video-studio.png')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-deep-navy/30" />
        <div className="relative z-10 mx-auto w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <Reveal><span className="mb-4 block font-label-caps text-label-caps text-golden-accent">EXCELLENCE VISUELLE</span></Reveal>
          <AnimatedText as="h1" className="mb-8 max-w-3xl font-display-lg text-headline-xl-mobile leading-tight text-white md:text-display-lg">
            La Vidéo au Service de votre Stratégie
          </AnimatedText>
          <Reveal delay={0.15}>
            <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-surface-variant">
              Propulsez votre identité de marque avec des contenus cinématographiques conçus pour
              l'impact, la conversion et le leadership digital.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Magnetic as={Link} to="/contact" className="inline-block">
              <span className="flex items-center gap-2 bg-white px-10 py-4 font-bold text-deep-navy transition-all hover:bg-golden-accent">
                Voir le Showreel <Icon name="play_circle" />
              </span>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Expertises */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-20 grid grid-cols-1 items-end gap-gutter md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-secondary">Savoir-Faire</span></Reveal>
            <AnimatedText as="h2" text="Nos Expertises Vidéo" className="font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
          </div>
          <div className="md:col-span-6">
            <Reveal delay={0.1}>
              <p className="border-l-2 border-arctic-blue pl-6 font-body-md italic text-on-surface-variant">
                De la narration d'entreprise aux formats sociaux dynamiques, nous maîtrisons
                l'ensemble du spectre visuel pour servir vos objectifs B2B.
              </p>
            </Reveal>
          </div>
        </div>
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-gutter md:grid-cols-4">
          {expertises.map((e) => (
            <motion.div key={e.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className="group border border-outline-variant bg-surface-container p-8 transition-all duration-500 hover:border-deep-navy">
              <Icon name={e.icon} className="mb-6 text-4xl text-deep-navy" />
              <h3 className="mb-4 font-headline-md text-headline-md text-deep-navy">{e.title}</h3>
              <p className="text-on-surface-variant">{e.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-20">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/video-services-code.jpg"
              alt="Nos créations : site web, application mobile, identité graphique, spot publicitaire, montage et vidéo"
              className="h-auto w-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* Process (dark) */}
      <section className="bg-primary-container py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps text-arctic-blue">MÉTHODOLOGIE</span></Reveal>
            <AnimatedText as="h2" text="Processus de Création" className="font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.12} className="relative">
                <div className="absolute -left-4 -top-20 text-[120px] font-bold text-white opacity-5">{p.n}</div>
                <div className="relative z-10 pt-10">
                  <h4 className="mb-4 font-headline-md text-headline-md text-golden-accent">{p.title}</h4>
                  <p className="leading-relaxed text-on-primary-container">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <AnimatedText as="h2" text="Showreel 2024" className="font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
          <div className="flex gap-4">
            {['4K ULTRA HD', 'PRO RES'].map((t) => (
              <span key={t} className="border border-outline-variant bg-surface-container px-4 py-2 font-label-caps text-label-caps text-deep-navy">{t}</span>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="group relative aspect-video cursor-pointer overflow-hidden bg-deep-navy">
            <div className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/camera-valeurs.png')" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div whileHover={{ scale: 1.1 }} className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition-colors group-hover:bg-golden-accent">
                <Icon name="play_arrow" className="text-5xl text-deep-navy" filled />
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-deep-navy to-transparent p-8">
              <p className="font-headline-md text-white">Digital Mastering: The 2024 Experience</p>
              <p className="text-surface-variant opacity-70">Duration: 02:45</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto mb-section-gap max-w-container-max-width px-margin-mobile md:px-margin-desktop">
        <div className="relative flex flex-col items-center overflow-hidden bg-deep-navy p-12 text-center md:p-24">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-golden-accent opacity-10" />
          <AnimatedText as="h2" text="Prêt à passer à l'image ?" className="relative z-10 mb-8 font-headline-xl text-headline-xl-mobile text-white md:text-headline-xl" />
          <Reveal><p className="relative z-10 mb-12 max-w-xl text-body-lg text-surface-variant">Discutons de votre prochain projet vidéo et comment il peut s'intégrer dans votre stratégie de croissance globale.</p></Reveal>
          <Reveal delay={0.1}>
            <Magnetic as={Link} to="/contact" className="relative z-10 inline-block">
              <span className="flex items-center gap-4 bg-golden-accent px-12 py-5 font-bold text-deep-navy transition-all hover:bg-white">
                Contactez-nous <Icon name="trending_flat" />
              </span>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
