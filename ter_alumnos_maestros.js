// Creación de objetos para los alumnos
const alumno1 = { nombre: "Juan", edad: 15, grado: "10", promedio: 8.5 }; // Objeto que representa un alumno con sus propiedades
const alumno2 = { nombre: "María", edad: 16, grado: "11", promedio: 9.2 };
const alumno3 = { nombre: "Carlos", edad: 15, grado: "10", promedio: 7.9 };

// Creación de objetos para los maestros
const maestro1 = { nombre: "Sra. Martinez", asignatura: "Matemáticas", antiguedad: 10 }; // Objeto que representa un maestro
const maestro2 = { nombre: "Sr. López", asignatura: "Historia", antiguedad: 5 };

// Almacenar los objetos en arrays
const alumnos = [alumno1, alumno2, alumno3]; // Array que contiene todos los objetos de alumnos
const maestros = [maestro1, maestro2]; // Array que contiene todos los objetos de maestros

// Ordenar alumnos por su promedio, de mayor a menor
alumnos.sort((a, b) => b.promedio - a.promedio); 
// Este método se utiliza para ordenar los elementos de un array in-place (modifica el array original) y devuelve el array ordenado. Los parámetros a y b son dos objetos (en este caso, objetos de tipo alumno) que se están comparando entre sí.

// b.promedio - a.promedio: Esto indica que estamos ordenando de mayor a menor.
// Si el promedio de b es mayor que el promedio de a, el resultado será un número positivo, lo que significa que b debe aparecer antes que a.
// Si el promedio de b es menor que el promedio de a, el resultado será un número negativo, y a aparecerá antes que b.
// Si son iguales, se devolverá 0, y su orden relativo no cambiará.

// Mostrar un solo alumno, el primero del array (con mejor promedio)
console.log("Alumno con mejor promedio:");
console.log(alumnos[0]); 
// Esto imprime el primer alumno del array 'alumnos', que ahora está ordenado por promedio (el mejor promedio es el primero).

// Filtrar maestros con más de 5 años de antigüedad
const maestrosAntiguos = maestros.filter(maestro => maestro.antiguedad > 5);
// filter() crea un nuevo array solo con los maestros que cumplen la condición (en este caso, más de 5 años de antigüedad).
console.log("Maestros con más de 5 años de antigüedad:");
console.log(maestrosAntiguos); 
// Imprime los maestros que cumplen con el filtro.

// Añadir la propiedad 'apellido' a cada alumno
alumnos[0].apellido = "Pérez"; // Añadiendo apellido a alumno1
alumnos[1].apellido = "García"; // Añadiendo apellido a alumno2
alumnos[2].apellido = "López";  // Añadiendo apellido a alumno3
console.log(alumnos);

// Eliminar la propiedad 'grado' de cada alumno
delete alumnos[0].grado; // Eliminar la propiedad 'grado' de alumno1
delete alumnos[1].grado; // Eliminar la propiedad 'grado' de alumno2
delete alumnos[2].grado; // Eliminar la propiedad 'grado' de alumno3
console.log(alumnos);


