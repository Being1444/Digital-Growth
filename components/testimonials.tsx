"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with DigitalGrowth transformed our online presence completely. Their strategic approach helped us increase conversions by 40% in just three months.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechFusion",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "The team at DigitalGrowth delivered beyond our expectations. Their attention to detail and innovative solutions have been instrumental to our growth.",
    author: "Michael Chen",
    role: "CEO, Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "I can't recommend DigitalGrowth enough. They understood our brand vision perfectly and created a digital strategy that resonated with our audience.",
    author: "Emma Rodriguez",
    role: "Brand Manager, Creative Collective",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background w-full">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. See what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-muted">
                <CardContent className="pt-6">
                  <div className="mb-4 text-orange-500">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
