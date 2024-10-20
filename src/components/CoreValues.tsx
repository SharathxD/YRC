'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Shield, Globe } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Humanity', description: 'We serve people in need without discrimination.' },
  { icon: Users, title: 'Volunteerism', description: 'Our strength lies in the dedication of our volunteers.' },
  { icon: Shield, title: 'Protection', description: 'We strive to protect human life and health.' },
  { icon: Globe, title: 'Universality', description: 'We are committed to helping people worldwide.' },
]

export default function CoreValues() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        >
          <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
          <p className="text-muted-foreground">{value.description}</p>
        </motion.div>
      ))}
    </div>
  )
}