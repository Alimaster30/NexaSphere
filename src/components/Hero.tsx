import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const Scene3D = lazy(() => import('./Scene3D'))

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16 pt-24">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 bg-accent animate-pulse-dot" />
          <span className="text-text-muted text-[11px] font-mono uppercase tracking-[0.2em]">
            Digital Studio — Multan, PK
          </span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase"
          >
            <span className="block text-text">Build</span>
            <span className="block text-text">Smarter</span>
            <span className="block text-accent">Digital</span>
            <span className="block text-text">Experiences</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            className="absolute bottom-4 right-0 lg:right-10 hidden sm:block"
          >
            <div className="w-px h-20 bg-border-strong mb-4" />
            <p className="text-text-muted text-[11px] font-mono uppercase tracking-[0.1em] max-w-[200px] leading-relaxed">
              Scalable platforms, AI tools, cloud solutions
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease }}
          className="flex items-center gap-6 mt-12"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-bold text-[13px] uppercase tracking-[0.08em] hover:bg-accent/90 transition-colors duration-150"
          >
            Explore Work
            <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-150" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border-strong text-text text-[13px] font-bold uppercase tracking-[0.08em] hover:border-accent hover:text-accent transition-colors duration-150"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-6 lg:left-10"
      >
        <div className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em]">
          {new Date().getFullYear()} — NexaSphere Digital
        </div>
      </motion.div>
    </section>
  )
}
