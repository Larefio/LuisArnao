const nombre = 'Luis Arnao';
const edad = 29;
const isAlone = true;

const pokemons = ['Pikachu', 'Bulbasur', 'Charmander'];
console.log(pokemons);
console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);

const fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Banana');
console.log('fruits'[1]);


// EJERCICIO 1

const colors = ['azul', 'morado', 'verde'];
console.log(colors);
colors[1] = 'blanco';
console.log(colors);
colors.push('negro');
console.log(colors);
console.log(colors.length);
colors.pop();
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.length);
 
console.log(colors.length === 2);
console.log(colors[0] === 'azul');
console.log(colors[colors.length - 1] === 'blanco');
console.log(colors[1] === 'blanco');
console.log(typeof colors === 'object');


