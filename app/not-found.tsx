"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container max-w-5xl py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4"
        >
          <FileX className="h-12 w-12 text-muted-foreground" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            We couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link href="/">
            <Button size="lg">Return to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Contact Support</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
