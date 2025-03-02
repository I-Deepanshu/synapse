import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Personalized Risk Assessment",
      description:
        "Analyze health data to provide tailored cancer risk insights. Offer easy-to-understand results to empower better decision-making",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.26.09_19a93f44.jpg-JwGRe3k8MN5LsmomNYQWSlhJuLYNOL.jpeg",
    },
    {
      title: "AI-Powered Predictions",
      description:
        "Use advanced algorithms to detect early warning signs of cancer. Continuously improve accuracy with machine learning and large datasets.",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.26.55_bf4f9a93.jpg-oDtzywJEp5I77qkpiXsSh96ErK5IA3.jpeg",
    },
    {
      title: "Data Integration",
      description:
        "Seamlessly integrate with healthcare systems via SMART on FHIR. Combine medical records, lifestyle factors, and genetic information.",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.27.46_1e7524ba.jpg-5LWDvMz1fItuqmHAGQSoMmrdcR3iuH.jpeg",
    },
    {
      title: "Community Insights",
      description:
        "Aggregate anonymized data to identify high-risk areas and trends. Help policymakers and organizations focus resources effectively.",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.30.06_f98efe83.jpg-zOD0MreBfNPfaDpvoMtAQY6EkmOYUc.jpeg",
    },
    {
      title: "Privacy & Security",
      description:
        "Adhere to GDPR and HIPAA standards to protect user data. Use encrypted channels for data transmission and secure storage.",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.30.45_ee8ba3cc.jpg-VykOXqnWEqI4ODzMsjbF6epgMoQzzg.jpeg",
    },
    {
      title: "Awareness & Education",
      description:
        "Provide resources to educate individuals and communities about early detection. Promote proactive health management through blogs and campaigns",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.28.21_ab0a7b30.jpg-jbeyZavbMTKZUFyB0rXMOApgc0Diz8.jpeg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/homehero.png"
          alt="Medical Technology Visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-2xl mb-6">
            AI-Powered Cancer Prediction Platform
          </h1>
          <p className="text-white text-xl max-w-2xl mb-8">
            Take control of your health with our advanced AI technology that helps detect early signs of cancer.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="bg-white text-[#0A4958] hover:bg-gray-100">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="lg" className="bg-[#0A4958] hover:bg-[#0A4958]/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20116-jUpYno4GE0RQDvqU2LfGM2dL24ozJn.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/homemost.png"
                alt="Medical Team"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-500">THE MOST LEADING SOLUTION FOR YOU</h2>
              <p className="text-lg">
                Take Charge Of Your Health Today. Our AI-Powered Tool Provides Personalized Cancer Risk Assessments
                Based On Your Lifestyle, Genetics, And Medical History.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Check className="text-[#0A4958]" />
                  <span>Early Detection Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#0A4958]" />
                  <span>Personalized Risk Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#0A4958]" />
                  <span>24/7 Expert Support</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/sign-up">
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Create Account</Button>
                </Link>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-[#0A4958] text-[#0A4958]">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#0A4958] text-sm uppercase tracking-wider mb-2">Key To Health</p>
            <h2 className="text-4xl font-bold italic" style={{ fontFamily: "serif" }}>
              WHAT WE DO
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare AI Cases */}
      <section className="py-16 relative">
        <Image
          src="/images/our clients.png"
          alt="Wave Background"
          fill
          className="object-cover"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#0A4958] text-sm uppercase tracking-wider mb-2">RECENT CASE STUDIES</p>
              <h2 className="text-4xl font-bold"></h2>
            </div>
            <Link href="/sign-up">
              <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Today</Button>
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f590b29-58db-44b7-9f0f-dd82c8db60e8-gVH7scTzkvw4fIBMgEU9t4EKIwkVje.png"
              alt="Healthcare AI Cases"
              width={1906}
              height={933}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative h-[400px]">
        <Image
          src="/images/contact us.png"
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-end px-4">
          <div className="max-w-lg text-white">
            <h2 className="text-4xl font-bold mb-4">Need Any Health Advices Related To Cancer</h2>
            <div className="flex gap-4">
              <Link href="/sign-up">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Create Account</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" className="bg-white text-[#0A4958] hover:bg-gray-100">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our%20team-gznXqgZSH41pLj9E7QnAewF6tqncY5.png"
            alt="Our Smart Team"
            width={400}
            height={100}
            className="mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2002.28.27_fa3db62c%201-WNarVreyCSIKx4QzSBExR5Vnsca8Ay.png"
              alt="AI Healthcare Interface"
              width={1077}
              height={609}
              className="object-contain h-[609] w-[1077]"
            />
            <Image
              src="/images/homelast.png"
              alt="AI Team Visualization"
              width={1077}
              height={609}
              className="object-contain h-[609] w-[1077]"
            />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-8 bg-[#0A4958]">
        <div className="container mx-auto px-4">
          <Image
            src="/images/Oncologers.png"
            alt="Oncologers Button"
            width={300}
            height={60}
            className="mx-auto cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
