class ProductManager {

  constructor( ) {
    this.products = [];
  }

  addProduct(product) {

    const { title, description, price, thumbnail, code, stock } = product;

    const newProduct = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    // verificar que no se repita el code
    const productExist = this.products.find( product => product.code === code );
    if(productExist) throw new Error("Ya existe un producto con ese código");

    // verificar que todos los campos sean obligatorios
    if(Object.values(newProduct).includes(undefined)) throw new Error("Todos los campos son obligatorios");

    // Agregamos el producto al array
    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {

    const product = this.products.find( product => product.id === id);

    if(!product) throw new Error("Not found");

    console.log(product);

  }
}


const product1 = new ProductManager();

product1.addProduct({
  title: "Producto 1",
  description: "Descripción del producto 1",
  price: 100,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC123",
  stock: 10,
})

product1.addProduct({
  title: "Producto 2",
  description: "Descripción del producto 2",
  price: 200,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
  code: "ABC124",
  stock: 10,
})

// product1.addProduct({
//   title: "Producto 2",
//   description: "Descripción del producto 2",
//   price: 200,
//   thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png",
//   stock: 10,
// })

// product1.getProducts();

product1.getProductById(3)