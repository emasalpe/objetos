// Creación de objetos (cada producto tiene nombre, precio y categoría)
const producto1 = { 
  nombre: "Televisor",   // Nombre del producto
  precio: 300,           // Precio del producto
  categoria: "Electrónica" // Categoría del producto
};

const producto2 = { 
  nombre: "Lavadora",    
  precio: 400,           
  categoria: "Electrodoméstico" 
};

const producto3 = { 
  nombre: "Smartphone",  
  precio: 200,          
  categoria: "Electrónica" 
};

// Almacenar los objetos en un array
const productos = [producto1, producto2, producto3];  // Se crea un array que contiene los 3 productos
console.log(productos); // Mostrar el array de productos en la consola

// Ordenar productos por precio (de menor a mayor)
productos.sort((a, b) => a.precio - b.precio);  
// Se usa el método sort para comparar los precios de los productos y ordenarlos de menor a mayor

// Es lo mismo que poner una funcion en vez del arrow function " => "

productos.sort(function(a, b) {
  return a.precio - b.precio;
});

// Mostrar los productos ordenados
console.log("Productos ordenados por precio:");

productos.forEach(producto => {  
  // forEach recorre el array de productos y muestra cada uno en la consola
  console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);  
  // Mostrar el nombre y precio de cada producto en la consola
});

// productos.forEach(producto => {...}):

// forEach(): Es el método que recorre cada elemento del array productos.
// producto: Es un parámetro que representa cada elemento del array productos (en este caso, cada objeto producto). Que esta dentro de (...) llaves
// => {...}: Esta es la arrow function que se ejecuta para cada elemento en el array.
// console.log(...):

// Para cada producto del array, se ejecuta esta función. Se accede a las propiedades del objeto producto y se imprime el nombre y el precio en la consola con la sintaxis de template strings (${}).

// Filtrar productos por categoría 'Electrónica'
const productosElectronicos = productos.filter(producto => producto.categoria === "Electrónica");
// Se usa el método filter para crear un nuevo array con productos cuya categoría es 'Electrónica'

// Recordemos que el operador === en JavaScript es conocido como operador de igualdad estricta. Compara dos valores para verificar si son exactamente iguales tanto en valor como en tipo de dato.

console.log("Productos de categoría Electrónica:");
productosElectronicos.forEach(producto => {  
  // forEach recorre el array filtrado y muestra los productos de la categoría 'Electrónica'
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);  
  // Mostrar el nombre y precio de los productos de la categoría 'Electrónica'
});
