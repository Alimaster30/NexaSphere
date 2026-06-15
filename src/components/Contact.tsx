import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { contactInfo } from '../data/footer'

const ease = [0.16, 1, 0.3, 1] as const

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-mono text-accent uppercase tracking-[0.2em] block mb-3">
              Contact
            </span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-text uppercase tracking-tight leading-[0.9] mb-6">
              Let's<br />Work<br />Together
            </h2>
            <p className="text-text-dim text-[15px] leading-relaxed max-w-sm mb-10">
              Have a project in mind? We'd love to hear from you. Send us a
              message and we'll get back within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: MapPin, label: 'Address', value: contactInfo.address, href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 border border-border group-hover:border-accent/30 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <item.icon size={14} className="text-text-muted group-hover:text-accent transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-text text-[14px] hover:text-accent transition-colors duration-150">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text text-[14px]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55279.47330871294!2d71.475!3d30.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3938e84b6a9b7d33%3A0x4c1a5c5c5c5c5c5c!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'grayscale(1) brightness(0.5) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NexaSphere Digital office location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="border border-border bg-bg-elevated p-12 flex flex-col items-center justify-center min-h-[500px]" aria-live="polite">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-accent" />
                </div>
                <h3 className="text-[22px] font-bold text-text uppercase tracking-tight mb-2">
                  Message Sent
                </h3>
                <p className="text-text-dim text-[14px] mb-8 text-center max-w-xs">
                  Thank you. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-accent text-accent text-[11px] font-mono uppercase tracking-[0.1em] hover:bg-accent hover:text-bg transition-colors duration-150"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border bg-bg-elevated p-8 lg:p-10"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg border ${
                        errors.name ? 'border-red-500' : 'border-border'
                      } text-text text-[14px] placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-150`}
                      placeholder="John Doe"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-required="true"
                      required
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-[11px] font-mono mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-bg border ${
                        errors.email ? 'border-red-500' : 'border-border'
                      } text-text text-[14px] placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-150`}
                      placeholder="john@example.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-required="true"
                      required
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-[11px] font-mono mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="block text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg border ${
                      errors.subject ? 'border-red-500' : 'border-border'
                    } text-text text-[14px] placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-150`}
                    placeholder="Project inquiry"
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    aria-required="true"
                    required
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-[11px] font-mono mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-bg border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } text-text text-[14px] placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-150 resize-none`}
                    placeholder="Tell us about your project..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-required="true"
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-[11px] font-mono mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-accent text-bg font-bold text-[12px] uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors duration-150"
                >
                  <Send size={14} aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
