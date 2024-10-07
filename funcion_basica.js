// En JavaScript, una función es un bloque de código diseñado para realizar una tarea específica o devolver un valor. 

// Las funciones permiten agrupar un conjunto de instrucciones que se pueden reutilizar en diferentes partes del programa. 

// Además, pueden aceptar parámetros para personalizar su comportamiento y devolver un valor cuando se ejecutan.

// Partes de una función en JavaScript:

// Declaración: Se define la función con la palabra clave function, seguida de un nombre, parámetros opcionales entre paréntesis, y el bloque de código entre llaves {}.

// Parámetros: Son variables que se pasan a la función y permiten que ésta opere con valores externos. Se colocan entre paréntesis tras el nombre de la función.

// Bloque de código: Es el conjunto de instrucciones que se ejecutan cuando se llama a la función.

// Return: La palabra clave return puede usarse dentro de la función para devolver un valor. Si no se especifica return, la función devuelve undefined por defecto.

//  EJEMPLO BASICO

// Declaración de la función
function saludar(nombre) {
    return "Hola, " + nombre + "!";
  }
  
  // Llamada a la función
  console.log(saludar("Juan")); // Resultado: "Hola, Juan!"

// La función anterior se llama saludar. Acepta un parámetro llamado nombre. Devuelve un saludo personalizado.
  
// Estructura de una funcion

function nombreDeLaFuncion(parámetros) {
    // Bloque de código que realiza una tarea
    return valor; // (Opcional) Devuelve un valor
}

// Definir una función que sume dos números
function sumar(a, b) {
    return a + b; // Devuelve la suma de los dos parámetros
}

// Llamar a la función y guardar el resultado en una variable
let resultado = sumar(5, 3); // "5" y "3" son los valores pasados a 'a' y 'b'

console.log(resultado); // Resultado: 8

let suma1 = sumar(2, 3);  // Resultado: 5
let suma2 = sumar(10, 20); // Resultado: 30
let suma3 = sumar(7, 8);  // Resultado: 15

console.log(suma1, suma2, suma3);




