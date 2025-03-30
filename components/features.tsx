"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-orange-500" />,
    title: "Lightning Fast Performance",
    description:
      "Our optimized solutions ensure your digital platforms load quickly and perform seamlessly across all devices.",
  },
  {
    icon: <Shield className="h-10 w-10 text-orange-500" />,
    title: "Enterprise-Grade Security",
    description:
      "We implement the latest security protocols to keep your data and your customers' information safe and protected.",
  },
  {
    icon: <Clock className="h-10 w-10 text-orange-500" />,
    title: "24/7 Support & Monitoring",
    description:
      "Our dedicated team provides round-the-clock support and monitoring to ensure your digital assets are always performing optimally.",
  },
  {
    icon: <Users className="h-10 w-10 text-orange-500" />,
    title: "Dedicated Team",
    description:
      "Work with a team of experts who are committed to your success and will guide you through every step of the process.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
    title: "Proven Results",
    description:
      "Our data-driven approach has helped businesses of all sizes achieve measurable growth and ROI on their digital investments.",
  },
  {
    icon: <Award className="h-10 w-10 text-orange-500" />,
    title: "Industry Recognition",
    description:
      "Award-winning solutions that have been recognized for innovation, design excellence, and business impact.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 w-full">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 p-3 rounded-lg bg-orange-100/20 dark:bg-orange-900/20">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
