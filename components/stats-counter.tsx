"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Trophy, Star, Users, Globe } from "lucide-react"

interface AnimatedStatProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
}

function AnimatedStat({ icon, value, suffix = "", label }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number
    const duration = 2 // seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4 p-4 rounded-full bg-orange-100/30 dark:bg-orange-900/30">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-muted/30 w-full">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedStat icon={<Trophy className="h-8 w-8 text-orange-500" />} value={15} label="Years Experience" />
          <AnimatedStat
            icon={<Star className="h-8 w-8 text-orange-500" />}
            value={98}
            suffix="%"
            label="Client Satisfaction"
          />
          <AnimatedStat
            icon={<Users className="h-8 w-8 text-orange-500" />}
            value={500}
            suffix="+"
            label="Happy Clients"
          />
          <AnimatedStat
            icon={<Globe className="h-8 w-8 text-orange-500" />}
            value={30}
            suffix="+"
            label="Countries Served"
          />
        </div>
      </div>
    </section>
  )
}
