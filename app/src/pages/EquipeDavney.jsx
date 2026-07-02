import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import AnimatedText from '../components/ui/AnimatedText'
import Magnetic from '../components/ui/MagneticButton'
import Icon from '../components/ui/Icon'
import { fadeUp, staggerContainer, easeApple } from '../lib/motion'

const journey = [
  { tag: 'FORMER POSITION', title: 'Chief Digital Officer', company: 'DHL Express', text: 'Led large-scale digital transformation initiatives, optimizing international logistics through cutting-edge technology integration and operational efficiency.' },
  { tag: 'LEADERSHIP', title: 'Director of Digital', company: 'Accor Hotels', text: "Defined digital guest experiences and loyalty strategies for one of the world's leading hospitality groups, bridging the gap between luxury and technology." },
  { tag: 'RETAIL STRATEGY', title: 'Head of E-commerce', company: 'Toys“R”Us', text: 'Pioneered omni-channel retail solutions, driving significant revenue growth through streamlined customer journeys and advanced digital marketing.' },
]

const visionPoints = ['Scalable Business Architecture', 'AI-Enhanced Customer Journeys', 'Data-Driven Growth Engines']

const contactItems = [
  { icon: 'mail', label: 'EMAIL', value: 'contact@dfb.digital', href: 'mailto:contact@dfb.digital' },
  { icon: 'call', label: 'DIRECT LINE', value: '+33 6 95 98 71 07', href: 'tel:+33695987107' },
  { icon: 'location_on', label: 'OFFICE', value: 'Paris & Dubai' },
]

