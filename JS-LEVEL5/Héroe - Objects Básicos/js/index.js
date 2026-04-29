const hero = {
  name: 'Elliot',
  power: 'rayo',
  level: 95,
  active: false,
};
 
console.log(hero);
console.log(hero.name);
 
hero.active = true;
 
console.log(hero.name === 'Elliot');
console.log(hero.power === 'rayo');
console.log(hero.level === 95);
console.log(hero.active === true);
console.log(typeof hero === 'object');
 
 