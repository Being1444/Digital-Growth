"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="container max-w-md py-24">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Booking Successful!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for booking with us. We will contact you shortly to confirm your appointment.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </motion.div>
    </div>
  )
}

