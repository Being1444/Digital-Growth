"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, AlertTriangle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Security</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We take security seriously. Learn about our commitment to protecting your data and privacy.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-lg border bg-card"
          >
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="text-muted-foreground">
              We employ industry-standard encryption and security measures to protect your sensitive information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg border bg-card"
          >
            <Lock className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Access Control</h2>
            <p className="text-muted-foreground">
              Strict access controls and authentication procedures ensure only authorized personnel can access data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg border bg-card"
          >
            <Server className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Infrastructure Security</h2>
            <p className="text-muted-foreground">
              Our infrastructure is hosted in secure data centers with 24/7 monitoring and regular security audits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-lg border bg-card"
          >
            <AlertTriangle className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Incident Response</h2>
            <p className="text-muted-foreground">
              We maintain a comprehensive incident response plan to quickly address any security concerns.
            </p>
          </motion.div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Report a Security Issue</h2>
          <p className="text-muted-foreground mb-4">
            If you discover a potential security issue, please contact our security team immediately at
            security@digitalgrowth.com
          </p>
        </div>
      </motion.div>
    </div>
  )
}

