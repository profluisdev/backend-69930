import express from "express";
import handlebars from "express-handlebars";
import _dirname from "./dirname.js";
import viewRoutes from "./routes/views.routes.js";
import studentRoutes from "./routes/students.routes.js";
import { connectMongoDB } from "./config/mongoDb.config.js";
const PORT = 8080;
const app = express();

// Ejecutar la conexión de mongo
connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", _dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", viewRoutes);
app.use("/student", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
