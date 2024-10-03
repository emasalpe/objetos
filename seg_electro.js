// Creación de objetos
const producto1 = { nombre: "Televisor", precio: 300, categoria: "Electrónica" };
const producto2 = { nombre: "Lavadora", precio: 400, categoria: "Electrodoméstico" };
const producto3 = { nombre: "Smartphone", precio: 200, categoria: "Electrónica" };

// Almacenar los objetos en un array
const productos = [producto1, producto2, producto3];
console.log(productos);

// Ordenar productos por precio (menor a mayor)
productos.sort((a, b) => a.precio - b.precio);

// Mostrar los productos ordenados
console.log("Productos ordenados por precio:");
productos.forEach(producto => {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

// Filtrar productos por categoría 'Electrónica'
const productosElectronicos = productos.filter(producto => producto.categoria === "Electrónica");

console.log("Productos de categoría Electrónica:");
productosElectronicos.forEach(producto => {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
