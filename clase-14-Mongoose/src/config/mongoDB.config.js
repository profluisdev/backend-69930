import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect("mongodb+srv://admin:123@coder69930.6cibtei.mongodb.net/clase14");
    console.log("Mongo DB connected");
  } catch (error) {
    console.log(`${error}`);
  
  }
};
