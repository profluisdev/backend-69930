import fs from "fs";

/* 
Las principales operaciones que podemos hacer con fs síncrono son:
writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
readFileSync = Para obtener el contenido de un archivo.
appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
existsSync = Corrobora que un archivo exista!
*/

let path = "./test.txt";

// Crear un archivo con un texto
fs.writeFileSync(path, "Este es un texto de prueba");

// Chequeamos si existe el archivo
if (fs.existsSync(path)) {
  // En caso de que el archivo exista vamos a leer los datos del mismo
  let mensaje = fs.readFileSync(path, "utf-8"); // utf-8 es el tipo de codificación que usamos para leer el archivo
  console.log(`Mensaje: ${mensaje}`);

  // Colocar un texto a al final de un archivo, en caso de que el archivo no exista lo creara
  fs.appendFileSync(path, "\n - Otro mensaje de prueba");
  mensaje = fs.readFileSync(path, "utf-8");
  console.log(`Mensaje: ${mensaje}`);

  // Eliminar el archivo
  fs.unlinkSync(path)
}
