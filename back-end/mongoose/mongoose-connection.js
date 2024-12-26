import mongoose from "mongoose";
import "dotenv/config";
export const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connection successful");
  } catch (error) {
    console.log("Mongoose connection error", error);
    console.log("connection Failed");
  }
};
