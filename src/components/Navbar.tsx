import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/footer'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.slice(1)),
    100
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <motion.nav
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#home" className="flex items-center gap-3 group" aria-label="NexaSphere Digital - Home">
            <div className="w-8 h-8 bg-accent flex items-center justify-center">
              <span className="text-bg font-bold text-[11px] font-mono tracking-tight">NS</span>
            </div>
            <span className="text-text font-bold text-[15px] tracking-tight uppercase">
              NexaSphere
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] transition-colors duration-150 ${
                    isActive ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-bg text-[11px] font-mono font-bold uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors duration-150"
          >
            Let's Talk
          </a>

          <button
            className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-bg border-t border-border"
          >
            <div className="px-6 py-6 space-y-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-[12px] font-mono uppercase tracking-[0.15em] border-b border-border ${
                      isActive ? 'text-accent' : 'text-text-muted hover:text-text'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 bg-accent text-bg text-[12px] font-mono font-bold uppercase tracking-[0.1em] text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
