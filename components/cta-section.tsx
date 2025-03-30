"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your API
      console.log("Submitted email:", email)
      setSubmitted(true)
      setEmail("")
      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/30 via-background to-red-50/30 dark:from-orange-950/20 dark:via-background dark:to-red-950/20 w-full">
      <div className="container">
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/5 dark:to-red-500/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-orange-100/20 dark:border-orange-900/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your business growth?</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Join thousands of businesses that have transformed their digital presence with our expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-muted"
            >
              <h3 className="text-xl font-bold mb-4">Stay updated with the latest trends</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for expert insights, tips, and exclusive offers.
              </p>
              {submitted ? (
                <div className="flex items-center text-green-600 dark:text-green-400 space-x-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
