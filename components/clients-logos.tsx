"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Using online image sources for better looking logos
const clients = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
]

export function ClientsLogos() {
  return (
    <section className="py-16 bg-muted/10 w-full border-y border-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            We're proud to work with some of the most innovative companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain" 
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
