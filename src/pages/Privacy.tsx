import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  const goHome = () => {
    window.history.pushState({}, '', '/')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-bg text-text-dim">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-20">
        <button
          onClick={goHome}
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-150 mb-10"
        >
          <ArrowLeft size={14} />
          <span className="text-[12px] font-mono uppercase tracking-[0.1em]">Back to Home</span>
        </button>

        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-text uppercase tracking-tight leading-[0.9] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-text-dim text-[14px] leading-relaxed">
          <p className="text-text-muted text-[11px] font-mono uppercase tracking-[0.1em]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, 
              subscribe to our newsletter, or communicate with us. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide customer support, 
              send administrative information, and improve our services. We will not sell or rent your 
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can choose to disable cookies 
              through your browser settings, though some features of our site may not function properly 
              as a result.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:alit169533@gmail.com" className="text-accent hover:underline">
                alit169533@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
