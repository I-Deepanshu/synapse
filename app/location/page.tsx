"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/contact.png)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-6xl font-bold tracking-tight">OUR LOCATION</h1>
        </div>
      </section>

      {/* Map and Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.622238964236!2d77.0075373!3d28.9726247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db0f4f4abf9a9%3A0x5eda6c2a2b467b61!2sDAV%20Multipurpose%20Public%20School!5e0!3m2!1sen!2sin!4v1708808051026!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A4958] flex items-center justify-center">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">ITI CHOWK, Sonipat, Haryana 131001</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A4958] flex items-center justify-center">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">INFO.INSIGHTONCO@GMAIL.COM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A4958] flex items-center justify-center">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 90348 45195</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
