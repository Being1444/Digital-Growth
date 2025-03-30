"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 w-full">
      <div className="container flex flex-col lg:flex-row items-center gap-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 mb-4">
            We can help you!
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Grow <span className="text-orange-500">faster</span> with our all-in-one marketing platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            We aren't your average tech-up! We are Digital agency that software needs a serious patch. We are Digital
            agency that software goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.7 }}
          className="flex-1 max-w-full"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738388549039.jpg-drdgrbMxhsUlKZaRLh8TfiQTC1jhBT.jpeg"
            alt="Success Story"
            width={600}
            height={600}
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            priority
            quality={85}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZiZTk1Ii8+PC9zdmc+"
          />
        </motion.div>
      </div>
    </div>
  )
}
