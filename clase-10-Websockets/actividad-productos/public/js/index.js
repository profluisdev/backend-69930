// Lado del cliente
const socket = io();

const form = document.getElementById("form");
const productsList = document.getElementById("productsList");

// Enviamos el producto al servidor
form.onsubmit = (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const price = e.target.elements.price.value;
  const stock = e.target.elements.stock.value;

  const product = {
    title,
    price,
    stock,
  };

  socket.emit("product", product);
};

// Recibimos los productos actualizados
socket.on("products", (data) => {
  productsList.innerHTML = "";
  data.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>Título: ${product.title}</p>
    <p>Precio: ${product.price}</p>
    <p>Stock: ${product.stock}</p>
    `;

    productsList.append(div);

    const btn = document.createElement("button");
    btn.innerText = "Comprar";
    btn.onclick = () => {
        // Descontamos el valor del stock de a uno
        data[index].stock = data[index].stock - 1;
        // Enviar al servidor el array actualizado con el nuevo stock
        socket.emit("updateSock", data);
    }

    div.append(btn);


  });
});
