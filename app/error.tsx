"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container max-w-5xl py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4"
        >
          <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Something went wrong!
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-lg">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button 
            size="lg" 
            onClick={() => reset()}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">Return to Home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
