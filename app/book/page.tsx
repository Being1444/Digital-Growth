"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentForm } from "@/components/payment-form"
import * as XLSX from "xlsx"

// Service prices mapping
const servicePrices = {
  "Digital Marketing": 999,
  "Web Development": 1499,
  "Mobile Apps": 2499,
  "SEO Optimization": 799,
  "Email Marketing": 599,
  "Growth Strategy": 1299,
}

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date>()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: searchParams.get("service") || "",
    message: "",
  })

  // Calculate price based on selected service
  const servicePrice = formData.service ? servicePrices[formData.service as keyof typeof servicePrices] || 0 : 0

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (currentStep === 1) {
      handleNextStep()
      return
    }

    const bookingData = {
      ...formData,
      date: date?.toISOString(),
      bookingTime: new Date().toISOString(),
      price: servicePrice,
    }

    // Export to Excel
    const worksheet = XLSX.utils.json_to_sheet([bookingData])
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings")
    XLSX.writeFile(workbook, `booking-${Date.now()}.xlsx`)

    // Show success message and redirect
    router.push("/success")
  }

  const handlePaymentComplete = () => {
    // Show success message and redirect
    router.push("/success")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-4xl py-12"
    >
      <h1 className="text-3xl font-bold mb-2">Book a Service</h1>
      <div className="flex items-center mb-8">
        <div className={`flex items-center ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-2">
            1
          </div>
          <span>Booking Details</span>
        </div>
        <div className="h-0.5 w-12 bg-muted mx-2"></div>
        <div className={`flex items-center ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className={`w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} flex items-center justify-center mr-2`}>
            2
          </div>
          <span>Payment</span>
        </div>
      </div>

      {currentStep === 1 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Your company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Digital Marketing">Digital Marketing ($999)</SelectItem>
                  <SelectItem value="Web Development">Web Development ($1499)</SelectItem>
                  <SelectItem value="Mobile Apps">Mobile Apps ($2499)</SelectItem>
                  <SelectItem value="SEO Optimization">SEO Optimization ($799)</SelectItem>
                  <SelectItem value="Email Marketing">Email Marketing ($599)</SelectItem>
                  <SelectItem value="Growth Strategy">Growth Strategy ($1299)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {formData.service && (
            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Selected Service:</span>
                <span>{formData.service}</span>
              </div>
              <div className="flex justify-between items-center font-bold mt-2">
                <span>Price:</span>
                <span>${servicePrice}</span>
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            size="lg" 
            disabled={!date || !formData.name || !formData.email || !formData.service}
          >
            Proceed to Payment
          </Button>
        </form>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="bg-muted/20 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Booking Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Name:</div>
              <div>{formData.name}</div>
              <div>Email:</div>
              <div>{formData.email}</div>
              <div>Service:</div>
              <div>{formData.service}</div>
              <div>Date:</div>
              <div>{date?.toLocaleDateString()}</div>
            </div>
          </div>

          <PaymentForm 
            amount={servicePrice} 
            serviceName={formData.service} 
            onPaymentComplete={handlePaymentComplete} 
          />

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handlePrevStep}>
              Back to Details
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
