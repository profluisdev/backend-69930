console.log("");
console.log("---------- Funciones tradicionales y funciones flechas ----------");

/* 
Las funciones son bloques de instrucciones que trabajan sobre un scope interno 
(conocido como scope local). Pueden encontrarse en su sintaxis básica o en su 
notación flecha.
*/

function sum(num1, num2) {
  console.log(num1 + num2);
}

const res = (num1, num2) => console.log(num1 - num2);

sum(5, 5);
res(20, 10);

// Funciones tradicionales con retorno
function showName(name) {
  return name;
}

console.log(showName("Pepe"));

const name = showName("Juan");
console.log(name);

// Funciones flecha con retorno

// const showLastName = (lastName) => {
//   return lastName;
// }

const showLastName = (lastName) => lastName;

console.log(showLastName("Sapo"));

const lastName = showLastName("Perez");
console.log(lastName);
