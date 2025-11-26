import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gadgetshop",  // এই প্রজেক্টের জন্য নতুন database নাম
    });

    console.log("Database connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};
