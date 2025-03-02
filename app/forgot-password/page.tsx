"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate password reset process
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simple validation
      if (!email) {
        throw new Error("Please enter your email address")
      }

      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-28%2019.01.00%20-%20A%20modern%20and%20professional%20hero%20image%20for%20a%20cancer%20prediction%20website%27s%20sign-in%20and%20sign-out%20page.%20The%20design%20should%20feature%20a%20clean%2C%20user-friendly%20int-ZfbsexvndkrYvt2ULyn41bWg0kzTT6.webp"
          alt="AI-Driven Medical Diagnosis Interface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A4958]/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Reset Password</h1>
          <p className="text-white max-w-2xl">We'll send you instructions to reset your password.</p>
        </div>
      </section>

      {/* Forgot Password Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Link href="/sign-in" className="flex items-center text-[#0A4958] mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sign In
            </Link>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-[#0A4958]">Forgot Password</h2>
                      <p className="text-gray-600 mt-1">
                        Enter your email address and we'll send you a link to reset your password.
                      </p>
                    </div>

                    {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-[#0A4958] hover:bg-[#0A4958]/90" disabled={isLoading}>
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          "Send Reset Link"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A4958] mb-2">Check Your Email</h3>
                    <p className="text-gray-600 mb-6">
                      We've sent a password reset link to <span className="font-medium">{email}</span>. Please check
                      your inbox and follow the instructions.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[#0A4958] text-[#0A4958]"
                      onClick={() => {
                        setIsSubmitted(false)
                        setEmail("")
                      }}
                    >
                      Back to Reset Password
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

