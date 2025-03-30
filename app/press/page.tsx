"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pressReleases = [
  {
    date: "January 15, 2024",
    title: "DigitalGrowth Announces New AI-Powered Marketing Platform",
    excerpt: "Revolutionary platform leverages artificial intelligence to optimize digital marketing campaigns.",
  },
  {
    date: "December 1, 2023",
    title: "DigitalGrowth Expands Global Presence with New Office in London",
    excerpt: "Strategic expansion strengthens our ability to serve European clients.",
  },
  {
    date: "November 10, 2023",
    title: "DigitalGrowth Named Top Digital Agency of 2023",
    excerpt: "Industry recognition for excellence in digital marketing and innovation.",
  },
]

export default function PressPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Press & Media</h1>
          <p className="text-xl text-muted-foreground">Latest news and updates from DigitalGrowth</p>
        </div>

        <div className="grid gap-8 mb-12">
          {pressReleases.map((release, index) => (
            <motion.article
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card"
            >
              <time className="text-sm text-muted-foreground">{release.date}</time>
              <h2 className="text-2xl font-bold mt-2 mb-4">{release.title}</h2>
              <p className="text-muted-foreground mb-6">{release.excerpt}</p>
              <Button variant="outline">Read More</Button>
            </motion.article>
          ))}
        </div>

        <div className="rounded-lg bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-muted-foreground mb-6">
            For press and media inquiries, please contact our communications team.
          </p>
          <Link href="/contact">
            <Button>Contact Press Team</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

