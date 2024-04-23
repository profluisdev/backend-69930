console.log("");
console.log("---------- ES10 String.trim(), Array.flat() ---------- ");
console.log("");

/* 
String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
*/

// String.trim()

let cadena = "            Hola  ";
// console.log(cadena);
// console.log(cadena.length);

// console.log(cadena.trim());
// console.log(cadena.trim().length);

let cadena2= "    hola    mundo  ";
// console.log(cadena2.trim());
// console.log(cadena2.trim().length);

// Array flat
let array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];
console.log(array);

console.log(array.flat());




