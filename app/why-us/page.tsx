import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full h-[400px] relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2069-Yf6mHUlhRENHjDtQ6PJAUk9ZpD7InW.png"
          alt="Medical team collaboration"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-[#0A4958] text-center text-2xl mb-16">OUR PHILOSOPHY</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="border border-[#0A4958] rounded-lg p-8">
              <p className="text-lg mb-4">We Use The Latest Diagnostic AI Models</p>
              <p className="text-gray-600 mb-6">Expert Guidance, Anytime You Need It</p>
              <Link href="/location">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90 text-white">Contact Us</Button>
              </Link>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-18%20at%2000.00.49_db47f6a2%201-BxKu6H4VttaLMUmHnoR3KZsWeDFvMi.png"
                alt="Doctor patient consultation"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2072-q0tIll5wqgLSZfxdHbTVFMXaRrXNbj.png"
                alt="Professional doctor"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#0A4958] mb-4">OUR BENEFITS</p>
          <h2 className="text-4xl font-bold mb-16">WHY YOU CHOOSE IO?</h2>
          <div className="flex justify-center items-center gap-16">
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2076-US91ujbVfRwt5PaQ88WRx8V7HvSpjz.png"
                alt="Medical assessment"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>Accurate Symptom Assessment</p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2073-TyfwVz87ULmO7WZEQr66KgxFTKs7Nm.png"
                alt="Secure"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>Confidential & Secure</p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2074-Mkyo0H8lliAVT5YyoHHgzleiF9WYVn.png"
                alt="User friendly"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>User-Friendly Experience</p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2075-dt2JWSsX2i0HjvTlqNBYCKENvK6TFI.png"
                alt="Global access"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>Global Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="text-[#0A4958] mb-2">WHY</p>
              <h2 className="text-4xl mb-8">CHOOSE US</h2>
              <h3 className="text-[#0A4958] text-2xl mb-12">SOLUTION</h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">01. WHAT SHOULD I INCLUDE IN MY PERSONAL DETAILS?</h4>
                  <p className="text-gray-600">
                    YOU ARE REQUIRED TO ENTER YOUR BASIC DETAILS SUCH AS YOUR NAME, AGE, GENDER, CONTACT INFORMATION,
                    HEALTH HISTORY, MEDICINES AND PREVIOUS CONSULTATION OR TREATMENTS, AND CURRENT SYMPTOMS.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">02. HOW WELL TRAINED ARE OUR MODELS?</h4>
                  <p className="text-gray-600">
                    OUR MODELS ARE HIGHLY TRAINED, LEVERAGING THE LATEST ADVANCEMENTS IN AI AND MEDICAL RESEARCH TO
                    PROVIDE ACCURATE SYMPTOM ASSESSMENT.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">03. HOW ACCURATE ARE OUR RESULTS?</h4>
                  <p className="text-gray-600">
                    OUR RESULTS ARE HIGHLY ACCURATE, POWERED BY ADVANCED AI MODELS AND MACHINE LEARNING ALGORITHMS.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <Image
                src="/images/why1.png"
                alt="AI Healthcare Solutions 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/why2.png"
                alt="AI Healthcare Solutions 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/why3.png"
                alt="AI Healthcare Solutions 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/why4.png"
                alt="AI Healthcare Solutions 2"
                width={300}
                height={300}
                className="rounded-lg"
              />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
