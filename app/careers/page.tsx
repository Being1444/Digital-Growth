"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const positions = [
  {
    title: "Senior Digital Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "London, UK",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We're always looking for talented individuals to join our growing team. Check out our open positions below.
        </p>

        <div className="grid gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Button>Apply Now</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-muted">
          <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
          <p className="text-muted-foreground mb-6">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for
            future opportunities.
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

