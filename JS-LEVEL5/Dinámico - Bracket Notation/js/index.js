const chest = { oro: 100, plata: 50, bronce: 25 };
 
const metal = 'plata';
 
// console.log(chest.oro);
// console.log(chest['oro']);
 
console.log(chest[metal]);
 
console.log(chest);
chest.bronce = 30;
console.log(chest);
console.log(chest.diamante);
chest.diamante = 200;
console.log(chest);
 
console.log(chest['oro'] === 100);
console.log(chest[metal] === 50);
console.log(chest['bronce'] === 30);
console.log(chest['diamante'] === 200);
console.log(Object.keys(chest).length === 4);
 
 