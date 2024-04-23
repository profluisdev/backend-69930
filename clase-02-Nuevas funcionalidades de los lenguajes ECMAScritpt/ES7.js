console.log("");
console.log("---------- ES7 Exponencial y array includes ---------- ");
console.log("");

/* 
Se introduce el operador exponencial **, independizándose poco a poco de la librería Math.
Manejo de array includes. Éste nos permitirá saber si algún elemento existe dentro del arreglo.
*/

let numbers = [1,2,3,4,5,6,];

let numbersExponential = numbers.map( (number, index) => number**index) // 1**0, 2**1, 3**2

// console.log(numbersExponential);

let names = ["Juan", "Pedro", "Maria", "Jose"];

if(names.includes("Pedro")) {
  console.log("El nombre se encuentra en el array");
} else {
  console.log("El nombre no se encuentra en el array");
}

