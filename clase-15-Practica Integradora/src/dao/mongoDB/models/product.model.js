import mongoose from "mongoose";

const productCollection = "product";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  thumbnail: {
    type: Array,
    default: []
  },
  code: String,
  stock: Number,
  category: String,
  status: {
    type: Boolean,
    default: true
  }
})

export const productModel = mongoose.model(productCollection, productSchema);