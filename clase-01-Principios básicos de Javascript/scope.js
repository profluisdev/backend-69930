console.log("");
console.log("---------- Scope ----------");

const x = "Declaro X fuera de la función"; // Variable global

function example() {
  const x = "Declaro X dentro de la función"; // Variable local
  console.log(x);
}

example();
console.log(x);

const y = "Declarado Y fuera de la función"; // Variable global

function example2() {
  console.log(y);
}

example2();
console.log(y);