export default function EquipeDavney() {
  return (
    <div className="bg-background text-on-background">
      {/* Hero */}
      <section className="mx-auto max-w-container-max-width px-margin-mobile pt-40 pb-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-12 items-center gap-gutter">
          <div className="col-span-12 md:col-span-7">
            <Reveal><span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-secondary">Digital Growth Operator</span></Reveal>
            <AnimatedText as="h1" text="Davney Bavoueza" className="mb-6 font-display-lg text-headline-xl-mobile text-deep-navy md:text-display-lg" />
            <Reveal delay={0.15}>
              <p className="mb-8 max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                Founder & CEO at DFB. Specialized in designing and scaling high-performance digital
                ecosystems through strategic e-commerce, AI automation, and data-driven growth.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic as={Link} to="/contact" className="inline-block">
                  <span className="group flex items-center gap-2 rounded-lg bg-deep-navy px-8 py-4 font-body-md text-on-primary">
                    Partner for Growth
                    <Icon name="arrow_forward" className="text-arctic-blue transition-transform group-hover:translate-x-1" />
                  </span>
                </Magnetic>
                <div className="flex items-center gap-6 px-4">
                  <span className="font-label-caps text-sm text-on-surface-variant">PROVEN LEADERSHIP AT:</span>
                  <div className="flex gap-4 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                    {['DHL', 'ACCOR', 'TOYS"R"US'].map((c) => (
                      <span key={c} className="font-bold text-deep-navy">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative col-span-12 md:col-span-5">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
              <img className="h-full w-full object-cover" src="/images/img_bdfb71a2689d.jpg" alt="Davney Bavoueza, Founder & CEO de DFB" />
            </div>
            <div className="absolute -bottom-8 -left-8 -z-0 h-48 w-48 rounded-full bg-golden-accent/10 blur-3xl" />
            <div className="absolute -right-8 -top-8 -z-0 h-64 w-64 rounded-full bg-arctic-blue/20 blur-3xl" />
          </Reveal>
        </div>
      </section>

      {/* Executive journey */}
      <section className="overflow-hidden bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <AnimatedText as="h2" text="Executive Journey" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
            <div className="h-1 w-20 bg-deep-navy" />
          </div>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {journey.map((j) => (
              <motion.div key={j.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: easeApple }} className="border border-outline-variant/10 bg-white p-8 transition-all duration-300 hover:shadow-lg">
                <span className="mb-6 block font-label-caps text-label-caps text-secondary">{j.tag}</span>
                <h3 className="mb-2 font-headline-md text-headline-md text-deep-navy">{j.title}</h3>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">{j.company}</p>
                <p className="text-sm leading-relaxed text-slate-gray">{j.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic vision */}
      <section className="py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 items-center gap-16">
            {/* Left column intentionally empty (editorial layout, per maquette) */}
            <div className="hidden md:col-span-6 md:block" aria-hidden="true" />
            <div className="col-span-12 md:col-span-6">
              <AnimatedText as="h2" text="Strategic Vision" className="mb-8 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
              <Reveal delay={0.1}>
                <p className="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  My mission is to design and scale digital ecosystems that aren't just modern, but
                  intelligent. At DFB, we leverage the power of AI, automation, and deep data analysis
                  to build businesses that grow autonomously.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mb-10 font-body-md text-body-md text-slate-gray">
                  Transformation is more than just implementing new tools; it's about redefining the
                  customer journey to be frictionless and high-impact. From scalable e-commerce to
                  AI-enhanced CRM systems, every solution is engineered for measurable ROI.
                </p>
              </Reveal>
              <div className="space-y-4">
                {visionPoints.map((p, i) => (
                  <Reveal key={p} delay={0.2 + i * 0.08} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-arctic-blue/20">
                      <Icon name="check_circle" filled className="text-deep-navy" />
                    </div>
                    <span className="font-headline-md text-lg text-deep-navy">{p}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Impact (dark bento) */}
      <section className="bg-deep-navy py-section-gap text-white">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center">
            <AnimatedText as="h2" text="Expertise & Impact" className="mb-4 font-display-lg text-headline-xl-mobile md:text-headline-xl" />
            <Reveal><p className="mx-auto max-w-2xl font-body-lg text-arctic-blue">Bridging strategic advisory with world-class technical implementation.</p></Reveal>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12 md:grid-rows-2">
            <Reveal className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10 md:col-span-7">
              <div>
                <Icon name="smart_toy" className="mb-6 text-4xl text-golden-accent" />
                <h3 className="mb-4 font-headline-md text-headline-md">AI & Automation</h3>
                <p className="leading-relaxed text-arctic-blue/80">Implementing intelligent CRM systems and generative AI solutions that automate customer service, sales funnels, and operational workflows.</p>
              </div>
              <div className="mt-8 flex gap-2">
                {['LLM Integration', 'Workflow Design'].map((t) => (
                  <span key={t} className="rounded bg-white/10 px-3 py-1 font-label-caps text-xs">{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-br from-secondary to-deep-navy p-10 md:col-span-5 md:row-span-2">
              <div>
                <Icon name="shopping_bag" className="mb-6 text-4xl text-arctic-blue" />
                <h3 className="mb-4 font-headline-md text-headline-md">E-commerce Strategy</h3>
                <p className="leading-relaxed text-white/80">Designing high-converting digital storefronts focused on conversion rate optimization (CRO) and LTV maximization for global brands.</p>
              </div>
              <div className="mt-8">
                <div className="rounded-lg border border-white/5 bg-white/5 p-6">
                  <div className="mb-1 text-2xl font-bold text-golden-accent">+140%</div>
                  <div className="font-label-caps text-xs opacity-60">Avg. Revenue Growth for Clients</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="rounded-xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10 md:col-span-4">
              <Icon name="trending_up" className="mb-6 text-4xl text-arctic-blue" />
              <h3 className="mb-4 font-headline-md text-headline-md">Growth Marketing</h3>
              <p className="text-sm text-arctic-blue/80">Full-funnel acquisition strategies combining SEO, performance ads, and content ecosystems.</p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10 md:col-span-3">
              <Icon name="code" className="mb-6 text-4xl text-arctic-blue" />
              <h3 className="mb-4 font-headline-md text-headline-md">Web & Product</h3>
              <p className="text-sm text-arctic-blue/80">Custom product development for scalable web applications and SaaS platforms.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="bg-surface py-section-gap">
        <div className="mx-auto max-w-container-max-width px-margin-mobile md:px-margin-desktop">
          <Reveal className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16">
                <AnimatedText as="h2" text="Ready to scale?" className="mb-4 font-headline-xl text-headline-xl-mobile text-deep-navy md:text-headline-xl" />
                <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">Let's discuss how we can integrate AI and advanced digital operations into your business model.</p>
                <div className="space-y-8">
                  {contactItems.map((c) => (
                    <div key={c.label} className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container">
                        <Icon name={c.icon} className="text-deep-navy" />
                      </div>
                      <div>
                        <div className="font-label-caps text-xs text-secondary">{c.label}</div>
                        {c.href ? (
                          <a className="text-headline-md text-deep-navy transition-colors hover:text-secondary" href={c.href}>{c.value}</a>
                        ) : (
                          <p className="text-headline-md text-deep-navy">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:block">
                <img className="h-full w-full object-cover" src="/images/img_ebffc00cda90.png" alt="Bureau DFB" />
                <div className="absolute inset-0 bg-deep-navy/20" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
