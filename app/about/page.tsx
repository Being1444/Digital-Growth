"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About DigitalGrowth</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            DigitalGrowth is a leading digital marketing agency helping businesses transform their online presence and
            achieve sustainable growth.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded in 2012, DigitalGrowth has been at the forefront of digital innovation, helping businesses navigate
            the ever-evolving digital landscape. What started as a small team of passionate digital marketers has grown
            into a full-service agency with over 80 professionals worldwide.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To empower businesses with innovative digital solutions that drive growth and success in the modern
            marketplace. We believe in creating lasting partnerships with our clients and delivering measurable results
            that impact their bottom line.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Innovation in everything we do</li>
            <li>Transparency and integrity in our relationships</li>
            <li>Results-driven approach to digital marketing</li>
            <li>Continuous learning and improvement</li>
            <li>Client success is our success</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

