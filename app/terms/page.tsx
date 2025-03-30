"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: February 1, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using our services, you agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or
              accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily access our services for personal, non-commercial use only. This is
              the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall DigitalGrowth or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use our services.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

