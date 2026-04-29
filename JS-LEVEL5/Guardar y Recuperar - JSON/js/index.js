const hero = {
  name: 'Elliot',
  power: 'rayo',
  level: 92
};

const heroJSON = JSON.stringify(hero);
const recoveredHero = JSON.parse(heroJSON);

console.log(typeof heroJSON === 'string');
console.log(heroJSON.includes('Elliot') === true);
console.log(typeof recoveredHero === 'object');
console.log(recoveredHero.name === 'Elliot');
console.log(recoveredHero.level === 92);