"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B47C86D0A-7A8A-462D-9FD9-92CA04EDB901%7D@2x-57r5Homg92TO8H9TFHuUH9BuhkH9YD.png"
              alt="Insight Onco Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Insight%20Onco-hYwDUG3j6c2nvf2byMnIceozr5npzs.png"
              alt="Insight Onco"
              width={200}
              height={50}
              className="h-8 w-auto hidden md:block"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#0A4958]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-[#0A4958]">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0A4958]">
              Services
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-[#0A4958]">
              Amenities
            </Link>
            <Link href="/why-us" className="text-gray-700 hover:text-[#0A4958]">
              Why Us ?
            </Link>
            <Link href="/location" className="text-gray-700 hover:text-[#0A4958]">
              Contact Us
            </Link>
            {user ? (
              <>
                <span className="text-[#0A4958]">Welcome, {user.name}</span>
                <Button
                  variant="outline"
                  className="border-[#0A4958] text-[#0A4958] hover:bg-[#0A4958] hover:text-white"
                  onClick={signOut}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button
                    variant="outline"
                    className="border-[#0A4958] text-[#0A4958] hover:bg-[#0A4958] hover:text-white"
                  >
                    Sign in
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-[#0A4958] text-white hover:bg-[#0A4958]/90">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-[#0A4958]">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-[#0A4958]">
              Services
            </Link>
            <Link href="/amenities" className="block text-gray-700 hover:text-[#0A4958]">
              Amenities
            </Link>
            <Link href="/why-us" className="block text-gray-700 hover:text-[#0A4958]">
              Why Us ?
            </Link>
            <Link href="/location" className="block text-gray-700 hover:text-[#0A4958]">
              Contact Us
            </Link>
            {user ? (
              <>
                <span className="block text-[#0A4958]">Welcome, {user.name}</span>
                <Button
                  variant="outline"
                  className="w-full border-[#0A4958] text-[#0A4958] hover:bg-[#0A4958] hover:text-white"
                  onClick={signOut}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link href="/sign-in" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#0A4958] text-[#0A4958] hover:bg-[#0A4958] hover:text-white"
                  >
                    Sign in
                  </Button>
                </Link>
                <Link href="/sign-up" className="block">
                  <Button className="w-full bg-[#0A4958] text-white hover:bg-[#0A4958]/90">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

