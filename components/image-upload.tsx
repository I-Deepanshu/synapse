"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, RefreshCw } from "lucide-react"

interface ImageUploadProps {
  onImageSelected: (imageUrl: string) => void
  onReset: () => void
  imagePreview: string | null
}

export function ImageUpload({ onImageSelected, onReset, imagePreview }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageSelected(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      {!imagePreview ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 mb-2">Click to upload an image</p>
          <p className="text-gray-400 text-sm">JPG, PNG or GIF (Max 5MB)</p>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
            <Image src={imagePreview || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" onClick={onReset} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Upload New Image
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

