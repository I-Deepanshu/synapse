import mongoose from "mongoose"

export interface ITestResult extends mongoose.Document {
  userId: mongoose.Types.ObjectId
  testType: string
  answers?: Record<string, any>
  imageUrl?: string
  result: {
    risk: string
    confidence?: number
    details?: string
  }
  createdAt: Date
}

const TestResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testType: {
    type: String,
    required: true,
    enum: ["oral-cancer", "skin-cancer", "lung-cancer", "cervical-cancer"],
  },
  answers: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
  },
  imageUrl: {
    type: String,
  },
  result: {
    risk: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
    },
    details: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.TestResult || mongoose.model<ITestResult>("TestResult", TestResultSchema)

