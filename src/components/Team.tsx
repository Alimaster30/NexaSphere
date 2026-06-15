import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { teamMembers, socialIconMap } from '../data/team'

const ease = [0.16, 1, 0.3, 1] as const

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0]
  index: number
}) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="group border border-border bg-bg-elevated hover:border-accent/30 transition-colors duration-200 flex flex-col sm:flex-row"
    >
      <div
        className={`w-full sm:w-32 h-32 sm:h-auto bg-gradient-to-br ${member.gradient} flex items-center justify-center shrink-0`}
        role="img"
        aria-label={`${member.name} avatar`}
      >
        <span className="text-white/90 text-2xl font-bold font-display">{initials}</span>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[16px] font-bold text-text uppercase tracking-tight">
              {member.name}
            </h3>
            <div className="w-1.5 h-1.5 bg-accent shrink-0" />
          </div>
          <p className="text-accent text-[11px] font-mono uppercase tracking-[0.15em] mb-3">
            {member.role}
          </p>
          <p className="text-text-dim text-[13px] leading-relaxed">
            {member.bio}
          </p>
        </div>

        <div className="flex gap-2 mt-4">
          {member.socials.map((social) => {
            const Icon = socialIconMap[social.platform]
            return Icon ? (
              <a
                key={social.platform}
                href={social.url}
                className="w-8 h-8 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-150"
                aria-label={`${member.name} on ${social.platform}`}
              >
                <Icon size={13} aria-hidden="true" />
              </a>
            ) : null
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <span className="text-[11px] font-mono text-accent uppercase tracking-[0.2em] block mb-3">
            Team
          </span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-text uppercase tracking-tight leading-[0.9]">
            The People<br />Behind It
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
