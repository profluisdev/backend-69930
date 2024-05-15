import express from "express";
import router from "./router/index.routes.js";
import __dirname from "./dirname.js"

const PORT = 8080;
const app = express();

// Middlewares: son operaciones que se ejecutan de manera intermedia entre la petición del cliente, y el servicio de nuestro servidor. 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/static",express.static("public"));// Configuración de carpeta para archivos estáticos

// Es importante que los middlewares se ejecuten antes de las rutas

// Rutas
app.use("/api", router);

// __dirname + router = C:\Users\Profe\Documents\repos-comisiones\backend\backend-69930\clase-08-Router y Multer\express-router\src\router
// C:\Users\Profe\Documents\repos-comisiones\backend\backend-69930\clase-08-Router y Multer\express-router\src



app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})