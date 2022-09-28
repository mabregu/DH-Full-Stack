const Animal = require('./Animal');
const Perro = require('./Perro');

const perro = new Animal("Pepe", "Mamifero");
const perro2 = new Perro("Pepe", "Mamifero", "Callejero");

// console.log(perro.obtenerNombre());
// console.log(perro.obtenerEspecie());

console.log(perro2.obtenerNombre());
console.log(perro2.establecerNombre("Ricardo"));
console.log(perro2.obtenerNombre());