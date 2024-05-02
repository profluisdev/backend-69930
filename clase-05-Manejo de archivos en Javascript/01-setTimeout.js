const temporizador = (callback) => {
    setTimeout( () => {
        callback(); // operacion()
    }, 5000 )    
}

const operacion = () => console.log("Realizando operación");

console.log("Iniciando Tarea");

temporizador(operacion);

console.log("Tarea finalizada");