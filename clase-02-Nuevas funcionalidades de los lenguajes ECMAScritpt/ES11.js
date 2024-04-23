console.log("");
console.log("---------- ES11 Nullish y Variables privadas en clases ---------- ");
console.log("");

/* 
Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, a diferencia del operador ||, éstas filtran “falseys”
Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.
*/

// Operador nullish
let variablePrueba = false;

let variableAsignable = variablePrueba || "Sin valor";

// console.log(variableAsignable);

let variableConNullish = variablePrueba ?? "Sin valor";
// console.log(variableConNullish);


// Variables privadas en las clases

class Persona {
  #nombreCompleto
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#nombreCompleto = `${this.nombre} ${this.apellido}`;
  }

  mostrarNombreCompleto() {
    console.log(this.#nombreCompleto);
  }
}


const persona1 = new Persona("Juan", "Perez");

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);

persona1.apellido = "Diaz";
console.log(persona1.apellido);

persona1.mostrarNombreCompleto();