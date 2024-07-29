import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;

export default async function db_connect() {
  try {
    db_connect = await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    return db_connect;
  } catch (err) {}
}
