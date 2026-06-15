import type { NavItem, FooterLink } from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const quickLinks: FooterLink[] = [
  { label: 'Home', url: '#home' },
  { label: 'Services', url: '#services' },
  { label: 'About Us', url: '#about' },
  { label: 'Team', url: '#team' },
  { label: 'Contact', url: '#contact' },
]

export const serviceLinks: FooterLink[] = [
  { label: 'Web Development', url: '#services' },
  { label: 'AI Automation', url: '#services' },
  { label: 'Cloud Solutions', url: '#services' },
  { label: 'UI/UX Design', url: '#services' },
  { label: 'Data Dashboards', url: '#services' },
]

export const legalLinks: FooterLink[] = [
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
]

export const contactInfo = {
  name: 'Tahir Ali',
  phone: '+92 315 615 1821',
  email: 'alit169533@gmail.com',
  address: 'Multan, Punjab, Pakistan',
}

export const socialLinks = [
  { platform: 'LinkedIn', url: '#', label: 'LinkedIn' },
  { platform: 'Twitter', url: '#', label: 'Twitter' },
  { platform: 'GitHub', url: '#', label: 'GitHub' },
  { platform: 'Instagram', url: '#', label: 'Instagram' },
]
