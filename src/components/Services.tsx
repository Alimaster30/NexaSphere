import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/services'

const ease = [0.16, 1, 0.3, 1] as const

const bentoSpans = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={`group border border-border bg-bg-elevated p-8 flex flex-col justify-between hover:border-accent/30 transition-colors duration-200 ${bentoSpans[index]}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-mono text-accent tracking-[0.15em]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 h-px bg-border group-hover:bg-accent/30 transition-colors duration-200" />
        </div>

        <div className="mb-5">
          <service.icon
            size={28}
            strokeWidth={1.5}
            className="text-text group-hover:text-accent transition-colors duration-200"
            aria-hidden="true"
          />
        </div>

        <h3 className="text-[22px] font-bold text-text uppercase tracking-tight leading-[1] mb-3">
          {service.title}
        </h3>
      </div>

      <p className="text-text-dim text-[14px] leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-[11px] font-mono text-accent uppercase tracking-[0.2em] block mb-3">
              Services
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-text uppercase tracking-tight leading-[0.9]">
              What We<br />Build
            </h2>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
