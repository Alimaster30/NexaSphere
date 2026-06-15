import type { TeamMember } from '../types'
import { Globe, MessageCircle, GitBranch, Camera } from 'lucide-react'

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ayan Malik',
    role: 'Founder & Product Strategist',
    bio: 'Visionary leader with 8+ years driving digital transformation. Passionate about building products that solve real problems.',
    gradient: 'from-cyan-500 to-blue-600',
    socials: [
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 2,
    name: 'Sara Khan',
    role: 'UI/UX Designer',
    bio: 'Award-winning designer crafting intuitive interfaces. Expert in design systems, Figma, and user research methodologies.',
    gradient: 'from-purple-500 to-pink-600',
    socials: [
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 3,
    name: 'Hamza Rauf',
    role: 'Full Stack Developer',
    bio: 'Polyglot developer specializing in React, Node.js, and cloud-native architectures. Open source contributor.',
    gradient: 'from-emerald-500 to-teal-600',
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    id: 4,
    name: 'Mina Ahmed',
    role: 'AI Automation Engineer',
    bio: 'Machine learning engineer building intelligent systems. Expert in NLP, computer vision, and production ML pipelines.',
    gradient: 'from-orange-500 to-red-600',
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
]

export const socialIconMap: Record<string, typeof Globe> = {
  linkedin: Globe,
  twitter: MessageCircle,
  github: GitBranch,
  instagram: Camera,
}
