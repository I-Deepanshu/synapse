"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Upload, RefreshCw, Download } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

export default function OralCancerPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [result, setResult] = useState<{
    risk: "POTENTIAL" | "NO_SIGNIFICANT" | null
  }>({ risk: null })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
        setResult({ risk: null })
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
    if (!image) return

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to use this feature",
        variant: "destructive",
      })
      router.push("/sign-in")
      return
    }

    setIsAnalyzing(true)

    // Simulate AI processing with a timeout
    setTimeout(async () => {
      // Mock result - in a real app, this would come from an actual AI model
      const mockRisk = Math.random() > 0.5 ? "POTENTIAL" : "NO_SIGNIFICANT"

      const resultData = {
        risk: mockRisk as "POTENTIAL" | "NO_SIGNIFICANT",
      }

      setResult(resultData)
      setIsAnalyzing(false)

      // Save result to database
      try {
        setIsSaving(true)
        const response = await fetch("/api/tests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            testType: "oral-cancer",
            imageUrl: image,
            result: {
              risk: resultData.risk,
              details:
                resultData.risk === "POTENTIAL"
                  ? "Our AI has detected features that may indicate a potential risk of oral cancer."
                  : "Our AI has not detected significant features associated with oral cancer.",
            },
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to save test result")
        }

        toast({
          title: "Test result saved",
          description: "Your test result has been saved to your profile",
        })
      } catch (error) {
        console.error("Error saving test result:", error)
        toast({
          title: "Error",
          description: "Failed to save your test result",
          variant: "destructive",
        })
      } finally {
        setIsSaving(false)
      }
    }, 2000)
  }

  const resetAnalysis = () => {
    setImage(null)
    setResult({ risk: null })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-27%2021.03.53%20-%20A%20modern%20and%20professional%20hero%20section%20image%20for%20an%20oral%20cancer%20awareness%20webpage.%20The%20image%20features%20a%20male%20doctor%20in%20a%20white%20coat%20with%20a%20warm%20and%20re.jpg.jpg-O8kUndx3dS8XSoYPhPPnU1zDvHKsa9.jpeg"
          alt="Oral Cancer Screening"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A4958]/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Oral Cancer Detection</h1>
          <p className="text-white max-w-2xl">
            Upload an image of your oral cavity for AI-powered analysis to assess potential oral cancer risk.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4">
        <Link href="/services" className="flex items-center text-[#0A4958] mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Upload Oral Cavity Image</h2>
              <p className="text-gray-600 mb-6">
                Please upload a clear, well-lit image of your oral cavity (inside of your mouth). For best results,
                ensure the image is focused and any areas of concern are clearly visible.
              </p>

              {!image ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Click to upload an image</p>
                  <p className="text-gray-400 text-sm">JPG, PNG or GIF (Max 5MB)</p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Uploaded oral cavity image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <Button variant="outline" onClick={resetAnalysis} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Upload New Image
                    </Button>
                    {!result.risk && (
                      <Button
                        className="bg-[#0A4958] hover:bg-[#0A4958]/90"
                        onClick={analyzeImage}
                        disabled={isAnalyzing}
                      >
                        {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>

              {!image ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Upload an image to see analysis results</p>
                </div>
              ) : !result.risk ? (
                <div className="text-center py-12">
                  {isAnalyzing ? (
                    <div className="space-y-4">
                      <div className="animate-spin h-12 w-12 border-4 border-[#0A4958] border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-gray-600">Analyzing your image...</p>
                    </div>
                  ) : (
                    <p className="text-gray-500">Click "Analyze Image" to process your upload</p>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${result.risk === "POTENTIAL" ? "bg-red-100" : "bg-green-100"}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {result.risk === "POTENTIAL" ? "Potential Risk: YES" : "No Significant Risk: NO"}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">What does this mean?</h3>
                    {result.risk === "POTENTIAL" ? (
                      <p className="text-gray-600">
                        Our AI has detected features that may indicate a potential risk of oral cancer. This is not a
                        diagnosis, but we recommend consulting with a healthcare professional for further evaluation.
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        Our AI has not detected significant features associated with oral cancer. However, if you notice
                        any changes in your oral cavity or have concerns, please consult with a healthcare professional.
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90 flex items-center gap-2" disabled={isSaving}>
                      <Download className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Download Report"}
                    </Button>
                    <Link href="/location">
                      <Button variant="outline">Contact Us</Button>
                    </Link>
                  </div>

                  <div className="text-sm text-gray-500 mt-4">
                    <p>
                      <strong>Disclaimer:</strong> This tool is for informational purposes only and should not replace
                      professional medical advice. Always consult with a healthcare provider for proper diagnosis and
                      treatment.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Oral Cancer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Warning Signs</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Persistent mouth sores that don't heal</li>
                  <li>Red or white patches in the mouth</li>
                  <li>Loose teeth</li>
                  <li>Lump or growth in the mouth</li>
                  <li>Persistent mouth pain</li>
                  <li>Difficulty swallowing or chewing</li>
                  <li>Sore throat or feeling that something is caught in the throat</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Prevention Tips</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Avoid tobacco products</li>
                  <li>Limit alcohol consumption</li>
                  <li>Maintain good oral hygiene</li>
                  <li>Regular dental check-ups</li>
                  <li>Protect lips from sun exposure</li>
                  <li>Eat a healthy diet rich in fruits and vegetables</li>
                  <li>HPV vaccination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Risk Factors</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Tobacco use (smoking or chewing)</li>
                  <li>Heavy alcohol consumption</li>
                  <li>Human papillomavirus (HPV) infection</li>
                  <li>Excessive sun exposure to lips</li>
                  <li>Age (most cases occur in people over 40)</li>
                  <li>Poor diet lacking in fruits and vegetables</li>
                  <li>Weakened immune system</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

