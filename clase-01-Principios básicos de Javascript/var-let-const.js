console.log("");
console.log("---------- var, let y const ----------");

// var, let y const y problemas de scope

function testVar() {
  var name = "Juan";
  if (true) {
    var name = "Pedro";
  }
  console.log("Valor de la variable var es: ", name);
}

function testLet() {
  let name = "Juan";
  if (true) {
    let name = "Pedro";
  }
  console.log("Valor de la variable let es: ", name);
}

function testConst() {
  const name = "Juan";
  if (true) {
    const name = "Pedro";
  }
  console.log("Valor de la variable const es: ", name);
}

testVar();
testLet();
testConst();

console.log("");
console.log("---------- Mutabilidad de const ----------");

/* 
Las constantes no pueden ser reasignadas en su valor, pero no quiere
decir que no sean inmutables, si el valor de una constante es algo 
mutable como un array o un objeto, se pueden cambiar los valores 
internos de sus elementos.
*/

const luz = {
  id: 1,
  first_name: "Luz",
  last_name: "Escalante",
  age: 25,
  gender: "F",
};

// No se puede reasignar
// luz = "pepe" // TypeError: Assignment to constant variable.

// Mutamos las propiedades del objeto
luz.age = "25";

console.log(luz);

const nombres = [];
console.log(nombres);
nombres.push("Juan");
nombres.push("Pepe");
console.log(nombres);