if (!process.env.MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
  }

  const MONGODB_URI: string = process.env.MONGODB_URI

  /**
   * Global is used here to maintain a cached connection across hot reloads
   * in development. This prevents connections growing exponentially
   * during API Route usage.
   */
  declare global {
    var mongoose: { conn: null | typeof mongoose; promise: null | Promise<typeof mongoose> }
  }

  let cached = global.mongoose

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
  }

  async function dbConnect() {
    try {
      if (cached.conn) {
        console.log("Using cached MongoDB connection")
        return cached.conn
      }

      if (!cached.promise) {
        const opts = {
          bufferCommands: false,
        }

        console.log("Creating new MongoDB connection")
        cached.promise = mongoose.connect(MONGODB_URI, opts)
      }

      try {
        cached.conn = await cached.promise
        console.log("MongoDB connected successfully")
      } catch (e) {
        cached.promise = null
        console.error("MongoDB connection error:", e)
        throw e
      }

      return cached.conn
    } catch (error) {
      console.error("MongoDB connection error:", error)
      throw new Error("Failed to connect to MongoDB")
    }
  }

  // Add a connection error handler
  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error)
  })

  // Add a disconnection handler
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
  })

  // Add a successful connection handler
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully")
  })

  export default dbConnect

