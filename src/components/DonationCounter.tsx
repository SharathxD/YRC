'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function DonationCounter({ target = 100 }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      })
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= target) {
            clearInterval(interval)
            return target
          }
          return prevCount + Math.ceil((target - prevCount) / 10)
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [inView, target, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="text-center p-6 bg-card rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-2">Total Donations</h2>
      <p className="text-4xl font-bold text-primary">{count}</p>
      <p className="text-muted-foreground mt-2">and counting!</p>
    </motion.div>
  )
}