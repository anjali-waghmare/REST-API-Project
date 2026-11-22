import mongoose from "mongoose";

let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

const connectDB = async () => {
  const MONGOURL = process.env.MONGO_URL;

  if (!MONGOURL) {
    console.error("MONGO_URL is missing in environment");
    return null;
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGOURL)
      .then((mongooseInstance) => {
        console.log("DB connected successfully");
        return mongooseInstance.connection;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("Database connection failed:", error.message);
        return null;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;