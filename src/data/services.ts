import type { Service } from '../types'
import {
  Globe,
  BrainCircuit,
  Cloud,
  Palette,
  BarChart3,
  Workflow,
} from 'lucide-react'

export const services: Service[] = [
  {
    id: 1,
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, performant web applications built with React, Next.js, and cutting-edge frameworks for blazing-fast load times.',
  },
  {
    id: 2,
    icon: BrainCircuit,
    title: 'AI Automation',
    description:
      'Intelligent automation workflows powered by machine learning models that streamline business operations and decision-making.',
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure on AWS, Azure, and GCP with automated deployments, monitoring, and cost optimization.',
  },
  {
    id: 4,
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'User-centered design systems, prototypes, and pixel-perfect interfaces that convert visitors into loyal customers.',
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Data Dashboards',
    description:
      'Real-time analytics dashboards and business intelligence tools that transform raw data into actionable insights.',
  },
  {
    id: 6,
    icon: Workflow,
    title: 'Business System Integration',
    description:
      'Seamless integration of CRM, ERP, and custom APIs to create unified, efficient business operation ecosystems.',
  },
]
