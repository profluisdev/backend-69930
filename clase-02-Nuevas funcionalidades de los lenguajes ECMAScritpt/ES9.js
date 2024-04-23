console.log("---------- ES9 Operadores rest y spreed ---------- ");
console.log("");
/* 
Las principales funcionalidades de este release son:
Resolvedores de promesas con .finally(), para atender una promesa, se cumpla o no se cumpla. (Lo veremos más adelante)
Mayor control a los objetos con operadores rest y spread (aplicable también a arrays)
*/


//Operador spreed

let objet1= {
  prop1: 1,
  prop2: 2
};

let objet2 = {
  ...objet1,  // el operado spreed hace una copia de las propiedades del objeto
  prop2: 3
}

let objet3 = {
  prop3: 3,
  ...objet2,
}

// console.log(objet1);
// console.log(objet2);
// console.log(objet3);

// Operador rest

const user = {
  id: 1,
  email: "jp@gmail.com",
  age: 25,
  password: "123"
};

const { password, ...userData} = user;
// const { password, age } = user;

console.log(userData);