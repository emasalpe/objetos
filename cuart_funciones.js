const alumno = { nombre: "Juan", edad: 15, grado: "10", promedio: 8.5 };
const alumno2 = { nombre: "Pedro", edad: 16, grado: "10", promedio: 7.5 };
const alumno3 = { nombre: "Emilio", edad: 17, grado: "10", promedio: 6.5 };

// Función para imprimir la información de un alumno
function imprimirInformacion(alumno) {
    console.log("Nombre: " + alumno.nombre);
    console.log("Edad: " + alumno.edad);
    console.log("Grado: " + alumno.grado);
    console.log("Promedio: " + alumno.promedio);
    console.log("-------------------------------------");

}

// Llamar a la función
imprimirInformacion(alumno);
imprimirInformacion(alumno2);
imprimirInformacion(alumno3);
