import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  steps: string[]
  imageUrl?: string
}

export function ServiceCard({ title, description, steps, imageUrl }: ServiceCardProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-[#0A4958] mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Learn More</Button>
        </div>
        <div className="flex justify-center">
          <Image
            src={
              imageUrl ||
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2082-dCyhzpheP09GOqODpPIKSm7qJzHeyJ.png"
            }
            alt={title}
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Step Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {steps.map((step, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-[#0A4958]/20 rounded-full"></div>
                <div className="absolute inset-4 bg-[#0A4958] rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{index + 1}</span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">STEP {index === 0 ? "ONE" : index === 1 ? "TWO" : "THREE"}</h4>
              <p className="text-gray-600">{step}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-[#0A4958] hover:bg-[#0A4958]/90">Get Started Now</Button>
      </div>
    </div>
  )
}

