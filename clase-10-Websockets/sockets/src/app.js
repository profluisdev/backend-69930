import express from "express";
import handlebars from "express-handlebars";
import _dirname from "./dirname.js";
import viewRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", _dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", viewRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

// Configuración de socket del lado del servidor

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  // Recibimos información en un evento, en el lado del servidor
  socket.on("message", (data) => {
    console.log(data);
  });

  // Mensaje para un socket individual, solo lo recibe un cliente
  socket.emit("socket-individual", "Este mensaje es socket individual");

  // Mensaje para todos menos el socket actual
  socket.broadcast.emit("socket-excluye-actual", "Este evento lo debería ver todos menos el socket actual que se envío el mensaje");

  // Mensaje para todos
  socketServer.emit("socket-todos", "Este mensaje lo deberían ver todos los sockets");
});
