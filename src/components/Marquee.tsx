import { motion } from 'framer-motion'

const items = [
  'Web Development',
  'AI Automation',
  'Cloud Solutions',
  'UI/UX Design',
  'Data Dashboards',
  'System Integration',
  'Web Development',
  'AI Automation',
  'Cloud Solutions',
  'UI/UX Design',
  'Data Dashboards',
  'System Integration',
]

export default function Marquee() {
  return (
    <div className="border-y border-border bg-bg overflow-hidden py-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex whitespace-nowrap animate-marquee"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-accent/40 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
