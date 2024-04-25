
console.log("Inicio del proceso");

function dos() {
  console.log("Dos");
}

function uno(){
  console.log("Uno");
  dos();

  console.log("Tres");
}

uno();

console.log("Fin del proceso");