// OBJETOS

// En JavaScript, un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre o clave y un valor. 

// Los objetos en JavaScript permiten agrupar datos y funcionalidades en un solo bloque estructurado, lo que hace que sean fundamentales para trabajar con la programación orientada a objetos.

// IMPORTANTE!!

// Los objetos se definen utilizando llaves {} y dentro de ellas se pueden agregar propiedades y sus valores correspondientes, a diferencia de un array usa corchetes []

//  Ejemplo

// Definición de un objeto en JavaScript

const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  };

// Propiedades del objeto

// nombre, edad y profesion son propiedades del objeto persona. Cada propiedad tiene un valor asociado (en este caso, "Juan", 30 y "Desarrollador").

// La propiedad saludar es una función, también conocida como método, que utiliza la palabra clave this para referirse al propio objeto.

// Acceso a las propiedades del objeto

// Opcion 1 - Notación de punto:

console.log(persona.nombre); // "Juan"
console.log(persona.saludar()); // "Hola, mi nombre es Juan"

// Opcion 2 - Notación de corchetes:

console.log(persona["edad"]); // 30

// Modificar propiedades

persona.edad = 31;
console.log(persona.edad); // 31

// Agregar propiedades
persona.telefono = 123456789;
console.log(persona.telefono); // 123456789
console.log(persona)






  