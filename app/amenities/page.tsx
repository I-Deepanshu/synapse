import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function AmenitiesPage() {
  const teamMembers = [
    {
      name: "Kartik Garg",
      role: "USICT",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2077-7TuqjXAkQQF0zpktxRXxn1JpITRpdv.png",
      linkedin: "https://www.linkedin.com/in/kartik-garg-99a754252/",
    },
    {
      name: "Deepanshu",
      role: "UIET",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DEEPANSHU-JLRU5zhf0Gi3UuyEU8dG4wCyranXjs.png",
      linkedin: "https://www.linkedin.com/in/deepanshu-shimar-704633256/",
    },
    {
      name: "Khushi Singh",
      role: "Galgotias University",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KHUSHI-UsWvEwGtIjgmDnn2z2uDJPSgTZ0OAQ.png",
      linkedin: "https://www.linkedin.com/in/khushi-singh-18596524a/",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2079-0OWGXCd1xDZ8TIr7UiUGOK9X26SVfr.png"
          alt="Healthcare Amenities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-white text-6xl font-bold mb-6">AMENITIES</h1>
          <p className="text-white max-w-2xl text-lg">
            Access Personalized Cancer-Prediction Instruments, Comprehensive Findings, And Store Your Health-Related
            Information In Privacy. Feel Totally Integrated With Health Care Across Different Countries Through Highly
            Reliable And Easy User Interface In Favor Of Supporting And Enhancing Wellness Over Time.
          </p>
          <Link href="/location">
            <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90 mt-6 w-fit">Contact Us</Button>
          </Link>
        </div>
      </section>

      {/* Prediction Models Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2078-wz2alDMCD9uVtUkKLfX5AA1sa9bHFQ.png"
            alt="Healthcare Technology"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
          <div>
            <p className="text-[#0A4958] mb-4">Our Awesome Features</p>
            <h2 className="text-3xl font-bold mb-6">
              WE PRIDE OURSELVES ON OUR <span className="text-[#0A4958]">PREDICTION</span> MODELS
            </h2>
            <p className="text-gray-600 mb-6">
              The Features Include AI-Based Cancer Prediction Models, Secure User Authentication, Integration With SMART
              On FHIR For Seamless Data Management, Personalized Health Insights, And Real- Time Updates, Thus Making
              The Platform Intuitive, Reliable, And Standardized To Enhance Accessibility And Outcomes In Healthcare.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-B0LOKaAo7sTkmb4qEMMznvUOqDcoEV.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p>We Use The HDI For Transferring Healthcare Data</p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-B0LOKaAo7sTkmb4qEMMznvUOqDcoEV.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p>Various Prediction Models Like Lung Cancer, Cervical Cancer, Oral Cancer, Skin Cancer Etc</p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-B0LOKaAo7sTkmb4qEMMznvUOqDcoEV.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p>Use Of Smart, Meldrx And FHIR For Better Integration With Major Healthcare Industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedbacks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#0A4958] mb-2">Feedbacks</p>
          <h2 className="text-3xl font-bold text-center mb-12">CUSTOMER FEEDBACKS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="David Smith"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">David Smith</h3>
                    <p className="text-sm text-gray-600">Villager</p>
                  </div>
                </div>
                <p className="mb-4">
                  "Insight Onco Helped me get diagnosed for my oral cancer caused by the excessive tobacco at a very
                  early stage"
                </p>
                <div className="flex items-center gap-2">
                  <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Mark Jone"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Mark Jone</h3>
                    <p className="text-sm text-gray-600">Daily Wage worker</p>
                  </div>
                </div>
                <p className="mb-4">
                  "I was suffering from reddish areas and itchiness and was anxious about it considering it may be
                  cancer but Insight Onco helped me to get over my anxiety and get better understanding of the
                  underlying issue"
                </p>
                <div className="flex items-center gap-2">
                  <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                  <div className="flex text-yellow-400">
                    {"★".repeat(4)}
                    {"☆"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#0A4958] mb-2">Our Experts</p>
          <h2 className="text-3xl font-bold text-center mb-12">OUR TEAM MATES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <Link
                      href={member.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0A4958] text-white hover:bg-[#0A4958]/90"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

