import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(request: Request) {
    try {
      await dbConnect()

      let requestBody;
      try {
        requestBody = await request.json()
      } catch (error) {
        return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
      }

      const { name, email, password } = requestBody

      if (!name || !email || !password) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists" }, { status: 400 })
      }

      // Create new user
      const user = await User.create({ name, email, password })

      // Return user without password
      const userWithoutPassword = { _id: user._id, name: user.name, email: user.email }

      return NextResponse.json({ user: userWithoutPassword }, { status: 201 })
    } catch (error: any) {
      console.error("Registration error:", error)

      return NextResponse.json(
        { error: error.message || "Failed to register user" },
        { status: 500 }
      )
    }
  }
