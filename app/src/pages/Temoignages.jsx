import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Counter from '../components/ui/Counter'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const figures = [
  { to: 98, suffix: '%', label: 'Taux de rétention', gold: true },
  { to: 50, suffix: '+', label: 'Clients Stratégiques' },
  { to: 120, suffix: '+', label: 'Projets Livrés' },
  { value: '10/10', label: 'Satisfaction Client', gold: true },
]

const videos = [
  { img: 'img_ed47a3a6a9f2.png', name: 'Etraelec', role: 'Modernisation des infrastructures' },
  { img: 'img_c0909564ffe4.png', name: 'Neho Fret', role: 'Optimisation logistique' },
  { img: 'img_c6675d3e652a.png', name: 'Qitch', role: 'Scale-up et Stratégie Tech' },
]

const testimonials = [
  { stars: 5, text: "L'approche de DFB a radicalement transformé notre vision du digital. Ce ne sont pas juste des consultants, ce sont des partenaires stratégiques qui comprennent les enjeux métier.", name: 'Jean-Marc T.', role: 'CEO @ InnovaCorp', img: 'img_5457eccf94e8.png' },
  { stars: 5, text: "Leur expertise technique couplée à une vision business pointue nous a permis de gagner 30% en efficacité opérationnelle en moins de 6 mois.", name: 'Sophie L.', role: 'CTO @ GreenEnergy', img: 'img_5dd10e3c736f.png' },
  { stars: 4.5, text: "Un accompagnement sur-mesure exceptionnel. DFB a su s'adapter à nos contraintes spécifiques tout en nous poussant vers l'excellence.", name: 'Marc-André P.', role: 'Founder @ BluePeak', img: 'img_301bd5caa2e0.png' },
  { stars: 5, text: "L'implémentation a été fluide et les résultats sont au rendez-vous. La clarté de leur communication est un atout majeur pour nos équipes.", name: 'Clara B.', role: 'COO @ NexaSolutions', img: 'img_275c2b3269bc.png' },
]

function Stars({ n }) {
  return (
    <div className="mb-4 flex text-golden-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name={i + 1 <= n ? 'star' : i + 0.5 === n ? 'star_half' : 'star'} filled={i + 1 <= n} />
      ))}
    </div>
  )
}

export default function Temoignages() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-margin-mobile pt-40 pb-section-gap md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max-width grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps tracking-widest text-secondary">EXCELLENCE OPÉRATIONNELLE</span></Reveal>
            <AnimatedText as="h1" className="mb-8 font-display-lg text-headline-xl-mobile text-deep-navy md:text-display-lg">
              Ils nous font <span className="italic text-primary">confiance</span>.
            </AnimatedText>
            <Reveal delay={0.15}>
              <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                DFB accompagne les leaders de demain dans leur transformation digitale. Découvrez
                comment nous avons aidé nos partenaires à atteindre des sommets d'efficacité et
                d'innovation.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative h-[400px] md:col-span-5 md:h-[500px]">
            <div className="absolute inset-0 -rotate-3 rounded-xl bg-secondary-container opacity-20" />
            <img alt="Équipe assemblant un puzzle, collaboration et confiance" className="absolute inset-0 h-full w-full rotate-1 rounded-xl object-cover shadow-2xl" src="/images/puzzle-equipe.jpg" />
          </Reveal>
        </div>
      </section>

      {/* Key figures */}
      <section className="bg-deep-navy px-margin-mobile py-20 md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max-width grid-cols-2 gap-gutter text-center md:grid-cols-4">
          {figures.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1}>
              <div className={`mb-2 font-display-lg text-headline-xl-mobile md:text-display-lg ${f.gold ? 'text-golden-accent' : 'text-white'}`}>
                {f.value ? f.value : <Counter to={f.to} suffix={f.suffix} />}
              </div>
              <div className="font-label-caps text-label-caps text-arctic-blue">{f.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video testimonials */}
      <section className="px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mx-auto max-w-container-max-width">
          <div className="mb-16">
            <AnimatedText as="h2" text="Témoignages Vidéo" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <Reveal><div className="h-1 w-24 bg-golden-accent" /></Reveal>
          </div>
          <motion.div variants={staggerContainer(0.12)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {videos.map((v) => (
              <motion.div key={v.name} variants={fadeUp} className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-surface-container-highest">
                <img src={`/images/${v.img}`} alt={v.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.3, ease: easeApple }}>
                    <Icon name="play_circle" filled className="text-6xl text-white drop-shadow-lg" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-deep-navy to-transparent p-6">
                  <p className="font-headline-md text-headline-md text-white">{v.name}</p>
                  <p className="font-body-md text-body-md text-arctic-blue">{v.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written testimonials */}
      <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mx-auto max-w-container-max-width">
          <div className="mb-16 flex flex-col items-end justify-between gap-gutter md:flex-row">
            <div>
              <AnimatedText as="h2" text="Paroles de Clients" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
              <div className="h-1 w-24 bg-primary" />
            </div>
            <p className="hidden font-body-md text-body-md italic text-on-surface-variant md:block">
              "La confiance est le ciment de toute réussite durable."
            </p>
          </div>
          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: easeApple, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid rounded-lg border border-outline-variant/30 bg-white p-8 shadow-sm"
              >
                <Stars n={t.stars} />
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-container-highest">
                    <img src={`/images/${t.img}`} alt={t.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-body-md text-body-md font-bold text-deep-navy">{t.name}</p>
                    <p className="font-label-caps text-[10px] text-secondary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#061A2C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto flex max-w-container-max-width flex-col items-center text-center">
          <Reveal>
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container">
              <Icon name="trending_up" className="text-3xl text-secondary" />
            </div>
          </Reveal>
          <AnimatedText as="h2" text="Devenez notre prochain succès" className="mb-6 font-display-lg text-headline-xl-mobile text-deep-navy md:text-display-lg" />
          <Reveal><p className="mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">Prêt à transformer votre entreprise avec une expertise digitale de premier plan ? Rejoignez le cercle des leaders qui ont choisi l'excellence.</p></Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 md:flex-row">
              <Magnetic as={Link} to="/contact" className="inline-block">
                <span className="flex items-center gap-2 bg-deep-navy px-10 py-5 font-body-md text-body-md font-bold text-white transition-all hover:opacity-90">
                  Démarrer un Projet <Icon name="arrow_forward" />
                </span>
              </Magnetic>
              <Magnetic as={Link} to="/services" className="inline-block">
                <span className="block border-2 border-deep-navy px-10 py-5 font-body-md text-body-md font-bold text-deep-navy transition-all hover:bg-surface-container">
                  Consulter nos Services
                </span>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
