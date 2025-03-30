"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CreditCard, CheckCircle } from "lucide-react"

interface PaymentFormProps {
  amount: number
  serviceName: string
  onPaymentComplete: () => void
}

export function PaymentForm({ amount, serviceName, onPaymentComplete }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
      
      // Notify parent component that payment is complete
      setTimeout(() => {
        onPaymentComplete()
      }, 1500)
    }, 2000)
  }

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">Payment Successful</h3>
        <p className="text-muted-foreground mb-4">
          Your payment of ${amount} for {serviceName} has been processed successfully.
        </p>
      </motion.div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Complete your payment to secure your booking</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit-card">Credit/Debit Card</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {paymentMethod === "credit-card" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input
                  id="card-name"
                  placeholder="John Smith"
                  value={cardDetails.cardName}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardName: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiryDate}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    type="password"
                    maxLength={4}
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="p-4 text-center">
              <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
              <p className="text-sm text-muted-foreground">
                Note: This is a demo. In a real application, you would be redirected to PayPal.
              </p>
            </div>
          )}

          {paymentMethod === "bank-transfer" && (
            <div className="p-4 space-y-4">
              <div>
                <p className="font-medium">Bank Details:</p>
                <p>Bank Name: Example Bank</p>
                <p>Account Number: 1234567890</p>
                <p>Routing Number: 987654321</p>
                <p>Reference: Your Name - {serviceName}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Please include your name and service in the transfer reference.
              </p>
            </div>
          )}

          <div className="pt-4 border-t">
            <div className="flex justify-between mb-2">
              <span>Service:</span>
              <span>{serviceName}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${amount}</span>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          type="submit" 
          className="w-full" 
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" /> Pay ${amount}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
