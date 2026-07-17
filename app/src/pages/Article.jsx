import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import { submitContact } from '../lib/submitForm'
import { easeApple } from '../lib/motion'

const categories = [
  { label: 'Stratégie Digitale', count: '12' },
  { label: "Culture d'Entreprise", count: '08' },
  { label: 'Management & RH', count: '15' },
  { label: 'Innovation Techno', count: '06' },
]

const recent = [
  { img: 'img_4d3247b83212.png', title: 'Optimiser sa présence digitale en 2024', date: '05 Fév. 2024' },
  { img: 'img_9a890eaa2b7c.png', title: "L'IA au service de l'expertise humaine", date: '28 Jan. 2024' },
]

export default function Article() {
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  async function handleSubscribe(e) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    setError('')
    try {
      await submitContact({
        subject: 'Inscription newsletter — dfb.digital',
        Type: 'Inscription newsletter',
        Email: email,
      })
      setSubscribed(true)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="bg-surface text-on-surface">
      <div className="mx-auto max-w-container-max-width px-margin-mobile pt-40 pb-section-gap md:px-margin-desktop">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Reveal>
            <span className="mb-6 inline-block bg-arctic-blue/20 px-3 py-1 font-label-caps text-label-caps text-deep-navy">
              CARRIÈRE & STRATÉGIE
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mb-6 font-display-lg text-headline-xl-mobile leading-tight text-deep-navy md:text-display-lg">
              Choisis un travail que tu aimes, et tu n'auras pas à travailler un seul jour.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 font-body-md text-on-surface-variant">
              <span className="flex items-center gap-1"><Icon name="calendar_today" className="text-[18px]" /> 14 Mars 2024</span>
              <span className="h-1 w-1 rounded-full bg-outline-variant" />
              <span className="flex items-center gap-1"><Icon name="schedule" className="text-[18px]" /> 6 min de lecture</span>
              <span className="h-1 w-1 rounded-full bg-outline-variant" />
              <span className="font-semibold text-deep-navy">Par Marc Dupont</span>
            </div>
          </Reveal>
        </div>

        {/* Featured image */}
        <Reveal className="mb-16 h-[500px] w-full overflow-hidden">
          <motion.img
            src="/images/img_437004c46414.png"
            alt="Bureau minimaliste et stratégie de marque"
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeApple }}
          />
        </Reveal>

        <div className="relative grid grid-cols-1 gap-gutter lg:grid-cols-12">
          {/* Body */}
          <article className="space-y-8 lg:col-span-8">
            <Reveal>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-deep-navy">
                La quête du sens au travail est devenue le pilier central de la stratégie de marque
                employeur moderne. Dans un monde numérique en perpétuelle mutation, l'alignement entre
                les aspirations personnelles et les objectifs professionnels n'est plus un luxe, mais
                une nécessité impérative pour l'excellence opérationnelle.
              </p>
            </Reveal>
            <Reveal><h2 className="pt-4 font-headline-lg text-headline-lg text-deep-navy">L'Adéquation entre Passion et Performance</h2></Reveal>
            <Reveal>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                Lorsqu'un collaborateur est passionné par son domaine, sa productivité ne se mesure
                plus en heures facturées, mais en valeur stratégique apportée. Cette vision, portée par
                notre agence DFB, souligne l'importance de l'identité de marque dès le processus de
                recrutement.
              </p>
            </Reveal>
            <Reveal className="py-8">
              <div className="border-l-4 border-deep-navy bg-surface-container p-8 font-body-lg italic text-on-primary-fixed-variant">
                "Le travail va occuper une grande partie de votre vie, et la seule façon d'être
                pleinement satisfait est de faire ce que vous croyez être un excellent travail."
              </div>
            </Reveal>
            <Reveal>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                Il est essentiel de comprendre que la "passion" ne signifie pas l'absence de défis. Au
                contraire, c'est ce qui donne la résilience nécessaire pour transformer les obstacles
                techniques en opportunités d'innovation digitale.
              </p>
            </Reveal>
            <div className="my-12 grid grid-cols-1 gap-gutter md:grid-cols-2">
              <Reveal className="aspect-square overflow-hidden bg-surface-container">
                <img className="h-full w-full object-cover" src="/images/img_1d614ba79734.png" alt="Professionnelle connectée" />
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col justify-center space-y-4 bg-surface-container-low p-6">
                <h3 className="font-headline-md text-headline-md text-deep-navy">Connectivité Humaine</h3>
                <p className="text-on-surface-variant">L'aspect digital n'est qu'un outil au service de l'interaction humaine. Dans nos articles, nous explorons comment la technologie renforce ces liens.</p>
                <Link className="flex items-center gap-2 font-bold text-deep-navy transition-all hover:gap-3" to="/article">
                  Lire la suite <Icon name="arrow_forward" />
                </Link>
              </Reveal>
            </div>
            <Reveal>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                En conclusion, cultiver un environnement où le talent s'épanouit librement permet non
                seulement de retenir les meilleurs éléments, mais aussi de créer une résonance de
                marque qui attire naturellement vos futurs clients et partenaires.
              </p>
            </Reveal>
            <div className="mt-16 flex items-center gap-6 border-t border-surface-variant py-10">
              <span className="font-label-caps text-label-caps text-on-surface-variant">PARTAGER :</span>
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-navy text-white transition-transform hover:scale-110"><Icon name="share" className="text-[20px]" /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-deep-navy transition-colors hover:bg-arctic-blue"><Icon name="link" className="text-[20px]" /></a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="mb-8 bg-surface-container-low p-8">
                <h4 className="mb-6 font-label-caps text-label-caps text-deep-navy">RECHERCHE</h4>
                <div className="relative">
                  <input className="w-full border-b border-deep-navy bg-white px-0 py-3 text-body-md outline-none focus:ring-0" placeholder="Rechercher un article..." type="text" />
                  <Icon name="search" className="absolute right-0 top-3 text-on-surface-variant" />
                </div>
              </div>
              <div className="mb-8 border border-surface-variant bg-surface-bright p-8">
                <h4 className="mb-6 font-label-caps text-label-caps text-deep-navy">CATÉGORIES</h4>
                <ul className="space-y-4">
                  {categories.map((c) => (
                    <li key={c.label}>
                      <Link className="flex items-center justify-between text-on-surface-variant transition-colors hover:text-deep-navy" to="/article">
                        <span>{c.label}</span>
                        <span className="rounded bg-surface-container px-2 py-0.5 text-[10px]">{c.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-label-caps text-label-caps text-deep-navy">ARTICLES RÉCENTS</h4>
                {recent.map((r) => (
                  <div key={r.title} className="group flex cursor-pointer gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-surface-container">
                      <img className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" src={`/images/${r.img}`} alt={r.title} />
                    </div>
                    <div>
                      <h5 className="mb-1 text-body-md font-semibold leading-tight text-deep-navy">{r.title}</h5>
                      <span className="text-[12px] text-on-surface-variant">{r.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Newsletter */}
        <section className="relative mt-section-gap overflow-hidden bg-deep-navy p-margin-mobile text-white md:p-margin-desktop">
          <div className="absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-20 transform bg-golden-accent/10" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-6 font-headline-xl text-headline-xl-mobile md:text-headline-xl">Restez à l'avant-garde du digital.</h2>
            <p className="mb-10 font-body-lg text-body-lg text-on-primary-container">
              Inscrivez-vous à notre newsletter stratégique pour recevoir nos dernières analyses
              directement dans votre boîte mail. Pas de spam, uniquement de la valeur.
            </p>
            {subscribed ? (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 font-bold text-golden-accent">
                <Icon name="check_circle" filled /> Merci ! Votre inscription est confirmée.
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4 md:flex-row">
                <input name="email" className="flex-grow border border-white/20 bg-white/10 px-6 py-4 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-golden-accent" placeholder="votre@email.com" type="email" required />
                <button className="bg-golden-accent px-8 py-4 font-bold uppercase tracking-widest text-deep-navy transition-colors hover:bg-white" type="submit">S'ABONNER</button>
              </form>
            )}
            {error && !subscribed && (
              <p className="mt-4 text-sm text-red-400" role="alert">{error}</p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
