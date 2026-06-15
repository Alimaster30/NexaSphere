import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: number
  icon: LucideIcon
  title: string
  description: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  gradient: string
  socials: {
    platform: string
    url: string
  }[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
  numericValue: number
}

export interface FooterLink {
  label: string
  url: string
}

export interface NavItem {
  label: string
  href: string
}
