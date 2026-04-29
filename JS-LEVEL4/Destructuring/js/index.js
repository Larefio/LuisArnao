const treasures = ['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla'];
 
// const first = treasures[0];
// const [first, second, ...restJewels] = ['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla'];
const [first, ...restJewels] = ['diamante', 'rubí', 'esmeralda', 'zafiro', 'perla'];
 
console.log(first);
// console.log(second);
console.log(restJewels);
 
let a = 5;
let b = 10;
 
[a, b] = [b, a];
 
console.log(first === 'diamante');
console.log(restJewels.length === 4);
console.log(a === 10 && b === 5);
console.log(typeof first === 'string');
console.log(Array.isArray(restJewels) === true);
 
 