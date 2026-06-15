import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline, stats } from '../data/timeline'

const ease = [0.16, 1, 0.3, 1] as const

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 1800
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="border-l-2 border-accent pl-5">
      <div className="text-[48px] sm:text-[56px] font-bold text-text leading-none tracking-tight">
        {count}<span className="text-accent">+</span>
      </div>
      <div className="text-text-muted text-[11px] font-mono uppercase tracking-[0.15em] mt-2">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Story + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] font-mono text-accent uppercase tracking-[0.2em] block mb-3">
              About
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-text uppercase tracking-tight leading-[0.9] mb-8">
              Our<br />Journey
            </h2>
            <p className="text-text-dim text-[15px] leading-relaxed max-w-lg mb-12">
              Born from a passion for technology, NexaSphere Digital has evolved
              from a small digital studio into a full-service technology partner
              for businesses across Pakistan and beyond.
            </p>

            <div className="space-y-0">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  className="flex items-start gap-6 border-b border-border py-6 group"
                >
                  <span className="text-[40px] sm:text-[52px] font-bold text-border group-hover:text-accent/30 leading-none tracking-tight transition-colors duration-300 w-[100px] shrink-0">
                    {event.year}
                  </span>
                  <div className="pt-2">
                    <h4 className="text-[15px] font-bold text-text uppercase tracking-tight mb-1">
                      {event.title}
                    </h4>
                    <p className="text-text-dim text-[13px] leading-relaxed max-w-md">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            <div className="border border-border bg-bg-elevated p-8 lg:p-10 sticky top-24">
              <div className="text-[11px] font-mono text-text-muted uppercase tracking-[0.2em] mb-8">
                By the Numbers
              </div>

              <div className="space-y-8">
                {stats.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.numericValue}
                    label={stat.label}
                  />
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-text-muted text-[13px] leading-relaxed">
                  Our team combines expertise in design, development, AI, and
                  cloud infrastructure to deliver end-to-end digital solutions
                  that drive measurable business outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
