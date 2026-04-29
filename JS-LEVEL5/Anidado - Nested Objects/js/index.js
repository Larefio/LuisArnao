const kingdom = {
  name: 'Arendelle',
  king: { name: 'Fe', age: 35 },
  population: 5000
};
 
console.log(kingdom);
console.log(kingdom.king);
console.log(kingdom.king.name);
 
console.log(kingdom.king);
kingdom.king.age++;
kingdom.king.power = 'fuego';
console.log(kingdom.king);
 
console.log(kingdom.name === 'Arendelle');
console.log(kingdom.king.name === 'Fe');
console.log(kingdom.king.age === 36);
console.log(kingdom.king.power === 'fuego');
console.log(kingdom.population === 5000);