import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"

export async function GET() {
  try {
    await dbConnect()
    return NextResponse.json({ status: "ok", message: "MongoDB connection successful" }, { status: 200 })
  } catch (error) {
    console.error("Health check failed:", error)
    return NextResponse.json({ status: "error", message: "MongoDB connection failed" }, { status: 500 })
  }
}

