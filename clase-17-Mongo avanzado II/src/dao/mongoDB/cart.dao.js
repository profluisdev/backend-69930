import { cartModel } from "./models/cart.model.js";
import { productModel } from "./models/product.model.js";

const getAll = async () => {
  const carts = await cartModel.find();
  return carts;
};

const getById = async (id) => {
  const cart = await cartModel.findById(id).populate("products.product");
  return cart;
};

const create = async () => {
  const cart = await cartModel.create({});

  return cart;
};

const update = async (id, data) => {
  const cartUpdate = await cartModel.findByIdAndUpdate(id, data, { new: true });
  return cartUpdate;
};

const deleteOne = async (id) => {
  const cart = await cartModel.deleteOne({ _id: id });
  return cart;
};

const addProductToCart = async (cid, pid) => {
  // Método 1
  // const productInCart = await cartModel.findOneAndUpdate({ _id: cid, "products.product": pid }, { $inc: { "products.$.quantity": 1 } });
  // /*
  // $inc: Este es el operador de incremento. Se utiliza para incrementar el valor de un campo numérico en la cantidad especificada.
  // "products.$.quantity":
  // products: es el nombre del array
  // $:  es el operador de posición. Representa el primer elemento del array que coincide con la condición especificada
  // en el filtro de la consulta. Básicamente, este operador selecciona el elemento correcto del array para la actualización.
  // quantity: es el campo del objeto dentro del array products cuyo valor queremos incrementar.
  // */

  // if (!productInCart) {
  //   await cartModel.updateOne({ _id: cid }, { $push: { products: { product: pid, quantity: 1 } } });
  // }

  // const cartUpdate = await cartModel.findById(cid);
  // return cartUpdate;

  // Método 2

  const cart = await cartModel.findById(cid);

  const productInCart = cart.products.find((element) => element.product == pid);
  if (productInCart) {
    productInCart.quantity++;
  } else {
    cart.products.push({ product: pid, quantity: 1 });
  }

  await cart.save(); // Guardamos los cambios realizado en la base de datos de mongo
  return cart;
};

const deleteProductToCart = async (cid, pid) => {
  const cart = await cartModel.findById(cid);

  cart.products = cart.products.filter((element) => element.product != pid);

  await cart.save();

  return cart;
};

const updateQuantityProductInCart = async (cid, pid, quantity) => {
  const cart = await cartModel.findById(cid);
  const product = cart.products.find( element => element.product == pid);
  product.quantity = quantity;

  await cart.save();
  return cart;
}

const clearProductsToCart = async (cid) => {

  const cart = await cartModel.findById(cid);
  cart.products = []

  await cart.save()

  return cart;
  
}
export default {
  getAll,
  getById,
  create,
  update,
  deleteOne,
  addProductToCart,
  deleteProductToCart,
  updateQuantityProductInCart,
  clearProductsToCart
};
