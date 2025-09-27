import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/mateio`);
    console.log(`MongoDB connected ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1); // crash if db fails
  }
};

export default connectDB;
