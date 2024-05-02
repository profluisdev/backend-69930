const contador = () => {
  let counter = 1;

  console.log("Realizando operación");

  let timer = setInterval(() => {
    console.log(counter++);
    if (counter > 5) {
      clearInterval(timer);
    }
  }, 1000);
};


console.log("Iniciar Tarea");

contador();

console.log("Tarea Finalizada");