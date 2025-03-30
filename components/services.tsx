"use client"

import { motion } from "framer-motion"
import { BarChart3, Globe, Smartphone, Search, Mail, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
    price: 999,
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites that convert visitors into customers",
    price: 1499,
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    price: 2499,
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and visibility",
    price: 799,
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns",
    price: 599,
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Growth Strategy",
    description: "Data-driven strategies for sustainable growth",
    price: 1299,
  },
]

export function Services() {
  return (
    <section className="py-20 bg-muted/50 w-full">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Choose from our comprehensive range of digital services to help your business grow
          </p>
        </motion.div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${service.price}</span>
                    <Link href={`/book?service=${service.title}`}>
                      <Button>Book Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
