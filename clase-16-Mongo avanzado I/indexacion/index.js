
import mongoose from "mongoose";
import { userModel } from "./user.model.js";

const environment = async () => {
  await mongoose.connect("mongodb+srv://admin:123@coder69930.6cibtei.mongodb.net/clase16");
  const response = await userModel.find({ first_name: "Celia"}).explain("executionState");
  console.log(response);
}

environment();