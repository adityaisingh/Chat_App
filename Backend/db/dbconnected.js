import mongoose from "mongoose";

const connectTomongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Mongoose");
  } catch (error) {
    console.log("Error connecting to Mongoose");
  }
};

export default connectTomongodb;
