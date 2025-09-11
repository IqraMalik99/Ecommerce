import mongoose from "mongoose";

const URL = process.env.MONGODB_URI!;
if (!URL) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

export async function dbConnect() {
  try {
    if (cached.con) return cached.con;

    if (!cached.promise) {
      cached.promise = mongoose.connect(URL).then(() => mongoose.connection);
    }

    cached.con = await cached.promise;
    return cached.con;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}
