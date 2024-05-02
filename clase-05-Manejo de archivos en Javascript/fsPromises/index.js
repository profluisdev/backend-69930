import fs from "fs";

/* 
fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.promises.readFile  = Para obtener el contenido de un archivo.
fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

let path = "./test.txt"

const asyncOperation = async () => {
  try {

    // Escribir un archivo
    await fs.promises.writeFile(path, "Mensaje 1");

    // Leer el archivo y lo almacenamos en una variable al contenido del archivo
    let mensaje = await fs.promises.readFile(path, "utf-8");
    console.log(`Mensaje: ${mensaje}`);

    // Le agregamos texto al archivo
    await fs.promises.appendFile(path, " - Mensaje 2");
    mensaje = await fs.promises.readFile(path, "utf-8");
    console.log(`Mensaje Actualizado: ${mensaje}`);
    
    // Eliminar el archivo
    await fs.promises.unlink(path);
  } catch (error) {
    console.log(error);
  }

}

asyncOperation();