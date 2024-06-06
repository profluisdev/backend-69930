import mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new mongoose.Schema({
  products: {
    type: Array,
    default: [],
  },
});

export const cartModel = mongoose.model(cartCollection, cartSchema);
