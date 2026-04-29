const heroes = [
  { name: 'Elliot', level: 92 },
  { name: 'Fernanda', level: 88 }
];
 
heroes.push({ name: 'Mijael', level: 99 });
 
heroes.forEach(hero => {
  console.log(`Hero: ${hero.name}, Level: ${hero.level}`);
});
 
console.log(heroes.length === 3);
console.log(heroes[0].name === 'Elliot');
console.log(heroes[0].level === 92);
console.log(heroes[2].name === 'Mijael');
console.log(Array.isArray(heroes) === true);
 