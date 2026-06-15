import { ArrowUp, Phone, Mail, MapPin, Globe, MessageCircle, GitBranch, Camera, User } from 'lucide-react'
import {
  quickLinks,
  serviceLinks,
  legalLinks,
  contactInfo,
  socialLinks,
} from '../data/footer'

const socialIconMap: Record<string, typeof Globe> = {
  LinkedIn: Globe,
  Twitter: MessageCircle,
  GitHub: GitBranch,
  Instagram: Camera,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    window.location.reload()
  }

  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-bg font-bold text-[11px] font-mono">NS</span>
              </div>
              <span className="text-text font-bold text-[15px] uppercase tracking-tight">
                NexaSphere
              </span>
            </div>
            <p className="text-text-muted text-[13px] leading-relaxed max-w-xs mb-6">
              Building scalable digital platforms, AI-powered tools, and
              cloud-ready solutions for modern businesses.
            </p>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-text-dim text-[13px] mb-2">
                <User size={12} className="text-text-muted shrink-0" aria-hidden="true" />
                <span className="text-text">{contactInfo.name}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.platform]
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-8 h-8 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-150"
                    aria-label={social.label}
                  >
                    <Icon size={13} aria-hidden="true" />
                  </a>
                ) : null
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} className="text-text-dim text-[13px] hover:text-accent transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} className="text-text-dim text-[13px] hover:text-accent transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-border">
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.url)}
                      className="text-text-dim text-[13px] hover:text-accent transition-colors duration-150 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-text-dim text-[13px] hover:text-accent transition-colors duration-150">
                <Phone size={12} className="text-text-muted shrink-0" aria-hidden="true" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-text-dim text-[13px] hover:text-accent transition-colors duration-150">
                <Mail size={12} className="text-text-muted shrink-0" aria-hidden="true" />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-2 text-text-dim text-[13px]">
                <MapPin size={12} className="text-text-muted shrink-0" aria-hidden="true" />
                {contactInfo.address}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-[11px] font-mono uppercase tracking-[0.1em]">
            &copy; {currentYear} NexaSphere Digital
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-150"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
