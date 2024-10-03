// Creación de objetos para los alumnos
const alumno1 = { 
                    nombre: "Juan", 
                    edad: 15, 
                    grado: "10", 
                    promedio: 8.5 
                };

                const alumno2 = {
                    nombre: "Pedro",
                    edad: 16,
                    grado: "11",
                    promedio: 9.0
                };

                const alumno3 = {
                    nombre: "Ana",
                    edad: 17,
                    grado: "12",
                    promedio: 9.5
                };

// const alumno4 = { nombre: "Carlos", edad: 15, grado: "10", promedio: 7.9 };

// ----------------------------------------------------------------------------------------------------------------------

// Función para imprimir un objeto de alumno en formato listado
function imprimirAlumno(alumno) {
    console.log("Nombre: " + alumno.nombre); // Imprime la propiedad 'nombre'
    console.log("Edad: " + alumno.edad);     // Imprime la propiedad 'edad'
    console.log("Grado: " + alumno.grado);   // Imprime la propiedad 'grado'
    console.log("Promedio: " + alumno.promedio); // Imprime la propiedad 'promedio'
    console.log("------------------------");  // Línea separadora para mejor legibilidad
}

// Imprimir cada alumno en formato listado - Opcion 1 con la funcion insertada
imprimirAlumno(alumno1);
imprimirAlumno(alumno2);
imprimirAlumno(alumno3);

// ------------------------------------------------------------------------------------------------------------------------

// Imprimir cada alumno en formato listado - Opcion 2 con la funcion insertada - Usando el metodo forEach

const alumnos = [alumno1, alumno2, alumno3]; // Array con los alumnos

// Recorrer el array e imprimir cada alumno en formato listado
alumnos.forEach(imprimirAlumno);
