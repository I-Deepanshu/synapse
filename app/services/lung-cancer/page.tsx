"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, FileText } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

export default function LungCancerPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    smoking: "",
    yellowFingers: "",
    anxiety: "",
    peerPressure: "",
    chronicDisease: "",
    fatigue: "",
    allergy: "",
    wheezing: "",
    alcoholConsumption: "",
    coughing: "",
    shortnessOfBreath: "",
    swallowingDifficulty: "",
    chestPain: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [result, setResult] = useState<{
    risk: "HIGH" | "LOW" | null
  }>({ risk: null })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to use this feature",
        variant: "destructive",
      })
      router.push("/sign-in")
      return
    }

    setIsSubmitting(true)

    // Simulate AI processing with a timeout
    setTimeout(async () => {
      // Count the number of "Yes" responses as a simple risk calculation
      const yesCount = Object.values(formData).filter((value) => value === "Yes").length

      // If more than 5 "Yes" responses or if specific high-risk factors are present
      const isHighRisk =
        yesCount > 5 ||
        (formData.smoking === "Yes" && formData.shortnessOfBreath === "Yes" && formData.coughing === "Yes")

      const resultData = {
        risk: isHighRisk ? "HIGH" : "LOW",
      }

      setResult(resultData)
      setIsSubmitting(false)

      // Save result to database
      try {
        setIsSaving(true)
        const response = await fetch("/api/tests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            testType: "lung-cancer",
            answers: formData,
            result: {
              risk: resultData.risk,
              details:
                resultData.risk === "HIGH"
                  ? "Based on your responses, our AI has identified several risk factors that may be associated with a higher risk of lung cancer."
                  : "Based on your responses, our AI has not identified significant risk factors associated with lung cancer.",
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

  const resetForm = () => {
    setFormData({
      gender: "",
      age: "",
      smoking: "",
      yellowFingers: "",
      anxiety: "",
      peerPressure: "",
      chronicDisease: "",
      fatigue: "",
      allergy: "",
      wheezing: "",
      alcoholConsumption: "",
      coughing: "",
      shortnessOfBreath: "",
      swallowingDifficulty: "",
      chestPain: "",
    })
    setResult({ risk: null })
  }

  const isFormComplete = () => {
    return Object.values(formData).every((value) => value !== "")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-27%2021.03.56%20-%20A%20modern%20and%20professional%20hero%20section%20image%20for%20a%20lung%20cancer%20awareness%20webpage.%20The%20image%20features%20a%20male%20doctor%20in%20a%20white%20coat%20with%20a%20confident%20an.jpg.jpg-tXtxRd8w6Lq0yfCZhFHzwMC0CuT6He.jpeg"
          alt="Lung Cancer Screening"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A4958]/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Lung Cancer Risk Assessment</h1>
          <p className="text-white max-w-2xl">
            Complete the questionnaire below to receive an AI-powered assessment of your lung cancer risk factors.
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
              <h2 className="text-2xl font-bold mb-4">Lung Cancer Risk Questionnaire</h2>
              <p className="text-gray-600 mb-6">
                Please answer all questions honestly for the most accurate assessment. This information will be used to
                evaluate your potential risk factors for lung cancer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      min="1"
                      max="120"
                    />
                  </div>
                </div>

                {/* Yes/No Questions */}
                <div className="space-y-4">
                  {[
                    { id: "smoking", label: "Smoking Status" },
                    { id: "yellowFingers", label: "Yellow Fingers" },
                    { id: "anxiety", label: "Anxiety" },
                    { id: "peerPressure", label: "Peer Pressure" },
                    { id: "chronicDisease", label: "Chronic Disease" },
                    { id: "fatigue", label: "Fatigue" },
                    { id: "allergy", label: "Allergy" },
                    { id: "wheezing", label: "Wheezing" },
                    { id: "alcoholConsumption", label: "Alcohol Consumption" },
                    { id: "coughing", label: "Coughing" },
                    { id: "shortnessOfBreath", label: "Shortness of Breath" },
                    { id: "swallowingDifficulty", label: "Swallowing Difficulty" },
                    { id: "chestPain", label: "Chest Pain" },
                  ].map((question) => (
                    <div key={question.id} className="space-y-2">
                      <Label htmlFor={question.id}>{question.label}</Label>
                      <Select
                        value={formData[question.id as keyof typeof formData]}
                        onValueChange={(value) => handleInputChange(question.id, value)}
                      >
                        <SelectTrigger id={question.id}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Reset Form
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#0A4958] hover:bg-[#0A4958]/90"
                    disabled={!isFormComplete() || isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit Assessment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>

              {!result.risk ? (
                <div className="text-center py-12">
                  {isSubmitting ? (
                    <div className="space-y-4">
                      <div className="animate-spin h-12 w-12 border-4 border-[#0A4958] border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-gray-600">Analyzing your responses...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <FileText className="h-16 w-16 text-gray-300 mx-auto" />
                      <p className="text-gray-500">Complete the questionnaire to see your assessment results</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${result.risk === "HIGH" ? "bg-red-100" : "bg-green-100"}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {result.risk === "HIGH" ? "High Risk: YES" : "Low Risk: NO"}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">What does this mean?</h3>
                    {result.risk === "HIGH" ? (
                      <p className="text-gray-600">
                        Based on your responses, our AI has identified several risk factors that may be associated with
                        a higher risk of lung cancer. This is not a diagnosis, but we recommend consulting with a
                        healthcare professional for further evaluation.
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        Based on your responses, our AI has not identified significant risk factors associated with lung
                        cancer. However, it's important to maintain a healthy lifestyle and consult with a healthcare
                        professional if you have any concerns.
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">Recommendations</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      {result.risk === "HIGH" ? (
                        <>
                          <li>Schedule a consultation with a healthcare provider</li>
                          <li>Consider a low-dose CT scan if recommended by your doctor</li>
                          <li>If you smoke, talk to your doctor about smoking cessation programs</li>
                          <li>Minimize exposure to secondhand smoke and other lung irritants</li>
                          <li>Follow up regularly with your healthcare provider</li>
                        </>
                      ) : (
                        <>
                          <li>Continue regular health check-ups</li>
                          <li>Maintain a smoke-free lifestyle</li>
                          <li>Exercise regularly and eat a balanced diet</li>
                          <li>Be aware of any changes in respiratory symptoms</li>
                          <li>Minimize exposure to environmental pollutants</li>
                        </>
                      )}
                    </ul>
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
                      <strong>Disclaimer:</strong> This assessment is for informational purposes only and should not
                      replace professional medical advice. Always consult with a healthcare provider for proper
                      diagnosis and treatment.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

