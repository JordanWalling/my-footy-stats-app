import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState == 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
