const suspects = [10, 25, 30, 25, 45, 30, 60];
 
const position25 = suspects.indexOf(25);
console.log(position25);
const position100 = suspects.indexOf(100);
console.log(position100);
const middleNumbers = suspects.slice(2, 5);
console.log(middleNumbers);
const lastThree = suspects.slice(-3);
console.log(lastThree);
 
console.log(position25 === 1);
console.log(position100 === -1);
console.log(middleNumbers.length === 3);
console.log(lastThree[0] === 45);
console.log(typeof position25 === 'number');