"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { FileText, Calendar, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"

interface TestResult {
  _id: string
  testType: string
  answers?: Record<string, any>
  imageUrl?: string
  result: {
    risk: string
    confidence?: number
    details?: string
  }
  createdAt: string
}

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isLoadingResults, setIsLoadingResults] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    if (user) {
      fetchTestResults()
    }
  }, [user])

  const fetchTestResults = async () => {
    try {
      setIsLoadingResults(true)
      const response = await fetch("/api/tests")

      if (!response.ok) {
        throw new Error("Failed to fetch test results")
      }

      const data = await response.json()
      setTestResults(data.testResults)
    } catch (error) {
      console.error("Error fetching test results:", error)
      toast({
        title: "Error",
        description: "Failed to load your test history",
        variant: "destructive",
      })
    } finally {
      setIsLoadingResults(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getTestTypeName = (testType: string) => {
    switch (testType) {
      case "oral-cancer":
        return "Oral Cancer Screening"
      case "skin-cancer":
        return "Skin Cancer Screening"
      case "lung-cancer":
        return "Lung Cancer Risk Assessment"
      case "cervical-cancer":
        return "Cervical Cancer Risk Assessment"
      default:
        return testType
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin h-12 w-12 border-4 border-[#0A4958] border-t-transparent rounded-full"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-600">View and manage your health information and test history</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => router.push("/profile/edit")}>
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Test History</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingResults ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-[#0A4958] border-t-transparent rounded-full mr-2"></div>
                  <p>Loading your test history...</p>
                </div>
              ) : testResults.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">You haven't taken any tests yet</p>
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90" onClick={() => router.push("/services")}>
                    Explore Available Tests
                  </Button>
                </div>
              ) : (
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Tests</TabsTrigger>
                    <TabsTrigger value="oral-cancer">Oral Cancer</TabsTrigger>
                    <TabsTrigger value="skin-cancer">Skin Cancer</TabsTrigger>
                    <TabsTrigger value="lung-cancer">Lung Cancer</TabsTrigger>
                    <TabsTrigger value="cervical-cancer">Cervical Cancer</TabsTrigger>
                  </TabsList>

                  {["all", "oral-cancer", "skin-cancer", "lung-cancer", "cervical-cancer"].map((tabValue) => (
                    <TabsContent key={tabValue} value={tabValue} className="space-y-4">
                      {testResults
                        .filter((result) => tabValue === "all" || result.testType === tabValue)
                        .map((result) => (
                          <Card key={result._id}>
                            <CardContent className="p-4">
                              <div className="flex flex-col md:flex-row gap-4">
                                {result.imageUrl && (
                                  <div className="w-full md:w-1/4">
                                    <div className="relative aspect-square rounded-md overflow-hidden">
                                      <Image
                                        src={result.imageUrl || "/placeholder.svg"}
                                        alt="Test image"
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  </div>
                                )}
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold">{getTestTypeName(result.testType)}</h3>
                                    <div
                                      className={`px-3 py-1 rounded-full text-sm ${
                                        result.result.risk === "HIGH" || result.result.risk === "POTENTIAL"
                                          ? "bg-red-100 text-red-800"
                                          : "bg-green-100 text-green-800"
                                      }`}
                                    >
                                      {result.result.risk === "HIGH" || result.result.risk === "POTENTIAL"
                                        ? "High Risk"
                                        : "Low Risk"}
                                    </div>
                                  </div>

                                  <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span className="mr-4">{formatDate(result.createdAt)}</span>
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{formatTime(result.createdAt)}</span>
                                  </div>

                                  {result.result.details && (
                                    <p className="text-gray-700 mb-4">{result.result.details}</p>
                                  )}

                                  {(result.result.risk === "HIGH" || result.result.risk === "POTENTIAL") && (
                                    <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-md">
                                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                                      <p className="text-sm">
                                        This result indicates potential risk factors. We recommend consulting with a
                                        healthcare professional for further evaluation.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                      {testResults.filter((result) => tabValue === "all" || result.testType === tabValue).length ===
                        0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-500">
                            No {tabValue === "all" ? "tests" : tabValue.replace("-", " ")} results found
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

