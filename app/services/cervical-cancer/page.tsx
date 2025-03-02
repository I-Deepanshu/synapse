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

export default function CervicalCancerPage() {
  const [formData, setFormData] = useState({
    age: "",
    numPartners: "",
    firstIntercourse: "",
    numPregnancies: "",
    smoker: "",
    smokingYears: "",
    smokingPacks: "",
    hormonalContraceptives: "",
    hormonalContraceptivesYears: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{
    risk: "HIGH" | "LOW" | null
  }>({ risk: null })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate AI processing with a timeout
    setTimeout(() => {
      // Simple risk calculation based on key risk factors
      // In a real app, this would use a more sophisticated model
      const age = Number.parseInt(formData.age) || 0
      const numPartners = Number.parseInt(formData.numPartners) || 0
      const firstIntercourse = Number.parseInt(formData.firstIntercourse) || 0
      const isSmoker = formData.smoker === "Yes"

      // Higher risk if: younger first intercourse, more partners, smoker, older age
      const isHighRisk =
        (firstIntercourse > 0 && firstIntercourse < 16) ||
        numPartners > 5 ||
        (isSmoker && formData.smokingYears !== "" && Number.parseInt(formData.smokingYears) > 10) ||
        age > 50

      setResult({
        risk: isHighRisk ? "HIGH" : "LOW",
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const resetForm = () => {
    setFormData({
      age: "",
      numPartners: "",
      firstIntercourse: "",
      numPregnancies: "",
      smoker: "",
      smokingYears: "",
      smokingPacks: "",
      hormonalContraceptives: "",
      hormonalContraceptivesYears: "",
    })
    setResult({ risk: null })
  }

  const isFormComplete = () => {
    // Check if required fields are filled
    const requiredFields = [
      "age",
      "numPartners",
      "firstIntercourse",
      "numPregnancies",
      "smoker",
      "hormonalContraceptives",
    ]
    const requiredComplete = requiredFields.every((field) => formData[field as keyof typeof formData] !== "")

    // Check conditional fields
    const smokingFieldsRequired = formData.smoker === "Yes"
    const smokingFieldsComplete =
      !smokingFieldsRequired || (formData.smokingYears !== "" && formData.smokingPacks !== "")

    const hormonalFieldsRequired = formData.hormonalContraceptives === "Yes"
    const hormonalFieldsComplete = !hormonalFieldsRequired || formData.hormonalContraceptivesYears !== ""

    return requiredComplete && smokingFieldsComplete && hormonalFieldsComplete
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-27%2021.03.45%20-%20A%20modern%20and%20professional%20hero%20section%20image%20for%20a%20cervical%20cancer%20awareness%20webpage.%20The%20image%20features%20a%20female%20doctor%20in%20a%20white%20coat%20with%20a%20reassu.jpg-rwLXwrkhpEvTz18Xp24majb8o4Nm7y.jpeg"
          alt="Cervical Cancer Screening"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A4958]/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Cervical Cancer Risk Assessment</h1>
          <p className="text-white max-w-2xl">
            Complete the questionnaire below to receive an AI-powered assessment of your cervical cancer risk factors.
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
              <h2 className="text-2xl font-bold mb-4">Cervical Cancer Risk Questionnaire</h2>
              <p className="text-gray-600 mb-6">
                Please answer all questions honestly for the most accurate assessment. This information will be used to
                evaluate your potential risk factors for cervical cancer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="numPartners">Number of sexual partners</Label>
                    <Input
                      id="numPartners"
                      type="number"
                      placeholder="Enter number"
                      value={formData.numPartners}
                      onChange={(e) => handleInputChange("numPartners", e.target.value)}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstIntercourse">First sexual intercourse (age)</Label>
                    <Input
                      id="firstIntercourse"
                      type="number"
                      placeholder="Enter age"
                      value={formData.firstIntercourse}
                      onChange={(e) => handleInputChange("firstIntercourse", e.target.value)}
                      min="0"
                      max="120"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numPregnancies">Number of pregnancies</Label>
                    <Input
                      id="numPregnancies"
                      type="number"
                      placeholder="Enter number"
                      value={formData.numPregnancies}
                      onChange={(e) => handleInputChange("numPregnancies", e.target.value)}
                      min="0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="smoker">Smoker?</Label>
                    <Select value={formData.smoker} onValueChange={(value) => handleInputChange("smoker", value)}>
                      <SelectTrigger id="smoker">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.smoker === "Yes" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="smokingYears">Smoking Duration (years)</Label>
                        <Input
                          id="smokingYears"
                          type="number"
                          placeholder="Enter years"
                          value={formData.smokingYears}
                          onChange={(e) => handleInputChange("smokingYears", e.target.value)}
                          min="0"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="smokingPacks">Smoking Intensity (packs per year)</Label>
                        <Input
                          id="smokingPacks"
                          type="number"
                          placeholder="Enter packs per year"
                          value={formData.smokingPacks}
                          onChange={(e) => handleInputChange("smokingPacks", e.target.value)}
                          min="0"
                          step="0.1"
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="hormonalContraceptives">Hormonal Contraceptives Usage?</Label>
                    <Select
                      value={formData.hormonalContraceptives}
                      onValueChange={(value) => handleInputChange("hormonalContraceptives", value)}
                    >
                      <SelectTrigger id="hormonalContraceptives">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.hormonalContraceptives === "Yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="hormonalContraceptivesYears">
                        Duration of Hormonal Contraceptive Use (years)
                      </Label>
                      <Input
                        id="hormonalContraceptivesYears"
                        type="number"
                        placeholder="Enter years"
                        value={formData.hormonalContraceptivesYears}
                        onChange={(e) => handleInputChange("hormonalContraceptivesYears", e.target.value)}
                        min="0"
                        step="0.1"
                      />
                    </div>
                  )}
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
                        a higher risk of cervical cancer. This is not a diagnosis, but we recommend consulting with a
                        healthcare professional for further evaluation.
                      </p>
                    ) : (
                      <p className="text-gray-600">
                        Based on your responses, our AI has not identified significant risk factors associated with
                        cervical cancer. However, it's important to maintain regular screenings and consult with a
                        healthcare professional if you have any concerns.
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold">Preventive Recommendations</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Regular Pap tests and HPV screening as recommended by your healthcare provider</li>
                      <li>HPV vaccination if you're eligible</li>
                      <li>Practice safe sex to reduce the risk of HPV infection</li>
                      <li>Avoid or quit smoking</li>
                      <li>Maintain a healthy diet rich in fruits and vegetables</li>
                      <li>Regular exercise and maintaining a healthy weight</li>
                      <li>Limit the number of sexual partners</li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90 flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Report
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

