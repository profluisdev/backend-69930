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
app.use(express.json()); // Esto permite que nuestro servidor pueda interpretar archivos json

let users = [];

app.get("/api/user", (req, res) => {
  res.status(200).json({ status: "success", payload: users });
});

app.post("/api/user", (req, res) => {
  // Obtener el cuerpo del body
  let user = req.body;

  // Controlamos que el cliente envíe si o si la edad sino le devolvemos una respuesta de erro
  if (!user.age) return res.status(400).json({ status: "Error", msg: "Debe ingresar la edad" });

  users.push(user);

  res.status(200).json({ status: "success", payload: user });
});

app.put("/api/user/:email", (req, res) => {

  const { email } = req.params;

  let dataUser = req.body;

  let index = users.findIndex( user => user.email === email );
  if(index === -1) return res.status(404).json({ status: "Error", msg: "No se encuentra el usuario" });

  users[index] = {
    ...users[index], // hacemos una copia completa del mismo usuario
    ...dataUser // sobre escribimos la data actualizada que recibimos del body 
  }

  res.status(200).json({ status: "success", payload:users[index] });
  
})

app.delete("/api/user/:email", (req, res) => {
  const { email } = req.params;

  let index = users.findIndex( user => user.email === email );
  if(index === -1) return res.status(404).json({ status: "Error", msg: "No se encuentra el usuario" });

  users = users.filter(user => user.email !== email);

  res.status(200).json({ status: "success", msg: "Usuario eliminado con éxito" })

})

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
