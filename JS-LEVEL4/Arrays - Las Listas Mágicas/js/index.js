const mijaelClan = ['espada', 'escudo'];
const chocolateClan = ['arco', 'flecha'];
 
 
const backupClan = [...mijaelClan];
const unitedClan = [...mijaelClan, ...chocolateClan];
const clanWithAxe = ['hacha', ...mijaelClan, ...chocolateClan, 'lanza'];
 
 
console.log(backupClan.length === 2);
console.log(unitedClan.length === 4);
console.log(clanWithAxe[0] === 'hacha');
console.log(mijaelClan.length === 2);
console.log(Array.isArray(unitedClan) === true);
 
 