import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Database Connected");
  } catch (error) {
    console.log(`Error Connecting to the MongoDB database ${error.message}`);
  }
};

export default connectToMongoDB;