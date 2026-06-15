import { ArrowLeft } from 'lucide-react'

export default function Terms() {
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
          Terms of Service
        </h1>

        <div className="space-y-6 text-text-dim text-[14px] leading-relaxed">
          <p className="text-text-muted text-[11px] font-mono uppercase tracking-[0.1em]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using the NexaSphere Digital website and services, you accept and agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please do 
              not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Services</h2>
            <p>
              NexaSphere Digital provides web development, AI automation, cloud solutions, UI/UX design, 
              and data dashboard services. We reserve the right to modify, suspend, or discontinue 
              any part of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on this website are owned by or 
              licensed to NexaSphere Digital. You may not reproduce, distribute, or create derivative 
              works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Limitation of Liability</h2>
            <p>
              NexaSphere Digital shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services. We provide services "as is" 
              without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-text uppercase tracking-tight mb-3">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
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
