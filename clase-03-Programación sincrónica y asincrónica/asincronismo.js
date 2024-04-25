console.log("Inicio del proceso");

function dos() {
  setTimeout(function () {
    // función async
    console.log("Dos");
  }, 0);
}

function uno() {
  setTimeout(function () {
    // función async
    console.log("Uno");
  }, 0);

  dos();

  console.log("Tres");
}

uno();

console.log("Fin del proceso");