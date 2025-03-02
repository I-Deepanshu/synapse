import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A4958] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B47C86D0A-7A8A-462D-9FD9-92CA04EDB901%7D@2x-57r5Homg92TO8H9TFHuUH9BuhkH9YD.png"
              alt="Insight Onco Logo"
              width={150}
              height={150}
              className="w-32 h-32"
            />
            <p className="text-sm">
              Where the care is crafted for you,
              <br />
              and the kindness comes from the heart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/amenities">Amenities</Link>
              </li>
              <li>
                <Link href="/why-us">Why Us ?</Link>
              </li>
              <li>
                <Link href="/location">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91 90348 45195</li>
              <li>Email: info.insightonco@gmail.com</li>
              <li>ITI CHOWK, SONIPAT, HARYANA</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow us on:</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
