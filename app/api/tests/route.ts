import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import TestResult from "@/models/TestResult"
import { auth } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const { testType, answers, imageUrl, result } = await request.json()

    const testResult = await TestResult.create({
      userId: session.user.id,
      testType,
      answers: answers || undefined,
      imageUrl: imageUrl || undefined,
      result,
    })

    return NextResponse.json({ success: true, testResult }, { status: 201 })
  } catch (error) {
    console.error("Test result save error:", error)
    return NextResponse.json({ error: "Failed to save test result" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const session = await auth()

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const { searchParams } = new URL(request.url)
    const testType = searchParams.get("testType")

    const query = { userId: session.user.id }
    if (testType) {
      query.testType = testType
    }

    const testResults = await TestResult.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ testResults })
  } catch (error) {
    console.error("Test results fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch test results" }, { status: 500 })
  }
}

