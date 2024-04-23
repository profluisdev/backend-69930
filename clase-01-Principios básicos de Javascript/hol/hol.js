let peopleEmpty = [];

let people = [
  { id: 1, first_name: "Luz", last_name: "Escalante", age: 25, gender: "F" },
  { id: 2, first_name: "Bruno", last_name: "Guerra", age: 18, gender: "M" },
  { id: 3, first_name: "Marisol", last_name: "Cadena", age: 23, gender: "M" },
  { id: 4, first_name: "Franco", last_name: "Chachagua", age: 30, gender: "M" },
];



function mostrarLista(lista) {
  // Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
  if (lista.length === 0) console.log("La lista está vacía");
  // Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso
  if (lista.length > 0) {
    lista.forEach((el) => {
      console.log(el);
    });
  }
  // Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
  console.log(`La longitud de la lista es: ${lista.length}`);
}

mostrarLista(peopleEmpty)
mostrarLista(people)
