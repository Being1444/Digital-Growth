"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Reduce timeout to 1500ms for faster initial experience
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 1.2 }} // Reduced animation duration
      onAnimationComplete={() => setIsVisible(false)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }} // Reduced animation duration
        className="text-center"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }} // Reduced animation duration and delay
          className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          DigitalGrowth
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }} // Reduced animation duration and delay
          className="mt-2 text-muted-foreground"
        >
          Grow Faster, Grow Better
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
