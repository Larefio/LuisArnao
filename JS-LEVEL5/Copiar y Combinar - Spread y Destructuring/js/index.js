const recipe1 = { name: 'Pizza', time: 30 };
const recipe2 = { temp: 200, servings: 4 };
 
console.log(recipe1);
console.log(recipe2);
 
const fullRecipe = { ...recipe1, ...recipe2 };
console.log(fullRecipe);
 
const recipeCopy = { ...fullRecipe };
 
const { temp } = fullRecipe;
console.log(temp);
 
const { name: recipeName, time: cookTime } = fullRecipe;
 
console.log(fullRecipe.name === 'Pizza');
console.log(fullRecipe.temp === 200);
console.log(Object.keys(fullRecipe).length === 4);
console.log(recipeName === 'Pizza');
console.log(recipe1.name === 'Pizza');