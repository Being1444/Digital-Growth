"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle authentication
    console.log("Login attempt:", formData)
    router.push("/dashboard")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-md py-24"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Register now
        </Link>
      </p>
    </motion.div>
  )
}

