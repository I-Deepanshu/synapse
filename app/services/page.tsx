import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2080-8amO80NziaRUMkYSGPmdFk6Y3yVmyG.png"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A4958]/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">OUR SERVICES</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comprehensive%20Cancer%20Screening%2C%20Simplified-a2ABpiAW7jRl9UnfBVKxvPgacAUI9c.png"
              alt="Comprehensive Cancer Screening, Simplified"
              width={1000}
              height={100}
              className="mx-auto mb-6"
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Insight Onco provides cutting-edge AI-powered cancer screening services to help detect early signs of
              various cancers. Our technology makes it easy to assess your risk factors and get personalized
              recommendations from the comfort of your home.
            </p>
            <Link href="/sign-up">
              <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90 mt-6">Get Started Today</Button>
            </Link>
          </div>

          {/* Oral Cancer Screening */}
          <div className="mb-16" id="oral-cancer">
            <h2 className="text-2xl font-bold text-[#0A4958] mb-6">Oral Cancer Screening Test</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Our advanced AI technology analyzes oral images to detect potential signs of cancer early. Quick,
                  non-invasive, and accurate screening from the comfort of your home.
                </p>
                <Link href="/services/oral-cancer">
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Learn More</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/oral.png"
                  alt="AI Healthcare Robot"
                  width={430}
                  height={750}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP ONE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You Some Questionaire, And Accoridng To Your Symptoms You Have To Answer Those
                  Question Correctly.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP TWO</h4>
                <p className="text-gray-600">
                  According To The Questionaire, Our AI Will Check And Detect Your Results
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP THREE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You The Results Accordingly To The Questionaire And It Will Consult You If You Have
                  Any Positive Symptoms Of Oral Cancer In Your Test Results
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/services/oral-cancer">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Now</Button>
              </Link>
            </div>
          </div>

          {/* Skin Cancer Screening */}
          <div className="mb-16" id="skin-cancer">
            <h2 className="text-2xl font-bold text-[#0A4958] mb-6">Skin Cancer Screening Test</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Early detection of skin abnormalities using advanced image analysis. Upload photos of concerning areas
                  for immediate AI-powered assessment.
                </p>
                <Link href="/services/skin-cancer">
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Learn More</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/skin.png"
                  alt="Skin Cancer Screening"
                  width={430}
                  height={750}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP ONE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You Some Questionaire, And Accoridng To Your Symptoms You Have To Answer Those
                  Question Correctly.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP TWO</h4>
                <p className="text-gray-600">
                  According To The Questionaire, Our AI Will Check And Detect Your Results
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP THREE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You The Results Accordingly To The Questionaire And It Will Consult You If You Have
                  Any Positive Symptoms Of Skin Cancer In Your Test Results
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/services/skin-cancer">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Now</Button>
              </Link>
            </div>
          </div>

          {/* Lung Cancer Screening */}
          <div className="mb-16" id="lung-cancer">
            <h2 className="text-2xl font-bold text-[#0A4958] mb-6">Lung Cancer Screening Test</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Complete our comprehensive questionnaire for an AI-powered analysis of your lung cancer risk factors.
                </p>
                <Link href="/services/lung-cancer">
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Learn More</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/lung.png"
                  alt="Lung Cancer Screening"
                  width={430}
                  height={750}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP ONE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You Some Questionaire, And Accoridng To Your Symptoms You Have To Answer Those
                  Question Correctly.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP TWO</h4>
                <p className="text-gray-600">
                  According To The Questionaire, Our AI Will Check And Detect Your Results
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP THREE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You The Results Accordingly To The Questionaire And It Will Consult You If You Have
                  Any Positive Symptoms Of Lung Cancer In Your Test Results
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/services/lung-cancer">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Now</Button>
              </Link>
            </div>
          </div>

          {/* Cervical Cancer Screening */}
          <div className="mb-16" id="cervical-cancer">
            <h2 className="text-2xl font-bold text-[#0A4958] mb-6">Cervical Cancer Screening Test</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Advanced screening using AI technology to detect early signs of cervical abnormalities.
                </p>
                <Link href="/services/cervical-cancer">
                  <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Learn More</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/cervical.png"
                  alt="Cervical Cancer Screening"
                  width={430}
                  height={750}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP ONE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You Some Questionaire, And Accoridng To Your Symptoms You Have To Answer Those
                  Question Correctly.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP TWO</h4>
                <p className="text-gray-600">
                  According To The Questionaire, Our AI Will Check And Detect Your Results
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">STEP THREE</h4>
                <p className="text-gray-600">
                  Our AI Will Give You The Results Accordingly To The Questionaire And It Will Consult You If You Have
                  Any Positive Symptoms Of Cervical Cancer In Your Test Results
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/services/cervical-cancer">
                <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0A4958] flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Accurate and early detection of potential cancer risks</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0A4958] flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Convenient at-home screening without hospital visits</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0A4958] flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Personalized health insights based on your specific data</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0A4958] flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p>Secure and confidential handling of all health information</p>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2081-x9herKnoENrGC4sU9IUxWJE8JEtY17.png"
                alt="Customer Benefits"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
