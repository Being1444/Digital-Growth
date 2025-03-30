"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Globe, Smartphone } from "lucide-react"

const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
    price: 999,
    features: ["Social Media Management", "Content Marketing", "PPC Advertising", "Analytics & Reporting"],
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites that convert visitors into customers",
    price: 1499,
    features: ["Custom Design", "Responsive Development", "CMS Integration", "Performance Optimization"],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    price: 2499,
    features: ["iOS & Android Apps", "UI/UX Design", "App Store Optimization", "Maintenance & Support"],
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground">Comprehensive digital solutions to help your business thrive</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${service.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/book?service=${service.title}`}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team of experts combines creativity with technical expertise to deliver exceptional results. We're
            committed to helping your business grow and succeed in the digital landscape.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Skilled professionals with years of experience</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">Tailored to your specific needs</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always here when you need us</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="font-bold mb-2">Results Driven</h3>
              <p className="text-sm text-muted-foreground">Focused on your success</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20105402-Ue64GDCwe4nd6tVt6v7Fy780iKTzPk.png"
            alt="Company Statistics"
            width={600}
            height={200}
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  )
}

