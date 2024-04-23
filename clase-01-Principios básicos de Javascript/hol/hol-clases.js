class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contadorIndividual = 0;
  }
  static contador = 0;

  getResponsable() {
    console.log(`El responsable del contador es ${this.nombre}`);
  }

  contar() {
    // Aumentamos el valor del contador Global
    Contador.contador++;
    // Aumentamos el valor del contador individual
    this.contadorIndividual++;
  }

  getCuentaIndividual() {
    console.log(`El contador de ${this.nombre} es ${this.contadorIndividual}`);
  }

  getCuentaGlobal() {
    console.log(`El contador global es ${Contador.contador}`);
  }
}

let pepe = new Contador("Pepe");
pepe.contar();
pepe.contar();
pepe.contar();
pepe.getResponsable();
pepe.getCuentaIndividual();
pepe.getCuentaGlobal();

console.log("");
console.log("---------------------");
console.log("");

let juan = new Contador("Juan");
juan.contar();
juan.contar();
juan.contar();
juan.getResponsable();
juan.getCuentaIndividual();
juan.getCuentaGlobal();

console.log("");
console.log("---------------------");
console.log("");

let jose = new Contador("Jose");
jose.contar();
jose.contar();
jose.contar();
jose.getResponsable();
jose.getCuentaIndividual();
jose.getCuentaGlobal();
