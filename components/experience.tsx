"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface AnimatedNumberProps {
  from: number
  to: number
  duration?: number
  label: string
}

function AnimatedNumber({ from, to, duration = 2, label }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCurrent(Math.floor(from + (to - from) * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCurrent(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, inView])

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-gradient-to-br from-orange-100/10 to-red-100/10 dark:from-orange-900/10 dark:to-red-900/10 rounded-lg shadow-lg backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-2"
      >
        {typeof current === "number" && current.toLocaleString()}
        {typeof current === "string" && current}
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-muted-foreground"
      >
        {label}
      </motion.div>
    </div>
  )
}

export function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/50 via-background to-red-50/50 dark:from-orange-950/30 dark:via-background dark:to-red-950/30 w-full">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Experience</h2>
          <p className="text-muted-foreground">Years of expertise in delivering exceptional digital solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedNumber from={0} to={12} label="Years Experience" />
          <AnimatedNumber from={0} to={5600000} label="Total Users" />
          <AnimatedNumber from={0} to={4.8} duration={1.5} label="Average Review" />
          <AnimatedNumber from={0} to={80} label="Professional Team" />
        </div>
      </div>
    </section>
  )
}
