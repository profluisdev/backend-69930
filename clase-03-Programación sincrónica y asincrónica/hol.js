
const suma = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a + b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else {
      resolve(a + b);
    }
  });
};

const resta = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a - b === 0) {
      reject("Operación inválida");
    } else if (a - b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else if (!a || !b) {
      reject("Se deben completar todos los datos");
    }
     else {
      resolve(a - b);
    }
  });
};

const multiplicacion = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Solo se admiten números positivos");
    } else if (a * b < 0) {
      reject("La calculadora solo debe devolver números positivos");
    } else {
      resolve(a * b);
    }
  });
};

const division = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede hacer divisiones entre 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

const calculo = async (operacion, num1, num2) => {
  
  try {

    let resultado;
    switch (operacion) {
      case "suma": 
        resultado = await suma(num1, num2);
        console.log(resultado);
        break;
      case "resta": 
        resultado = await resta(num1, num2);
        console.log(resultado);
        break;
      
      case "multiplicacion": 
        resultado = await multiplicacion(num1, num2);
        console.log(resultado);
        break;
      case "division": 
        resultado = await division(num1, num2);
        console.log(resultado);
        break;
    
      default:
        console.log("No es un tipo de operación válida");
        break;
    }
    
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// calculo("suma", 0, 0);
// calculo("resta", 20, 10);
// calculo("multiplicacion", 20, 10);
// calculo("division", 20, 10);
// calculo("cualquiera", 20, 10);