import mongoose from "mongoose"

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

const MONGODB_URI: string = process.env.MONGODB_URI

declare global {
  var mongoose: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null }
}

// Use globalThis to maintain a cached connection across hot reloads in development
let cached: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } =
  globalThis.mongoose || { conn: null, promise: null }

globalThis.mongoose = cached

async function dbConnect() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection")
    return cached.conn
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection")

    const opts = { bufferCommands: false }
    cached.promise = mongoose.connect(MONGODB_URI, opts)
  }

  try {
    cached.conn = await cached.promise
    console.log("MongoDB connected successfully")
  } catch (e) {
    cached.promise = null
    console.error("MongoDB connection error:", e)
    throw new Error("Failed to connect to MongoDB")
  }

  return cached.conn
}

// Ensure event listeners are added only once
if (!mongoose.connection.listeners("error").length) {
  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error)
  })
}

if (!mongoose.connection.listeners("disconnected").length) {
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
  })
}

if (!mongoose.connection.listeners("connected").length) {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully")
  })
}

export default dbConnect
