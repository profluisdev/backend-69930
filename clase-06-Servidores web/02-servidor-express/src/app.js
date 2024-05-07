import express from "express";

// Inicializamos express y la variable app contendrá todas las funcionalidades de express
const app = express();

/* 
urlencoded nos permite que el servidor pueda interpretar mejor los datos complejos que viajen desde la url, 
y mapearlos correctamente en el req.query.
Es importante destacar que siempre tiene que ir por encima de las rutas, ya que es un middleware (ya veremos que es 
más adelante en el curso) que se ejecuta para procesar la información de los endpoints.
*/
app.use(express.urlencoded({ extended: true }));

// Apertura de un "Endpoint", en el cual el cliente va a realizar una petición http, en este caso una petición get
app.get("/saludo", (req, res) => {
  // Respuesta de nuestro servidor al cliente
  res.send("Mi primera respuesta del servidor con express");
});

// Actividad

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color:blue;">¡Bienvenido a mi primer servidor express!</h1>`);
});

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 33,
    correo: "jp@gmail.com",
  };

  res.send(usuario);
});

// req.params

// Petición GET con parámetros
app.get("/parametros/:nombre", (req, res) => {
  // Desestructurar el parámetro
  const { nombre } = req.params;

  res.send(`El nombre enviado por el cliente es ${nombre}`);
});

// Dos parámetros
app.get("/dosparametros/:nombre/:apellido", (req, res) => {
  const { nombre, apellido } = req.params;
  // Alternativa
  // const nombre = req.params.nombre;
  // const apellido = req.params.apellido;

  res.send(`El nombre completo es ${nombre} ${apellido}`);
});

// Actividad 2 - Usuarios

const usuarios = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54 },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33 },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21 },
];

// Mostrar todos los usuarios
app.get("/", (req, res) => {
  res.send(usuarios);
});

// Obtener un usuario por id
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params; // Los params siempre vienen como string

  // Buscar el usuario por id
  const usuario = usuarios.find((usuario) => usuario.id === Number(id));
  // Utilizamos el método Number() para transformar el parámetro recibido a formato numérico

  // En caso de que el usuario no exista, le respondemos con un mensaje de error
  if (!usuario) return res.send(`Erro: no se encuentra el usuario con el ID ${id}`);

  // En caso de que el usuario exista le respondemos al cliente con el usuario solicitado
  res.send(usuario);
});

// req.query

app.get("/queries", (req, res) => {
  // Obtenemos lo que el cliente ingrese por query ej: /queries?nombre=Juan
  // Para más de un dato se concatenan la query con un & ej: /queries?nombre=Juan&apellido=Perez&edad=30
  // const consultas = req.query;
  const {nombre, apellido, edad} = req.query;

  res.send({nombre, apellido, edad: Number(edad)});
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
