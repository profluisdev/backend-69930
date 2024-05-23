import express from "express";
import handlebars from "express-handlebars";
import _dirname from "./dirname.js";
import viewRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const PORT = 8081;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de handlebars
app.engine("handlebars", handlebars.engine()); // Inicia el motor del la plantilla
app.set("views", _dirname + "/views"); // Indicamos que ruta se encuentras las vistas
app.set("view engine", "handlebars"); // Indicamos con que motor vamos a utilizar las vistas
app.use(express.static("public"));
app.use("/", viewRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

let messages = [];

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("Nuevo usuario conectado");
  socket.on("message", (data) => {
      messages.push(data);
      socketServer.emit("messageLog", messages);
  })

  socket.on("newUser", (data) => {
      socket.broadcast.emit("newUser", data);
  })
});
