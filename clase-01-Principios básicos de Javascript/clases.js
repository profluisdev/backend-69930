class Person {
  // El constructor es el método (función) que se ejecuta al instanciar una clase
  constructor(name, lasName, age) {
    /* 
    Los atributos de la clase son variables internas, que se le puede asignar un valor inicial por defecto o 
    asignarle un valor al momento de instanciar una clase, se le antepone la palabra this para determinar que 
    la variable que pertenece a la clase.
    */
    this.name = name; // Variable que se le asigna un valor que llega por parámetros al momento de instanciar.
    this.lasName = lasName;
    this.age = age;
    this.active = true; // Variable inicializada por defecto en true.
  }

  /* 
Las propiedades estáticas están asociadas a la clase y no al objeto que se instancia, 
por lo tanto podemos acceder y modificar las propiedades estáticas sin la necesidad 
de instanciar una clase.
*/
  static species = "Humano";

  // Métodos - Son funciones que se pueden llamar luego de instanciar una clase
  showPerson() {
    console.log(
      `El nombre de la persona es ${this.name} ${this.lasName} tiene la edad de ${this.age} años`
    );
  }
}

let miguel = new Person("Miguel", "Diaz", 22);
console.log(miguel);
miguel.showPerson();

miguel.age = 30;

miguel.showPerson();

let juan = new Person("Juan", "Perez", 44);
juan.showPerson();

juan.age = 34;

juan.showPerson();

console.log(Person.species);
